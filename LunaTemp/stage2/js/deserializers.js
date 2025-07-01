var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointSpring' )
  var i3451 = data
  i3450.spring = i3451[0]
  i3450.damper = i3451[1]
  i3450.targetPosition = i3451[2]
  return i3450
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.JointMotor' )
  var i3453 = data
  i3452.m_TargetVelocity = i3453[0]
  i3452.m_Force = i3453[1]
  i3452.m_FreeSpin = i3453[2]
  return i3452
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3454 = root || request.c( 'UnityEngine.JointLimits' )
  var i3455 = data
  i3454.m_Min = i3455[0]
  i3454.m_Max = i3455[1]
  i3454.m_Bounciness = i3455[2]
  i3454.m_BounceMinVelocity = i3455[3]
  i3454.m_ContactDistance = i3455[4]
  i3454.minBounce = i3455[5]
  i3454.maxBounce = i3455[6]
  return i3454
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.JointDrive' )
  var i3457 = data
  i3456.m_PositionSpring = i3457[0]
  i3456.m_PositionDamper = i3457[1]
  i3456.m_MaximumForce = i3457[2]
  return i3456
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3459 = data
  i3458.m_Spring = i3459[0]
  i3458.m_Damper = i3459[1]
  return i3458
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3460 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3461 = data
  i3460.m_Limit = i3461[0]
  i3460.m_Bounciness = i3461[1]
  i3460.m_ContactDistance = i3461[2]
  return i3460
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3463 = data
  i3462.m_ExtremumSlip = i3463[0]
  i3462.m_ExtremumValue = i3463[1]
  i3462.m_AsymptoteSlip = i3463[2]
  i3462.m_AsymptoteValue = i3463[3]
  i3462.m_Stiffness = i3463[4]
  return i3462
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3465 = data
  i3464.m_LowerAngle = i3465[0]
  i3464.m_UpperAngle = i3465[1]
  return i3464
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3467 = data
  i3466.m_MotorSpeed = i3467[0]
  i3466.m_MaximumMotorTorque = i3467[1]
  return i3466
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3469 = data
  i3468.m_DampingRatio = i3469[0]
  i3468.m_Frequency = i3469[1]
  i3468.m_Angle = i3469[2]
  return i3468
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3471 = data
  i3470.m_LowerTranslation = i3471[0]
  i3470.m_UpperTranslation = i3471[1]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3473 = data
  i3472.pivot = new pc.Vec2( i3473[0], i3473[1] )
  i3472.anchorMin = new pc.Vec2( i3473[2], i3473[3] )
  i3472.anchorMax = new pc.Vec2( i3473[4], i3473[5] )
  i3472.sizeDelta = new pc.Vec2( i3473[6], i3473[7] )
  i3472.anchoredPosition3D = new pc.Vec3( i3473[8], i3473[9], i3473[10] )
  i3472.rotation = new pc.Quat(i3473[11], i3473[12], i3473[13], i3473[14])
  i3472.scale = new pc.Vec3( i3473[15], i3473[16], i3473[17] )
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3475 = data
  i3474.enabled = !!i3475[0]
  i3474.planeDistance = i3475[1]
  i3474.referencePixelsPerUnit = i3475[2]
  i3474.isFallbackOverlay = !!i3475[3]
  i3474.renderMode = i3475[4]
  i3474.renderOrder = i3475[5]
  i3474.sortingLayerName = i3475[6]
  i3474.sortingOrder = i3475[7]
  i3474.scaleFactor = i3475[8]
  request.r(i3475[9], i3475[10], 0, i3474, 'worldCamera')
  i3474.overrideSorting = !!i3475[11]
  i3474.pixelPerfect = !!i3475[12]
  i3474.targetDisplay = i3475[13]
  i3474.overridePixelPerfect = !!i3475[14]
  return i3474
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3476 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3477 = data
  i3476.m_UiScaleMode = i3477[0]
  i3476.m_ReferencePixelsPerUnit = i3477[1]
  i3476.m_ScaleFactor = i3477[2]
  i3476.m_ReferenceResolution = new pc.Vec2( i3477[3], i3477[4] )
  i3476.m_ScreenMatchMode = i3477[5]
  i3476.m_MatchWidthOrHeight = i3477[6]
  i3476.m_PhysicalUnit = i3477[7]
  i3476.m_FallbackScreenDPI = i3477[8]
  i3476.m_DefaultSpriteDPI = i3477[9]
  i3476.m_DynamicPixelsPerUnit = i3477[10]
  i3476.m_PresetInfoIsWorld = !!i3477[11]
  return i3476
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3478 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3479 = data
  i3478.m_IgnoreReversedGraphics = !!i3479[0]
  i3478.m_BlockingObjects = i3479[1]
  i3478.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3479[2] )
  return i3478
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i3480 = root || request.c( 'EndCardController' )
  var i3481 = data
  i3480.alwaysShowEndcardTESTING = !!i3481[0]
  i3480.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i3481[1], i3480.EndCardOpenedEvent)
  i3480._backgroundColor = new pc.Color(i3481[2], i3481[3], i3481[4], i3481[5])
  request.r(i3481[6], i3481[7], 0, i3480, '_backgroundTexture')
  request.r(i3481[8], i3481[9], 0, i3480, '_iconTexture')
  i3480._iconColor = new pc.Color(i3481[10], i3481[11], i3481[12], i3481[13])
  request.r(i3481[14], i3481[15], 0, i3480, '_buttonTexture')
  i3480._buttonColor = new pc.Color(i3481[16], i3481[17], i3481[18], i3481[19])
  i3480._endCardDescriptionText = i3481[20]
  i3480._CTAButtonText = i3481[21]
  i3480._useBestFitOnCTA = !!i3481[22]
  i3480._CTAFontColor = new pc.Color(i3481[23], i3481[24], i3481[25], i3481[26])
  i3480._descriptionFontColor = new pc.Color(i3481[27], i3481[28], i3481[29], i3481[30])
  request.r(i3481[31], i3481[32], 0, i3480, '_CTAFont')
  request.r(i3481[33], i3481[34], 0, i3480, '_descriptionFont')
  i3480._CTAFontSize = i3481[35]
  i3480._descriptionFontSize = i3481[36]
  i3480._centerDescriptionX = !!i3481[37]
  i3480._centerDescriptionY = !!i3481[38]
  i3480._centerButtonX = !!i3481[39]
  i3480._centerButtonY = !!i3481[40]
  i3480._descriptionPositionX = i3481[41]
  i3480._descriptionPositionY = i3481[42]
  i3480._buttonPositionX = i3481[43]
  i3480._buttonPositionY = i3481[44]
  i3480._CTAFontSizeLandscape = i3481[45]
  i3480._descriptionFontSizeLandscape = i3481[46]
  i3480._centerDescriptionXLandscape = !!i3481[47]
  i3480._centerDescriptionYLandscape = !!i3481[48]
  i3480._centerButtonXLandscape = !!i3481[49]
  i3480._centerButtonYLandscape = !!i3481[50]
  i3480._descriptionPositionXLandscape = i3481[51]
  i3480._descriptionPositionYLandscape = i3481[52]
  i3480._buttonPositionXLandscape = i3481[53]
  i3480._buttonPositionYLandscape = i3481[54]
  i3480._centerIconX = !!i3481[55]
  i3480._centerIconY = !!i3481[56]
  i3480._iconPositionX = i3481[57]
  i3480._iconPositionY = i3481[58]
  i3480._iconSize = i3481[59]
  i3480._roundEdgesOnIcon = !!i3481[60]
  i3480._centerIconXLandscape = !!i3481[61]
  i3480._centerIconYLandscape = !!i3481[62]
  i3480._iconPositionXLandscape = i3481[63]
  i3480._iconPositionYLandscape = i3481[64]
  i3480._iconSizeLandscape = i3481[65]
  i3480._roundEdgesOnIconLandscape = !!i3481[66]
  i3480._endCardClickableOptions = i3481[67]
  i3480._buttonAnimationType = i3481[68]
  i3480._endCardPortraitAnimationType = i3481[69]
  i3480._endCardLandscapeAnimationType = i3481[70]
  request.r(i3481[71], i3481[72], 0, i3480, '_backgroundImage')
  request.r(i3481[73], i3481[74], 0, i3480, '_CTAButton')
  request.r(i3481[75], i3481[76], 0, i3480, '_ScreenCTAButton')
  request.r(i3481[77], i3481[78], 0, i3480, '_CTAButtonTextText')
  request.r(i3481[79], i3481[80], 0, i3480, '_EndCardDescriptionTextText')
  request.r(i3481[81], i3481[82], 0, i3480, '_maskIcon')
  request.r(i3481[83], i3481[84], 0, i3480, '_iconRect')
  request.r(i3481[85], i3481[86], 0, i3480, '_iconRectMask')
  request.r(i3481[87], i3481[88], 0, i3480, '_descriptionRect')
  request.r(i3481[89], i3481[90], 0, i3480, '_buttonRect')
  request.r(i3481[91], i3481[92], 0, i3480, '_CTAButtonAnimator')
  request.r(i3481[93], i3481[94], 0, i3480, '_endCardAnimator')
  request.r(i3481[95], i3481[96], 0, i3480, '_iconImage')
  request.r(i3481[97], i3481[98], 0, i3480, '_CTAButtonImage')
  return i3480
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3483 = data
  i3482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3483[0], i3482.m_PersistentCalls)
  return i3482
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3484 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3485 = data
  var i3487 = i3485[0]
  var i3486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.add(request.d('UnityEngine.Events.PersistentCall', i3487[i + 0]));
  }
  i3484.m_Calls = i3486
  return i3484
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'm_Target')
  i3490.m_TargetAssemblyTypeName = i3491[2]
  i3490.m_MethodName = i3491[3]
  i3490.m_Mode = i3491[4]
  i3490.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3491[5], i3490.m_Arguments)
  i3490.m_CallState = i3491[6]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3493 = data
  request.r(i3493[0], i3493[1], 0, i3492, 'animatorController')
  request.r(i3493[2], i3493[3], 0, i3492, 'avatar')
  i3492.updateMode = i3493[4]
  i3492.hasTransformHierarchy = !!i3493[5]
  i3492.applyRootMotion = !!i3493[6]
  var i3495 = i3493[7]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 2) {
  request.r(i3495[i + 0], i3495[i + 1], 2, i3494, '')
  }
  i3492.humanBones = i3494
  i3492.enabled = !!i3493[8]
  return i3492
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i3498 = root || request.c( 'EndCardSetScale' )
  var i3499 = data
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3501 = data
  i3500.cullTransparentMesh = !!i3501[0]
  return i3500
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3503 = data
  i3502.m_AspectMode = i3503[0]
  i3502.m_AspectRatio = i3503[1]
  return i3502
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, 'm_Texture')
  i3504.m_UVRect = UnityEngine.Rect.MinMaxRect(i3505[2], i3505[3], i3505[4], i3505[5])
  request.r(i3505[6], i3505[7], 0, i3504, 'm_Material')
  i3504.m_Maskable = !!i3505[8]
  i3504.m_Color = new pc.Color(i3505[9], i3505[10], i3505[11], i3505[12])
  i3504.m_RaycastTarget = !!i3505[13]
  i3504.m_RaycastPadding = new pc.Vec4( i3505[14], i3505[15], i3505[16], i3505[17] )
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3507 = data
  i3506.name = i3507[0]
  i3506.tagId = i3507[1]
  i3506.enabled = !!i3507[2]
  i3506.isStatic = !!i3507[3]
  i3506.layer = i3507[4]
  return i3506
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3509 = data
  i3508.m_ShowMaskGraphic = !!i3509[0]
  return i3508
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3510 = root || request.c( 'UnityEngine.UI.Image' )
  var i3511 = data
  request.r(i3511[0], i3511[1], 0, i3510, 'm_Sprite')
  i3510.m_Type = i3511[2]
  i3510.m_PreserveAspect = !!i3511[3]
  i3510.m_FillCenter = !!i3511[4]
  i3510.m_FillMethod = i3511[5]
  i3510.m_FillAmount = i3511[6]
  i3510.m_FillClockwise = !!i3511[7]
  i3510.m_FillOrigin = i3511[8]
  i3510.m_UseSpriteMesh = !!i3511[9]
  i3510.m_PixelsPerUnitMultiplier = i3511[10]
  request.r(i3511[11], i3511[12], 0, i3510, 'm_Material')
  i3510.m_Maskable = !!i3511[13]
  i3510.m_Color = new pc.Color(i3511[14], i3511[15], i3511[16], i3511[17])
  i3510.m_RaycastTarget = !!i3511[18]
  i3510.m_RaycastPadding = new pc.Vec4( i3511[19], i3511[20], i3511[21], i3511[22] )
  return i3510
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.UI.Text' )
  var i3513 = data
  i3512.m_FontData = request.d('UnityEngine.UI.FontData', i3513[0], i3512.m_FontData)
  i3512.m_Text = i3513[1]
  request.r(i3513[2], i3513[3], 0, i3512, 'm_Material')
  i3512.m_Maskable = !!i3513[4]
  i3512.m_Color = new pc.Color(i3513[5], i3513[6], i3513[7], i3513[8])
  i3512.m_RaycastTarget = !!i3513[9]
  i3512.m_RaycastPadding = new pc.Vec4( i3513[10], i3513[11], i3513[12], i3513[13] )
  return i3512
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3515 = data
  request.r(i3515[0], i3515[1], 0, i3514, 'm_Font')
  i3514.m_FontSize = i3515[2]
  i3514.m_FontStyle = i3515[3]
  i3514.m_BestFit = !!i3515[4]
  i3514.m_MinSize = i3515[5]
  i3514.m_MaxSize = i3515[6]
  i3514.m_Alignment = i3515[7]
  i3514.m_AlignByGeometry = !!i3515[8]
  i3514.m_RichText = !!i3515[9]
  i3514.m_HorizontalOverflow = i3515[10]
  i3514.m_VerticalOverflow = i3515[11]
  i3514.m_LineSpacing = i3515[12]
  return i3514
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.UI.Button' )
  var i3517 = data
  i3516.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3517[0], i3516.m_OnClick)
  i3516.m_Navigation = request.d('UnityEngine.UI.Navigation', i3517[1], i3516.m_Navigation)
  i3516.m_Transition = i3517[2]
  i3516.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3517[3], i3516.m_Colors)
  i3516.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3517[4], i3516.m_SpriteState)
  i3516.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3517[5], i3516.m_AnimationTriggers)
  i3516.m_Interactable = !!i3517[6]
  request.r(i3517[7], i3517[8], 0, i3516, 'm_TargetGraphic')
  return i3516
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3519 = data
  i3518.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3519[0], i3518.m_PersistentCalls)
  return i3518
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'm_ObjectArgument')
  i3520.m_ObjectArgumentAssemblyTypeName = i3521[2]
  i3520.m_IntArgument = i3521[3]
  i3520.m_FloatArgument = i3521[4]
  i3520.m_StringArgument = i3521[5]
  i3520.m_BoolArgument = !!i3521[6]
  return i3520
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3523 = data
  i3522.m_Mode = i3523[0]
  i3522.m_WrapAround = !!i3523[1]
  request.r(i3523[2], i3523[3], 0, i3522, 'm_SelectOnUp')
  request.r(i3523[4], i3523[5], 0, i3522, 'm_SelectOnDown')
  request.r(i3523[6], i3523[7], 0, i3522, 'm_SelectOnLeft')
  request.r(i3523[8], i3523[9], 0, i3522, 'm_SelectOnRight')
  return i3522
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3524 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3525 = data
  i3524.m_NormalColor = new pc.Color(i3525[0], i3525[1], i3525[2], i3525[3])
  i3524.m_HighlightedColor = new pc.Color(i3525[4], i3525[5], i3525[6], i3525[7])
  i3524.m_PressedColor = new pc.Color(i3525[8], i3525[9], i3525[10], i3525[11])
  i3524.m_SelectedColor = new pc.Color(i3525[12], i3525[13], i3525[14], i3525[15])
  i3524.m_DisabledColor = new pc.Color(i3525[16], i3525[17], i3525[18], i3525[19])
  i3524.m_ColorMultiplier = i3525[20]
  i3524.m_FadeDuration = i3525[21]
  return i3524
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3526 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'm_HighlightedSprite')
  request.r(i3527[2], i3527[3], 0, i3526, 'm_PressedSprite')
  request.r(i3527[4], i3527[5], 0, i3526, 'm_SelectedSprite')
  request.r(i3527[6], i3527[7], 0, i3526, 'm_DisabledSprite')
  return i3526
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3528 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3529 = data
  i3528.m_NormalTrigger = i3529[0]
  i3528.m_HighlightedTrigger = i3529[1]
  i3528.m_PressedTrigger = i3529[2]
  i3528.m_SelectedTrigger = i3529[3]
  i3528.m_DisabledTrigger = i3529[4]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3531 = data
  i3530.m_Alpha = i3531[0]
  i3530.m_Interactable = !!i3531[1]
  i3530.m_BlocksRaycasts = !!i3531[2]
  i3530.m_IgnoreParentGroups = !!i3531[3]
  i3530.enabled = !!i3531[4]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3533 = data
  i3532.name = i3533[0]
  i3532.width = i3533[1]
  i3532.height = i3533[2]
  i3532.mipmapCount = i3533[3]
  i3532.anisoLevel = i3533[4]
  i3532.filterMode = i3533[5]
  i3532.hdr = !!i3533[6]
  i3532.format = i3533[7]
  i3532.wrapMode = i3533[8]
  i3532.alphaIsTransparency = !!i3533[9]
  i3532.alphaSource = i3533[10]
  i3532.graphicsFormat = i3533[11]
  i3532.sRGBTexture = !!i3533[12]
  i3532.desiredColorSpace = i3533[13]
  i3532.wrapU = i3533[14]
  i3532.wrapV = i3533[15]
  return i3532
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i3534 = root || request.c( 'DOTWeenPulseAnim' )
  var i3535 = data
  i3534.pulseSize = new pc.Vec2( i3535[0], i3535[1] )
  i3534.pulseDuration = i3535[2]
  i3534.ease = i3535[3]
  return i3534
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3536 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3537 = data
  i3536.m_hasFontAssetChanged = !!i3537[0]
  request.r(i3537[1], i3537[2], 0, i3536, 'm_baseMaterial')
  i3536.m_maskOffset = new pc.Vec4( i3537[3], i3537[4], i3537[5], i3537[6] )
  i3536.m_text = i3537[7]
  i3536.m_isRightToLeft = !!i3537[8]
  request.r(i3537[9], i3537[10], 0, i3536, 'm_fontAsset')
  request.r(i3537[11], i3537[12], 0, i3536, 'm_sharedMaterial')
  var i3539 = i3537[13]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 2) {
  request.r(i3539[i + 0], i3539[i + 1], 2, i3538, '')
  }
  i3536.m_fontSharedMaterials = i3538
  request.r(i3537[14], i3537[15], 0, i3536, 'm_fontMaterial')
  var i3541 = i3537[16]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 2) {
  request.r(i3541[i + 0], i3541[i + 1], 2, i3540, '')
  }
  i3536.m_fontMaterials = i3540
  i3536.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3537[17], i3537[18], i3537[19], i3537[20])
  i3536.m_fontColor = new pc.Color(i3537[21], i3537[22], i3537[23], i3537[24])
  i3536.m_enableVertexGradient = !!i3537[25]
  i3536.m_colorMode = i3537[26]
  i3536.m_fontColorGradient = request.d('TMPro.VertexGradient', i3537[27], i3536.m_fontColorGradient)
  request.r(i3537[28], i3537[29], 0, i3536, 'm_fontColorGradientPreset')
  request.r(i3537[30], i3537[31], 0, i3536, 'm_spriteAsset')
  i3536.m_tintAllSprites = !!i3537[32]
  request.r(i3537[33], i3537[34], 0, i3536, 'm_StyleSheet')
  i3536.m_TextStyleHashCode = i3537[35]
  i3536.m_overrideHtmlColors = !!i3537[36]
  i3536.m_faceColor = UnityEngine.Color32.ConstructColor(i3537[37], i3537[38], i3537[39], i3537[40])
  i3536.m_fontSize = i3537[41]
  i3536.m_fontSizeBase = i3537[42]
  i3536.m_fontWeight = i3537[43]
  i3536.m_enableAutoSizing = !!i3537[44]
  i3536.m_fontSizeMin = i3537[45]
  i3536.m_fontSizeMax = i3537[46]
  i3536.m_fontStyle = i3537[47]
  i3536.m_HorizontalAlignment = i3537[48]
  i3536.m_VerticalAlignment = i3537[49]
  i3536.m_textAlignment = i3537[50]
  i3536.m_characterSpacing = i3537[51]
  i3536.m_wordSpacing = i3537[52]
  i3536.m_lineSpacing = i3537[53]
  i3536.m_lineSpacingMax = i3537[54]
  i3536.m_paragraphSpacing = i3537[55]
  i3536.m_charWidthMaxAdj = i3537[56]
  i3536.m_enableWordWrapping = !!i3537[57]
  i3536.m_wordWrappingRatios = i3537[58]
  i3536.m_overflowMode = i3537[59]
  request.r(i3537[60], i3537[61], 0, i3536, 'm_linkedTextComponent')
  request.r(i3537[62], i3537[63], 0, i3536, 'parentLinkedComponent')
  i3536.m_enableKerning = !!i3537[64]
  i3536.m_enableExtraPadding = !!i3537[65]
  i3536.checkPaddingRequired = !!i3537[66]
  i3536.m_isRichText = !!i3537[67]
  i3536.m_parseCtrlCharacters = !!i3537[68]
  i3536.m_isOrthographic = !!i3537[69]
  i3536.m_isCullingEnabled = !!i3537[70]
  i3536.m_horizontalMapping = i3537[71]
  i3536.m_verticalMapping = i3537[72]
  i3536.m_uvLineOffset = i3537[73]
  i3536.m_geometrySortingOrder = i3537[74]
  i3536.m_IsTextObjectScaleStatic = !!i3537[75]
  i3536.m_VertexBufferAutoSizeReduction = !!i3537[76]
  i3536.m_useMaxVisibleDescender = !!i3537[77]
  i3536.m_pageToDisplay = i3537[78]
  i3536.m_margin = new pc.Vec4( i3537[79], i3537[80], i3537[81], i3537[82] )
  i3536.m_isUsingLegacyAnimationComponent = !!i3537[83]
  i3536.m_isVolumetricText = !!i3537[84]
  request.r(i3537[85], i3537[86], 0, i3536, 'm_Material')
  i3536.m_Maskable = !!i3537[87]
  i3536.m_Color = new pc.Color(i3537[88], i3537[89], i3537[90], i3537[91])
  i3536.m_RaycastTarget = !!i3537[92]
  i3536.m_RaycastPadding = new pc.Vec4( i3537[93], i3537[94], i3537[95], i3537[96] )
  return i3536
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3544 = root || request.c( 'TMPro.VertexGradient' )
  var i3545 = data
  i3544.topLeft = new pc.Color(i3545[0], i3545[1], i3545[2], i3545[3])
  i3544.topRight = new pc.Color(i3545[4], i3545[5], i3545[6], i3545[7])
  i3544.bottomLeft = new pc.Color(i3545[8], i3545[9], i3545[10], i3545[11])
  i3544.bottomRight = new pc.Color(i3545[12], i3545[13], i3545[14], i3545[15])
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3546 = root || new pc.UnityMaterial()
  var i3547 = data
  i3546.name = i3547[0]
  request.r(i3547[1], i3547[2], 0, i3546, 'shader')
  i3546.renderQueue = i3547[3]
  i3546.enableInstancing = !!i3547[4]
  var i3549 = i3547[5]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3549[i + 0]) );
  }
  i3546.floatParameters = i3548
  var i3551 = i3547[6]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3551[i + 0]) );
  }
  i3546.colorParameters = i3550
  var i3553 = i3547[7]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3553[i + 0]) );
  }
  i3546.vectorParameters = i3552
  var i3555 = i3547[8]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3555[i + 0]) );
  }
  i3546.textureParameters = i3554
  var i3557 = i3547[9]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3557[i + 0]) );
  }
  i3546.materialFlags = i3556
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.value = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3565 = data
  i3564.name = i3565[0]
  i3564.value = new pc.Color(i3565[1], i3565[2], i3565[3], i3565[4])
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3569 = data
  i3568.name = i3569[0]
  i3568.value = new pc.Vec4( i3569[1], i3569[2], i3569[3], i3569[4] )
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3573 = data
  i3572.name = i3573[0]
  request.r(i3573[1], i3573[2], 0, i3572, 'value')
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3577 = data
  i3576.name = i3577[0]
  i3576.enabled = !!i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3579 = data
  i3578.position = new pc.Vec3( i3579[0], i3579[1], i3579[2] )
  i3578.scale = new pc.Vec3( i3579[3], i3579[4], i3579[5] )
  i3578.rotation = new pc.Quat(i3579[6], i3579[7], i3579[8], i3579[9])
  return i3578
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i3580 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i3581 = data
  var i3583 = i3581[0]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 2) {
  request.r(i3583[i + 0], i3583[i + 1], 2, i3582, '')
  }
  i3580.m_LevelManagers = i3582
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3587 = data
  request.r(i3587[0], i3587[1], 0, i3586, 'sharedMesh')
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'additionalVertexStreams')
  i3588.enabled = !!i3589[2]
  request.r(i3589[3], i3589[4], 0, i3588, 'sharedMaterial')
  var i3591 = i3589[5]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 2, i3590, '')
  }
  i3588.sharedMaterials = i3590
  i3588.receiveShadows = !!i3589[6]
  i3588.shadowCastingMode = i3589[7]
  i3588.sortingLayerID = i3589[8]
  i3588.sortingOrder = i3589[9]
  i3588.lightmapIndex = i3589[10]
  i3588.lightmapSceneIndex = i3589[11]
  i3588.lightmapScaleOffset = new pc.Vec4( i3589[12], i3589[13], i3589[14], i3589[15] )
  i3588.lightProbeUsage = i3589[16]
  i3588.reflectionProbeUsage = i3589[17]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3593 = data
  i3592.enabled = !!i3593[0]
  i3592.isTrigger = !!i3593[1]
  request.r(i3593[2], i3593[3], 0, i3592, 'material')
  i3592.center = new pc.Vec3( i3593[4], i3593[5], i3593[6] )
  i3592.radius = i3593[7]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3595 = data
  i3594.mass = i3595[0]
  i3594.drag = i3595[1]
  i3594.angularDrag = i3595[2]
  i3594.useGravity = !!i3595[3]
  i3594.isKinematic = !!i3595[4]
  i3594.constraints = i3595[5]
  i3594.maxAngularVelocity = i3595[6]
  i3594.collisionDetectionMode = i3595[7]
  i3594.interpolation = i3595[8]
  return i3594
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i3596 = root || request.c( 'PlayerController' )
  var i3597 = data
  i3596.active = !!i3597[0]
  request.r(i3597[1], i3597[2], 0, i3596, 'rb')
  i3596.moveForce = i3597[3]
  i3596.maxSpeed = i3597[4]
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3599 = data
  i3598.name = i3599[0]
  i3598.halfPrecision = !!i3599[1]
  i3598.useUInt32IndexFormat = !!i3599[2]
  i3598.vertexCount = i3599[3]
  i3598.aabb = i3599[4]
  var i3601 = i3599[5]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( !!i3601[i + 0] );
  }
  i3598.streams = i3600
  i3598.vertices = i3599[6]
  var i3603 = i3599[7]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3603[i + 0]) );
  }
  i3598.subMeshes = i3602
  var i3605 = i3599[8]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 16) {
    i3604.push( new pc.Mat4().setData(i3605[i + 0], i3605[i + 1], i3605[i + 2], i3605[i + 3],  i3605[i + 4], i3605[i + 5], i3605[i + 6], i3605[i + 7],  i3605[i + 8], i3605[i + 9], i3605[i + 10], i3605[i + 11],  i3605[i + 12], i3605[i + 13], i3605[i + 14], i3605[i + 15]) );
  }
  i3598.bindposes = i3604
  var i3607 = i3599[9]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 1) {
    i3606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3607[i + 0]) );
  }
  i3598.blendShapes = i3606
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3613 = data
  i3612.triangles = i3613[0]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3619 = data
  i3618.name = i3619[0]
  var i3621 = i3619[1]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 1) {
    i3620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3621[i + 0]) );
  }
  i3618.frames = i3620
  return i3618
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3622 = root || request.c( 'InputManager' )
  var i3623 = data
  i3622.m_InputSensitivity = i3623[0]
  return i3622
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i3624 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i3625 = data
  i3624.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3625[0], i3624.m_GoldEventListener)
  i3624.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3625[1], i3624.m_KeyEventListener)
  i3624.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3625[2], i3624.m_WinEventListener)
  return i3624
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i3626 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i3627 = data
  request.r(i3627[0], i3627[1], 0, i3626, 'm_Event')
  return i3626
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i3628 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i3629 = data
  return i3628
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i3630 = root || request.c( 'CoinEffectMove' )
  var i3631 = data
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3633 = data
  i3632.center = new pc.Vec3( i3633[0], i3633[1], i3633[2] )
  i3632.size = new pc.Vec3( i3633[3], i3633[4], i3633[5] )
  i3632.enabled = !!i3633[6]
  i3632.isTrigger = !!i3633[7]
  request.r(i3633[8], i3633[9], 0, i3632, 'material')
  return i3632
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i3634 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i3635 = data
  i3634.m_GateType = i3635[0]
  i3634.m_Value = i3635[1]
  request.r(i3635[2], i3635[3], 0, i3634, 'm_Text')
  i3634.m_SnapToGrid = !!i3635[4]
  return i3634
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3636 = root || request.c( 'TMPro.TextMeshPro' )
  var i3637 = data
  i3636._SortingLayer = i3637[0]
  i3636._SortingLayerID = i3637[1]
  i3636._SortingOrder = i3637[2]
  i3636.m_hasFontAssetChanged = !!i3637[3]
  request.r(i3637[4], i3637[5], 0, i3636, 'm_renderer')
  i3636.m_maskType = i3637[6]
  i3636.m_text = i3637[7]
  i3636.m_isRightToLeft = !!i3637[8]
  request.r(i3637[9], i3637[10], 0, i3636, 'm_fontAsset')
  request.r(i3637[11], i3637[12], 0, i3636, 'm_sharedMaterial')
  var i3639 = i3637[13]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 2) {
  request.r(i3639[i + 0], i3639[i + 1], 2, i3638, '')
  }
  i3636.m_fontSharedMaterials = i3638
  request.r(i3637[14], i3637[15], 0, i3636, 'm_fontMaterial')
  var i3641 = i3637[16]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 2, i3640, '')
  }
  i3636.m_fontMaterials = i3640
  i3636.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3637[17], i3637[18], i3637[19], i3637[20])
  i3636.m_fontColor = new pc.Color(i3637[21], i3637[22], i3637[23], i3637[24])
  i3636.m_enableVertexGradient = !!i3637[25]
  i3636.m_colorMode = i3637[26]
  i3636.m_fontColorGradient = request.d('TMPro.VertexGradient', i3637[27], i3636.m_fontColorGradient)
  request.r(i3637[28], i3637[29], 0, i3636, 'm_fontColorGradientPreset')
  request.r(i3637[30], i3637[31], 0, i3636, 'm_spriteAsset')
  i3636.m_tintAllSprites = !!i3637[32]
  request.r(i3637[33], i3637[34], 0, i3636, 'm_StyleSheet')
  i3636.m_TextStyleHashCode = i3637[35]
  i3636.m_overrideHtmlColors = !!i3637[36]
  i3636.m_faceColor = UnityEngine.Color32.ConstructColor(i3637[37], i3637[38], i3637[39], i3637[40])
  i3636.m_fontSize = i3637[41]
  i3636.m_fontSizeBase = i3637[42]
  i3636.m_fontWeight = i3637[43]
  i3636.m_enableAutoSizing = !!i3637[44]
  i3636.m_fontSizeMin = i3637[45]
  i3636.m_fontSizeMax = i3637[46]
  i3636.m_fontStyle = i3637[47]
  i3636.m_HorizontalAlignment = i3637[48]
  i3636.m_VerticalAlignment = i3637[49]
  i3636.m_textAlignment = i3637[50]
  i3636.m_characterSpacing = i3637[51]
  i3636.m_wordSpacing = i3637[52]
  i3636.m_lineSpacing = i3637[53]
  i3636.m_lineSpacingMax = i3637[54]
  i3636.m_paragraphSpacing = i3637[55]
  i3636.m_charWidthMaxAdj = i3637[56]
  i3636.m_enableWordWrapping = !!i3637[57]
  i3636.m_wordWrappingRatios = i3637[58]
  i3636.m_overflowMode = i3637[59]
  request.r(i3637[60], i3637[61], 0, i3636, 'm_linkedTextComponent')
  request.r(i3637[62], i3637[63], 0, i3636, 'parentLinkedComponent')
  i3636.m_enableKerning = !!i3637[64]
  i3636.m_enableExtraPadding = !!i3637[65]
  i3636.checkPaddingRequired = !!i3637[66]
  i3636.m_isRichText = !!i3637[67]
  i3636.m_parseCtrlCharacters = !!i3637[68]
  i3636.m_isOrthographic = !!i3637[69]
  i3636.m_isCullingEnabled = !!i3637[70]
  i3636.m_horizontalMapping = i3637[71]
  i3636.m_verticalMapping = i3637[72]
  i3636.m_uvLineOffset = i3637[73]
  i3636.m_geometrySortingOrder = i3637[74]
  i3636.m_IsTextObjectScaleStatic = !!i3637[75]
  i3636.m_VertexBufferAutoSizeReduction = !!i3637[76]
  i3636.m_useMaxVisibleDescender = !!i3637[77]
  i3636.m_pageToDisplay = i3637[78]
  i3636.m_margin = new pc.Vec4( i3637[79], i3637[80], i3637[81], i3637[82] )
  i3636.m_isUsingLegacyAnimationComponent = !!i3637[83]
  i3636.m_isVolumetricText = !!i3637[84]
  request.r(i3637[85], i3637[86], 0, i3636, 'm_Material')
  i3636.m_Maskable = !!i3637[87]
  i3636.m_Color = new pc.Color(i3637[88], i3637[89], i3637[90], i3637[91])
  i3636.m_RaycastTarget = !!i3637[92]
  i3636.m_RaycastPadding = new pc.Vec4( i3637[93], i3637[94], i3637[95], i3637[96] )
  return i3636
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i3642 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i3643 = data
  request.r(i3643[0], i3643[1], 0, i3642, 'm_Event')
  i3642.m_Count = i3643[2]
  i3642.m_Sound = i3643[3]
  i3642.m_Particle = i3643[4]
  i3642.m_SnapToGrid = !!i3643[5]
  return i3642
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i3644 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i3645 = data
  i3644.UsePositionBasedOffset = !!i3645[0]
  i3644.PositionBasedScale = i3645[1]
  i3644.Bob = !!i3645[2]
  i3644.BobSpeed = i3645[3]
  i3644.BobHeight = i3645[4]
  i3644.Spin = !!i3645[5]
  i3644.SpinSpeed = i3645[6]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3647 = data
  i3646.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3647[0], i3646.main)
  i3646.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3647[1], i3646.colorBySpeed)
  i3646.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3647[2], i3646.colorOverLifetime)
  i3646.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3647[3], i3646.emission)
  i3646.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3647[4], i3646.rotationBySpeed)
  i3646.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3647[5], i3646.rotationOverLifetime)
  i3646.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3647[6], i3646.shape)
  i3646.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3647[7], i3646.sizeBySpeed)
  i3646.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3647[8], i3646.sizeOverLifetime)
  i3646.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3647[9], i3646.textureSheetAnimation)
  i3646.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3647[10], i3646.velocityOverLifetime)
  i3646.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3647[11], i3646.noise)
  i3646.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3647[12], i3646.inheritVelocity)
  i3646.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3647[13], i3646.forceOverLifetime)
  i3646.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3647[14], i3646.limitVelocityOverLifetime)
  i3646.useAutoRandomSeed = !!i3647[15]
  i3646.randomSeed = i3647[16]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3648 = root || new pc.ParticleSystemMain()
  var i3649 = data
  i3648.duration = i3649[0]
  i3648.loop = !!i3649[1]
  i3648.prewarm = !!i3649[2]
  i3648.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[3], i3648.startDelay)
  i3648.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[4], i3648.startLifetime)
  i3648.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[5], i3648.startSpeed)
  i3648.startSize3D = !!i3649[6]
  i3648.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[7], i3648.startSizeX)
  i3648.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[8], i3648.startSizeY)
  i3648.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[9], i3648.startSizeZ)
  i3648.startRotation3D = !!i3649[10]
  i3648.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[11], i3648.startRotationX)
  i3648.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[12], i3648.startRotationY)
  i3648.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[13], i3648.startRotationZ)
  i3648.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3649[14], i3648.startColor)
  i3648.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3649[15], i3648.gravityModifier)
  i3648.simulationSpace = i3649[16]
  request.r(i3649[17], i3649[18], 0, i3648, 'customSimulationSpace')
  i3648.simulationSpeed = i3649[19]
  i3648.useUnscaledTime = !!i3649[20]
  i3648.scalingMode = i3649[21]
  i3648.playOnAwake = !!i3649[22]
  i3648.maxParticles = i3649[23]
  i3648.emitterVelocityMode = i3649[24]
  i3648.stopAction = i3649[25]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3650 = root || new pc.MinMaxCurve()
  var i3651 = data
  i3650.mode = i3651[0]
  i3650.curveMin = new pc.AnimationCurve( { keys_flow: i3651[1] } )
  i3650.curveMax = new pc.AnimationCurve( { keys_flow: i3651[2] } )
  i3650.curveMultiplier = i3651[3]
  i3650.constantMin = i3651[4]
  i3650.constantMax = i3651[5]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3652 = root || new pc.MinMaxGradient()
  var i3653 = data
  i3652.mode = i3653[0]
  i3652.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3653[1], i3652.gradientMin)
  i3652.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3653[2], i3652.gradientMax)
  i3652.colorMin = new pc.Color(i3653[3], i3653[4], i3653[5], i3653[6])
  i3652.colorMax = new pc.Color(i3653[7], i3653[8], i3653[9], i3653[10])
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3655 = data
  i3654.mode = i3655[0]
  var i3657 = i3655[1]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3657[i + 0]) );
  }
  i3654.colorKeys = i3656
  var i3659 = i3655[2]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3659[i + 0]) );
  }
  i3654.alphaKeys = i3658
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3660 = root || new pc.ParticleSystemColorBySpeed()
  var i3661 = data
  i3660.enabled = !!i3661[0]
  i3660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3661[1], i3660.color)
  i3660.range = new pc.Vec2( i3661[2], i3661[3] )
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3665 = data
  i3664.color = new pc.Color(i3665[0], i3665[1], i3665[2], i3665[3])
  i3664.time = i3665[4]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3669 = data
  i3668.alpha = i3669[0]
  i3668.time = i3669[1]
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3670 = root || new pc.ParticleSystemColorOverLifetime()
  var i3671 = data
  i3670.enabled = !!i3671[0]
  i3670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3671[1], i3670.color)
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3672 = root || new pc.ParticleSystemEmitter()
  var i3673 = data
  i3672.enabled = !!i3673[0]
  i3672.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3673[1], i3672.rateOverTime)
  i3672.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3673[2], i3672.rateOverDistance)
  var i3675 = i3673[3]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3675[i + 0]) );
  }
  i3672.bursts = i3674
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3678 = root || new pc.ParticleSystemBurst()
  var i3679 = data
  i3678.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[0], i3678.count)
  i3678.cycleCount = i3679[1]
  i3678.minCount = i3679[2]
  i3678.maxCount = i3679[3]
  i3678.repeatInterval = i3679[4]
  i3678.time = i3679[5]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3680 = root || new pc.ParticleSystemRotationBySpeed()
  var i3681 = data
  i3680.enabled = !!i3681[0]
  i3680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[1], i3680.x)
  i3680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[2], i3680.y)
  i3680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[3], i3680.z)
  i3680.separateAxes = !!i3681[4]
  i3680.range = new pc.Vec2( i3681[5], i3681[6] )
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3682 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3683 = data
  i3682.enabled = !!i3683[0]
  i3682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[1], i3682.x)
  i3682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[2], i3682.y)
  i3682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[3], i3682.z)
  i3682.separateAxes = !!i3683[4]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3684 = root || new pc.ParticleSystemShape()
  var i3685 = data
  i3684.enabled = !!i3685[0]
  i3684.shapeType = i3685[1]
  i3684.randomDirectionAmount = i3685[2]
  i3684.sphericalDirectionAmount = i3685[3]
  i3684.randomPositionAmount = i3685[4]
  i3684.alignToDirection = !!i3685[5]
  i3684.radius = i3685[6]
  i3684.radiusMode = i3685[7]
  i3684.radiusSpread = i3685[8]
  i3684.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[9], i3684.radiusSpeed)
  i3684.radiusThickness = i3685[10]
  i3684.angle = i3685[11]
  i3684.length = i3685[12]
  i3684.boxThickness = new pc.Vec3( i3685[13], i3685[14], i3685[15] )
  i3684.meshShapeType = i3685[16]
  request.r(i3685[17], i3685[18], 0, i3684, 'mesh')
  request.r(i3685[19], i3685[20], 0, i3684, 'meshRenderer')
  request.r(i3685[21], i3685[22], 0, i3684, 'skinnedMeshRenderer')
  i3684.useMeshMaterialIndex = !!i3685[23]
  i3684.meshMaterialIndex = i3685[24]
  i3684.useMeshColors = !!i3685[25]
  i3684.normalOffset = i3685[26]
  i3684.arc = i3685[27]
  i3684.arcMode = i3685[28]
  i3684.arcSpread = i3685[29]
  i3684.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[30], i3684.arcSpeed)
  i3684.donutRadius = i3685[31]
  i3684.position = new pc.Vec3( i3685[32], i3685[33], i3685[34] )
  i3684.rotation = new pc.Vec3( i3685[35], i3685[36], i3685[37] )
  i3684.scale = new pc.Vec3( i3685[38], i3685[39], i3685[40] )
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3686 = root || new pc.ParticleSystemSizeBySpeed()
  var i3687 = data
  i3686.enabled = !!i3687[0]
  i3686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[1], i3686.x)
  i3686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[2], i3686.y)
  i3686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3687[3], i3686.z)
  i3686.separateAxes = !!i3687[4]
  i3686.range = new pc.Vec2( i3687[5], i3687[6] )
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3688 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3689 = data
  i3688.enabled = !!i3689[0]
  i3688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[1], i3688.x)
  i3688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[2], i3688.y)
  i3688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3689[3], i3688.z)
  i3688.separateAxes = !!i3689[4]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3690 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3691 = data
  i3690.enabled = !!i3691[0]
  i3690.mode = i3691[1]
  i3690.animation = i3691[2]
  i3690.numTilesX = i3691[3]
  i3690.numTilesY = i3691[4]
  i3690.useRandomRow = !!i3691[5]
  i3690.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3691[6], i3690.frameOverTime)
  i3690.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3691[7], i3690.startFrame)
  i3690.cycleCount = i3691[8]
  i3690.rowIndex = i3691[9]
  i3690.flipU = i3691[10]
  i3690.flipV = i3691[11]
  i3690.spriteCount = i3691[12]
  var i3693 = i3691[13]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 2) {
  request.r(i3693[i + 0], i3693[i + 1], 2, i3692, '')
  }
  i3690.sprites = i3692
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3696 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3697 = data
  i3696.enabled = !!i3697[0]
  i3696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[1], i3696.x)
  i3696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[2], i3696.y)
  i3696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[3], i3696.z)
  i3696.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[4], i3696.radial)
  i3696.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[5], i3696.speedModifier)
  i3696.space = i3697[6]
  i3696.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[7], i3696.orbitalX)
  i3696.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[8], i3696.orbitalY)
  i3696.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[9], i3696.orbitalZ)
  i3696.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[10], i3696.orbitalOffsetX)
  i3696.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[11], i3696.orbitalOffsetY)
  i3696.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3697[12], i3696.orbitalOffsetZ)
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3698 = root || new pc.ParticleSystemNoise()
  var i3699 = data
  i3698.enabled = !!i3699[0]
  i3698.separateAxes = !!i3699[1]
  i3698.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[2], i3698.strengthX)
  i3698.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[3], i3698.strengthY)
  i3698.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[4], i3698.strengthZ)
  i3698.frequency = i3699[5]
  i3698.damping = !!i3699[6]
  i3698.octaveCount = i3699[7]
  i3698.octaveMultiplier = i3699[8]
  i3698.octaveScale = i3699[9]
  i3698.quality = i3699[10]
  i3698.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[11], i3698.scrollSpeed)
  i3698.scrollSpeedMultiplier = i3699[12]
  i3698.remapEnabled = !!i3699[13]
  i3698.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[14], i3698.remapX)
  i3698.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[15], i3698.remapY)
  i3698.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[16], i3698.remapZ)
  i3698.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[17], i3698.positionAmount)
  i3698.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[18], i3698.rotationAmount)
  i3698.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3699[19], i3698.sizeAmount)
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3700 = root || new pc.ParticleSystemInheritVelocity()
  var i3701 = data
  i3700.enabled = !!i3701[0]
  i3700.mode = i3701[1]
  i3700.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3701[2], i3700.curve)
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3702 = root || new pc.ParticleSystemForceOverLifetime()
  var i3703 = data
  i3702.enabled = !!i3703[0]
  i3702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3703[1], i3702.x)
  i3702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3703[2], i3702.y)
  i3702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3703[3], i3702.z)
  i3702.space = i3703[4]
  i3702.randomized = !!i3703[5]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3704 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3705 = data
  i3704.enabled = !!i3705[0]
  i3704.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[1], i3704.limit)
  i3704.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[2], i3704.limitX)
  i3704.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[3], i3704.limitY)
  i3704.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[4], i3704.limitZ)
  i3704.dampen = i3705[5]
  i3704.separateAxes = !!i3705[6]
  i3704.space = i3705[7]
  i3704.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3705[8], i3704.drag)
  i3704.multiplyDragByParticleSize = !!i3705[9]
  i3704.multiplyDragByParticleVelocity = !!i3705[10]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3707 = data
  i3706.enabled = !!i3707[0]
  request.r(i3707[1], i3707[2], 0, i3706, 'sharedMaterial')
  var i3709 = i3707[3]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 2) {
  request.r(i3709[i + 0], i3709[i + 1], 2, i3708, '')
  }
  i3706.sharedMaterials = i3708
  i3706.receiveShadows = !!i3707[4]
  i3706.shadowCastingMode = i3707[5]
  i3706.sortingLayerID = i3707[6]
  i3706.sortingOrder = i3707[7]
  i3706.lightmapIndex = i3707[8]
  i3706.lightmapSceneIndex = i3707[9]
  i3706.lightmapScaleOffset = new pc.Vec4( i3707[10], i3707[11], i3707[12], i3707[13] )
  i3706.lightProbeUsage = i3707[14]
  i3706.reflectionProbeUsage = i3707[15]
  request.r(i3707[16], i3707[17], 0, i3706, 'mesh')
  i3706.meshCount = i3707[18]
  i3706.activeVertexStreamsCount = i3707[19]
  i3706.alignment = i3707[20]
  i3706.renderMode = i3707[21]
  i3706.sortMode = i3707[22]
  i3706.lengthScale = i3707[23]
  i3706.velocityScale = i3707[24]
  i3706.cameraVelocityScale = i3707[25]
  i3706.normalDirection = i3707[26]
  i3706.sortingFudge = i3707[27]
  i3706.minParticleSize = i3707[28]
  i3706.maxParticleSize = i3707[29]
  i3706.pivot = new pc.Vec3( i3707[30], i3707[31], i3707[32] )
  request.r(i3707[33], i3707[34], 0, i3706, 'trailMaterial')
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3711 = data
  i3710.name = i3711[0]
  i3710.atlasId = i3711[1]
  i3710.mipmapCount = i3711[2]
  i3710.hdr = !!i3711[3]
  i3710.size = i3711[4]
  i3710.anisoLevel = i3711[5]
  i3710.filterMode = i3711[6]
  var i3713 = i3711[7]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 4) {
    i3712.push( UnityEngine.Rect.MinMaxRect(i3713[i + 0], i3713[i + 1], i3713[i + 2], i3713[i + 3]) );
  }
  i3710.rects = i3712
  i3710.wrapU = i3711[8]
  i3710.wrapV = i3711[9]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3717 = data
  i3716.name = i3717[0]
  i3716.index = i3717[1]
  i3716.startup = !!i3717[2]
  return i3716
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i3718 = root || request.c( 'PlayableSettings' )
  var i3719 = data
  i3718.m_SkipMainMenu = !!i3719[0]
  i3718.m_UseCTAScreen = !!i3719[1]
  i3718.m_EndcardActivationSendsToStore = !!i3719[2]
  i3718.m_ShowEndcardAfterXTaps = !!i3719[3]
  i3718.m_TapsBeforeShowingEndcard = i3719[4]
  return i3718
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i3720 = root || request.c( 'SimpleDeactivateOnTap' )
  var i3721 = data
  return i3720
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3723 = data
  request.r(i3723[0], i3723[1], 0, i3722, 'm_FirstSelected')
  i3722.m_sendNavigationEvents = !!i3723[2]
  i3722.m_DragThreshold = i3723[3]
  return i3722
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3725 = data
  i3724.m_HorizontalAxis = i3725[0]
  i3724.m_VerticalAxis = i3725[1]
  i3724.m_SubmitButton = i3725[2]
  i3724.m_CancelButton = i3725[3]
  i3724.m_InputActionsPerSecond = i3725[4]
  i3724.m_RepeatDelay = i3725[5]
  i3724.m_ForceModuleActive = !!i3725[6]
  i3724.m_SendPointerHoverToParent = !!i3725[7]
  return i3724
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i3726 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'm_SequenceManagerPrefab')
  return i3726
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i3728 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'm_MusicSource')
  request.r(i3729[2], i3729[3], 0, i3728, 'm_EffectSource')
  i3728.m_MinSoundInterval = i3729[4]
  var i3731 = i3729[5]
  var i3730 = []
  for(var i = 0; i < i3731.length; i += 1) {
    i3730.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i3731[i + 0]) );
  }
  i3728.m_Sounds = i3730
  return i3728
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i3734 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i3735 = data
  i3734.m_SoundID = i3735[0]
  request.r(i3735[1], i3735[2], 0, i3734, 'm_AudioClip')
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'clip')
  request.r(i3737[2], i3737[3], 0, i3736, 'outputAudioMixerGroup')
  i3736.playOnAwake = !!i3737[4]
  i3736.loop = !!i3737[5]
  i3736.time = i3737[6]
  i3736.volume = i3737[7]
  i3736.pitch = i3737[8]
  i3736.enabled = !!i3737[9]
  return i3736
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i3738 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i3739 = data
  request.r(i3739[0], i3739[1], 0, i3738, 'm_Canvas')
  request.r(i3739[2], i3739[3], 0, i3738, 'm_Root')
  request.r(i3739[4], i3739[5], 0, i3738, 'm_ViewLayer')
  return i3738
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i3740 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'm_GoldText')
  var i3743 = i3741[2]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 2) {
  request.r(i3743[i + 0], i3743[i + 1], 2, i3742, '')
  }
  i3740.Keys = i3742
  i3740.gainKeyColor = new pc.Color(i3741[3], i3741[4], i3741[5], i3741[6])
  return i3740
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i3746 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'm_LoseEvent')
  return i3746
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i3748 = root || request.c( 'CollectableParticleManager' )
  var i3749 = data
  request.r(i3749[0], i3749[1], 0, i3748, 'keyParticlePrefab')
  request.r(i3749[2], i3749[3], 0, i3748, 'coinParticlePrefab')
  i3748.keyParticleCount = i3749[4]
  i3748.coinParticlesCount = i3749[5]
  return i3748
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i3750 = root || request.c( 'CheerPhraseController' )
  var i3751 = data
  var i3753 = i3751[0]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( i3753[i + 0] );
  }
  i3750.phrases = i3752
  i3750.cheerPhraseColour = new pc.Color(i3751[1], i3751[2], i3751[3], i3751[4])
  request.r(i3751[5], i3751[6], 0, i3750, 'cheerText')
  request.r(i3751[7], i3751[8], 0, i3750, 'cheerTextAnimator')
  request.r(i3751[9], i3751[10], 0, i3750, 'keyCollectEvent')
  return i3750
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i3756 = root || request.c( 'OutroAnimationController' )
  var i3757 = data
  request.r(i3757[0], i3757[1], 0, i3756, 'winEvent')
  i3756.endCardDelay = i3757[2]
  var i3759 = i3757[3]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 2) {
  request.r(i3759[i + 0], i3759[i + 1], 2, i3758, '')
  }
  i3756.confettiParticles = i3758
  return i3756
}

