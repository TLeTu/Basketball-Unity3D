using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateRing : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 5f;

    void Update()
    {
        // Slowly rotate the ring around its Z-axis
        transform.Rotate(0, 0, -rotationSpeed * Time.deltaTime);
    }
}
