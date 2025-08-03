using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ScoreManager : MonoBehaviour
{
    public static ScoreManager Instance { get; private set; }
    public UnityEvent onScoreChanged;
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

    public void AddScore(int points)
    {
        score += points;
        Debug.Log("Score updated: " + score);
        onScoreChanged.Invoke();
    }
}
