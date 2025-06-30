using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public static PlayerController Instance { get; private set; }

    [SerializeField] float moveForce = 5f;
    [SerializeField] float maxSpeed = 5f;

    Rigidbody rb;

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        rb = GetComponent<Rigidbody>();
    }

    public void RollSphere(Vector3 direction)
    {
        rb.AddForce(direction * moveForce, ForceMode.Force);

        // Clamp max velocity
        Vector3 horizontalVelocity = new Vector3(rb.velocity.x, 0f, rb.velocity.z);
        if (horizontalVelocity.magnitude > maxSpeed)
        {
            Vector3 clamped = horizontalVelocity.normalized * maxSpeed;
            rb.velocity = new Vector3(clamped.x, rb.velocity.y, clamped.z);
        }
    }

    public void CancelMovement()
    {
        rb.velocity = Vector3.zero;
    }

    public void AdjustSpeed(float value)
    {
        maxSpeed += value;
    }

    public void AdjustScale(float value)
    {
        transform.localScale = new Vector3(transform.localScale.x + value,transform.localScale.y + value,transform.localScale.z + value);
    }
}
