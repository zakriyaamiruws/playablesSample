var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.JointSpring' )
  var i3431 = data
  i3430.spring = i3431[0]
  i3430.damper = i3431[1]
  i3430.targetPosition = i3431[2]
  return i3430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3432 = root || request.c( 'UnityEngine.JointMotor' )
  var i3433 = data
  i3432.m_TargetVelocity = i3433[0]
  i3432.m_Force = i3433[1]
  i3432.m_FreeSpin = i3433[2]
  return i3432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3434 = root || request.c( 'UnityEngine.JointLimits' )
  var i3435 = data
  i3434.m_Min = i3435[0]
  i3434.m_Max = i3435[1]
  i3434.m_Bounciness = i3435[2]
  i3434.m_BounceMinVelocity = i3435[3]
  i3434.m_ContactDistance = i3435[4]
  i3434.minBounce = i3435[5]
  i3434.maxBounce = i3435[6]
  return i3434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3436 = root || request.c( 'UnityEngine.JointDrive' )
  var i3437 = data
  i3436.m_PositionSpring = i3437[0]
  i3436.m_PositionDamper = i3437[1]
  i3436.m_MaximumForce = i3437[2]
  return i3436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3439 = data
  i3438.m_Spring = i3439[0]
  i3438.m_Damper = i3439[1]
  return i3438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3441 = data
  i3440.m_Limit = i3441[0]
  i3440.m_Bounciness = i3441[1]
  i3440.m_ContactDistance = i3441[2]
  return i3440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3443 = data
  i3442.m_ExtremumSlip = i3443[0]
  i3442.m_ExtremumValue = i3443[1]
  i3442.m_AsymptoteSlip = i3443[2]
  i3442.m_AsymptoteValue = i3443[3]
  i3442.m_Stiffness = i3443[4]
  return i3442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3445 = data
  i3444.m_LowerAngle = i3445[0]
  i3444.m_UpperAngle = i3445[1]
  return i3444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3447 = data
  i3446.m_MotorSpeed = i3447[0]
  i3446.m_MaximumMotorTorque = i3447[1]
  return i3446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3449 = data
  i3448.m_DampingRatio = i3449[0]
  i3448.m_Frequency = i3449[1]
  i3448.m_Angle = i3449[2]
  return i3448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3451 = data
  i3450.m_LowerTranslation = i3451[0]
  i3450.m_UpperTranslation = i3451[1]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3453 = data
  i3452.pivot = new pc.Vec2( i3453[0], i3453[1] )
  i3452.anchorMin = new pc.Vec2( i3453[2], i3453[3] )
  i3452.anchorMax = new pc.Vec2( i3453[4], i3453[5] )
  i3452.sizeDelta = new pc.Vec2( i3453[6], i3453[7] )
  i3452.anchoredPosition3D = new pc.Vec3( i3453[8], i3453[9], i3453[10] )
  i3452.rotation = new pc.Quat(i3453[11], i3453[12], i3453[13], i3453[14])
  i3452.scale = new pc.Vec3( i3453[15], i3453[16], i3453[17] )
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3455 = data
  i3454.enabled = !!i3455[0]
  i3454.planeDistance = i3455[1]
  i3454.referencePixelsPerUnit = i3455[2]
  i3454.isFallbackOverlay = !!i3455[3]
  i3454.renderMode = i3455[4]
  i3454.renderOrder = i3455[5]
  i3454.sortingLayerName = i3455[6]
  i3454.sortingOrder = i3455[7]
  i3454.scaleFactor = i3455[8]
  request.r(i3455[9], i3455[10], 0, i3454, 'worldCamera')
  i3454.overrideSorting = !!i3455[11]
  i3454.pixelPerfect = !!i3455[12]
  i3454.targetDisplay = i3455[13]
  i3454.overridePixelPerfect = !!i3455[14]
  return i3454
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3457 = data
  i3456.m_UiScaleMode = i3457[0]
  i3456.m_ReferencePixelsPerUnit = i3457[1]
  i3456.m_ScaleFactor = i3457[2]
  i3456.m_ReferenceResolution = new pc.Vec2( i3457[3], i3457[4] )
  i3456.m_ScreenMatchMode = i3457[5]
  i3456.m_MatchWidthOrHeight = i3457[6]
  i3456.m_PhysicalUnit = i3457[7]
  i3456.m_FallbackScreenDPI = i3457[8]
  i3456.m_DefaultSpriteDPI = i3457[9]
  i3456.m_DynamicPixelsPerUnit = i3457[10]
  i3456.m_PresetInfoIsWorld = !!i3457[11]
  return i3456
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3459 = data
  i3458.m_IgnoreReversedGraphics = !!i3459[0]
  i3458.m_BlockingObjects = i3459[1]
  i3458.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3459[2] )
  return i3458
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i3460 = root || request.c( 'EndCardController' )
  var i3461 = data
  i3460.alwaysShowEndcardTESTING = !!i3461[0]
  i3460.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i3461[1], i3460.EndCardOpenedEvent)
  i3460._backgroundColor = new pc.Color(i3461[2], i3461[3], i3461[4], i3461[5])
  request.r(i3461[6], i3461[7], 0, i3460, '_backgroundTexture')
  request.r(i3461[8], i3461[9], 0, i3460, '_iconTexture')
  i3460._iconColor = new pc.Color(i3461[10], i3461[11], i3461[12], i3461[13])
  request.r(i3461[14], i3461[15], 0, i3460, '_buttonTexture')
  i3460._buttonColor = new pc.Color(i3461[16], i3461[17], i3461[18], i3461[19])
  i3460._endCardDescriptionText = i3461[20]
  i3460._CTAButtonText = i3461[21]
  i3460._useBestFitOnCTA = !!i3461[22]
  i3460._CTAFontColor = new pc.Color(i3461[23], i3461[24], i3461[25], i3461[26])
  i3460._descriptionFontColor = new pc.Color(i3461[27], i3461[28], i3461[29], i3461[30])
  request.r(i3461[31], i3461[32], 0, i3460, '_CTAFont')
  request.r(i3461[33], i3461[34], 0, i3460, '_descriptionFont')
  i3460._CTAFontSize = i3461[35]
  i3460._descriptionFontSize = i3461[36]
  i3460._centerDescriptionX = !!i3461[37]
  i3460._centerDescriptionY = !!i3461[38]
  i3460._centerButtonX = !!i3461[39]
  i3460._centerButtonY = !!i3461[40]
  i3460._descriptionPositionX = i3461[41]
  i3460._descriptionPositionY = i3461[42]
  i3460._buttonPositionX = i3461[43]
  i3460._buttonPositionY = i3461[44]
  i3460._CTAFontSizeLandscape = i3461[45]
  i3460._descriptionFontSizeLandscape = i3461[46]
  i3460._centerDescriptionXLandscape = !!i3461[47]
  i3460._centerDescriptionYLandscape = !!i3461[48]
  i3460._centerButtonXLandscape = !!i3461[49]
  i3460._centerButtonYLandscape = !!i3461[50]
  i3460._descriptionPositionXLandscape = i3461[51]
  i3460._descriptionPositionYLandscape = i3461[52]
  i3460._buttonPositionXLandscape = i3461[53]
  i3460._buttonPositionYLandscape = i3461[54]
  i3460._centerIconX = !!i3461[55]
  i3460._centerIconY = !!i3461[56]
  i3460._iconPositionX = i3461[57]
  i3460._iconPositionY = i3461[58]
  i3460._iconSize = i3461[59]
  i3460._roundEdgesOnIcon = !!i3461[60]
  i3460._centerIconXLandscape = !!i3461[61]
  i3460._centerIconYLandscape = !!i3461[62]
  i3460._iconPositionXLandscape = i3461[63]
  i3460._iconPositionYLandscape = i3461[64]
  i3460._iconSizeLandscape = i3461[65]
  i3460._roundEdgesOnIconLandscape = !!i3461[66]
  i3460._endCardClickableOptions = i3461[67]
  i3460._buttonAnimationType = i3461[68]
  i3460._endCardPortraitAnimationType = i3461[69]
  i3460._endCardLandscapeAnimationType = i3461[70]
  request.r(i3461[71], i3461[72], 0, i3460, '_backgroundImage')
  request.r(i3461[73], i3461[74], 0, i3460, '_CTAButton')
  request.r(i3461[75], i3461[76], 0, i3460, '_ScreenCTAButton')
  request.r(i3461[77], i3461[78], 0, i3460, '_CTAButtonTextText')
  request.r(i3461[79], i3461[80], 0, i3460, '_EndCardDescriptionTextText')
  request.r(i3461[81], i3461[82], 0, i3460, '_maskIcon')
  request.r(i3461[83], i3461[84], 0, i3460, '_iconRect')
  request.r(i3461[85], i3461[86], 0, i3460, '_iconRectMask')
  request.r(i3461[87], i3461[88], 0, i3460, '_descriptionRect')
  request.r(i3461[89], i3461[90], 0, i3460, '_buttonRect')
  request.r(i3461[91], i3461[92], 0, i3460, '_CTAButtonAnimator')
  request.r(i3461[93], i3461[94], 0, i3460, '_endCardAnimator')
  request.r(i3461[95], i3461[96], 0, i3460, '_iconImage')
  request.r(i3461[97], i3461[98], 0, i3460, '_CTAButtonImage')
  return i3460
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3462 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3463 = data
  i3462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3463[0], i3462.m_PersistentCalls)
  return i3462
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3465 = data
  var i3467 = i3465[0]
  var i3466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.add(request.d('UnityEngine.Events.PersistentCall', i3467[i + 0]));
  }
  i3464.m_Calls = i3466
  return i3464
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'm_Target')
  i3470.m_TargetAssemblyTypeName = i3471[2]
  i3470.m_MethodName = i3471[3]
  i3470.m_Mode = i3471[4]
  i3470.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3471[5], i3470.m_Arguments)
  i3470.m_CallState = i3471[6]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3473 = data
  request.r(i3473[0], i3473[1], 0, i3472, 'animatorController')
  request.r(i3473[2], i3473[3], 0, i3472, 'avatar')
  i3472.updateMode = i3473[4]
  i3472.hasTransformHierarchy = !!i3473[5]
  i3472.applyRootMotion = !!i3473[6]
  var i3475 = i3473[7]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 2) {
  request.r(i3475[i + 0], i3475[i + 1], 2, i3474, '')
  }
  i3472.humanBones = i3474
  i3472.enabled = !!i3473[8]
  return i3472
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i3478 = root || request.c( 'EndCardSetScale' )
  var i3479 = data
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3481 = data
  i3480.cullTransparentMesh = !!i3481[0]
  return i3480
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3483 = data
  i3482.m_AspectMode = i3483[0]
  i3482.m_AspectRatio = i3483[1]
  return i3482
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3484 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'm_Texture')
  i3484.m_UVRect = UnityEngine.Rect.MinMaxRect(i3485[2], i3485[3], i3485[4], i3485[5])
  request.r(i3485[6], i3485[7], 0, i3484, 'm_Material')
  i3484.m_Maskable = !!i3485[8]
  i3484.m_Color = new pc.Color(i3485[9], i3485[10], i3485[11], i3485[12])
  i3484.m_RaycastTarget = !!i3485[13]
  i3484.m_RaycastPadding = new pc.Vec4( i3485[14], i3485[15], i3485[16], i3485[17] )
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.tagId = i3487[1]
  i3486.enabled = !!i3487[2]
  i3486.isStatic = !!i3487[3]
  i3486.layer = i3487[4]
  return i3486
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3488 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3489 = data
  i3488.m_ShowMaskGraphic = !!i3489[0]
  return i3488
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.UI.Image' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'm_Sprite')
  i3490.m_Type = i3491[2]
  i3490.m_PreserveAspect = !!i3491[3]
  i3490.m_FillCenter = !!i3491[4]
  i3490.m_FillMethod = i3491[5]
  i3490.m_FillAmount = i3491[6]
  i3490.m_FillClockwise = !!i3491[7]
  i3490.m_FillOrigin = i3491[8]
  i3490.m_UseSpriteMesh = !!i3491[9]
  i3490.m_PixelsPerUnitMultiplier = i3491[10]
  request.r(i3491[11], i3491[12], 0, i3490, 'm_Material')
  i3490.m_Maskable = !!i3491[13]
  i3490.m_Color = new pc.Color(i3491[14], i3491[15], i3491[16], i3491[17])
  i3490.m_RaycastTarget = !!i3491[18]
  i3490.m_RaycastPadding = new pc.Vec4( i3491[19], i3491[20], i3491[21], i3491[22] )
  return i3490
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.UI.Text' )
  var i3493 = data
  i3492.m_FontData = request.d('UnityEngine.UI.FontData', i3493[0], i3492.m_FontData)
  i3492.m_Text = i3493[1]
  request.r(i3493[2], i3493[3], 0, i3492, 'm_Material')
  i3492.m_Maskable = !!i3493[4]
  i3492.m_Color = new pc.Color(i3493[5], i3493[6], i3493[7], i3493[8])
  i3492.m_RaycastTarget = !!i3493[9]
  i3492.m_RaycastPadding = new pc.Vec4( i3493[10], i3493[11], i3493[12], i3493[13] )
  return i3492
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3494 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'm_Font')
  i3494.m_FontSize = i3495[2]
  i3494.m_FontStyle = i3495[3]
  i3494.m_BestFit = !!i3495[4]
  i3494.m_MinSize = i3495[5]
  i3494.m_MaxSize = i3495[6]
  i3494.m_Alignment = i3495[7]
  i3494.m_AlignByGeometry = !!i3495[8]
  i3494.m_RichText = !!i3495[9]
  i3494.m_HorizontalOverflow = i3495[10]
  i3494.m_VerticalOverflow = i3495[11]
  i3494.m_LineSpacing = i3495[12]
  return i3494
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3496 = root || request.c( 'UnityEngine.UI.Button' )
  var i3497 = data
  i3496.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3497[0], i3496.m_OnClick)
  i3496.m_Navigation = request.d('UnityEngine.UI.Navigation', i3497[1], i3496.m_Navigation)
  i3496.m_Transition = i3497[2]
  i3496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3497[3], i3496.m_Colors)
  i3496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3497[4], i3496.m_SpriteState)
  i3496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3497[5], i3496.m_AnimationTriggers)
  i3496.m_Interactable = !!i3497[6]
  request.r(i3497[7], i3497[8], 0, i3496, 'm_TargetGraphic')
  return i3496
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3498 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3499 = data
  i3498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3499[0], i3498.m_PersistentCalls)
  return i3498
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'm_ObjectArgument')
  i3500.m_ObjectArgumentAssemblyTypeName = i3501[2]
  i3500.m_IntArgument = i3501[3]
  i3500.m_FloatArgument = i3501[4]
  i3500.m_StringArgument = i3501[5]
  i3500.m_BoolArgument = !!i3501[6]
  return i3500
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3503 = data
  i3502.m_Mode = i3503[0]
  i3502.m_WrapAround = !!i3503[1]
  request.r(i3503[2], i3503[3], 0, i3502, 'm_SelectOnUp')
  request.r(i3503[4], i3503[5], 0, i3502, 'm_SelectOnDown')
  request.r(i3503[6], i3503[7], 0, i3502, 'm_SelectOnLeft')
  request.r(i3503[8], i3503[9], 0, i3502, 'm_SelectOnRight')
  return i3502
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3505 = data
  i3504.m_NormalColor = new pc.Color(i3505[0], i3505[1], i3505[2], i3505[3])
  i3504.m_HighlightedColor = new pc.Color(i3505[4], i3505[5], i3505[6], i3505[7])
  i3504.m_PressedColor = new pc.Color(i3505[8], i3505[9], i3505[10], i3505[11])
  i3504.m_SelectedColor = new pc.Color(i3505[12], i3505[13], i3505[14], i3505[15])
  i3504.m_DisabledColor = new pc.Color(i3505[16], i3505[17], i3505[18], i3505[19])
  i3504.m_ColorMultiplier = i3505[20]
  i3504.m_FadeDuration = i3505[21]
  return i3504
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'm_HighlightedSprite')
  request.r(i3507[2], i3507[3], 0, i3506, 'm_PressedSprite')
  request.r(i3507[4], i3507[5], 0, i3506, 'm_SelectedSprite')
  request.r(i3507[6], i3507[7], 0, i3506, 'm_DisabledSprite')
  return i3506
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3509 = data
  i3508.m_NormalTrigger = i3509[0]
  i3508.m_HighlightedTrigger = i3509[1]
  i3508.m_PressedTrigger = i3509[2]
  i3508.m_SelectedTrigger = i3509[3]
  i3508.m_DisabledTrigger = i3509[4]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3511 = data
  i3510.m_Alpha = i3511[0]
  i3510.m_Interactable = !!i3511[1]
  i3510.m_BlocksRaycasts = !!i3511[2]
  i3510.m_IgnoreParentGroups = !!i3511[3]
  i3510.enabled = !!i3511[4]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3513 = data
  i3512.name = i3513[0]
  i3512.width = i3513[1]
  i3512.height = i3513[2]
  i3512.mipmapCount = i3513[3]
  i3512.anisoLevel = i3513[4]
  i3512.filterMode = i3513[5]
  i3512.hdr = !!i3513[6]
  i3512.format = i3513[7]
  i3512.wrapMode = i3513[8]
  i3512.alphaIsTransparency = !!i3513[9]
  i3512.alphaSource = i3513[10]
  i3512.graphicsFormat = i3513[11]
  i3512.sRGBTexture = !!i3513[12]
  i3512.desiredColorSpace = i3513[13]
  i3512.wrapU = i3513[14]
  i3512.wrapV = i3513[15]
  return i3512
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i3514 = root || request.c( 'DOTWeenPulseAnim' )
  var i3515 = data
  i3514.pulseSize = new pc.Vec2( i3515[0], i3515[1] )
  i3514.pulseDuration = i3515[2]
  i3514.ease = i3515[3]
  return i3514
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3516 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3517 = data
  i3516.m_hasFontAssetChanged = !!i3517[0]
  request.r(i3517[1], i3517[2], 0, i3516, 'm_baseMaterial')
  i3516.m_maskOffset = new pc.Vec4( i3517[3], i3517[4], i3517[5], i3517[6] )
  i3516.m_text = i3517[7]
  i3516.m_isRightToLeft = !!i3517[8]
  request.r(i3517[9], i3517[10], 0, i3516, 'm_fontAsset')
  request.r(i3517[11], i3517[12], 0, i3516, 'm_sharedMaterial')
  var i3519 = i3517[13]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 2, i3518, '')
  }
  i3516.m_fontSharedMaterials = i3518
  request.r(i3517[14], i3517[15], 0, i3516, 'm_fontMaterial')
  var i3521 = i3517[16]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 2) {
  request.r(i3521[i + 0], i3521[i + 1], 2, i3520, '')
  }
  i3516.m_fontMaterials = i3520
  i3516.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3517[17], i3517[18], i3517[19], i3517[20])
  i3516.m_fontColor = new pc.Color(i3517[21], i3517[22], i3517[23], i3517[24])
  i3516.m_enableVertexGradient = !!i3517[25]
  i3516.m_colorMode = i3517[26]
  i3516.m_fontColorGradient = request.d('TMPro.VertexGradient', i3517[27], i3516.m_fontColorGradient)
  request.r(i3517[28], i3517[29], 0, i3516, 'm_fontColorGradientPreset')
  request.r(i3517[30], i3517[31], 0, i3516, 'm_spriteAsset')
  i3516.m_tintAllSprites = !!i3517[32]
  request.r(i3517[33], i3517[34], 0, i3516, 'm_StyleSheet')
  i3516.m_TextStyleHashCode = i3517[35]
  i3516.m_overrideHtmlColors = !!i3517[36]
  i3516.m_faceColor = UnityEngine.Color32.ConstructColor(i3517[37], i3517[38], i3517[39], i3517[40])
  i3516.m_fontSize = i3517[41]
  i3516.m_fontSizeBase = i3517[42]
  i3516.m_fontWeight = i3517[43]
  i3516.m_enableAutoSizing = !!i3517[44]
  i3516.m_fontSizeMin = i3517[45]
  i3516.m_fontSizeMax = i3517[46]
  i3516.m_fontStyle = i3517[47]
  i3516.m_HorizontalAlignment = i3517[48]
  i3516.m_VerticalAlignment = i3517[49]
  i3516.m_textAlignment = i3517[50]
  i3516.m_characterSpacing = i3517[51]
  i3516.m_wordSpacing = i3517[52]
  i3516.m_lineSpacing = i3517[53]
  i3516.m_lineSpacingMax = i3517[54]
  i3516.m_paragraphSpacing = i3517[55]
  i3516.m_charWidthMaxAdj = i3517[56]
  i3516.m_enableWordWrapping = !!i3517[57]
  i3516.m_wordWrappingRatios = i3517[58]
  i3516.m_overflowMode = i3517[59]
  request.r(i3517[60], i3517[61], 0, i3516, 'm_linkedTextComponent')
  request.r(i3517[62], i3517[63], 0, i3516, 'parentLinkedComponent')
  i3516.m_enableKerning = !!i3517[64]
  i3516.m_enableExtraPadding = !!i3517[65]
  i3516.checkPaddingRequired = !!i3517[66]
  i3516.m_isRichText = !!i3517[67]
  i3516.m_parseCtrlCharacters = !!i3517[68]
  i3516.m_isOrthographic = !!i3517[69]
  i3516.m_isCullingEnabled = !!i3517[70]
  i3516.m_horizontalMapping = i3517[71]
  i3516.m_verticalMapping = i3517[72]
  i3516.m_uvLineOffset = i3517[73]
  i3516.m_geometrySortingOrder = i3517[74]
  i3516.m_IsTextObjectScaleStatic = !!i3517[75]
  i3516.m_VertexBufferAutoSizeReduction = !!i3517[76]
  i3516.m_useMaxVisibleDescender = !!i3517[77]
  i3516.m_pageToDisplay = i3517[78]
  i3516.m_margin = new pc.Vec4( i3517[79], i3517[80], i3517[81], i3517[82] )
  i3516.m_isUsingLegacyAnimationComponent = !!i3517[83]
  i3516.m_isVolumetricText = !!i3517[84]
  request.r(i3517[85], i3517[86], 0, i3516, 'm_Material')
  i3516.m_Maskable = !!i3517[87]
  i3516.m_Color = new pc.Color(i3517[88], i3517[89], i3517[90], i3517[91])
  i3516.m_RaycastTarget = !!i3517[92]
  i3516.m_RaycastPadding = new pc.Vec4( i3517[93], i3517[94], i3517[95], i3517[96] )
  return i3516
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3524 = root || request.c( 'TMPro.VertexGradient' )
  var i3525 = data
  i3524.topLeft = new pc.Color(i3525[0], i3525[1], i3525[2], i3525[3])
  i3524.topRight = new pc.Color(i3525[4], i3525[5], i3525[6], i3525[7])
  i3524.bottomLeft = new pc.Color(i3525[8], i3525[9], i3525[10], i3525[11])
  i3524.bottomRight = new pc.Color(i3525[12], i3525[13], i3525[14], i3525[15])
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3526 = root || new pc.UnityMaterial()
  var i3527 = data
  i3526.name = i3527[0]
  request.r(i3527[1], i3527[2], 0, i3526, 'shader')
  i3526.renderQueue = i3527[3]
  i3526.enableInstancing = !!i3527[4]
  var i3529 = i3527[5]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3529[i + 0]) );
  }
  i3526.floatParameters = i3528
  var i3531 = i3527[6]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3531[i + 0]) );
  }
  i3526.colorParameters = i3530
  var i3533 = i3527[7]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3533[i + 0]) );
  }
  i3526.vectorParameters = i3532
  var i3535 = i3527[8]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3535[i + 0]) );
  }
  i3526.textureParameters = i3534
  var i3537 = i3527[9]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3537[i + 0]) );
  }
  i3526.materialFlags = i3536
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3541 = data
  i3540.name = i3541[0]
  i3540.value = i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3545 = data
  i3544.name = i3545[0]
  i3544.value = new pc.Color(i3545[1], i3545[2], i3545[3], i3545[4])
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3549 = data
  i3548.name = i3549[0]
  i3548.value = new pc.Vec4( i3549[1], i3549[2], i3549[3], i3549[4] )
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3553 = data
  i3552.name = i3553[0]
  request.r(i3553[1], i3553[2], 0, i3552, 'value')
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.enabled = !!i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3559 = data
  i3558.position = new pc.Vec3( i3559[0], i3559[1], i3559[2] )
  i3558.scale = new pc.Vec3( i3559[3], i3559[4], i3559[5] )
  i3558.rotation = new pc.Quat(i3559[6], i3559[7], i3559[8], i3559[9])
  return i3558
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i3560 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i3561 = data
  var i3563 = i3561[0]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 2) {
  request.r(i3563[i + 0], i3563[i + 1], 2, i3562, '')
  }
  i3560.m_LevelManagers = i3562
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'sharedMesh')
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'additionalVertexStreams')
  i3568.enabled = !!i3569[2]
  request.r(i3569[3], i3569[4], 0, i3568, 'sharedMaterial')
  var i3571 = i3569[5]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 2) {
  request.r(i3571[i + 0], i3571[i + 1], 2, i3570, '')
  }
  i3568.sharedMaterials = i3570
  i3568.receiveShadows = !!i3569[6]
  i3568.shadowCastingMode = i3569[7]
  i3568.sortingLayerID = i3569[8]
  i3568.sortingOrder = i3569[9]
  i3568.lightmapIndex = i3569[10]
  i3568.lightmapSceneIndex = i3569[11]
  i3568.lightmapScaleOffset = new pc.Vec4( i3569[12], i3569[13], i3569[14], i3569[15] )
  i3568.lightProbeUsage = i3569[16]
  i3568.reflectionProbeUsage = i3569[17]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3573 = data
  i3572.enabled = !!i3573[0]
  i3572.isTrigger = !!i3573[1]
  request.r(i3573[2], i3573[3], 0, i3572, 'material')
  i3572.center = new pc.Vec3( i3573[4], i3573[5], i3573[6] )
  i3572.radius = i3573[7]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3575 = data
  i3574.mass = i3575[0]
  i3574.drag = i3575[1]
  i3574.angularDrag = i3575[2]
  i3574.useGravity = !!i3575[3]
  i3574.isKinematic = !!i3575[4]
  i3574.constraints = i3575[5]
  i3574.maxAngularVelocity = i3575[6]
  i3574.collisionDetectionMode = i3575[7]
  i3574.interpolation = i3575[8]
  return i3574
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i3576 = root || request.c( 'PlayerController' )
  var i3577 = data
  i3576.moveForce = i3577[0]
  i3576.maxSpeed = i3577[1]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3579 = data
  i3578.name = i3579[0]
  i3578.halfPrecision = !!i3579[1]
  i3578.useUInt32IndexFormat = !!i3579[2]
  i3578.vertexCount = i3579[3]
  i3578.aabb = i3579[4]
  var i3581 = i3579[5]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 1) {
    i3580.push( !!i3581[i + 0] );
  }
  i3578.streams = i3580
  i3578.vertices = i3579[6]
  var i3583 = i3579[7]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3583[i + 0]) );
  }
  i3578.subMeshes = i3582
  var i3585 = i3579[8]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 16) {
    i3584.push( new pc.Mat4().setData(i3585[i + 0], i3585[i + 1], i3585[i + 2], i3585[i + 3],  i3585[i + 4], i3585[i + 5], i3585[i + 6], i3585[i + 7],  i3585[i + 8], i3585[i + 9], i3585[i + 10], i3585[i + 11],  i3585[i + 12], i3585[i + 13], i3585[i + 14], i3585[i + 15]) );
  }
  i3578.bindposes = i3584
  var i3587 = i3579[9]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3587[i + 0]) );
  }
  i3578.blendShapes = i3586
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3593 = data
  i3592.triangles = i3593[0]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3599 = data
  i3598.name = i3599[0]
  var i3601 = i3599[1]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 1) {
    i3600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3601[i + 0]) );
  }
  i3598.frames = i3600
  return i3598
}