Deserializers["LevelFailedHandler"] = function (request, data, root) {
  var i3762 = root || request.c( 'LevelFailedHandler' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'loseEvent')
  i3762.endCardDelay = i3763[2]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3765 = data
  i3764.enabled = !!i3765[0]
  i3764.aspect = i3765[1]
  i3764.orthographic = !!i3765[2]
  i3764.orthographicSize = i3765[3]
  i3764.backgroundColor = new pc.Color(i3765[4], i3765[5], i3765[6], i3765[7])
  i3764.nearClipPlane = i3765[8]
  i3764.farClipPlane = i3765[9]
  i3764.fieldOfView = i3765[10]
  i3764.depth = i3765[11]
  i3764.clearFlags = i3765[12]
  i3764.cullingMask = i3765[13]
  i3764.rect = i3765[14]
  request.r(i3765[15], i3765[16], 0, i3764, 'targetTexture')
  i3764.usePhysicalProperties = !!i3765[17]
  i3764.focalLength = i3765[18]
  i3764.sensorSize = new pc.Vec2( i3765[19], i3765[20] )
  i3764.lensShift = new pc.Vec2( i3765[21], i3765[22] )
  i3764.gateFit = i3765[23]
  i3764.commandBufferCount = i3765[24]
  i3764.cameraType = i3765[25]
  return i3764
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i3766 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i3767 = data
  request.r(i3767[0], i3767[1], 0, i3766, 'targetPlayer')
  i3766.m_CameraAnglePreset = i3767[2]
  i3766.m_Offset = new pc.Vec3( i3767[3], i3767[4], i3767[5] )
  i3766.m_LookAtOffset = new pc.Vec3( i3767[6], i3767[7], i3767[8] )
  i3766.m_LockCameraPosition = !!i3767[9]
  i3766.m_SmoothCameraFollow = !!i3767[10]
  i3766.m_SmoothCameraFollowStrength = i3767[11]
  return i3766
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i3768 = root || request.c( 'CoinEffectManager' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'coinEffectPrefab')
  request.r(i3769[2], i3769[3], 0, i3768, 'coinCounter')
  request.r(i3769[4], i3769[5], 0, i3768, 'player')
  i3768.speed = i3769[6]
  request.r(i3769[7], i3769[8], 0, i3768, 'm_CoinEvent')
  i3768.effectPoolCount = i3769[9]
  i3768.offsetZ = i3769[10]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3771 = data
  i3770.enabled = !!i3771[0]
  i3770.type = i3771[1]
  i3770.color = new pc.Color(i3771[2], i3771[3], i3771[4], i3771[5])
  i3770.cullingMask = i3771[6]
  i3770.intensity = i3771[7]
  i3770.range = i3771[8]
  i3770.spotAngle = i3771[9]
  i3770.shadows = i3771[10]
  i3770.shadowNormalBias = i3771[11]
  i3770.shadowBias = i3771[12]
  i3770.shadowStrength = i3771[13]
  i3770.shadowResolution = i3771[14]
  i3770.lightmapBakeType = i3771[15]
  i3770.renderMode = i3771[16]
  request.r(i3771[17], i3771[18], 0, i3770, 'cookie')
  i3770.cookieSize = i3771[19]
  return i3770
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i3772 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i3773 = data
  return i3772
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i3774 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'm_WinEvent')
  i3774.m_SnapToGrid = !!i3775[2]
  return i3774
}

