using UnityEngine;

public class BallController : MonoBehaviour
{
    Vector3 _mousePosition;

    private Vector3 GetMousePos()
    {
        return Camera.main.WorldToScreenPoint(transform.position);
    }
    
    private void OnMouseDown() {
        Debug.Log("Clicking");
        _mousePosition = Input.mousePosition - GetMousePos();
    }

    private void OnMouseDrag() {
        Debug.Log("Dragging");
        transform.position = Camera.main.ScreenToWorldPoint(Input.mousePosition - _mousePosition);
    }
}