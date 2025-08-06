using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ScoreManager : MonoBehaviour
{
    public static ScoreManager Instance { get; private set; }
    public UnityEvent onScoreChanged;
    public UnityEvent onPerfectScore;
    public int score { get; private set; }

    private void Awake()
    {
        score = 0;
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    public void AddScore(int points, bool perfect = false)
    {

        score += points;
        Debug.Log("Score updated: " + score);
        onScoreChanged.Invoke();
        if (perfect)
        {
            onPerfectScore.Invoke();
            Debug.Log("Perfect score achieved!");
        }
    }
}
