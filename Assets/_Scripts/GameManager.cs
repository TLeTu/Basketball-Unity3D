using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    private bool _touchedRim = false;
    private bool _readyForGoal = false;
    private float _perfectTimer = 0f;
    private const float PERFECT_THRESHOLD = 0.2f; // seconds
    [SerializeField] private GameObject[] _balls;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    private void Update()
    {
        if (_readyForGoal)
        {
            _perfectTimer += Time.deltaTime;
        }
    }

    public void OnHoopEntered(HoopTrigger.HoopType hoopType)
    {
        if (hoopType == HoopTrigger.HoopType.Lower)
        {
            if (_readyForGoal)
            {
                if (_perfectTimer <= PERFECT_THRESHOLD && !_touchedRim)
                {
                    // Perfect score!
                    if (ScoreManager.Instance != null)
                    {
                        ScoreManager.Instance.AddScore(2); // Perfect shot
                        Debug.Log("Perfect score!");
                        _touchedRim = false; // Reset rim touch state
                    }
                }
                else
                {
                    // Normal score
                    if (ScoreManager.Instance != null)
                    {
                        Debug.Log("Normal score!");
                        ScoreManager.Instance.AddScore(1);
                    }
                }
                _readyForGoal = false;
                _perfectTimer = 0f;
            }
        }
    }

    public void OnHoopExited(HoopTrigger.HoopType hoopType)
    {
        if (hoopType == HoopTrigger.HoopType.Higher)
        {
            _readyForGoal = true; // Ball exited higher, now ready for lower
            _perfectTimer = 0f; // Start timing for perfect score
        }
    }

    public void OnRimTouched()
    {
        _touchedRim = true;
    }

    private void AddScore(int points)
    {
        // Reset the score or perform any necessary allocation logic
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.AddScore(points);
        }
    }

    // Change the material of all balls in the game
    public void ChangeAllBallsMaterial(Material newMaterial)
    {
        if (_balls == null || _balls.Length == 0)
        {
            Debug.LogWarning("GameManager: No balls assigned in the _balls array.");
            return;
        }

        if (newMaterial == null)
        {
            Debug.LogWarning("GameManager: Material parameter is null.");
            return;
        }

        foreach (GameObject ball in _balls)
        {
            if (ball == null)
            {
                Debug.LogWarning("GameManager: Found null ball in _balls array.");
                continue;
            }

            BallController ballController = ball.GetComponent<BallController>();
            if (ballController != null)
            {
                ballController.ChangeBallMaterial(newMaterial);
            }
            else
            {
                Debug.LogWarning($"GameManager: No BallController component found on {ball.name}.");
            }
        }
    }
}
