using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
    private Camera _mainCamera;
    private LaunchControl _launchControl;
    private Rigidbody _rb;
    private Vector3 _mousePosition;
    private bool _isDragging = false;

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
        _mousePosition = Input.mousePosition - GetMousePos();
    }

    private void OnMouseDrag()
    {
        _isDragging = true;
        Vector3 targetPosition = _mainCamera.ScreenToWorldPoint(Input.mousePosition - _mousePosition);
        _rb.MovePosition(targetPosition);
    }

    private void OnMouseUp()
    {
        _isDragging = false;
        if (_launchControl != null)
        {
            _launchControl.LaunchBall(gameObject);
        }
        else
        {
            Debug.LogWarning("LaunchControl not found in the scene.");
        }
    }

    private void FixedUpdate()
    {
        if (!_isDragging)
        {
            ApplyRollingEffect(_rb.velocity);
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