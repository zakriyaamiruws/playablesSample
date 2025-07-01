var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSpring' )
  var i691 = data
  i690.spring = i691[0]
  i690.damper = i691[1]
  i690.targetPosition = i691[2]
  return i690
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointMotor' )
  var i693 = data
  i692.m_TargetVelocity = i693[0]
  i692.m_Force = i693[1]
  i692.m_FreeSpin = i693[2]
  return i692
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointLimits' )
  var i695 = data
  i694.m_Min = i695[0]
  i694.m_Max = i695[1]
  i694.m_Bounciness = i695[2]
  i694.m_BounceMinVelocity = i695[3]
  i694.m_ContactDistance = i695[4]
  i694.minBounce = i695[5]
  i694.maxBounce = i695[6]
  return i694
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointDrive' )
  var i697 = data
  i696.m_PositionSpring = i697[0]
  i696.m_PositionDamper = i697[1]
  i696.m_MaximumForce = i697[2]
  return i696
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i699 = data
  i698.m_Spring = i699[0]
  i698.m_Damper = i699[1]
  return i698
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i701 = data
  i700.m_Limit = i701[0]
  i700.m_Bounciness = i701[1]
  i700.m_ContactDistance = i701[2]
  return i700
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i703 = data
  i702.m_ExtremumSlip = i703[0]
  i702.m_ExtremumValue = i703[1]
  i702.m_AsymptoteSlip = i703[2]
  i702.m_AsymptoteValue = i703[3]
  i702.m_Stiffness = i703[4]
  return i702
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i705 = data
  i704.m_LowerAngle = i705[0]
  i704.m_UpperAngle = i705[1]
  return i704
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i707 = data
  i706.m_MotorSpeed = i707[0]
  i706.m_MaximumMotorTorque = i707[1]
  return i706
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i709 = data
  i708.m_DampingRatio = i709[0]
  i708.m_Frequency = i709[1]
  i708.m_Angle = i709[2]
  return i708
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i711 = data
  i710.m_LowerTranslation = i711[0]
  i710.m_UpperTranslation = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i713 = data
  i712.pivot = new pc.Vec2( i713[0], i713[1] )
  i712.anchorMin = new pc.Vec2( i713[2], i713[3] )
  i712.anchorMax = new pc.Vec2( i713[4], i713[5] )
  i712.sizeDelta = new pc.Vec2( i713[6], i713[7] )
  i712.anchoredPosition3D = new pc.Vec3( i713[8], i713[9], i713[10] )
  i712.rotation = new pc.Quat(i713[11], i713[12], i713[13], i713[14])
  i712.scale = new pc.Vec3( i713[15], i713[16], i713[17] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.planeDistance = i715[1]
  i714.referencePixelsPerUnit = i715[2]
  i714.isFallbackOverlay = !!i715[3]
  i714.renderMode = i715[4]
  i714.renderOrder = i715[5]
  i714.sortingLayerName = i715[6]
  i714.sortingOrder = i715[7]
  i714.scaleFactor = i715[8]
  request.r(i715[9], i715[10], 0, i714, 'worldCamera')
  i714.overrideSorting = !!i715[11]
  i714.pixelPerfect = !!i715[12]
  i714.targetDisplay = i715[13]
  i714.overridePixelPerfect = !!i715[14]
  return i714
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i717 = data
  i716.m_UiScaleMode = i717[0]
  i716.m_ReferencePixelsPerUnit = i717[1]
  i716.m_ScaleFactor = i717[2]
  i716.m_ReferenceResolution = new pc.Vec2( i717[3], i717[4] )
  i716.m_ScreenMatchMode = i717[5]
  i716.m_MatchWidthOrHeight = i717[6]
  i716.m_PhysicalUnit = i717[7]
  i716.m_FallbackScreenDPI = i717[8]
  i716.m_DefaultSpriteDPI = i717[9]
  i716.m_DynamicPixelsPerUnit = i717[10]
  i716.m_PresetInfoIsWorld = !!i717[11]
  return i716
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i719 = data
  i718.m_IgnoreReversedGraphics = !!i719[0]
  i718.m_BlockingObjects = i719[1]
  i718.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i719[2] )
  return i718
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i720 = root || request.c( 'EndCardController' )
  var i721 = data
  i720.alwaysShowEndcardTESTING = !!i721[0]
  i720.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i721[1], i720.EndCardOpenedEvent)
  i720._backgroundColor = new pc.Color(i721[2], i721[3], i721[4], i721[5])
  request.r(i721[6], i721[7], 0, i720, '_backgroundTexture')
  request.r(i721[8], i721[9], 0, i720, '_iconTexture')
  i720._iconColor = new pc.Color(i721[10], i721[11], i721[12], i721[13])
  request.r(i721[14], i721[15], 0, i720, '_buttonTexture')
  i720._buttonColor = new pc.Color(i721[16], i721[17], i721[18], i721[19])
  i720._endCardDescriptionText = i721[20]
  i720._CTAButtonText = i721[21]
  i720._useBestFitOnCTA = !!i721[22]
  i720._CTAFontColor = new pc.Color(i721[23], i721[24], i721[25], i721[26])
  i720._descriptionFontColor = new pc.Color(i721[27], i721[28], i721[29], i721[30])
  request.r(i721[31], i721[32], 0, i720, '_CTAFont')
  request.r(i721[33], i721[34], 0, i720, '_descriptionFont')
  i720._CTAFontSize = i721[35]
  i720._descriptionFontSize = i721[36]
  i720._centerDescriptionX = !!i721[37]
  i720._centerDescriptionY = !!i721[38]
  i720._centerButtonX = !!i721[39]
  i720._centerButtonY = !!i721[40]
  i720._descriptionPositionX = i721[41]
  i720._descriptionPositionY = i721[42]
  i720._buttonPositionX = i721[43]
  i720._buttonPositionY = i721[44]
  i720._CTAFontSizeLandscape = i721[45]
  i720._descriptionFontSizeLandscape = i721[46]
  i720._centerDescriptionXLandscape = !!i721[47]
  i720._centerDescriptionYLandscape = !!i721[48]
  i720._centerButtonXLandscape = !!i721[49]
  i720._centerButtonYLandscape = !!i721[50]
  i720._descriptionPositionXLandscape = i721[51]
  i720._descriptionPositionYLandscape = i721[52]
  i720._buttonPositionXLandscape = i721[53]
  i720._buttonPositionYLandscape = i721[54]
  i720._centerIconX = !!i721[55]
  i720._centerIconY = !!i721[56]
  i720._iconPositionX = i721[57]
  i720._iconPositionY = i721[58]
  i720._iconSize = i721[59]
  i720._roundEdgesOnIcon = !!i721[60]
  i720._centerIconXLandscape = !!i721[61]
  i720._centerIconYLandscape = !!i721[62]
  i720._iconPositionXLandscape = i721[63]
  i720._iconPositionYLandscape = i721[64]
  i720._iconSizeLandscape = i721[65]
  i720._roundEdgesOnIconLandscape = !!i721[66]
  i720._endCardClickableOptions = i721[67]
  i720._buttonAnimationType = i721[68]
  i720._endCardPortraitAnimationType = i721[69]
  i720._endCardLandscapeAnimationType = i721[70]
  request.r(i721[71], i721[72], 0, i720, '_backgroundImage')
  request.r(i721[73], i721[74], 0, i720, '_CTAButton')
  request.r(i721[75], i721[76], 0, i720, '_ScreenCTAButton')
  request.r(i721[77], i721[78], 0, i720, '_CTAButtonTextText')
  request.r(i721[79], i721[80], 0, i720, '_EndCardDescriptionTextText')
  request.r(i721[81], i721[82], 0, i720, '_maskIcon')
  request.r(i721[83], i721[84], 0, i720, '_iconRect')
  request.r(i721[85], i721[86], 0, i720, '_iconRectMask')
  request.r(i721[87], i721[88], 0, i720, '_descriptionRect')
  request.r(i721[89], i721[90], 0, i720, '_buttonRect')
  request.r(i721[91], i721[92], 0, i720, '_CTAButtonAnimator')
  request.r(i721[93], i721[94], 0, i720, '_endCardAnimator')
  request.r(i721[95], i721[96], 0, i720, '_iconImage')
  request.r(i721[97], i721[98], 0, i720, '_CTAButtonImage')
  return i720
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i723 = data
  i722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i723[0], i722.m_PersistentCalls)
  return i722
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i725 = data
  var i727 = i725[0]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('UnityEngine.Events.PersistentCall', i727[i + 0]));
  }
  i724.m_Calls = i726
  return i724
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_Target')
  i730.m_TargetAssemblyTypeName = i731[2]
  i730.m_MethodName = i731[3]
  i730.m_Mode = i731[4]
  i730.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i731[5], i730.m_Arguments)
  i730.m_CallState = i731[6]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'animatorController')
  request.r(i733[2], i733[3], 0, i732, 'avatar')
  i732.updateMode = i733[4]
  i732.hasTransformHierarchy = !!i733[5]
  i732.applyRootMotion = !!i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.humanBones = i734
  i732.enabled = !!i733[8]
  return i732
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i738 = root || request.c( 'EndCardSetScale' )
  var i739 = data
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i741 = data
  i740.cullTransparentMesh = !!i741[0]
  return i740
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i743 = data
  i742.m_AspectMode = i743[0]
  i742.m_AspectRatio = i743[1]
  return i742
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_Texture')
  i744.m_UVRect = UnityEngine.Rect.MinMaxRect(i745[2], i745[3], i745[4], i745[5])
  request.r(i745[6], i745[7], 0, i744, 'm_Material')
  i744.m_Maskable = !!i745[8]
  i744.m_Color = new pc.Color(i745[9], i745[10], i745[11], i745[12])
  i744.m_RaycastTarget = !!i745[13]
  i744.m_RaycastPadding = new pc.Vec4( i745[14], i745[15], i745[16], i745[17] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i747 = data
  i746.name = i747[0]
  i746.tagId = i747[1]
  i746.enabled = !!i747[2]
  i746.isStatic = !!i747[3]
  i746.layer = i747[4]
  return i746
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Mask' )
  var i749 = data
  i748.m_ShowMaskGraphic = !!i749[0]
  return i748
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Image' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Sprite')
  i750.m_Type = i751[2]
  i750.m_PreserveAspect = !!i751[3]
  i750.m_FillCenter = !!i751[4]
  i750.m_FillMethod = i751[5]
  i750.m_FillAmount = i751[6]
  i750.m_FillClockwise = !!i751[7]
  i750.m_FillOrigin = i751[8]
  i750.m_UseSpriteMesh = !!i751[9]
  i750.m_PixelsPerUnitMultiplier = i751[10]
  request.r(i751[11], i751[12], 0, i750, 'm_Material')
  i750.m_Maskable = !!i751[13]
  i750.m_Color = new pc.Color(i751[14], i751[15], i751[16], i751[17])
  i750.m_RaycastTarget = !!i751[18]
  i750.m_RaycastPadding = new pc.Vec4( i751[19], i751[20], i751[21], i751[22] )
  return i750
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Text' )
  var i753 = data
  i752.m_FontData = request.d('UnityEngine.UI.FontData', i753[0], i752.m_FontData)
  i752.m_Text = i753[1]
  request.r(i753[2], i753[3], 0, i752, 'm_Material')
  i752.m_Maskable = !!i753[4]
  i752.m_Color = new pc.Color(i753[5], i753[6], i753[7], i753[8])
  i752.m_RaycastTarget = !!i753[9]
  i752.m_RaycastPadding = new pc.Vec4( i753[10], i753[11], i753[12], i753[13] )
  return i752
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.FontData' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Font')
  i754.m_FontSize = i755[2]
  i754.m_FontStyle = i755[3]
  i754.m_BestFit = !!i755[4]
  i754.m_MinSize = i755[5]
  i754.m_MaxSize = i755[6]
  i754.m_Alignment = i755[7]
  i754.m_AlignByGeometry = !!i755[8]
  i754.m_RichText = !!i755[9]
  i754.m_HorizontalOverflow = i755[10]
  i754.m_VerticalOverflow = i755[11]
  i754.m_LineSpacing = i755[12]
  return i754
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button' )
  var i757 = data
  i756.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i757[0], i756.m_OnClick)
  i756.m_Navigation = request.d('UnityEngine.UI.Navigation', i757[1], i756.m_Navigation)
  i756.m_Transition = i757[2]
  i756.m_Colors = request.d('UnityEngine.UI.ColorBlock', i757[3], i756.m_Colors)
  i756.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i757[4], i756.m_SpriteState)
  i756.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i757[5], i756.m_AnimationTriggers)
  i756.m_Interactable = !!i757[6]
  request.r(i757[7], i757[8], 0, i756, 'm_TargetGraphic')
  return i756
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_ObjectArgument')
  i760.m_ObjectArgumentAssemblyTypeName = i761[2]
  i760.m_IntArgument = i761[3]
  i760.m_FloatArgument = i761[4]
  i760.m_StringArgument = i761[5]
  i760.m_BoolArgument = !!i761[6]
  return i760
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i763 = data
  i762.m_Mode = i763[0]
  i762.m_WrapAround = !!i763[1]
  request.r(i763[2], i763[3], 0, i762, 'm_SelectOnUp')
  request.r(i763[4], i763[5], 0, i762, 'm_SelectOnDown')
  request.r(i763[6], i763[7], 0, i762, 'm_SelectOnLeft')
  request.r(i763[8], i763[9], 0, i762, 'm_SelectOnRight')
  return i762
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i765 = data
  i764.m_NormalColor = new pc.Color(i765[0], i765[1], i765[2], i765[3])
  i764.m_HighlightedColor = new pc.Color(i765[4], i765[5], i765[6], i765[7])
  i764.m_PressedColor = new pc.Color(i765[8], i765[9], i765[10], i765[11])
  i764.m_SelectedColor = new pc.Color(i765[12], i765[13], i765[14], i765[15])
  i764.m_DisabledColor = new pc.Color(i765[16], i765[17], i765[18], i765[19])
  i764.m_ColorMultiplier = i765[20]
  i764.m_FadeDuration = i765[21]
  return i764
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_HighlightedSprite')
  request.r(i767[2], i767[3], 0, i766, 'm_PressedSprite')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectedSprite')
  request.r(i767[6], i767[7], 0, i766, 'm_DisabledSprite')
  return i766
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i769 = data
  i768.m_NormalTrigger = i769[0]
  i768.m_HighlightedTrigger = i769[1]
  i768.m_PressedTrigger = i769[2]
  i768.m_SelectedTrigger = i769[3]
  i768.m_DisabledTrigger = i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i771 = data
  i770.m_Alpha = i771[0]
  i770.m_Interactable = !!i771[1]
  i770.m_BlocksRaycasts = !!i771[2]
  i770.m_IgnoreParentGroups = !!i771[3]
  i770.enabled = !!i771[4]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i773 = data
  i772.name = i773[0]
  i772.width = i773[1]
  i772.height = i773[2]
  i772.mipmapCount = i773[3]
  i772.anisoLevel = i773[4]
  i772.filterMode = i773[5]
  i772.hdr = !!i773[6]
  i772.format = i773[7]
  i772.wrapMode = i773[8]
  i772.alphaIsTransparency = !!i773[9]
  i772.alphaSource = i773[10]
  i772.graphicsFormat = i773[11]
  i772.sRGBTexture = !!i773[12]
  i772.desiredColorSpace = i773[13]
  i772.wrapU = i773[14]
  i772.wrapV = i773[15]
  return i772
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i774 = root || request.c( 'DOTWeenPulseAnim' )
  var i775 = data
  i774.pulseSize = new pc.Vec2( i775[0], i775[1] )
  i774.pulseDuration = i775[2]
  i774.ease = i775[3]
  return i774
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i777 = data
  i776.m_hasFontAssetChanged = !!i777[0]
  request.r(i777[1], i777[2], 0, i776, 'm_baseMaterial')
  i776.m_maskOffset = new pc.Vec4( i777[3], i777[4], i777[5], i777[6] )
  i776.m_text = i777[7]
  i776.m_isRightToLeft = !!i777[8]
  request.r(i777[9], i777[10], 0, i776, 'm_fontAsset')
  request.r(i777[11], i777[12], 0, i776, 'm_sharedMaterial')
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.m_fontSharedMaterials = i778
  request.r(i777[14], i777[15], 0, i776, 'm_fontMaterial')
  var i781 = i777[16]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i776.m_fontMaterials = i780
  i776.m_fontColor32 = UnityEngine.Color32.ConstructColor(i777[17], i777[18], i777[19], i777[20])
  i776.m_fontColor = new pc.Color(i777[21], i777[22], i777[23], i777[24])
  i776.m_enableVertexGradient = !!i777[25]
  i776.m_colorMode = i777[26]
  i776.m_fontColorGradient = request.d('TMPro.VertexGradient', i777[27], i776.m_fontColorGradient)
  request.r(i777[28], i777[29], 0, i776, 'm_fontColorGradientPreset')
  request.r(i777[30], i777[31], 0, i776, 'm_spriteAsset')
  i776.m_tintAllSprites = !!i777[32]
  request.r(i777[33], i777[34], 0, i776, 'm_StyleSheet')
  i776.m_TextStyleHashCode = i777[35]
  i776.m_overrideHtmlColors = !!i777[36]
  i776.m_faceColor = UnityEngine.Color32.ConstructColor(i777[37], i777[38], i777[39], i777[40])
  i776.m_fontSize = i777[41]
  i776.m_fontSizeBase = i777[42]
  i776.m_fontWeight = i777[43]
  i776.m_enableAutoSizing = !!i777[44]
  i776.m_fontSizeMin = i777[45]
  i776.m_fontSizeMax = i777[46]
  i776.m_fontStyle = i777[47]
  i776.m_HorizontalAlignment = i777[48]
  i776.m_VerticalAlignment = i777[49]
  i776.m_textAlignment = i777[50]
  i776.m_characterSpacing = i777[51]
  i776.m_wordSpacing = i777[52]
  i776.m_lineSpacing = i777[53]
  i776.m_lineSpacingMax = i777[54]
  i776.m_paragraphSpacing = i777[55]
  i776.m_charWidthMaxAdj = i777[56]
  i776.m_enableWordWrapping = !!i777[57]
  i776.m_wordWrappingRatios = i777[58]
  i776.m_overflowMode = i777[59]
  request.r(i777[60], i777[61], 0, i776, 'm_linkedTextComponent')
  request.r(i777[62], i777[63], 0, i776, 'parentLinkedComponent')
  i776.m_enableKerning = !!i777[64]
  i776.m_enableExtraPadding = !!i777[65]
  i776.checkPaddingRequired = !!i777[66]
  i776.m_isRichText = !!i777[67]
  i776.m_parseCtrlCharacters = !!i777[68]
  i776.m_isOrthographic = !!i777[69]
  i776.m_isCullingEnabled = !!i777[70]
  i776.m_horizontalMapping = i777[71]
  i776.m_verticalMapping = i777[72]
  i776.m_uvLineOffset = i777[73]
  i776.m_geometrySortingOrder = i777[74]
  i776.m_IsTextObjectScaleStatic = !!i777[75]
  i776.m_VertexBufferAutoSizeReduction = !!i777[76]
  i776.m_useMaxVisibleDescender = !!i777[77]
  i776.m_pageToDisplay = i777[78]
  i776.m_margin = new pc.Vec4( i777[79], i777[80], i777[81], i777[82] )
  i776.m_isUsingLegacyAnimationComponent = !!i777[83]
  i776.m_isVolumetricText = !!i777[84]
  request.r(i777[85], i777[86], 0, i776, 'm_Material')
  i776.m_Maskable = !!i777[87]
  i776.m_Color = new pc.Color(i777[88], i777[89], i777[90], i777[91])
  i776.m_RaycastTarget = !!i777[92]
  i776.m_RaycastPadding = new pc.Vec4( i777[93], i777[94], i777[95], i777[96] )
  return i776
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.VertexGradient' )
  var i785 = data
  i784.topLeft = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.topRight = new pc.Color(i785[4], i785[5], i785[6], i785[7])
  i784.bottomLeft = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  i784.bottomRight = new pc.Color(i785[12], i785[13], i785[14], i785[15])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i786 = root || new pc.UnityMaterial()
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'shader')
  i786.renderQueue = i787[3]
  i786.enableInstancing = !!i787[4]
  var i789 = i787[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i789[i + 0]) );
  }
  i786.floatParameters = i788
  var i791 = i787[6]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i791[i + 0]) );
  }
  i786.colorParameters = i790
  var i793 = i787[7]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i793[i + 0]) );
  }
  i786.vectorParameters = i792
  var i795 = i787[8]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i795[i + 0]) );
  }
  i786.textureParameters = i794
  var i797 = i787[9]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i797[i + 0]) );
  }
  i786.materialFlags = i796
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i801 = data
  i800.name = i801[0]
  i800.value = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i805 = data
  i804.name = i805[0]
  i804.value = new pc.Color(i805[1], i805[2], i805[3], i805[4])
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i809 = data
  i808.name = i809[0]
  i808.value = new pc.Vec4( i809[1], i809[2], i809[3], i809[4] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i813 = data
  i812.name = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'value')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i817 = data
  i816.name = i817[0]
  i816.enabled = !!i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i819 = data
  i818.position = new pc.Vec3( i819[0], i819[1], i819[2] )
  i818.scale = new pc.Vec3( i819[3], i819[4], i819[5] )
  i818.rotation = new pc.Quat(i819[6], i819[7], i819[8], i819[9])
  return i818
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i820 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.m_LevelManagers = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'sharedMesh')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'additionalVertexStreams')
  i828.enabled = !!i829[2]
  request.r(i829[3], i829[4], 0, i828, 'sharedMaterial')
  var i831 = i829[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[6]
  i828.shadowCastingMode = i829[7]
  i828.sortingLayerID = i829[8]
  i828.sortingOrder = i829[9]
  i828.lightmapIndex = i829[10]
  i828.lightmapSceneIndex = i829[11]
  i828.lightmapScaleOffset = new pc.Vec4( i829[12], i829[13], i829[14], i829[15] )
  i828.lightProbeUsage = i829[16]
  i828.reflectionProbeUsage = i829[17]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i833 = data
  i832.enabled = !!i833[0]
  i832.isTrigger = !!i833[1]
  request.r(i833[2], i833[3], 0, i832, 'material')
  i832.center = new pc.Vec3( i833[4], i833[5], i833[6] )
  i832.radius = i833[7]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i835 = data
  i834.mass = i835[0]
  i834.drag = i835[1]
  i834.angularDrag = i835[2]
  i834.useGravity = !!i835[3]
  i834.isKinematic = !!i835[4]
  i834.constraints = i835[5]
  i834.maxAngularVelocity = i835[6]
  i834.collisionDetectionMode = i835[7]
  i834.interpolation = i835[8]
  return i834
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i836 = root || request.c( 'PlayerController' )
  var i837 = data
  i836.active = !!i837[0]
  request.r(i837[1], i837[2], 0, i836, 'rb')
  i836.moveForce = i837[3]
  i836.maxSpeed = i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i839 = data
  i838.name = i839[0]
  i838.halfPrecision = !!i839[1]
  i838.useUInt32IndexFormat = !!i839[2]
  i838.vertexCount = i839[3]
  i838.aabb = i839[4]
  var i841 = i839[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( !!i841[i + 0] );
  }
  i838.streams = i840
  i838.vertices = i839[6]
  var i843 = i839[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i843[i + 0]) );
  }
  i838.subMeshes = i842
  var i845 = i839[8]
  var i844 = []
  for(var i = 0; i < i845.length; i += 16) {
    i844.push( new pc.Mat4().setData(i845[i + 0], i845[i + 1], i845[i + 2], i845[i + 3],  i845[i + 4], i845[i + 5], i845[i + 6], i845[i + 7],  i845[i + 8], i845[i + 9], i845[i + 10], i845[i + 11],  i845[i + 12], i845[i + 13], i845[i + 14], i845[i + 15]) );
  }
  i838.bindposes = i844
  var i847 = i839[9]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i847[i + 0]) );
  }
  i838.blendShapes = i846
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i853 = data
  i852.triangles = i853[0]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i861[i + 0]) );
  }
  i858.frames = i860
  return i858
}

