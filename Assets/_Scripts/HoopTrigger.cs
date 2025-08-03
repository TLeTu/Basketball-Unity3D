using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HoopTrigger : MonoBehaviour
{
    public enum HoopType { Higher, Lower }
    public HoopType hoopType;

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("ballTag"))
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnHoopEntered(hoopType);
            }
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("ballTag"))
        {
            if (GameManager.Instance != null)
            {
                GameManager.Instance.OnHoopExited(hoopType);
            }
        }
    }
}