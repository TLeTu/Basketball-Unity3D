using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    public AudioClip collisionSound; // Sound played on collision
    private AudioSource _audioSource;
    private void Awake()
    {
        _audioSource = GetComponent<AudioSource>();
        if (_audioSource == null)
        {
            _audioSource = gameObject.AddComponent<AudioSource>();
        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        // Play collision sound if assigned
        if (collisionSound != null && _audioSource != null)
        {
            float volume = Mathf.Clamp01(collision.relativeVelocity.magnitude / 10f); // Adjust volume based on collision speed
            _audioSource.PlayOneShot(collisionSound, volume);
        }
    }
}
