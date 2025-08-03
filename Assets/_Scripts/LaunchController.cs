using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LaunchController : MonoBehaviour
{
    #region Fields & Properties
    // Target to land the ball (usually the hoop)
    public GameObject landingTarget;
    // Maximum height for the launch arc
    public float yMax;
    // Gravity value used for calculations
    public float g = 20f;

    // Internal variables for launch calculations
    private float y_0;
    private float x;
    private float z;
    #endregion

    #region Unity Methods
    void Start()
    {
        // Find the landing target by tag if not set in inspector
        if (landingTarget == null)
        {
            landingTarget = GameObject.FindGameObjectWithTag("Hoop");
        }
    }
    #endregion

    #region Launch Methods
    /// <summary>
    /// Launches the ball toward the landing target using kinematic equations.
    /// </summary>
    /// <param name="launchObject">The ball GameObject to launch.</param>
    public void LaunchBall(GameObject launchObject)
    {
        Debug.Log("Launching ball with LaunchControl");
        // Calculate relative positions
        y_0 = launchObject.transform.position.y - landingTarget.transform.position.y;
        x = landingTarget.transform.position.x - launchObject.transform.position.x;
        z = landingTarget.transform.position.z - launchObject.transform.position.z;

        // Launch using rigidbody velocity
        Rigidbody thisBody = launchObject.GetComponent<Rigidbody>();
        thisBody.velocity = CalculateVelocity();
    }

    /// <summary>
    /// Calculates the velocity vector needed to reach the landing target.
    /// </summary>
    /// <returns>Velocity vector for the launch.</returns>
    private Vector3 CalculateVelocity()
    {
        // Distance X and Z to target location
        Vector3 displacementXZ = new Vector3(x, 0, z);

        // Kinematic analysis for arc
        Vector3 velocityY = Vector3.up * Mathf.Sqrt(2 * g * (yMax - y_0));
        Vector3 velocityXZ = displacementXZ / (Mathf.Sqrt(2 * (yMax - y_0) / g) + Mathf.Sqrt(2 * yMax / g));

        Vector3 velocity = velocityXZ + velocityY;
        return velocity;
    }
    #endregion
}