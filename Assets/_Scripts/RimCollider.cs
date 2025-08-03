using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RimCollider : MonoBehaviour
{
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ball"))
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnRimTouched();
            }
        }
    }
}
