using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LaunchControl : MonoBehaviour
{
    public GameObject landingTarget;
    public float yMax;
    public float g = 20f; // gravity
    private float y_0;
    private float x;
    private float z;

    void Start()
    {
        // Set the landingTarget to be the object with the tag "Hoop"
        if (landingTarget == null)
        {
            landingTarget = GameObject.FindGameObjectWithTag("Hoop");
        }
    }
    // private void Update()
    // {
    //     // left click to launch the ball
    //     if (Input.GetMouseButtonDown(0))
    //     {
    //         LaunchBall(this.gameObject);
    //     }
    // }
    public void LaunchBall(GameObject launchObject)
    {
        // Log 
        Debug.Log("Launching ball with LaunchControl");
        y_0 = this.transform.position.y - landingTarget.transform.position.y;
        // Use the position directly under the ball (this) for x and z
        x = landingTarget.transform.position.x - this.transform.position.x;
        z = landingTarget.transform.position.z - this.transform.position.z;
        // Launch this using rigid body
        Rigidbody thisBody = launchObject.GetComponent<Rigidbody>();
        thisBody.velocity = CalculateVelocity();

    }

    Vector3 CalculateVelocity()
    {   
        // Distance X and Z to target location
        Vector3 displacementXZ = new Vector3(x, 0, z);

        // Implement equations derived from kinematic analysis
        Vector3 velocityY = Vector3.up*Mathf.Sqrt(2*g*(yMax - y_0));
        Vector3 velocityXZ = displacementXZ/(Mathf.Sqrt(2*(yMax - y_0)/g) + Mathf.Sqrt(2*yMax/g));
        
        Vector3 velocity = velocityXZ + velocityY;
        return velocity;
    }

}