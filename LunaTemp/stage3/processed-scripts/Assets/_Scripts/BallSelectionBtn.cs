using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallSelectionBtn : MonoBehaviour
{
    [SerializeField] private GameObject _ballSelectionCanvas;
    [SerializeField] private GameObject _inGameCanvas;
    [SerializeField] private GameObject _ballCarousel;

    private void Start()
    {
        if (_ballSelectionCanvas == null || _inGameCanvas == null)
        {
            Debug.LogError("BallSelectionBtn: Canvas references are not set.");
            return;
        }

        _ballSelectionCanvas.SetActive(false);
        _ballCarousel.SetActive(false);
    }

    public void OnBallSelectionButtonClicked()
    {
        // Toggle the visibility of the ball selection canvas
        bool isActive = _ballSelectionCanvas.activeSelf;
        _ballSelectionCanvas.SetActive(!isActive);
        _inGameCanvas.SetActive(isActive); // Hide in-game canvas when ball selection is active
        _ballCarousel.SetActive(!isActive);
    }
    public void OnCloseButtonClicked()
    {
        // Hide the ball selection canvas and show the in-game canvas
        _ballSelectionCanvas.SetActive(false);
        _inGameCanvas.SetActive(true);
        _ballCarousel.SetActive(false);
    }
    public void OnBallSelected()
    {
        // Get the current ball's material from the carousel
        if (BallCarousel.Instance != null)
        {
            Material currentBallMaterial = BallCarousel.Instance.GetCurrentBallMaterial();
            
            if (currentBallMaterial != null && GameManager.Instance != null)
            {
                // Change all balls' material to match the selected ball
                GameManager.Instance.ChangeAllBallsMaterial(currentBallMaterial);
                Debug.Log("Changed all balls material to: " + currentBallMaterial.name);
            }
            else
            {
                Debug.LogWarning("BallSelectionBtn: Could not get current ball material or GameManager instance is null.");
            }
        }
        else
        {
            Debug.LogWarning("BallSelectionBtn: BallCarousel instance is null.");
        }
        
        _ballSelectionCanvas.SetActive(false);
        _inGameCanvas.SetActive(true);
        _ballCarousel.SetActive(false);
    }
}
