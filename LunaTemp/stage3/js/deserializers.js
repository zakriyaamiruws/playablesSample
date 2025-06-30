var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointSpring' )
  var i715 = data
  i714.spring = i715[0]
  i714.damper = i715[1]
  i714.targetPosition = i715[2]
  return i714
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointMotor' )
  var i717 = data
  i716.m_TargetVelocity = i717[0]
  i716.m_Force = i717[1]
  i716.m_FreeSpin = i717[2]
  return i716
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointLimits' )
  var i719 = data
  i718.m_Min = i719[0]
  i718.m_Max = i719[1]
  i718.m_Bounciness = i719[2]
  i718.m_BounceMinVelocity = i719[3]
  i718.m_ContactDistance = i719[4]
  i718.minBounce = i719[5]
  i718.maxBounce = i719[6]
  return i718
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointDrive' )
  var i721 = data
  i720.m_PositionSpring = i721[0]
  i720.m_PositionDamper = i721[1]
  i720.m_MaximumForce = i721[2]
  return i720
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i723 = data
  i722.m_Spring = i723[0]
  i722.m_Damper = i723[1]
  return i722
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i725 = data
  i724.m_Limit = i725[0]
  i724.m_Bounciness = i725[1]
  i724.m_ContactDistance = i725[2]
  return i724
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i727 = data
  i726.m_ExtremumSlip = i727[0]
  i726.m_ExtremumValue = i727[1]
  i726.m_AsymptoteSlip = i727[2]
  i726.m_AsymptoteValue = i727[3]
  i726.m_Stiffness = i727[4]
  return i726
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i729 = data
  i728.m_LowerAngle = i729[0]
  i728.m_UpperAngle = i729[1]
  return i728
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i731 = data
  i730.m_MotorSpeed = i731[0]
  i730.m_MaximumMotorTorque = i731[1]
  return i730
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i733 = data
  i732.m_DampingRatio = i733[0]
  i732.m_Frequency = i733[1]
  i732.m_Angle = i733[2]
  return i732
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i735 = data
  i734.m_LowerTranslation = i735[0]
  i734.m_UpperTranslation = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i737 = data
  i736.pivot = new pc.Vec2( i737[0], i737[1] )
  i736.anchorMin = new pc.Vec2( i737[2], i737[3] )
  i736.anchorMax = new pc.Vec2( i737[4], i737[5] )
  i736.sizeDelta = new pc.Vec2( i737[6], i737[7] )
  i736.anchoredPosition3D = new pc.Vec3( i737[8], i737[9], i737[10] )
  i736.rotation = new pc.Quat(i737[11], i737[12], i737[13], i737[14])
  i736.scale = new pc.Vec3( i737[15], i737[16], i737[17] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.planeDistance = i739[1]
  i738.referencePixelsPerUnit = i739[2]
  i738.isFallbackOverlay = !!i739[3]
  i738.renderMode = i739[4]
  i738.renderOrder = i739[5]
  i738.sortingLayerName = i739[6]
  i738.sortingOrder = i739[7]
  i738.scaleFactor = i739[8]
  request.r(i739[9], i739[10], 0, i738, 'worldCamera')
  i738.overrideSorting = !!i739[11]
  i738.pixelPerfect = !!i739[12]
  i738.targetDisplay = i739[13]
  i738.overridePixelPerfect = !!i739[14]
  return i738
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i741 = data
  i740.m_UiScaleMode = i741[0]
  i740.m_ReferencePixelsPerUnit = i741[1]
  i740.m_ScaleFactor = i741[2]
  i740.m_ReferenceResolution = new pc.Vec2( i741[3], i741[4] )
  i740.m_ScreenMatchMode = i741[5]
  i740.m_MatchWidthOrHeight = i741[6]
  i740.m_PhysicalUnit = i741[7]
  i740.m_FallbackScreenDPI = i741[8]
  i740.m_DefaultSpriteDPI = i741[9]
  i740.m_DynamicPixelsPerUnit = i741[10]
  i740.m_PresetInfoIsWorld = !!i741[11]
  return i740
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i743 = data
  i742.m_IgnoreReversedGraphics = !!i743[0]
  i742.m_BlockingObjects = i743[1]
  i742.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i743[2] )
  return i742
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i744 = root || request.c( 'EndCardController' )
  var i745 = data
  i744.alwaysShowEndcardTESTING = !!i745[0]
  i744.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i745[1], i744.EndCardOpenedEvent)
  i744._backgroundColor = new pc.Color(i745[2], i745[3], i745[4], i745[5])
  request.r(i745[6], i745[7], 0, i744, '_backgroundTexture')
  request.r(i745[8], i745[9], 0, i744, '_iconTexture')
  i744._iconColor = new pc.Color(i745[10], i745[11], i745[12], i745[13])
  request.r(i745[14], i745[15], 0, i744, '_buttonTexture')
  i744._buttonColor = new pc.Color(i745[16], i745[17], i745[18], i745[19])
  i744._endCardDescriptionText = i745[20]
  i744._CTAButtonText = i745[21]
  i744._useBestFitOnCTA = !!i745[22]
  i744._CTAFontColor = new pc.Color(i745[23], i745[24], i745[25], i745[26])
  i744._descriptionFontColor = new pc.Color(i745[27], i745[28], i745[29], i745[30])
  request.r(i745[31], i745[32], 0, i744, '_CTAFont')
  request.r(i745[33], i745[34], 0, i744, '_descriptionFont')
  i744._CTAFontSize = i745[35]
  i744._descriptionFontSize = i745[36]
  i744._centerDescriptionX = !!i745[37]
  i744._centerDescriptionY = !!i745[38]
  i744._centerButtonX = !!i745[39]
  i744._centerButtonY = !!i745[40]
  i744._descriptionPositionX = i745[41]
  i744._descriptionPositionY = i745[42]
  i744._buttonPositionX = i745[43]
  i744._buttonPositionY = i745[44]
  i744._CTAFontSizeLandscape = i745[45]
  i744._descriptionFontSizeLandscape = i745[46]
  i744._centerDescriptionXLandscape = !!i745[47]
  i744._centerDescriptionYLandscape = !!i745[48]
  i744._centerButtonXLandscape = !!i745[49]
  i744._centerButtonYLandscape = !!i745[50]
  i744._descriptionPositionXLandscape = i745[51]
  i744._descriptionPositionYLandscape = i745[52]
  i744._buttonPositionXLandscape = i745[53]
  i744._buttonPositionYLandscape = i745[54]
  i744._centerIconX = !!i745[55]
  i744._centerIconY = !!i745[56]
  i744._iconPositionX = i745[57]
  i744._iconPositionY = i745[58]
  i744._iconSize = i745[59]
  i744._roundEdgesOnIcon = !!i745[60]
  i744._centerIconXLandscape = !!i745[61]
  i744._centerIconYLandscape = !!i745[62]
  i744._iconPositionXLandscape = i745[63]
  i744._iconPositionYLandscape = i745[64]
  i744._iconSizeLandscape = i745[65]
  i744._roundEdgesOnIconLandscape = !!i745[66]
  i744._endCardClickableOptions = i745[67]
  i744._buttonAnimationType = i745[68]
  i744._endCardPortraitAnimationType = i745[69]
  i744._endCardLandscapeAnimationType = i745[70]
  request.r(i745[71], i745[72], 0, i744, '_backgroundImage')
  request.r(i745[73], i745[74], 0, i744, '_CTAButton')
  request.r(i745[75], i745[76], 0, i744, '_ScreenCTAButton')
  request.r(i745[77], i745[78], 0, i744, '_CTAButtonTextText')
  request.r(i745[79], i745[80], 0, i744, '_EndCardDescriptionTextText')
  request.r(i745[81], i745[82], 0, i744, '_maskIcon')
  request.r(i745[83], i745[84], 0, i744, '_iconRect')
  request.r(i745[85], i745[86], 0, i744, '_iconRectMask')
  request.r(i745[87], i745[88], 0, i744, '_descriptionRect')
  request.r(i745[89], i745[90], 0, i744, '_buttonRect')
  request.r(i745[91], i745[92], 0, i744, '_CTAButtonAnimator')
  request.r(i745[93], i745[94], 0, i744, '_endCardAnimator')
  request.r(i745[95], i745[96], 0, i744, '_iconImage')
  request.r(i745[97], i745[98], 0, i744, '_CTAButtonImage')
  return i744
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i747 = data
  i746.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i747[0], i746.m_PersistentCalls)
  return i746
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i749 = data
  var i751 = i749[0]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('UnityEngine.Events.PersistentCall', i751[i + 0]));
  }
  i748.m_Calls = i750
  return i748
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Target')
  i754.m_TargetAssemblyTypeName = i755[2]
  i754.m_MethodName = i755[3]
  i754.m_Mode = i755[4]
  i754.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i755[5], i754.m_Arguments)
  i754.m_CallState = i755[6]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'animatorController')
  request.r(i757[2], i757[3], 0, i756, 'avatar')
  i756.updateMode = i757[4]
  i756.hasTransformHierarchy = !!i757[5]
  i756.applyRootMotion = !!i757[6]
  var i759 = i757[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.humanBones = i758
  i756.enabled = !!i757[8]
  return i756
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i762 = root || request.c( 'EndCardSetScale' )
  var i763 = data
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i765 = data
  i764.cullTransparentMesh = !!i765[0]
  return i764
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i767 = data
  i766.m_AspectMode = i767[0]
  i766.m_AspectRatio = i767[1]
  return i766
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_Texture')
  i768.m_UVRect = UnityEngine.Rect.MinMaxRect(i769[2], i769[3], i769[4], i769[5])
  request.r(i769[6], i769[7], 0, i768, 'm_Material')
  i768.m_Maskable = !!i769[8]
  i768.m_Color = new pc.Color(i769[9], i769[10], i769[11], i769[12])
  i768.m_RaycastTarget = !!i769[13]
  i768.m_RaycastPadding = new pc.Vec4( i769[14], i769[15], i769[16], i769[17] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i771 = data
  i770.name = i771[0]
  i770.tagId = i771[1]
  i770.enabled = !!i771[2]
  i770.isStatic = !!i771[3]
  i770.layer = i771[4]
  return i770
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Mask' )
  var i773 = data
  i772.m_ShowMaskGraphic = !!i773[0]
  return i772
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Image' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_Sprite')
  i774.m_Type = i775[2]
  i774.m_PreserveAspect = !!i775[3]
  i774.m_FillCenter = !!i775[4]
  i774.m_FillMethod = i775[5]
  i774.m_FillAmount = i775[6]
  i774.m_FillClockwise = !!i775[7]
  i774.m_FillOrigin = i775[8]
  i774.m_UseSpriteMesh = !!i775[9]
  i774.m_PixelsPerUnitMultiplier = i775[10]
  request.r(i775[11], i775[12], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[13]
  i774.m_Color = new pc.Color(i775[14], i775[15], i775[16], i775[17])
  i774.m_RaycastTarget = !!i775[18]
  i774.m_RaycastPadding = new pc.Vec4( i775[19], i775[20], i775[21], i775[22] )
  return i774
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Text' )
  var i777 = data
  i776.m_FontData = request.d('UnityEngine.UI.FontData', i777[0], i776.m_FontData)
  i776.m_Text = i777[1]
  request.r(i777[2], i777[3], 0, i776, 'm_Material')
  i776.m_Maskable = !!i777[4]
  i776.m_Color = new pc.Color(i777[5], i777[6], i777[7], i777[8])
  i776.m_RaycastTarget = !!i777[9]
  i776.m_RaycastPadding = new pc.Vec4( i777[10], i777[11], i777[12], i777[13] )
  return i776
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.FontData' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_Font')
  i778.m_FontSize = i779[2]
  i778.m_FontStyle = i779[3]
  i778.m_BestFit = !!i779[4]
  i778.m_MinSize = i779[5]
  i778.m_MaxSize = i779[6]
  i778.m_Alignment = i779[7]
  i778.m_AlignByGeometry = !!i779[8]
  i778.m_RichText = !!i779[9]
  i778.m_HorizontalOverflow = i779[10]
  i778.m_VerticalOverflow = i779[11]
  i778.m_LineSpacing = i779[12]
  return i778
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.Button' )
  var i781 = data
  i780.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i781[0], i780.m_OnClick)
  i780.m_Navigation = request.d('UnityEngine.UI.Navigation', i781[1], i780.m_Navigation)
  i780.m_Transition = i781[2]
  i780.m_Colors = request.d('UnityEngine.UI.ColorBlock', i781[3], i780.m_Colors)
  i780.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i781[4], i780.m_SpriteState)
  i780.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i781[5], i780.m_AnimationTriggers)
  i780.m_Interactable = !!i781[6]
  request.r(i781[7], i781[8], 0, i780, 'm_TargetGraphic')
  return i780
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i783 = data
  i782.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i783[0], i782.m_PersistentCalls)
  return i782
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'm_ObjectArgument')
  i784.m_ObjectArgumentAssemblyTypeName = i785[2]
  i784.m_IntArgument = i785[3]
  i784.m_FloatArgument = i785[4]
  i784.m_StringArgument = i785[5]
  i784.m_BoolArgument = !!i785[6]
  return i784
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i787 = data
  i786.m_Mode = i787[0]
  i786.m_WrapAround = !!i787[1]
  request.r(i787[2], i787[3], 0, i786, 'm_SelectOnUp')
  request.r(i787[4], i787[5], 0, i786, 'm_SelectOnDown')
  request.r(i787[6], i787[7], 0, i786, 'm_SelectOnLeft')
  request.r(i787[8], i787[9], 0, i786, 'm_SelectOnRight')
  return i786
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i789 = data
  i788.m_NormalColor = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.m_HighlightedColor = new pc.Color(i789[4], i789[5], i789[6], i789[7])
  i788.m_PressedColor = new pc.Color(i789[8], i789[9], i789[10], i789[11])
  i788.m_SelectedColor = new pc.Color(i789[12], i789[13], i789[14], i789[15])
  i788.m_DisabledColor = new pc.Color(i789[16], i789[17], i789[18], i789[19])
  i788.m_ColorMultiplier = i789[20]
  i788.m_FadeDuration = i789[21]
  return i788
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_HighlightedSprite')
  request.r(i791[2], i791[3], 0, i790, 'm_PressedSprite')
  request.r(i791[4], i791[5], 0, i790, 'm_SelectedSprite')
  request.r(i791[6], i791[7], 0, i790, 'm_DisabledSprite')
  return i790
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i793 = data
  i792.m_NormalTrigger = i793[0]
  i792.m_HighlightedTrigger = i793[1]
  i792.m_PressedTrigger = i793[2]
  i792.m_SelectedTrigger = i793[3]
  i792.m_DisabledTrigger = i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i795 = data
  i794.m_Alpha = i795[0]
  i794.m_Interactable = !!i795[1]
  i794.m_BlocksRaycasts = !!i795[2]
  i794.m_IgnoreParentGroups = !!i795[3]
  i794.enabled = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i797 = data
  i796.name = i797[0]
  i796.width = i797[1]
  i796.height = i797[2]
  i796.mipmapCount = i797[3]
  i796.anisoLevel = i797[4]
  i796.filterMode = i797[5]
  i796.hdr = !!i797[6]
  i796.format = i797[7]
  i796.wrapMode = i797[8]
  i796.alphaIsTransparency = !!i797[9]
  i796.alphaSource = i797[10]
  i796.graphicsFormat = i797[11]
  i796.sRGBTexture = !!i797[12]
  i796.desiredColorSpace = i797[13]
  i796.wrapU = i797[14]
  i796.wrapV = i797[15]
  return i796
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i798 = root || request.c( 'DOTWeenPulseAnim' )
  var i799 = data
  i798.pulseSize = new pc.Vec2( i799[0], i799[1] )
  i798.pulseDuration = i799[2]
  i798.ease = i799[3]
  return i798
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i801 = data
  i800.m_hasFontAssetChanged = !!i801[0]
  request.r(i801[1], i801[2], 0, i800, 'm_baseMaterial')
  i800.m_maskOffset = new pc.Vec4( i801[3], i801[4], i801[5], i801[6] )
  i800.m_text = i801[7]
  i800.m_isRightToLeft = !!i801[8]
  request.r(i801[9], i801[10], 0, i800, 'm_fontAsset')
  request.r(i801[11], i801[12], 0, i800, 'm_sharedMaterial')
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.m_fontSharedMaterials = i802
  request.r(i801[14], i801[15], 0, i800, 'm_fontMaterial')
  var i805 = i801[16]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i800.m_fontMaterials = i804
  i800.m_fontColor32 = UnityEngine.Color32.ConstructColor(i801[17], i801[18], i801[19], i801[20])
  i800.m_fontColor = new pc.Color(i801[21], i801[22], i801[23], i801[24])
  i800.m_enableVertexGradient = !!i801[25]
  i800.m_colorMode = i801[26]
  i800.m_fontColorGradient = request.d('TMPro.VertexGradient', i801[27], i800.m_fontColorGradient)
  request.r(i801[28], i801[29], 0, i800, 'm_fontColorGradientPreset')
  request.r(i801[30], i801[31], 0, i800, 'm_spriteAsset')
  i800.m_tintAllSprites = !!i801[32]
  request.r(i801[33], i801[34], 0, i800, 'm_StyleSheet')
  i800.m_TextStyleHashCode = i801[35]
  i800.m_overrideHtmlColors = !!i801[36]
  i800.m_faceColor = UnityEngine.Color32.ConstructColor(i801[37], i801[38], i801[39], i801[40])
  i800.m_fontSize = i801[41]
  i800.m_fontSizeBase = i801[42]
  i800.m_fontWeight = i801[43]
  i800.m_enableAutoSizing = !!i801[44]
  i800.m_fontSizeMin = i801[45]
  i800.m_fontSizeMax = i801[46]
  i800.m_fontStyle = i801[47]
  i800.m_HorizontalAlignment = i801[48]
  i800.m_VerticalAlignment = i801[49]
  i800.m_textAlignment = i801[50]
  i800.m_characterSpacing = i801[51]
  i800.m_wordSpacing = i801[52]
  i800.m_lineSpacing = i801[53]
  i800.m_lineSpacingMax = i801[54]
  i800.m_paragraphSpacing = i801[55]
  i800.m_charWidthMaxAdj = i801[56]
  i800.m_enableWordWrapping = !!i801[57]
  i800.m_wordWrappingRatios = i801[58]
  i800.m_overflowMode = i801[59]
  request.r(i801[60], i801[61], 0, i800, 'm_linkedTextComponent')
  request.r(i801[62], i801[63], 0, i800, 'parentLinkedComponent')
  i800.m_enableKerning = !!i801[64]
  i800.m_enableExtraPadding = !!i801[65]
  i800.checkPaddingRequired = !!i801[66]
  i800.m_isRichText = !!i801[67]
  i800.m_parseCtrlCharacters = !!i801[68]
  i800.m_isOrthographic = !!i801[69]
  i800.m_isCullingEnabled = !!i801[70]
  i800.m_horizontalMapping = i801[71]
  i800.m_verticalMapping = i801[72]
  i800.m_uvLineOffset = i801[73]
  i800.m_geometrySortingOrder = i801[74]
  i800.m_IsTextObjectScaleStatic = !!i801[75]
  i800.m_VertexBufferAutoSizeReduction = !!i801[76]
  i800.m_useMaxVisibleDescender = !!i801[77]
  i800.m_pageToDisplay = i801[78]
  i800.m_margin = new pc.Vec4( i801[79], i801[80], i801[81], i801[82] )
  i800.m_isUsingLegacyAnimationComponent = !!i801[83]
  i800.m_isVolumetricText = !!i801[84]
  request.r(i801[85], i801[86], 0, i800, 'm_Material')
  i800.m_Maskable = !!i801[87]
  i800.m_Color = new pc.Color(i801[88], i801[89], i801[90], i801[91])
  i800.m_RaycastTarget = !!i801[92]
  i800.m_RaycastPadding = new pc.Vec4( i801[93], i801[94], i801[95], i801[96] )
  return i800
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.VertexGradient' )
  var i809 = data
  i808.topLeft = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.topRight = new pc.Color(i809[4], i809[5], i809[6], i809[7])
  i808.bottomLeft = new pc.Color(i809[8], i809[9], i809[10], i809[11])
  i808.bottomRight = new pc.Color(i809[12], i809[13], i809[14], i809[15])
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i810 = root || new pc.UnityMaterial()
  var i811 = data
  i810.name = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'shader')
  i810.renderQueue = i811[3]
  i810.enableInstancing = !!i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i813[i + 0]) );
  }
  i810.floatParameters = i812
  var i815 = i811[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i815[i + 0]) );
  }
  i810.colorParameters = i814
  var i817 = i811[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i817[i + 0]) );
  }
  i810.vectorParameters = i816
  var i819 = i811[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i819[i + 0]) );
  }
  i810.textureParameters = i818
  var i821 = i811[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i821[i + 0]) );
  }
  i810.materialFlags = i820
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Color(i829[1], i829[2], i829[3], i829[4])
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = new pc.Vec4( i833[1], i833[2], i833[3], i833[4] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'value')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i841 = data
  i840.name = i841[0]
  i840.enabled = !!i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i843 = data
  i842.position = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.scale = new pc.Vec3( i843[3], i843[4], i843[5] )
  i842.rotation = new pc.Quat(i843[6], i843[7], i843[8], i843[9])
  return i842
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i844 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.m_LevelManagers = i846
  return i844
}

