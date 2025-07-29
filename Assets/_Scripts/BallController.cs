using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class BallController : MonoBehaviour
{
    private Vector3 _mousePosition;
    private Rigidbody _rb;
    private Camera _mainCamera;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody>();
        _mainCamera = Camera.main;
    }

    private Vector3 GetMousePos()
    {
        if (_mainCamera == null)
        {
            return Vector3.zero;
        }
        return _mainCamera.WorldToScreenPoint(transform.position);
    }
    
    private void OnMouseDown() {
        Debug.Log("Clicking");
        _mousePosition = Input.mousePosition - GetMousePos();
        _rb.isKinematic = true;
    }

    private void OnMouseUp()
    {
        _rb.isKinematic = false;
    }

    private void OnMouseDrag() {
        if (_mainCamera == null)
        {
            return;
        }
        Debug.Log("Dragging");
        _rb.MovePosition(_mainCamera.ScreenToWorldPoint(Input.mousePosition - _mousePosition));
    }
}