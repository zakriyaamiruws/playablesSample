using HyperCasual.Core;
using UnityEngine;

namespace HyperCasual.Runner
{
    [RequireComponent(typeof(Collider))]
    public class LoseHandler : Spawnable
    {
        const string k_PlayerTag = "Player";
        
        [SerializeField]
        AbstractGameEvent m_LoseEvent;

        void OnTriggerEnter(Collider col)
        {
            if (col.CompareTag(k_PlayerTag))
            {
                Debug.Log("Failed!");
                CameraManager.Instance.enabled = false;
                GameManager.Instance.Lose();
            }
        }
    }
}