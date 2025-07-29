using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
    private Rigidbody _rb;
    private Camera _mainCamera;
    private bool _dragging;
    private Vector3 _offset;
    private float _zDepth;
    private Vector3 _targetPosition;

    public float dragSpeed = 10f;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody>();
        _mainCamera = Camera.main;
    }

    private void OnMouseDown()
    {
        if (_mainCamera == null) return;

        // Store depth of object from camera
        _zDepth = _mainCamera.WorldToScreenPoint(transform.position).z;

        // Get mouse world position at that depth
        Vector3 mouseWorld = _mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, _zDepth));
        _offset = transform.position - mouseWorld;

        _dragging = true;
        _rb.isKinematic = false;
    }

    private void OnMouseDrag()
    {
        if (_mainCamera == null || !_dragging) return;

        // Calculate mouse world position and add offset
        Vector3 mouseWorld = _mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, _zDepth));
        _targetPosition = mouseWorld + _offset;
    }

    private void OnMouseUp()
    {
        _dragging = false;
    }

    private void FixedUpdate()
    {
        if (_dragging)
        {
            Vector3 direction = _targetPosition - transform.position;
            _rb.velocity = direction * dragSpeed;
        }

        // Always apply visual rolling when the ball is moving
        ApplyRollingEffect(_rb.velocity);
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