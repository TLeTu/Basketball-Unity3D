using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
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
    public float _minSwipeDistance = 50f; // Minimum swipe distance in pixels
    public float minSwipeSpeed = 1000f;   // Minimum swipe speed in pixels/sec

    // Drag movement
    public float dragSpeed = 10f;
    #endregion

    #region Unity Methods
    private void Awake()
    {
        // Cache references
        _rb = GetComponent<Rigidbody>();
        _mainCamera = Camera.main;
        _launchControl = FindObjectOfType<LaunchController>();
    }


    private void HandlePointerDown(Vector3 pointerPosition)
    {
        _rb.useGravity = false;
        _mousePosition = pointerPosition - GetMousePos();
        _dragStartPos = pointerPosition;
        _dragStartTime = Time.time;
    }

    private void OnMouseDown()
    {
        HandlePointerDown(Input.mousePosition);
    }


    private void HandlePointerDrag(Vector3 pointerPosition)
    {
        _isDragging = true;
        _targetPosition = _mainCamera.ScreenToWorldPoint(pointerPosition - _mousePosition);
    }

    private void OnMouseDrag()
    {
        HandlePointerDrag(Input.mousePosition);
    }


    private void HandlePointerUp(Vector3 pointerPosition)
    {
        _isDragging = false;
        _rb.useGravity = true;
        _dragEndPos = pointerPosition;
        _dragEndTime = Time.time;

        // Calculate swipe vector, duration, and speed
        Vector3 swipe = _dragEndPos - _dragStartPos;
        float swipeDuration = _dragEndTime - _dragStartTime;
        float swipeSpeed = swipe.magnitude / Mathf.Max(swipeDuration, 0.001f); // pixels/sec

        // Launch only if swipe is upward, long enough, and fast enough
        if (swipe.magnitude > _minSwipeDistance && swipe.y > Mathf.Abs(swipe.x) && swipeSpeed > minSwipeSpeed)
        {
            if (_launchControl != null)
            {
                _launchControl.LaunchBall(gameObject);
            }
            else
            {
                Debug.LogWarning("LaunchControl not found in the scene.");
            }
        }
        // else: just drop the ball, gravity will take over
    }

    private void OnMouseUp()
    {
        HandlePointerUp(Input.mousePosition);
    }
    private void Update()
    {
        // Touch input support
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            switch (touch.phase)
            {
                case TouchPhase.Began:
                    HandlePointerDown(touch.position);
                    break;
                case TouchPhase.Moved:
                case TouchPhase.Stationary:
                    HandlePointerDrag(touch.position);
                    break;
                case TouchPhase.Ended:
                case TouchPhase.Canceled:
                    HandlePointerUp(touch.position);
                    break;
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

    #region Helper Methods
    // Get the mouse position in screen space for the ball
    private Vector3 GetMousePos()
    {
        return _mainCamera.WorldToScreenPoint(transform.position);
    }

    // Simulate rolling rotation based on velocity
    private void ApplyRollingEffect(Vector3 velocity)
    {
        if (velocity.sqrMagnitude < 0.001f) return; // Ignore if not moving

        float radius = transform.localScale.x * 0.5f; // Assumes uniform scaling (sphere)
        Vector3 rotationAxis = Vector3.Cross(Vector3.up, velocity.normalized);
        float angularDistance = velocity.magnitude * Time.fixedDeltaTime / radius;
        Quaternion deltaRotation = Quaternion.AngleAxis(Mathf.Rad2Deg * angularDistance, rotationAxis);
        transform.rotation = deltaRotation * transform.rotation;
    }
    #endregion
}