Deserializers["InputManager"] = function (request, data, root) {
  var i862 = root || request.c( 'InputManager' )
  var i863 = data
  i862.m_InputSensitivity = i863[0]
  return i862
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i864 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i865 = data
  i864.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i865[0], i864.m_GoldEventListener)
  i864.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i865[1], i864.m_KeyEventListener)
  i864.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i865[2], i864.m_WinEventListener)
  return i864
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i866 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_Event')
  return i866
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i868 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i869 = data
  return i868
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i870 = root || request.c( 'CoinEffectMove' )
  var i871 = data
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i873 = data
  i872.center = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.size = new pc.Vec3( i873[3], i873[4], i873[5] )
  i872.enabled = !!i873[6]
  i872.isTrigger = !!i873[7]
  request.r(i873[8], i873[9], 0, i872, 'material')
  return i872
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i874 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i875 = data
  i874.m_GateType = i875[0]
  i874.m_Value = i875[1]
  request.r(i875[2], i875[3], 0, i874, 'm_Text')
  i874.m_SnapToGrid = !!i875[4]
  return i874
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TextMeshPro' )
  var i877 = data
  i876._SortingLayer = i877[0]
  i876._SortingLayerID = i877[1]
  i876._SortingOrder = i877[2]
  i876.m_hasFontAssetChanged = !!i877[3]
  request.r(i877[4], i877[5], 0, i876, 'm_renderer')
  i876.m_maskType = i877[6]
  i876.m_text = i877[7]
  i876.m_isRightToLeft = !!i877[8]
  request.r(i877[9], i877[10], 0, i876, 'm_fontAsset')
  request.r(i877[11], i877[12], 0, i876, 'm_sharedMaterial')
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.m_fontSharedMaterials = i878
  request.r(i877[14], i877[15], 0, i876, 'm_fontMaterial')
  var i881 = i877[16]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i876.m_fontMaterials = i880
  i876.m_fontColor32 = UnityEngine.Color32.ConstructColor(i877[17], i877[18], i877[19], i877[20])
  i876.m_fontColor = new pc.Color(i877[21], i877[22], i877[23], i877[24])
  i876.m_enableVertexGradient = !!i877[25]
  i876.m_colorMode = i877[26]
  i876.m_fontColorGradient = request.d('TMPro.VertexGradient', i877[27], i876.m_fontColorGradient)
  request.r(i877[28], i877[29], 0, i876, 'm_fontColorGradientPreset')
  request.r(i877[30], i877[31], 0, i876, 'm_spriteAsset')
  i876.m_tintAllSprites = !!i877[32]
  request.r(i877[33], i877[34], 0, i876, 'm_StyleSheet')
  i876.m_TextStyleHashCode = i877[35]
  i876.m_overrideHtmlColors = !!i877[36]
  i876.m_faceColor = UnityEngine.Color32.ConstructColor(i877[37], i877[38], i877[39], i877[40])
  i876.m_fontSize = i877[41]
  i876.m_fontSizeBase = i877[42]
  i876.m_fontWeight = i877[43]
  i876.m_enableAutoSizing = !!i877[44]
  i876.m_fontSizeMin = i877[45]
  i876.m_fontSizeMax = i877[46]
  i876.m_fontStyle = i877[47]
  i876.m_HorizontalAlignment = i877[48]
  i876.m_VerticalAlignment = i877[49]
  i876.m_textAlignment = i877[50]
  i876.m_characterSpacing = i877[51]
  i876.m_wordSpacing = i877[52]
  i876.m_lineSpacing = i877[53]
  i876.m_lineSpacingMax = i877[54]
  i876.m_paragraphSpacing = i877[55]
  i876.m_charWidthMaxAdj = i877[56]
  i876.m_enableWordWrapping = !!i877[57]
  i876.m_wordWrappingRatios = i877[58]
  i876.m_overflowMode = i877[59]
  request.r(i877[60], i877[61], 0, i876, 'm_linkedTextComponent')
  request.r(i877[62], i877[63], 0, i876, 'parentLinkedComponent')
  i876.m_enableKerning = !!i877[64]
  i876.m_enableExtraPadding = !!i877[65]
  i876.checkPaddingRequired = !!i877[66]
  i876.m_isRichText = !!i877[67]
  i876.m_parseCtrlCharacters = !!i877[68]
  i876.m_isOrthographic = !!i877[69]
  i876.m_isCullingEnabled = !!i877[70]
  i876.m_horizontalMapping = i877[71]
  i876.m_verticalMapping = i877[72]
  i876.m_uvLineOffset = i877[73]
  i876.m_geometrySortingOrder = i877[74]
  i876.m_IsTextObjectScaleStatic = !!i877[75]
  i876.m_VertexBufferAutoSizeReduction = !!i877[76]
  i876.m_useMaxVisibleDescender = !!i877[77]
  i876.m_pageToDisplay = i877[78]
  i876.m_margin = new pc.Vec4( i877[79], i877[80], i877[81], i877[82] )
  i876.m_isUsingLegacyAnimationComponent = !!i877[83]
  i876.m_isVolumetricText = !!i877[84]
  request.r(i877[85], i877[86], 0, i876, 'm_Material')
  i876.m_Maskable = !!i877[87]
  i876.m_Color = new pc.Color(i877[88], i877[89], i877[90], i877[91])
  i876.m_RaycastTarget = !!i877[92]
  i876.m_RaycastPadding = new pc.Vec4( i877[93], i877[94], i877[95], i877[96] )
  return i876
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i882 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_Event')
  i882.m_Count = i883[2]
  i882.m_Sound = i883[3]
  i882.m_Particle = i883[4]
  i882.m_SnapToGrid = !!i883[5]
  return i882
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i884 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i885 = data
  i884.UsePositionBasedOffset = !!i885[0]
  i884.PositionBasedScale = i885[1]
  i884.Bob = !!i885[2]
  i884.BobSpeed = i885[3]
  i884.BobHeight = i885[4]
  i884.Spin = !!i885[5]
  i884.SpinSpeed = i885[6]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i887 = data
  i886.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i887[0], i886.main)
  i886.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i887[1], i886.colorBySpeed)
  i886.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i887[2], i886.colorOverLifetime)
  i886.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i887[3], i886.emission)
  i886.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i887[4], i886.rotationBySpeed)
  i886.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i887[5], i886.rotationOverLifetime)
  i886.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i887[6], i886.shape)
  i886.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i887[7], i886.sizeBySpeed)
  i886.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i887[8], i886.sizeOverLifetime)
  i886.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i887[9], i886.textureSheetAnimation)
  i886.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i887[10], i886.velocityOverLifetime)
  i886.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i887[11], i886.noise)
  i886.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i887[12], i886.inheritVelocity)
  i886.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i887[13], i886.forceOverLifetime)
  i886.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i887[14], i886.limitVelocityOverLifetime)
  i886.useAutoRandomSeed = !!i887[15]
  i886.randomSeed = i887[16]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemMain()
  var i889 = data
  i888.duration = i889[0]
  i888.loop = !!i889[1]
  i888.prewarm = !!i889[2]
  i888.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.startDelay)
  i888.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[4], i888.startLifetime)
  i888.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[5], i888.startSpeed)
  i888.startSize3D = !!i889[6]
  i888.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[7], i888.startSizeX)
  i888.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[8], i888.startSizeY)
  i888.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[9], i888.startSizeZ)
  i888.startRotation3D = !!i889[10]
  i888.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[11], i888.startRotationX)
  i888.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[12], i888.startRotationY)
  i888.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[13], i888.startRotationZ)
  i888.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i889[14], i888.startColor)
  i888.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[15], i888.gravityModifier)
  i888.simulationSpace = i889[16]
  request.r(i889[17], i889[18], 0, i888, 'customSimulationSpace')
  i888.simulationSpeed = i889[19]
  i888.useUnscaledTime = !!i889[20]
  i888.scalingMode = i889[21]
  i888.playOnAwake = !!i889[22]
  i888.maxParticles = i889[23]
  i888.emitterVelocityMode = i889[24]
  i888.stopAction = i889[25]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i890 = root || new pc.MinMaxCurve()
  var i891 = data
  i890.mode = i891[0]
  i890.curveMin = new pc.AnimationCurve( { keys_flow: i891[1] } )
  i890.curveMax = new pc.AnimationCurve( { keys_flow: i891[2] } )
  i890.curveMultiplier = i891[3]
  i890.constantMin = i891[4]
  i890.constantMax = i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i892 = root || new pc.MinMaxGradient()
  var i893 = data
  i892.mode = i893[0]
  i892.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i893[1], i892.gradientMin)
  i892.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i893[2], i892.gradientMax)
  i892.colorMin = new pc.Color(i893[3], i893[4], i893[5], i893[6])
  i892.colorMax = new pc.Color(i893[7], i893[8], i893[9], i893[10])
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i895 = data
  i894.mode = i895[0]
  var i897 = i895[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i897[i + 0]) );
  }
  i894.colorKeys = i896
  var i899 = i895[2]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i899[i + 0]) );
  }
  i894.alphaKeys = i898
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemColorBySpeed()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i901[1], i900.color)
  i900.range = new pc.Vec2( i901[2], i901[3] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i905 = data
  i904.color = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.time = i905[4]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i909 = data
  i908.alpha = i909[0]
  i908.time = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemColorOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i911[1], i910.color)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemEmitter()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.rateOverTime)
  i912.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.rateOverDistance)
  var i915 = i913[3]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i915[i + 0]) );
  }
  i912.bursts = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemBurst()
  var i919 = data
  i918.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[0], i918.count)
  i918.cycleCount = i919[1]
  i918.minCount = i919[2]
  i918.maxCount = i919[3]
  i918.repeatInterval = i919[4]
  i918.time = i919[5]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemRotationBySpeed()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[1], i920.x)
  i920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.y)
  i920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[3], i920.z)
  i920.separateAxes = !!i921[4]
  i920.range = new pc.Vec2( i921[5], i921[6] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemRotationOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.separateAxes = !!i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemShape()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.shapeType = i925[1]
  i924.randomDirectionAmount = i925[2]
  i924.sphericalDirectionAmount = i925[3]
  i924.randomPositionAmount = i925[4]
  i924.alignToDirection = !!i925[5]
  i924.radius = i925[6]
  i924.radiusMode = i925[7]
  i924.radiusSpread = i925[8]
  i924.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[9], i924.radiusSpeed)
  i924.radiusThickness = i925[10]
  i924.angle = i925[11]
  i924.length = i925[12]
  i924.boxThickness = new pc.Vec3( i925[13], i925[14], i925[15] )
  i924.meshShapeType = i925[16]
  request.r(i925[17], i925[18], 0, i924, 'mesh')
  request.r(i925[19], i925[20], 0, i924, 'meshRenderer')
  request.r(i925[21], i925[22], 0, i924, 'skinnedMeshRenderer')
  i924.useMeshMaterialIndex = !!i925[23]
  i924.meshMaterialIndex = i925[24]
  i924.useMeshColors = !!i925[25]
  i924.normalOffset = i925[26]
  i924.arc = i925[27]
  i924.arcMode = i925[28]
  i924.arcSpread = i925[29]
  i924.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[30], i924.arcSpeed)
  i924.donutRadius = i925[31]
  i924.position = new pc.Vec3( i925[32], i925[33], i925[34] )
  i924.rotation = new pc.Vec3( i925[35], i925[36], i925[37] )
  i924.scale = new pc.Vec3( i925[38], i925[39], i925[40] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemSizeBySpeed()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[1], i926.x)
  i926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.y)
  i926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.z)
  i926.separateAxes = !!i927[4]
  i926.range = new pc.Vec2( i927[5], i927[6] )
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemSizeOverLifetime()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.x)
  i928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.y)
  i928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.z)
  i928.separateAxes = !!i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.mode = i931[1]
  i930.animation = i931[2]
  i930.numTilesX = i931[3]
  i930.numTilesY = i931[4]
  i930.useRandomRow = !!i931[5]
  i930.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[6], i930.frameOverTime)
  i930.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[7], i930.startFrame)
  i930.cycleCount = i931[8]
  i930.rowIndex = i931[9]
  i930.flipU = i931[10]
  i930.flipV = i931[11]
  i930.spriteCount = i931[12]
  var i933 = i931[13]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i930.sprites = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.x)
  i936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.y)
  i936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[3], i936.z)
  i936.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[4], i936.radial)
  i936.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[5], i936.speedModifier)
  i936.space = i937[6]
  i936.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[7], i936.orbitalX)
  i936.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[8], i936.orbitalY)
  i936.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[9], i936.orbitalZ)
  i936.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[10], i936.orbitalOffsetX)
  i936.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[11], i936.orbitalOffsetY)
  i936.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[12], i936.orbitalOffsetZ)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemNoise()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.separateAxes = !!i939[1]
  i938.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.strengthX)
  i938.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.strengthY)
  i938.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[4], i938.strengthZ)
  i938.frequency = i939[5]
  i938.damping = !!i939[6]
  i938.octaveCount = i939[7]
  i938.octaveMultiplier = i939[8]
  i938.octaveScale = i939[9]
  i938.quality = i939[10]
  i938.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[11], i938.scrollSpeed)
  i938.scrollSpeedMultiplier = i939[12]
  i938.remapEnabled = !!i939[13]
  i938.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[14], i938.remapX)
  i938.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[15], i938.remapY)
  i938.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[16], i938.remapZ)
  i938.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[17], i938.positionAmount)
  i938.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[18], i938.rotationAmount)
  i938.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[19], i938.sizeAmount)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemInheritVelocity()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.mode = i941[1]
  i940.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[2], i940.curve)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemForceOverLifetime()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.x)
  i942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.y)
  i942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.z)
  i942.space = i943[4]
  i942.randomized = !!i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.limit)
  i944.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.limitX)
  i944.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.limitY)
  i944.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[4], i944.limitZ)
  i944.dampen = i945[5]
  i944.separateAxes = !!i945[6]
  i944.space = i945[7]
  i944.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[8], i944.drag)
  i944.multiplyDragByParticleSize = !!i945[9]
  i944.multiplyDragByParticleVelocity = !!i945[10]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i947 = data
  i946.enabled = !!i947[0]
  request.r(i947[1], i947[2], 0, i946, 'sharedMaterial')
  var i949 = i947[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.sharedMaterials = i948
  i946.receiveShadows = !!i947[4]
  i946.shadowCastingMode = i947[5]
  i946.sortingLayerID = i947[6]
  i946.sortingOrder = i947[7]
  i946.lightmapIndex = i947[8]
  i946.lightmapSceneIndex = i947[9]
  i946.lightmapScaleOffset = new pc.Vec4( i947[10], i947[11], i947[12], i947[13] )
  i946.lightProbeUsage = i947[14]
  i946.reflectionProbeUsage = i947[15]
  request.r(i947[16], i947[17], 0, i946, 'mesh')
  i946.meshCount = i947[18]
  i946.activeVertexStreamsCount = i947[19]
  i946.alignment = i947[20]
  i946.renderMode = i947[21]
  i946.sortMode = i947[22]
  i946.lengthScale = i947[23]
  i946.velocityScale = i947[24]
  i946.cameraVelocityScale = i947[25]
  i946.normalDirection = i947[26]
  i946.sortingFudge = i947[27]
  i946.minParticleSize = i947[28]
  i946.maxParticleSize = i947[29]
  i946.pivot = new pc.Vec3( i947[30], i947[31], i947[32] )
  request.r(i947[33], i947[34], 0, i946, 'trailMaterial')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i951 = data
  i950.name = i951[0]
  i950.atlasId = i951[1]
  i950.mipmapCount = i951[2]
  i950.hdr = !!i951[3]
  i950.size = i951[4]
  i950.anisoLevel = i951[5]
  i950.filterMode = i951[6]
  var i953 = i951[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 4) {
    i952.push( UnityEngine.Rect.MinMaxRect(i953[i + 0], i953[i + 1], i953[i + 2], i953[i + 3]) );
  }
  i950.rects = i952
  i950.wrapU = i951[8]
  i950.wrapV = i951[9]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i957 = data
  i956.name = i957[0]
  i956.index = i957[1]
  i956.startup = !!i957[2]
  return i956
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'PlayableSettings' )
  var i959 = data
  i958.m_SkipMainMenu = !!i959[0]
  i958.m_UseCTAScreen = !!i959[1]
  i958.m_EndcardActivationSendsToStore = !!i959[2]
  i958.m_ShowEndcardAfterXTaps = !!i959[3]
  i958.m_TapsBeforeShowingEndcard = i959[4]
  return i958
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i960 = root || request.c( 'SimpleDeactivateOnTap' )
  var i961 = data
  return i960
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_FirstSelected')
  i962.m_sendNavigationEvents = !!i963[2]
  i962.m_DragThreshold = i963[3]
  return i962
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i965 = data
  i964.m_HorizontalAxis = i965[0]
  i964.m_VerticalAxis = i965[1]
  i964.m_SubmitButton = i965[2]
  i964.m_CancelButton = i965[3]
  i964.m_InputActionsPerSecond = i965[4]
  i964.m_RepeatDelay = i965[5]
  i964.m_ForceModuleActive = !!i965[6]
  i964.m_SendPointerHoverToParent = !!i965[7]
  return i964
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i966 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_SequenceManagerPrefab')
  return i966
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i968 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_MusicSource')
  request.r(i969[2], i969[3], 0, i968, 'm_EffectSource')
  i968.m_MinSoundInterval = i969[4]
  var i971 = i969[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i971[i + 0]) );
  }
  i968.m_Sounds = i970
  return i968
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i974 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i975 = data
  i974.m_SoundID = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'm_AudioClip')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'clip')
  request.r(i977[2], i977[3], 0, i976, 'outputAudioMixerGroup')
  i976.playOnAwake = !!i977[4]
  i976.loop = !!i977[5]
  i976.time = i977[6]
  i976.volume = i977[7]
  i976.pitch = i977[8]
  i976.enabled = !!i977[9]
  return i976
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i978 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'm_Canvas')
  request.r(i979[2], i979[3], 0, i978, 'm_Root')
  request.r(i979[4], i979[5], 0, i978, 'm_ViewLayer')
  return i978
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i980 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'm_GoldText')
  var i983 = i981[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.Keys = i982
  i980.gainKeyColor = new pc.Color(i981[3], i981[4], i981[5], i981[6])
  return i980
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i986 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_LoseEvent')
  return i986
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i988 = root || request.c( 'CollectableParticleManager' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'keyParticlePrefab')
  request.r(i989[2], i989[3], 0, i988, 'coinParticlePrefab')
  i988.keyParticleCount = i989[4]
  i988.coinParticlesCount = i989[5]
  return i988
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i990 = root || request.c( 'CheerPhraseController' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.phrases = i992
  i990.cheerPhraseColour = new pc.Color(i991[1], i991[2], i991[3], i991[4])
  request.r(i991[5], i991[6], 0, i990, 'cheerText')
  request.r(i991[7], i991[8], 0, i990, 'cheerTextAnimator')
  request.r(i991[9], i991[10], 0, i990, 'keyCollectEvent')
  return i990
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i996 = root || request.c( 'OutroAnimationController' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'winEvent')
  i996.endCardDelay = i997[2]
  var i999 = i997[3]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i996.confettiParticles = i998
  return i996
}

Deserializers["LevelFailedHandler"] = function (request, data, root) {
  var i1002 = root || request.c( 'LevelFailedHandler' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'loseEvent')
  i1002.endCardDelay = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.aspect = i1005[1]
  i1004.orthographic = !!i1005[2]
  i1004.orthographicSize = i1005[3]
  i1004.backgroundColor = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.nearClipPlane = i1005[8]
  i1004.farClipPlane = i1005[9]
  i1004.fieldOfView = i1005[10]
  i1004.depth = i1005[11]
  i1004.clearFlags = i1005[12]
  i1004.cullingMask = i1005[13]
  i1004.rect = i1005[14]
  request.r(i1005[15], i1005[16], 0, i1004, 'targetTexture')
  i1004.usePhysicalProperties = !!i1005[17]
  i1004.focalLength = i1005[18]
  i1004.sensorSize = new pc.Vec2( i1005[19], i1005[20] )
  i1004.lensShift = new pc.Vec2( i1005[21], i1005[22] )
  i1004.gateFit = i1005[23]
  i1004.commandBufferCount = i1005[24]
  i1004.cameraType = i1005[25]
  return i1004
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'targetPlayer')
  i1006.m_CameraAnglePreset = i1007[2]
  i1006.m_Offset = new pc.Vec3( i1007[3], i1007[4], i1007[5] )
  i1006.m_LookAtOffset = new pc.Vec3( i1007[6], i1007[7], i1007[8] )
  i1006.m_LockCameraPosition = !!i1007[9]
  i1006.m_SmoothCameraFollow = !!i1007[10]
  i1006.m_SmoothCameraFollowStrength = i1007[11]
  return i1006
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i1008 = root || request.c( 'CoinEffectManager' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'coinEffectPrefab')
  request.r(i1009[2], i1009[3], 0, i1008, 'coinCounter')
  request.r(i1009[4], i1009[5], 0, i1008, 'player')
  i1008.speed = i1009[6]
  request.r(i1009[7], i1009[8], 0, i1008, 'm_CoinEvent')
  i1008.effectPoolCount = i1009[9]
  i1008.offsetZ = i1009[10]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.type = i1011[1]
  i1010.color = new pc.Color(i1011[2], i1011[3], i1011[4], i1011[5])
  i1010.cullingMask = i1011[6]
  i1010.intensity = i1011[7]
  i1010.range = i1011[8]
  i1010.spotAngle = i1011[9]
  i1010.shadows = i1011[10]
  i1010.shadowNormalBias = i1011[11]
  i1010.shadowBias = i1011[12]
  i1010.shadowStrength = i1011[13]
  i1010.shadowResolution = i1011[14]
  i1010.lightmapBakeType = i1011[15]
  i1010.renderMode = i1011[16]
  request.r(i1011[17], i1011[18], 0, i1010, 'cookie')
  i1010.cookieSize = i1011[19]
  return i1010
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i1012 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i1013 = data
  return i1012
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i1014 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_WinEvent')
  i1014.m_SnapToGrid = !!i1015[2]
  return i1014
}

