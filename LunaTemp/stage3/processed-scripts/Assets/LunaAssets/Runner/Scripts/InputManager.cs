using UnityEngine;

public class InputManager : MonoBehaviour
{
    public static InputManager Instance => s_Instance;
    static InputManager s_Instance;

    [SerializeField]
    float m_InputSensitivity = 5f;

    bool m_HasInput;
    Vector3 m_InputPosition;
    Vector3 m_DragOrigin;

    void Awake()
    {
        if (s_Instance != null && s_Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        s_Instance = this;
    }

    void Update()
    {
        if (PlayerController.Instance == null)
            return;

        m_InputPosition = Input.mousePosition;

        if (Input.GetMouseButtonDown(0))
        {
            m_DragOrigin = m_InputPosition;
            m_HasInput = true;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            m_HasInput = false;
            PlayerController.Instance.CancelMovement(); // Optional — remove if you want it to keep moving
        }

        if (m_HasInput)
        {
            Vector2 dragVector = m_InputPosition - m_DragOrigin;

            // Normalize screen drag vector relative to screen size
            float horizontalInput = dragVector.x / Screen.width * m_InputSensitivity;
            float verticalInput = dragVector.y / Screen.height * m_InputSensitivity;

            Vector3 moveDirection = new Vector3(horizontalInput, 0f, verticalInput);

            PlayerController.Instance.RollSphere(moveDirection);
        }
    }
}
