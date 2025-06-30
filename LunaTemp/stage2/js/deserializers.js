var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSpring' )
  var i687 = data
  i686.spring = i687[0]
  i686.damper = i687[1]
  i686.targetPosition = i687[2]
  return i686
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointMotor' )
  var i689 = data
  i688.m_TargetVelocity = i689[0]
  i688.m_Force = i689[1]
  i688.m_FreeSpin = i689[2]
  return i688
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointLimits' )
  var i691 = data
  i690.m_Min = i691[0]
  i690.m_Max = i691[1]
  i690.m_Bounciness = i691[2]
  i690.m_BounceMinVelocity = i691[3]
  i690.m_ContactDistance = i691[4]
  i690.minBounce = i691[5]
  i690.maxBounce = i691[6]
  return i690
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointDrive' )
  var i693 = data
  i692.m_PositionSpring = i693[0]
  i692.m_PositionDamper = i693[1]
  i692.m_MaximumForce = i693[2]
  return i692
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i695 = data
  i694.m_Spring = i695[0]
  i694.m_Damper = i695[1]
  return i694
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i697 = data
  i696.m_Limit = i697[0]
  i696.m_Bounciness = i697[1]
  i696.m_ContactDistance = i697[2]
  return i696
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i699 = data
  i698.m_ExtremumSlip = i699[0]
  i698.m_ExtremumValue = i699[1]
  i698.m_AsymptoteSlip = i699[2]
  i698.m_AsymptoteValue = i699[3]
  i698.m_Stiffness = i699[4]
  return i698
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i701 = data
  i700.m_LowerAngle = i701[0]
  i700.m_UpperAngle = i701[1]
  return i700
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i703 = data
  i702.m_MotorSpeed = i703[0]
  i702.m_MaximumMotorTorque = i703[1]
  return i702
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i705 = data
  i704.m_DampingRatio = i705[0]
  i704.m_Frequency = i705[1]
  i704.m_Angle = i705[2]
  return i704
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i707 = data
  i706.m_LowerTranslation = i707[0]
  i706.m_UpperTranslation = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i709 = data
  i708.pivot = new pc.Vec2( i709[0], i709[1] )
  i708.anchorMin = new pc.Vec2( i709[2], i709[3] )
  i708.anchorMax = new pc.Vec2( i709[4], i709[5] )
  i708.sizeDelta = new pc.Vec2( i709[6], i709[7] )
  i708.anchoredPosition3D = new pc.Vec3( i709[8], i709[9], i709[10] )
  i708.rotation = new pc.Quat(i709[11], i709[12], i709[13], i709[14])
  i708.scale = new pc.Vec3( i709[15], i709[16], i709[17] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i711 = data
  i710.enabled = !!i711[0]
  i710.planeDistance = i711[1]
  i710.referencePixelsPerUnit = i711[2]
  i710.isFallbackOverlay = !!i711[3]
  i710.renderMode = i711[4]
  i710.renderOrder = i711[5]
  i710.sortingLayerName = i711[6]
  i710.sortingOrder = i711[7]
  i710.scaleFactor = i711[8]
  request.r(i711[9], i711[10], 0, i710, 'worldCamera')
  i710.overrideSorting = !!i711[11]
  i710.pixelPerfect = !!i711[12]
  i710.targetDisplay = i711[13]
  i710.overridePixelPerfect = !!i711[14]
  return i710
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i713 = data
  i712.m_UiScaleMode = i713[0]
  i712.m_ReferencePixelsPerUnit = i713[1]
  i712.m_ScaleFactor = i713[2]
  i712.m_ReferenceResolution = new pc.Vec2( i713[3], i713[4] )
  i712.m_ScreenMatchMode = i713[5]
  i712.m_MatchWidthOrHeight = i713[6]
  i712.m_PhysicalUnit = i713[7]
  i712.m_FallbackScreenDPI = i713[8]
  i712.m_DefaultSpriteDPI = i713[9]
  i712.m_DynamicPixelsPerUnit = i713[10]
  i712.m_PresetInfoIsWorld = !!i713[11]
  return i712
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i715 = data
  i714.m_IgnoreReversedGraphics = !!i715[0]
  i714.m_BlockingObjects = i715[1]
  i714.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i715[2] )
  return i714
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i716 = root || request.c( 'EndCardController' )
  var i717 = data
  i716.alwaysShowEndcardTESTING = !!i717[0]
  i716.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i717[1], i716.EndCardOpenedEvent)
  i716._backgroundColor = new pc.Color(i717[2], i717[3], i717[4], i717[5])
  request.r(i717[6], i717[7], 0, i716, '_backgroundTexture')
  request.r(i717[8], i717[9], 0, i716, '_iconTexture')
  i716._iconColor = new pc.Color(i717[10], i717[11], i717[12], i717[13])
  request.r(i717[14], i717[15], 0, i716, '_buttonTexture')
  i716._buttonColor = new pc.Color(i717[16], i717[17], i717[18], i717[19])
  i716._endCardDescriptionText = i717[20]
  i716._CTAButtonText = i717[21]
  i716._useBestFitOnCTA = !!i717[22]
  i716._CTAFontColor = new pc.Color(i717[23], i717[24], i717[25], i717[26])
  i716._descriptionFontColor = new pc.Color(i717[27], i717[28], i717[29], i717[30])
  request.r(i717[31], i717[32], 0, i716, '_CTAFont')
  request.r(i717[33], i717[34], 0, i716, '_descriptionFont')
  i716._CTAFontSize = i717[35]
  i716._descriptionFontSize = i717[36]
  i716._centerDescriptionX = !!i717[37]
  i716._centerDescriptionY = !!i717[38]
  i716._centerButtonX = !!i717[39]
  i716._centerButtonY = !!i717[40]
  i716._descriptionPositionX = i717[41]
  i716._descriptionPositionY = i717[42]
  i716._buttonPositionX = i717[43]
  i716._buttonPositionY = i717[44]
  i716._CTAFontSizeLandscape = i717[45]
  i716._descriptionFontSizeLandscape = i717[46]
  i716._centerDescriptionXLandscape = !!i717[47]
  i716._centerDescriptionYLandscape = !!i717[48]
  i716._centerButtonXLandscape = !!i717[49]
  i716._centerButtonYLandscape = !!i717[50]
  i716._descriptionPositionXLandscape = i717[51]
  i716._descriptionPositionYLandscape = i717[52]
  i716._buttonPositionXLandscape = i717[53]
  i716._buttonPositionYLandscape = i717[54]
  i716._centerIconX = !!i717[55]
  i716._centerIconY = !!i717[56]
  i716._iconPositionX = i717[57]
  i716._iconPositionY = i717[58]
  i716._iconSize = i717[59]
  i716._roundEdgesOnIcon = !!i717[60]
  i716._centerIconXLandscape = !!i717[61]
  i716._centerIconYLandscape = !!i717[62]
  i716._iconPositionXLandscape = i717[63]
  i716._iconPositionYLandscape = i717[64]
  i716._iconSizeLandscape = i717[65]
  i716._roundEdgesOnIconLandscape = !!i717[66]
  i716._endCardClickableOptions = i717[67]
  i716._buttonAnimationType = i717[68]
  i716._endCardPortraitAnimationType = i717[69]
  i716._endCardLandscapeAnimationType = i717[70]
  request.r(i717[71], i717[72], 0, i716, '_backgroundImage')
  request.r(i717[73], i717[74], 0, i716, '_CTAButton')
  request.r(i717[75], i717[76], 0, i716, '_ScreenCTAButton')
  request.r(i717[77], i717[78], 0, i716, '_CTAButtonTextText')
  request.r(i717[79], i717[80], 0, i716, '_EndCardDescriptionTextText')
  request.r(i717[81], i717[82], 0, i716, '_maskIcon')
  request.r(i717[83], i717[84], 0, i716, '_iconRect')
  request.r(i717[85], i717[86], 0, i716, '_iconRectMask')
  request.r(i717[87], i717[88], 0, i716, '_descriptionRect')
  request.r(i717[89], i717[90], 0, i716, '_buttonRect')
  request.r(i717[91], i717[92], 0, i716, '_CTAButtonAnimator')
  request.r(i717[93], i717[94], 0, i716, '_endCardAnimator')
  request.r(i717[95], i717[96], 0, i716, '_iconImage')
  request.r(i717[97], i717[98], 0, i716, '_CTAButtonImage')
  return i716
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('UnityEngine.Events.PersistentCall', i723[i + 0]));
  }
  i720.m_Calls = i722
  return i720
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Target')
  i726.m_TargetAssemblyTypeName = i727[2]
  i726.m_MethodName = i727[3]
  i726.m_Mode = i727[4]
  i726.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i727[5], i726.m_Arguments)
  i726.m_CallState = i727[6]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'animatorController')
  request.r(i729[2], i729[3], 0, i728, 'avatar')
  i728.updateMode = i729[4]
  i728.hasTransformHierarchy = !!i729[5]
  i728.applyRootMotion = !!i729[6]
  var i731 = i729[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.humanBones = i730
  i728.enabled = !!i729[8]
  return i728
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i734 = root || request.c( 'EndCardSetScale' )
  var i735 = data
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i739 = data
  i738.m_AspectMode = i739[0]
  i738.m_AspectRatio = i739[1]
  return i738
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Texture')
  i740.m_UVRect = UnityEngine.Rect.MinMaxRect(i741[2], i741[3], i741[4], i741[5])
  request.r(i741[6], i741[7], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[8]
  i740.m_Color = new pc.Color(i741[9], i741[10], i741[11], i741[12])
  i740.m_RaycastTarget = !!i741[13]
  i740.m_RaycastPadding = new pc.Vec4( i741[14], i741[15], i741[16], i741[17] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i743 = data
  i742.name = i743[0]
  i742.tagId = i743[1]
  i742.enabled = !!i743[2]
  i742.isStatic = !!i743[3]
  i742.layer = i743[4]
  return i742
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Mask' )
  var i745 = data
  i744.m_ShowMaskGraphic = !!i745[0]
  return i744
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Image' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Sprite')
  i746.m_Type = i747[2]
  i746.m_PreserveAspect = !!i747[3]
  i746.m_FillCenter = !!i747[4]
  i746.m_FillMethod = i747[5]
  i746.m_FillAmount = i747[6]
  i746.m_FillClockwise = !!i747[7]
  i746.m_FillOrigin = i747[8]
  i746.m_UseSpriteMesh = !!i747[9]
  i746.m_PixelsPerUnitMultiplier = i747[10]
  request.r(i747[11], i747[12], 0, i746, 'm_Material')
  i746.m_Maskable = !!i747[13]
  i746.m_Color = new pc.Color(i747[14], i747[15], i747[16], i747[17])
  i746.m_RaycastTarget = !!i747[18]
  i746.m_RaycastPadding = new pc.Vec4( i747[19], i747[20], i747[21], i747[22] )
  return i746
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Text' )
  var i749 = data
  i748.m_FontData = request.d('UnityEngine.UI.FontData', i749[0], i748.m_FontData)
  i748.m_Text = i749[1]
  request.r(i749[2], i749[3], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[4]
  i748.m_Color = new pc.Color(i749[5], i749[6], i749[7], i749[8])
  i748.m_RaycastTarget = !!i749[9]
  i748.m_RaycastPadding = new pc.Vec4( i749[10], i749[11], i749[12], i749[13] )
  return i748
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.FontData' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Font')
  i750.m_FontSize = i751[2]
  i750.m_FontStyle = i751[3]
  i750.m_BestFit = !!i751[4]
  i750.m_MinSize = i751[5]
  i750.m_MaxSize = i751[6]
  i750.m_Alignment = i751[7]
  i750.m_AlignByGeometry = !!i751[8]
  i750.m_RichText = !!i751[9]
  i750.m_HorizontalOverflow = i751[10]
  i750.m_VerticalOverflow = i751[11]
  i750.m_LineSpacing = i751[12]
  return i750
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button' )
  var i753 = data
  i752.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i753[0], i752.m_OnClick)
  i752.m_Navigation = request.d('UnityEngine.UI.Navigation', i753[1], i752.m_Navigation)
  i752.m_Transition = i753[2]
  i752.m_Colors = request.d('UnityEngine.UI.ColorBlock', i753[3], i752.m_Colors)
  i752.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i753[4], i752.m_SpriteState)
  i752.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i753[5], i752.m_AnimationTriggers)
  i752.m_Interactable = !!i753[6]
  request.r(i753[7], i753[8], 0, i752, 'm_TargetGraphic')
  return i752
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i755 = data
  i754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i755[0], i754.m_PersistentCalls)
  return i754
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_ObjectArgument')
  i756.m_ObjectArgumentAssemblyTypeName = i757[2]
  i756.m_IntArgument = i757[3]
  i756.m_FloatArgument = i757[4]
  i756.m_StringArgument = i757[5]
  i756.m_BoolArgument = !!i757[6]
  return i756
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i759 = data
  i758.m_Mode = i759[0]
  i758.m_WrapAround = !!i759[1]
  request.r(i759[2], i759[3], 0, i758, 'm_SelectOnUp')
  request.r(i759[4], i759[5], 0, i758, 'm_SelectOnDown')
  request.r(i759[6], i759[7], 0, i758, 'm_SelectOnLeft')
  request.r(i759[8], i759[9], 0, i758, 'm_SelectOnRight')
  return i758
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i761 = data
  i760.m_NormalColor = new pc.Color(i761[0], i761[1], i761[2], i761[3])
  i760.m_HighlightedColor = new pc.Color(i761[4], i761[5], i761[6], i761[7])
  i760.m_PressedColor = new pc.Color(i761[8], i761[9], i761[10], i761[11])
  i760.m_SelectedColor = new pc.Color(i761[12], i761[13], i761[14], i761[15])
  i760.m_DisabledColor = new pc.Color(i761[16], i761[17], i761[18], i761[19])
  i760.m_ColorMultiplier = i761[20]
  i760.m_FadeDuration = i761[21]
  return i760
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_HighlightedSprite')
  request.r(i763[2], i763[3], 0, i762, 'm_PressedSprite')
  request.r(i763[4], i763[5], 0, i762, 'm_SelectedSprite')
  request.r(i763[6], i763[7], 0, i762, 'm_DisabledSprite')
  return i762
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i765 = data
  i764.m_NormalTrigger = i765[0]
  i764.m_HighlightedTrigger = i765[1]
  i764.m_PressedTrigger = i765[2]
  i764.m_SelectedTrigger = i765[3]
  i764.m_DisabledTrigger = i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i767 = data
  i766.m_Alpha = i767[0]
  i766.m_Interactable = !!i767[1]
  i766.m_BlocksRaycasts = !!i767[2]
  i766.m_IgnoreParentGroups = !!i767[3]
  i766.enabled = !!i767[4]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i769 = data
  i768.name = i769[0]
  i768.width = i769[1]
  i768.height = i769[2]
  i768.mipmapCount = i769[3]
  i768.anisoLevel = i769[4]
  i768.filterMode = i769[5]
  i768.hdr = !!i769[6]
  i768.format = i769[7]
  i768.wrapMode = i769[8]
  i768.alphaIsTransparency = !!i769[9]
  i768.alphaSource = i769[10]
  i768.graphicsFormat = i769[11]
  i768.sRGBTexture = !!i769[12]
  i768.desiredColorSpace = i769[13]
  i768.wrapU = i769[14]
  i768.wrapV = i769[15]
  return i768
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i770 = root || request.c( 'DOTWeenPulseAnim' )
  var i771 = data
  i770.pulseSize = new pc.Vec2( i771[0], i771[1] )
  i770.pulseDuration = i771[2]
  i770.ease = i771[3]
  return i770
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i773 = data
  i772.m_hasFontAssetChanged = !!i773[0]
  request.r(i773[1], i773[2], 0, i772, 'm_baseMaterial')
  i772.m_maskOffset = new pc.Vec4( i773[3], i773[4], i773[5], i773[6] )
  i772.m_text = i773[7]
  i772.m_isRightToLeft = !!i773[8]
  request.r(i773[9], i773[10], 0, i772, 'm_fontAsset')
  request.r(i773[11], i773[12], 0, i772, 'm_sharedMaterial')
  var i775 = i773[13]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.m_fontSharedMaterials = i774
  request.r(i773[14], i773[15], 0, i772, 'm_fontMaterial')
  var i777 = i773[16]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.m_fontMaterials = i776
  i772.m_fontColor32 = UnityEngine.Color32.ConstructColor(i773[17], i773[18], i773[19], i773[20])
  i772.m_fontColor = new pc.Color(i773[21], i773[22], i773[23], i773[24])
  i772.m_enableVertexGradient = !!i773[25]
  i772.m_colorMode = i773[26]
  i772.m_fontColorGradient = request.d('TMPro.VertexGradient', i773[27], i772.m_fontColorGradient)
  request.r(i773[28], i773[29], 0, i772, 'm_fontColorGradientPreset')
  request.r(i773[30], i773[31], 0, i772, 'm_spriteAsset')
  i772.m_tintAllSprites = !!i773[32]
  request.r(i773[33], i773[34], 0, i772, 'm_StyleSheet')
  i772.m_TextStyleHashCode = i773[35]
  i772.m_overrideHtmlColors = !!i773[36]
  i772.m_faceColor = UnityEngine.Color32.ConstructColor(i773[37], i773[38], i773[39], i773[40])
  i772.m_fontSize = i773[41]
  i772.m_fontSizeBase = i773[42]
  i772.m_fontWeight = i773[43]
  i772.m_enableAutoSizing = !!i773[44]
  i772.m_fontSizeMin = i773[45]
  i772.m_fontSizeMax = i773[46]
  i772.m_fontStyle = i773[47]
  i772.m_HorizontalAlignment = i773[48]
  i772.m_VerticalAlignment = i773[49]
  i772.m_textAlignment = i773[50]
  i772.m_characterSpacing = i773[51]
  i772.m_wordSpacing = i773[52]
  i772.m_lineSpacing = i773[53]
  i772.m_lineSpacingMax = i773[54]
  i772.m_paragraphSpacing = i773[55]
  i772.m_charWidthMaxAdj = i773[56]
  i772.m_enableWordWrapping = !!i773[57]
  i772.m_wordWrappingRatios = i773[58]
  i772.m_overflowMode = i773[59]
  request.r(i773[60], i773[61], 0, i772, 'm_linkedTextComponent')
  request.r(i773[62], i773[63], 0, i772, 'parentLinkedComponent')
  i772.m_enableKerning = !!i773[64]
  i772.m_enableExtraPadding = !!i773[65]
  i772.checkPaddingRequired = !!i773[66]
  i772.m_isRichText = !!i773[67]
  i772.m_parseCtrlCharacters = !!i773[68]
  i772.m_isOrthographic = !!i773[69]
  i772.m_isCullingEnabled = !!i773[70]
  i772.m_horizontalMapping = i773[71]
  i772.m_verticalMapping = i773[72]
  i772.m_uvLineOffset = i773[73]
  i772.m_geometrySortingOrder = i773[74]
  i772.m_IsTextObjectScaleStatic = !!i773[75]
  i772.m_VertexBufferAutoSizeReduction = !!i773[76]
  i772.m_useMaxVisibleDescender = !!i773[77]
  i772.m_pageToDisplay = i773[78]
  i772.m_margin = new pc.Vec4( i773[79], i773[80], i773[81], i773[82] )
  i772.m_isUsingLegacyAnimationComponent = !!i773[83]
  i772.m_isVolumetricText = !!i773[84]
  request.r(i773[85], i773[86], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[87]
  i772.m_Color = new pc.Color(i773[88], i773[89], i773[90], i773[91])
  i772.m_RaycastTarget = !!i773[92]
  i772.m_RaycastPadding = new pc.Vec4( i773[93], i773[94], i773[95], i773[96] )
  return i772
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.VertexGradient' )
  var i781 = data
  i780.topLeft = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.topRight = new pc.Color(i781[4], i781[5], i781[6], i781[7])
  i780.bottomLeft = new pc.Color(i781[8], i781[9], i781[10], i781[11])
  i780.bottomRight = new pc.Color(i781[12], i781[13], i781[14], i781[15])
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i782 = root || new pc.UnityMaterial()
  var i783 = data
  i782.name = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'shader')
  i782.renderQueue = i783[3]
  i782.enableInstancing = !!i783[4]
  var i785 = i783[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i785[i + 0]) );
  }
  i782.floatParameters = i784
  var i787 = i783[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i787[i + 0]) );
  }
  i782.colorParameters = i786
  var i789 = i783[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i789[i + 0]) );
  }
  i782.vectorParameters = i788
  var i791 = i783[8]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i791[i + 0]) );
  }
  i782.textureParameters = i790
  var i793 = i783[9]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i793[i + 0]) );
  }
  i782.materialFlags = i792
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i797 = data
  i796.name = i797[0]
  i796.value = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i801 = data
  i800.name = i801[0]
  i800.value = new pc.Color(i801[1], i801[2], i801[3], i801[4])
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i805 = data
  i804.name = i805[0]
  i804.value = new pc.Vec4( i805[1], i805[2], i805[3], i805[4] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i809 = data
  i808.name = i809[0]
  request.r(i809[1], i809[2], 0, i808, 'value')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i813 = data
  i812.name = i813[0]
  i812.enabled = !!i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i815 = data
  i814.position = new pc.Vec3( i815[0], i815[1], i815[2] )
  i814.scale = new pc.Vec3( i815[3], i815[4], i815[5] )
  i814.rotation = new pc.Quat(i815[6], i815[7], i815[8], i815[9])
  return i814
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i816 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.m_LevelManagers = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'sharedMesh')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'additionalVertexStreams')
  i824.enabled = !!i825[2]
  request.r(i825[3], i825[4], 0, i824, 'sharedMaterial')
  var i827 = i825[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[6]
  i824.shadowCastingMode = i825[7]
  i824.sortingLayerID = i825[8]
  i824.sortingOrder = i825[9]
  i824.lightmapIndex = i825[10]
  i824.lightmapSceneIndex = i825[11]
  i824.lightmapScaleOffset = new pc.Vec4( i825[12], i825[13], i825[14], i825[15] )
  i824.lightProbeUsage = i825[16]
  i824.reflectionProbeUsage = i825[17]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i829 = data
  i828.enabled = !!i829[0]
  i828.isTrigger = !!i829[1]
  request.r(i829[2], i829[3], 0, i828, 'material')
  i828.center = new pc.Vec3( i829[4], i829[5], i829[6] )
  i828.radius = i829[7]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i831 = data
  i830.mass = i831[0]
  i830.drag = i831[1]
  i830.angularDrag = i831[2]
  i830.useGravity = !!i831[3]
  i830.isKinematic = !!i831[4]
  i830.constraints = i831[5]
  i830.maxAngularVelocity = i831[6]
  i830.collisionDetectionMode = i831[7]
  i830.interpolation = i831[8]
  return i830
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i832 = root || request.c( 'PlayerController' )
  var i833 = data
  i832.moveForce = i833[0]
  i832.maxSpeed = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i835 = data
  i834.name = i835[0]
  i834.halfPrecision = !!i835[1]
  i834.useUInt32IndexFormat = !!i835[2]
  i834.vertexCount = i835[3]
  i834.aabb = i835[4]
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( !!i837[i + 0] );
  }
  i834.streams = i836
  i834.vertices = i835[6]
  var i839 = i835[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i839[i + 0]) );
  }
  i834.subMeshes = i838
  var i841 = i835[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 16) {
    i840.push( new pc.Mat4().setData(i841[i + 0], i841[i + 1], i841[i + 2], i841[i + 3],  i841[i + 4], i841[i + 5], i841[i + 6], i841[i + 7],  i841[i + 8], i841[i + 9], i841[i + 10], i841[i + 11],  i841[i + 12], i841[i + 13], i841[i + 14], i841[i + 15]) );
  }
  i834.bindposes = i840
  var i843 = i835[9]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i843[i + 0]) );
  }
  i834.blendShapes = i842
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i849 = data
  i848.triangles = i849[0]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i855 = data
  i854.name = i855[0]
  var i857 = i855[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i857[i + 0]) );
  }
  i854.frames = i856
  return i854
}

