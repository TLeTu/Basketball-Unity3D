using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    private bool _touchedRim = false;
    private bool _readyForGoal = false;
    private float _perfectTimer = 0f;
    [SerializeField] private const float PERFECT_THRESHOLD = 100f; // seconds
    [SerializeField] private GameObject[] _balls;
    public AudioClip passSound;
    public AudioClip backgroundMusic; // Added for background music
    public AudioClip perfectSound; // Sound played on perfect score
    private AudioSource _audioSource;
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
        _audioSource = GetComponent<AudioSource>();
    }
    private void Start()
    {

        if (backgroundMusic != null && _audioSource != null)
        {
            _audioSource.clip = backgroundMusic;
            _audioSource.loop = true;
            _audioSource.Play();
        }
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
                // Play pass sound if assigned
                if (passSound != null && _audioSource != null)
                {
                    _audioSource.PlayOneShot(passSound, 2f); // Play with a higher volume of 0.5f
                }
                if (_perfectTimer <= PERFECT_THRESHOLD && !_touchedRim)
                {
                    if (perfectSound != null && _audioSource != null)
                    {
                        _audioSource.PlayOneShot(perfectSound, 2f); // Play with a higher volume of 1f
                    }
                    // Perfect score!
                    if (ScoreManager.Instance != null)
                    {
                        ScoreManager.Instance.AddScore(2, true); // Perfect shot
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
                        ScoreManager.Instance.AddScore(1, false); // Normal shot
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

    private void AddScore(int points, bool perfect)
    {
        // Reset the score or perform any necessary allocation logic
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.AddScore(points, perfect);
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
