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
}
