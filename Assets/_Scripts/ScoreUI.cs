using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ScoreUI : MonoBehaviour
{
    private TextMeshProUGUI _scoreText;
    private void Awake()
    {
        _scoreText = GetComponent<TextMeshProUGUI>();
        if (ScoreManager.Instance != null)
        {
            ScoreManager.Instance.onScoreChanged.AddListener(UpdateScoreDisplay);
        }
    }
    public void UpdateScoreDisplay()
    {
        if (ScoreManager.Instance != null)
        {
            _scoreText.text = ScoreManager.Instance.score.ToString();
        }
    }
}
