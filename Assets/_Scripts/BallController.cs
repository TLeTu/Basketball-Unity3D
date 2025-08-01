using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
    private Camera _mainCamera;
    private LaunchControl _launchControl;
    private Rigidbody _rb;
    private Vector3 _mousePosition;
    private Vector3 _targetPosition;
    private bool _isDragging = false;
    private Vector3 _dragStartPos;
    private Vector3 _dragEndPos;
    private float _dragStartTime;
    private float _dragEndTime;
    public float _minSwipeDistance = 50f; // pixels, adjust as needed
    public float minSwipeSpeed = 1000f; // pixels per second, adjust as needed

    public float dragSpeed = 10f;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody>();
        _mainCamera = Camera.main;
        _launchControl = FindObjectOfType<LaunchControl>();
    }

    private Vector3 GetMousePos()
    {
        return _mainCamera.WorldToScreenPoint(transform.position);
    }

    private void OnMouseDown()
    {
        _rb.useGravity = false; // Disable gravity while dragging
        _mousePosition = Input.mousePosition - GetMousePos();
        _dragStartPos = Input.mousePosition;
        _dragStartTime = Time.time;
    }

    private void OnMouseDrag()
    {
        _isDragging = true;
        _targetPosition = _mainCamera.ScreenToWorldPoint(Input.mousePosition - _mousePosition);
    }

    private void OnMouseUp()
    {
        _isDragging = false;
        _rb.useGravity = true; // Re-enable gravity after dragging
        _dragEndPos = Input.mousePosition;
        _dragEndTime = Time.time;

        Vector3 swipe = _dragEndPos - _dragStartPos;
        float swipeDuration = _dragEndTime - _dragStartTime;
        float swipeSpeed = swipe.magnitude / Mathf.Max(swipeDuration, 0.001f); // pixels per second

        // Check if swipe is upward, long enough, and fast enough
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
            // ApplyRollingEffect(_rb.velocity);
        }

    }


    private void ApplyRollingEffect(Vector3 velocity)
    {
        if (velocity.sqrMagnitude < 0.001f) return; // Ignore if not moving

        float radius = transform.localScale.x * 0.5f; // Assumes uniform scaling (sphere)
        Vector3 rotationAxis = Vector3.Cross(Vector3.up, velocity.normalized);
        float angularDistance = velocity.magnitude * Time.fixedDeltaTime / radius;
        Quaternion deltaRotation = Quaternion.AngleAxis(Mathf.Rad2Deg * angularDistance, rotationAxis);
        transform.rotation = deltaRotation * transform.rotation;
    }


}