Deserializers["InputManager"] = function (request, data, root) {
  var i858 = root || request.c( 'InputManager' )
  var i859 = data
  i858.m_InputSensitivity = i859[0]
  return i858
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i860 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i861 = data
  i860.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i861[0], i860.m_GoldEventListener)
  i860.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i861[1], i860.m_KeyEventListener)
  i860.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i861[2], i860.m_WinEventListener)
  return i860
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i862 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Event')
  return i862
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i864 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i865 = data
  return i864
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i866 = root || request.c( 'CoinEffectMove' )
  var i867 = data
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i869 = data
  i868.center = new pc.Vec3( i869[0], i869[1], i869[2] )
  i868.size = new pc.Vec3( i869[3], i869[4], i869[5] )
  i868.enabled = !!i869[6]
  i868.isTrigger = !!i869[7]
  request.r(i869[8], i869[9], 0, i868, 'material')
  return i868
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i870 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i871 = data
  i870.m_GateType = i871[0]
  i870.m_Value = i871[1]
  request.r(i871[2], i871[3], 0, i870, 'm_Text')
  i870.m_SnapToGrid = !!i871[4]
  return i870
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TextMeshPro' )
  var i873 = data
  i872._SortingLayer = i873[0]
  i872._SortingLayerID = i873[1]
  i872._SortingOrder = i873[2]
  i872.m_hasFontAssetChanged = !!i873[3]
  request.r(i873[4], i873[5], 0, i872, 'm_renderer')
  i872.m_maskType = i873[6]
  i872.m_text = i873[7]
  i872.m_isRightToLeft = !!i873[8]
  request.r(i873[9], i873[10], 0, i872, 'm_fontAsset')
  request.r(i873[11], i873[12], 0, i872, 'm_sharedMaterial')
  var i875 = i873[13]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.m_fontSharedMaterials = i874
  request.r(i873[14], i873[15], 0, i872, 'm_fontMaterial')
  var i877 = i873[16]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.m_fontMaterials = i876
  i872.m_fontColor32 = UnityEngine.Color32.ConstructColor(i873[17], i873[18], i873[19], i873[20])
  i872.m_fontColor = new pc.Color(i873[21], i873[22], i873[23], i873[24])
  i872.m_enableVertexGradient = !!i873[25]
  i872.m_colorMode = i873[26]
  i872.m_fontColorGradient = request.d('TMPro.VertexGradient', i873[27], i872.m_fontColorGradient)
  request.r(i873[28], i873[29], 0, i872, 'm_fontColorGradientPreset')
  request.r(i873[30], i873[31], 0, i872, 'm_spriteAsset')
  i872.m_tintAllSprites = !!i873[32]
  request.r(i873[33], i873[34], 0, i872, 'm_StyleSheet')
  i872.m_TextStyleHashCode = i873[35]
  i872.m_overrideHtmlColors = !!i873[36]
  i872.m_faceColor = UnityEngine.Color32.ConstructColor(i873[37], i873[38], i873[39], i873[40])
  i872.m_fontSize = i873[41]
  i872.m_fontSizeBase = i873[42]
  i872.m_fontWeight = i873[43]
  i872.m_enableAutoSizing = !!i873[44]
  i872.m_fontSizeMin = i873[45]
  i872.m_fontSizeMax = i873[46]
  i872.m_fontStyle = i873[47]
  i872.m_HorizontalAlignment = i873[48]
  i872.m_VerticalAlignment = i873[49]
  i872.m_textAlignment = i873[50]
  i872.m_characterSpacing = i873[51]
  i872.m_wordSpacing = i873[52]
  i872.m_lineSpacing = i873[53]
  i872.m_lineSpacingMax = i873[54]
  i872.m_paragraphSpacing = i873[55]
  i872.m_charWidthMaxAdj = i873[56]
  i872.m_enableWordWrapping = !!i873[57]
  i872.m_wordWrappingRatios = i873[58]
  i872.m_overflowMode = i873[59]
  request.r(i873[60], i873[61], 0, i872, 'm_linkedTextComponent')
  request.r(i873[62], i873[63], 0, i872, 'parentLinkedComponent')
  i872.m_enableKerning = !!i873[64]
  i872.m_enableExtraPadding = !!i873[65]
  i872.checkPaddingRequired = !!i873[66]
  i872.m_isRichText = !!i873[67]
  i872.m_parseCtrlCharacters = !!i873[68]
  i872.m_isOrthographic = !!i873[69]
  i872.m_isCullingEnabled = !!i873[70]
  i872.m_horizontalMapping = i873[71]
  i872.m_verticalMapping = i873[72]
  i872.m_uvLineOffset = i873[73]
  i872.m_geometrySortingOrder = i873[74]
  i872.m_IsTextObjectScaleStatic = !!i873[75]
  i872.m_VertexBufferAutoSizeReduction = !!i873[76]
  i872.m_useMaxVisibleDescender = !!i873[77]
  i872.m_pageToDisplay = i873[78]
  i872.m_margin = new pc.Vec4( i873[79], i873[80], i873[81], i873[82] )
  i872.m_isUsingLegacyAnimationComponent = !!i873[83]
  i872.m_isVolumetricText = !!i873[84]
  request.r(i873[85], i873[86], 0, i872, 'm_Material')
  i872.m_Maskable = !!i873[87]
  i872.m_Color = new pc.Color(i873[88], i873[89], i873[90], i873[91])
  i872.m_RaycastTarget = !!i873[92]
  i872.m_RaycastPadding = new pc.Vec4( i873[93], i873[94], i873[95], i873[96] )
  return i872
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i878 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Event')
  i878.m_Count = i879[2]
  i878.m_Sound = i879[3]
  i878.m_Particle = i879[4]
  i878.m_SnapToGrid = !!i879[5]
  return i878
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i880 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i881 = data
  i880.UsePositionBasedOffset = !!i881[0]
  i880.PositionBasedScale = i881[1]
  i880.Bob = !!i881[2]
  i880.BobSpeed = i881[3]
  i880.BobHeight = i881[4]
  i880.Spin = !!i881[5]
  i880.SpinSpeed = i881[6]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i883 = data
  i882.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i883[0], i882.main)
  i882.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i883[1], i882.colorBySpeed)
  i882.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i883[2], i882.colorOverLifetime)
  i882.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i883[3], i882.emission)
  i882.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i883[4], i882.rotationBySpeed)
  i882.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i883[5], i882.rotationOverLifetime)
  i882.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i883[6], i882.shape)
  i882.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i883[7], i882.sizeBySpeed)
  i882.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i883[8], i882.sizeOverLifetime)
  i882.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i883[9], i882.textureSheetAnimation)
  i882.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i883[10], i882.velocityOverLifetime)
  i882.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i883[11], i882.noise)
  i882.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i883[12], i882.inheritVelocity)
  i882.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i883[13], i882.forceOverLifetime)
  i882.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i883[14], i882.limitVelocityOverLifetime)
  i882.useAutoRandomSeed = !!i883[15]
  i882.randomSeed = i883[16]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemMain()
  var i885 = data
  i884.duration = i885[0]
  i884.loop = !!i885[1]
  i884.prewarm = !!i885[2]
  i884.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.startDelay)
  i884.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[4], i884.startLifetime)
  i884.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[5], i884.startSpeed)
  i884.startSize3D = !!i885[6]
  i884.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[7], i884.startSizeX)
  i884.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[8], i884.startSizeY)
  i884.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[9], i884.startSizeZ)
  i884.startRotation3D = !!i885[10]
  i884.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[11], i884.startRotationX)
  i884.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[12], i884.startRotationY)
  i884.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[13], i884.startRotationZ)
  i884.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i885[14], i884.startColor)
  i884.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[15], i884.gravityModifier)
  i884.simulationSpace = i885[16]
  request.r(i885[17], i885[18], 0, i884, 'customSimulationSpace')
  i884.simulationSpeed = i885[19]
  i884.useUnscaledTime = !!i885[20]
  i884.scalingMode = i885[21]
  i884.playOnAwake = !!i885[22]
  i884.maxParticles = i885[23]
  i884.emitterVelocityMode = i885[24]
  i884.stopAction = i885[25]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i886 = root || new pc.MinMaxCurve()
  var i887 = data
  i886.mode = i887[0]
  i886.curveMin = new pc.AnimationCurve( { keys_flow: i887[1] } )
  i886.curveMax = new pc.AnimationCurve( { keys_flow: i887[2] } )
  i886.curveMultiplier = i887[3]
  i886.constantMin = i887[4]
  i886.constantMax = i887[5]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i888 = root || new pc.MinMaxGradient()
  var i889 = data
  i888.mode = i889[0]
  i888.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i889[1], i888.gradientMin)
  i888.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i889[2], i888.gradientMax)
  i888.colorMin = new pc.Color(i889[3], i889[4], i889[5], i889[6])
  i888.colorMax = new pc.Color(i889[7], i889[8], i889[9], i889[10])
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i891 = data
  i890.mode = i891[0]
  var i893 = i891[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i893[i + 0]) );
  }
  i890.colorKeys = i892
  var i895 = i891[2]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i895[i + 0]) );
  }
  i890.alphaKeys = i894
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemColorBySpeed()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i897[1], i896.color)
  i896.range = new pc.Vec2( i897[2], i897[3] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i901 = data
  i900.color = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.time = i901[4]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i905 = data
  i904.alpha = i905[0]
  i904.time = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemColorOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i907[1], i906.color)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemEmitter()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.rateOverTime)
  i908.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.rateOverDistance)
  var i911 = i909[3]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i911[i + 0]) );
  }
  i908.bursts = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemBurst()
  var i915 = data
  i914.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[0], i914.count)
  i914.cycleCount = i915[1]
  i914.minCount = i915[2]
  i914.maxCount = i915[3]
  i914.repeatInterval = i915[4]
  i914.time = i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemRotationBySpeed()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.separateAxes = !!i917[4]
  i916.range = new pc.Vec2( i917[5], i917[6] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemRotationOverLifetime()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[1], i918.x)
  i918.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[2], i918.y)
  i918.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.z)
  i918.separateAxes = !!i919[4]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemShape()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.shapeType = i921[1]
  i920.randomDirectionAmount = i921[2]
  i920.sphericalDirectionAmount = i921[3]
  i920.randomPositionAmount = i921[4]
  i920.alignToDirection = !!i921[5]
  i920.radius = i921[6]
  i920.radiusMode = i921[7]
  i920.radiusSpread = i921[8]
  i920.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[9], i920.radiusSpeed)
  i920.radiusThickness = i921[10]
  i920.angle = i921[11]
  i920.length = i921[12]
  i920.boxThickness = new pc.Vec3( i921[13], i921[14], i921[15] )
  i920.meshShapeType = i921[16]
  request.r(i921[17], i921[18], 0, i920, 'mesh')
  request.r(i921[19], i921[20], 0, i920, 'meshRenderer')
  request.r(i921[21], i921[22], 0, i920, 'skinnedMeshRenderer')
  i920.useMeshMaterialIndex = !!i921[23]
  i920.meshMaterialIndex = i921[24]
  i920.useMeshColors = !!i921[25]
  i920.normalOffset = i921[26]
  i920.arc = i921[27]
  i920.arcMode = i921[28]
  i920.arcSpread = i921[29]
  i920.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[30], i920.arcSpeed)
  i920.donutRadius = i921[31]
  i920.position = new pc.Vec3( i921[32], i921[33], i921[34] )
  i920.rotation = new pc.Vec3( i921[35], i921[36], i921[37] )
  i920.scale = new pc.Vec3( i921[38], i921[39], i921[40] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemSizeBySpeed()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.separateAxes = !!i923[4]
  i922.range = new pc.Vec2( i923[5], i923[6] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemSizeOverLifetime()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[1], i924.x)
  i924.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.y)
  i924.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.z)
  i924.separateAxes = !!i925[4]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.mode = i927[1]
  i926.animation = i927[2]
  i926.numTilesX = i927[3]
  i926.numTilesY = i927[4]
  i926.useRandomRow = !!i927[5]
  i926.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[6], i926.frameOverTime)
  i926.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[7], i926.startFrame)
  i926.cycleCount = i927[8]
  i926.rowIndex = i927[9]
  i926.flipU = i927[10]
  i926.flipV = i927[11]
  i926.spriteCount = i927[12]
  var i929 = i927[13]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.sprites = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[1], i932.x)
  i932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.y)
  i932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[3], i932.z)
  i932.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[4], i932.radial)
  i932.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[5], i932.speedModifier)
  i932.space = i933[6]
  i932.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[7], i932.orbitalX)
  i932.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[8], i932.orbitalY)
  i932.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[9], i932.orbitalZ)
  i932.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[10], i932.orbitalOffsetX)
  i932.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[11], i932.orbitalOffsetY)
  i932.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[12], i932.orbitalOffsetZ)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemNoise()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.separateAxes = !!i935[1]
  i934.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.strengthX)
  i934.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[3], i934.strengthY)
  i934.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[4], i934.strengthZ)
  i934.frequency = i935[5]
  i934.damping = !!i935[6]
  i934.octaveCount = i935[7]
  i934.octaveMultiplier = i935[8]
  i934.octaveScale = i935[9]
  i934.quality = i935[10]
  i934.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[11], i934.scrollSpeed)
  i934.scrollSpeedMultiplier = i935[12]
  i934.remapEnabled = !!i935[13]
  i934.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[14], i934.remapX)
  i934.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[15], i934.remapY)
  i934.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[16], i934.remapZ)
  i934.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[17], i934.positionAmount)
  i934.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[18], i934.rotationAmount)
  i934.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[19], i934.sizeAmount)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemInheritVelocity()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.mode = i937[1]
  i936.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.curve)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemForceOverLifetime()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[1], i938.x)
  i938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.y)
  i938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.z)
  i938.space = i939[4]
  i938.randomized = !!i939[5]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[1], i940.limit)
  i940.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[2], i940.limitX)
  i940.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[3], i940.limitY)
  i940.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[4], i940.limitZ)
  i940.dampen = i941[5]
  i940.separateAxes = !!i941[6]
  i940.space = i941[7]
  i940.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[8], i940.drag)
  i940.multiplyDragByParticleSize = !!i941[9]
  i940.multiplyDragByParticleVelocity = !!i941[10]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i943 = data
  i942.enabled = !!i943[0]
  request.r(i943[1], i943[2], 0, i942, 'sharedMaterial')
  var i945 = i943[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.sharedMaterials = i944
  i942.receiveShadows = !!i943[4]
  i942.shadowCastingMode = i943[5]
  i942.sortingLayerID = i943[6]
  i942.sortingOrder = i943[7]
  i942.lightmapIndex = i943[8]
  i942.lightmapSceneIndex = i943[9]
  i942.lightmapScaleOffset = new pc.Vec4( i943[10], i943[11], i943[12], i943[13] )
  i942.lightProbeUsage = i943[14]
  i942.reflectionProbeUsage = i943[15]
  request.r(i943[16], i943[17], 0, i942, 'mesh')
  i942.meshCount = i943[18]
  i942.activeVertexStreamsCount = i943[19]
  i942.alignment = i943[20]
  i942.renderMode = i943[21]
  i942.sortMode = i943[22]
  i942.lengthScale = i943[23]
  i942.velocityScale = i943[24]
  i942.cameraVelocityScale = i943[25]
  i942.normalDirection = i943[26]
  i942.sortingFudge = i943[27]
  i942.minParticleSize = i943[28]
  i942.maxParticleSize = i943[29]
  i942.pivot = new pc.Vec3( i943[30], i943[31], i943[32] )
  request.r(i943[33], i943[34], 0, i942, 'trailMaterial')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i947 = data
  i946.name = i947[0]
  i946.atlasId = i947[1]
  i946.mipmapCount = i947[2]
  i946.hdr = !!i947[3]
  i946.size = i947[4]
  i946.anisoLevel = i947[5]
  i946.filterMode = i947[6]
  var i949 = i947[7]
  var i948 = []
  for(var i = 0; i < i949.length; i += 4) {
    i948.push( UnityEngine.Rect.MinMaxRect(i949[i + 0], i949[i + 1], i949[i + 2], i949[i + 3]) );
  }
  i946.rects = i948
  i946.wrapU = i947[8]
  i946.wrapV = i947[9]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i953 = data
  i952.name = i953[0]
  i952.index = i953[1]
  i952.startup = !!i953[2]
  return i952
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'PlayableSettings' )
  var i955 = data
  i954.m_SkipMainMenu = !!i955[0]
  i954.m_UseCTAScreen = !!i955[1]
  i954.m_EndcardActivationSendsToStore = !!i955[2]
  i954.m_ShowEndcardAfterXTaps = !!i955[3]
  i954.m_TapsBeforeShowingEndcard = i955[4]
  return i954
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i956 = root || request.c( 'SimpleDeactivateOnTap' )
  var i957 = data
  return i956
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_FirstSelected')
  i958.m_sendNavigationEvents = !!i959[2]
  i958.m_DragThreshold = i959[3]
  return i958
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i961 = data
  i960.m_HorizontalAxis = i961[0]
  i960.m_VerticalAxis = i961[1]
  i960.m_SubmitButton = i961[2]
  i960.m_CancelButton = i961[3]
  i960.m_InputActionsPerSecond = i961[4]
  i960.m_RepeatDelay = i961[5]
  i960.m_ForceModuleActive = !!i961[6]
  i960.m_SendPointerHoverToParent = !!i961[7]
  return i960
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i962 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_SequenceManagerPrefab')
  return i962
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i964 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_MusicSource')
  request.r(i965[2], i965[3], 0, i964, 'm_EffectSource')
  i964.m_MinSoundInterval = i965[4]
  var i967 = i965[5]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i967[i + 0]) );
  }
  i964.m_Sounds = i966
  return i964
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i970 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i971 = data
  i970.m_SoundID = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'm_AudioClip')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'clip')
  request.r(i973[2], i973[3], 0, i972, 'outputAudioMixerGroup')
  i972.playOnAwake = !!i973[4]
  i972.loop = !!i973[5]
  i972.time = i973[6]
  i972.volume = i973[7]
  i972.pitch = i973[8]
  i972.enabled = !!i973[9]
  return i972
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i974 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_Canvas')
  request.r(i975[2], i975[3], 0, i974, 'm_Root')
  request.r(i975[4], i975[5], 0, i974, 'm_ViewLayer')
  return i974
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i976 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_GoldText')
  var i979 = i977[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.Keys = i978
  i976.gainKeyColor = new pc.Color(i977[3], i977[4], i977[5], i977[6])
  return i976
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i982 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_LoseEvent')
  return i982
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i984 = root || request.c( 'CollectableParticleManager' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'keyParticlePrefab')
  request.r(i985[2], i985[3], 0, i984, 'coinParticlePrefab')
  i984.keyParticleCount = i985[4]
  i984.coinParticlesCount = i985[5]
  return i984
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i986 = root || request.c( 'CheerPhraseController' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i986.phrases = i988
  i986.cheerPhraseColour = new pc.Color(i987[1], i987[2], i987[3], i987[4])
  request.r(i987[5], i987[6], 0, i986, 'cheerText')
  request.r(i987[7], i987[8], 0, i986, 'cheerTextAnimator')
  request.r(i987[9], i987[10], 0, i986, 'keyCollectEvent')
  return i986
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i992 = root || request.c( 'OutroAnimationController' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'winEvent')
  i992.endCardDelay = i993[2]
  var i995 = i993[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.confettiParticles = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i999 = data
  i998.enabled = !!i999[0]
  i998.aspect = i999[1]
  i998.orthographic = !!i999[2]
  i998.orthographicSize = i999[3]
  i998.backgroundColor = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.nearClipPlane = i999[8]
  i998.farClipPlane = i999[9]
  i998.fieldOfView = i999[10]
  i998.depth = i999[11]
  i998.clearFlags = i999[12]
  i998.cullingMask = i999[13]
  i998.rect = i999[14]
  request.r(i999[15], i999[16], 0, i998, 'targetTexture')
  i998.usePhysicalProperties = !!i999[17]
  i998.focalLength = i999[18]
  i998.sensorSize = new pc.Vec2( i999[19], i999[20] )
  i998.lensShift = new pc.Vec2( i999[21], i999[22] )
  i998.gateFit = i999[23]
  i998.commandBufferCount = i999[24]
  i998.cameraType = i999[25]
  return i998
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i1000 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'targetPlayer')
  i1000.m_CameraAnglePreset = i1001[2]
  i1000.m_Offset = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  i1000.m_LookAtOffset = new pc.Vec3( i1001[6], i1001[7], i1001[8] )
  i1000.m_LockCameraPosition = !!i1001[9]
  i1000.m_SmoothCameraFollow = !!i1001[10]
  i1000.m_SmoothCameraFollowStrength = i1001[11]
  return i1000
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i1002 = root || request.c( 'CoinEffectManager' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'coinEffectPrefab')
  request.r(i1003[2], i1003[3], 0, i1002, 'coinCounter')
  request.r(i1003[4], i1003[5], 0, i1002, 'player')
  i1002.speed = i1003[6]
  request.r(i1003[7], i1003[8], 0, i1002, 'm_CoinEvent')
  i1002.effectPoolCount = i1003[9]
  i1002.offsetZ = i1003[10]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.type = i1005[1]
  i1004.color = new pc.Color(i1005[2], i1005[3], i1005[4], i1005[5])
  i1004.cullingMask = i1005[6]
  i1004.intensity = i1005[7]
  i1004.range = i1005[8]
  i1004.spotAngle = i1005[9]
  i1004.shadows = i1005[10]
  i1004.shadowNormalBias = i1005[11]
  i1004.shadowBias = i1005[12]
  i1004.shadowStrength = i1005[13]
  i1004.shadowResolution = i1005[14]
  i1004.lightmapBakeType = i1005[15]
  i1004.renderMode = i1005[16]
  request.r(i1005[17], i1005[18], 0, i1004, 'cookie')
  i1004.cookieSize = i1005[19]
  return i1004
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i1007 = data
  return i1006
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i1008 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_WinEvent')
  i1008.m_SnapToGrid = !!i1009[2]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.isTrigger = !!i1011[1]
  request.r(i1011[2], i1011[3], 0, i1010, 'material')
  request.r(i1011[4], i1011[5], 0, i1010, 'sharedMesh')
  i1010.convex = !!i1011[6]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1013 = data
  i1012.ambientIntensity = i1013[0]
  i1012.reflectionIntensity = i1013[1]
  i1012.ambientMode = i1013[2]
  i1012.ambientLight = new pc.Color(i1013[3], i1013[4], i1013[5], i1013[6])
  i1012.ambientSkyColor = new pc.Color(i1013[7], i1013[8], i1013[9], i1013[10])
  i1012.ambientGroundColor = new pc.Color(i1013[11], i1013[12], i1013[13], i1013[14])
  i1012.ambientEquatorColor = new pc.Color(i1013[15], i1013[16], i1013[17], i1013[18])
  i1012.fogColor = new pc.Color(i1013[19], i1013[20], i1013[21], i1013[22])
  i1012.fogEndDistance = i1013[23]
  i1012.fogStartDistance = i1013[24]
  i1012.fogDensity = i1013[25]
  i1012.fog = !!i1013[26]
  request.r(i1013[27], i1013[28], 0, i1012, 'skybox')
  i1012.fogMode = i1013[29]
  var i1015 = i1013[30]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1015[i + 0]) );
  }
  i1012.lightmaps = i1014
  i1012.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1013[31], i1012.lightProbes)
  i1012.lightmapsMode = i1013[32]
  i1012.mixedBakeMode = i1013[33]
  i1012.environmentLightingMode = i1013[34]
  i1012.ambientProbe = new pc.SphericalHarmonicsL2(i1013[35])
  i1012.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1013[36])
  i1012.useReferenceAmbientProbe = !!i1013[37]
  request.r(i1013[38], i1013[39], 0, i1012, 'customReflection')
  request.r(i1013[40], i1013[41], 0, i1012, 'defaultReflection')
  i1012.defaultReflectionMode = i1013[42]
  i1012.defaultReflectionResolution = i1013[43]
  i1012.sunLightObjectId = i1013[44]
  i1012.pixelLightCount = i1013[45]
  i1012.defaultReflectionHDR = !!i1013[46]
  i1012.hasLightDataAsset = !!i1013[47]
  i1012.hasManualGenerate = !!i1013[48]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'lightmapColor')
  request.r(i1019[2], i1019[3], 0, i1018, 'lightmapDirection')
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1020 = root || new UnityEngine.LightProbes()
  var i1021 = data
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.bounciness = i1029[1]
  i1028.dynamicFriction = i1029[2]
  i1028.staticFriction = i1029[3]
  i1028.frictionCombine = i1029[4]
  i1028.bounceCombine = i1029[5]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1033[i + 0]));
  }
  i1030.ShaderCompilationErrors = i1032
  i1030.name = i1031[1]
  i1030.guid = i1031[2]
  var i1035 = i1031[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.shaderDefinedKeywords = i1034
  var i1037 = i1031[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1037[i + 0]) );
  }
  i1030.passes = i1036
  var i1039 = i1031[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1039[i + 0]) );
  }
  i1030.usePasses = i1038
  var i1041 = i1031[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1041[i + 0]) );
  }
  i1030.defaultParameterValues = i1040
  request.r(i1031[7], i1031[8], 0, i1030, 'unityFallbackShader')
  i1030.readDepth = !!i1031[9]
  i1030.isCreatedByShaderGraph = !!i1031[10]
  i1030.compiled = !!i1031[11]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1045 = data
  i1044.shaderName = i1045[0]
  i1044.errorMessage = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1048 = root || new pc.UnityShaderPass()
  var i1049 = data
  i1048.id = i1049[0]
  i1048.subShaderIndex = i1049[1]
  i1048.name = i1049[2]
  i1048.passType = i1049[3]
  i1048.grabPassTextureName = i1049[4]
  i1048.usePass = !!i1049[5]
  i1048.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[6], i1048.zTest)
  i1048.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[7], i1048.zWrite)
  i1048.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[8], i1048.culling)
  i1048.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1049[9], i1048.blending)
  i1048.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1049[10], i1048.alphaBlending)
  i1048.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[11], i1048.colorWriteMask)
  i1048.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[12], i1048.offsetUnits)
  i1048.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[13], i1048.offsetFactor)
  i1048.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[14], i1048.stencilRef)
  i1048.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[15], i1048.stencilReadMask)
  i1048.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[16], i1048.stencilWriteMask)
  i1048.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1049[17], i1048.stencilOp)
  i1048.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1049[18], i1048.stencilOpFront)
  i1048.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1049[19], i1048.stencilOpBack)
  var i1051 = i1049[20]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1051[i + 0]) );
  }
  i1048.tags = i1050
  var i1053 = i1049[21]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( i1053[i + 0] );
  }
  i1048.passDefinedKeywords = i1052
  var i1055 = i1049[22]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1055[i + 0]) );
  }
  i1048.passDefinedKeywordGroups = i1054
  var i1057 = i1049[23]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1057[i + 0]) );
  }
  i1048.variants = i1056
  var i1059 = i1049[24]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1059[i + 0]) );
  }
  i1048.excludedVariants = i1058
  i1048.hasDepthReader = !!i1049[25]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1061 = data
  i1060.val = i1061[0]
  i1060.name = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1063 = data
  i1062.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[0], i1062.src)
  i1062.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[1], i1062.dst)
  i1062.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[2], i1062.op)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1065 = data
  i1064.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[0], i1064.pass)
  i1064.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[1], i1064.fail)
  i1064.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[2], i1064.zFail)
  i1064.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[3], i1064.comp)
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.value = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1072.keywords = i1074
  i1072.hasDiscard = !!i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1079 = data
  i1078.passId = i1079[0]
  i1078.subShaderIndex = i1079[1]
  var i1081 = i1079[2]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.keywords = i1080
  i1078.vertexProgram = i1079[3]
  i1078.fragmentProgram = i1079[4]
  i1078.exportedForWebGl2 = !!i1079[5]
  i1078.readDepth = !!i1079[6]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'shader')
  i1084.pass = i1085[2]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.type = i1089[1]
  i1088.value = new pc.Vec4( i1089[2], i1089[3], i1089[4], i1089[5] )
  i1088.textureValue = i1089[6]
  i1088.shaderPropertyFlag = i1089[7]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1091 = data
  i1090.name = i1091[0]
  request.r(i1091[1], i1091[2], 0, i1090, 'texture')
  i1090.aabb = i1091[3]
  i1090.vertices = i1091[4]
  i1090.triangles = i1091[5]
  i1090.textureRect = UnityEngine.Rect.MinMaxRect(i1091[6], i1091[7], i1091[8], i1091[9])
  i1090.packedRect = UnityEngine.Rect.MinMaxRect(i1091[10], i1091[11], i1091[12], i1091[13])
  i1090.border = new pc.Vec4( i1091[14], i1091[15], i1091[16], i1091[17] )
  i1090.transparency = i1091[18]
  i1090.bounds = i1091[19]
  i1090.pixelsPerUnit = i1091[20]
  i1090.textureWidth = i1091[21]
  i1090.textureHeight = i1091[22]
  i1090.nativeSize = new pc.Vec2( i1091[23], i1091[24] )
  i1090.pivot = new pc.Vec2( i1091[25], i1091[26] )
  i1090.textureRectOffset = new pc.Vec2( i1091[27], i1091[28] )
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1093 = data
  i1092.name = i1093[0]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.wrapMode = i1095[1]
  i1094.isLooping = !!i1095[2]
  i1094.length = i1095[3]
  var i1097 = i1095[4]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1097[i + 0]) );
  }
  i1094.curves = i1096
  var i1099 = i1095[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1099[i + 0]) );
  }
  i1094.events = i1098
  i1094.halfPrecision = !!i1095[6]
  i1094._frameRate = i1095[7]
  i1094.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1095[8], i1094.localBounds)
  i1094.hasMuscleCurves = !!i1095[9]
  var i1101 = i1095[10]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1094.clipMuscleConstant = i1100
  i1094.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1095[11], i1094.clipBindingConstant)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1105 = data
  i1104.path = i1105[0]
  i1104.hash = i1105[1]
  i1104.componentType = i1105[2]
  i1104.property = i1105[3]
  i1104.keys = i1105[4]
  var i1107 = i1105[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1107[i + 0]) );
  }
  i1104.objectReferenceKeys = i1106
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1111 = data
  i1110.functionName = i1111[0]
  i1110.floatParameter = i1111[1]
  i1110.intParameter = i1111[2]
  i1110.stringParameter = i1111[3]
  request.r(i1111[4], i1111[5], 0, i1110, 'objectReferenceParameter')
  i1110.time = i1111[6]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1113 = data
  i1112.center = new pc.Vec3( i1113[0], i1113[1], i1113[2] )
  i1112.extends = new pc.Vec3( i1113[3], i1113[4], i1113[5] )
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.genericBindings = i1118
  var i1121 = i1117[1]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1116.pptrCurveMapping = i1120
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1125 = data
  i1124.time = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'value')
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.ascent = i1127[1]
  i1126.originalLineHeight = i1127[2]
  i1126.fontSize = i1127[3]
  var i1129 = i1127[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1129[i + 0]) );
  }
  i1126.characterInfo = i1128
  request.r(i1127[5], i1127[6], 0, i1126, 'texture')
  i1126.originalFontSize = i1127[7]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1133 = data
  i1132.index = i1133[0]
  i1132.advance = i1133[1]
  i1132.bearing = i1133[2]
  i1132.glyphWidth = i1133[3]
  i1132.glyphHeight = i1133[4]
  i1132.minX = i1133[5]
  i1132.maxX = i1133[6]
  i1132.minY = i1133[7]
  i1132.maxY = i1133[8]
  i1132.uvBottomLeftX = i1133[9]
  i1132.uvBottomLeftY = i1133[10]
  i1132.uvBottomRightX = i1133[11]
  i1132.uvBottomRightY = i1133[12]
  i1132.uvTopLeftX = i1133[13]
  i1132.uvTopLeftY = i1133[14]
  i1132.uvTopRightX = i1133[15]
  i1132.uvTopRightY = i1133[16]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1135 = data
  i1134.name = i1135[0]
  var i1137 = i1135[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1137[i + 0]) );
  }
  i1134.layers = i1136
  var i1139 = i1135[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1139[i + 0]) );
  }
  i1134.parameters = i1138
  i1134.animationClips = i1135[3]
  i1134.avatarUnsupported = i1135[4]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.defaultWeight = i1143[1]
  i1142.blendingMode = i1143[2]
  i1142.avatarMask = i1143[3]
  i1142.syncedLayerIndex = i1143[4]
  i1142.syncedLayerAffectsTiming = !!i1143[5]
  i1142.syncedLayers = i1143[6]
  i1142.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1143[7], i1142.stateMachine)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.path = i1145[2]
  var i1147 = i1145[3]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1147[i + 0]) );
  }
  i1144.states = i1146
  var i1149 = i1145[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1149[i + 0]) );
  }
  i1144.machines = i1148
  var i1151 = i1145[5]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1151[i + 0]) );
  }
  i1144.entryStateTransitions = i1150
  var i1153 = i1145[6]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1153[i + 0]) );
  }
  i1144.exitStateTransitions = i1152
  var i1155 = i1145[7]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1155[i + 0]) );
  }
  i1144.anyStateTransitions = i1154
  i1144.defaultStateId = i1145[8]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.name = i1159[1]
  i1158.cycleOffset = i1159[2]
  i1158.cycleOffsetParameter = i1159[3]
  i1158.cycleOffsetParameterActive = !!i1159[4]
  i1158.mirror = !!i1159[5]
  i1158.mirrorParameter = i1159[6]
  i1158.mirrorParameterActive = !!i1159[7]
  i1158.motionId = i1159[8]
  i1158.nameHash = i1159[9]
  i1158.fullPathHash = i1159[10]
  i1158.speed = i1159[11]
  i1158.speedParameter = i1159[12]
  i1158.speedParameterActive = !!i1159[13]
  i1158.tag = i1159[14]
  i1158.tagHash = i1159[15]
  i1158.writeDefaultValues = !!i1159[16]
  var i1161 = i1159[17]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 2, i1160, '')
  }
  i1158.behaviours = i1160
  var i1163 = i1159[18]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1163[i + 0]) );
  }
  i1158.transitions = i1162
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1169 = data
  i1168.fullPath = i1169[0]
  i1168.canTransitionToSelf = !!i1169[1]
  i1168.duration = i1169[2]
  i1168.exitTime = i1169[3]
  i1168.hasExitTime = !!i1169[4]
  i1168.hasFixedDuration = !!i1169[5]
  i1168.interruptionSource = i1169[6]
  i1168.offset = i1169[7]
  i1168.orderedInterruption = !!i1169[8]
  i1168.destinationStateId = i1169[9]
  i1168.isExit = !!i1169[10]
  i1168.mute = !!i1169[11]
  i1168.solo = !!i1169[12]
  var i1171 = i1169[13]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1171[i + 0]) );
  }
  i1168.conditions = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1175 = data
  i1174.mode = i1175[0]
  i1174.parameter = i1175[1]
  i1174.threshold = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1181 = data
  i1180.destinationStateId = i1181[0]
  i1180.isExit = !!i1181[1]
  i1180.mute = !!i1181[2]
  i1180.solo = !!i1181[3]
  var i1183 = i1181[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1183[i + 0]) );
  }
  i1180.conditions = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1187 = data
  i1186.defaultBool = !!i1187[0]
  i1186.defaultFloat = i1187[1]
  i1186.defaultInt = i1187[2]
  i1186.name = i1187[3]
  i1186.nameHash = i1187[4]
  i1186.type = i1187[5]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.bytes64 = i1189[1]
  i1188.data = i1189[2]
  return i1188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1191 = data
  i1190.hashCode = i1191[0]
  request.r(i1191[1], i1191[2], 0, i1190, 'material')
  i1190.materialHashCode = i1191[3]
  request.r(i1191[4], i1191[5], 0, i1190, 'atlas')
  i1190.normalStyle = i1191[6]
  i1190.normalSpacingOffset = i1191[7]
  i1190.boldStyle = i1191[8]
  i1190.boldSpacing = i1191[9]
  i1190.italicStyle = i1191[10]
  i1190.tabSize = i1191[11]
  i1190.m_Version = i1191[12]
  i1190.m_SourceFontFileGUID = i1191[13]
  request.r(i1191[14], i1191[15], 0, i1190, 'm_SourceFontFile_EditorRef')
  request.r(i1191[16], i1191[17], 0, i1190, 'm_SourceFontFile')
  i1190.m_AtlasPopulationMode = i1191[18]
  i1190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1191[19], i1190.m_FaceInfo)
  var i1193 = i1191[20]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.Glyph', i1193[i + 0]));
  }
  i1190.m_GlyphTable = i1192
  var i1195 = i1191[21]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_Character', i1195[i + 0]));
  }
  i1190.m_CharacterTable = i1194
  var i1197 = i1191[22]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1190.m_AtlasTextures = i1196
  i1190.m_AtlasTextureIndex = i1191[23]
  i1190.m_IsMultiAtlasTexturesEnabled = !!i1191[24]
  i1190.m_ClearDynamicDataOnBuild = !!i1191[25]
  var i1199 = i1191[26]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.GlyphRect', i1199[i + 0]));
  }
  i1190.m_UsedGlyphRects = i1198
  var i1201 = i1191[27]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('UnityEngine.TextCore.GlyphRect', i1201[i + 0]));
  }
  i1190.m_FreeGlyphRects = i1200
  i1190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1191[28], i1190.m_fontInfo)
  i1190.m_AtlasWidth = i1191[29]
  i1190.m_AtlasHeight = i1191[30]
  i1190.m_AtlasPadding = i1191[31]
  i1190.m_AtlasRenderMode = i1191[32]
  var i1203 = i1191[33]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('TMPro.TMP_Glyph', i1203[i + 0]));
  }
  i1190.m_glyphInfoList = i1202
  i1190.m_KerningTable = request.d('TMPro.KerningTable', i1191[34], i1190.m_KerningTable)
  i1190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1191[35], i1190.m_FontFeatureTable)
  var i1205 = i1191[36]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 1, i1204, '')
  }
  i1190.fallbackFontAssets = i1204
  var i1207 = i1191[37]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 1, i1206, '')
  }
  i1190.m_FallbackFontAssetTable = i1206
  i1190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1191[38], i1190.m_CreationSettings)
  var i1209 = i1191[39]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('TMPro.TMP_FontWeightPair', i1209[i + 0]) );
  }
  i1190.m_FontWeightTable = i1208
  var i1211 = i1191[40]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('TMPro.TMP_FontWeightPair', i1211[i + 0]) );
  }
  i1190.fontWeights = i1210
  return i1190
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1213 = data
  i1212.m_FaceIndex = i1213[0]
  i1212.m_FamilyName = i1213[1]
  i1212.m_StyleName = i1213[2]
  i1212.m_PointSize = i1213[3]
  i1212.m_Scale = i1213[4]
  i1212.m_UnitsPerEM = i1213[5]
  i1212.m_LineHeight = i1213[6]
  i1212.m_AscentLine = i1213[7]
  i1212.m_CapLine = i1213[8]
  i1212.m_MeanLine = i1213[9]
  i1212.m_Baseline = i1213[10]
  i1212.m_DescentLine = i1213[11]
  i1212.m_SuperscriptOffset = i1213[12]
  i1212.m_SuperscriptSize = i1213[13]
  i1212.m_SubscriptOffset = i1213[14]
  i1212.m_SubscriptSize = i1213[15]
  i1212.m_UnderlineOffset = i1213[16]
  i1212.m_UnderlineThickness = i1213[17]
  i1212.m_StrikethroughOffset = i1213[18]
  i1212.m_StrikethroughThickness = i1213[19]
  i1212.m_TabWidth = i1213[20]
  return i1212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1217 = data
  i1216.m_Index = i1217[0]
  i1216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1217[1], i1216.m_Metrics)
  i1216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1217[2], i1216.m_GlyphRect)
  i1216.m_Scale = i1217[3]
  i1216.m_AtlasIndex = i1217[4]
  i1216.m_ClassDefinitionType = i1217[5]
  return i1216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1219 = data
  i1218.m_Width = i1219[0]
  i1218.m_Height = i1219[1]
  i1218.m_HorizontalBearingX = i1219[2]
  i1218.m_HorizontalBearingY = i1219[3]
  i1218.m_HorizontalAdvance = i1219[4]
  return i1218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1221 = data
  i1220.m_X = i1221[0]
  i1220.m_Y = i1221[1]
  i1220.m_Width = i1221[2]
  i1220.m_Height = i1221[3]
  return i1220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Character' )
  var i1225 = data
  i1224.m_ElementType = i1225[0]
  i1224.m_Unicode = i1225[1]
  i1224.m_GlyphIndex = i1225[2]
  i1224.m_Scale = i1225[3]
  return i1224
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1231 = data
  i1230.Name = i1231[0]
  i1230.PointSize = i1231[1]
  i1230.Scale = i1231[2]
  i1230.CharacterCount = i1231[3]
  i1230.LineHeight = i1231[4]
  i1230.Baseline = i1231[5]
  i1230.Ascender = i1231[6]
  i1230.CapHeight = i1231[7]
  i1230.Descender = i1231[8]
  i1230.CenterLine = i1231[9]
  i1230.SuperscriptOffset = i1231[10]
  i1230.SubscriptOffset = i1231[11]
  i1230.SubSize = i1231[12]
  i1230.Underline = i1231[13]
  i1230.UnderlineThickness = i1231[14]
  i1230.strikethrough = i1231[15]
  i1230.strikethroughThickness = i1231[16]
  i1230.TabWidth = i1231[17]
  i1230.Padding = i1231[18]
  i1230.AtlasWidth = i1231[19]
  i1230.AtlasHeight = i1231[20]
  return i1230
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1235 = data
  i1234.id = i1235[0]
  i1234.x = i1235[1]
  i1234.y = i1235[2]
  i1234.width = i1235[3]
  i1234.height = i1235[4]
  i1234.xOffset = i1235[5]
  i1234.yOffset = i1235[6]
  i1234.xAdvance = i1235[7]
  i1234.scale = i1235[8]
  return i1234
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.KerningTable' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.KerningPair', i1239[i + 0]));
  }
  i1236.kerningPairs = i1238
  return i1236
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.KerningPair' )
  var i1243 = data
  i1242.xOffset = i1243[0]
  i1242.m_FirstGlyph = i1243[1]
  i1242.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1243[2], i1242.m_FirstGlyphAdjustments)
  i1242.m_SecondGlyph = i1243[3]
  i1242.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1243[4], i1242.m_SecondGlyphAdjustments)
  i1242.m_IgnoreSpacingAdjustments = !!i1243[5]
  return i1242
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1247[i + 0]));
  }
  i1244.m_GlyphPairAdjustmentRecords = i1246
  return i1244
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1251 = data
  i1250.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1251[0], i1250.m_FirstAdjustmentRecord)
  i1250.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1251[1], i1250.m_SecondAdjustmentRecord)
  i1250.m_FeatureLookupFlags = i1251[2]
  return i1250
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1253 = data
  i1252.m_GlyphIndex = i1253[0]
  i1252.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1253[1], i1252.m_GlyphValueRecord)
  return i1252
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1255 = data
  i1254.m_XPlacement = i1255[0]
  i1254.m_YPlacement = i1255[1]
  i1254.m_XAdvance = i1255[2]
  i1254.m_YAdvance = i1255[3]
  return i1254
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1259 = data
  i1258.sourceFontFileName = i1259[0]
  i1258.sourceFontFileGUID = i1259[1]
  i1258.pointSizeSamplingMode = i1259[2]
  i1258.pointSize = i1259[3]
  i1258.padding = i1259[4]
  i1258.packingMode = i1259[5]
  i1258.atlasWidth = i1259[6]
  i1258.atlasHeight = i1259[7]
  i1258.characterSetSelectionMode = i1259[8]
  i1258.characterSequence = i1259[9]
  i1258.referencedFontAssetGUID = i1259[10]
  i1258.referencedTextAssetGUID = i1259[11]
  i1258.fontStyle = i1259[12]
  i1258.fontStyleModifier = i1259[13]
  i1258.renderMode = i1259[14]
  i1258.includeFontFeatures = !!i1259[15]
  return i1258
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'regularTypeface')
  request.r(i1263[2], i1263[3], 0, i1262, 'italicTypeface')
  return i1262
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i1264 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i1265 = data
  i1264.Count = i1265[0]
  return i1264
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i1266 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i1267 = data
  return i1266
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1269 = data
  i1268.useSafeMode = !!i1269[0]
  i1268.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1269[1], i1268.safeModeOptions)
  i1268.timeScale = i1269[2]
  i1268.unscaledTimeScale = i1269[3]
  i1268.useSmoothDeltaTime = !!i1269[4]
  i1268.maxSmoothUnscaledTime = i1269[5]
  i1268.rewindCallbackMode = i1269[6]
  i1268.showUnityEditorReport = !!i1269[7]
  i1268.logBehaviour = i1269[8]
  i1268.drawGizmos = !!i1269[9]
  i1268.defaultRecyclable = !!i1269[10]
  i1268.defaultAutoPlay = i1269[11]
  i1268.defaultUpdateType = i1269[12]
  i1268.defaultTimeScaleIndependent = !!i1269[13]
  i1268.defaultEaseType = i1269[14]
  i1268.defaultEaseOvershootOrAmplitude = i1269[15]
  i1268.defaultEasePeriod = i1269[16]
  i1268.defaultAutoKill = !!i1269[17]
  i1268.defaultLoopType = i1269[18]
  i1268.debugMode = !!i1269[19]
  i1268.debugStoreTargetId = !!i1269[20]
  i1268.showPreviewPanel = !!i1269[21]
  i1268.storeSettingsLocation = i1269[22]
  i1268.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1269[23], i1268.modules)
  i1268.createASMDEF = !!i1269[24]
  i1268.showPlayingTweens = !!i1269[25]
  i1268.showPausedTweens = !!i1269[26]
  return i1268
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1270 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1271 = data
  i1270.logBehaviour = i1271[0]
  i1270.nestedTweenFailureBehaviour = i1271[1]
  return i1270
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1272 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1273 = data
  i1272.showPanel = !!i1273[0]
  i1272.audioEnabled = !!i1273[1]
  i1272.physicsEnabled = !!i1273[2]
  i1272.physics2DEnabled = !!i1273[3]
  i1272.spriteEnabled = !!i1273[4]
  i1272.uiEnabled = !!i1273[5]
  i1272.textMeshProEnabled = !!i1273[6]
  i1272.tk2DEnabled = !!i1273[7]
  i1272.deAudioEnabled = !!i1273[8]
  i1272.deUnityExtendedEnabled = !!i1273[9]
  i1272.epoOutlineEnabled = !!i1273[10]
  return i1272
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_Settings' )
  var i1275 = data
  i1274.m_enableWordWrapping = !!i1275[0]
  i1274.m_enableKerning = !!i1275[1]
  i1274.m_enableExtraPadding = !!i1275[2]
  i1274.m_enableTintAllSprites = !!i1275[3]
  i1274.m_enableParseEscapeCharacters = !!i1275[4]
  i1274.m_EnableRaycastTarget = !!i1275[5]
  i1274.m_GetFontFeaturesAtRuntime = !!i1275[6]
  i1274.m_missingGlyphCharacter = i1275[7]
  i1274.m_warningsDisabled = !!i1275[8]
  request.r(i1275[9], i1275[10], 0, i1274, 'm_defaultFontAsset')
  i1274.m_defaultFontAssetPath = i1275[11]
  i1274.m_defaultFontSize = i1275[12]
  i1274.m_defaultAutoSizeMinRatio = i1275[13]
  i1274.m_defaultAutoSizeMaxRatio = i1275[14]
  i1274.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1275[15], i1275[16] )
  i1274.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1275[17], i1275[18] )
  i1274.m_autoSizeTextContainer = !!i1275[19]
  i1274.m_IsTextObjectScaleStatic = !!i1275[20]
  var i1277 = i1275[21]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 1, i1276, '')
  }
  i1274.m_fallbackFontAssets = i1276
  i1274.m_matchMaterialPreset = !!i1275[22]
  request.r(i1275[23], i1275[24], 0, i1274, 'm_defaultSpriteAsset')
  i1274.m_defaultSpriteAssetPath = i1275[25]
  i1274.m_enableEmojiSupport = !!i1275[26]
  i1274.m_MissingCharacterSpriteUnicode = i1275[27]
  i1274.m_defaultColorGradientPresetsPath = i1275[28]
  request.r(i1275[29], i1275[30], 0, i1274, 'm_defaultStyleSheet')
  i1274.m_StyleSheetsResourcePath = i1275[31]
  request.r(i1275[32], i1275[33], 0, i1274, 'm_leadingCharacters')
  request.r(i1275[34], i1275[35], 0, i1274, 'm_followingCharacters')
  i1274.m_UseModernHangulLineBreakingRules = !!i1275[36]
  return i1274
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1279 = data
  i1278.hashCode = i1279[0]
  request.r(i1279[1], i1279[2], 0, i1278, 'material')
  i1278.materialHashCode = i1279[3]
  request.r(i1279[4], i1279[5], 0, i1278, 'spriteSheet')
  var i1281 = i1279[6]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.TMP_Sprite', i1281[i + 0]));
  }
  i1278.spriteInfoList = i1280
  var i1283 = i1279[7]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1283.length; i += 2) {
  request.r(i1283[i + 0], i1283[i + 1], 1, i1282, '')
  }
  i1278.fallbackSpriteAssets = i1282
  i1278.m_Version = i1279[8]
  i1278.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1279[9], i1278.m_FaceInfo)
  var i1285 = i1279[10]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_SpriteCharacter', i1285[i + 0]));
  }
  i1278.m_SpriteCharacterTable = i1284
  var i1287 = i1279[11]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.TMP_SpriteGlyph', i1287[i + 0]));
  }
  i1278.m_SpriteGlyphTable = i1286
  return i1278
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.hashCode = i1291[1]
  i1290.unicode = i1291[2]
  i1290.pivot = new pc.Vec2( i1291[3], i1291[4] )
  request.r(i1291[5], i1291[6], 0, i1290, 'sprite')
  i1290.id = i1291[7]
  i1290.x = i1291[8]
  i1290.y = i1291[9]
  i1290.width = i1291[10]
  i1290.height = i1291[11]
  i1290.xOffset = i1291[12]
  i1290.yOffset = i1291[13]
  i1290.xAdvance = i1291[14]
  i1290.scale = i1291[15]
  return i1290
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1297 = data
  i1296.m_Name = i1297[0]
  i1296.m_HashCode = i1297[1]
  i1296.m_ElementType = i1297[2]
  i1296.m_Unicode = i1297[3]
  i1296.m_GlyphIndex = i1297[4]
  i1296.m_Scale = i1297[5]
  return i1296
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'sprite')
  i1300.m_Index = i1301[2]
  i1300.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1301[3], i1300.m_Metrics)
  i1300.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1301[4], i1300.m_GlyphRect)
  i1300.m_Scale = i1301[5]
  i1300.m_AtlasIndex = i1301[6]
  i1300.m_ClassDefinitionType = i1301[7]
  return i1300
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.TMP_Style', i1305[i + 0]));
  }
  i1302.m_StyleList = i1304
  return i1302
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_Style' )
  var i1309 = data
  i1308.m_Name = i1309[0]
  i1308.m_HashCode = i1309[1]
  i1308.m_OpeningDefinition = i1309[2]
  i1308.m_ClosingDefinition = i1309[3]
  i1308.m_OpeningTagArray = i1309[4]
  i1308.m_ClosingTagArray = i1309[5]
  i1308.m_OpeningTagUnicodeArray = i1309[6]
  i1308.m_ClosingTagUnicodeArray = i1309[7]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1313[i + 0]) );
  }
  i1310.files = i1312
  i1310.componentToPrefabIds = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1317 = data
  i1316.path = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'unityObject')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1321[i + 0]) );
  }
  i1318.scriptsExecutionOrder = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1323[i + 0]) );
  }
  i1318.sortingLayers = i1322
  var i1325 = i1319[2]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1325[i + 0]) );
  }
  i1318.cullingLayers = i1324
  i1318.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1319[3], i1318.timeSettings)
  i1318.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1319[4], i1318.physicsSettings)
  i1318.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1319[5], i1318.physics2DSettings)
  i1318.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1319[6], i1318.qualitySettings)
  i1318.enableRealtimeShadows = !!i1319[7]
  i1318.enableAutoInstancing = !!i1319[8]
  i1318.enableDynamicBatching = !!i1319[9]
  i1318.lightmapEncodingQuality = i1319[10]
  i1318.desiredColorSpace = i1319[11]
  var i1327 = i1319[12]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1318.allTags = i1326
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1335 = data
  i1334.id = i1335[0]
  i1334.name = i1335[1]
  i1334.value = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1341 = data
  i1340.fixedDeltaTime = i1341[0]
  i1340.maximumDeltaTime = i1341[1]
  i1340.timeScale = i1341[2]
  i1340.maximumParticleTimestep = i1341[3]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1343 = data
  i1342.gravity = new pc.Vec3( i1343[0], i1343[1], i1343[2] )
  i1342.defaultSolverIterations = i1343[3]
  i1342.bounceThreshold = i1343[4]
  i1342.autoSyncTransforms = !!i1343[5]
  i1342.autoSimulation = !!i1343[6]
  var i1345 = i1343[7]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1345[i + 0]) );
  }
  i1342.collisionMatrix = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.layerId = i1349[1]
  i1348.otherLayerId = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'material')
  i1350.gravity = new pc.Vec2( i1351[2], i1351[3] )
  i1350.positionIterations = i1351[4]
  i1350.velocityIterations = i1351[5]
  i1350.velocityThreshold = i1351[6]
  i1350.maxLinearCorrection = i1351[7]
  i1350.maxAngularCorrection = i1351[8]
  i1350.maxTranslationSpeed = i1351[9]
  i1350.maxRotationSpeed = i1351[10]
  i1350.baumgarteScale = i1351[11]
  i1350.baumgarteTOIScale = i1351[12]
  i1350.timeToSleep = i1351[13]
  i1350.linearSleepTolerance = i1351[14]
  i1350.angularSleepTolerance = i1351[15]
  i1350.defaultContactOffset = i1351[16]
  i1350.autoSimulation = !!i1351[17]
  i1350.queriesHitTriggers = !!i1351[18]
  i1350.queriesStartInColliders = !!i1351[19]
  i1350.callbacksOnDisable = !!i1351[20]
  i1350.reuseCollisionCallbacks = !!i1351[21]
  i1350.autoSyncTransforms = !!i1351[22]
  var i1353 = i1351[23]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1353[i + 0]) );
  }
  i1350.collisionMatrix = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.layerId = i1357[1]
  i1356.otherLayerId = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1361[i + 0]) );
  }
  i1358.qualityLevels = i1360
  var i1363 = i1359[1]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.names = i1362
  i1358.shadows = i1359[2]
  i1358.anisotropicFiltering = i1359[3]
  i1358.antiAliasing = i1359[4]
  i1358.lodBias = i1359[5]
  i1358.shadowCascades = i1359[6]
  i1358.shadowDistance = i1359[7]
  i1358.shadowmaskMode = i1359[8]
  i1358.shadowProjection = i1359[9]
  i1358.shadowResolution = i1359[10]
  i1358.softParticles = !!i1359[11]
  i1358.softVegetation = !!i1359[12]
  i1358.activeColorSpace = i1359[13]
  i1358.desiredColorSpace = i1359[14]
  i1358.masterTextureLimit = i1359[15]
  i1358.maxQueuedFrames = i1359[16]
  i1358.particleRaycastBudget = i1359[17]
  i1358.pixelLightCount = i1359[18]
  i1358.realtimeReflectionProbes = !!i1359[19]
  i1358.shadowCascade2Split = i1359[20]
  i1358.shadowCascade4Split = new pc.Vec3( i1359[21], i1359[22], i1359[23] )
  i1358.streamingMipmapsActive = !!i1359[24]
  i1358.vSyncCount = i1359[25]
  i1358.asyncUploadBufferSize = i1359[26]
  i1358.asyncUploadTimeSlice = i1359[27]
  i1358.billboardsFaceCameraPosition = !!i1359[28]
  i1358.shadowNearPlaneOffset = i1359[29]
  i1358.streamingMipmapsMemoryBudget = i1359[30]
  i1358.maximumLODLevel = i1359[31]
  i1358.streamingMipmapsAddAllCameras = !!i1359[32]
  i1358.streamingMipmapsMaxLevelReduction = i1359[33]
  i1358.streamingMipmapsRenderersPerFrame = i1359[34]
  i1358.resolutionScalingFixedDPIFactor = i1359[35]
  i1358.streamingMipmapsMaxFileIORequests = i1359[36]
  i1358.currentQualityLevel = i1359[37]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1369 = data
  i1368.weight = i1369[0]
  i1368.vertices = i1369[1]
  i1368.normals = i1369[2]
  i1368.tangents = i1369[3]
  return i1368
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1371 = data
  i1370.xPlacement = i1371[0]
  i1370.yPlacement = i1371[1]
  i1370.xAdvance = i1371[2]
  i1370.yAdvance = i1371[3]
  return i1370
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[58],"87":[34],"88":[34],"89":[34],"90":[34],"91":[34],"92":[34],"93":[34],"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[95],"102":[95],"103":[95],"104":[95],"105":[95],"106":[95],"107":[95],"108":[58],"109":[31],"110":[111],"112":[111],"1":[0],"69":[113],"114":[113],"115":[10],"116":[113],"117":[0],"44":[31,0],"22":[0,16],"118":[0],"119":[16,0],"120":[31],"121":[16,0],"122":[0],"123":[124],"125":[0],"126":[0],"4":[1],"18":[16,0],"17":[0],"3":[1],"127":[0],"128":[0],"129":[0],"130":[0],"131":[0],"132":[0],"133":[0],"12":[0],"134":[0],"9":[16,0],"135":[0],"136":[0],"137":[0],"138":[0],"11":[16,0],"139":[0],"140":[51],"141":[51],"52":[51],"142":[51],"143":[58],"144":[58],"145":[124],"146":[124]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Texture2D","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Transform","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","PlayerController","InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","HyperCasual.Runner.SaveManager","CoinEffectMove","UnityEngine.BoxCollider","HyperCasual.Runner.Gate","TMPro.TextMeshPro","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","SimpleDeactivateOnTap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","UnityEngine.Camera","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","CollectableParticleManager","CheerPhraseController","OutroAnimationController","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","UnityEngine.Light","HyperCasual.Runner.LevelManager","HyperCasual.Runner.FinishLine","UnityEngine.MeshCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.18f1";

Deserializers.productName = "Luna Tutorial";

Deserializers.lunaInitializationTime = "06/27/2025 13:17:35";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "2";

Deserializers.lunaAppID = "30937";

Deserializers.projectId = "823cbd53-5386-408c-9595-fde0da052c3e";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.1\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "False";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1650";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4672";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.Luna-Tutorial";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "e736d9f0-5f86-4146-b6d5-0c1b32b4ecf3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