Deserializers["HyperCasual.Runner.PlayerController"] = function (request, data, root) {
  var i850 = root || request.c( 'HyperCasual.Runner.PlayerController' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Animator')
  request.r(i851[2], i851[3], 0, i850, 'm_SkinnedMeshRenderer')
  i850.m_PlayerSpeed = i851[4]
  i850.m_CustomPlayerSpeed = i851[5]
  i850.m_AccelerationSpeed = i851[6]
  i850.m_DecelerationSpeed = i851[7]
  i850.m_HorizontalSpeedFactor = i851[8]
  i850.m_ScaleVelocity = i851[9]
  i850.m_AutoMoveForward = !!i851[10]
  i850.m_MaxXPosition = i851[11]
  i850.m_KeepMovingOnceStarted = !!i851[12]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i853 = data
  i852.center = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.radius = i853[3]
  i852.height = i853[4]
  i852.direction = i853[5]
  i852.enabled = !!i853[6]
  i852.isTrigger = !!i853[7]
  request.r(i853[8], i853[9], 0, i852, 'material')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i855 = data
  i854.mass = i855[0]
  i854.drag = i855[1]
  i854.angularDrag = i855[2]
  i854.useGravity = !!i855[3]
  i854.isKinematic = !!i855[4]
  i854.constraints = i855[5]
  i854.maxAngularVelocity = i855[6]
  i854.collisionDetectionMode = i855[7]
  i854.interpolation = i855[8]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i857 = data
  i856.enabled = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'sharedMaterial')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.sharedMaterials = i858
  i856.receiveShadows = !!i857[4]
  i856.shadowCastingMode = i857[5]
  i856.sortingLayerID = i857[6]
  i856.sortingOrder = i857[7]
  i856.lightmapIndex = i857[8]
  i856.lightmapSceneIndex = i857[9]
  i856.lightmapScaleOffset = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  i856.lightProbeUsage = i857[14]
  i856.reflectionProbeUsage = i857[15]
  request.r(i857[16], i857[17], 0, i856, 'sharedMesh')
  var i861 = i857[18]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.bones = i860
  i856.updateWhenOffscreen = !!i857[19]
  i856.localBounds = i857[20]
  request.r(i857[21], i857[22], 0, i856, 'rootBone')
  var i863 = i857[23]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i863[i + 0]) );
  }
  i856.blendShapesWeights = i862
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i867 = data
  i866.weight = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i869 = data
  i868.name = i869[0]
  i868.halfPrecision = !!i869[1]
  i868.useUInt32IndexFormat = !!i869[2]
  i868.vertexCount = i869[3]
  i868.aabb = i869[4]
  var i871 = i869[5]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( !!i871[i + 0] );
  }
  i868.streams = i870
  i868.vertices = i869[6]
  var i873 = i869[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i873[i + 0]) );
  }
  i868.subMeshes = i872
  var i875 = i869[8]
  var i874 = []
  for(var i = 0; i < i875.length; i += 16) {
    i874.push( new pc.Mat4().setData(i875[i + 0], i875[i + 1], i875[i + 2], i875[i + 3],  i875[i + 4], i875[i + 5], i875[i + 6], i875[i + 7],  i875[i + 8], i875[i + 9], i875[i + 10], i875[i + 11],  i875[i + 12], i875[i + 13], i875[i + 14], i875[i + 15]) );
  }
  i868.bindposes = i874
  var i877 = i869[9]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i877[i + 0]) );
  }
  i868.blendShapes = i876
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i883 = data
  i882.triangles = i883[0]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i889 = data
  i888.name = i889[0]
  var i891 = i889[1]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i891[i + 0]) );
  }
  i888.frames = i890
  return i888
}

