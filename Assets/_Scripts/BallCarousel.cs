using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallCarousel : MonoBehaviour
{
    private bool isDragging = false;
    private float lastMouseX;
    public float rotationSpeed = 5f;
    [SerializeField] private GameObject[] balls;
    private GameObject currentBall;

    void Update()
    {
        // Mouse input
        if (Input.GetMouseButtonDown(0))
        {
            isDragging = true;
            lastMouseX = Input.mousePosition.x;
        }
        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
            currentBall = GetBallFacingCamera();
            if (currentBall != null)
            {
                Debug.Log("Current Ball: " + currentBall.GetComponent<BallSelection>().ballName);
                // Do something with the current ball
            }
        }
        if (isDragging)
        {
            float mouseX = Input.mousePosition.x;
            float deltaX = mouseX - lastMouseX;
            // Rotate in the opposite direction of drag
            transform.Rotate(0, -deltaX * rotationSpeed * Time.deltaTime, 0);
            lastMouseX = mouseX;
        }

        // Touch input
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            switch (touch.phase)
            {
                case TouchPhase.Began:
                    isDragging = true;
                    lastMouseX = touch.position.x;
                    break;
                case TouchPhase.Moved:
                case TouchPhase.Stationary:
                    if (isDragging)
                    {
                        float touchX = touch.position.x;
                        float deltaX = touchX - lastMouseX;
                        transform.Rotate(0, -deltaX * rotationSpeed * Time.deltaTime, 0);
                        lastMouseX = touchX;
                    }
                    break;
                case TouchPhase.Ended:
                case TouchPhase.Canceled:
                    isDragging = false;
                    currentBall = GetBallFacingCamera();
                    if (currentBall != null)
                    {
                        Debug.Log("Current Ball: " + currentBall.GetComponent<BallSelection>().ballName);
                        // Do something with the current ball
                    }
                    break;
            }
        }
    }

    private GameObject GetBallFacingCamera()
    {
        Camera cam = Camera.main;
        if (cam == null || balls == null || balls.Length == 0) return null;

        Vector3 carouselPosition = transform.position;
        Vector3 cameraForward = cam.transform.forward;
        cameraForward.y = 0; // Project onto XZ plane
        cameraForward.Normalize();

        // float maxDot = float.NegativeInfinity;
        float minDot = float.PositiveInfinity;
        GameObject facingBall = null;

        foreach (GameObject ball in balls)
        {
            if (ball == null) continue;
            Vector3 toBall = (ball.transform.position - carouselPosition).normalized;
            toBall.y = 0; // Project onto XZ plane
            float dot = Vector3.Dot(cameraForward, toBall);
            if (dot < minDot)
            {
                minDot = dot;
                facingBall = ball;
            }
        }
        return facingBall;
    }
}
