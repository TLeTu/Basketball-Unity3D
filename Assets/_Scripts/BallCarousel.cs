using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallCarousel : MonoBehaviour
{
    private bool isDragging = false;
    private float lastMouseX;
    public float rotationSpeed = 5f;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            isDragging = true;
            lastMouseX = Input.mousePosition.x;
        }
        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
        }
        if (isDragging)
        {
            float mouseX = Input.mousePosition.x;
            float deltaX = mouseX - lastMouseX;
            // Rotate in the opposite direction of drag
            transform.Rotate(0, -deltaX * rotationSpeed * Time.deltaTime, 0);
            lastMouseX = mouseX;
        }
    }
}
