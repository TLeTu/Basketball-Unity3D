using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackBtn : MonoBehaviour
{
    [SerializeField] private float _animationSpeed = 1f;

    private void Update()
    {
        // Move the tranform back and forth from -100 to -115 on the X-axis
        float newX = Mathf.PingPong(Time.time * _animationSpeed, 15f) - 100f;
        transform.localPosition = new Vector3(newX, transform.localPosition.y, transform.localPosition.z);
    }
}
