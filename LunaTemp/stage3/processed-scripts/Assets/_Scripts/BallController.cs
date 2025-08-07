using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
    // Static reference to the currently dragged ball
    private static BallController _currentlyDraggingBall = null;
    #region Fields & Properties
    // References
    private Camera _mainCamera;
    private LaunchController _launchControl;
    private Rigidbody _rb;

    // Dragging state
    private bool _isDragging = false;
    private Vector3 _mousePosition;
    private Vector3 _targetPosition;

    // Swipe detection
    private Vector3 _dragStartPos;
    private Vector3 _dragEndPos;
    private float _dragStartTime;
    private float _dragEndTime;

    // Drag movement
    public float dragSpeed = 10f;

    // Swipe sensitivity
    public float swipeThreshold = 1000f; // Tune this to match your desired swipe sensitivity
    #endregion

    #region Unity Methods
    private void Awake()
    {
        // Cache references
        _rb = GetComponent<Rigidbody>();
        _mainCamera = Camera.main;
        _launchControl = FindObjectOfType<LaunchController>();
    }


    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            // Raycast to see if this ball is under the mouse
            Ray ray = _mainCamera.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit))
            {
                BallController ball = hit.collider.GetComponent<BallController>();
                if (ball == this)
                {
                    _currentlyDraggingBall = this;
                    HandlePointerDown(Input.mousePosition);
                }
            }
        }
        else if (Input.GetMouseButton(0))
        {
            if (_currentlyDraggingBall == this)
            {
                HandlePointerDrag(Input.mousePosition);
            }
        }
        else if (Input.GetMouseButtonUp(0))
        {
            if (_currentlyDraggingBall == this)
            {
                HandlePointerUp(Input.mousePosition);
                _currentlyDraggingBall = null;
            }
        }
    }



    private void FixedUpdate()
    {
        if (_isDragging)
        {
            // Lerp towards the target position while dragging
            Vector3 desiredPosition = Vector3.Lerp(transform.position, _targetPosition, dragSpeed * Time.fixedDeltaTime);

            // Prevent tunneling using raycast
            Vector3 currentPosition = transform.position;
            Vector3 direction = desiredPosition - currentPosition;
            Ray ray = new Ray(currentPosition, direction);
            RaycastHit hit;

            if (!Physics.Raycast(ray, out hit, direction.magnitude))
                _rb.MovePosition(desiredPosition);
            else
                _rb.MovePosition(hit.point);
        }
        else
        {
            // Apply rolling effect when not dragging
            ApplyRollingEffect(_rb.velocity);
        }
    }
    #endregion

    #region Input Handling
    private void HandlePointerDown([Bridge.Ref] Vector3 pointerPosition)
    {
        _rb.useGravity = false;
        _mousePosition = pointerPosition - GetMousePos();
        _dragStartPos = pointerPosition;
        _dragStartTime = Time.time;
    }

    private void HandlePointerDrag([Bridge.Ref] Vector3 pointerPosition)
    {
        _isDragging = true;
        _targetPosition = _mainCamera.ScreenToWorldPoint(pointerPosition - _mousePosition);
    }

    private void HandlePointerUp([Bridge.Ref] Vector3 pointerPosition)
    {
        _isDragging = false;
        _rb.useGravity = true;
        _dragEndPos = pointerPosition;
        _dragEndTime = Time.time;

        // Calculate swipe vector and speed
        Vector3 swipeVector = _dragEndPos - _dragStartPos;
        float swipeDuration = _dragEndTime - _dragStartTime;
        float swipeSpeed = swipeVector.magnitude / swipeDuration;

        Debug.Log($"Swipe Speed: {swipeSpeed}");

        if (swipeSpeed > swipeThreshold)
        {
            if (_launchControl != null)
            {
                _launchControl.LaunchBall(gameObject, swipeVector.normalized * swipeSpeed);
            }
            else
            {
                Debug.LogWarning("LaunchControl not found in the scene.");
            }
        }
        else
        {
            Debug.Log("Swipe too slow — ball dropped without launch.");
            // Let the ball drop naturally
        }
    }
    #endregion

    #region Helper Methods
    private Vector3 GetMousePos()
    {
        return _mainCamera.WorldToScreenPoint(transform.position);
    }

    public void ChangeBallMaterial(Material newMaterial)
    {
        Transform ballMeshTransform = transform.Find("ballMesh");

        if (ballMeshTransform != null)
        {
            Renderer ballRenderer = ballMeshTransform.GetComponent<Renderer>();
            if (ballRenderer != null)
            {
                ballRenderer.material = newMaterial;
            }
            else
            {
                Debug.LogWarning("No Renderer component found on ballMesh child object.");
            }
        }
        else
        {
            Debug.LogWarning("ballMesh child object not found. Make sure the child object is named 'ballMesh'.");
        }
    }

    private void ApplyRollingEffect([Bridge.Ref] Vector3 velocity)
    {
        if (velocity.sqrMagnitude < 0.001f) return;

        float radius = transform.localScale.x * 0.5f;
        Vector3 rotationAxis = Vector3.Cross(Vector3.up, velocity.normalized);
        float angularDistance = velocity.magnitude * Time.fixedDeltaTime / radius;
        Quaternion deltaRotation = Quaternion.AngleAxis(Mathf.Rad2Deg * angularDistance, rotationAxis);
        transform.rotation = deltaRotation * transform.rotation;
    }
    #endregion
}
