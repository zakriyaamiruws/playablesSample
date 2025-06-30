using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using HyperCasual.Core;
using HyperCasual.Gameplay;
using HyperCasual.Runner;
using UnityEngine;

public class LevelFailedHandler : MonoBehaviour, IGameEventListener
{
    private PlayerController playerController;
    [SerializeField] private AbstractGameEvent loseEvent;

    private SoundID endMusic = SoundID.FailSound;
    
#if LUNA_IS_PRESENT || LUNA_EDITOR_SOURCES
    [LunaPlaygroundField("End Card delay", 1, "Endcard Clickable Options")]
#endif
    [SerializeField]
    private float endCardDelay = 1;

    void Start()
    {
        playerController = PlayerController.Instance;
        loseEvent.AddListener(this);
    }
    
    public void OnEventRaised()
    {
        StartCoroutine(EndSequence());
    }

    IEnumerator EndSequence()
    {
        AudioManager.Instance.PlayEffect(endMusic);
        CoinEffectManager.Instance.Disable();
        //playerController.PlayerWon();
        yield return new WaitForSeconds(endCardDelay);
        SequenceManager.SendToEndcard();
    }
    
}
