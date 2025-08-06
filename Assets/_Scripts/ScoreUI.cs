using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ScoreUI : MonoBehaviour
{
    private TextMeshProUGUI _scoreText;
    [SerializeField] private TextMeshProUGUI _perfectScoreText;
    private void Awake()
    {
        _scoreText = GetComponent<TextMeshProUGUI>();
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.onScoreChanged.AddListener(UpdateScoreDisplay);
            ScoreManager.Instance.onPerfectScore.AddListener(UpdatePerfectScoreDisplay);
        }
    }
    public void UpdateScoreDisplay()
    {
        if (ScoreManager.Instance != null)
        {
            _scoreText.text = ScoreManager.Instance.score.ToString();
            _perfectScoreText.text = ""; // Clear perfect score text
        }
    }
    public void UpdatePerfectScoreDisplay()
    {
        if (ScoreManager.Instance != null)
        {
            _perfectScoreText.text = "PERFECT!";
        }
    }
}