Deserializers["HyperCasual.Runner.LoseHandler"] = function (request, data, root) {
  var i1016 = root || request.c( 'HyperCasual.Runner.LoseHandler' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_LoseEvent')
  i1016.m_SnapToGrid = !!i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.isTrigger = !!i1019[1]
  request.r(i1019[2], i1019[3], 0, i1018, 'material')
  request.r(i1019[4], i1019[5], 0, i1018, 'sharedMesh')
  i1018.convex = !!i1019[6]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1021 = data
  i1020.ambientIntensity = i1021[0]
  i1020.reflectionIntensity = i1021[1]
  i1020.ambientMode = i1021[2]
  i1020.ambientLight = new pc.Color(i1021[3], i1021[4], i1021[5], i1021[6])
  i1020.ambientSkyColor = new pc.Color(i1021[7], i1021[8], i1021[9], i1021[10])
  i1020.ambientGroundColor = new pc.Color(i1021[11], i1021[12], i1021[13], i1021[14])
  i1020.ambientEquatorColor = new pc.Color(i1021[15], i1021[16], i1021[17], i1021[18])
  i1020.fogColor = new pc.Color(i1021[19], i1021[20], i1021[21], i1021[22])
  i1020.fogEndDistance = i1021[23]
  i1020.fogStartDistance = i1021[24]
  i1020.fogDensity = i1021[25]
  i1020.fog = !!i1021[26]
  request.r(i1021[27], i1021[28], 0, i1020, 'skybox')
  i1020.fogMode = i1021[29]
  var i1023 = i1021[30]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1023[i + 0]) );
  }
  i1020.lightmaps = i1022
  i1020.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1021[31], i1020.lightProbes)
  i1020.lightmapsMode = i1021[32]
  i1020.mixedBakeMode = i1021[33]
  i1020.environmentLightingMode = i1021[34]
  i1020.ambientProbe = new pc.SphericalHarmonicsL2(i1021[35])
  i1020.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1021[36])
  i1020.useReferenceAmbientProbe = !!i1021[37]
  request.r(i1021[38], i1021[39], 0, i1020, 'customReflection')
  request.r(i1021[40], i1021[41], 0, i1020, 'defaultReflection')
  i1020.defaultReflectionMode = i1021[42]
  i1020.defaultReflectionResolution = i1021[43]
  i1020.sunLightObjectId = i1021[44]
  i1020.pixelLightCount = i1021[45]
  i1020.defaultReflectionHDR = !!i1021[46]
  i1020.hasLightDataAsset = !!i1021[47]
  i1020.hasManualGenerate = !!i1021[48]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'lightmapColor')
  request.r(i1027[2], i1027[3], 0, i1026, 'lightmapDirection')
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1028 = root || new UnityEngine.LightProbes()
  var i1029 = data
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.bounciness = i1037[1]
  i1036.dynamicFriction = i1037[2]
  i1036.staticFriction = i1037[3]
  i1036.frictionCombine = i1037[4]
  i1036.bounceCombine = i1037[5]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1041[i + 0]));
  }
  i1038.ShaderCompilationErrors = i1040
  i1038.name = i1039[1]
  i1038.guid = i1039[2]
  var i1043 = i1039[3]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.shaderDefinedKeywords = i1042
  var i1045 = i1039[4]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1045[i + 0]) );
  }
  i1038.passes = i1044
  var i1047 = i1039[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1047[i + 0]) );
  }
  i1038.usePasses = i1046
  var i1049 = i1039[6]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1049[i + 0]) );
  }
  i1038.defaultParameterValues = i1048
  request.r(i1039[7], i1039[8], 0, i1038, 'unityFallbackShader')
  i1038.readDepth = !!i1039[9]
  i1038.isCreatedByShaderGraph = !!i1039[10]
  i1038.compiled = !!i1039[11]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1053 = data
  i1052.shaderName = i1053[0]
  i1052.errorMessage = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1056 = root || new pc.UnityShaderPass()
  var i1057 = data
  i1056.id = i1057[0]
  i1056.subShaderIndex = i1057[1]
  i1056.name = i1057[2]
  i1056.passType = i1057[3]
  i1056.grabPassTextureName = i1057[4]
  i1056.usePass = !!i1057[5]
  i1056.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[6], i1056.zTest)
  i1056.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[7], i1056.zWrite)
  i1056.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[8], i1056.culling)
  i1056.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1057[9], i1056.blending)
  i1056.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1057[10], i1056.alphaBlending)
  i1056.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[11], i1056.colorWriteMask)
  i1056.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[12], i1056.offsetUnits)
  i1056.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[13], i1056.offsetFactor)
  i1056.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[14], i1056.stencilRef)
  i1056.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[15], i1056.stencilReadMask)
  i1056.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[16], i1056.stencilWriteMask)
  i1056.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[17], i1056.stencilOp)
  i1056.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[18], i1056.stencilOpFront)
  i1056.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[19], i1056.stencilOpBack)
  var i1059 = i1057[20]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1059[i + 0]) );
  }
  i1056.tags = i1058
  var i1061 = i1057[21]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.passDefinedKeywords = i1060
  var i1063 = i1057[22]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1063[i + 0]) );
  }
  i1056.passDefinedKeywordGroups = i1062
  var i1065 = i1057[23]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1065[i + 0]) );
  }
  i1056.variants = i1064
  var i1067 = i1057[24]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1067[i + 0]) );
  }
  i1056.excludedVariants = i1066
  i1056.hasDepthReader = !!i1057[25]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1069 = data
  i1068.val = i1069[0]
  i1068.name = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1071 = data
  i1070.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[0], i1070.src)
  i1070.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[1], i1070.dst)
  i1070.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[2], i1070.op)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1073 = data
  i1072.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[0], i1072.pass)
  i1072.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[1], i1072.fail)
  i1072.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[2], i1072.zFail)
  i1072.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[3], i1072.comp)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.value = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.keywords = i1082
  i1080.hasDiscard = !!i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1087 = data
  i1086.passId = i1087[0]
  i1086.subShaderIndex = i1087[1]
  var i1089 = i1087[2]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1086.keywords = i1088
  i1086.vertexProgram = i1087[3]
  i1086.fragmentProgram = i1087[4]
  i1086.exportedForWebGl2 = !!i1087[5]
  i1086.readDepth = !!i1087[6]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'shader')
  i1092.pass = i1093[2]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.type = i1097[1]
  i1096.value = new pc.Vec4( i1097[2], i1097[3], i1097[4], i1097[5] )
  i1096.textureValue = i1097[6]
  i1096.shaderPropertyFlag = i1097[7]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1099 = data
  i1098.name = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'texture')
  i1098.aabb = i1099[3]
  i1098.vertices = i1099[4]
  i1098.triangles = i1099[5]
  i1098.textureRect = UnityEngine.Rect.MinMaxRect(i1099[6], i1099[7], i1099[8], i1099[9])
  i1098.packedRect = UnityEngine.Rect.MinMaxRect(i1099[10], i1099[11], i1099[12], i1099[13])
  i1098.border = new pc.Vec4( i1099[14], i1099[15], i1099[16], i1099[17] )
  i1098.transparency = i1099[18]
  i1098.bounds = i1099[19]
  i1098.pixelsPerUnit = i1099[20]
  i1098.textureWidth = i1099[21]
  i1098.textureHeight = i1099[22]
  i1098.nativeSize = new pc.Vec2( i1099[23], i1099[24] )
  i1098.pivot = new pc.Vec2( i1099[25], i1099[26] )
  i1098.textureRectOffset = new pc.Vec2( i1099[27], i1099[28] )
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1101 = data
  i1100.name = i1101[0]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.wrapMode = i1103[1]
  i1102.isLooping = !!i1103[2]
  i1102.length = i1103[3]
  var i1105 = i1103[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1105[i + 0]) );
  }
  i1102.curves = i1104
  var i1107 = i1103[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1107[i + 0]) );
  }
  i1102.events = i1106
  i1102.halfPrecision = !!i1103[6]
  i1102._frameRate = i1103[7]
  i1102.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1103[8], i1102.localBounds)
  i1102.hasMuscleCurves = !!i1103[9]
  var i1109 = i1103[10]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1102.clipMuscleConstant = i1108
  i1102.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1103[11], i1102.clipBindingConstant)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1113 = data
  i1112.path = i1113[0]
  i1112.hash = i1113[1]
  i1112.componentType = i1113[2]
  i1112.property = i1113[3]
  i1112.keys = i1113[4]
  var i1115 = i1113[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1115[i + 0]) );
  }
  i1112.objectReferenceKeys = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1119 = data
  i1118.functionName = i1119[0]
  i1118.floatParameter = i1119[1]
  i1118.intParameter = i1119[2]
  i1118.stringParameter = i1119[3]
  request.r(i1119[4], i1119[5], 0, i1118, 'objectReferenceParameter')
  i1118.time = i1119[6]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1121 = data
  i1120.center = new pc.Vec3( i1121[0], i1121[1], i1121[2] )
  i1120.extends = new pc.Vec3( i1121[3], i1121[4], i1121[5] )
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1125 = data
  var i1127 = i1125[0]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1124.genericBindings = i1126
  var i1129 = i1125[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1124.pptrCurveMapping = i1128
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1133 = data
  i1132.time = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'value')
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.ascent = i1135[1]
  i1134.originalLineHeight = i1135[2]
  i1134.fontSize = i1135[3]
  var i1137 = i1135[4]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1137[i + 0]) );
  }
  i1134.characterInfo = i1136
  request.r(i1135[5], i1135[6], 0, i1134, 'texture')
  i1134.originalFontSize = i1135[7]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1141 = data
  i1140.index = i1141[0]
  i1140.advance = i1141[1]
  i1140.bearing = i1141[2]
  i1140.glyphWidth = i1141[3]
  i1140.glyphHeight = i1141[4]
  i1140.minX = i1141[5]
  i1140.maxX = i1141[6]
  i1140.minY = i1141[7]
  i1140.maxY = i1141[8]
  i1140.uvBottomLeftX = i1141[9]
  i1140.uvBottomLeftY = i1141[10]
  i1140.uvBottomRightX = i1141[11]
  i1140.uvBottomRightY = i1141[12]
  i1140.uvTopLeftX = i1141[13]
  i1140.uvTopLeftY = i1141[14]
  i1140.uvTopRightX = i1141[15]
  i1140.uvTopRightY = i1141[16]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1143 = data
  i1142.name = i1143[0]
  var i1145 = i1143[1]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1145[i + 0]) );
  }
  i1142.layers = i1144
  var i1147 = i1143[2]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1147[i + 0]) );
  }
  i1142.parameters = i1146
  i1142.animationClips = i1143[3]
  i1142.avatarUnsupported = i1143[4]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.defaultWeight = i1151[1]
  i1150.blendingMode = i1151[2]
  i1150.avatarMask = i1151[3]
  i1150.syncedLayerIndex = i1151[4]
  i1150.syncedLayerAffectsTiming = !!i1151[5]
  i1150.syncedLayers = i1151[6]
  i1150.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1151[7], i1150.stateMachine)
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.name = i1153[1]
  i1152.path = i1153[2]
  var i1155 = i1153[3]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1155[i + 0]) );
  }
  i1152.states = i1154
  var i1157 = i1153[4]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1157[i + 0]) );
  }
  i1152.machines = i1156
  var i1159 = i1153[5]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1159[i + 0]) );
  }
  i1152.entryStateTransitions = i1158
  var i1161 = i1153[6]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1161[i + 0]) );
  }
  i1152.exitStateTransitions = i1160
  var i1163 = i1153[7]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1163[i + 0]) );
  }
  i1152.anyStateTransitions = i1162
  i1152.defaultStateId = i1153[8]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1167 = data
  i1166.id = i1167[0]
  i1166.name = i1167[1]
  i1166.cycleOffset = i1167[2]
  i1166.cycleOffsetParameter = i1167[3]
  i1166.cycleOffsetParameterActive = !!i1167[4]
  i1166.mirror = !!i1167[5]
  i1166.mirrorParameter = i1167[6]
  i1166.mirrorParameterActive = !!i1167[7]
  i1166.motionId = i1167[8]
  i1166.nameHash = i1167[9]
  i1166.fullPathHash = i1167[10]
  i1166.speed = i1167[11]
  i1166.speedParameter = i1167[12]
  i1166.speedParameterActive = !!i1167[13]
  i1166.tag = i1167[14]
  i1166.tagHash = i1167[15]
  i1166.writeDefaultValues = !!i1167[16]
  var i1169 = i1167[17]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 2, i1168, '')
  }
  i1166.behaviours = i1168
  var i1171 = i1167[18]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1171[i + 0]) );
  }
  i1166.transitions = i1170
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1177 = data
  i1176.fullPath = i1177[0]
  i1176.canTransitionToSelf = !!i1177[1]
  i1176.duration = i1177[2]
  i1176.exitTime = i1177[3]
  i1176.hasExitTime = !!i1177[4]
  i1176.hasFixedDuration = !!i1177[5]
  i1176.interruptionSource = i1177[6]
  i1176.offset = i1177[7]
  i1176.orderedInterruption = !!i1177[8]
  i1176.destinationStateId = i1177[9]
  i1176.isExit = !!i1177[10]
  i1176.mute = !!i1177[11]
  i1176.solo = !!i1177[12]
  var i1179 = i1177[13]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1179[i + 0]) );
  }
  i1176.conditions = i1178
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1183 = data
  i1182.mode = i1183[0]
  i1182.parameter = i1183[1]
  i1182.threshold = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1189 = data
  i1188.destinationStateId = i1189[0]
  i1188.isExit = !!i1189[1]
  i1188.mute = !!i1189[2]
  i1188.solo = !!i1189[3]
  var i1191 = i1189[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1191[i + 0]) );
  }
  i1188.conditions = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1195 = data
  i1194.defaultBool = !!i1195[0]
  i1194.defaultFloat = i1195[1]
  i1194.defaultInt = i1195[2]
  i1194.name = i1195[3]
  i1194.nameHash = i1195[4]
  i1194.type = i1195[5]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.bytes64 = i1197[1]
  i1196.data = i1197[2]
  return i1196
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1199 = data
  i1198.hashCode = i1199[0]
  request.r(i1199[1], i1199[2], 0, i1198, 'material')
  i1198.materialHashCode = i1199[3]
  request.r(i1199[4], i1199[5], 0, i1198, 'atlas')
  i1198.normalStyle = i1199[6]
  i1198.normalSpacingOffset = i1199[7]
  i1198.boldStyle = i1199[8]
  i1198.boldSpacing = i1199[9]
  i1198.italicStyle = i1199[10]
  i1198.tabSize = i1199[11]
  i1198.m_Version = i1199[12]
  i1198.m_SourceFontFileGUID = i1199[13]
  request.r(i1199[14], i1199[15], 0, i1198, 'm_SourceFontFile_EditorRef')
  request.r(i1199[16], i1199[17], 0, i1198, 'm_SourceFontFile')
  i1198.m_AtlasPopulationMode = i1199[18]
  i1198.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1199[19], i1198.m_FaceInfo)
  var i1201 = i1199[20]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('UnityEngine.TextCore.Glyph', i1201[i + 0]));
  }
  i1198.m_GlyphTable = i1200
  var i1203 = i1199[21]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.add(request.d('TMPro.TMP_Character', i1203[i + 0]));
  }
  i1198.m_CharacterTable = i1202
  var i1205 = i1199[22]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 2, i1204, '')
  }
  i1198.m_AtlasTextures = i1204
  i1198.m_AtlasTextureIndex = i1199[23]
  i1198.m_IsMultiAtlasTexturesEnabled = !!i1199[24]
  i1198.m_ClearDynamicDataOnBuild = !!i1199[25]
  var i1207 = i1199[26]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('UnityEngine.TextCore.GlyphRect', i1207[i + 0]));
  }
  i1198.m_UsedGlyphRects = i1206
  var i1209 = i1199[27]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('UnityEngine.TextCore.GlyphRect', i1209[i + 0]));
  }
  i1198.m_FreeGlyphRects = i1208
  i1198.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1199[28], i1198.m_fontInfo)
  i1198.m_AtlasWidth = i1199[29]
  i1198.m_AtlasHeight = i1199[30]
  i1198.m_AtlasPadding = i1199[31]
  i1198.m_AtlasRenderMode = i1199[32]
  var i1211 = i1199[33]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('TMPro.TMP_Glyph', i1211[i + 0]));
  }
  i1198.m_glyphInfoList = i1210
  i1198.m_KerningTable = request.d('TMPro.KerningTable', i1199[34], i1198.m_KerningTable)
  i1198.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1199[35], i1198.m_FontFeatureTable)
  var i1213 = i1199[36]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 1, i1212, '')
  }
  i1198.fallbackFontAssets = i1212
  var i1215 = i1199[37]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 1, i1214, '')
  }
  i1198.m_FallbackFontAssetTable = i1214
  i1198.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1199[38], i1198.m_CreationSettings)
  var i1217 = i1199[39]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('TMPro.TMP_FontWeightPair', i1217[i + 0]) );
  }
  i1198.m_FontWeightTable = i1216
  var i1219 = i1199[40]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('TMPro.TMP_FontWeightPair', i1219[i + 0]) );
  }
  i1198.fontWeights = i1218
  return i1198
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1221 = data
  i1220.m_FaceIndex = i1221[0]
  i1220.m_FamilyName = i1221[1]
  i1220.m_StyleName = i1221[2]
  i1220.m_PointSize = i1221[3]
  i1220.m_Scale = i1221[4]
  i1220.m_UnitsPerEM = i1221[5]
  i1220.m_LineHeight = i1221[6]
  i1220.m_AscentLine = i1221[7]
  i1220.m_CapLine = i1221[8]
  i1220.m_MeanLine = i1221[9]
  i1220.m_Baseline = i1221[10]
  i1220.m_DescentLine = i1221[11]
  i1220.m_SuperscriptOffset = i1221[12]
  i1220.m_SuperscriptSize = i1221[13]
  i1220.m_SubscriptOffset = i1221[14]
  i1220.m_SubscriptSize = i1221[15]
  i1220.m_UnderlineOffset = i1221[16]
  i1220.m_UnderlineThickness = i1221[17]
  i1220.m_StrikethroughOffset = i1221[18]
  i1220.m_StrikethroughThickness = i1221[19]
  i1220.m_TabWidth = i1221[20]
  return i1220
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1225 = data
  i1224.m_Index = i1225[0]
  i1224.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1225[1], i1224.m_Metrics)
  i1224.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1225[2], i1224.m_GlyphRect)
  i1224.m_Scale = i1225[3]
  i1224.m_AtlasIndex = i1225[4]
  i1224.m_ClassDefinitionType = i1225[5]
  return i1224
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1227 = data
  i1226.m_Width = i1227[0]
  i1226.m_Height = i1227[1]
  i1226.m_HorizontalBearingX = i1227[2]
  i1226.m_HorizontalBearingY = i1227[3]
  i1226.m_HorizontalAdvance = i1227[4]
  return i1226
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1229 = data
  i1228.m_X = i1229[0]
  i1228.m_Y = i1229[1]
  i1228.m_Width = i1229[2]
  i1228.m_Height = i1229[3]
  return i1228
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_Character' )
  var i1233 = data
  i1232.m_ElementType = i1233[0]
  i1232.m_Unicode = i1233[1]
  i1232.m_GlyphIndex = i1233[2]
  i1232.m_Scale = i1233[3]
  return i1232
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1239 = data
  i1238.Name = i1239[0]
  i1238.PointSize = i1239[1]
  i1238.Scale = i1239[2]
  i1238.CharacterCount = i1239[3]
  i1238.LineHeight = i1239[4]
  i1238.Baseline = i1239[5]
  i1238.Ascender = i1239[6]
  i1238.CapHeight = i1239[7]
  i1238.Descender = i1239[8]
  i1238.CenterLine = i1239[9]
  i1238.SuperscriptOffset = i1239[10]
  i1238.SubscriptOffset = i1239[11]
  i1238.SubSize = i1239[12]
  i1238.Underline = i1239[13]
  i1238.UnderlineThickness = i1239[14]
  i1238.strikethrough = i1239[15]
  i1238.strikethroughThickness = i1239[16]
  i1238.TabWidth = i1239[17]
  i1238.Padding = i1239[18]
  i1238.AtlasWidth = i1239[19]
  i1238.AtlasHeight = i1239[20]
  return i1238
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1243 = data
  i1242.id = i1243[0]
  i1242.x = i1243[1]
  i1242.y = i1243[2]
  i1242.width = i1243[3]
  i1242.height = i1243[4]
  i1242.xOffset = i1243[5]
  i1242.yOffset = i1243[6]
  i1242.xAdvance = i1243[7]
  i1242.scale = i1243[8]
  return i1242
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.KerningTable' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.KerningPair', i1247[i + 0]));
  }
  i1244.kerningPairs = i1246
  return i1244
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.KerningPair' )
  var i1251 = data
  i1250.xOffset = i1251[0]
  i1250.m_FirstGlyph = i1251[1]
  i1250.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1251[2], i1250.m_FirstGlyphAdjustments)
  i1250.m_SecondGlyph = i1251[3]
  i1250.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1251[4], i1250.m_SecondGlyphAdjustments)
  i1250.m_IgnoreSpacingAdjustments = !!i1251[5]
  return i1250
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1253 = data
  var i1255 = i1253[0]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1255[i + 0]));
  }
  i1252.m_GlyphPairAdjustmentRecords = i1254
  return i1252
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1259 = data
  i1258.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1259[0], i1258.m_FirstAdjustmentRecord)
  i1258.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1259[1], i1258.m_SecondAdjustmentRecord)
  i1258.m_FeatureLookupFlags = i1259[2]
  return i1258
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1261 = data
  i1260.m_GlyphIndex = i1261[0]
  i1260.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1261[1], i1260.m_GlyphValueRecord)
  return i1260
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1263 = data
  i1262.m_XPlacement = i1263[0]
  i1262.m_YPlacement = i1263[1]
  i1262.m_XAdvance = i1263[2]
  i1262.m_YAdvance = i1263[3]
  return i1262
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1267 = data
  i1266.sourceFontFileName = i1267[0]
  i1266.sourceFontFileGUID = i1267[1]
  i1266.pointSizeSamplingMode = i1267[2]
  i1266.pointSize = i1267[3]
  i1266.padding = i1267[4]
  i1266.packingMode = i1267[5]
  i1266.atlasWidth = i1267[6]
  i1266.atlasHeight = i1267[7]
  i1266.characterSetSelectionMode = i1267[8]
  i1266.characterSequence = i1267[9]
  i1266.referencedFontAssetGUID = i1267[10]
  i1266.referencedTextAssetGUID = i1267[11]
  i1266.fontStyle = i1267[12]
  i1266.fontStyleModifier = i1267[13]
  i1266.renderMode = i1267[14]
  i1266.includeFontFeatures = !!i1267[15]
  return i1266
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'regularTypeface')
  request.r(i1271[2], i1271[3], 0, i1270, 'italicTypeface')
  return i1270
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i1272 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i1273 = data
  i1272.Count = i1273[0]
  return i1272
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i1274 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i1275 = data
  return i1274
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1277 = data
  i1276.useSafeMode = !!i1277[0]
  i1276.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1277[1], i1276.safeModeOptions)
  i1276.timeScale = i1277[2]
  i1276.unscaledTimeScale = i1277[3]
  i1276.useSmoothDeltaTime = !!i1277[4]
  i1276.maxSmoothUnscaledTime = i1277[5]
  i1276.rewindCallbackMode = i1277[6]
  i1276.showUnityEditorReport = !!i1277[7]
  i1276.logBehaviour = i1277[8]
  i1276.drawGizmos = !!i1277[9]
  i1276.defaultRecyclable = !!i1277[10]
  i1276.defaultAutoPlay = i1277[11]
  i1276.defaultUpdateType = i1277[12]
  i1276.defaultTimeScaleIndependent = !!i1277[13]
  i1276.defaultEaseType = i1277[14]
  i1276.defaultEaseOvershootOrAmplitude = i1277[15]
  i1276.defaultEasePeriod = i1277[16]
  i1276.defaultAutoKill = !!i1277[17]
  i1276.defaultLoopType = i1277[18]
  i1276.debugMode = !!i1277[19]
  i1276.debugStoreTargetId = !!i1277[20]
  i1276.showPreviewPanel = !!i1277[21]
  i1276.storeSettingsLocation = i1277[22]
  i1276.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1277[23], i1276.modules)
  i1276.createASMDEF = !!i1277[24]
  i1276.showPlayingTweens = !!i1277[25]
  i1276.showPausedTweens = !!i1277[26]
  return i1276
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1278 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1279 = data
  i1278.logBehaviour = i1279[0]
  i1278.nestedTweenFailureBehaviour = i1279[1]
  return i1278
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1280 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1281 = data
  i1280.showPanel = !!i1281[0]
  i1280.audioEnabled = !!i1281[1]
  i1280.physicsEnabled = !!i1281[2]
  i1280.physics2DEnabled = !!i1281[3]
  i1280.spriteEnabled = !!i1281[4]
  i1280.uiEnabled = !!i1281[5]
  i1280.textMeshProEnabled = !!i1281[6]
  i1280.tk2DEnabled = !!i1281[7]
  i1280.deAudioEnabled = !!i1281[8]
  i1280.deUnityExtendedEnabled = !!i1281[9]
  i1280.epoOutlineEnabled = !!i1281[10]
  return i1280
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Settings' )
  var i1283 = data
  i1282.m_enableWordWrapping = !!i1283[0]
  i1282.m_enableKerning = !!i1283[1]
  i1282.m_enableExtraPadding = !!i1283[2]
  i1282.m_enableTintAllSprites = !!i1283[3]
  i1282.m_enableParseEscapeCharacters = !!i1283[4]
  i1282.m_EnableRaycastTarget = !!i1283[5]
  i1282.m_GetFontFeaturesAtRuntime = !!i1283[6]
  i1282.m_missingGlyphCharacter = i1283[7]
  i1282.m_warningsDisabled = !!i1283[8]
  request.r(i1283[9], i1283[10], 0, i1282, 'm_defaultFontAsset')
  i1282.m_defaultFontAssetPath = i1283[11]
  i1282.m_defaultFontSize = i1283[12]
  i1282.m_defaultAutoSizeMinRatio = i1283[13]
  i1282.m_defaultAutoSizeMaxRatio = i1283[14]
  i1282.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1283[15], i1283[16] )
  i1282.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1283[17], i1283[18] )
  i1282.m_autoSizeTextContainer = !!i1283[19]
  i1282.m_IsTextObjectScaleStatic = !!i1283[20]
  var i1285 = i1283[21]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1282.m_fallbackFontAssets = i1284
  i1282.m_matchMaterialPreset = !!i1283[22]
  request.r(i1283[23], i1283[24], 0, i1282, 'm_defaultSpriteAsset')
  i1282.m_defaultSpriteAssetPath = i1283[25]
  i1282.m_enableEmojiSupport = !!i1283[26]
  i1282.m_MissingCharacterSpriteUnicode = i1283[27]
  i1282.m_defaultColorGradientPresetsPath = i1283[28]
  request.r(i1283[29], i1283[30], 0, i1282, 'm_defaultStyleSheet')
  i1282.m_StyleSheetsResourcePath = i1283[31]
  request.r(i1283[32], i1283[33], 0, i1282, 'm_leadingCharacters')
  request.r(i1283[34], i1283[35], 0, i1282, 'm_followingCharacters')
  i1282.m_UseModernHangulLineBreakingRules = !!i1283[36]
  return i1282
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1287 = data
  i1286.hashCode = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'material')
  i1286.materialHashCode = i1287[3]
  request.r(i1287[4], i1287[5], 0, i1286, 'spriteSheet')
  var i1289 = i1287[6]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_Sprite', i1289[i + 0]));
  }
  i1286.spriteInfoList = i1288
  var i1291 = i1287[7]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 1, i1290, '')
  }
  i1286.fallbackSpriteAssets = i1290
  i1286.m_Version = i1287[8]
  i1286.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1287[9], i1286.m_FaceInfo)
  var i1293 = i1287[10]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_SpriteCharacter', i1293[i + 0]));
  }
  i1286.m_SpriteCharacterTable = i1292
  var i1295 = i1287[11]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('TMPro.TMP_SpriteGlyph', i1295[i + 0]));
  }
  i1286.m_SpriteGlyphTable = i1294
  return i1286
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.hashCode = i1299[1]
  i1298.unicode = i1299[2]
  i1298.pivot = new pc.Vec2( i1299[3], i1299[4] )
  request.r(i1299[5], i1299[6], 0, i1298, 'sprite')
  i1298.id = i1299[7]
  i1298.x = i1299[8]
  i1298.y = i1299[9]
  i1298.width = i1299[10]
  i1298.height = i1299[11]
  i1298.xOffset = i1299[12]
  i1298.yOffset = i1299[13]
  i1298.xAdvance = i1299[14]
  i1298.scale = i1299[15]
  return i1298
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1305 = data
  i1304.m_Name = i1305[0]
  i1304.m_HashCode = i1305[1]
  i1304.m_ElementType = i1305[2]
  i1304.m_Unicode = i1305[3]
  i1304.m_GlyphIndex = i1305[4]
  i1304.m_Scale = i1305[5]
  return i1304
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'sprite')
  i1308.m_Index = i1309[2]
  i1308.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1309[3], i1308.m_Metrics)
  i1308.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1309[4], i1308.m_GlyphRect)
  i1308.m_Scale = i1309[5]
  i1308.m_AtlasIndex = i1309[6]
  i1308.m_ClassDefinitionType = i1309[7]
  return i1308
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Style', i1313[i + 0]));
  }
  i1310.m_StyleList = i1312
  return i1310
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_Style' )
  var i1317 = data
  i1316.m_Name = i1317[0]
  i1316.m_HashCode = i1317[1]
  i1316.m_OpeningDefinition = i1317[2]
  i1316.m_ClosingDefinition = i1317[3]
  i1316.m_OpeningTagArray = i1317[4]
  i1316.m_ClosingTagArray = i1317[5]
  i1316.m_OpeningTagUnicodeArray = i1317[6]
  i1316.m_ClosingTagUnicodeArray = i1317[7]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1321[i + 0]) );
  }
  i1318.files = i1320
  i1318.componentToPrefabIds = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1325 = data
  i1324.path = i1325[0]
  request.r(i1325[1], i1325[2], 0, i1324, 'unityObject')
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1329[i + 0]) );
  }
  i1326.scriptsExecutionOrder = i1328
  var i1331 = i1327[1]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1331[i + 0]) );
  }
  i1326.sortingLayers = i1330
  var i1333 = i1327[2]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1333[i + 0]) );
  }
  i1326.cullingLayers = i1332
  i1326.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1327[3], i1326.timeSettings)
  i1326.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1327[4], i1326.physicsSettings)
  i1326.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1327[5], i1326.physics2DSettings)
  i1326.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1327[6], i1326.qualitySettings)
  i1326.enableRealtimeShadows = !!i1327[7]
  i1326.enableAutoInstancing = !!i1327[8]
  i1326.enableDynamicBatching = !!i1327[9]
  i1326.lightmapEncodingQuality = i1327[10]
  i1326.desiredColorSpace = i1327[11]
  var i1335 = i1327[12]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1326.allTags = i1334
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.value = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  i1342.value = i1343[2]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1349 = data
  i1348.fixedDeltaTime = i1349[0]
  i1348.maximumDeltaTime = i1349[1]
  i1348.timeScale = i1349[2]
  i1348.maximumParticleTimestep = i1349[3]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1351 = data
  i1350.gravity = new pc.Vec3( i1351[0], i1351[1], i1351[2] )
  i1350.defaultSolverIterations = i1351[3]
  i1350.bounceThreshold = i1351[4]
  i1350.autoSyncTransforms = !!i1351[5]
  i1350.autoSimulation = !!i1351[6]
  var i1353 = i1351[7]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1353[i + 0]) );
  }
  i1350.collisionMatrix = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.layerId = i1357[1]
  i1356.otherLayerId = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'material')
  i1358.gravity = new pc.Vec2( i1359[2], i1359[3] )
  i1358.positionIterations = i1359[4]
  i1358.velocityIterations = i1359[5]
  i1358.velocityThreshold = i1359[6]
  i1358.maxLinearCorrection = i1359[7]
  i1358.maxAngularCorrection = i1359[8]
  i1358.maxTranslationSpeed = i1359[9]
  i1358.maxRotationSpeed = i1359[10]
  i1358.baumgarteScale = i1359[11]
  i1358.baumgarteTOIScale = i1359[12]
  i1358.timeToSleep = i1359[13]
  i1358.linearSleepTolerance = i1359[14]
  i1358.angularSleepTolerance = i1359[15]
  i1358.defaultContactOffset = i1359[16]
  i1358.autoSimulation = !!i1359[17]
  i1358.queriesHitTriggers = !!i1359[18]
  i1358.queriesStartInColliders = !!i1359[19]
  i1358.callbacksOnDisable = !!i1359[20]
  i1358.reuseCollisionCallbacks = !!i1359[21]
  i1358.autoSyncTransforms = !!i1359[22]
  var i1361 = i1359[23]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1361[i + 0]) );
  }
  i1358.collisionMatrix = i1360
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1365 = data
  i1364.enabled = !!i1365[0]
  i1364.layerId = i1365[1]
  i1364.otherLayerId = i1365[2]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1369[i + 0]) );
  }
  i1366.qualityLevels = i1368
  var i1371 = i1367[1]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( i1371[i + 0] );
  }
  i1366.names = i1370
  i1366.shadows = i1367[2]
  i1366.anisotropicFiltering = i1367[3]
  i1366.antiAliasing = i1367[4]
  i1366.lodBias = i1367[5]
  i1366.shadowCascades = i1367[6]
  i1366.shadowDistance = i1367[7]
  i1366.shadowmaskMode = i1367[8]
  i1366.shadowProjection = i1367[9]
  i1366.shadowResolution = i1367[10]
  i1366.softParticles = !!i1367[11]
  i1366.softVegetation = !!i1367[12]
  i1366.activeColorSpace = i1367[13]
  i1366.desiredColorSpace = i1367[14]
  i1366.masterTextureLimit = i1367[15]
  i1366.maxQueuedFrames = i1367[16]
  i1366.particleRaycastBudget = i1367[17]
  i1366.pixelLightCount = i1367[18]
  i1366.realtimeReflectionProbes = !!i1367[19]
  i1366.shadowCascade2Split = i1367[20]
  i1366.shadowCascade4Split = new pc.Vec3( i1367[21], i1367[22], i1367[23] )
  i1366.streamingMipmapsActive = !!i1367[24]
  i1366.vSyncCount = i1367[25]
  i1366.asyncUploadBufferSize = i1367[26]
  i1366.asyncUploadTimeSlice = i1367[27]
  i1366.billboardsFaceCameraPosition = !!i1367[28]
  i1366.shadowNearPlaneOffset = i1367[29]
  i1366.streamingMipmapsMemoryBudget = i1367[30]
  i1366.maximumLODLevel = i1367[31]
  i1366.streamingMipmapsAddAllCameras = !!i1367[32]
  i1366.streamingMipmapsMaxLevelReduction = i1367[33]
  i1366.streamingMipmapsRenderersPerFrame = i1367[34]
  i1366.resolutionScalingFixedDPIFactor = i1367[35]
  i1366.streamingMipmapsMaxFileIORequests = i1367[36]
  i1366.currentQualityLevel = i1367[37]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1377 = data
  i1376.weight = i1377[0]
  i1376.vertices = i1377[1]
  i1376.normals = i1377[2]
  i1376.tangents = i1377[3]
  return i1376
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1379 = data
  i1378.xPlacement = i1379[0]
  i1378.yPlacement = i1379[1]
  i1378.xAdvance = i1379[2]
  i1378.yAdvance = i1379[3]
  return i1378
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[58],"89":[34],"90":[34],"91":[34],"92":[34],"93":[34],"94":[34],"95":[34],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[58],"111":[31],"112":[113],"114":[113],"1":[0],"70":[115],"71":[115],"116":[115],"117":[10],"118":[115],"119":[0],"44":[31,0],"22":[0,16],"120":[0],"121":[16,0],"122":[31],"123":[16,0],"124":[0],"125":[126],"127":[0],"128":[0],"4":[1],"18":[16,0],"17":[0],"3":[1],"129":[0],"130":[0],"131":[0],"132":[0],"133":[0],"134":[0],"135":[0],"12":[0],"136":[0],"9":[16,0],"137":[0],"138":[0],"139":[0],"140":[0],"11":[16,0],"141":[0],"142":[51],"143":[51],"52":[51],"144":[51],"145":[58],"146":[58],"147":[126],"148":[126]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Texture2D","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Transform","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","PlayerController","InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","HyperCasual.Runner.SaveManager","CoinEffectMove","UnityEngine.BoxCollider","HyperCasual.Runner.Gate","TMPro.TextMeshPro","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","SimpleDeactivateOnTap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","UnityEngine.Camera","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","CollectableParticleManager","CheerPhraseController","OutroAnimationController","LevelFailedHandler","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","UnityEngine.Light","HyperCasual.Runner.LevelManager","HyperCasual.Runner.FinishLine","HyperCasual.Runner.LoseHandler","UnityEngine.MeshCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.18f1";

Deserializers.productName = "Luna Tutorial";

Deserializers.lunaInitializationTime = "06/27/2025 13:17:35";

Deserializers.lunaDaysRunning = "3.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4674";

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

Deserializers.buildID = "5304f073-b11f-4332-b10e-202e0e8b374d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

