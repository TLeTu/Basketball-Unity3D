using UnityEngine;

public class BallController : MonoBehaviour
{
    private bool isHoldingBall = false;
    private Vector3 startPosition;
    private Vector3 endPosition;
    private Rigidbody rb;

    public float throwForceMultiplier = 1.5f;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        rb.isKinematic = true;
    }

    void OnMouseDown()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            isHoldingBall = true;
            startPosition = Input.GetTouch(0).position;
            Debug.Log("Player is holding the ball.");
        }
        else if (Input.GetMouseButtonDown(0))
        {
            isHoldingBall = true;
            startPosition = Input.mousePosition;
            Debug.Log("Player is holding the ball with mouse.");
        }
    }

    void OnMouseUp()
    {
        if (isHoldingBall)
        {
            if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended)
            {
                endPosition = Input.GetTouch(0).position;
            }
            else
            {
                endPosition = Input.mousePosition;
            }

            isHoldingBall = false;
            ThrowBall();
            Debug.Log("Player released the ball.");
        }
    }

    void ThrowBall()
    {
        rb.isKinematic = false;
        Vector3 throwDirection = (endPosition - startPosition);
        Vector3 force = new Vector3(throwDirection.x, throwDirection.y, throwDirection.y) * throwForceMultiplier;
        rb.AddForce(force);
    }
}
