namespace Assets.MobileOptimizedWater.Scripts
{
    using UnityEngine;

    public class AnimationStarter : MonoBehaviour
    {
        [SerializeField] private Animator animator;
        [SerializeField] private new Motion animation;

        public void Awake()
        {
            animator.Play(animation.name);
        }
    }
}