Deserializers["HyperCasual.Runner.InputManager"] = function (request, data, root) {
  var i892 = root || request.c( 'HyperCasual.Runner.InputManager' )
  var i893 = data
  i892.m_InputSensitivity = i893[0]
  return i892
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i894 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i895 = data
  i894.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i895[0], i894.m_GoldEventListener)
  i894.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i895[1], i894.m_KeyEventListener)
  i894.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i895[2], i894.m_WinEventListener)
  return i894
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i896 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_Event')
  return i896
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i898 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i899 = data
  return i898
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i900 = root || request.c( 'CoinEffectMove' )
  var i901 = data
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'sharedMesh')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'additionalVertexStreams')
  i904.enabled = !!i905[2]
  request.r(i905[3], i905[4], 0, i904, 'sharedMaterial')
  var i907 = i905[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.sharedMaterials = i906
  i904.receiveShadows = !!i905[6]
  i904.shadowCastingMode = i905[7]
  i904.sortingLayerID = i905[8]
  i904.sortingOrder = i905[9]
  i904.lightmapIndex = i905[10]
  i904.lightmapSceneIndex = i905[11]
  i904.lightmapScaleOffset = new pc.Vec4( i905[12], i905[13], i905[14], i905[15] )
  i904.lightProbeUsage = i905[16]
  i904.reflectionProbeUsage = i905[17]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i909 = data
  i908.center = new pc.Vec3( i909[0], i909[1], i909[2] )
  i908.size = new pc.Vec3( i909[3], i909[4], i909[5] )
  i908.enabled = !!i909[6]
  i908.isTrigger = !!i909[7]
  request.r(i909[8], i909[9], 0, i908, 'material')
  return i908
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i910 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i911 = data
  i910.m_GateType = i911[0]
  i910.m_Value = i911[1]
  request.r(i911[2], i911[3], 0, i910, 'm_Text')
  i910.m_SnapToGrid = !!i911[4]
  return i910
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TextMeshPro' )
  var i913 = data
  i912._SortingLayer = i913[0]
  i912._SortingLayerID = i913[1]
  i912._SortingOrder = i913[2]
  i912.m_hasFontAssetChanged = !!i913[3]
  request.r(i913[4], i913[5], 0, i912, 'm_renderer')
  i912.m_maskType = i913[6]
  i912.m_text = i913[7]
  i912.m_isRightToLeft = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'm_fontAsset')
  request.r(i913[11], i913[12], 0, i912, 'm_sharedMaterial')
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.m_fontSharedMaterials = i914
  request.r(i913[14], i913[15], 0, i912, 'm_fontMaterial')
  var i917 = i913[16]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.m_fontMaterials = i916
  i912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i913[17], i913[18], i913[19], i913[20])
  i912.m_fontColor = new pc.Color(i913[21], i913[22], i913[23], i913[24])
  i912.m_enableVertexGradient = !!i913[25]
  i912.m_colorMode = i913[26]
  i912.m_fontColorGradient = request.d('TMPro.VertexGradient', i913[27], i912.m_fontColorGradient)
  request.r(i913[28], i913[29], 0, i912, 'm_fontColorGradientPreset')
  request.r(i913[30], i913[31], 0, i912, 'm_spriteAsset')
  i912.m_tintAllSprites = !!i913[32]
  request.r(i913[33], i913[34], 0, i912, 'm_StyleSheet')
  i912.m_TextStyleHashCode = i913[35]
  i912.m_overrideHtmlColors = !!i913[36]
  i912.m_faceColor = UnityEngine.Color32.ConstructColor(i913[37], i913[38], i913[39], i913[40])
  i912.m_fontSize = i913[41]
  i912.m_fontSizeBase = i913[42]
  i912.m_fontWeight = i913[43]
  i912.m_enableAutoSizing = !!i913[44]
  i912.m_fontSizeMin = i913[45]
  i912.m_fontSizeMax = i913[46]
  i912.m_fontStyle = i913[47]
  i912.m_HorizontalAlignment = i913[48]
  i912.m_VerticalAlignment = i913[49]
  i912.m_textAlignment = i913[50]
  i912.m_characterSpacing = i913[51]
  i912.m_wordSpacing = i913[52]
  i912.m_lineSpacing = i913[53]
  i912.m_lineSpacingMax = i913[54]
  i912.m_paragraphSpacing = i913[55]
  i912.m_charWidthMaxAdj = i913[56]
  i912.m_enableWordWrapping = !!i913[57]
  i912.m_wordWrappingRatios = i913[58]
  i912.m_overflowMode = i913[59]
  request.r(i913[60], i913[61], 0, i912, 'm_linkedTextComponent')
  request.r(i913[62], i913[63], 0, i912, 'parentLinkedComponent')
  i912.m_enableKerning = !!i913[64]
  i912.m_enableExtraPadding = !!i913[65]
  i912.checkPaddingRequired = !!i913[66]
  i912.m_isRichText = !!i913[67]
  i912.m_parseCtrlCharacters = !!i913[68]
  i912.m_isOrthographic = !!i913[69]
  i912.m_isCullingEnabled = !!i913[70]
  i912.m_horizontalMapping = i913[71]
  i912.m_verticalMapping = i913[72]
  i912.m_uvLineOffset = i913[73]
  i912.m_geometrySortingOrder = i913[74]
  i912.m_IsTextObjectScaleStatic = !!i913[75]
  i912.m_VertexBufferAutoSizeReduction = !!i913[76]
  i912.m_useMaxVisibleDescender = !!i913[77]
  i912.m_pageToDisplay = i913[78]
  i912.m_margin = new pc.Vec4( i913[79], i913[80], i913[81], i913[82] )
  i912.m_isUsingLegacyAnimationComponent = !!i913[83]
  i912.m_isVolumetricText = !!i913[84]
  request.r(i913[85], i913[86], 0, i912, 'm_Material')
  i912.m_Maskable = !!i913[87]
  i912.m_Color = new pc.Color(i913[88], i913[89], i913[90], i913[91])
  i912.m_RaycastTarget = !!i913[92]
  i912.m_RaycastPadding = new pc.Vec4( i913[93], i913[94], i913[95], i913[96] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i919 = data
  i918.enabled = !!i919[0]
  i918.isTrigger = !!i919[1]
  request.r(i919[2], i919[3], 0, i918, 'material')
  i918.center = new pc.Vec3( i919[4], i919[5], i919[6] )
  i918.radius = i919[7]
  return i918
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i920 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Event')
  i920.m_Count = i921[2]
  i920.m_Sound = i921[3]
  i920.m_Particle = i921[4]
  i920.m_SnapToGrid = !!i921[5]
  return i920
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i922 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i923 = data
  i922.UsePositionBasedOffset = !!i923[0]
  i922.PositionBasedScale = i923[1]
  i922.Bob = !!i923[2]
  i922.BobSpeed = i923[3]
  i922.BobHeight = i923[4]
  i922.Spin = !!i923[5]
  i922.SpinSpeed = i923[6]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i925 = data
  i924.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i925[0], i924.main)
  i924.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i925[1], i924.colorBySpeed)
  i924.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i925[2], i924.colorOverLifetime)
  i924.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i925[3], i924.emission)
  i924.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i925[4], i924.rotationBySpeed)
  i924.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i925[5], i924.rotationOverLifetime)
  i924.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i925[6], i924.shape)
  i924.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i925[7], i924.sizeBySpeed)
  i924.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i925[8], i924.sizeOverLifetime)
  i924.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i925[9], i924.textureSheetAnimation)
  i924.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i925[10], i924.velocityOverLifetime)
  i924.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i925[11], i924.noise)
  i924.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i925[12], i924.inheritVelocity)
  i924.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i925[13], i924.forceOverLifetime)
  i924.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i925[14], i924.limitVelocityOverLifetime)
  i924.useAutoRandomSeed = !!i925[15]
  i924.randomSeed = i925[16]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemMain()
  var i927 = data
  i926.duration = i927[0]
  i926.loop = !!i927[1]
  i926.prewarm = !!i927[2]
  i926.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.startDelay)
  i926.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[4], i926.startLifetime)
  i926.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[5], i926.startSpeed)
  i926.startSize3D = !!i927[6]
  i926.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[7], i926.startSizeX)
  i926.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[8], i926.startSizeY)
  i926.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[9], i926.startSizeZ)
  i926.startRotation3D = !!i927[10]
  i926.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[11], i926.startRotationX)
  i926.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[12], i926.startRotationY)
  i926.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[13], i926.startRotationZ)
  i926.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i927[14], i926.startColor)
  i926.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[15], i926.gravityModifier)
  i926.simulationSpace = i927[16]
  request.r(i927[17], i927[18], 0, i926, 'customSimulationSpace')
  i926.simulationSpeed = i927[19]
  i926.useUnscaledTime = !!i927[20]
  i926.scalingMode = i927[21]
  i926.playOnAwake = !!i927[22]
  i926.maxParticles = i927[23]
  i926.emitterVelocityMode = i927[24]
  i926.stopAction = i927[25]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i928 = root || new pc.MinMaxCurve()
  var i929 = data
  i928.mode = i929[0]
  i928.curveMin = new pc.AnimationCurve( { keys_flow: i929[1] } )
  i928.curveMax = new pc.AnimationCurve( { keys_flow: i929[2] } )
  i928.curveMultiplier = i929[3]
  i928.constantMin = i929[4]
  i928.constantMax = i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i930 = root || new pc.MinMaxGradient()
  var i931 = data
  i930.mode = i931[0]
  i930.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i931[1], i930.gradientMin)
  i930.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i931[2], i930.gradientMax)
  i930.colorMin = new pc.Color(i931[3], i931[4], i931[5], i931[6])
  i930.colorMax = new pc.Color(i931[7], i931[8], i931[9], i931[10])
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i933 = data
  i932.mode = i933[0]
  var i935 = i933[1]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i935[i + 0]) );
  }
  i932.colorKeys = i934
  var i937 = i933[2]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i937[i + 0]) );
  }
  i932.alphaKeys = i936
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemColorBySpeed()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i939[1], i938.color)
  i938.range = new pc.Vec2( i939[2], i939[3] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i943 = data
  i942.color = new pc.Color(i943[0], i943[1], i943[2], i943[3])
  i942.time = i943[4]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i947 = data
  i946.alpha = i947[0]
  i946.time = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemColorOverLifetime()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i949[1], i948.color)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemEmitter()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.rateOverTime)
  i950.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.rateOverDistance)
  var i953 = i951[3]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i953[i + 0]) );
  }
  i950.bursts = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemBurst()
  var i957 = data
  i956.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[0], i956.count)
  i956.cycleCount = i957[1]
  i956.minCount = i957[2]
  i956.maxCount = i957[3]
  i956.repeatInterval = i957[4]
  i956.time = i957[5]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemRotationBySpeed()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.separateAxes = !!i959[4]
  i958.range = new pc.Vec2( i959[5], i959[6] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemRotationOverLifetime()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.separateAxes = !!i961[4]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemShape()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.shapeType = i963[1]
  i962.randomDirectionAmount = i963[2]
  i962.sphericalDirectionAmount = i963[3]
  i962.randomPositionAmount = i963[4]
  i962.alignToDirection = !!i963[5]
  i962.radius = i963[6]
  i962.radiusMode = i963[7]
  i962.radiusSpread = i963[8]
  i962.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[9], i962.radiusSpeed)
  i962.radiusThickness = i963[10]
  i962.angle = i963[11]
  i962.length = i963[12]
  i962.boxThickness = new pc.Vec3( i963[13], i963[14], i963[15] )
  i962.meshShapeType = i963[16]
  request.r(i963[17], i963[18], 0, i962, 'mesh')
  request.r(i963[19], i963[20], 0, i962, 'meshRenderer')
  request.r(i963[21], i963[22], 0, i962, 'skinnedMeshRenderer')
  i962.useMeshMaterialIndex = !!i963[23]
  i962.meshMaterialIndex = i963[24]
  i962.useMeshColors = !!i963[25]
  i962.normalOffset = i963[26]
  i962.arc = i963[27]
  i962.arcMode = i963[28]
  i962.arcSpread = i963[29]
  i962.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[30], i962.arcSpeed)
  i962.donutRadius = i963[31]
  i962.position = new pc.Vec3( i963[32], i963[33], i963[34] )
  i962.rotation = new pc.Vec3( i963[35], i963[36], i963[37] )
  i962.scale = new pc.Vec3( i963[38], i963[39], i963[40] )
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemSizeBySpeed()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.x)
  i964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.y)
  i964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.z)
  i964.separateAxes = !!i965[4]
  i964.range = new pc.Vec2( i965[5], i965[6] )
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemSizeOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.separateAxes = !!i967[4]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.mode = i969[1]
  i968.animation = i969[2]
  i968.numTilesX = i969[3]
  i968.numTilesY = i969[4]
  i968.useRandomRow = !!i969[5]
  i968.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[6], i968.frameOverTime)
  i968.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[7], i968.startFrame)
  i968.cycleCount = i969[8]
  i968.rowIndex = i969[9]
  i968.flipU = i969[10]
  i968.flipV = i969[11]
  i968.spriteCount = i969[12]
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.sprites = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.x)
  i974.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.y)
  i974.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.z)
  i974.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[4], i974.radial)
  i974.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[5], i974.speedModifier)
  i974.space = i975[6]
  i974.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[7], i974.orbitalX)
  i974.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[8], i974.orbitalY)
  i974.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[9], i974.orbitalZ)
  i974.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[10], i974.orbitalOffsetX)
  i974.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[11], i974.orbitalOffsetY)
  i974.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[12], i974.orbitalOffsetZ)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemNoise()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.separateAxes = !!i977[1]
  i976.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.strengthX)
  i976.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.strengthY)
  i976.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[4], i976.strengthZ)
  i976.frequency = i977[5]
  i976.damping = !!i977[6]
  i976.octaveCount = i977[7]
  i976.octaveMultiplier = i977[8]
  i976.octaveScale = i977[9]
  i976.quality = i977[10]
  i976.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[11], i976.scrollSpeed)
  i976.scrollSpeedMultiplier = i977[12]
  i976.remapEnabled = !!i977[13]
  i976.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[14], i976.remapX)
  i976.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[15], i976.remapY)
  i976.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[16], i976.remapZ)
  i976.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[17], i976.positionAmount)
  i976.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[18], i976.rotationAmount)
  i976.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[19], i976.sizeAmount)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemInheritVelocity()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.mode = i979[1]
  i978.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.curve)
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemForceOverLifetime()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[1], i980.x)
  i980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.y)
  i980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[3], i980.z)
  i980.space = i981[4]
  i980.randomized = !!i981[5]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[1], i982.limit)
  i982.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[2], i982.limitX)
  i982.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[3], i982.limitY)
  i982.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[4], i982.limitZ)
  i982.dampen = i983[5]
  i982.separateAxes = !!i983[6]
  i982.space = i983[7]
  i982.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[8], i982.drag)
  i982.multiplyDragByParticleSize = !!i983[9]
  i982.multiplyDragByParticleVelocity = !!i983[10]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i985 = data
  i984.enabled = !!i985[0]
  request.r(i985[1], i985[2], 0, i984, 'sharedMaterial')
  var i987 = i985[3]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sharedMaterials = i986
  i984.receiveShadows = !!i985[4]
  i984.shadowCastingMode = i985[5]
  i984.sortingLayerID = i985[6]
  i984.sortingOrder = i985[7]
  i984.lightmapIndex = i985[8]
  i984.lightmapSceneIndex = i985[9]
  i984.lightmapScaleOffset = new pc.Vec4( i985[10], i985[11], i985[12], i985[13] )
  i984.lightProbeUsage = i985[14]
  i984.reflectionProbeUsage = i985[15]
  request.r(i985[16], i985[17], 0, i984, 'mesh')
  i984.meshCount = i985[18]
  i984.activeVertexStreamsCount = i985[19]
  i984.alignment = i985[20]
  i984.renderMode = i985[21]
  i984.sortMode = i985[22]
  i984.lengthScale = i985[23]
  i984.velocityScale = i985[24]
  i984.cameraVelocityScale = i985[25]
  i984.normalDirection = i985[26]
  i984.sortingFudge = i985[27]
  i984.minParticleSize = i985[28]
  i984.maxParticleSize = i985[29]
  i984.pivot = new pc.Vec3( i985[30], i985[31], i985[32] )
  request.r(i985[33], i985[34], 0, i984, 'trailMaterial')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i989 = data
  i988.name = i989[0]
  i988.atlasId = i989[1]
  i988.mipmapCount = i989[2]
  i988.hdr = !!i989[3]
  i988.size = i989[4]
  i988.anisoLevel = i989[5]
  i988.filterMode = i989[6]
  var i991 = i989[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 4) {
    i990.push( UnityEngine.Rect.MinMaxRect(i991[i + 0], i991[i + 1], i991[i + 2], i991[i + 3]) );
  }
  i988.rects = i990
  i988.wrapU = i989[8]
  i988.wrapV = i989[9]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i995 = data
  i994.name = i995[0]
  i994.index = i995[1]
  i994.startup = !!i995[2]
  return i994
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'PlayableSettings' )
  var i997 = data
  i996.m_SkipMainMenu = !!i997[0]
  i996.m_UseCTAScreen = !!i997[1]
  i996.m_EndcardActivationSendsToStore = !!i997[2]
  i996.m_ShowEndcardAfterXTaps = !!i997[3]
  i996.m_TapsBeforeShowingEndcard = i997[4]
  return i996
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i998 = root || request.c( 'SimpleDeactivateOnTap' )
  var i999 = data
  return i998
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_FirstSelected')
  i1000.m_sendNavigationEvents = !!i1001[2]
  i1000.m_DragThreshold = i1001[3]
  return i1000
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1003 = data
  i1002.m_HorizontalAxis = i1003[0]
  i1002.m_VerticalAxis = i1003[1]
  i1002.m_SubmitButton = i1003[2]
  i1002.m_CancelButton = i1003[3]
  i1002.m_InputActionsPerSecond = i1003[4]
  i1002.m_RepeatDelay = i1003[5]
  i1002.m_ForceModuleActive = !!i1003[6]
  i1002.m_SendPointerHoverToParent = !!i1003[7]
  return i1002
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i1004 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'm_SequenceManagerPrefab')
  return i1004
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_MusicSource')
  request.r(i1007[2], i1007[3], 0, i1006, 'm_EffectSource')
  i1006.m_MinSoundInterval = i1007[4]
  var i1009 = i1007[5]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i1009[i + 0]) );
  }
  i1006.m_Sounds = i1008
  return i1006
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i1012 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i1013 = data
  i1012.m_SoundID = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'm_AudioClip')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'clip')
  request.r(i1015[2], i1015[3], 0, i1014, 'outputAudioMixerGroup')
  i1014.playOnAwake = !!i1015[4]
  i1014.loop = !!i1015[5]
  i1014.time = i1015[6]
  i1014.volume = i1015[7]
  i1014.pitch = i1015[8]
  i1014.enabled = !!i1015[9]
  return i1014
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i1016 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_Canvas')
  request.r(i1017[2], i1017[3], 0, i1016, 'm_Root')
  request.r(i1017[4], i1017[5], 0, i1016, 'm_ViewLayer')
  return i1016
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i1018 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_GoldText')
  var i1021 = i1019[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.Keys = i1020
  i1018.gainKeyColor = new pc.Color(i1019[3], i1019[4], i1019[5], i1019[6])
  return i1018
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i1024 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_LoseEvent')
  return i1024
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i1026 = root || request.c( 'CollectableParticleManager' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'keyParticlePrefab')
  request.r(i1027[2], i1027[3], 0, i1026, 'coinParticlePrefab')
  i1026.keyParticleCount = i1027[4]
  i1026.coinParticlesCount = i1027[5]
  return i1026
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i1028 = root || request.c( 'CheerPhraseController' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.phrases = i1030
  i1028.cheerPhraseColour = new pc.Color(i1029[1], i1029[2], i1029[3], i1029[4])
  request.r(i1029[5], i1029[6], 0, i1028, 'cheerText')
  request.r(i1029[7], i1029[8], 0, i1028, 'cheerTextAnimator')
  request.r(i1029[9], i1029[10], 0, i1028, 'keyCollectEvent')
  return i1028
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i1034 = root || request.c( 'OutroAnimationController' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'winEvent')
  i1034.endCardDelay = i1035[2]
  var i1037 = i1035[3]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.confettiParticles = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.aspect = i1041[1]
  i1040.orthographic = !!i1041[2]
  i1040.orthographicSize = i1041[3]
  i1040.backgroundColor = new pc.Color(i1041[4], i1041[5], i1041[6], i1041[7])
  i1040.nearClipPlane = i1041[8]
  i1040.farClipPlane = i1041[9]
  i1040.fieldOfView = i1041[10]
  i1040.depth = i1041[11]
  i1040.clearFlags = i1041[12]
  i1040.cullingMask = i1041[13]
  i1040.rect = i1041[14]
  request.r(i1041[15], i1041[16], 0, i1040, 'targetTexture')
  i1040.usePhysicalProperties = !!i1041[17]
  i1040.focalLength = i1041[18]
  i1040.sensorSize = new pc.Vec2( i1041[19], i1041[20] )
  i1040.lensShift = new pc.Vec2( i1041[21], i1041[22] )
  i1040.gateFit = i1041[23]
  i1040.commandBufferCount = i1041[24]
  i1040.cameraType = i1041[25]
  return i1040
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i1042 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i1043 = data
  i1042.m_CameraAnglePreset = i1043[0]
  i1042.m_Offset = new pc.Vec3( i1043[1], i1043[2], i1043[3] )
  i1042.m_LookAtOffset = new pc.Vec3( i1043[4], i1043[5], i1043[6] )
  i1042.m_LockCameraPosition = !!i1043[7]
  i1042.m_SmoothCameraFollow = !!i1043[8]
  i1042.m_SmoothCameraFollowStrength = i1043[9]
  return i1042
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i1044 = root || request.c( 'CoinEffectManager' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'coinEffectPrefab')
  request.r(i1045[2], i1045[3], 0, i1044, 'coinCounter')
  request.r(i1045[4], i1045[5], 0, i1044, 'player')
  i1044.speed = i1045[6]
  request.r(i1045[7], i1045[8], 0, i1044, 'm_CoinEvent')
  i1044.effectPoolCount = i1045[9]
  i1044.offsetZ = i1045[10]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1047 = data
  i1046.enabled = !!i1047[0]
  i1046.type = i1047[1]
  i1046.color = new pc.Color(i1047[2], i1047[3], i1047[4], i1047[5])
  i1046.cullingMask = i1047[6]
  i1046.intensity = i1047[7]
  i1046.range = i1047[8]
  i1046.spotAngle = i1047[9]
  i1046.shadows = i1047[10]
  i1046.shadowNormalBias = i1047[11]
  i1046.shadowBias = i1047[12]
  i1046.shadowStrength = i1047[13]
  i1046.shadowResolution = i1047[14]
  i1046.lightmapBakeType = i1047[15]
  i1046.renderMode = i1047[16]
  request.r(i1047[17], i1047[18], 0, i1046, 'cookie')
  i1046.cookieSize = i1047[19]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.isTrigger = !!i1049[1]
  request.r(i1049[2], i1049[3], 0, i1048, 'material')
  request.r(i1049[4], i1049[5], 0, i1048, 'sharedMesh')
  i1048.convex = !!i1049[6]
  return i1048
}

Deserializers["Assets.Scripts.Water.WaterArea"] = function (request, data, root) {
  var i1050 = root || request.c( 'Assets.Scripts.Water.WaterArea' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'waterProperties')
  return i1050
}

Deserializers["Assets.Scripts.Water.WaterPropertyBlockSetter"] = function (request, data, root) {
  var i1052 = root || request.c( 'Assets.Scripts.Water.WaterPropertyBlockSetter' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.waterRenderers = i1054
  i1052.waterColor = new pc.Color(i1053[1], i1053[2], i1053[3], i1053[4])
  request.r(i1053[5], i1053[6], 0, i1052, 'waterTex')
  i1052.waterTile = new pc.Vec2( i1053[7], i1053[8] )
  i1052.textureVisibility = i1053[9]
  request.r(i1053[10], i1053[11], 0, i1052, 'distortionTex')
  i1052.distortionTile = new pc.Vec2( i1053[12], i1053[13] )
  i1052.waterHeight = i1053[14]
  i1052.waterDeep = i1053[15]
  i1052.waterDepthParam = i1053[16]
  i1052.waterMinAlpha = i1053[17]
  i1052.borderColor = new pc.Color(i1053[18], i1053[19], i1053[20], i1053[21])
  i1052.borderWidth = i1053[22]
  i1052.moveDirection = new pc.Vec2( i1053[23], i1053[24] )
  return i1052
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i1058 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i1059 = data
  return i1058
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i1060 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'm_WinEvent')
  i1060.m_SnapToGrid = !!i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1063 = data
  i1062.ambientIntensity = i1063[0]
  i1062.reflectionIntensity = i1063[1]
  i1062.ambientMode = i1063[2]
  i1062.ambientLight = new pc.Color(i1063[3], i1063[4], i1063[5], i1063[6])
  i1062.ambientSkyColor = new pc.Color(i1063[7], i1063[8], i1063[9], i1063[10])
  i1062.ambientGroundColor = new pc.Color(i1063[11], i1063[12], i1063[13], i1063[14])
  i1062.ambientEquatorColor = new pc.Color(i1063[15], i1063[16], i1063[17], i1063[18])
  i1062.fogColor = new pc.Color(i1063[19], i1063[20], i1063[21], i1063[22])
  i1062.fogEndDistance = i1063[23]
  i1062.fogStartDistance = i1063[24]
  i1062.fogDensity = i1063[25]
  i1062.fog = !!i1063[26]
  request.r(i1063[27], i1063[28], 0, i1062, 'skybox')
  i1062.fogMode = i1063[29]
  var i1065 = i1063[30]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1065[i + 0]) );
  }
  i1062.lightmaps = i1064
  i1062.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1063[31], i1062.lightProbes)
  i1062.lightmapsMode = i1063[32]
  i1062.mixedBakeMode = i1063[33]
  i1062.environmentLightingMode = i1063[34]
  i1062.ambientProbe = new pc.SphericalHarmonicsL2(i1063[35])
  i1062.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1063[36])
  i1062.useReferenceAmbientProbe = !!i1063[37]
  request.r(i1063[38], i1063[39], 0, i1062, 'customReflection')
  request.r(i1063[40], i1063[41], 0, i1062, 'defaultReflection')
  i1062.defaultReflectionMode = i1063[42]
  i1062.defaultReflectionResolution = i1063[43]
  i1062.sunLightObjectId = i1063[44]
  i1062.pixelLightCount = i1063[45]
  i1062.defaultReflectionHDR = !!i1063[46]
  i1062.hasLightDataAsset = !!i1063[47]
  i1062.hasManualGenerate = !!i1063[48]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'lightmapColor')
  request.r(i1069[2], i1069[3], 0, i1068, 'lightmapDirection')
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1070 = root || new UnityEngine.LightProbes()
  var i1071 = data
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1081[i + 0]));
  }
  i1078.ShaderCompilationErrors = i1080
  i1078.name = i1079[1]
  i1078.guid = i1079[2]
  var i1083 = i1079[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.shaderDefinedKeywords = i1082
  var i1085 = i1079[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1085[i + 0]) );
  }
  i1078.passes = i1084
  var i1087 = i1079[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1087[i + 0]) );
  }
  i1078.usePasses = i1086
  var i1089 = i1079[6]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1089[i + 0]) );
  }
  i1078.defaultParameterValues = i1088
  request.r(i1079[7], i1079[8], 0, i1078, 'unityFallbackShader')
  i1078.readDepth = !!i1079[9]
  i1078.isCreatedByShaderGraph = !!i1079[10]
  i1078.compiled = !!i1079[11]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1093 = data
  i1092.shaderName = i1093[0]
  i1092.errorMessage = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1096 = root || new pc.UnityShaderPass()
  var i1097 = data
  i1096.id = i1097[0]
  i1096.subShaderIndex = i1097[1]
  i1096.name = i1097[2]
  i1096.passType = i1097[3]
  i1096.grabPassTextureName = i1097[4]
  i1096.usePass = !!i1097[5]
  i1096.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[6], i1096.zTest)
  i1096.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[7], i1096.zWrite)
  i1096.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[8], i1096.culling)
  i1096.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1097[9], i1096.blending)
  i1096.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1097[10], i1096.alphaBlending)
  i1096.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[11], i1096.colorWriteMask)
  i1096.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[12], i1096.offsetUnits)
  i1096.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[13], i1096.offsetFactor)
  i1096.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[14], i1096.stencilRef)
  i1096.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[15], i1096.stencilReadMask)
  i1096.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[16], i1096.stencilWriteMask)
  i1096.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[17], i1096.stencilOp)
  i1096.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[18], i1096.stencilOpFront)
  i1096.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1097[19], i1096.stencilOpBack)
  var i1099 = i1097[20]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1099[i + 0]) );
  }
  i1096.tags = i1098
  var i1101 = i1097[21]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1096.passDefinedKeywords = i1100
  var i1103 = i1097[22]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1103[i + 0]) );
  }
  i1096.passDefinedKeywordGroups = i1102
  var i1105 = i1097[23]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1105[i + 0]) );
  }
  i1096.variants = i1104
  var i1107 = i1097[24]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1107[i + 0]) );
  }
  i1096.excludedVariants = i1106
  i1096.hasDepthReader = !!i1097[25]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1109 = data
  i1108.val = i1109[0]
  i1108.name = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1111 = data
  i1110.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[0], i1110.src)
  i1110.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[1], i1110.dst)
  i1110.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[2], i1110.op)
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1113 = data
  i1112.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[0], i1112.pass)
  i1112.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[1], i1112.fail)
  i1112.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[2], i1112.zFail)
  i1112.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1113[3], i1112.comp)
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.value = i1117[1]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1120.keywords = i1122
  i1120.hasDiscard = !!i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1127 = data
  i1126.passId = i1127[0]
  i1126.subShaderIndex = i1127[1]
  var i1129 = i1127[2]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.keywords = i1128
  i1126.vertexProgram = i1127[3]
  i1126.fragmentProgram = i1127[4]
  i1126.exportedForWebGl2 = !!i1127[5]
  i1126.readDepth = !!i1127[6]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'shader')
  i1132.pass = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.type = i1137[1]
  i1136.value = new pc.Vec4( i1137[2], i1137[3], i1137[4], i1137[5] )
  i1136.textureValue = i1137[6]
  i1136.shaderPropertyFlag = i1137[7]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1139 = data
  i1138.name = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'texture')
  i1138.aabb = i1139[3]
  i1138.vertices = i1139[4]
  i1138.triangles = i1139[5]
  i1138.textureRect = UnityEngine.Rect.MinMaxRect(i1139[6], i1139[7], i1139[8], i1139[9])
  i1138.packedRect = UnityEngine.Rect.MinMaxRect(i1139[10], i1139[11], i1139[12], i1139[13])
  i1138.border = new pc.Vec4( i1139[14], i1139[15], i1139[16], i1139[17] )
  i1138.transparency = i1139[18]
  i1138.bounds = i1139[19]
  i1138.pixelsPerUnit = i1139[20]
  i1138.textureWidth = i1139[21]
  i1138.textureHeight = i1139[22]
  i1138.nativeSize = new pc.Vec2( i1139[23], i1139[24] )
  i1138.pivot = new pc.Vec2( i1139[25], i1139[26] )
  i1138.textureRectOffset = new pc.Vec2( i1139[27], i1139[28] )
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1141 = data
  i1140.name = i1141[0]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.wrapMode = i1143[1]
  i1142.isLooping = !!i1143[2]
  i1142.length = i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1145[i + 0]) );
  }
  i1142.curves = i1144
  var i1147 = i1143[5]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1147[i + 0]) );
  }
  i1142.events = i1146
  i1142.halfPrecision = !!i1143[6]
  i1142._frameRate = i1143[7]
  i1142.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1143[8], i1142.localBounds)
  i1142.hasMuscleCurves = !!i1143[9]
  var i1149 = i1143[10]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1142.clipMuscleConstant = i1148
  i1142.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1143[11], i1142.clipBindingConstant)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1153 = data
  i1152.path = i1153[0]
  i1152.hash = i1153[1]
  i1152.componentType = i1153[2]
  i1152.property = i1153[3]
  i1152.keys = i1153[4]
  var i1155 = i1153[5]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1155[i + 0]) );
  }
  i1152.objectReferenceKeys = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1159 = data
  i1158.functionName = i1159[0]
  i1158.floatParameter = i1159[1]
  i1158.intParameter = i1159[2]
  i1158.stringParameter = i1159[3]
  request.r(i1159[4], i1159[5], 0, i1158, 'objectReferenceParameter')
  i1158.time = i1159[6]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1161 = data
  i1160.center = new pc.Vec3( i1161[0], i1161[1], i1161[2] )
  i1160.extends = new pc.Vec3( i1161[3], i1161[4], i1161[5] )
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1164.genericBindings = i1166
  var i1169 = i1165[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( i1169[i + 0] );
  }
  i1164.pptrCurveMapping = i1168
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1173 = data
  i1172.time = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'value')
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.blendParameter = i1175[1]
  i1174.blendParameterY = i1175[2]
  i1174.blendType = i1175[3]
  var i1177 = i1175[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1177[i + 0]) );
  }
  i1174.children = i1176
  i1174.useAutomaticThresholds = !!i1175[5]
  i1174.minThreshold = i1175[6]
  i1174.maxThreshold = i1175[7]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'motion')
  i1180.threshold = i1181[2]
  i1180.position = new pc.Vec2( i1181[3], i1181[4] )
  i1180.timeScale = i1181[5]
  i1180.cycleOffset = i1181[6]
  i1180.directBlendParameter = i1181[7]
  i1180.mirror = !!i1181[8]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.ascent = i1183[1]
  i1182.originalLineHeight = i1183[2]
  i1182.fontSize = i1183[3]
  var i1185 = i1183[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1185[i + 0]) );
  }
  i1182.characterInfo = i1184
  request.r(i1183[5], i1183[6], 0, i1182, 'texture')
  i1182.originalFontSize = i1183[7]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1189 = data
  i1188.index = i1189[0]
  i1188.advance = i1189[1]
  i1188.bearing = i1189[2]
  i1188.glyphWidth = i1189[3]
  i1188.glyphHeight = i1189[4]
  i1188.minX = i1189[5]
  i1188.maxX = i1189[6]
  i1188.minY = i1189[7]
  i1188.maxY = i1189[8]
  i1188.uvBottomLeftX = i1189[9]
  i1188.uvBottomLeftY = i1189[10]
  i1188.uvBottomRightX = i1189[11]
  i1188.uvBottomRightY = i1189[12]
  i1188.uvTopLeftX = i1189[13]
  i1188.uvTopLeftY = i1189[14]
  i1188.uvTopRightX = i1189[15]
  i1188.uvTopRightY = i1189[16]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1191 = data
  i1190.name = i1191[0]
  var i1193 = i1191[1]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1193[i + 0]) );
  }
  i1190.layers = i1192
  var i1195 = i1191[2]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1195[i + 0]) );
  }
  i1190.parameters = i1194
  i1190.animationClips = i1191[3]
  i1190.avatarUnsupported = i1191[4]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.defaultWeight = i1199[1]
  i1198.blendingMode = i1199[2]
  i1198.avatarMask = i1199[3]
  i1198.syncedLayerIndex = i1199[4]
  i1198.syncedLayerAffectsTiming = !!i1199[5]
  i1198.syncedLayers = i1199[6]
  i1198.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1199[7], i1198.stateMachine)
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  i1200.path = i1201[2]
  var i1203 = i1201[3]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1203[i + 0]) );
  }
  i1200.states = i1202
  var i1205 = i1201[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1205[i + 0]) );
  }
  i1200.machines = i1204
  var i1207 = i1201[5]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1207[i + 0]) );
  }
  i1200.entryStateTransitions = i1206
  var i1209 = i1201[6]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1209[i + 0]) );
  }
  i1200.exitStateTransitions = i1208
  var i1211 = i1201[7]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1211[i + 0]) );
  }
  i1200.anyStateTransitions = i1210
  i1200.defaultStateId = i1201[8]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.name = i1215[1]
  i1214.cycleOffset = i1215[2]
  i1214.cycleOffsetParameter = i1215[3]
  i1214.cycleOffsetParameterActive = !!i1215[4]
  i1214.mirror = !!i1215[5]
  i1214.mirrorParameter = i1215[6]
  i1214.mirrorParameterActive = !!i1215[7]
  i1214.motionId = i1215[8]
  i1214.nameHash = i1215[9]
  i1214.fullPathHash = i1215[10]
  i1214.speed = i1215[11]
  i1214.speedParameter = i1215[12]
  i1214.speedParameterActive = !!i1215[13]
  i1214.tag = i1215[14]
  i1214.tagHash = i1215[15]
  i1214.writeDefaultValues = !!i1215[16]
  var i1217 = i1215[17]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1214.behaviours = i1216
  var i1219 = i1215[18]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1219[i + 0]) );
  }
  i1214.transitions = i1218
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1225 = data
  i1224.fullPath = i1225[0]
  i1224.canTransitionToSelf = !!i1225[1]
  i1224.duration = i1225[2]
  i1224.exitTime = i1225[3]
  i1224.hasExitTime = !!i1225[4]
  i1224.hasFixedDuration = !!i1225[5]
  i1224.interruptionSource = i1225[6]
  i1224.offset = i1225[7]
  i1224.orderedInterruption = !!i1225[8]
  i1224.destinationStateId = i1225[9]
  i1224.isExit = !!i1225[10]
  i1224.mute = !!i1225[11]
  i1224.solo = !!i1225[12]
  var i1227 = i1225[13]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1227[i + 0]) );
  }
  i1224.conditions = i1226
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1231 = data
  i1230.mode = i1231[0]
  i1230.parameter = i1231[1]
  i1230.threshold = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1237 = data
  i1236.destinationStateId = i1237[0]
  i1236.isExit = !!i1237[1]
  i1236.mute = !!i1237[2]
  i1236.solo = !!i1237[3]
  var i1239 = i1237[4]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1239[i + 0]) );
  }
  i1236.conditions = i1238
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1243 = data
  i1242.defaultBool = !!i1243[0]
  i1242.defaultFloat = i1243[1]
  i1242.defaultInt = i1243[2]
  i1242.name = i1243[3]
  i1242.nameHash = i1243[4]
  i1242.type = i1243[5]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.bytes64 = i1245[1]
  i1244.data = i1245[2]
  return i1244
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1247 = data
  i1246.hashCode = i1247[0]
  request.r(i1247[1], i1247[2], 0, i1246, 'material')
  i1246.materialHashCode = i1247[3]
  request.r(i1247[4], i1247[5], 0, i1246, 'atlas')
  i1246.normalStyle = i1247[6]
  i1246.normalSpacingOffset = i1247[7]
  i1246.boldStyle = i1247[8]
  i1246.boldSpacing = i1247[9]
  i1246.italicStyle = i1247[10]
  i1246.tabSize = i1247[11]
  i1246.m_Version = i1247[12]
  i1246.m_SourceFontFileGUID = i1247[13]
  request.r(i1247[14], i1247[15], 0, i1246, 'm_SourceFontFile_EditorRef')
  request.r(i1247[16], i1247[17], 0, i1246, 'm_SourceFontFile')
  i1246.m_AtlasPopulationMode = i1247[18]
  i1246.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1247[19], i1246.m_FaceInfo)
  var i1249 = i1247[20]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('UnityEngine.TextCore.Glyph', i1249[i + 0]));
  }
  i1246.m_GlyphTable = i1248
  var i1251 = i1247[21]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_Character', i1251[i + 0]));
  }
  i1246.m_CharacterTable = i1250
  var i1253 = i1247[22]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1246.m_AtlasTextures = i1252
  i1246.m_AtlasTextureIndex = i1247[23]
  i1246.m_IsMultiAtlasTexturesEnabled = !!i1247[24]
  i1246.m_ClearDynamicDataOnBuild = !!i1247[25]
  var i1255 = i1247[26]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('UnityEngine.TextCore.GlyphRect', i1255[i + 0]));
  }
  i1246.m_UsedGlyphRects = i1254
  var i1257 = i1247[27]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('UnityEngine.TextCore.GlyphRect', i1257[i + 0]));
  }
  i1246.m_FreeGlyphRects = i1256
  i1246.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1247[28], i1246.m_fontInfo)
  i1246.m_AtlasWidth = i1247[29]
  i1246.m_AtlasHeight = i1247[30]
  i1246.m_AtlasPadding = i1247[31]
  i1246.m_AtlasRenderMode = i1247[32]
  var i1259 = i1247[33]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_Glyph', i1259[i + 0]));
  }
  i1246.m_glyphInfoList = i1258
  i1246.m_KerningTable = request.d('TMPro.KerningTable', i1247[34], i1246.m_KerningTable)
  i1246.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1247[35], i1246.m_FontFeatureTable)
  var i1261 = i1247[36]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1246.fallbackFontAssets = i1260
  var i1263 = i1247[37]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 1, i1262, '')
  }
  i1246.m_FallbackFontAssetTable = i1262
  i1246.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1247[38], i1246.m_CreationSettings)
  var i1265 = i1247[39]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('TMPro.TMP_FontWeightPair', i1265[i + 0]) );
  }
  i1246.m_FontWeightTable = i1264
  var i1267 = i1247[40]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('TMPro.TMP_FontWeightPair', i1267[i + 0]) );
  }
  i1246.fontWeights = i1266
  return i1246
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1269 = data
  i1268.m_FaceIndex = i1269[0]
  i1268.m_FamilyName = i1269[1]
  i1268.m_StyleName = i1269[2]
  i1268.m_PointSize = i1269[3]
  i1268.m_Scale = i1269[4]
  i1268.m_UnitsPerEM = i1269[5]
  i1268.m_LineHeight = i1269[6]
  i1268.m_AscentLine = i1269[7]
  i1268.m_CapLine = i1269[8]
  i1268.m_MeanLine = i1269[9]
  i1268.m_Baseline = i1269[10]
  i1268.m_DescentLine = i1269[11]
  i1268.m_SuperscriptOffset = i1269[12]
  i1268.m_SuperscriptSize = i1269[13]
  i1268.m_SubscriptOffset = i1269[14]
  i1268.m_SubscriptSize = i1269[15]
  i1268.m_UnderlineOffset = i1269[16]
  i1268.m_UnderlineThickness = i1269[17]
  i1268.m_StrikethroughOffset = i1269[18]
  i1268.m_StrikethroughThickness = i1269[19]
  i1268.m_TabWidth = i1269[20]
  return i1268
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1273 = data
  i1272.m_Index = i1273[0]
  i1272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1273[1], i1272.m_Metrics)
  i1272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1273[2], i1272.m_GlyphRect)
  i1272.m_Scale = i1273[3]
  i1272.m_AtlasIndex = i1273[4]
  i1272.m_ClassDefinitionType = i1273[5]
  return i1272
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1275 = data
  i1274.m_Width = i1275[0]
  i1274.m_Height = i1275[1]
  i1274.m_HorizontalBearingX = i1275[2]
  i1274.m_HorizontalBearingY = i1275[3]
  i1274.m_HorizontalAdvance = i1275[4]
  return i1274
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1277 = data
  i1276.m_X = i1277[0]
  i1276.m_Y = i1277[1]
  i1276.m_Width = i1277[2]
  i1276.m_Height = i1277[3]
  return i1276
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Character' )
  var i1281 = data
  i1280.m_ElementType = i1281[0]
  i1280.m_Unicode = i1281[1]
  i1280.m_GlyphIndex = i1281[2]
  i1280.m_Scale = i1281[3]
  return i1280
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1287 = data
  i1286.Name = i1287[0]
  i1286.PointSize = i1287[1]
  i1286.Scale = i1287[2]
  i1286.CharacterCount = i1287[3]
  i1286.LineHeight = i1287[4]
  i1286.Baseline = i1287[5]
  i1286.Ascender = i1287[6]
  i1286.CapHeight = i1287[7]
  i1286.Descender = i1287[8]
  i1286.CenterLine = i1287[9]
  i1286.SuperscriptOffset = i1287[10]
  i1286.SubscriptOffset = i1287[11]
  i1286.SubSize = i1287[12]
  i1286.Underline = i1287[13]
  i1286.UnderlineThickness = i1287[14]
  i1286.strikethrough = i1287[15]
  i1286.strikethroughThickness = i1287[16]
  i1286.TabWidth = i1287[17]
  i1286.Padding = i1287[18]
  i1286.AtlasWidth = i1287[19]
  i1286.AtlasHeight = i1287[20]
  return i1286
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1291 = data
  i1290.id = i1291[0]
  i1290.x = i1291[1]
  i1290.y = i1291[2]
  i1290.width = i1291[3]
  i1290.height = i1291[4]
  i1290.xOffset = i1291[5]
  i1290.yOffset = i1291[6]
  i1290.xAdvance = i1291[7]
  i1290.scale = i1291[8]
  return i1290
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.KerningTable' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('TMPro.KerningPair', i1295[i + 0]));
  }
  i1292.kerningPairs = i1294
  return i1292
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.KerningPair' )
  var i1299 = data
  i1298.xOffset = i1299[0]
  i1298.m_FirstGlyph = i1299[1]
  i1298.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1299[2], i1298.m_FirstGlyphAdjustments)
  i1298.m_SecondGlyph = i1299[3]
  i1298.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1299[4], i1298.m_SecondGlyphAdjustments)
  i1298.m_IgnoreSpacingAdjustments = !!i1299[5]
  return i1298
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1303[i + 0]));
  }
  i1300.m_GlyphPairAdjustmentRecords = i1302
  return i1300
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1307 = data
  i1306.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1307[0], i1306.m_FirstAdjustmentRecord)
  i1306.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1307[1], i1306.m_SecondAdjustmentRecord)
  i1306.m_FeatureLookupFlags = i1307[2]
  return i1306
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1309 = data
  i1308.m_GlyphIndex = i1309[0]
  i1308.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1309[1], i1308.m_GlyphValueRecord)
  return i1308
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1311 = data
  i1310.m_XPlacement = i1311[0]
  i1310.m_YPlacement = i1311[1]
  i1310.m_XAdvance = i1311[2]
  i1310.m_YAdvance = i1311[3]
  return i1310
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1315 = data
  i1314.sourceFontFileName = i1315[0]
  i1314.sourceFontFileGUID = i1315[1]
  i1314.pointSizeSamplingMode = i1315[2]
  i1314.pointSize = i1315[3]
  i1314.padding = i1315[4]
  i1314.packingMode = i1315[5]
  i1314.atlasWidth = i1315[6]
  i1314.atlasHeight = i1315[7]
  i1314.characterSetSelectionMode = i1315[8]
  i1314.characterSequence = i1315[9]
  i1314.referencedFontAssetGUID = i1315[10]
  i1314.referencedTextAssetGUID = i1315[11]
  i1314.fontStyle = i1315[12]
  i1314.fontStyleModifier = i1315[13]
  i1314.renderMode = i1315[14]
  i1314.includeFontFeatures = !!i1315[15]
  return i1314
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'regularTypeface')
  request.r(i1319[2], i1319[3], 0, i1318, 'italicTypeface')
  return i1318
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i1320 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i1321 = data
  i1320.Count = i1321[0]
  return i1320
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i1322 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i1323 = data
  return i1322
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1325 = data
  i1324.useSafeMode = !!i1325[0]
  i1324.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1325[1], i1324.safeModeOptions)
  i1324.timeScale = i1325[2]
  i1324.unscaledTimeScale = i1325[3]
  i1324.useSmoothDeltaTime = !!i1325[4]
  i1324.maxSmoothUnscaledTime = i1325[5]
  i1324.rewindCallbackMode = i1325[6]
  i1324.showUnityEditorReport = !!i1325[7]
  i1324.logBehaviour = i1325[8]
  i1324.drawGizmos = !!i1325[9]
  i1324.defaultRecyclable = !!i1325[10]
  i1324.defaultAutoPlay = i1325[11]
  i1324.defaultUpdateType = i1325[12]
  i1324.defaultTimeScaleIndependent = !!i1325[13]
  i1324.defaultEaseType = i1325[14]
  i1324.defaultEaseOvershootOrAmplitude = i1325[15]
  i1324.defaultEasePeriod = i1325[16]
  i1324.defaultAutoKill = !!i1325[17]
  i1324.defaultLoopType = i1325[18]
  i1324.debugMode = !!i1325[19]
  i1324.debugStoreTargetId = !!i1325[20]
  i1324.showPreviewPanel = !!i1325[21]
  i1324.storeSettingsLocation = i1325[22]
  i1324.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1325[23], i1324.modules)
  i1324.createASMDEF = !!i1325[24]
  i1324.showPlayingTweens = !!i1325[25]
  i1324.showPausedTweens = !!i1325[26]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1327 = data
  i1326.logBehaviour = i1327[0]
  i1326.nestedTweenFailureBehaviour = i1327[1]
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1329 = data
  i1328.showPanel = !!i1329[0]
  i1328.audioEnabled = !!i1329[1]
  i1328.physicsEnabled = !!i1329[2]
  i1328.physics2DEnabled = !!i1329[3]
  i1328.spriteEnabled = !!i1329[4]
  i1328.uiEnabled = !!i1329[5]
  i1328.textMeshProEnabled = !!i1329[6]
  i1328.tk2DEnabled = !!i1329[7]
  i1328.deAudioEnabled = !!i1329[8]
  i1328.deUnityExtendedEnabled = !!i1329[9]
  i1328.epoOutlineEnabled = !!i1329[10]
  return i1328
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_Settings' )
  var i1331 = data
  i1330.m_enableWordWrapping = !!i1331[0]
  i1330.m_enableKerning = !!i1331[1]
  i1330.m_enableExtraPadding = !!i1331[2]
  i1330.m_enableTintAllSprites = !!i1331[3]
  i1330.m_enableParseEscapeCharacters = !!i1331[4]
  i1330.m_EnableRaycastTarget = !!i1331[5]
  i1330.m_GetFontFeaturesAtRuntime = !!i1331[6]
  i1330.m_missingGlyphCharacter = i1331[7]
  i1330.m_warningsDisabled = !!i1331[8]
  request.r(i1331[9], i1331[10], 0, i1330, 'm_defaultFontAsset')
  i1330.m_defaultFontAssetPath = i1331[11]
  i1330.m_defaultFontSize = i1331[12]
  i1330.m_defaultAutoSizeMinRatio = i1331[13]
  i1330.m_defaultAutoSizeMaxRatio = i1331[14]
  i1330.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1331[15], i1331[16] )
  i1330.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1331[17], i1331[18] )
  i1330.m_autoSizeTextContainer = !!i1331[19]
  i1330.m_IsTextObjectScaleStatic = !!i1331[20]
  var i1333 = i1331[21]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1330.m_fallbackFontAssets = i1332
  i1330.m_matchMaterialPreset = !!i1331[22]
  request.r(i1331[23], i1331[24], 0, i1330, 'm_defaultSpriteAsset')
  i1330.m_defaultSpriteAssetPath = i1331[25]
  i1330.m_enableEmojiSupport = !!i1331[26]
  i1330.m_MissingCharacterSpriteUnicode = i1331[27]
  i1330.m_defaultColorGradientPresetsPath = i1331[28]
  request.r(i1331[29], i1331[30], 0, i1330, 'm_defaultStyleSheet')
  i1330.m_StyleSheetsResourcePath = i1331[31]
  request.r(i1331[32], i1331[33], 0, i1330, 'm_leadingCharacters')
  request.r(i1331[34], i1331[35], 0, i1330, 'm_followingCharacters')
  i1330.m_UseModernHangulLineBreakingRules = !!i1331[36]
  return i1330
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1335 = data
  i1334.hashCode = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'material')
  i1334.materialHashCode = i1335[3]
  request.r(i1335[4], i1335[5], 0, i1334, 'spriteSheet')
  var i1337 = i1335[6]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Sprite', i1337[i + 0]));
  }
  i1334.spriteInfoList = i1336
  var i1339 = i1335[7]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1334.fallbackSpriteAssets = i1338
  i1334.m_Version = i1335[8]
  i1334.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1335[9], i1334.m_FaceInfo)
  var i1341 = i1335[10]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_SpriteCharacter', i1341[i + 0]));
  }
  i1334.m_SpriteCharacterTable = i1340
  var i1343 = i1335[11]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.TMP_SpriteGlyph', i1343[i + 0]));
  }
  i1334.m_SpriteGlyphTable = i1342
  return i1334
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1347 = data
  i1346.name = i1347[0]
  i1346.hashCode = i1347[1]
  i1346.unicode = i1347[2]
  i1346.pivot = new pc.Vec2( i1347[3], i1347[4] )
  request.r(i1347[5], i1347[6], 0, i1346, 'sprite')
  i1346.id = i1347[7]
  i1346.x = i1347[8]
  i1346.y = i1347[9]
  i1346.width = i1347[10]
  i1346.height = i1347[11]
  i1346.xOffset = i1347[12]
  i1346.yOffset = i1347[13]
  i1346.xAdvance = i1347[14]
  i1346.scale = i1347[15]
  return i1346
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1353 = data
  i1352.m_Name = i1353[0]
  i1352.m_HashCode = i1353[1]
  i1352.m_ElementType = i1353[2]
  i1352.m_Unicode = i1353[3]
  i1352.m_GlyphIndex = i1353[4]
  i1352.m_Scale = i1353[5]
  return i1352
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1357 = data
  request.r(i1357[0], i1357[1], 0, i1356, 'sprite')
  i1356.m_Index = i1357[2]
  i1356.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1357[3], i1356.m_Metrics)
  i1356.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1357[4], i1356.m_GlyphRect)
  i1356.m_Scale = i1357[5]
  i1356.m_AtlasIndex = i1357[6]
  i1356.m_ClassDefinitionType = i1357[7]
  return i1356
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.TMP_Style', i1361[i + 0]));
  }
  i1358.m_StyleList = i1360
  return i1358
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_Style' )
  var i1365 = data
  i1364.m_Name = i1365[0]
  i1364.m_HashCode = i1365[1]
  i1364.m_OpeningDefinition = i1365[2]
  i1364.m_ClosingDefinition = i1365[3]
  i1364.m_OpeningTagArray = i1365[4]
  i1364.m_ClosingTagArray = i1365[5]
  i1364.m_OpeningTagUnicodeArray = i1365[6]
  i1364.m_ClosingTagUnicodeArray = i1365[7]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1369[i + 0]) );
  }
  i1366.files = i1368
  i1366.componentToPrefabIds = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1373 = data
  i1372.path = i1373[0]
  request.r(i1373[1], i1373[2], 0, i1372, 'unityObject')
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1377[i + 0]) );
  }
  i1374.scriptsExecutionOrder = i1376
  var i1379 = i1375[1]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1379[i + 0]) );
  }
  i1374.sortingLayers = i1378
  var i1381 = i1375[2]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1381[i + 0]) );
  }
  i1374.cullingLayers = i1380
  i1374.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1375[3], i1374.timeSettings)
  i1374.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1375[4], i1374.physicsSettings)
  i1374.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1375[5], i1374.physics2DSettings)
  i1374.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1375[6], i1374.qualitySettings)
  i1374.enableRealtimeShadows = !!i1375[7]
  i1374.enableAutoInstancing = !!i1375[8]
  i1374.enableDynamicBatching = !!i1375[9]
  i1374.lightmapEncodingQuality = i1375[10]
  i1374.desiredColorSpace = i1375[11]
  var i1383 = i1375[12]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1374.allTags = i1382
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1387 = data
  i1386.name = i1387[0]
  i1386.value = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1391 = data
  i1390.id = i1391[0]
  i1390.name = i1391[1]
  i1390.value = i1391[2]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1395 = data
  i1394.id = i1395[0]
  i1394.name = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1397 = data
  i1396.fixedDeltaTime = i1397[0]
  i1396.maximumDeltaTime = i1397[1]
  i1396.timeScale = i1397[2]
  i1396.maximumParticleTimestep = i1397[3]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1399 = data
  i1398.gravity = new pc.Vec3( i1399[0], i1399[1], i1399[2] )
  i1398.defaultSolverIterations = i1399[3]
  i1398.bounceThreshold = i1399[4]
  i1398.autoSyncTransforms = !!i1399[5]
  i1398.autoSimulation = !!i1399[6]
  var i1401 = i1399[7]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1401[i + 0]) );
  }
  i1398.collisionMatrix = i1400
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.layerId = i1405[1]
  i1404.otherLayerId = i1405[2]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'material')
  i1406.gravity = new pc.Vec2( i1407[2], i1407[3] )
  i1406.positionIterations = i1407[4]
  i1406.velocityIterations = i1407[5]
  i1406.velocityThreshold = i1407[6]
  i1406.maxLinearCorrection = i1407[7]
  i1406.maxAngularCorrection = i1407[8]
  i1406.maxTranslationSpeed = i1407[9]
  i1406.maxRotationSpeed = i1407[10]
  i1406.baumgarteScale = i1407[11]
  i1406.baumgarteTOIScale = i1407[12]
  i1406.timeToSleep = i1407[13]
  i1406.linearSleepTolerance = i1407[14]
  i1406.angularSleepTolerance = i1407[15]
  i1406.defaultContactOffset = i1407[16]
  i1406.autoSimulation = !!i1407[17]
  i1406.queriesHitTriggers = !!i1407[18]
  i1406.queriesStartInColliders = !!i1407[19]
  i1406.callbacksOnDisable = !!i1407[20]
  i1406.reuseCollisionCallbacks = !!i1407[21]
  i1406.autoSyncTransforms = !!i1407[22]
  var i1409 = i1407[23]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1409[i + 0]) );
  }
  i1406.collisionMatrix = i1408
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.layerId = i1413[1]
  i1412.otherLayerId = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1415 = data
  var i1417 = i1415[0]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1417[i + 0]) );
  }
  i1414.qualityLevels = i1416
  var i1419 = i1415[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1414.names = i1418
  i1414.shadows = i1415[2]
  i1414.anisotropicFiltering = i1415[3]
  i1414.antiAliasing = i1415[4]
  i1414.lodBias = i1415[5]
  i1414.shadowCascades = i1415[6]
  i1414.shadowDistance = i1415[7]
  i1414.shadowmaskMode = i1415[8]
  i1414.shadowProjection = i1415[9]
  i1414.shadowResolution = i1415[10]
  i1414.softParticles = !!i1415[11]
  i1414.softVegetation = !!i1415[12]
  i1414.activeColorSpace = i1415[13]
  i1414.desiredColorSpace = i1415[14]
  i1414.masterTextureLimit = i1415[15]
  i1414.maxQueuedFrames = i1415[16]
  i1414.particleRaycastBudget = i1415[17]
  i1414.pixelLightCount = i1415[18]
  i1414.realtimeReflectionProbes = !!i1415[19]
  i1414.shadowCascade2Split = i1415[20]
  i1414.shadowCascade4Split = new pc.Vec3( i1415[21], i1415[22], i1415[23] )
  i1414.streamingMipmapsActive = !!i1415[24]
  i1414.vSyncCount = i1415[25]
  i1414.asyncUploadBufferSize = i1415[26]
  i1414.asyncUploadTimeSlice = i1415[27]
  i1414.billboardsFaceCameraPosition = !!i1415[28]
  i1414.shadowNearPlaneOffset = i1415[29]
  i1414.streamingMipmapsMemoryBudget = i1415[30]
  i1414.maximumLODLevel = i1415[31]
  i1414.streamingMipmapsAddAllCameras = !!i1415[32]
  i1414.streamingMipmapsMaxLevelReduction = i1415[33]
  i1414.streamingMipmapsRenderersPerFrame = i1415[34]
  i1414.resolutionScalingFixedDPIFactor = i1415[35]
  i1414.streamingMipmapsMaxFileIORequests = i1415[36]
  i1414.currentQualityLevel = i1415[37]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1425 = data
  i1424.weight = i1425[0]
  i1424.vertices = i1425[1]
  i1424.normals = i1425[2]
  i1424.tangents = i1425[3]
  return i1424
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1427 = data
  i1426.xPlacement = i1427[0]
  i1426.yPlacement = i1427[1]
  i1426.xAdvance = i1427[2]
  i1426.yAdvance = i1427[3]
  return i1426
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[30],"89":[59],"90":[32],"91":[32],"92":[32],"93":[32],"94":[32],"95":[32],"96":[32],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[98],"106":[98],"107":[98],"108":[98],"109":[98],"110":[98],"111":[59],"112":[41],"113":[114],"115":[114],"1":[0],"73":[116],"117":[116],"118":[10],"119":[116],"120":[0],"44":[41,0],"22":[0,16],"121":[0],"122":[16,0],"123":[41],"124":[16,0],"125":[0],"126":[127],"128":[0],"129":[0],"4":[1],"18":[16,0],"17":[0],"3":[1],"130":[0],"131":[0],"132":[0],"133":[0],"134":[0],"135":[0],"136":[0],"12":[0],"137":[0],"9":[16,0],"138":[0],"139":[0],"140":[0],"141":[0],"11":[16,0],"142":[0],"143":[52],"144":[52],"53":[52],"145":[52],"146":[59],"147":[59],"148":[127],"149":[127]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Texture2D","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Transform","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","HyperCasual.Runner.PlayerController","UnityEngine.SkinnedMeshRenderer","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Mesh","HyperCasual.Runner.InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","HyperCasual.Runner.SaveManager","CoinEffectMove","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","HyperCasual.Runner.Gate","TMPro.TextMeshPro","UnityEngine.SphereCollider","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","SimpleDeactivateOnTap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","UnityEngine.Camera","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","CollectableParticleManager","CheerPhraseController","OutroAnimationController","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","UnityEngine.Light","UnityEngine.MeshCollider","Assets.Scripts.Water.WaterArea","Assets.Scripts.Water.WaterPropertyBlockSetter","HyperCasual.Runner.LevelManager","HyperCasual.Runner.FinishLine","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.18f1";

Deserializers.productName = "Luna Tutorial";

Deserializers.lunaInitializationTime = "06/27/2025 13:17:35";

Deserializers.lunaDaysRunning = "2.7";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1653";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4680";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "88d804ed-15c0-4eb9-8881-05f883090c96";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

