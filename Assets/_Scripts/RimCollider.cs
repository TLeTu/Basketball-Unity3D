using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RimCollider : MonoBehaviour
{
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("ballTag"))
        {
            if (GameManager.Instance != null)
            {
                Debug.Log("Rim touched by ball");
                GameManager.Instance.OnRimTouched();
            }
        }
    }
}