Deserializers["InputManager"] = function (request, data, root) {
  var i3602 = root || request.c( 'InputManager' )
  var i3603 = data
  i3602.m_InputSensitivity = i3603[0]
  return i3602
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i3604 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i3605 = data
  i3604.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3605[0], i3604.m_GoldEventListener)
  i3604.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3605[1], i3604.m_KeyEventListener)
  i3604.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i3605[2], i3604.m_WinEventListener)
  return i3604
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i3606 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i3607 = data
  request.r(i3607[0], i3607[1], 0, i3606, 'm_Event')
  return i3606
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i3608 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i3609 = data
  return i3608
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i3610 = root || request.c( 'CoinEffectMove' )
  var i3611 = data
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3613 = data
  i3612.center = new pc.Vec3( i3613[0], i3613[1], i3613[2] )
  i3612.size = new pc.Vec3( i3613[3], i3613[4], i3613[5] )
  i3612.enabled = !!i3613[6]
  i3612.isTrigger = !!i3613[7]
  request.r(i3613[8], i3613[9], 0, i3612, 'material')
  return i3612
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i3614 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i3615 = data
  i3614.m_GateType = i3615[0]
  i3614.m_Value = i3615[1]
  request.r(i3615[2], i3615[3], 0, i3614, 'm_Text')
  i3614.m_SnapToGrid = !!i3615[4]
  return i3614
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3616 = root || request.c( 'TMPro.TextMeshPro' )
  var i3617 = data
  i3616._SortingLayer = i3617[0]
  i3616._SortingLayerID = i3617[1]
  i3616._SortingOrder = i3617[2]
  i3616.m_hasFontAssetChanged = !!i3617[3]
  request.r(i3617[4], i3617[5], 0, i3616, 'm_renderer')
  i3616.m_maskType = i3617[6]
  i3616.m_text = i3617[7]
  i3616.m_isRightToLeft = !!i3617[8]
  request.r(i3617[9], i3617[10], 0, i3616, 'm_fontAsset')
  request.r(i3617[11], i3617[12], 0, i3616, 'm_sharedMaterial')
  var i3619 = i3617[13]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 2) {
  request.r(i3619[i + 0], i3619[i + 1], 2, i3618, '')
  }
  i3616.m_fontSharedMaterials = i3618
  request.r(i3617[14], i3617[15], 0, i3616, 'm_fontMaterial')
  var i3621 = i3617[16]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 2, i3620, '')
  }
  i3616.m_fontMaterials = i3620
  i3616.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3617[17], i3617[18], i3617[19], i3617[20])
  i3616.m_fontColor = new pc.Color(i3617[21], i3617[22], i3617[23], i3617[24])
  i3616.m_enableVertexGradient = !!i3617[25]
  i3616.m_colorMode = i3617[26]
  i3616.m_fontColorGradient = request.d('TMPro.VertexGradient', i3617[27], i3616.m_fontColorGradient)
  request.r(i3617[28], i3617[29], 0, i3616, 'm_fontColorGradientPreset')
  request.r(i3617[30], i3617[31], 0, i3616, 'm_spriteAsset')
  i3616.m_tintAllSprites = !!i3617[32]
  request.r(i3617[33], i3617[34], 0, i3616, 'm_StyleSheet')
  i3616.m_TextStyleHashCode = i3617[35]
  i3616.m_overrideHtmlColors = !!i3617[36]
  i3616.m_faceColor = UnityEngine.Color32.ConstructColor(i3617[37], i3617[38], i3617[39], i3617[40])
  i3616.m_fontSize = i3617[41]
  i3616.m_fontSizeBase = i3617[42]
  i3616.m_fontWeight = i3617[43]
  i3616.m_enableAutoSizing = !!i3617[44]
  i3616.m_fontSizeMin = i3617[45]
  i3616.m_fontSizeMax = i3617[46]
  i3616.m_fontStyle = i3617[47]
  i3616.m_HorizontalAlignment = i3617[48]
  i3616.m_VerticalAlignment = i3617[49]
  i3616.m_textAlignment = i3617[50]
  i3616.m_characterSpacing = i3617[51]
  i3616.m_wordSpacing = i3617[52]
  i3616.m_lineSpacing = i3617[53]
  i3616.m_lineSpacingMax = i3617[54]
  i3616.m_paragraphSpacing = i3617[55]
  i3616.m_charWidthMaxAdj = i3617[56]
  i3616.m_enableWordWrapping = !!i3617[57]
  i3616.m_wordWrappingRatios = i3617[58]
  i3616.m_overflowMode = i3617[59]
  request.r(i3617[60], i3617[61], 0, i3616, 'm_linkedTextComponent')
  request.r(i3617[62], i3617[63], 0, i3616, 'parentLinkedComponent')
  i3616.m_enableKerning = !!i3617[64]
  i3616.m_enableExtraPadding = !!i3617[65]
  i3616.checkPaddingRequired = !!i3617[66]
  i3616.m_isRichText = !!i3617[67]
  i3616.m_parseCtrlCharacters = !!i3617[68]
  i3616.m_isOrthographic = !!i3617[69]
  i3616.m_isCullingEnabled = !!i3617[70]
  i3616.m_horizontalMapping = i3617[71]
  i3616.m_verticalMapping = i3617[72]
  i3616.m_uvLineOffset = i3617[73]
  i3616.m_geometrySortingOrder = i3617[74]
  i3616.m_IsTextObjectScaleStatic = !!i3617[75]
  i3616.m_VertexBufferAutoSizeReduction = !!i3617[76]
  i3616.m_useMaxVisibleDescender = !!i3617[77]
  i3616.m_pageToDisplay = i3617[78]
  i3616.m_margin = new pc.Vec4( i3617[79], i3617[80], i3617[81], i3617[82] )
  i3616.m_isUsingLegacyAnimationComponent = !!i3617[83]
  i3616.m_isVolumetricText = !!i3617[84]
  request.r(i3617[85], i3617[86], 0, i3616, 'm_Material')
  i3616.m_Maskable = !!i3617[87]
  i3616.m_Color = new pc.Color(i3617[88], i3617[89], i3617[90], i3617[91])
  i3616.m_RaycastTarget = !!i3617[92]
  i3616.m_RaycastPadding = new pc.Vec4( i3617[93], i3617[94], i3617[95], i3617[96] )
  return i3616
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i3622 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'm_Event')
  i3622.m_Count = i3623[2]
  i3622.m_Sound = i3623[3]
  i3622.m_Particle = i3623[4]
  i3622.m_SnapToGrid = !!i3623[5]
  return i3622
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i3624 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i3625 = data
  i3624.UsePositionBasedOffset = !!i3625[0]
  i3624.PositionBasedScale = i3625[1]
  i3624.Bob = !!i3625[2]
  i3624.BobSpeed = i3625[3]
  i3624.BobHeight = i3625[4]
  i3624.Spin = !!i3625[5]
  i3624.SpinSpeed = i3625[6]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3627 = data
  i3626.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3627[0], i3626.main)
  i3626.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3627[1], i3626.colorBySpeed)
  i3626.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3627[2], i3626.colorOverLifetime)
  i3626.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3627[3], i3626.emission)
  i3626.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3627[4], i3626.rotationBySpeed)
  i3626.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3627[5], i3626.rotationOverLifetime)
  i3626.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3627[6], i3626.shape)
  i3626.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3627[7], i3626.sizeBySpeed)
  i3626.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3627[8], i3626.sizeOverLifetime)
  i3626.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3627[9], i3626.textureSheetAnimation)
  i3626.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3627[10], i3626.velocityOverLifetime)
  i3626.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3627[11], i3626.noise)
  i3626.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3627[12], i3626.inheritVelocity)
  i3626.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3627[13], i3626.forceOverLifetime)
  i3626.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3627[14], i3626.limitVelocityOverLifetime)
  i3626.useAutoRandomSeed = !!i3627[15]
  i3626.randomSeed = i3627[16]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3628 = root || new pc.ParticleSystemMain()
  var i3629 = data
  i3628.duration = i3629[0]
  i3628.loop = !!i3629[1]
  i3628.prewarm = !!i3629[2]
  i3628.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[3], i3628.startDelay)
  i3628.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[4], i3628.startLifetime)
  i3628.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[5], i3628.startSpeed)
  i3628.startSize3D = !!i3629[6]
  i3628.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[7], i3628.startSizeX)
  i3628.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[8], i3628.startSizeY)
  i3628.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[9], i3628.startSizeZ)
  i3628.startRotation3D = !!i3629[10]
  i3628.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[11], i3628.startRotationX)
  i3628.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[12], i3628.startRotationY)
  i3628.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[13], i3628.startRotationZ)
  i3628.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3629[14], i3628.startColor)
  i3628.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[15], i3628.gravityModifier)
  i3628.simulationSpace = i3629[16]
  request.r(i3629[17], i3629[18], 0, i3628, 'customSimulationSpace')
  i3628.simulationSpeed = i3629[19]
  i3628.useUnscaledTime = !!i3629[20]
  i3628.scalingMode = i3629[21]
  i3628.playOnAwake = !!i3629[22]
  i3628.maxParticles = i3629[23]
  i3628.emitterVelocityMode = i3629[24]
  i3628.stopAction = i3629[25]
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3630 = root || new pc.MinMaxCurve()
  var i3631 = data
  i3630.mode = i3631[0]
  i3630.curveMin = new pc.AnimationCurve( { keys_flow: i3631[1] } )
  i3630.curveMax = new pc.AnimationCurve( { keys_flow: i3631[2] } )
  i3630.curveMultiplier = i3631[3]
  i3630.constantMin = i3631[4]
  i3630.constantMax = i3631[5]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3632 = root || new pc.MinMaxGradient()
  var i3633 = data
  i3632.mode = i3633[0]
  i3632.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3633[1], i3632.gradientMin)
  i3632.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3633[2], i3632.gradientMax)
  i3632.colorMin = new pc.Color(i3633[3], i3633[4], i3633[5], i3633[6])
  i3632.colorMax = new pc.Color(i3633[7], i3633[8], i3633[9], i3633[10])
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3635 = data
  i3634.mode = i3635[0]
  var i3637 = i3635[1]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3637[i + 0]) );
  }
  i3634.colorKeys = i3636
  var i3639 = i3635[2]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3639[i + 0]) );
  }
  i3634.alphaKeys = i3638
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3640 = root || new pc.ParticleSystemColorBySpeed()
  var i3641 = data
  i3640.enabled = !!i3641[0]
  i3640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3641[1], i3640.color)
  i3640.range = new pc.Vec2( i3641[2], i3641[3] )
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3645 = data
  i3644.color = new pc.Color(i3645[0], i3645[1], i3645[2], i3645[3])
  i3644.time = i3645[4]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3649 = data
  i3648.alpha = i3649[0]
  i3648.time = i3649[1]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3650 = root || new pc.ParticleSystemColorOverLifetime()
  var i3651 = data
  i3650.enabled = !!i3651[0]
  i3650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3651[1], i3650.color)
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3652 = root || new pc.ParticleSystemEmitter()
  var i3653 = data
  i3652.enabled = !!i3653[0]
  i3652.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3653[1], i3652.rateOverTime)
  i3652.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3653[2], i3652.rateOverDistance)
  var i3655 = i3653[3]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3655[i + 0]) );
  }
  i3652.bursts = i3654
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3658 = root || new pc.ParticleSystemBurst()
  var i3659 = data
  i3658.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3659[0], i3658.count)
  i3658.cycleCount = i3659[1]
  i3658.minCount = i3659[2]
  i3658.maxCount = i3659[3]
  i3658.repeatInterval = i3659[4]
  i3658.time = i3659[5]
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3660 = root || new pc.ParticleSystemRotationBySpeed()
  var i3661 = data
  i3660.enabled = !!i3661[0]
  i3660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[1], i3660.x)
  i3660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[2], i3660.y)
  i3660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3661[3], i3660.z)
  i3660.separateAxes = !!i3661[4]
  i3660.range = new pc.Vec2( i3661[5], i3661[6] )
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3662 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3663 = data
  i3662.enabled = !!i3663[0]
  i3662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[1], i3662.x)
  i3662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[2], i3662.y)
  i3662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3663[3], i3662.z)
  i3662.separateAxes = !!i3663[4]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3664 = root || new pc.ParticleSystemShape()
  var i3665 = data
  i3664.enabled = !!i3665[0]
  i3664.shapeType = i3665[1]
  i3664.randomDirectionAmount = i3665[2]
  i3664.sphericalDirectionAmount = i3665[3]
  i3664.randomPositionAmount = i3665[4]
  i3664.alignToDirection = !!i3665[5]
  i3664.radius = i3665[6]
  i3664.radiusMode = i3665[7]
  i3664.radiusSpread = i3665[8]
  i3664.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[9], i3664.radiusSpeed)
  i3664.radiusThickness = i3665[10]
  i3664.angle = i3665[11]
  i3664.length = i3665[12]
  i3664.boxThickness = new pc.Vec3( i3665[13], i3665[14], i3665[15] )
  i3664.meshShapeType = i3665[16]
  request.r(i3665[17], i3665[18], 0, i3664, 'mesh')
  request.r(i3665[19], i3665[20], 0, i3664, 'meshRenderer')
  request.r(i3665[21], i3665[22], 0, i3664, 'skinnedMeshRenderer')
  i3664.useMeshMaterialIndex = !!i3665[23]
  i3664.meshMaterialIndex = i3665[24]
  i3664.useMeshColors = !!i3665[25]
  i3664.normalOffset = i3665[26]
  i3664.arc = i3665[27]
  i3664.arcMode = i3665[28]
  i3664.arcSpread = i3665[29]
  i3664.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3665[30], i3664.arcSpeed)
  i3664.donutRadius = i3665[31]
  i3664.position = new pc.Vec3( i3665[32], i3665[33], i3665[34] )
  i3664.rotation = new pc.Vec3( i3665[35], i3665[36], i3665[37] )
  i3664.scale = new pc.Vec3( i3665[38], i3665[39], i3665[40] )
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3666 = root || new pc.ParticleSystemSizeBySpeed()
  var i3667 = data
  i3666.enabled = !!i3667[0]
  i3666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[1], i3666.x)
  i3666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[2], i3666.y)
  i3666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3667[3], i3666.z)
  i3666.separateAxes = !!i3667[4]
  i3666.range = new pc.Vec2( i3667[5], i3667[6] )
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3668 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3669 = data
  i3668.enabled = !!i3669[0]
  i3668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[1], i3668.x)
  i3668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[2], i3668.y)
  i3668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3669[3], i3668.z)
  i3668.separateAxes = !!i3669[4]
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3670 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3671 = data
  i3670.enabled = !!i3671[0]
  i3670.mode = i3671[1]
  i3670.animation = i3671[2]
  i3670.numTilesX = i3671[3]
  i3670.numTilesY = i3671[4]
  i3670.useRandomRow = !!i3671[5]
  i3670.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3671[6], i3670.frameOverTime)
  i3670.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3671[7], i3670.startFrame)
  i3670.cycleCount = i3671[8]
  i3670.rowIndex = i3671[9]
  i3670.flipU = i3671[10]
  i3670.flipV = i3671[11]
  i3670.spriteCount = i3671[12]
  var i3673 = i3671[13]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 2) {
  request.r(i3673[i + 0], i3673[i + 1], 2, i3672, '')
  }
  i3670.sprites = i3672
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3676 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3677 = data
  i3676.enabled = !!i3677[0]
  i3676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[1], i3676.x)
  i3676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[2], i3676.y)
  i3676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[3], i3676.z)
  i3676.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[4], i3676.radial)
  i3676.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[5], i3676.speedModifier)
  i3676.space = i3677[6]
  i3676.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[7], i3676.orbitalX)
  i3676.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[8], i3676.orbitalY)
  i3676.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[9], i3676.orbitalZ)
  i3676.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[10], i3676.orbitalOffsetX)
  i3676.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[11], i3676.orbitalOffsetY)
  i3676.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3677[12], i3676.orbitalOffsetZ)
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3678 = root || new pc.ParticleSystemNoise()
  var i3679 = data
  i3678.enabled = !!i3679[0]
  i3678.separateAxes = !!i3679[1]
  i3678.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[2], i3678.strengthX)
  i3678.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[3], i3678.strengthY)
  i3678.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[4], i3678.strengthZ)
  i3678.frequency = i3679[5]
  i3678.damping = !!i3679[6]
  i3678.octaveCount = i3679[7]
  i3678.octaveMultiplier = i3679[8]
  i3678.octaveScale = i3679[9]
  i3678.quality = i3679[10]
  i3678.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[11], i3678.scrollSpeed)
  i3678.scrollSpeedMultiplier = i3679[12]
  i3678.remapEnabled = !!i3679[13]
  i3678.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[14], i3678.remapX)
  i3678.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[15], i3678.remapY)
  i3678.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[16], i3678.remapZ)
  i3678.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[17], i3678.positionAmount)
  i3678.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[18], i3678.rotationAmount)
  i3678.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3679[19], i3678.sizeAmount)
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3680 = root || new pc.ParticleSystemInheritVelocity()
  var i3681 = data
  i3680.enabled = !!i3681[0]
  i3680.mode = i3681[1]
  i3680.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3681[2], i3680.curve)
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3682 = root || new pc.ParticleSystemForceOverLifetime()
  var i3683 = data
  i3682.enabled = !!i3683[0]
  i3682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[1], i3682.x)
  i3682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[2], i3682.y)
  i3682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3683[3], i3682.z)
  i3682.space = i3683[4]
  i3682.randomized = !!i3683[5]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3684 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3685 = data
  i3684.enabled = !!i3685[0]
  i3684.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[1], i3684.limit)
  i3684.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[2], i3684.limitX)
  i3684.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[3], i3684.limitY)
  i3684.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[4], i3684.limitZ)
  i3684.dampen = i3685[5]
  i3684.separateAxes = !!i3685[6]
  i3684.space = i3685[7]
  i3684.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3685[8], i3684.drag)
  i3684.multiplyDragByParticleSize = !!i3685[9]
  i3684.multiplyDragByParticleVelocity = !!i3685[10]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3687 = data
  i3686.enabled = !!i3687[0]
  request.r(i3687[1], i3687[2], 0, i3686, 'sharedMaterial')
  var i3689 = i3687[3]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 2) {
  request.r(i3689[i + 0], i3689[i + 1], 2, i3688, '')
  }
  i3686.sharedMaterials = i3688
  i3686.receiveShadows = !!i3687[4]
  i3686.shadowCastingMode = i3687[5]
  i3686.sortingLayerID = i3687[6]
  i3686.sortingOrder = i3687[7]
  i3686.lightmapIndex = i3687[8]
  i3686.lightmapSceneIndex = i3687[9]
  i3686.lightmapScaleOffset = new pc.Vec4( i3687[10], i3687[11], i3687[12], i3687[13] )
  i3686.lightProbeUsage = i3687[14]
  i3686.reflectionProbeUsage = i3687[15]
  request.r(i3687[16], i3687[17], 0, i3686, 'mesh')
  i3686.meshCount = i3687[18]
  i3686.activeVertexStreamsCount = i3687[19]
  i3686.alignment = i3687[20]
  i3686.renderMode = i3687[21]
  i3686.sortMode = i3687[22]
  i3686.lengthScale = i3687[23]
  i3686.velocityScale = i3687[24]
  i3686.cameraVelocityScale = i3687[25]
  i3686.normalDirection = i3687[26]
  i3686.sortingFudge = i3687[27]
  i3686.minParticleSize = i3687[28]
  i3686.maxParticleSize = i3687[29]
  i3686.pivot = new pc.Vec3( i3687[30], i3687[31], i3687[32] )
  request.r(i3687[33], i3687[34], 0, i3686, 'trailMaterial')
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3691 = data
  i3690.name = i3691[0]
  i3690.atlasId = i3691[1]
  i3690.mipmapCount = i3691[2]
  i3690.hdr = !!i3691[3]
  i3690.size = i3691[4]
  i3690.anisoLevel = i3691[5]
  i3690.filterMode = i3691[6]
  var i3693 = i3691[7]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 4) {
    i3692.push( UnityEngine.Rect.MinMaxRect(i3693[i + 0], i3693[i + 1], i3693[i + 2], i3693[i + 3]) );
  }
  i3690.rects = i3692
  i3690.wrapU = i3691[8]
  i3690.wrapV = i3691[9]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3697 = data
  i3696.name = i3697[0]
  i3696.index = i3697[1]
  i3696.startup = !!i3697[2]
  return i3696
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i3698 = root || request.c( 'PlayableSettings' )
  var i3699 = data
  i3698.m_SkipMainMenu = !!i3699[0]
  i3698.m_UseCTAScreen = !!i3699[1]
  i3698.m_EndcardActivationSendsToStore = !!i3699[2]
  i3698.m_ShowEndcardAfterXTaps = !!i3699[3]
  i3698.m_TapsBeforeShowingEndcard = i3699[4]
  return i3698
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i3700 = root || request.c( 'SimpleDeactivateOnTap' )
  var i3701 = data
  return i3700
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3703 = data
  request.r(i3703[0], i3703[1], 0, i3702, 'm_FirstSelected')
  i3702.m_sendNavigationEvents = !!i3703[2]
  i3702.m_DragThreshold = i3703[3]
  return i3702
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3705 = data
  i3704.m_HorizontalAxis = i3705[0]
  i3704.m_VerticalAxis = i3705[1]
  i3704.m_SubmitButton = i3705[2]
  i3704.m_CancelButton = i3705[3]
  i3704.m_InputActionsPerSecond = i3705[4]
  i3704.m_RepeatDelay = i3705[5]
  i3704.m_ForceModuleActive = !!i3705[6]
  i3704.m_SendPointerHoverToParent = !!i3705[7]
  return i3704
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i3706 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i3707 = data
  request.r(i3707[0], i3707[1], 0, i3706, 'm_SequenceManagerPrefab')
  return i3706
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i3708 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'm_MusicSource')
  request.r(i3709[2], i3709[3], 0, i3708, 'm_EffectSource')
  i3708.m_MinSoundInterval = i3709[4]
  var i3711 = i3709[5]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i3711[i + 0]) );
  }
  i3708.m_Sounds = i3710
  return i3708
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i3714 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i3715 = data
  i3714.m_SoundID = i3715[0]
  request.r(i3715[1], i3715[2], 0, i3714, 'm_AudioClip')
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'clip')
  request.r(i3717[2], i3717[3], 0, i3716, 'outputAudioMixerGroup')
  i3716.playOnAwake = !!i3717[4]
  i3716.loop = !!i3717[5]
  i3716.time = i3717[6]
  i3716.volume = i3717[7]
  i3716.pitch = i3717[8]
  i3716.enabled = !!i3717[9]
  return i3716
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i3718 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'm_Canvas')
  request.r(i3719[2], i3719[3], 0, i3718, 'm_Root')
  request.r(i3719[4], i3719[5], 0, i3718, 'm_ViewLayer')
  return i3718
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i3720 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i3721 = data
  request.r(i3721[0], i3721[1], 0, i3720, 'm_GoldText')
  var i3723 = i3721[2]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 2) {
  request.r(i3723[i + 0], i3723[i + 1], 2, i3722, '')
  }
  i3720.Keys = i3722
  i3720.gainKeyColor = new pc.Color(i3721[3], i3721[4], i3721[5], i3721[6])
  return i3720
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i3726 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'm_LoseEvent')
  return i3726
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i3728 = root || request.c( 'CollectableParticleManager' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'keyParticlePrefab')
  request.r(i3729[2], i3729[3], 0, i3728, 'coinParticlePrefab')
  i3728.keyParticleCount = i3729[4]
  i3728.coinParticlesCount = i3729[5]
  return i3728
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i3730 = root || request.c( 'CheerPhraseController' )
  var i3731 = data
  var i3733 = i3731[0]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( i3733[i + 0] );
  }
  i3730.phrases = i3732
  i3730.cheerPhraseColour = new pc.Color(i3731[1], i3731[2], i3731[3], i3731[4])
  request.r(i3731[5], i3731[6], 0, i3730, 'cheerText')
  request.r(i3731[7], i3731[8], 0, i3730, 'cheerTextAnimator')
  request.r(i3731[9], i3731[10], 0, i3730, 'keyCollectEvent')
  return i3730
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i3736 = root || request.c( 'OutroAnimationController' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'winEvent')
  i3736.endCardDelay = i3737[2]
  var i3739 = i3737[3]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3736.confettiParticles = i3738
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3743 = data
  i3742.enabled = !!i3743[0]
  i3742.aspect = i3743[1]
  i3742.orthographic = !!i3743[2]
  i3742.orthographicSize = i3743[3]
  i3742.backgroundColor = new pc.Color(i3743[4], i3743[5], i3743[6], i3743[7])
  i3742.nearClipPlane = i3743[8]
  i3742.farClipPlane = i3743[9]
  i3742.fieldOfView = i3743[10]
  i3742.depth = i3743[11]
  i3742.clearFlags = i3743[12]
  i3742.cullingMask = i3743[13]
  i3742.rect = i3743[14]
  request.r(i3743[15], i3743[16], 0, i3742, 'targetTexture')
  i3742.usePhysicalProperties = !!i3743[17]
  i3742.focalLength = i3743[18]
  i3742.sensorSize = new pc.Vec2( i3743[19], i3743[20] )
  i3742.lensShift = new pc.Vec2( i3743[21], i3743[22] )
  i3742.gateFit = i3743[23]
  i3742.commandBufferCount = i3743[24]
  i3742.cameraType = i3743[25]
  return i3742
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i3744 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'targetPlayer')
  i3744.m_CameraAnglePreset = i3745[2]
  i3744.m_Offset = new pc.Vec3( i3745[3], i3745[4], i3745[5] )
  i3744.m_LookAtOffset = new pc.Vec3( i3745[6], i3745[7], i3745[8] )
  i3744.m_LockCameraPosition = !!i3745[9]
  i3744.m_SmoothCameraFollow = !!i3745[10]
  i3744.m_SmoothCameraFollowStrength = i3745[11]
  return i3744
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i3746 = root || request.c( 'CoinEffectManager' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'coinEffectPrefab')
  request.r(i3747[2], i3747[3], 0, i3746, 'coinCounter')
  request.r(i3747[4], i3747[5], 0, i3746, 'player')
  i3746.speed = i3747[6]
  request.r(i3747[7], i3747[8], 0, i3746, 'm_CoinEvent')
  i3746.effectPoolCount = i3747[9]
  i3746.offsetZ = i3747[10]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3749 = data
  i3748.enabled = !!i3749[0]
  i3748.type = i3749[1]
  i3748.color = new pc.Color(i3749[2], i3749[3], i3749[4], i3749[5])
  i3748.cullingMask = i3749[6]
  i3748.intensity = i3749[7]
  i3748.range = i3749[8]
  i3748.spotAngle = i3749[9]
  i3748.shadows = i3749[10]
  i3748.shadowNormalBias = i3749[11]
  i3748.shadowBias = i3749[12]
  i3748.shadowStrength = i3749[13]
  i3748.shadowResolution = i3749[14]
  i3748.lightmapBakeType = i3749[15]
  i3748.renderMode = i3749[16]
  request.r(i3749[17], i3749[18], 0, i3748, 'cookie')
  i3748.cookieSize = i3749[19]
  return i3748
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i3750 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i3751 = data
  return i3750
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i3752 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'm_WinEvent')
  i3752.m_SnapToGrid = !!i3753[2]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3755 = data
  i3754.enabled = !!i3755[0]
  i3754.isTrigger = !!i3755[1]
  request.r(i3755[2], i3755[3], 0, i3754, 'material')
  request.r(i3755[4], i3755[5], 0, i3754, 'sharedMesh')
  i3754.convex = !!i3755[6]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3757 = data
  i3756.ambientIntensity = i3757[0]
  i3756.reflectionIntensity = i3757[1]
  i3756.ambientMode = i3757[2]
  i3756.ambientLight = new pc.Color(i3757[3], i3757[4], i3757[5], i3757[6])
  i3756.ambientSkyColor = new pc.Color(i3757[7], i3757[8], i3757[9], i3757[10])
  i3756.ambientGroundColor = new pc.Color(i3757[11], i3757[12], i3757[13], i3757[14])
  i3756.ambientEquatorColor = new pc.Color(i3757[15], i3757[16], i3757[17], i3757[18])
  i3756.fogColor = new pc.Color(i3757[19], i3757[20], i3757[21], i3757[22])
  i3756.fogEndDistance = i3757[23]
  i3756.fogStartDistance = i3757[24]
  i3756.fogDensity = i3757[25]
  i3756.fog = !!i3757[26]
  request.r(i3757[27], i3757[28], 0, i3756, 'skybox')
  i3756.fogMode = i3757[29]
  var i3759 = i3757[30]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3759[i + 0]) );
  }
  i3756.lightmaps = i3758
  i3756.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3757[31], i3756.lightProbes)
  i3756.lightmapsMode = i3757[32]
  i3756.mixedBakeMode = i3757[33]
  i3756.environmentLightingMode = i3757[34]
  i3756.ambientProbe = new pc.SphericalHarmonicsL2(i3757[35])
  i3756.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3757[36])
  i3756.useReferenceAmbientProbe = !!i3757[37]
  request.r(i3757[38], i3757[39], 0, i3756, 'customReflection')
  request.r(i3757[40], i3757[41], 0, i3756, 'defaultReflection')
  i3756.defaultReflectionMode = i3757[42]
  i3756.defaultReflectionResolution = i3757[43]
  i3756.sunLightObjectId = i3757[44]
  i3756.pixelLightCount = i3757[45]
  i3756.defaultReflectionHDR = !!i3757[46]
  i3756.hasLightDataAsset = !!i3757[47]
  i3756.hasManualGenerate = !!i3757[48]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3763 = data
  request.r(i3763[0], i3763[1], 0, i3762, 'lightmapColor')
  request.r(i3763[2], i3763[3], 0, i3762, 'lightmapDirection')
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3764 = root || new UnityEngine.LightProbes()
  var i3765 = data
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i3773 = data
  i3772.name = i3773[0]
  i3772.bounciness = i3773[1]
  i3772.dynamicFriction = i3773[2]
  i3772.staticFriction = i3773[3]
  i3772.frictionCombine = i3773[4]
  i3772.bounceCombine = i3773[5]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3775 = data
  var i3777 = i3775[0]
  var i3776 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3777[i + 0]));
  }
  i3774.ShaderCompilationErrors = i3776
  i3774.name = i3775[1]
  i3774.guid = i3775[2]
  var i3779 = i3775[3]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( i3779[i + 0] );
  }
  i3774.shaderDefinedKeywords = i3778
  var i3781 = i3775[4]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3781[i + 0]) );
  }
  i3774.passes = i3780
  var i3783 = i3775[5]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3783[i + 0]) );
  }
  i3774.usePasses = i3782
  var i3785 = i3775[6]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3785[i + 0]) );
  }
  i3774.defaultParameterValues = i3784
  request.r(i3775[7], i3775[8], 0, i3774, 'unityFallbackShader')
  i3774.readDepth = !!i3775[9]
  i3774.isCreatedByShaderGraph = !!i3775[10]
  i3774.compiled = !!i3775[11]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3789 = data
  i3788.shaderName = i3789[0]
  i3788.errorMessage = i3789[1]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3792 = root || new pc.UnityShaderPass()
  var i3793 = data
  i3792.id = i3793[0]
  i3792.subShaderIndex = i3793[1]
  i3792.name = i3793[2]
  i3792.passType = i3793[3]
  i3792.grabPassTextureName = i3793[4]
  i3792.usePass = !!i3793[5]
  i3792.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[6], i3792.zTest)
  i3792.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[7], i3792.zWrite)
  i3792.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[8], i3792.culling)
  i3792.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3793[9], i3792.blending)
  i3792.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3793[10], i3792.alphaBlending)
  i3792.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[11], i3792.colorWriteMask)
  i3792.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[12], i3792.offsetUnits)
  i3792.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[13], i3792.offsetFactor)
  i3792.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[14], i3792.stencilRef)
  i3792.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[15], i3792.stencilReadMask)
  i3792.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3793[16], i3792.stencilWriteMask)
  i3792.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3793[17], i3792.stencilOp)
  i3792.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3793[18], i3792.stencilOpFront)
  i3792.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3793[19], i3792.stencilOpBack)
  var i3795 = i3793[20]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3795[i + 0]) );
  }
  i3792.tags = i3794
  var i3797 = i3793[21]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 1) {
    i3796.push( i3797[i + 0] );
  }
  i3792.passDefinedKeywords = i3796
  var i3799 = i3793[22]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3799[i + 0]) );
  }
  i3792.passDefinedKeywordGroups = i3798
  var i3801 = i3793[23]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3801[i + 0]) );
  }
  i3792.variants = i3800
  var i3803 = i3793[24]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 1) {
    i3802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3803[i + 0]) );
  }
  i3792.excludedVariants = i3802
  i3792.hasDepthReader = !!i3793[25]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3805 = data
  i3804.val = i3805[0]
  i3804.name = i3805[1]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3807 = data
  i3806.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3807[0], i3806.src)
  i3806.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3807[1], i3806.dst)
  i3806.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3807[2], i3806.op)
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3809 = data
  i3808.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3809[0], i3808.pass)
  i3808.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3809[1], i3808.fail)
  i3808.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3809[2], i3808.zFail)
  i3808.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3809[3], i3808.comp)
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3813 = data
  i3812.name = i3813[0]
  i3812.value = i3813[1]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3817 = data
  var i3819 = i3817[0]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( i3819[i + 0] );
  }
  i3816.keywords = i3818
  i3816.hasDiscard = !!i3817[1]
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3823 = data
  i3822.passId = i3823[0]
  i3822.subShaderIndex = i3823[1]
  var i3825 = i3823[2]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( i3825[i + 0] );
  }
  i3822.keywords = i3824
  i3822.vertexProgram = i3823[3]
  i3822.fragmentProgram = i3823[4]
  i3822.exportedForWebGl2 = !!i3823[5]
  i3822.readDepth = !!i3823[6]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3829 = data
  request.r(i3829[0], i3829[1], 0, i3828, 'shader')
  i3828.pass = i3829[2]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3833 = data
  i3832.name = i3833[0]
  i3832.type = i3833[1]
  i3832.value = new pc.Vec4( i3833[2], i3833[3], i3833[4], i3833[5] )
  i3832.textureValue = i3833[6]
  i3832.shaderPropertyFlag = i3833[7]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3835 = data
  i3834.name = i3835[0]
  request.r(i3835[1], i3835[2], 0, i3834, 'texture')
  i3834.aabb = i3835[3]
  i3834.vertices = i3835[4]
  i3834.triangles = i3835[5]
  i3834.textureRect = UnityEngine.Rect.MinMaxRect(i3835[6], i3835[7], i3835[8], i3835[9])
  i3834.packedRect = UnityEngine.Rect.MinMaxRect(i3835[10], i3835[11], i3835[12], i3835[13])
  i3834.border = new pc.Vec4( i3835[14], i3835[15], i3835[16], i3835[17] )
  i3834.transparency = i3835[18]
  i3834.bounds = i3835[19]
  i3834.pixelsPerUnit = i3835[20]
  i3834.textureWidth = i3835[21]
  i3834.textureHeight = i3835[22]
  i3834.nativeSize = new pc.Vec2( i3835[23], i3835[24] )
  i3834.pivot = new pc.Vec2( i3835[25], i3835[26] )
  i3834.textureRectOffset = new pc.Vec2( i3835[27], i3835[28] )
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3837 = data
  i3836.name = i3837[0]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.wrapMode = i3839[1]
  i3838.isLooping = !!i3839[2]
  i3838.length = i3839[3]
  var i3841 = i3839[4]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3841[i + 0]) );
  }
  i3838.curves = i3840
  var i3843 = i3839[5]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3843[i + 0]) );
  }
  i3838.events = i3842
  i3838.halfPrecision = !!i3839[6]
  i3838._frameRate = i3839[7]
  i3838.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3839[8], i3838.localBounds)
  i3838.hasMuscleCurves = !!i3839[9]
  var i3845 = i3839[10]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( i3845[i + 0] );
  }
  i3838.clipMuscleConstant = i3844
  i3838.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3839[11], i3838.clipBindingConstant)
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3849 = data
  i3848.path = i3849[0]
  i3848.hash = i3849[1]
  i3848.componentType = i3849[2]
  i3848.property = i3849[3]
  i3848.keys = i3849[4]
  var i3851 = i3849[5]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3851[i + 0]) );
  }
  i3848.objectReferenceKeys = i3850
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3855 = data
  i3854.functionName = i3855[0]
  i3854.floatParameter = i3855[1]
  i3854.intParameter = i3855[2]
  i3854.stringParameter = i3855[3]
  request.r(i3855[4], i3855[5], 0, i3854, 'objectReferenceParameter')
  i3854.time = i3855[6]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3857 = data
  i3856.center = new pc.Vec3( i3857[0], i3857[1], i3857[2] )
  i3856.extends = new pc.Vec3( i3857[3], i3857[4], i3857[5] )
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3861 = data
  var i3863 = i3861[0]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( i3863[i + 0] );
  }
  i3860.genericBindings = i3862
  var i3865 = i3861[1]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( i3865[i + 0] );
  }
  i3860.pptrCurveMapping = i3864
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3869 = data
  i3868.time = i3869[0]
  request.r(i3869[1], i3869[2], 0, i3868, 'value')
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3871 = data
  i3870.name = i3871[0]
  i3870.ascent = i3871[1]
  i3870.originalLineHeight = i3871[2]
  i3870.fontSize = i3871[3]
  var i3873 = i3871[4]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3873[i + 0]) );
  }
  i3870.characterInfo = i3872
  request.r(i3871[5], i3871[6], 0, i3870, 'texture')
  i3870.originalFontSize = i3871[7]
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3877 = data
  i3876.index = i3877[0]
  i3876.advance = i3877[1]
  i3876.bearing = i3877[2]
  i3876.glyphWidth = i3877[3]
  i3876.glyphHeight = i3877[4]
  i3876.minX = i3877[5]
  i3876.maxX = i3877[6]
  i3876.minY = i3877[7]
  i3876.maxY = i3877[8]
  i3876.uvBottomLeftX = i3877[9]
  i3876.uvBottomLeftY = i3877[10]
  i3876.uvBottomRightX = i3877[11]
  i3876.uvBottomRightY = i3877[12]
  i3876.uvTopLeftX = i3877[13]
  i3876.uvTopLeftY = i3877[14]
  i3876.uvTopRightX = i3877[15]
  i3876.uvTopRightY = i3877[16]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3879 = data
  i3878.name = i3879[0]
  var i3881 = i3879[1]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3881[i + 0]) );
  }
  i3878.layers = i3880
  var i3883 = i3879[2]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3883[i + 0]) );
  }
  i3878.parameters = i3882
  i3878.animationClips = i3879[3]
  i3878.avatarUnsupported = i3879[4]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3887 = data
  i3886.name = i3887[0]
  i3886.defaultWeight = i3887[1]
  i3886.blendingMode = i3887[2]
  i3886.avatarMask = i3887[3]
  i3886.syncedLayerIndex = i3887[4]
  i3886.syncedLayerAffectsTiming = !!i3887[5]
  i3886.syncedLayers = i3887[6]
  i3886.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3887[7], i3886.stateMachine)
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3889 = data
  i3888.id = i3889[0]
  i3888.name = i3889[1]
  i3888.path = i3889[2]
  var i3891 = i3889[3]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3891[i + 0]) );
  }
  i3888.states = i3890
  var i3893 = i3889[4]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3893[i + 0]) );
  }
  i3888.machines = i3892
  var i3895 = i3889[5]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3895[i + 0]) );
  }
  i3888.entryStateTransitions = i3894
  var i3897 = i3889[6]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3897[i + 0]) );
  }
  i3888.exitStateTransitions = i3896
  var i3899 = i3889[7]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3899[i + 0]) );
  }
  i3888.anyStateTransitions = i3898
  i3888.defaultStateId = i3889[8]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3903 = data
  i3902.id = i3903[0]
  i3902.name = i3903[1]
  i3902.cycleOffset = i3903[2]
  i3902.cycleOffsetParameter = i3903[3]
  i3902.cycleOffsetParameterActive = !!i3903[4]
  i3902.mirror = !!i3903[5]
  i3902.mirrorParameter = i3903[6]
  i3902.mirrorParameterActive = !!i3903[7]
  i3902.motionId = i3903[8]
  i3902.nameHash = i3903[9]
  i3902.fullPathHash = i3903[10]
  i3902.speed = i3903[11]
  i3902.speedParameter = i3903[12]
  i3902.speedParameterActive = !!i3903[13]
  i3902.tag = i3903[14]
  i3902.tagHash = i3903[15]
  i3902.writeDefaultValues = !!i3903[16]
  var i3905 = i3903[17]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 2) {
  request.r(i3905[i + 0], i3905[i + 1], 2, i3904, '')
  }
  i3902.behaviours = i3904
  var i3907 = i3903[18]
  var i3906 = []
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3907[i + 0]) );
  }
  i3902.transitions = i3906
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3913 = data
  i3912.fullPath = i3913[0]
  i3912.canTransitionToSelf = !!i3913[1]
  i3912.duration = i3913[2]
  i3912.exitTime = i3913[3]
  i3912.hasExitTime = !!i3913[4]
  i3912.hasFixedDuration = !!i3913[5]
  i3912.interruptionSource = i3913[6]
  i3912.offset = i3913[7]
  i3912.orderedInterruption = !!i3913[8]
  i3912.destinationStateId = i3913[9]
  i3912.isExit = !!i3913[10]
  i3912.mute = !!i3913[11]
  i3912.solo = !!i3913[12]
  var i3915 = i3913[13]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3915[i + 0]) );
  }
  i3912.conditions = i3914
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3919 = data
  i3918.mode = i3919[0]
  i3918.parameter = i3919[1]
  i3918.threshold = i3919[2]
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3925 = data
  i3924.destinationStateId = i3925[0]
  i3924.isExit = !!i3925[1]
  i3924.mute = !!i3925[2]
  i3924.solo = !!i3925[3]
  var i3927 = i3925[4]
  var i3926 = []
  for(var i = 0; i < i3927.length; i += 1) {
    i3926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3927[i + 0]) );
  }
  i3924.conditions = i3926
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3931 = data
  i3930.defaultBool = !!i3931[0]
  i3930.defaultFloat = i3931[1]
  i3930.defaultInt = i3931[2]
  i3930.name = i3931[3]
  i3930.nameHash = i3931[4]
  i3930.type = i3931[5]
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3933 = data
  i3932.name = i3933[0]
  i3932.bytes64 = i3933[1]
  i3932.data = i3933[2]
  return i3932
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3935 = data
  i3934.hashCode = i3935[0]
  request.r(i3935[1], i3935[2], 0, i3934, 'material')
  i3934.materialHashCode = i3935[3]
  request.r(i3935[4], i3935[5], 0, i3934, 'atlas')
  i3934.normalStyle = i3935[6]
  i3934.normalSpacingOffset = i3935[7]
  i3934.boldStyle = i3935[8]
  i3934.boldSpacing = i3935[9]
  i3934.italicStyle = i3935[10]
  i3934.tabSize = i3935[11]
  i3934.m_Version = i3935[12]
  i3934.m_SourceFontFileGUID = i3935[13]
  request.r(i3935[14], i3935[15], 0, i3934, 'm_SourceFontFile_EditorRef')
  request.r(i3935[16], i3935[17], 0, i3934, 'm_SourceFontFile')
  i3934.m_AtlasPopulationMode = i3935[18]
  i3934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3935[19], i3934.m_FaceInfo)
  var i3937 = i3935[20]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.add(request.d('UnityEngine.TextCore.Glyph', i3937[i + 0]));
  }
  i3934.m_GlyphTable = i3936
  var i3939 = i3935[21]
  var i3938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.add(request.d('TMPro.TMP_Character', i3939[i + 0]));
  }
  i3934.m_CharacterTable = i3938
  var i3941 = i3935[22]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 2) {
  request.r(i3941[i + 0], i3941[i + 1], 2, i3940, '')
  }
  i3934.m_AtlasTextures = i3940
  i3934.m_AtlasTextureIndex = i3935[23]
  i3934.m_IsMultiAtlasTexturesEnabled = !!i3935[24]
  i3934.m_ClearDynamicDataOnBuild = !!i3935[25]
  var i3943 = i3935[26]
  var i3942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.add(request.d('UnityEngine.TextCore.GlyphRect', i3943[i + 0]));
  }
  i3934.m_UsedGlyphRects = i3942
  var i3945 = i3935[27]
  var i3944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.add(request.d('UnityEngine.TextCore.GlyphRect', i3945[i + 0]));
  }
  i3934.m_FreeGlyphRects = i3944
  i3934.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3935[28], i3934.m_fontInfo)
  i3934.m_AtlasWidth = i3935[29]
  i3934.m_AtlasHeight = i3935[30]
  i3934.m_AtlasPadding = i3935[31]
  i3934.m_AtlasRenderMode = i3935[32]
  var i3947 = i3935[33]
  var i3946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.add(request.d('TMPro.TMP_Glyph', i3947[i + 0]));
  }
  i3934.m_glyphInfoList = i3946
  i3934.m_KerningTable = request.d('TMPro.KerningTable', i3935[34], i3934.m_KerningTable)
  i3934.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3935[35], i3934.m_FontFeatureTable)
  var i3949 = i3935[36]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3949.length; i += 2) {
  request.r(i3949[i + 0], i3949[i + 1], 1, i3948, '')
  }
  i3934.fallbackFontAssets = i3948
  var i3951 = i3935[37]
  var i3950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3951.length; i += 2) {
  request.r(i3951[i + 0], i3951[i + 1], 1, i3950, '')
  }
  i3934.m_FallbackFontAssetTable = i3950
  i3934.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3935[38], i3934.m_CreationSettings)
  var i3953 = i3935[39]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('TMPro.TMP_FontWeightPair', i3953[i + 0]) );
  }
  i3934.m_FontWeightTable = i3952
  var i3955 = i3935[40]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('TMPro.TMP_FontWeightPair', i3955[i + 0]) );
  }
  i3934.fontWeights = i3954
  return i3934
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3956 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3957 = data
  i3956.m_FaceIndex = i3957[0]
  i3956.m_FamilyName = i3957[1]
  i3956.m_StyleName = i3957[2]
  i3956.m_PointSize = i3957[3]
  i3956.m_Scale = i3957[4]
  i3956.m_UnitsPerEM = i3957[5]
  i3956.m_LineHeight = i3957[6]
  i3956.m_AscentLine = i3957[7]
  i3956.m_CapLine = i3957[8]
  i3956.m_MeanLine = i3957[9]
  i3956.m_Baseline = i3957[10]
  i3956.m_DescentLine = i3957[11]
  i3956.m_SuperscriptOffset = i3957[12]
  i3956.m_SuperscriptSize = i3957[13]
  i3956.m_SubscriptOffset = i3957[14]
  i3956.m_SubscriptSize = i3957[15]
  i3956.m_UnderlineOffset = i3957[16]
  i3956.m_UnderlineThickness = i3957[17]
  i3956.m_StrikethroughOffset = i3957[18]
  i3956.m_StrikethroughThickness = i3957[19]
  i3956.m_TabWidth = i3957[20]
  return i3956
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3961 = data
  i3960.m_Index = i3961[0]
  i3960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3961[1], i3960.m_Metrics)
  i3960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3961[2], i3960.m_GlyphRect)
  i3960.m_Scale = i3961[3]
  i3960.m_AtlasIndex = i3961[4]
  i3960.m_ClassDefinitionType = i3961[5]
  return i3960
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3963 = data
  i3962.m_Width = i3963[0]
  i3962.m_Height = i3963[1]
  i3962.m_HorizontalBearingX = i3963[2]
  i3962.m_HorizontalBearingY = i3963[3]
  i3962.m_HorizontalAdvance = i3963[4]
  return i3962
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3965 = data
  i3964.m_X = i3965[0]
  i3964.m_Y = i3965[1]
  i3964.m_Width = i3965[2]
  i3964.m_Height = i3965[3]
  return i3964
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3968 = root || request.c( 'TMPro.TMP_Character' )
  var i3969 = data
  i3968.m_ElementType = i3969[0]
  i3968.m_Unicode = i3969[1]
  i3968.m_GlyphIndex = i3969[2]
  i3968.m_Scale = i3969[3]
  return i3968
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3974 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3975 = data
  i3974.Name = i3975[0]
  i3974.PointSize = i3975[1]
  i3974.Scale = i3975[2]
  i3974.CharacterCount = i3975[3]
  i3974.LineHeight = i3975[4]
  i3974.Baseline = i3975[5]
  i3974.Ascender = i3975[6]
  i3974.CapHeight = i3975[7]
  i3974.Descender = i3975[8]
  i3974.CenterLine = i3975[9]
  i3974.SuperscriptOffset = i3975[10]
  i3974.SubscriptOffset = i3975[11]
  i3974.SubSize = i3975[12]
  i3974.Underline = i3975[13]
  i3974.UnderlineThickness = i3975[14]
  i3974.strikethrough = i3975[15]
  i3974.strikethroughThickness = i3975[16]
  i3974.TabWidth = i3975[17]
  i3974.Padding = i3975[18]
  i3974.AtlasWidth = i3975[19]
  i3974.AtlasHeight = i3975[20]
  return i3974
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3978 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3979 = data
  i3978.id = i3979[0]
  i3978.x = i3979[1]
  i3978.y = i3979[2]
  i3978.width = i3979[3]
  i3978.height = i3979[4]
  i3978.xOffset = i3979[5]
  i3978.yOffset = i3979[6]
  i3978.xAdvance = i3979[7]
  i3978.scale = i3979[8]
  return i3978
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3980 = root || request.c( 'TMPro.KerningTable' )
  var i3981 = data
  var i3983 = i3981[0]
  var i3982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.add(request.d('TMPro.KerningPair', i3983[i + 0]));
  }
  i3980.kerningPairs = i3982
  return i3980
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3986 = root || request.c( 'TMPro.KerningPair' )
  var i3987 = data
  i3986.xOffset = i3987[0]
  i3986.m_FirstGlyph = i3987[1]
  i3986.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3987[2], i3986.m_FirstGlyphAdjustments)
  i3986.m_SecondGlyph = i3987[3]
  i3986.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3987[4], i3986.m_SecondGlyphAdjustments)
  i3986.m_IgnoreSpacingAdjustments = !!i3987[5]
  return i3986
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3988 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3989 = data
  var i3991 = i3989[0]
  var i3990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3991[i + 0]));
  }
  i3988.m_GlyphPairAdjustmentRecords = i3990
  return i3988
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3994 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3995 = data
  i3994.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3995[0], i3994.m_FirstAdjustmentRecord)
  i3994.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3995[1], i3994.m_SecondAdjustmentRecord)
  i3994.m_FeatureLookupFlags = i3995[2]
  return i3994
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3996 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3997 = data
  i3996.m_GlyphIndex = i3997[0]
  i3996.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3997[1], i3996.m_GlyphValueRecord)
  return i3996
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3998 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3999 = data
  i3998.m_XPlacement = i3999[0]
  i3998.m_YPlacement = i3999[1]
  i3998.m_XAdvance = i3999[2]
  i3998.m_YAdvance = i3999[3]
  return i3998
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4003 = data
  i4002.sourceFontFileName = i4003[0]
  i4002.sourceFontFileGUID = i4003[1]
  i4002.pointSizeSamplingMode = i4003[2]
  i4002.pointSize = i4003[3]
  i4002.padding = i4003[4]
  i4002.packingMode = i4003[5]
  i4002.atlasWidth = i4003[6]
  i4002.atlasHeight = i4003[7]
  i4002.characterSetSelectionMode = i4003[8]
  i4002.characterSequence = i4003[9]
  i4002.referencedFontAssetGUID = i4003[10]
  i4002.referencedTextAssetGUID = i4003[11]
  i4002.fontStyle = i4003[12]
  i4002.fontStyleModifier = i4003[13]
  i4002.renderMode = i4003[14]
  i4002.includeFontFeatures = !!i4003[15]
  return i4002
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4006 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4007 = data
  request.r(i4007[0], i4007[1], 0, i4006, 'regularTypeface')
  request.r(i4007[2], i4007[3], 0, i4006, 'italicTypeface')
  return i4006
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i4008 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i4009 = data
  i4008.Count = i4009[0]
  return i4008
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i4010 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i4011 = data
  return i4010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4013 = data
  i4012.useSafeMode = !!i4013[0]
  i4012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4013[1], i4012.safeModeOptions)
  i4012.timeScale = i4013[2]
  i4012.unscaledTimeScale = i4013[3]
  i4012.useSmoothDeltaTime = !!i4013[4]
  i4012.maxSmoothUnscaledTime = i4013[5]
  i4012.rewindCallbackMode = i4013[6]
  i4012.showUnityEditorReport = !!i4013[7]
  i4012.logBehaviour = i4013[8]
  i4012.drawGizmos = !!i4013[9]
  i4012.defaultRecyclable = !!i4013[10]
  i4012.defaultAutoPlay = i4013[11]
  i4012.defaultUpdateType = i4013[12]
  i4012.defaultTimeScaleIndependent = !!i4013[13]
  i4012.defaultEaseType = i4013[14]
  i4012.defaultEaseOvershootOrAmplitude = i4013[15]
  i4012.defaultEasePeriod = i4013[16]
  i4012.defaultAutoKill = !!i4013[17]
  i4012.defaultLoopType = i4013[18]
  i4012.debugMode = !!i4013[19]
  i4012.debugStoreTargetId = !!i4013[20]
  i4012.showPreviewPanel = !!i4013[21]
  i4012.storeSettingsLocation = i4013[22]
  i4012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4013[23], i4012.modules)
  i4012.createASMDEF = !!i4013[24]
  i4012.showPlayingTweens = !!i4013[25]
  i4012.showPausedTweens = !!i4013[26]
  return i4012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4015 = data
  i4014.logBehaviour = i4015[0]
  i4014.nestedTweenFailureBehaviour = i4015[1]
  return i4014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4017 = data
  i4016.showPanel = !!i4017[0]
  i4016.audioEnabled = !!i4017[1]
  i4016.physicsEnabled = !!i4017[2]
  i4016.physics2DEnabled = !!i4017[3]
  i4016.spriteEnabled = !!i4017[4]
  i4016.uiEnabled = !!i4017[5]
  i4016.textMeshProEnabled = !!i4017[6]
  i4016.tk2DEnabled = !!i4017[7]
  i4016.deAudioEnabled = !!i4017[8]
  i4016.deUnityExtendedEnabled = !!i4017[9]
  i4016.epoOutlineEnabled = !!i4017[10]
  return i4016
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4018 = root || request.c( 'TMPro.TMP_Settings' )
  var i4019 = data
  i4018.m_enableWordWrapping = !!i4019[0]
  i4018.m_enableKerning = !!i4019[1]
  i4018.m_enableExtraPadding = !!i4019[2]
  i4018.m_enableTintAllSprites = !!i4019[3]
  i4018.m_enableParseEscapeCharacters = !!i4019[4]
  i4018.m_EnableRaycastTarget = !!i4019[5]
  i4018.m_GetFontFeaturesAtRuntime = !!i4019[6]
  i4018.m_missingGlyphCharacter = i4019[7]
  i4018.m_warningsDisabled = !!i4019[8]
  request.r(i4019[9], i4019[10], 0, i4018, 'm_defaultFontAsset')
  i4018.m_defaultFontAssetPath = i4019[11]
  i4018.m_defaultFontSize = i4019[12]
  i4018.m_defaultAutoSizeMinRatio = i4019[13]
  i4018.m_defaultAutoSizeMaxRatio = i4019[14]
  i4018.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4019[15], i4019[16] )
  i4018.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4019[17], i4019[18] )
  i4018.m_autoSizeTextContainer = !!i4019[19]
  i4018.m_IsTextObjectScaleStatic = !!i4019[20]
  var i4021 = i4019[21]
  var i4020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4021.length; i += 2) {
  request.r(i4021[i + 0], i4021[i + 1], 1, i4020, '')
  }
  i4018.m_fallbackFontAssets = i4020
  i4018.m_matchMaterialPreset = !!i4019[22]
  request.r(i4019[23], i4019[24], 0, i4018, 'm_defaultSpriteAsset')
  i4018.m_defaultSpriteAssetPath = i4019[25]
  i4018.m_enableEmojiSupport = !!i4019[26]
  i4018.m_MissingCharacterSpriteUnicode = i4019[27]
  i4018.m_defaultColorGradientPresetsPath = i4019[28]
  request.r(i4019[29], i4019[30], 0, i4018, 'm_defaultStyleSheet')
  i4018.m_StyleSheetsResourcePath = i4019[31]
  request.r(i4019[32], i4019[33], 0, i4018, 'm_leadingCharacters')
  request.r(i4019[34], i4019[35], 0, i4018, 'm_followingCharacters')
  i4018.m_UseModernHangulLineBreakingRules = !!i4019[36]
  return i4018
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4022 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4023 = data
  i4022.hashCode = i4023[0]
  request.r(i4023[1], i4023[2], 0, i4022, 'material')
  i4022.materialHashCode = i4023[3]
  request.r(i4023[4], i4023[5], 0, i4022, 'spriteSheet')
  var i4025 = i4023[6]
  var i4024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.add(request.d('TMPro.TMP_Sprite', i4025[i + 0]));
  }
  i4022.spriteInfoList = i4024
  var i4027 = i4023[7]
  var i4026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4027.length; i += 2) {
  request.r(i4027[i + 0], i4027[i + 1], 1, i4026, '')
  }
  i4022.fallbackSpriteAssets = i4026
  i4022.m_Version = i4023[8]
  i4022.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4023[9], i4022.m_FaceInfo)
  var i4029 = i4023[10]
  var i4028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.add(request.d('TMPro.TMP_SpriteCharacter', i4029[i + 0]));
  }
  i4022.m_SpriteCharacterTable = i4028
  var i4031 = i4023[11]
  var i4030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.add(request.d('TMPro.TMP_SpriteGlyph', i4031[i + 0]));
  }
  i4022.m_SpriteGlyphTable = i4030
  return i4022
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4034 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4035 = data
  i4034.name = i4035[0]
  i4034.hashCode = i4035[1]
  i4034.unicode = i4035[2]
  i4034.pivot = new pc.Vec2( i4035[3], i4035[4] )
  request.r(i4035[5], i4035[6], 0, i4034, 'sprite')
  i4034.id = i4035[7]
  i4034.x = i4035[8]
  i4034.y = i4035[9]
  i4034.width = i4035[10]
  i4034.height = i4035[11]
  i4034.xOffset = i4035[12]
  i4034.yOffset = i4035[13]
  i4034.xAdvance = i4035[14]
  i4034.scale = i4035[15]
  return i4034
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4040 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4041 = data
  i4040.m_Name = i4041[0]
  i4040.m_HashCode = i4041[1]
  i4040.m_ElementType = i4041[2]
  i4040.m_Unicode = i4041[3]
  i4040.m_GlyphIndex = i4041[4]
  i4040.m_Scale = i4041[5]
  return i4040
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4044 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4045 = data
  request.r(i4045[0], i4045[1], 0, i4044, 'sprite')
  i4044.m_Index = i4045[2]
  i4044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4045[3], i4044.m_Metrics)
  i4044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4045[4], i4044.m_GlyphRect)
  i4044.m_Scale = i4045[5]
  i4044.m_AtlasIndex = i4045[6]
  i4044.m_ClassDefinitionType = i4045[7]
  return i4044
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4046 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4047 = data
  var i4049 = i4047[0]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.add(request.d('TMPro.TMP_Style', i4049[i + 0]));
  }
  i4046.m_StyleList = i4048
  return i4046
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4052 = root || request.c( 'TMPro.TMP_Style' )
  var i4053 = data
  i4052.m_Name = i4053[0]
  i4052.m_HashCode = i4053[1]
  i4052.m_OpeningDefinition = i4053[2]
  i4052.m_ClosingDefinition = i4053[3]
  i4052.m_OpeningTagArray = i4053[4]
  i4052.m_ClosingTagArray = i4053[5]
  i4052.m_OpeningTagUnicodeArray = i4053[6]
  i4052.m_ClosingTagUnicodeArray = i4053[7]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4055 = data
  var i4057 = i4055[0]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4057[i + 0]) );
  }
  i4054.files = i4056
  i4054.componentToPrefabIds = i4055[1]
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4061 = data
  i4060.path = i4061[0]
  request.r(i4061[1], i4061[2], 0, i4060, 'unityObject')
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4063 = data
  var i4065 = i4063[0]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4065[i + 0]) );
  }
  i4062.scriptsExecutionOrder = i4064
  var i4067 = i4063[1]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4067[i + 0]) );
  }
  i4062.sortingLayers = i4066
  var i4069 = i4063[2]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4069[i + 0]) );
  }
  i4062.cullingLayers = i4068
  i4062.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4063[3], i4062.timeSettings)
  i4062.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4063[4], i4062.physicsSettings)
  i4062.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4063[5], i4062.physics2DSettings)
  i4062.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4063[6], i4062.qualitySettings)
  i4062.enableRealtimeShadows = !!i4063[7]
  i4062.enableAutoInstancing = !!i4063[8]
  i4062.enableDynamicBatching = !!i4063[9]
  i4062.lightmapEncodingQuality = i4063[10]
  i4062.desiredColorSpace = i4063[11]
  var i4071 = i4063[12]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( i4071[i + 0] );
  }
  i4062.allTags = i4070
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4075 = data
  i4074.name = i4075[0]
  i4074.value = i4075[1]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4079 = data
  i4078.id = i4079[0]
  i4078.name = i4079[1]
  i4078.value = i4079[2]
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4083 = data
  i4082.id = i4083[0]
  i4082.name = i4083[1]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4085 = data
  i4084.fixedDeltaTime = i4085[0]
  i4084.maximumDeltaTime = i4085[1]
  i4084.timeScale = i4085[2]
  i4084.maximumParticleTimestep = i4085[3]
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4087 = data
  i4086.gravity = new pc.Vec3( i4087[0], i4087[1], i4087[2] )
  i4086.defaultSolverIterations = i4087[3]
  i4086.bounceThreshold = i4087[4]
  i4086.autoSyncTransforms = !!i4087[5]
  i4086.autoSimulation = !!i4087[6]
  var i4089 = i4087[7]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4089[i + 0]) );
  }
  i4086.collisionMatrix = i4088
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4093 = data
  i4092.enabled = !!i4093[0]
  i4092.layerId = i4093[1]
  i4092.otherLayerId = i4093[2]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4095 = data
  request.r(i4095[0], i4095[1], 0, i4094, 'material')
  i4094.gravity = new pc.Vec2( i4095[2], i4095[3] )
  i4094.positionIterations = i4095[4]
  i4094.velocityIterations = i4095[5]
  i4094.velocityThreshold = i4095[6]
  i4094.maxLinearCorrection = i4095[7]
  i4094.maxAngularCorrection = i4095[8]
  i4094.maxTranslationSpeed = i4095[9]
  i4094.maxRotationSpeed = i4095[10]
  i4094.baumgarteScale = i4095[11]
  i4094.baumgarteTOIScale = i4095[12]
  i4094.timeToSleep = i4095[13]
  i4094.linearSleepTolerance = i4095[14]
  i4094.angularSleepTolerance = i4095[15]
  i4094.defaultContactOffset = i4095[16]
  i4094.autoSimulation = !!i4095[17]
  i4094.queriesHitTriggers = !!i4095[18]
  i4094.queriesStartInColliders = !!i4095[19]
  i4094.callbacksOnDisable = !!i4095[20]
  i4094.reuseCollisionCallbacks = !!i4095[21]
  i4094.autoSyncTransforms = !!i4095[22]
  var i4097 = i4095[23]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4097[i + 0]) );
  }
  i4094.collisionMatrix = i4096
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4101 = data
  i4100.enabled = !!i4101[0]
  i4100.layerId = i4101[1]
  i4100.otherLayerId = i4101[2]
  return i4100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4103 = data
  var i4105 = i4103[0]
  var i4104 = []
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4105[i + 0]) );
  }
  i4102.qualityLevels = i4104
  var i4107 = i4103[1]
  var i4106 = []
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.push( i4107[i + 0] );
  }
  i4102.names = i4106
  i4102.shadows = i4103[2]
  i4102.anisotropicFiltering = i4103[3]
  i4102.antiAliasing = i4103[4]
  i4102.lodBias = i4103[5]
  i4102.shadowCascades = i4103[6]
  i4102.shadowDistance = i4103[7]
  i4102.shadowmaskMode = i4103[8]
  i4102.shadowProjection = i4103[9]
  i4102.shadowResolution = i4103[10]
  i4102.softParticles = !!i4103[11]
  i4102.softVegetation = !!i4103[12]
  i4102.activeColorSpace = i4103[13]
  i4102.desiredColorSpace = i4103[14]
  i4102.masterTextureLimit = i4103[15]
  i4102.maxQueuedFrames = i4103[16]
  i4102.particleRaycastBudget = i4103[17]
  i4102.pixelLightCount = i4103[18]
  i4102.realtimeReflectionProbes = !!i4103[19]
  i4102.shadowCascade2Split = i4103[20]
  i4102.shadowCascade4Split = new pc.Vec3( i4103[21], i4103[22], i4103[23] )
  i4102.streamingMipmapsActive = !!i4103[24]
  i4102.vSyncCount = i4103[25]
  i4102.asyncUploadBufferSize = i4103[26]
  i4102.asyncUploadTimeSlice = i4103[27]
  i4102.billboardsFaceCameraPosition = !!i4103[28]
  i4102.shadowNearPlaneOffset = i4103[29]
  i4102.streamingMipmapsMemoryBudget = i4103[30]
  i4102.maximumLODLevel = i4103[31]
  i4102.streamingMipmapsAddAllCameras = !!i4103[32]
  i4102.streamingMipmapsMaxLevelReduction = i4103[33]
  i4102.streamingMipmapsRenderersPerFrame = i4103[34]
  i4102.resolutionScalingFixedDPIFactor = i4103[35]
  i4102.streamingMipmapsMaxFileIORequests = i4103[36]
  i4102.currentQualityLevel = i4103[37]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4113 = data
  i4112.weight = i4113[0]
  i4112.vertices = i4113[1]
  i4112.normals = i4113[2]
  i4112.tangents = i4113[3]
  return i4112
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4114 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4115 = data
  i4114.xPlacement = i4115[0]
  i4114.yPlacement = i4115[1]
  i4114.xAdvance = i4115[2]
  i4114.yAdvance = i4115[3]
  return i4114
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

Deserializers.buildID = "66a824b1-cc14-4ba0-9789-24457e1d64b7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

