using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpriteRender : MonoBehaviour
{
    // get the camera component
    [SerializeField] private Camera _camera;

    [Header("Billboard Settings")]
    [SerializeField] private bool lockYAxis = false; // If true, only rotates on Y axis (good for ground sprites)
    [SerializeField] private bool reverseDirection = false; // If true, sprite faces away from camera

    [Header("Animation Settings")]
    [SerializeField] private bool enableYAnimation = true; // Enable up/down movement
    [SerializeField] private float _animationSpeed = 1f; // Speed of the animation
    [SerializeField] private float _animationRange = 2f; // How far up and down to move
    [SerializeField] private float _baseYPosition = 0f; // Base Y position (center of movement)

    void Start()
    {
        // If no camera is assigned, use the main camera
        if (_camera == null)
        {
            _camera = Camera.main;

            // If still no camera found, find any camera in the scene
            if (_camera == null)
            {
                _camera = FindObjectOfType<Camera>();
            }
        }

        // Store the initial Y position as the base position
        _baseYPosition = transform.localPosition.y;
        // Disable the sprite renderer by default
        this.gameObject.SetActive(false); // Start with the sprite disabled
    }

    void Update()
    {
        // Handle Y-axis animation (up and down movement)
        if (enableYAnimation)
        {
            // Move the sprite up and down using PingPong
            float newY = Mathf.PingPong(Time.time * _animationSpeed, _animationRange) + (_baseYPosition - _animationRange / 2f);
            transform.localPosition = new Vector3(transform.localPosition.x, newY, transform.localPosition.z);
        }

        // Make sure we have a camera reference
        if (_camera == null) return;

        // Calculate the direction from sprite to camera
        Vector3 directionToCamera = _camera.transform.position - transform.position;

        // If reverse direction is enabled, flip the direction
        if (reverseDirection)
        {
            directionToCamera = -directionToCamera;
        }

        // If lock Y axis is enabled, keep the sprite upright
        if (lockYAxis)
        {
            directionToCamera.y = 0;
        }

        // Only rotate if we have a valid direction
        if (directionToCamera != Vector3.zero)
        {
            // Create rotation that looks at the camera
            Quaternion targetRotation = Quaternion.LookRotation(directionToCamera);

            // Apply the rotation to make the sprite face the camera
            transform.rotation = targetRotation;
        }
    }

}