Deserializers["HyperCasual.Runner.LoseHandler"] = function (request, data, root) {
  var i3776 = root || request.c( 'HyperCasual.Runner.LoseHandler' )
  var i3777 = data
  request.r(i3777[0], i3777[1], 0, i3776, 'm_LoseEvent')
  i3776.m_SnapToGrid = !!i3777[2]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3779 = data
  i3778.enabled = !!i3779[0]
  i3778.isTrigger = !!i3779[1]
  request.r(i3779[2], i3779[3], 0, i3778, 'material')
  request.r(i3779[4], i3779[5], 0, i3778, 'sharedMesh')
  i3778.convex = !!i3779[6]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3781 = data
  i3780.ambientIntensity = i3781[0]
  i3780.reflectionIntensity = i3781[1]
  i3780.ambientMode = i3781[2]
  i3780.ambientLight = new pc.Color(i3781[3], i3781[4], i3781[5], i3781[6])
  i3780.ambientSkyColor = new pc.Color(i3781[7], i3781[8], i3781[9], i3781[10])
  i3780.ambientGroundColor = new pc.Color(i3781[11], i3781[12], i3781[13], i3781[14])
  i3780.ambientEquatorColor = new pc.Color(i3781[15], i3781[16], i3781[17], i3781[18])
  i3780.fogColor = new pc.Color(i3781[19], i3781[20], i3781[21], i3781[22])
  i3780.fogEndDistance = i3781[23]
  i3780.fogStartDistance = i3781[24]
  i3780.fogDensity = i3781[25]
  i3780.fog = !!i3781[26]
  request.r(i3781[27], i3781[28], 0, i3780, 'skybox')
  i3780.fogMode = i3781[29]
  var i3783 = i3781[30]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3783[i + 0]) );
  }
  i3780.lightmaps = i3782
  i3780.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3781[31], i3780.lightProbes)
  i3780.lightmapsMode = i3781[32]
  i3780.mixedBakeMode = i3781[33]
  i3780.environmentLightingMode = i3781[34]
  i3780.ambientProbe = new pc.SphericalHarmonicsL2(i3781[35])
  i3780.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3781[36])
  i3780.useReferenceAmbientProbe = !!i3781[37]
  request.r(i3781[38], i3781[39], 0, i3780, 'customReflection')
  request.r(i3781[40], i3781[41], 0, i3780, 'defaultReflection')
  i3780.defaultReflectionMode = i3781[42]
  i3780.defaultReflectionResolution = i3781[43]
  i3780.sunLightObjectId = i3781[44]
  i3780.pixelLightCount = i3781[45]
  i3780.defaultReflectionHDR = !!i3781[46]
  i3780.hasLightDataAsset = !!i3781[47]
  i3780.hasManualGenerate = !!i3781[48]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3787 = data
  request.r(i3787[0], i3787[1], 0, i3786, 'lightmapColor')
  request.r(i3787[2], i3787[3], 0, i3786, 'lightmapDirection')
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3788 = root || new UnityEngine.LightProbes()
  var i3789 = data
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i3797 = data
  i3796.name = i3797[0]
  i3796.bounciness = i3797[1]
  i3796.dynamicFriction = i3797[2]
  i3796.staticFriction = i3797[3]
  i3796.frictionCombine = i3797[4]
  i3796.bounceCombine = i3797[5]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3799 = data
  var i3801 = i3799[0]
  var i3800 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3801[i + 0]));
  }
  i3798.ShaderCompilationErrors = i3800
  i3798.name = i3799[1]
  i3798.guid = i3799[2]
  var i3803 = i3799[3]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( i3803[i + 0] );
  }
  i3798.shaderDefinedKeywords = i3802
  var i3805 = i3799[4]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3805[i + 0]) );
  }
  i3798.passes = i3804
  var i3807 = i3799[5]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3807[i + 0]) );
  }
  i3798.usePasses = i3806
  var i3809 = i3799[6]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3809[i + 0]) );
  }
  i3798.defaultParameterValues = i3808
  request.r(i3799[7], i3799[8], 0, i3798, 'unityFallbackShader')
  i3798.readDepth = !!i3799[9]
  i3798.isCreatedByShaderGraph = !!i3799[10]
  i3798.compiled = !!i3799[11]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3813 = data
  i3812.shaderName = i3813[0]
  i3812.errorMessage = i3813[1]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3816 = root || new pc.UnityShaderPass()
  var i3817 = data
  i3816.id = i3817[0]
  i3816.subShaderIndex = i3817[1]
  i3816.name = i3817[2]
  i3816.passType = i3817[3]
  i3816.grabPassTextureName = i3817[4]
  i3816.usePass = !!i3817[5]
  i3816.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[6], i3816.zTest)
  i3816.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[7], i3816.zWrite)
  i3816.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[8], i3816.culling)
  i3816.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3817[9], i3816.blending)
  i3816.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3817[10], i3816.alphaBlending)
  i3816.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[11], i3816.colorWriteMask)
  i3816.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[12], i3816.offsetUnits)
  i3816.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[13], i3816.offsetFactor)
  i3816.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[14], i3816.stencilRef)
  i3816.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[15], i3816.stencilReadMask)
  i3816.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3817[16], i3816.stencilWriteMask)
  i3816.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3817[17], i3816.stencilOp)
  i3816.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3817[18], i3816.stencilOpFront)
  i3816.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3817[19], i3816.stencilOpBack)
  var i3819 = i3817[20]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3819[i + 0]) );
  }
  i3816.tags = i3818
  var i3821 = i3817[21]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( i3821[i + 0] );
  }
  i3816.passDefinedKeywords = i3820
  var i3823 = i3817[22]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3823[i + 0]) );
  }
  i3816.passDefinedKeywordGroups = i3822
  var i3825 = i3817[23]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3825[i + 0]) );
  }
  i3816.variants = i3824
  var i3827 = i3817[24]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3827[i + 0]) );
  }
  i3816.excludedVariants = i3826
  i3816.hasDepthReader = !!i3817[25]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3829 = data
  i3828.val = i3829[0]
  i3828.name = i3829[1]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3831 = data
  i3830.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3831[0], i3830.src)
  i3830.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3831[1], i3830.dst)
  i3830.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3831[2], i3830.op)
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3833 = data
  i3832.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3833[0], i3832.pass)
  i3832.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3833[1], i3832.fail)
  i3832.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3833[2], i3832.zFail)
  i3832.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3833[3], i3832.comp)
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3837 = data
  i3836.name = i3837[0]
  i3836.value = i3837[1]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3841 = data
  var i3843 = i3841[0]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( i3843[i + 0] );
  }
  i3840.keywords = i3842
  i3840.hasDiscard = !!i3841[1]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3847 = data
  i3846.passId = i3847[0]
  i3846.subShaderIndex = i3847[1]
  var i3849 = i3847[2]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( i3849[i + 0] );
  }
  i3846.keywords = i3848
  i3846.vertexProgram = i3847[3]
  i3846.fragmentProgram = i3847[4]
  i3846.exportedForWebGl2 = !!i3847[5]
  i3846.readDepth = !!i3847[6]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'shader')
  i3852.pass = i3853[2]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3857 = data
  i3856.name = i3857[0]
  i3856.type = i3857[1]
  i3856.value = new pc.Vec4( i3857[2], i3857[3], i3857[4], i3857[5] )
  i3856.textureValue = i3857[6]
  i3856.shaderPropertyFlag = i3857[7]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3859 = data
  i3858.name = i3859[0]
  request.r(i3859[1], i3859[2], 0, i3858, 'texture')
  i3858.aabb = i3859[3]
  i3858.vertices = i3859[4]
  i3858.triangles = i3859[5]
  i3858.textureRect = UnityEngine.Rect.MinMaxRect(i3859[6], i3859[7], i3859[8], i3859[9])
  i3858.packedRect = UnityEngine.Rect.MinMaxRect(i3859[10], i3859[11], i3859[12], i3859[13])
  i3858.border = new pc.Vec4( i3859[14], i3859[15], i3859[16], i3859[17] )
  i3858.transparency = i3859[18]
  i3858.bounds = i3859[19]
  i3858.pixelsPerUnit = i3859[20]
  i3858.textureWidth = i3859[21]
  i3858.textureHeight = i3859[22]
  i3858.nativeSize = new pc.Vec2( i3859[23], i3859[24] )
  i3858.pivot = new pc.Vec2( i3859[25], i3859[26] )
  i3858.textureRectOffset = new pc.Vec2( i3859[27], i3859[28] )
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3861 = data
  i3860.name = i3861[0]
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3863 = data
  i3862.name = i3863[0]
  i3862.wrapMode = i3863[1]
  i3862.isLooping = !!i3863[2]
  i3862.length = i3863[3]
  var i3865 = i3863[4]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3865[i + 0]) );
  }
  i3862.curves = i3864
  var i3867 = i3863[5]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3867[i + 0]) );
  }
  i3862.events = i3866
  i3862.halfPrecision = !!i3863[6]
  i3862._frameRate = i3863[7]
  i3862.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3863[8], i3862.localBounds)
  i3862.hasMuscleCurves = !!i3863[9]
  var i3869 = i3863[10]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( i3869[i + 0] );
  }
  i3862.clipMuscleConstant = i3868
  i3862.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3863[11], i3862.clipBindingConstant)
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3873 = data
  i3872.path = i3873[0]
  i3872.hash = i3873[1]
  i3872.componentType = i3873[2]
  i3872.property = i3873[3]
  i3872.keys = i3873[4]
  var i3875 = i3873[5]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3875[i + 0]) );
  }
  i3872.objectReferenceKeys = i3874
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3879 = data
  i3878.functionName = i3879[0]
  i3878.floatParameter = i3879[1]
  i3878.intParameter = i3879[2]
  i3878.stringParameter = i3879[3]
  request.r(i3879[4], i3879[5], 0, i3878, 'objectReferenceParameter')
  i3878.time = i3879[6]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3881 = data
  i3880.center = new pc.Vec3( i3881[0], i3881[1], i3881[2] )
  i3880.extends = new pc.Vec3( i3881[3], i3881[4], i3881[5] )
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3885 = data
  var i3887 = i3885[0]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( i3887[i + 0] );
  }
  i3884.genericBindings = i3886
  var i3889 = i3885[1]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( i3889[i + 0] );
  }
  i3884.pptrCurveMapping = i3888
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3893 = data
  i3892.time = i3893[0]
  request.r(i3893[1], i3893[2], 0, i3892, 'value')
  return i3892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3895 = data
  i3894.name = i3895[0]
  i3894.ascent = i3895[1]
  i3894.originalLineHeight = i3895[2]
  i3894.fontSize = i3895[3]
  var i3897 = i3895[4]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3897[i + 0]) );
  }
  i3894.characterInfo = i3896
  request.r(i3895[5], i3895[6], 0, i3894, 'texture')
  i3894.originalFontSize = i3895[7]
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3901 = data
  i3900.index = i3901[0]
  i3900.advance = i3901[1]
  i3900.bearing = i3901[2]
  i3900.glyphWidth = i3901[3]
  i3900.glyphHeight = i3901[4]
  i3900.minX = i3901[5]
  i3900.maxX = i3901[6]
  i3900.minY = i3901[7]
  i3900.maxY = i3901[8]
  i3900.uvBottomLeftX = i3901[9]
  i3900.uvBottomLeftY = i3901[10]
  i3900.uvBottomRightX = i3901[11]
  i3900.uvBottomRightY = i3901[12]
  i3900.uvTopLeftX = i3901[13]
  i3900.uvTopLeftY = i3901[14]
  i3900.uvTopRightX = i3901[15]
  i3900.uvTopRightY = i3901[16]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3903 = data
  i3902.name = i3903[0]
  var i3905 = i3903[1]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3905[i + 0]) );
  }
  i3902.layers = i3904
  var i3907 = i3903[2]
  var i3906 = []
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3907[i + 0]) );
  }
  i3902.parameters = i3906
  i3902.animationClips = i3903[3]
  i3902.avatarUnsupported = i3903[4]
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3911 = data
  i3910.name = i3911[0]
  i3910.defaultWeight = i3911[1]
  i3910.blendingMode = i3911[2]
  i3910.avatarMask = i3911[3]
  i3910.syncedLayerIndex = i3911[4]
  i3910.syncedLayerAffectsTiming = !!i3911[5]
  i3910.syncedLayers = i3911[6]
  i3910.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3911[7], i3910.stateMachine)
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3913 = data
  i3912.id = i3913[0]
  i3912.name = i3913[1]
  i3912.path = i3913[2]
  var i3915 = i3913[3]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3915[i + 0]) );
  }
  i3912.states = i3914
  var i3917 = i3913[4]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3917[i + 0]) );
  }
  i3912.machines = i3916
  var i3919 = i3913[5]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3919[i + 0]) );
  }
  i3912.entryStateTransitions = i3918
  var i3921 = i3913[6]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3921[i + 0]) );
  }
  i3912.exitStateTransitions = i3920
  var i3923 = i3913[7]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3923[i + 0]) );
  }
  i3912.anyStateTransitions = i3922
  i3912.defaultStateId = i3913[8]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3927 = data
  i3926.id = i3927[0]
  i3926.name = i3927[1]
  i3926.cycleOffset = i3927[2]
  i3926.cycleOffsetParameter = i3927[3]
  i3926.cycleOffsetParameterActive = !!i3927[4]
  i3926.mirror = !!i3927[5]
  i3926.mirrorParameter = i3927[6]
  i3926.mirrorParameterActive = !!i3927[7]
  i3926.motionId = i3927[8]
  i3926.nameHash = i3927[9]
  i3926.fullPathHash = i3927[10]
  i3926.speed = i3927[11]
  i3926.speedParameter = i3927[12]
  i3926.speedParameterActive = !!i3927[13]
  i3926.tag = i3927[14]
  i3926.tagHash = i3927[15]
  i3926.writeDefaultValues = !!i3927[16]
  var i3929 = i3927[17]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 2) {
  request.r(i3929[i + 0], i3929[i + 1], 2, i3928, '')
  }
  i3926.behaviours = i3928
  var i3931 = i3927[18]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 1) {
    i3930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3931[i + 0]) );
  }
  i3926.transitions = i3930
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3937 = data
  i3936.fullPath = i3937[0]
  i3936.canTransitionToSelf = !!i3937[1]
  i3936.duration = i3937[2]
  i3936.exitTime = i3937[3]
  i3936.hasExitTime = !!i3937[4]
  i3936.hasFixedDuration = !!i3937[5]
  i3936.interruptionSource = i3937[6]
  i3936.offset = i3937[7]
  i3936.orderedInterruption = !!i3937[8]
  i3936.destinationStateId = i3937[9]
  i3936.isExit = !!i3937[10]
  i3936.mute = !!i3937[11]
  i3936.solo = !!i3937[12]
  var i3939 = i3937[13]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3939[i + 0]) );
  }
  i3936.conditions = i3938
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3943 = data
  i3942.mode = i3943[0]
  i3942.parameter = i3943[1]
  i3942.threshold = i3943[2]
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3949 = data
  i3948.destinationStateId = i3949[0]
  i3948.isExit = !!i3949[1]
  i3948.mute = !!i3949[2]
  i3948.solo = !!i3949[3]
  var i3951 = i3949[4]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3951[i + 0]) );
  }
  i3948.conditions = i3950
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3955 = data
  i3954.defaultBool = !!i3955[0]
  i3954.defaultFloat = i3955[1]
  i3954.defaultInt = i3955[2]
  i3954.name = i3955[3]
  i3954.nameHash = i3955[4]
  i3954.type = i3955[5]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3957 = data
  i3956.name = i3957[0]
  i3956.bytes64 = i3957[1]
  i3956.data = i3957[2]
  return i3956
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3958 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3959 = data
  i3958.hashCode = i3959[0]
  request.r(i3959[1], i3959[2], 0, i3958, 'material')
  i3958.materialHashCode = i3959[3]
  request.r(i3959[4], i3959[5], 0, i3958, 'atlas')
  i3958.normalStyle = i3959[6]
  i3958.normalSpacingOffset = i3959[7]
  i3958.boldStyle = i3959[8]
  i3958.boldSpacing = i3959[9]
  i3958.italicStyle = i3959[10]
  i3958.tabSize = i3959[11]
  i3958.m_Version = i3959[12]
  i3958.m_SourceFontFileGUID = i3959[13]
  request.r(i3959[14], i3959[15], 0, i3958, 'm_SourceFontFile_EditorRef')
  request.r(i3959[16], i3959[17], 0, i3958, 'm_SourceFontFile')
  i3958.m_AtlasPopulationMode = i3959[18]
  i3958.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3959[19], i3958.m_FaceInfo)
  var i3961 = i3959[20]
  var i3960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.add(request.d('UnityEngine.TextCore.Glyph', i3961[i + 0]));
  }
  i3958.m_GlyphTable = i3960
  var i3963 = i3959[21]
  var i3962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.add(request.d('TMPro.TMP_Character', i3963[i + 0]));
  }
  i3958.m_CharacterTable = i3962
  var i3965 = i3959[22]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 2, i3964, '')
  }
  i3958.m_AtlasTextures = i3964
  i3958.m_AtlasTextureIndex = i3959[23]
  i3958.m_IsMultiAtlasTexturesEnabled = !!i3959[24]
  i3958.m_ClearDynamicDataOnBuild = !!i3959[25]
  var i3967 = i3959[26]
  var i3966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.add(request.d('UnityEngine.TextCore.GlyphRect', i3967[i + 0]));
  }
  i3958.m_UsedGlyphRects = i3966
  var i3969 = i3959[27]
  var i3968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.add(request.d('UnityEngine.TextCore.GlyphRect', i3969[i + 0]));
  }
  i3958.m_FreeGlyphRects = i3968
  i3958.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3959[28], i3958.m_fontInfo)
  i3958.m_AtlasWidth = i3959[29]
  i3958.m_AtlasHeight = i3959[30]
  i3958.m_AtlasPadding = i3959[31]
  i3958.m_AtlasRenderMode = i3959[32]
  var i3971 = i3959[33]
  var i3970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.add(request.d('TMPro.TMP_Glyph', i3971[i + 0]));
  }
  i3958.m_glyphInfoList = i3970
  i3958.m_KerningTable = request.d('TMPro.KerningTable', i3959[34], i3958.m_KerningTable)
  i3958.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3959[35], i3958.m_FontFeatureTable)
  var i3973 = i3959[36]
  var i3972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3973.length; i += 2) {
  request.r(i3973[i + 0], i3973[i + 1], 1, i3972, '')
  }
  i3958.fallbackFontAssets = i3972
  var i3975 = i3959[37]
  var i3974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3975.length; i += 2) {
  request.r(i3975[i + 0], i3975[i + 1], 1, i3974, '')
  }
  i3958.m_FallbackFontAssetTable = i3974
  i3958.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3959[38], i3958.m_CreationSettings)
  var i3977 = i3959[39]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('TMPro.TMP_FontWeightPair', i3977[i + 0]) );
  }
  i3958.m_FontWeightTable = i3976
  var i3979 = i3959[40]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( request.d('TMPro.TMP_FontWeightPair', i3979[i + 0]) );
  }
  i3958.fontWeights = i3978
  return i3958
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3980 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3981 = data
  i3980.m_FaceIndex = i3981[0]
  i3980.m_FamilyName = i3981[1]
  i3980.m_StyleName = i3981[2]
  i3980.m_PointSize = i3981[3]
  i3980.m_Scale = i3981[4]
  i3980.m_UnitsPerEM = i3981[5]
  i3980.m_LineHeight = i3981[6]
  i3980.m_AscentLine = i3981[7]
  i3980.m_CapLine = i3981[8]
  i3980.m_MeanLine = i3981[9]
  i3980.m_Baseline = i3981[10]
  i3980.m_DescentLine = i3981[11]
  i3980.m_SuperscriptOffset = i3981[12]
  i3980.m_SuperscriptSize = i3981[13]
  i3980.m_SubscriptOffset = i3981[14]
  i3980.m_SubscriptSize = i3981[15]
  i3980.m_UnderlineOffset = i3981[16]
  i3980.m_UnderlineThickness = i3981[17]
  i3980.m_StrikethroughOffset = i3981[18]
  i3980.m_StrikethroughThickness = i3981[19]
  i3980.m_TabWidth = i3981[20]
  return i3980
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3984 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3985 = data
  i3984.m_Index = i3985[0]
  i3984.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3985[1], i3984.m_Metrics)
  i3984.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3985[2], i3984.m_GlyphRect)
  i3984.m_Scale = i3985[3]
  i3984.m_AtlasIndex = i3985[4]
  i3984.m_ClassDefinitionType = i3985[5]
  return i3984
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3986 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3987 = data
  i3986.m_Width = i3987[0]
  i3986.m_Height = i3987[1]
  i3986.m_HorizontalBearingX = i3987[2]
  i3986.m_HorizontalBearingY = i3987[3]
  i3986.m_HorizontalAdvance = i3987[4]
  return i3986
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3988 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3989 = data
  i3988.m_X = i3989[0]
  i3988.m_Y = i3989[1]
  i3988.m_Width = i3989[2]
  i3988.m_Height = i3989[3]
  return i3988
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3992 = root || request.c( 'TMPro.TMP_Character' )
  var i3993 = data
  i3992.m_ElementType = i3993[0]
  i3992.m_Unicode = i3993[1]
  i3992.m_GlyphIndex = i3993[2]
  i3992.m_Scale = i3993[3]
  return i3992
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3998 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3999 = data
  i3998.Name = i3999[0]
  i3998.PointSize = i3999[1]
  i3998.Scale = i3999[2]
  i3998.CharacterCount = i3999[3]
  i3998.LineHeight = i3999[4]
  i3998.Baseline = i3999[5]
  i3998.Ascender = i3999[6]
  i3998.CapHeight = i3999[7]
  i3998.Descender = i3999[8]
  i3998.CenterLine = i3999[9]
  i3998.SuperscriptOffset = i3999[10]
  i3998.SubscriptOffset = i3999[11]
  i3998.SubSize = i3999[12]
  i3998.Underline = i3999[13]
  i3998.UnderlineThickness = i3999[14]
  i3998.strikethrough = i3999[15]
  i3998.strikethroughThickness = i3999[16]
  i3998.TabWidth = i3999[17]
  i3998.Padding = i3999[18]
  i3998.AtlasWidth = i3999[19]
  i3998.AtlasHeight = i3999[20]
  return i3998
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4003 = data
  i4002.id = i4003[0]
  i4002.x = i4003[1]
  i4002.y = i4003[2]
  i4002.width = i4003[3]
  i4002.height = i4003[4]
  i4002.xOffset = i4003[5]
  i4002.yOffset = i4003[6]
  i4002.xAdvance = i4003[7]
  i4002.scale = i4003[8]
  return i4002
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4004 = root || request.c( 'TMPro.KerningTable' )
  var i4005 = data
  var i4007 = i4005[0]
  var i4006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.add(request.d('TMPro.KerningPair', i4007[i + 0]));
  }
  i4004.kerningPairs = i4006
  return i4004
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4010 = root || request.c( 'TMPro.KerningPair' )
  var i4011 = data
  i4010.xOffset = i4011[0]
  i4010.m_FirstGlyph = i4011[1]
  i4010.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4011[2], i4010.m_FirstGlyphAdjustments)
  i4010.m_SecondGlyph = i4011[3]
  i4010.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4011[4], i4010.m_SecondGlyphAdjustments)
  i4010.m_IgnoreSpacingAdjustments = !!i4011[5]
  return i4010
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4012 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4013 = data
  var i4015 = i4013[0]
  var i4014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4015[i + 0]));
  }
  i4012.m_GlyphPairAdjustmentRecords = i4014
  return i4012
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4018 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4019 = data
  i4018.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4019[0], i4018.m_FirstAdjustmentRecord)
  i4018.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4019[1], i4018.m_SecondAdjustmentRecord)
  i4018.m_FeatureLookupFlags = i4019[2]
  return i4018
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4020 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4021 = data
  i4020.m_GlyphIndex = i4021[0]
  i4020.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4021[1], i4020.m_GlyphValueRecord)
  return i4020
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4022 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4023 = data
  i4022.m_XPlacement = i4023[0]
  i4022.m_YPlacement = i4023[1]
  i4022.m_XAdvance = i4023[2]
  i4022.m_YAdvance = i4023[3]
  return i4022
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4026 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4027 = data
  i4026.sourceFontFileName = i4027[0]
  i4026.sourceFontFileGUID = i4027[1]
  i4026.pointSizeSamplingMode = i4027[2]
  i4026.pointSize = i4027[3]
  i4026.padding = i4027[4]
  i4026.packingMode = i4027[5]
  i4026.atlasWidth = i4027[6]
  i4026.atlasHeight = i4027[7]
  i4026.characterSetSelectionMode = i4027[8]
  i4026.characterSequence = i4027[9]
  i4026.referencedFontAssetGUID = i4027[10]
  i4026.referencedTextAssetGUID = i4027[11]
  i4026.fontStyle = i4027[12]
  i4026.fontStyleModifier = i4027[13]
  i4026.renderMode = i4027[14]
  i4026.includeFontFeatures = !!i4027[15]
  return i4026
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4030 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4031 = data
  request.r(i4031[0], i4031[1], 0, i4030, 'regularTypeface')
  request.r(i4031[2], i4031[3], 0, i4030, 'italicTypeface')
  return i4030
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i4032 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i4033 = data
  i4032.Count = i4033[0]
  return i4032
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i4034 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i4035 = data
  return i4034
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4037 = data
  i4036.useSafeMode = !!i4037[0]
  i4036.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4037[1], i4036.safeModeOptions)
  i4036.timeScale = i4037[2]
  i4036.unscaledTimeScale = i4037[3]
  i4036.useSmoothDeltaTime = !!i4037[4]
  i4036.maxSmoothUnscaledTime = i4037[5]
  i4036.rewindCallbackMode = i4037[6]
  i4036.showUnityEditorReport = !!i4037[7]
  i4036.logBehaviour = i4037[8]
  i4036.drawGizmos = !!i4037[9]
  i4036.defaultRecyclable = !!i4037[10]
  i4036.defaultAutoPlay = i4037[11]
  i4036.defaultUpdateType = i4037[12]
  i4036.defaultTimeScaleIndependent = !!i4037[13]
  i4036.defaultEaseType = i4037[14]
  i4036.defaultEaseOvershootOrAmplitude = i4037[15]
  i4036.defaultEasePeriod = i4037[16]
  i4036.defaultAutoKill = !!i4037[17]
  i4036.defaultLoopType = i4037[18]
  i4036.debugMode = !!i4037[19]
  i4036.debugStoreTargetId = !!i4037[20]
  i4036.showPreviewPanel = !!i4037[21]
  i4036.storeSettingsLocation = i4037[22]
  i4036.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4037[23], i4036.modules)
  i4036.createASMDEF = !!i4037[24]
  i4036.showPlayingTweens = !!i4037[25]
  i4036.showPausedTweens = !!i4037[26]
  return i4036
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4039 = data
  i4038.logBehaviour = i4039[0]
  i4038.nestedTweenFailureBehaviour = i4039[1]
  return i4038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4041 = data
  i4040.showPanel = !!i4041[0]
  i4040.audioEnabled = !!i4041[1]
  i4040.physicsEnabled = !!i4041[2]
  i4040.physics2DEnabled = !!i4041[3]
  i4040.spriteEnabled = !!i4041[4]
  i4040.uiEnabled = !!i4041[5]
  i4040.textMeshProEnabled = !!i4041[6]
  i4040.tk2DEnabled = !!i4041[7]
  i4040.deAudioEnabled = !!i4041[8]
  i4040.deUnityExtendedEnabled = !!i4041[9]
  i4040.epoOutlineEnabled = !!i4041[10]
  return i4040
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4042 = root || request.c( 'TMPro.TMP_Settings' )
  var i4043 = data
  i4042.m_enableWordWrapping = !!i4043[0]
  i4042.m_enableKerning = !!i4043[1]
  i4042.m_enableExtraPadding = !!i4043[2]
  i4042.m_enableTintAllSprites = !!i4043[3]
  i4042.m_enableParseEscapeCharacters = !!i4043[4]
  i4042.m_EnableRaycastTarget = !!i4043[5]
  i4042.m_GetFontFeaturesAtRuntime = !!i4043[6]
  i4042.m_missingGlyphCharacter = i4043[7]
  i4042.m_warningsDisabled = !!i4043[8]
  request.r(i4043[9], i4043[10], 0, i4042, 'm_defaultFontAsset')
  i4042.m_defaultFontAssetPath = i4043[11]
  i4042.m_defaultFontSize = i4043[12]
  i4042.m_defaultAutoSizeMinRatio = i4043[13]
  i4042.m_defaultAutoSizeMaxRatio = i4043[14]
  i4042.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4043[15], i4043[16] )
  i4042.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4043[17], i4043[18] )
  i4042.m_autoSizeTextContainer = !!i4043[19]
  i4042.m_IsTextObjectScaleStatic = !!i4043[20]
  var i4045 = i4043[21]
  var i4044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4045.length; i += 2) {
  request.r(i4045[i + 0], i4045[i + 1], 1, i4044, '')
  }
  i4042.m_fallbackFontAssets = i4044
  i4042.m_matchMaterialPreset = !!i4043[22]
  request.r(i4043[23], i4043[24], 0, i4042, 'm_defaultSpriteAsset')
  i4042.m_defaultSpriteAssetPath = i4043[25]
  i4042.m_enableEmojiSupport = !!i4043[26]
  i4042.m_MissingCharacterSpriteUnicode = i4043[27]
  i4042.m_defaultColorGradientPresetsPath = i4043[28]
  request.r(i4043[29], i4043[30], 0, i4042, 'm_defaultStyleSheet')
  i4042.m_StyleSheetsResourcePath = i4043[31]
  request.r(i4043[32], i4043[33], 0, i4042, 'm_leadingCharacters')
  request.r(i4043[34], i4043[35], 0, i4042, 'm_followingCharacters')
  i4042.m_UseModernHangulLineBreakingRules = !!i4043[36]
  return i4042
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4046 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4047 = data
  i4046.hashCode = i4047[0]
  request.r(i4047[1], i4047[2], 0, i4046, 'material')
  i4046.materialHashCode = i4047[3]
  request.r(i4047[4], i4047[5], 0, i4046, 'spriteSheet')
  var i4049 = i4047[6]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.add(request.d('TMPro.TMP_Sprite', i4049[i + 0]));
  }
  i4046.spriteInfoList = i4048
  var i4051 = i4047[7]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4051.length; i += 2) {
  request.r(i4051[i + 0], i4051[i + 1], 1, i4050, '')
  }
  i4046.fallbackSpriteAssets = i4050
  i4046.m_Version = i4047[8]
  i4046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4047[9], i4046.m_FaceInfo)
  var i4053 = i4047[10]
  var i4052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.add(request.d('TMPro.TMP_SpriteCharacter', i4053[i + 0]));
  }
  i4046.m_SpriteCharacterTable = i4052
  var i4055 = i4047[11]
  var i4054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.add(request.d('TMPro.TMP_SpriteGlyph', i4055[i + 0]));
  }
  i4046.m_SpriteGlyphTable = i4054
  return i4046
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4058 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4059 = data
  i4058.name = i4059[0]
  i4058.hashCode = i4059[1]
  i4058.unicode = i4059[2]
  i4058.pivot = new pc.Vec2( i4059[3], i4059[4] )
  request.r(i4059[5], i4059[6], 0, i4058, 'sprite')
  i4058.id = i4059[7]
  i4058.x = i4059[8]
  i4058.y = i4059[9]
  i4058.width = i4059[10]
  i4058.height = i4059[11]
  i4058.xOffset = i4059[12]
  i4058.yOffset = i4059[13]
  i4058.xAdvance = i4059[14]
  i4058.scale = i4059[15]
  return i4058
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4064 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4065 = data
  i4064.m_Name = i4065[0]
  i4064.m_HashCode = i4065[1]
  i4064.m_ElementType = i4065[2]
  i4064.m_Unicode = i4065[3]
  i4064.m_GlyphIndex = i4065[4]
  i4064.m_Scale = i4065[5]
  return i4064
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4068 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4069 = data
  request.r(i4069[0], i4069[1], 0, i4068, 'sprite')
  i4068.m_Index = i4069[2]
  i4068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4069[3], i4068.m_Metrics)
  i4068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4069[4], i4068.m_GlyphRect)
  i4068.m_Scale = i4069[5]
  i4068.m_AtlasIndex = i4069[6]
  i4068.m_ClassDefinitionType = i4069[7]
  return i4068
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4070 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4071 = data
  var i4073 = i4071[0]
  var i4072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.add(request.d('TMPro.TMP_Style', i4073[i + 0]));
  }
  i4070.m_StyleList = i4072
  return i4070
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4076 = root || request.c( 'TMPro.TMP_Style' )
  var i4077 = data
  i4076.m_Name = i4077[0]
  i4076.m_HashCode = i4077[1]
  i4076.m_OpeningDefinition = i4077[2]
  i4076.m_ClosingDefinition = i4077[3]
  i4076.m_OpeningTagArray = i4077[4]
  i4076.m_ClosingTagArray = i4077[5]
  i4076.m_OpeningTagUnicodeArray = i4077[6]
  i4076.m_ClosingTagUnicodeArray = i4077[7]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4079 = data
  var i4081 = i4079[0]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4081[i + 0]) );
  }
  i4078.files = i4080
  i4078.componentToPrefabIds = i4079[1]
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4085 = data
  i4084.path = i4085[0]
  request.r(i4085[1], i4085[2], 0, i4084, 'unityObject')
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4087 = data
  var i4089 = i4087[0]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4089[i + 0]) );
  }
  i4086.scriptsExecutionOrder = i4088
  var i4091 = i4087[1]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4091[i + 0]) );
  }
  i4086.sortingLayers = i4090
  var i4093 = i4087[2]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4093[i + 0]) );
  }
  i4086.cullingLayers = i4092
  i4086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4087[3], i4086.timeSettings)
  i4086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4087[4], i4086.physicsSettings)
  i4086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4087[5], i4086.physics2DSettings)
  i4086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4087[6], i4086.qualitySettings)
  i4086.enableRealtimeShadows = !!i4087[7]
  i4086.enableAutoInstancing = !!i4087[8]
  i4086.enableDynamicBatching = !!i4087[9]
  i4086.lightmapEncodingQuality = i4087[10]
  i4086.desiredColorSpace = i4087[11]
  var i4095 = i4087[12]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( i4095[i + 0] );
  }
  i4086.allTags = i4094
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4099 = data
  i4098.name = i4099[0]
  i4098.value = i4099[1]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4103 = data
  i4102.id = i4103[0]
  i4102.name = i4103[1]
  i4102.value = i4103[2]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4107 = data
  i4106.id = i4107[0]
  i4106.name = i4107[1]
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4109 = data
  i4108.fixedDeltaTime = i4109[0]
  i4108.maximumDeltaTime = i4109[1]
  i4108.timeScale = i4109[2]
  i4108.maximumParticleTimestep = i4109[3]
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4111 = data
  i4110.gravity = new pc.Vec3( i4111[0], i4111[1], i4111[2] )
  i4110.defaultSolverIterations = i4111[3]
  i4110.bounceThreshold = i4111[4]
  i4110.autoSyncTransforms = !!i4111[5]
  i4110.autoSimulation = !!i4111[6]
  var i4113 = i4111[7]
  var i4112 = []
  for(var i = 0; i < i4113.length; i += 1) {
    i4112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4113[i + 0]) );
  }
  i4110.collisionMatrix = i4112
  return i4110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4117 = data
  i4116.enabled = !!i4117[0]
  i4116.layerId = i4117[1]
  i4116.otherLayerId = i4117[2]
  return i4116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, 'material')
  i4118.gravity = new pc.Vec2( i4119[2], i4119[3] )
  i4118.positionIterations = i4119[4]
  i4118.velocityIterations = i4119[5]
  i4118.velocityThreshold = i4119[6]
  i4118.maxLinearCorrection = i4119[7]
  i4118.maxAngularCorrection = i4119[8]
  i4118.maxTranslationSpeed = i4119[9]
  i4118.maxRotationSpeed = i4119[10]
  i4118.baumgarteScale = i4119[11]
  i4118.baumgarteTOIScale = i4119[12]
  i4118.timeToSleep = i4119[13]
  i4118.linearSleepTolerance = i4119[14]
  i4118.angularSleepTolerance = i4119[15]
  i4118.defaultContactOffset = i4119[16]
  i4118.autoSimulation = !!i4119[17]
  i4118.queriesHitTriggers = !!i4119[18]
  i4118.queriesStartInColliders = !!i4119[19]
  i4118.callbacksOnDisable = !!i4119[20]
  i4118.reuseCollisionCallbacks = !!i4119[21]
  i4118.autoSyncTransforms = !!i4119[22]
  var i4121 = i4119[23]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4121[i + 0]) );
  }
  i4118.collisionMatrix = i4120
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4125 = data
  i4124.enabled = !!i4125[0]
  i4124.layerId = i4125[1]
  i4124.otherLayerId = i4125[2]
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4127 = data
  var i4129 = i4127[0]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4129[i + 0]) );
  }
  i4126.qualityLevels = i4128
  var i4131 = i4127[1]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 1) {
    i4130.push( i4131[i + 0] );
  }
  i4126.names = i4130
  i4126.shadows = i4127[2]
  i4126.anisotropicFiltering = i4127[3]
  i4126.antiAliasing = i4127[4]
  i4126.lodBias = i4127[5]
  i4126.shadowCascades = i4127[6]
  i4126.shadowDistance = i4127[7]
  i4126.shadowmaskMode = i4127[8]
  i4126.shadowProjection = i4127[9]
  i4126.shadowResolution = i4127[10]
  i4126.softParticles = !!i4127[11]
  i4126.softVegetation = !!i4127[12]
  i4126.activeColorSpace = i4127[13]
  i4126.desiredColorSpace = i4127[14]
  i4126.masterTextureLimit = i4127[15]
  i4126.maxQueuedFrames = i4127[16]
  i4126.particleRaycastBudget = i4127[17]
  i4126.pixelLightCount = i4127[18]
  i4126.realtimeReflectionProbes = !!i4127[19]
  i4126.shadowCascade2Split = i4127[20]
  i4126.shadowCascade4Split = new pc.Vec3( i4127[21], i4127[22], i4127[23] )
  i4126.streamingMipmapsActive = !!i4127[24]
  i4126.vSyncCount = i4127[25]
  i4126.asyncUploadBufferSize = i4127[26]
  i4126.asyncUploadTimeSlice = i4127[27]
  i4126.billboardsFaceCameraPosition = !!i4127[28]
  i4126.shadowNearPlaneOffset = i4127[29]
  i4126.streamingMipmapsMemoryBudget = i4127[30]
  i4126.maximumLODLevel = i4127[31]
  i4126.streamingMipmapsAddAllCameras = !!i4127[32]
  i4126.streamingMipmapsMaxLevelReduction = i4127[33]
  i4126.streamingMipmapsRenderersPerFrame = i4127[34]
  i4126.resolutionScalingFixedDPIFactor = i4127[35]
  i4126.streamingMipmapsMaxFileIORequests = i4127[36]
  i4126.currentQualityLevel = i4127[37]
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4137 = data
  i4136.weight = i4137[0]
  i4136.vertices = i4137[1]
  i4136.normals = i4137[2]
  i4136.tangents = i4137[3]
  return i4136
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4138 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4139 = data
  i4138.xPlacement = i4139[0]
  i4138.yPlacement = i4139[1]
  i4138.xAdvance = i4139[2]
  i4138.yAdvance = i4139[3]
  return i4138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[58],"89":[34],"90":[34],"91":[34],"92":[34],"93":[34],"94":[34],"95":[34],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[58],"111":[31],"112":[113],"114":[113],"1":[0],"70":[115],"71":[115],"116":[115],"117":[10],"118":[115],"119":[0],"44":[31,0],"22":[0,16],"120":[0],"121":[16,0],"122":[31],"123":[16,0],"124":[0],"125":[126],"127":[0],"128":[0],"4":[1],"18":[16,0],"17":[0],"3":[1],"129":[0],"130":[0],"131":[0],"132":[0],"133":[0],"134":[0],"135":[0],"12":[0],"136":[0],"9":[16,0],"137":[0],"138":[0],"139":[0],"140":[0],"11":[16,0],"141":[0],"142":[51],"143":[51],"52":[51],"144":[51],"145":[58],"146":[58],"147":[126],"148":[126]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Texture2D","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Transform","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","PlayerController","InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","HyperCasual.Runner.SaveManager","CoinEffectMove","UnityEngine.BoxCollider","HyperCasual.Runner.Gate","TMPro.TextMeshPro","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","SimpleDeactivateOnTap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","UnityEngine.Camera","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","CollectableParticleManager","CheerPhraseController","OutroAnimationController","LevelFailedHandler","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","UnityEngine.Light","HyperCasual.Runner.LevelManager","HyperCasual.Runner.FinishLine","HyperCasual.Runner.LoseHandler","UnityEngine.MeshCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.18f1";

Deserializers.productName = "Luna Tutorial";

Deserializers.lunaInitializationTime = "06/27/2025 13:17:35";

Deserializers.lunaDaysRunning = "3.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "2";

Deserializers.lunaAppID = "31046";

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

Deserializers.buildID = "6db4a522-1c6f-423b-9ee9-674c2b3526ed";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

