var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.JointSpring' )
  var i2059 = data
  i2058.spring = i2059[0]
  i2058.damper = i2059[1]
  i2058.targetPosition = i2059[2]
  return i2058
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointMotor' )
  var i2061 = data
  i2060.m_TargetVelocity = i2061[0]
  i2060.m_Force = i2061[1]
  i2060.m_FreeSpin = i2061[2]
  return i2060
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.JointLimits' )
  var i2063 = data
  i2062.m_Min = i2063[0]
  i2062.m_Max = i2063[1]
  i2062.m_Bounciness = i2063[2]
  i2062.m_BounceMinVelocity = i2063[3]
  i2062.m_ContactDistance = i2063[4]
  i2062.minBounce = i2063[5]
  i2062.maxBounce = i2063[6]
  return i2062
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.JointDrive' )
  var i2065 = data
  i2064.m_PositionSpring = i2065[0]
  i2064.m_PositionDamper = i2065[1]
  i2064.m_MaximumForce = i2065[2]
  return i2064
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2067 = data
  i2066.m_Spring = i2067[0]
  i2066.m_Damper = i2067[1]
  return i2066
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2069 = data
  i2068.m_Limit = i2069[0]
  i2068.m_Bounciness = i2069[1]
  i2068.m_ContactDistance = i2069[2]
  return i2068
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2071 = data
  i2070.m_ExtremumSlip = i2071[0]
  i2070.m_ExtremumValue = i2071[1]
  i2070.m_AsymptoteSlip = i2071[2]
  i2070.m_AsymptoteValue = i2071[3]
  i2070.m_Stiffness = i2071[4]
  return i2070
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2073 = data
  i2072.m_LowerAngle = i2073[0]
  i2072.m_UpperAngle = i2073[1]
  return i2072
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2075 = data
  i2074.m_MotorSpeed = i2075[0]
  i2074.m_MaximumMotorTorque = i2075[1]
  return i2074
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2077 = data
  i2076.m_DampingRatio = i2077[0]
  i2076.m_Frequency = i2077[1]
  i2076.m_Angle = i2077[2]
  return i2076
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2079 = data
  i2078.m_LowerTranslation = i2079[0]
  i2078.m_UpperTranslation = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2081 = data
  i2080.pivot = new pc.Vec2( i2081[0], i2081[1] )
  i2080.anchorMin = new pc.Vec2( i2081[2], i2081[3] )
  i2080.anchorMax = new pc.Vec2( i2081[4], i2081[5] )
  i2080.sizeDelta = new pc.Vec2( i2081[6], i2081[7] )
  i2080.anchoredPosition3D = new pc.Vec3( i2081[8], i2081[9], i2081[10] )
  i2080.rotation = new pc.Quat(i2081[11], i2081[12], i2081[13], i2081[14])
  i2080.scale = new pc.Vec3( i2081[15], i2081[16], i2081[17] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.planeDistance = i2083[1]
  i2082.referencePixelsPerUnit = i2083[2]
  i2082.isFallbackOverlay = !!i2083[3]
  i2082.renderMode = i2083[4]
  i2082.renderOrder = i2083[5]
  i2082.sortingLayerName = i2083[6]
  i2082.sortingOrder = i2083[7]
  i2082.scaleFactor = i2083[8]
  request.r(i2083[9], i2083[10], 0, i2082, 'worldCamera')
  i2082.overrideSorting = !!i2083[11]
  i2082.pixelPerfect = !!i2083[12]
  i2082.targetDisplay = i2083[13]
  i2082.overridePixelPerfect = !!i2083[14]
  return i2082
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2085 = data
  i2084.m_UiScaleMode = i2085[0]
  i2084.m_ReferencePixelsPerUnit = i2085[1]
  i2084.m_ScaleFactor = i2085[2]
  i2084.m_ReferenceResolution = new pc.Vec2( i2085[3], i2085[4] )
  i2084.m_ScreenMatchMode = i2085[5]
  i2084.m_MatchWidthOrHeight = i2085[6]
  i2084.m_PhysicalUnit = i2085[7]
  i2084.m_FallbackScreenDPI = i2085[8]
  i2084.m_DefaultSpriteDPI = i2085[9]
  i2084.m_DynamicPixelsPerUnit = i2085[10]
  i2084.m_PresetInfoIsWorld = !!i2085[11]
  return i2084
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2087 = data
  i2086.m_IgnoreReversedGraphics = !!i2087[0]
  i2086.m_BlockingObjects = i2087[1]
  i2086.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2087[2] )
  return i2086
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i2088 = root || request.c( 'EndCardController' )
  var i2089 = data
  i2088.alwaysShowEndcardTESTING = !!i2089[0]
  i2088.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i2089[1], i2088.EndCardOpenedEvent)
  i2088._backgroundColor = new pc.Color(i2089[2], i2089[3], i2089[4], i2089[5])
  request.r(i2089[6], i2089[7], 0, i2088, '_backgroundTexture')
  request.r(i2089[8], i2089[9], 0, i2088, '_iconTexture')
  i2088._iconColor = new pc.Color(i2089[10], i2089[11], i2089[12], i2089[13])
  request.r(i2089[14], i2089[15], 0, i2088, '_buttonTexture')
  i2088._buttonColor = new pc.Color(i2089[16], i2089[17], i2089[18], i2089[19])
  i2088._endCardDescriptionText = i2089[20]
  i2088._CTAButtonText = i2089[21]
  i2088._useBestFitOnCTA = !!i2089[22]
  i2088._CTAFontColor = new pc.Color(i2089[23], i2089[24], i2089[25], i2089[26])
  i2088._descriptionFontColor = new pc.Color(i2089[27], i2089[28], i2089[29], i2089[30])
  request.r(i2089[31], i2089[32], 0, i2088, '_CTAFont')
  request.r(i2089[33], i2089[34], 0, i2088, '_descriptionFont')
  i2088._CTAFontSize = i2089[35]
  i2088._descriptionFontSize = i2089[36]
  i2088._centerDescriptionX = !!i2089[37]
  i2088._centerDescriptionY = !!i2089[38]
  i2088._centerButtonX = !!i2089[39]
  i2088._centerButtonY = !!i2089[40]
  i2088._descriptionPositionX = i2089[41]
  i2088._descriptionPositionY = i2089[42]
  i2088._buttonPositionX = i2089[43]
  i2088._buttonPositionY = i2089[44]
  i2088._CTAFontSizeLandscape = i2089[45]
  i2088._descriptionFontSizeLandscape = i2089[46]
  i2088._centerDescriptionXLandscape = !!i2089[47]
  i2088._centerDescriptionYLandscape = !!i2089[48]
  i2088._centerButtonXLandscape = !!i2089[49]
  i2088._centerButtonYLandscape = !!i2089[50]
  i2088._descriptionPositionXLandscape = i2089[51]
  i2088._descriptionPositionYLandscape = i2089[52]
  i2088._buttonPositionXLandscape = i2089[53]
  i2088._buttonPositionYLandscape = i2089[54]
  i2088._centerIconX = !!i2089[55]
  i2088._centerIconY = !!i2089[56]
  i2088._iconPositionX = i2089[57]
  i2088._iconPositionY = i2089[58]
  i2088._iconSize = i2089[59]
  i2088._roundEdgesOnIcon = !!i2089[60]
  i2088._centerIconXLandscape = !!i2089[61]
  i2088._centerIconYLandscape = !!i2089[62]
  i2088._iconPositionXLandscape = i2089[63]
  i2088._iconPositionYLandscape = i2089[64]
  i2088._iconSizeLandscape = i2089[65]
  i2088._roundEdgesOnIconLandscape = !!i2089[66]
  i2088._endCardClickableOptions = i2089[67]
  i2088._buttonAnimationType = i2089[68]
  i2088._endCardPortraitAnimationType = i2089[69]
  i2088._endCardLandscapeAnimationType = i2089[70]
  request.r(i2089[71], i2089[72], 0, i2088, '_backgroundImage')
  request.r(i2089[73], i2089[74], 0, i2088, '_CTAButton')
  request.r(i2089[75], i2089[76], 0, i2088, '_ScreenCTAButton')
  request.r(i2089[77], i2089[78], 0, i2088, '_CTAButtonTextText')
  request.r(i2089[79], i2089[80], 0, i2088, '_EndCardDescriptionTextText')
  request.r(i2089[81], i2089[82], 0, i2088, '_maskIcon')
  request.r(i2089[83], i2089[84], 0, i2088, '_iconRect')
  request.r(i2089[85], i2089[86], 0, i2088, '_iconRectMask')
  request.r(i2089[87], i2089[88], 0, i2088, '_descriptionRect')
  request.r(i2089[89], i2089[90], 0, i2088, '_buttonRect')
  request.r(i2089[91], i2089[92], 0, i2088, '_CTAButtonAnimator')
  request.r(i2089[93], i2089[94], 0, i2088, '_endCardAnimator')
  request.r(i2089[95], i2089[96], 0, i2088, '_iconImage')
  request.r(i2089[97], i2089[98], 0, i2088, '_CTAButtonImage')
  return i2088
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2091 = data
  i2090.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2091[0], i2090.m_PersistentCalls)
  return i2090
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2093 = data
  var i2095 = i2093[0]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(request.d('UnityEngine.Events.PersistentCall', i2095[i + 0]));
  }
  i2092.m_Calls = i2094
  return i2092
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'm_Target')
  i2098.m_TargetAssemblyTypeName = i2099[2]
  i2098.m_MethodName = i2099[3]
  i2098.m_Mode = i2099[4]
  i2098.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2099[5], i2098.m_Arguments)
  i2098.m_CallState = i2099[6]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'animatorController')
  request.r(i2101[2], i2101[3], 0, i2100, 'avatar')
  i2100.updateMode = i2101[4]
  i2100.hasTransformHierarchy = !!i2101[5]
  i2100.applyRootMotion = !!i2101[6]
  var i2103 = i2101[7]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.humanBones = i2102
  i2100.enabled = !!i2101[8]
  return i2100
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i2106 = root || request.c( 'EndCardSetScale' )
  var i2107 = data
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2109 = data
  i2108.cullTransparentMesh = !!i2109[0]
  return i2108
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2111 = data
  i2110.m_AspectMode = i2111[0]
  i2110.m_AspectRatio = i2111[1]
  return i2110
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'm_Texture')
  i2112.m_UVRect = UnityEngine.Rect.MinMaxRect(i2113[2], i2113[3], i2113[4], i2113[5])
  request.r(i2113[6], i2113[7], 0, i2112, 'm_Material')
  i2112.m_Maskable = !!i2113[8]
  i2112.m_Color = new pc.Color(i2113[9], i2113[10], i2113[11], i2113[12])
  i2112.m_RaycastTarget = !!i2113[13]
  i2112.m_RaycastPadding = new pc.Vec4( i2113[14], i2113[15], i2113[16], i2113[17] )
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.tagId = i2115[1]
  i2114.enabled = !!i2115[2]
  i2114.isStatic = !!i2115[3]
  i2114.layer = i2115[4]
  return i2114
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2117 = data
  i2116.m_ShowMaskGraphic = !!i2117[0]
  return i2116
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.UI.Image' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_Sprite')
  i2118.m_Type = i2119[2]
  i2118.m_PreserveAspect = !!i2119[3]
  i2118.m_FillCenter = !!i2119[4]
  i2118.m_FillMethod = i2119[5]
  i2118.m_FillAmount = i2119[6]
  i2118.m_FillClockwise = !!i2119[7]
  i2118.m_FillOrigin = i2119[8]
  i2118.m_UseSpriteMesh = !!i2119[9]
  i2118.m_PixelsPerUnitMultiplier = i2119[10]
  request.r(i2119[11], i2119[12], 0, i2118, 'm_Material')
  i2118.m_Maskable = !!i2119[13]
  i2118.m_Color = new pc.Color(i2119[14], i2119[15], i2119[16], i2119[17])
  i2118.m_RaycastTarget = !!i2119[18]
  i2118.m_RaycastPadding = new pc.Vec4( i2119[19], i2119[20], i2119[21], i2119[22] )
  return i2118
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.UI.Text' )
  var i2121 = data
  i2120.m_FontData = request.d('UnityEngine.UI.FontData', i2121[0], i2120.m_FontData)
  i2120.m_Text = i2121[1]
  request.r(i2121[2], i2121[3], 0, i2120, 'm_Material')
  i2120.m_Maskable = !!i2121[4]
  i2120.m_Color = new pc.Color(i2121[5], i2121[6], i2121[7], i2121[8])
  i2120.m_RaycastTarget = !!i2121[9]
  i2120.m_RaycastPadding = new pc.Vec4( i2121[10], i2121[11], i2121[12], i2121[13] )
  return i2120
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'm_Font')
  i2122.m_FontSize = i2123[2]
  i2122.m_FontStyle = i2123[3]
  i2122.m_BestFit = !!i2123[4]
  i2122.m_MinSize = i2123[5]
  i2122.m_MaxSize = i2123[6]
  i2122.m_Alignment = i2123[7]
  i2122.m_AlignByGeometry = !!i2123[8]
  i2122.m_RichText = !!i2123[9]
  i2122.m_HorizontalOverflow = i2123[10]
  i2122.m_VerticalOverflow = i2123[11]
  i2122.m_LineSpacing = i2123[12]
  return i2122
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.Button' )
  var i2125 = data
  i2124.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2125[0], i2124.m_OnClick)
  i2124.m_Navigation = request.d('UnityEngine.UI.Navigation', i2125[1], i2124.m_Navigation)
  i2124.m_Transition = i2125[2]
  i2124.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2125[3], i2124.m_Colors)
  i2124.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2125[4], i2124.m_SpriteState)
  i2124.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2125[5], i2124.m_AnimationTriggers)
  i2124.m_Interactable = !!i2125[6]
  request.r(i2125[7], i2125[8], 0, i2124, 'm_TargetGraphic')
  return i2124
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2127 = data
  i2126.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2127[0], i2126.m_PersistentCalls)
  return i2126
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'm_ObjectArgument')
  i2128.m_ObjectArgumentAssemblyTypeName = i2129[2]
  i2128.m_IntArgument = i2129[3]
  i2128.m_FloatArgument = i2129[4]
  i2128.m_StringArgument = i2129[5]
  i2128.m_BoolArgument = !!i2129[6]
  return i2128
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2131 = data
  i2130.m_Mode = i2131[0]
  i2130.m_WrapAround = !!i2131[1]
  request.r(i2131[2], i2131[3], 0, i2130, 'm_SelectOnUp')
  request.r(i2131[4], i2131[5], 0, i2130, 'm_SelectOnDown')
  request.r(i2131[6], i2131[7], 0, i2130, 'm_SelectOnLeft')
  request.r(i2131[8], i2131[9], 0, i2130, 'm_SelectOnRight')
  return i2130
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2133 = data
  i2132.m_NormalColor = new pc.Color(i2133[0], i2133[1], i2133[2], i2133[3])
  i2132.m_HighlightedColor = new pc.Color(i2133[4], i2133[5], i2133[6], i2133[7])
  i2132.m_PressedColor = new pc.Color(i2133[8], i2133[9], i2133[10], i2133[11])
  i2132.m_SelectedColor = new pc.Color(i2133[12], i2133[13], i2133[14], i2133[15])
  i2132.m_DisabledColor = new pc.Color(i2133[16], i2133[17], i2133[18], i2133[19])
  i2132.m_ColorMultiplier = i2133[20]
  i2132.m_FadeDuration = i2133[21]
  return i2132
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'm_HighlightedSprite')
  request.r(i2135[2], i2135[3], 0, i2134, 'm_PressedSprite')
  request.r(i2135[4], i2135[5], 0, i2134, 'm_SelectedSprite')
  request.r(i2135[6], i2135[7], 0, i2134, 'm_DisabledSprite')
  return i2134
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2137 = data
  i2136.m_NormalTrigger = i2137[0]
  i2136.m_HighlightedTrigger = i2137[1]
  i2136.m_PressedTrigger = i2137[2]
  i2136.m_SelectedTrigger = i2137[3]
  i2136.m_DisabledTrigger = i2137[4]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2139 = data
  i2138.m_Alpha = i2139[0]
  i2138.m_Interactable = !!i2139[1]
  i2138.m_BlocksRaycasts = !!i2139[2]
  i2138.m_IgnoreParentGroups = !!i2139[3]
  i2138.enabled = !!i2139[4]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.width = i2141[1]
  i2140.height = i2141[2]
  i2140.mipmapCount = i2141[3]
  i2140.anisoLevel = i2141[4]
  i2140.filterMode = i2141[5]
  i2140.hdr = !!i2141[6]
  i2140.format = i2141[7]
  i2140.wrapMode = i2141[8]
  i2140.alphaIsTransparency = !!i2141[9]
  i2140.alphaSource = i2141[10]
  i2140.graphicsFormat = i2141[11]
  i2140.sRGBTexture = !!i2141[12]
  i2140.desiredColorSpace = i2141[13]
  i2140.wrapU = i2141[14]
  i2140.wrapV = i2141[15]
  return i2140
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i2142 = root || request.c( 'DOTWeenPulseAnim' )
  var i2143 = data
  i2142.pulseSize = new pc.Vec2( i2143[0], i2143[1] )
  i2142.pulseDuration = i2143[2]
  i2142.ease = i2143[3]
  return i2142
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2144 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2145 = data
  i2144.m_hasFontAssetChanged = !!i2145[0]
  request.r(i2145[1], i2145[2], 0, i2144, 'm_baseMaterial')
  i2144.m_maskOffset = new pc.Vec4( i2145[3], i2145[4], i2145[5], i2145[6] )
  i2144.m_text = i2145[7]
  i2144.m_isRightToLeft = !!i2145[8]
  request.r(i2145[9], i2145[10], 0, i2144, 'm_fontAsset')
  request.r(i2145[11], i2145[12], 0, i2144, 'm_sharedMaterial')
  var i2147 = i2145[13]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2144.m_fontSharedMaterials = i2146
  request.r(i2145[14], i2145[15], 0, i2144, 'm_fontMaterial')
  var i2149 = i2145[16]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 2) {
  request.r(i2149[i + 0], i2149[i + 1], 2, i2148, '')
  }
  i2144.m_fontMaterials = i2148
  i2144.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2145[17], i2145[18], i2145[19], i2145[20])
  i2144.m_fontColor = new pc.Color(i2145[21], i2145[22], i2145[23], i2145[24])
  i2144.m_enableVertexGradient = !!i2145[25]
  i2144.m_colorMode = i2145[26]
  i2144.m_fontColorGradient = request.d('TMPro.VertexGradient', i2145[27], i2144.m_fontColorGradient)
  request.r(i2145[28], i2145[29], 0, i2144, 'm_fontColorGradientPreset')
  request.r(i2145[30], i2145[31], 0, i2144, 'm_spriteAsset')
  i2144.m_tintAllSprites = !!i2145[32]
  request.r(i2145[33], i2145[34], 0, i2144, 'm_StyleSheet')
  i2144.m_TextStyleHashCode = i2145[35]
  i2144.m_overrideHtmlColors = !!i2145[36]
  i2144.m_faceColor = UnityEngine.Color32.ConstructColor(i2145[37], i2145[38], i2145[39], i2145[40])
  i2144.m_fontSize = i2145[41]
  i2144.m_fontSizeBase = i2145[42]
  i2144.m_fontWeight = i2145[43]
  i2144.m_enableAutoSizing = !!i2145[44]
  i2144.m_fontSizeMin = i2145[45]
  i2144.m_fontSizeMax = i2145[46]
  i2144.m_fontStyle = i2145[47]
  i2144.m_HorizontalAlignment = i2145[48]
  i2144.m_VerticalAlignment = i2145[49]
  i2144.m_textAlignment = i2145[50]
  i2144.m_characterSpacing = i2145[51]
  i2144.m_wordSpacing = i2145[52]
  i2144.m_lineSpacing = i2145[53]
  i2144.m_lineSpacingMax = i2145[54]
  i2144.m_paragraphSpacing = i2145[55]
  i2144.m_charWidthMaxAdj = i2145[56]
  i2144.m_enableWordWrapping = !!i2145[57]
  i2144.m_wordWrappingRatios = i2145[58]
  i2144.m_overflowMode = i2145[59]
  request.r(i2145[60], i2145[61], 0, i2144, 'm_linkedTextComponent')
  request.r(i2145[62], i2145[63], 0, i2144, 'parentLinkedComponent')
  i2144.m_enableKerning = !!i2145[64]
  i2144.m_enableExtraPadding = !!i2145[65]
  i2144.checkPaddingRequired = !!i2145[66]
  i2144.m_isRichText = !!i2145[67]
  i2144.m_parseCtrlCharacters = !!i2145[68]
  i2144.m_isOrthographic = !!i2145[69]
  i2144.m_isCullingEnabled = !!i2145[70]
  i2144.m_horizontalMapping = i2145[71]
  i2144.m_verticalMapping = i2145[72]
  i2144.m_uvLineOffset = i2145[73]
  i2144.m_geometrySortingOrder = i2145[74]
  i2144.m_IsTextObjectScaleStatic = !!i2145[75]
  i2144.m_VertexBufferAutoSizeReduction = !!i2145[76]
  i2144.m_useMaxVisibleDescender = !!i2145[77]
  i2144.m_pageToDisplay = i2145[78]
  i2144.m_margin = new pc.Vec4( i2145[79], i2145[80], i2145[81], i2145[82] )
  i2144.m_isUsingLegacyAnimationComponent = !!i2145[83]
  i2144.m_isVolumetricText = !!i2145[84]
  request.r(i2145[85], i2145[86], 0, i2144, 'm_Material')
  i2144.m_Maskable = !!i2145[87]
  i2144.m_Color = new pc.Color(i2145[88], i2145[89], i2145[90], i2145[91])
  i2144.m_RaycastTarget = !!i2145[92]
  i2144.m_RaycastPadding = new pc.Vec4( i2145[93], i2145[94], i2145[95], i2145[96] )
  return i2144
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2152 = root || request.c( 'TMPro.VertexGradient' )
  var i2153 = data
  i2152.topLeft = new pc.Color(i2153[0], i2153[1], i2153[2], i2153[3])
  i2152.topRight = new pc.Color(i2153[4], i2153[5], i2153[6], i2153[7])
  i2152.bottomLeft = new pc.Color(i2153[8], i2153[9], i2153[10], i2153[11])
  i2152.bottomRight = new pc.Color(i2153[12], i2153[13], i2153[14], i2153[15])
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2154 = root || new pc.UnityMaterial()
  var i2155 = data
  i2154.name = i2155[0]
  request.r(i2155[1], i2155[2], 0, i2154, 'shader')
  i2154.renderQueue = i2155[3]
  i2154.enableInstancing = !!i2155[4]
  var i2157 = i2155[5]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2157[i + 0]) );
  }
  i2154.floatParameters = i2156
  var i2159 = i2155[6]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2159[i + 0]) );
  }
  i2154.colorParameters = i2158
  var i2161 = i2155[7]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2161[i + 0]) );
  }
  i2154.vectorParameters = i2160
  var i2163 = i2155[8]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2163[i + 0]) );
  }
  i2154.textureParameters = i2162
  var i2165 = i2155[9]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2165[i + 0]) );
  }
  i2154.materialFlags = i2164
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.value = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.value = new pc.Color(i2173[1], i2173[2], i2173[3], i2173[4])
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.value = new pc.Vec4( i2177[1], i2177[2], i2177[3], i2177[4] )
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2181 = data
  i2180.name = i2181[0]
  request.r(i2181[1], i2181[2], 0, i2180, 'value')
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.enabled = !!i2185[1]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2187 = data
  i2186.position = new pc.Vec3( i2187[0], i2187[1], i2187[2] )
  i2186.scale = new pc.Vec3( i2187[3], i2187[4], i2187[5] )
  i2186.rotation = new pc.Quat(i2187[6], i2187[7], i2187[8], i2187[9])
  return i2186
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i2188 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2188.m_LevelManagers = i2190
  return i2188
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2194 = root || request.c( 'InputManager' )
  var i2195 = data
  i2194.m_InputSensitivity = i2195[0]
  return i2194
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i2196 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i2197 = data
  i2196.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2197[0], i2196.m_GoldEventListener)
  i2196.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2197[1], i2196.m_KeyEventListener)
  i2196.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2197[2], i2196.m_WinEventListener)
  return i2196
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i2198 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_Event')
  return i2198
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i2200 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i2201 = data
  return i2200
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i2202 = root || request.c( 'CoinEffectMove' )
  var i2203 = data
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'sharedMesh')
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'additionalVertexStreams')
  i2206.enabled = !!i2207[2]
  request.r(i2207[3], i2207[4], 0, i2206, 'sharedMaterial')
  var i2209 = i2207[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2206.sharedMaterials = i2208
  i2206.receiveShadows = !!i2207[6]
  i2206.shadowCastingMode = i2207[7]
  i2206.sortingLayerID = i2207[8]
  i2206.sortingOrder = i2207[9]
  i2206.lightmapIndex = i2207[10]
  i2206.lightmapSceneIndex = i2207[11]
  i2206.lightmapScaleOffset = new pc.Vec4( i2207[12], i2207[13], i2207[14], i2207[15] )
  i2206.lightProbeUsage = i2207[16]
  i2206.reflectionProbeUsage = i2207[17]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2211 = data
  i2210.name = i2211[0]
  i2210.halfPrecision = !!i2211[1]
  i2210.useUInt32IndexFormat = !!i2211[2]
  i2210.vertexCount = i2211[3]
  i2210.aabb = i2211[4]
  var i2213 = i2211[5]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( !!i2213[i + 0] );
  }
  i2210.streams = i2212
  i2210.vertices = i2211[6]
  var i2215 = i2211[7]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2215[i + 0]) );
  }
  i2210.subMeshes = i2214
  var i2217 = i2211[8]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 16) {
    i2216.push( new pc.Mat4().setData(i2217[i + 0], i2217[i + 1], i2217[i + 2], i2217[i + 3],  i2217[i + 4], i2217[i + 5], i2217[i + 6], i2217[i + 7],  i2217[i + 8], i2217[i + 9], i2217[i + 10], i2217[i + 11],  i2217[i + 12], i2217[i + 13], i2217[i + 14], i2217[i + 15]) );
  }
  i2210.bindposes = i2216
  var i2219 = i2211[9]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2219[i + 0]) );
  }
  i2210.blendShapes = i2218
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2225 = data
  i2224.triangles = i2225[0]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2231 = data
  i2230.name = i2231[0]
  var i2233 = i2231[1]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2233[i + 0]) );
  }
  i2230.frames = i2232
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.isTrigger = !!i2235[1]
  request.r(i2235[2], i2235[3], 0, i2234, 'material')
  i2234.center = new pc.Vec3( i2235[4], i2235[5], i2235[6] )
  i2234.radius = i2235[7]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2237 = data
  i2236.mass = i2237[0]
  i2236.drag = i2237[1]
  i2236.angularDrag = i2237[2]
  i2236.useGravity = !!i2237[3]
  i2236.isKinematic = !!i2237[4]
  i2236.constraints = i2237[5]
  i2236.maxAngularVelocity = i2237[6]
  i2236.collisionDetectionMode = i2237[7]
  i2236.interpolation = i2237[8]
  return i2236
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2238 = root || request.c( 'PlayerController' )
  var i2239 = data
  i2238.moveForce = i2239[0]
  i2238.maxSpeed = i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2241 = data
  i2240.center = new pc.Vec3( i2241[0], i2241[1], i2241[2] )
  i2240.size = new pc.Vec3( i2241[3], i2241[4], i2241[5] )
  i2240.enabled = !!i2241[6]
  i2240.isTrigger = !!i2241[7]
  request.r(i2241[8], i2241[9], 0, i2240, 'material')
  return i2240
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i2242 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i2243 = data
  i2242.m_GateType = i2243[0]
  i2242.m_Value = i2243[1]
  request.r(i2243[2], i2243[3], 0, i2242, 'm_Text')
  i2242.m_SnapToGrid = !!i2243[4]
  return i2242
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TextMeshPro' )
  var i2245 = data
  i2244._SortingLayer = i2245[0]
  i2244._SortingLayerID = i2245[1]
  i2244._SortingOrder = i2245[2]
  i2244.m_hasFontAssetChanged = !!i2245[3]
  request.r(i2245[4], i2245[5], 0, i2244, 'm_renderer')
  i2244.m_maskType = i2245[6]
  i2244.m_text = i2245[7]
  i2244.m_isRightToLeft = !!i2245[8]
  request.r(i2245[9], i2245[10], 0, i2244, 'm_fontAsset')
  request.r(i2245[11], i2245[12], 0, i2244, 'm_sharedMaterial')
  var i2247 = i2245[13]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 2, i2246, '')
  }
  i2244.m_fontSharedMaterials = i2246
  request.r(i2245[14], i2245[15], 0, i2244, 'm_fontMaterial')
  var i2249 = i2245[16]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 2, i2248, '')
  }
  i2244.m_fontMaterials = i2248
  i2244.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2245[17], i2245[18], i2245[19], i2245[20])
  i2244.m_fontColor = new pc.Color(i2245[21], i2245[22], i2245[23], i2245[24])
  i2244.m_enableVertexGradient = !!i2245[25]
  i2244.m_colorMode = i2245[26]
  i2244.m_fontColorGradient = request.d('TMPro.VertexGradient', i2245[27], i2244.m_fontColorGradient)
  request.r(i2245[28], i2245[29], 0, i2244, 'm_fontColorGradientPreset')
  request.r(i2245[30], i2245[31], 0, i2244, 'm_spriteAsset')
  i2244.m_tintAllSprites = !!i2245[32]
  request.r(i2245[33], i2245[34], 0, i2244, 'm_StyleSheet')
  i2244.m_TextStyleHashCode = i2245[35]
  i2244.m_overrideHtmlColors = !!i2245[36]
  i2244.m_faceColor = UnityEngine.Color32.ConstructColor(i2245[37], i2245[38], i2245[39], i2245[40])
  i2244.m_fontSize = i2245[41]
  i2244.m_fontSizeBase = i2245[42]
  i2244.m_fontWeight = i2245[43]
  i2244.m_enableAutoSizing = !!i2245[44]
  i2244.m_fontSizeMin = i2245[45]
  i2244.m_fontSizeMax = i2245[46]
  i2244.m_fontStyle = i2245[47]
  i2244.m_HorizontalAlignment = i2245[48]
  i2244.m_VerticalAlignment = i2245[49]
  i2244.m_textAlignment = i2245[50]
  i2244.m_characterSpacing = i2245[51]
  i2244.m_wordSpacing = i2245[52]
  i2244.m_lineSpacing = i2245[53]
  i2244.m_lineSpacingMax = i2245[54]
  i2244.m_paragraphSpacing = i2245[55]
  i2244.m_charWidthMaxAdj = i2245[56]
  i2244.m_enableWordWrapping = !!i2245[57]
  i2244.m_wordWrappingRatios = i2245[58]
  i2244.m_overflowMode = i2245[59]
  request.r(i2245[60], i2245[61], 0, i2244, 'm_linkedTextComponent')
  request.r(i2245[62], i2245[63], 0, i2244, 'parentLinkedComponent')
  i2244.m_enableKerning = !!i2245[64]
  i2244.m_enableExtraPadding = !!i2245[65]
  i2244.checkPaddingRequired = !!i2245[66]
  i2244.m_isRichText = !!i2245[67]
  i2244.m_parseCtrlCharacters = !!i2245[68]
  i2244.m_isOrthographic = !!i2245[69]
  i2244.m_isCullingEnabled = !!i2245[70]
  i2244.m_horizontalMapping = i2245[71]
  i2244.m_verticalMapping = i2245[72]
  i2244.m_uvLineOffset = i2245[73]
  i2244.m_geometrySortingOrder = i2245[74]
  i2244.m_IsTextObjectScaleStatic = !!i2245[75]
  i2244.m_VertexBufferAutoSizeReduction = !!i2245[76]
  i2244.m_useMaxVisibleDescender = !!i2245[77]
  i2244.m_pageToDisplay = i2245[78]
  i2244.m_margin = new pc.Vec4( i2245[79], i2245[80], i2245[81], i2245[82] )
  i2244.m_isUsingLegacyAnimationComponent = !!i2245[83]
  i2244.m_isVolumetricText = !!i2245[84]
  request.r(i2245[85], i2245[86], 0, i2244, 'm_Material')
  i2244.m_Maskable = !!i2245[87]
  i2244.m_Color = new pc.Color(i2245[88], i2245[89], i2245[90], i2245[91])
  i2244.m_RaycastTarget = !!i2245[92]
  i2244.m_RaycastPadding = new pc.Vec4( i2245[93], i2245[94], i2245[95], i2245[96] )
  return i2244
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i2250 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'm_Event')
  i2250.m_Count = i2251[2]
  i2250.m_Sound = i2251[3]
  i2250.m_Particle = i2251[4]
  i2250.m_SnapToGrid = !!i2251[5]
  return i2250
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i2252 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i2253 = data
  i2252.UsePositionBasedOffset = !!i2253[0]
  i2252.PositionBasedScale = i2253[1]
  i2252.Bob = !!i2253[2]
  i2252.BobSpeed = i2253[3]
  i2252.BobHeight = i2253[4]
  i2252.Spin = !!i2253[5]
  i2252.SpinSpeed = i2253[6]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2255 = data
  i2254.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2255[0], i2254.main)
  i2254.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2255[1], i2254.colorBySpeed)
  i2254.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2255[2], i2254.colorOverLifetime)
  i2254.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2255[3], i2254.emission)
  i2254.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2255[4], i2254.rotationBySpeed)
  i2254.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2255[5], i2254.rotationOverLifetime)
  i2254.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2255[6], i2254.shape)
  i2254.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2255[7], i2254.sizeBySpeed)
  i2254.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2255[8], i2254.sizeOverLifetime)
  i2254.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2255[9], i2254.textureSheetAnimation)
  i2254.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2255[10], i2254.velocityOverLifetime)
  i2254.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2255[11], i2254.noise)
  i2254.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2255[12], i2254.inheritVelocity)
  i2254.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2255[13], i2254.forceOverLifetime)
  i2254.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2255[14], i2254.limitVelocityOverLifetime)
  i2254.useAutoRandomSeed = !!i2255[15]
  i2254.randomSeed = i2255[16]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemMain()
  var i2257 = data
  i2256.duration = i2257[0]
  i2256.loop = !!i2257[1]
  i2256.prewarm = !!i2257[2]
  i2256.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[3], i2256.startDelay)
  i2256.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[4], i2256.startLifetime)
  i2256.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[5], i2256.startSpeed)
  i2256.startSize3D = !!i2257[6]
  i2256.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.startSizeX)
  i2256.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[8], i2256.startSizeY)
  i2256.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[9], i2256.startSizeZ)
  i2256.startRotation3D = !!i2257[10]
  i2256.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[11], i2256.startRotationX)
  i2256.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[12], i2256.startRotationY)
  i2256.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[13], i2256.startRotationZ)
  i2256.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2257[14], i2256.startColor)
  i2256.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[15], i2256.gravityModifier)
  i2256.simulationSpace = i2257[16]
  request.r(i2257[17], i2257[18], 0, i2256, 'customSimulationSpace')
  i2256.simulationSpeed = i2257[19]
  i2256.useUnscaledTime = !!i2257[20]
  i2256.scalingMode = i2257[21]
  i2256.playOnAwake = !!i2257[22]
  i2256.maxParticles = i2257[23]
  i2256.emitterVelocityMode = i2257[24]
  i2256.stopAction = i2257[25]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2258 = root || new pc.MinMaxCurve()
  var i2259 = data
  i2258.mode = i2259[0]
  i2258.curveMin = new pc.AnimationCurve( { keys_flow: i2259[1] } )
  i2258.curveMax = new pc.AnimationCurve( { keys_flow: i2259[2] } )
  i2258.curveMultiplier = i2259[3]
  i2258.constantMin = i2259[4]
  i2258.constantMax = i2259[5]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2260 = root || new pc.MinMaxGradient()
  var i2261 = data
  i2260.mode = i2261[0]
  i2260.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[1], i2260.gradientMin)
  i2260.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[2], i2260.gradientMax)
  i2260.colorMin = new pc.Color(i2261[3], i2261[4], i2261[5], i2261[6])
  i2260.colorMax = new pc.Color(i2261[7], i2261[8], i2261[9], i2261[10])
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2263 = data
  i2262.mode = i2263[0]
  var i2265 = i2263[1]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2265[i + 0]) );
  }
  i2262.colorKeys = i2264
  var i2267 = i2263[2]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2267[i + 0]) );
  }
  i2262.alphaKeys = i2266
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemColorBySpeed()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2269[1], i2268.color)
  i2268.range = new pc.Vec2( i2269[2], i2269[3] )
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2273 = data
  i2272.color = new pc.Color(i2273[0], i2273[1], i2273[2], i2273[3])
  i2272.time = i2273[4]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2277 = data
  i2276.alpha = i2277[0]
  i2276.time = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemColorOverLifetime()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2279[1], i2278.color)
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemEmitter()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.rateOverTime)
  i2280.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.rateOverDistance)
  var i2283 = i2281[3]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2283[i + 0]) );
  }
  i2280.bursts = i2282
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemBurst()
  var i2287 = data
  i2286.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[0], i2286.count)
  i2286.cycleCount = i2287[1]
  i2286.minCount = i2287[2]
  i2286.maxCount = i2287[3]
  i2286.repeatInterval = i2287[4]
  i2286.time = i2287[5]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemRotationBySpeed()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[1], i2288.x)
  i2288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[2], i2288.y)
  i2288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[3], i2288.z)
  i2288.separateAxes = !!i2289[4]
  i2288.range = new pc.Vec2( i2289[5], i2289[6] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.x)
  i2290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.y)
  i2290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[3], i2290.z)
  i2290.separateAxes = !!i2291[4]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemShape()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.shapeType = i2293[1]
  i2292.randomDirectionAmount = i2293[2]
  i2292.sphericalDirectionAmount = i2293[3]
  i2292.randomPositionAmount = i2293[4]
  i2292.alignToDirection = !!i2293[5]
  i2292.radius = i2293[6]
  i2292.radiusMode = i2293[7]
  i2292.radiusSpread = i2293[8]
  i2292.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[9], i2292.radiusSpeed)
  i2292.radiusThickness = i2293[10]
  i2292.angle = i2293[11]
  i2292.length = i2293[12]
  i2292.boxThickness = new pc.Vec3( i2293[13], i2293[14], i2293[15] )
  i2292.meshShapeType = i2293[16]
  request.r(i2293[17], i2293[18], 0, i2292, 'mesh')
  request.r(i2293[19], i2293[20], 0, i2292, 'meshRenderer')
  request.r(i2293[21], i2293[22], 0, i2292, 'skinnedMeshRenderer')
  i2292.useMeshMaterialIndex = !!i2293[23]
  i2292.meshMaterialIndex = i2293[24]
  i2292.useMeshColors = !!i2293[25]
  i2292.normalOffset = i2293[26]
  i2292.arc = i2293[27]
  i2292.arcMode = i2293[28]
  i2292.arcSpread = i2293[29]
  i2292.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[30], i2292.arcSpeed)
  i2292.donutRadius = i2293[31]
  i2292.position = new pc.Vec3( i2293[32], i2293[33], i2293[34] )
  i2292.rotation = new pc.Vec3( i2293[35], i2293[36], i2293[37] )
  i2292.scale = new pc.Vec3( i2293[38], i2293[39], i2293[40] )
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemSizeBySpeed()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[1], i2294.x)
  i2294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[2], i2294.y)
  i2294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[3], i2294.z)
  i2294.separateAxes = !!i2295[4]
  i2294.range = new pc.Vec2( i2295[5], i2295[6] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[1], i2296.x)
  i2296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.y)
  i2296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[3], i2296.z)
  i2296.separateAxes = !!i2297[4]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.mode = i2299[1]
  i2298.animation = i2299[2]
  i2298.numTilesX = i2299[3]
  i2298.numTilesY = i2299[4]
  i2298.useRandomRow = !!i2299[5]
  i2298.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[6], i2298.frameOverTime)
  i2298.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[7], i2298.startFrame)
  i2298.cycleCount = i2299[8]
  i2298.rowIndex = i2299[9]
  i2298.flipU = i2299[10]
  i2298.flipV = i2299[11]
  i2298.spriteCount = i2299[12]
  var i2301 = i2299[13]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.sprites = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.x)
  i2304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.y)
  i2304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.z)
  i2304.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[4], i2304.radial)
  i2304.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[5], i2304.speedModifier)
  i2304.space = i2305[6]
  i2304.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[7], i2304.orbitalX)
  i2304.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[8], i2304.orbitalY)
  i2304.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[9], i2304.orbitalZ)
  i2304.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[10], i2304.orbitalOffsetX)
  i2304.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[11], i2304.orbitalOffsetY)
  i2304.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[12], i2304.orbitalOffsetZ)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemNoise()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.separateAxes = !!i2307[1]
  i2306.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.strengthX)
  i2306.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.strengthY)
  i2306.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[4], i2306.strengthZ)
  i2306.frequency = i2307[5]
  i2306.damping = !!i2307[6]
  i2306.octaveCount = i2307[7]
  i2306.octaveMultiplier = i2307[8]
  i2306.octaveScale = i2307[9]
  i2306.quality = i2307[10]
  i2306.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[11], i2306.scrollSpeed)
  i2306.scrollSpeedMultiplier = i2307[12]
  i2306.remapEnabled = !!i2307[13]
  i2306.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[14], i2306.remapX)
  i2306.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[15], i2306.remapY)
  i2306.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[16], i2306.remapZ)
  i2306.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[17], i2306.positionAmount)
  i2306.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[18], i2306.rotationAmount)
  i2306.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[19], i2306.sizeAmount)
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemInheritVelocity()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.mode = i2309[1]
  i2308.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.curve)
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemForceOverLifetime()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[1], i2310.x)
  i2310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[2], i2310.y)
  i2310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[3], i2310.z)
  i2310.space = i2311[4]
  i2310.randomized = !!i2311[5]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.limit)
  i2312.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.limitX)
  i2312.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.limitY)
  i2312.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[4], i2312.limitZ)
  i2312.dampen = i2313[5]
  i2312.separateAxes = !!i2313[6]
  i2312.space = i2313[7]
  i2312.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[8], i2312.drag)
  i2312.multiplyDragByParticleSize = !!i2313[9]
  i2312.multiplyDragByParticleVelocity = !!i2313[10]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2315 = data
  i2314.enabled = !!i2315[0]
  request.r(i2315[1], i2315[2], 0, i2314, 'sharedMaterial')
  var i2317 = i2315[3]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.sharedMaterials = i2316
  i2314.receiveShadows = !!i2315[4]
  i2314.shadowCastingMode = i2315[5]
  i2314.sortingLayerID = i2315[6]
  i2314.sortingOrder = i2315[7]
  i2314.lightmapIndex = i2315[8]
  i2314.lightmapSceneIndex = i2315[9]
  i2314.lightmapScaleOffset = new pc.Vec4( i2315[10], i2315[11], i2315[12], i2315[13] )
  i2314.lightProbeUsage = i2315[14]
  i2314.reflectionProbeUsage = i2315[15]
  request.r(i2315[16], i2315[17], 0, i2314, 'mesh')
  i2314.meshCount = i2315[18]
  i2314.activeVertexStreamsCount = i2315[19]
  i2314.alignment = i2315[20]
  i2314.renderMode = i2315[21]
  i2314.sortMode = i2315[22]
  i2314.lengthScale = i2315[23]
  i2314.velocityScale = i2315[24]
  i2314.cameraVelocityScale = i2315[25]
  i2314.normalDirection = i2315[26]
  i2314.sortingFudge = i2315[27]
  i2314.minParticleSize = i2315[28]
  i2314.maxParticleSize = i2315[29]
  i2314.pivot = new pc.Vec3( i2315[30], i2315[31], i2315[32] )
  request.r(i2315[33], i2315[34], 0, i2314, 'trailMaterial')
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2319 = data
  i2318.name = i2319[0]
  i2318.atlasId = i2319[1]
  i2318.mipmapCount = i2319[2]
  i2318.hdr = !!i2319[3]
  i2318.size = i2319[4]
  i2318.anisoLevel = i2319[5]
  i2318.filterMode = i2319[6]
  var i2321 = i2319[7]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 4) {
    i2320.push( UnityEngine.Rect.MinMaxRect(i2321[i + 0], i2321[i + 1], i2321[i + 2], i2321[i + 3]) );
  }
  i2318.rects = i2320
  i2318.wrapU = i2319[8]
  i2318.wrapV = i2319[9]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.index = i2325[1]
  i2324.startup = !!i2325[2]
  return i2324
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i2326 = root || request.c( 'PlayableSettings' )
  var i2327 = data
  i2326.m_SkipMainMenu = !!i2327[0]
  i2326.m_UseCTAScreen = !!i2327[1]
  i2326.m_EndcardActivationSendsToStore = !!i2327[2]
  i2326.m_ShowEndcardAfterXTaps = !!i2327[3]
  i2326.m_TapsBeforeShowingEndcard = i2327[4]
  return i2326
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i2328 = root || request.c( 'SimpleDeactivateOnTap' )
  var i2329 = data
  return i2328
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'm_FirstSelected')
  i2330.m_sendNavigationEvents = !!i2331[2]
  i2330.m_DragThreshold = i2331[3]
  return i2330
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2333 = data
  i2332.m_HorizontalAxis = i2333[0]
  i2332.m_VerticalAxis = i2333[1]
  i2332.m_SubmitButton = i2333[2]
  i2332.m_CancelButton = i2333[3]
  i2332.m_InputActionsPerSecond = i2333[4]
  i2332.m_RepeatDelay = i2333[5]
  i2332.m_ForceModuleActive = !!i2333[6]
  i2332.m_SendPointerHoverToParent = !!i2333[7]
  return i2332
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i2334 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'm_SequenceManagerPrefab')
  return i2334
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i2336 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'm_MusicSource')
  request.r(i2337[2], i2337[3], 0, i2336, 'm_EffectSource')
  i2336.m_MinSoundInterval = i2337[4]
  var i2339 = i2337[5]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i2339[i + 0]) );
  }
  i2336.m_Sounds = i2338
  return i2336
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i2342 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i2343 = data
  i2342.m_SoundID = i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'm_AudioClip')
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'clip')
  request.r(i2345[2], i2345[3], 0, i2344, 'outputAudioMixerGroup')
  i2344.playOnAwake = !!i2345[4]
  i2344.loop = !!i2345[5]
  i2344.time = i2345[6]
  i2344.volume = i2345[7]
  i2344.pitch = i2345[8]
  i2344.enabled = !!i2345[9]
  return i2344
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i2346 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'm_Canvas')
  request.r(i2347[2], i2347[3], 0, i2346, 'm_Root')
  request.r(i2347[4], i2347[5], 0, i2346, 'm_ViewLayer')
  return i2346
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i2348 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'm_GoldText')
  var i2351 = i2349[2]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 2, i2350, '')
  }
  i2348.Keys = i2350
  i2348.gainKeyColor = new pc.Color(i2349[3], i2349[4], i2349[5], i2349[6])
  return i2348
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i2354 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'm_LoseEvent')
  return i2354
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i2356 = root || request.c( 'CollectableParticleManager' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'keyParticlePrefab')
  request.r(i2357[2], i2357[3], 0, i2356, 'coinParticlePrefab')
  i2356.keyParticleCount = i2357[4]
  i2356.coinParticlesCount = i2357[5]
  return i2356
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i2358 = root || request.c( 'CheerPhraseController' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( i2361[i + 0] );
  }
  i2358.phrases = i2360
  i2358.cheerPhraseColour = new pc.Color(i2359[1], i2359[2], i2359[3], i2359[4])
  request.r(i2359[5], i2359[6], 0, i2358, 'cheerText')
  request.r(i2359[7], i2359[8], 0, i2358, 'cheerTextAnimator')
  request.r(i2359[9], i2359[10], 0, i2358, 'keyCollectEvent')
  return i2358
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i2364 = root || request.c( 'OutroAnimationController' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'winEvent')
  i2364.endCardDelay = i2365[2]
  var i2367 = i2365[3]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.confettiParticles = i2366
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.aspect = i2371[1]
  i2370.orthographic = !!i2371[2]
  i2370.orthographicSize = i2371[3]
  i2370.backgroundColor = new pc.Color(i2371[4], i2371[5], i2371[6], i2371[7])
  i2370.nearClipPlane = i2371[8]
  i2370.farClipPlane = i2371[9]
  i2370.fieldOfView = i2371[10]
  i2370.depth = i2371[11]
  i2370.clearFlags = i2371[12]
  i2370.cullingMask = i2371[13]
  i2370.rect = i2371[14]
  request.r(i2371[15], i2371[16], 0, i2370, 'targetTexture')
  i2370.usePhysicalProperties = !!i2371[17]
  i2370.focalLength = i2371[18]
  i2370.sensorSize = new pc.Vec2( i2371[19], i2371[20] )
  i2370.lensShift = new pc.Vec2( i2371[21], i2371[22] )
  i2370.gateFit = i2371[23]
  i2370.commandBufferCount = i2371[24]
  i2370.cameraType = i2371[25]
  return i2370
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i2372 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'targetPlayer')
  i2372.m_CameraAnglePreset = i2373[2]
  i2372.m_Offset = new pc.Vec3( i2373[3], i2373[4], i2373[5] )
  i2372.m_LookAtOffset = new pc.Vec3( i2373[6], i2373[7], i2373[8] )
  i2372.m_LockCameraPosition = !!i2373[9]
  i2372.m_SmoothCameraFollow = !!i2373[10]
  i2372.m_SmoothCameraFollowStrength = i2373[11]
  return i2372
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i2374 = root || request.c( 'CoinEffectManager' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'coinEffectPrefab')
  request.r(i2375[2], i2375[3], 0, i2374, 'coinCounter')
  request.r(i2375[4], i2375[5], 0, i2374, 'player')
  i2374.speed = i2375[6]
  request.r(i2375[7], i2375[8], 0, i2374, 'm_CoinEvent')
  i2374.effectPoolCount = i2375[9]
  i2374.offsetZ = i2375[10]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.type = i2377[1]
  i2376.color = new pc.Color(i2377[2], i2377[3], i2377[4], i2377[5])
  i2376.cullingMask = i2377[6]
  i2376.intensity = i2377[7]
  i2376.range = i2377[8]
  i2376.spotAngle = i2377[9]
  i2376.shadows = i2377[10]
  i2376.shadowNormalBias = i2377[11]
  i2376.shadowBias = i2377[12]
  i2376.shadowStrength = i2377[13]
  i2376.shadowResolution = i2377[14]
  i2376.lightmapBakeType = i2377[15]
  i2376.renderMode = i2377[16]
  request.r(i2377[17], i2377[18], 0, i2376, 'cookie')
  i2376.cookieSize = i2377[19]
  return i2376
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i2378 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i2379 = data
  return i2378
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i2380 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_WinEvent')
  i2380.m_SnapToGrid = !!i2381[2]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.isTrigger = !!i2383[1]
  request.r(i2383[2], i2383[3], 0, i2382, 'material')
  request.r(i2383[4], i2383[5], 0, i2382, 'sharedMesh')
  i2382.convex = !!i2383[6]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2385 = data
  i2384.ambientIntensity = i2385[0]
  i2384.reflectionIntensity = i2385[1]
  i2384.ambientMode = i2385[2]
  i2384.ambientLight = new pc.Color(i2385[3], i2385[4], i2385[5], i2385[6])
  i2384.ambientSkyColor = new pc.Color(i2385[7], i2385[8], i2385[9], i2385[10])
  i2384.ambientGroundColor = new pc.Color(i2385[11], i2385[12], i2385[13], i2385[14])
  i2384.ambientEquatorColor = new pc.Color(i2385[15], i2385[16], i2385[17], i2385[18])
  i2384.fogColor = new pc.Color(i2385[19], i2385[20], i2385[21], i2385[22])
  i2384.fogEndDistance = i2385[23]
  i2384.fogStartDistance = i2385[24]
  i2384.fogDensity = i2385[25]
  i2384.fog = !!i2385[26]
  request.r(i2385[27], i2385[28], 0, i2384, 'skybox')
  i2384.fogMode = i2385[29]
  var i2387 = i2385[30]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2387[i + 0]) );
  }
  i2384.lightmaps = i2386
  i2384.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2385[31], i2384.lightProbes)
  i2384.lightmapsMode = i2385[32]
  i2384.mixedBakeMode = i2385[33]
  i2384.environmentLightingMode = i2385[34]
  i2384.ambientProbe = new pc.SphericalHarmonicsL2(i2385[35])
  i2384.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2385[36])
  i2384.useReferenceAmbientProbe = !!i2385[37]
  request.r(i2385[38], i2385[39], 0, i2384, 'customReflection')
  request.r(i2385[40], i2385[41], 0, i2384, 'defaultReflection')
  i2384.defaultReflectionMode = i2385[42]
  i2384.defaultReflectionResolution = i2385[43]
  i2384.sunLightObjectId = i2385[44]
  i2384.pixelLightCount = i2385[45]
  i2384.defaultReflectionHDR = !!i2385[46]
  i2384.hasLightDataAsset = !!i2385[47]
  i2384.hasManualGenerate = !!i2385[48]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'lightmapColor')
  request.r(i2391[2], i2391[3], 0, i2390, 'lightmapDirection')
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2392 = root || new UnityEngine.LightProbes()
  var i2393 = data
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2401 = data
  i2400.name = i2401[0]
  i2400.bounciness = i2401[1]
  i2400.dynamicFriction = i2401[2]
  i2400.staticFriction = i2401[3]
  i2400.frictionCombine = i2401[4]
  i2400.bounceCombine = i2401[5]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2403 = data
  var i2405 = i2403[0]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2405[i + 0]));
  }
  i2402.ShaderCompilationErrors = i2404
  i2402.name = i2403[1]
  i2402.guid = i2403[2]
  var i2407 = i2403[3]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2402.shaderDefinedKeywords = i2406
  var i2409 = i2403[4]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2409[i + 0]) );
  }
  i2402.passes = i2408
  var i2411 = i2403[5]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2411[i + 0]) );
  }
  i2402.usePasses = i2410
  var i2413 = i2403[6]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2413[i + 0]) );
  }
  i2402.defaultParameterValues = i2412
  request.r(i2403[7], i2403[8], 0, i2402, 'unityFallbackShader')
  i2402.readDepth = !!i2403[9]
  i2402.isCreatedByShaderGraph = !!i2403[10]
  i2402.compiled = !!i2403[11]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2417 = data
  i2416.shaderName = i2417[0]
  i2416.errorMessage = i2417[1]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2420 = root || new pc.UnityShaderPass()
  var i2421 = data
  i2420.id = i2421[0]
  i2420.subShaderIndex = i2421[1]
  i2420.name = i2421[2]
  i2420.passType = i2421[3]
  i2420.grabPassTextureName = i2421[4]
  i2420.usePass = !!i2421[5]
  i2420.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[6], i2420.zTest)
  i2420.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[7], i2420.zWrite)
  i2420.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[8], i2420.culling)
  i2420.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2421[9], i2420.blending)
  i2420.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2421[10], i2420.alphaBlending)
  i2420.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[11], i2420.colorWriteMask)
  i2420.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[12], i2420.offsetUnits)
  i2420.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[13], i2420.offsetFactor)
  i2420.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[14], i2420.stencilRef)
  i2420.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[15], i2420.stencilReadMask)
  i2420.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[16], i2420.stencilWriteMask)
  i2420.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2421[17], i2420.stencilOp)
  i2420.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2421[18], i2420.stencilOpFront)
  i2420.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2421[19], i2420.stencilOpBack)
  var i2423 = i2421[20]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2423[i + 0]) );
  }
  i2420.tags = i2422
  var i2425 = i2421[21]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( i2425[i + 0] );
  }
  i2420.passDefinedKeywords = i2424
  var i2427 = i2421[22]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2427[i + 0]) );
  }
  i2420.passDefinedKeywordGroups = i2426
  var i2429 = i2421[23]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2429[i + 0]) );
  }
  i2420.variants = i2428
  var i2431 = i2421[24]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2431[i + 0]) );
  }
  i2420.excludedVariants = i2430
  i2420.hasDepthReader = !!i2421[25]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2433 = data
  i2432.val = i2433[0]
  i2432.name = i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2435 = data
  i2434.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[0], i2434.src)
  i2434.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[1], i2434.dst)
  i2434.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[2], i2434.op)
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2437 = data
  i2436.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[0], i2436.pass)
  i2436.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[1], i2436.fail)
  i2436.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[2], i2436.zFail)
  i2436.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[3], i2436.comp)
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2441 = data
  i2440.name = i2441[0]
  i2440.value = i2441[1]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2445 = data
  var i2447 = i2445[0]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( i2447[i + 0] );
  }
  i2444.keywords = i2446
  i2444.hasDiscard = !!i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2451 = data
  i2450.passId = i2451[0]
  i2450.subShaderIndex = i2451[1]
  var i2453 = i2451[2]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( i2453[i + 0] );
  }
  i2450.keywords = i2452
  i2450.vertexProgram = i2451[3]
  i2450.fragmentProgram = i2451[4]
  i2450.exportedForWebGl2 = !!i2451[5]
  i2450.readDepth = !!i2451[6]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'shader')
  i2456.pass = i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.type = i2461[1]
  i2460.value = new pc.Vec4( i2461[2], i2461[3], i2461[4], i2461[5] )
  i2460.textureValue = i2461[6]
  i2460.shaderPropertyFlag = i2461[7]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2463 = data
  i2462.name = i2463[0]
  request.r(i2463[1], i2463[2], 0, i2462, 'texture')
  i2462.aabb = i2463[3]
  i2462.vertices = i2463[4]
  i2462.triangles = i2463[5]
  i2462.textureRect = UnityEngine.Rect.MinMaxRect(i2463[6], i2463[7], i2463[8], i2463[9])
  i2462.packedRect = UnityEngine.Rect.MinMaxRect(i2463[10], i2463[11], i2463[12], i2463[13])
  i2462.border = new pc.Vec4( i2463[14], i2463[15], i2463[16], i2463[17] )
  i2462.transparency = i2463[18]
  i2462.bounds = i2463[19]
  i2462.pixelsPerUnit = i2463[20]
  i2462.textureWidth = i2463[21]
  i2462.textureHeight = i2463[22]
  i2462.nativeSize = new pc.Vec2( i2463[23], i2463[24] )
  i2462.pivot = new pc.Vec2( i2463[25], i2463[26] )
  i2462.textureRectOffset = new pc.Vec2( i2463[27], i2463[28] )
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2465 = data
  i2464.name = i2465[0]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2467 = data
  i2466.name = i2467[0]
  i2466.wrapMode = i2467[1]
  i2466.isLooping = !!i2467[2]
  i2466.length = i2467[3]
  var i2469 = i2467[4]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2469[i + 0]) );
  }
  i2466.curves = i2468
  var i2471 = i2467[5]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2471[i + 0]) );
  }
  i2466.events = i2470
  i2466.halfPrecision = !!i2467[6]
  i2466._frameRate = i2467[7]
  i2466.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2467[8], i2466.localBounds)
  i2466.hasMuscleCurves = !!i2467[9]
  var i2473 = i2467[10]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( i2473[i + 0] );
  }
  i2466.clipMuscleConstant = i2472
  i2466.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2467[11], i2466.clipBindingConstant)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2477 = data
  i2476.path = i2477[0]
  i2476.hash = i2477[1]
  i2476.componentType = i2477[2]
  i2476.property = i2477[3]
  i2476.keys = i2477[4]
  var i2479 = i2477[5]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2479[i + 0]) );
  }
  i2476.objectReferenceKeys = i2478
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2483 = data
  i2482.functionName = i2483[0]
  i2482.floatParameter = i2483[1]
  i2482.intParameter = i2483[2]
  i2482.stringParameter = i2483[3]
  request.r(i2483[4], i2483[5], 0, i2482, 'objectReferenceParameter')
  i2482.time = i2483[6]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2485 = data
  i2484.center = new pc.Vec3( i2485[0], i2485[1], i2485[2] )
  i2484.extends = new pc.Vec3( i2485[3], i2485[4], i2485[5] )
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( i2491[i + 0] );
  }
  i2488.genericBindings = i2490
  var i2493 = i2489[1]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( i2493[i + 0] );
  }
  i2488.pptrCurveMapping = i2492
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2497 = data
  i2496.time = i2497[0]
  request.r(i2497[1], i2497[2], 0, i2496, 'value')
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.ascent = i2499[1]
  i2498.originalLineHeight = i2499[2]
  i2498.fontSize = i2499[3]
  var i2501 = i2499[4]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2501[i + 0]) );
  }
  i2498.characterInfo = i2500
  request.r(i2499[5], i2499[6], 0, i2498, 'texture')
  i2498.originalFontSize = i2499[7]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2505 = data
  i2504.index = i2505[0]
  i2504.advance = i2505[1]
  i2504.bearing = i2505[2]
  i2504.glyphWidth = i2505[3]
  i2504.glyphHeight = i2505[4]
  i2504.minX = i2505[5]
  i2504.maxX = i2505[6]
  i2504.minY = i2505[7]
  i2504.maxY = i2505[8]
  i2504.uvBottomLeftX = i2505[9]
  i2504.uvBottomLeftY = i2505[10]
  i2504.uvBottomRightX = i2505[11]
  i2504.uvBottomRightY = i2505[12]
  i2504.uvTopLeftX = i2505[13]
  i2504.uvTopLeftY = i2505[14]
  i2504.uvTopRightX = i2505[15]
  i2504.uvTopRightY = i2505[16]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2507 = data
  i2506.name = i2507[0]
  var i2509 = i2507[1]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2509[i + 0]) );
  }
  i2506.layers = i2508
  var i2511 = i2507[2]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2511[i + 0]) );
  }
  i2506.parameters = i2510
  i2506.animationClips = i2507[3]
  i2506.avatarUnsupported = i2507[4]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.defaultWeight = i2515[1]
  i2514.blendingMode = i2515[2]
  i2514.avatarMask = i2515[3]
  i2514.syncedLayerIndex = i2515[4]
  i2514.syncedLayerAffectsTiming = !!i2515[5]
  i2514.syncedLayers = i2515[6]
  i2514.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2515[7], i2514.stateMachine)
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2517 = data
  i2516.id = i2517[0]
  i2516.name = i2517[1]
  i2516.path = i2517[2]
  var i2519 = i2517[3]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2519[i + 0]) );
  }
  i2516.states = i2518
  var i2521 = i2517[4]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2521[i + 0]) );
  }
  i2516.machines = i2520
  var i2523 = i2517[5]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2523[i + 0]) );
  }
  i2516.entryStateTransitions = i2522
  var i2525 = i2517[6]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2525[i + 0]) );
  }
  i2516.exitStateTransitions = i2524
  var i2527 = i2517[7]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2527[i + 0]) );
  }
  i2516.anyStateTransitions = i2526
  i2516.defaultStateId = i2517[8]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2531 = data
  i2530.id = i2531[0]
  i2530.name = i2531[1]
  i2530.cycleOffset = i2531[2]
  i2530.cycleOffsetParameter = i2531[3]
  i2530.cycleOffsetParameterActive = !!i2531[4]
  i2530.mirror = !!i2531[5]
  i2530.mirrorParameter = i2531[6]
  i2530.mirrorParameterActive = !!i2531[7]
  i2530.motionId = i2531[8]
  i2530.nameHash = i2531[9]
  i2530.fullPathHash = i2531[10]
  i2530.speed = i2531[11]
  i2530.speedParameter = i2531[12]
  i2530.speedParameterActive = !!i2531[13]
  i2530.tag = i2531[14]
  i2530.tagHash = i2531[15]
  i2530.writeDefaultValues = !!i2531[16]
  var i2533 = i2531[17]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2530.behaviours = i2532
  var i2535 = i2531[18]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2535[i + 0]) );
  }
  i2530.transitions = i2534
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2541 = data
  i2540.fullPath = i2541[0]
  i2540.canTransitionToSelf = !!i2541[1]
  i2540.duration = i2541[2]
  i2540.exitTime = i2541[3]
  i2540.hasExitTime = !!i2541[4]
  i2540.hasFixedDuration = !!i2541[5]
  i2540.interruptionSource = i2541[6]
  i2540.offset = i2541[7]
  i2540.orderedInterruption = !!i2541[8]
  i2540.destinationStateId = i2541[9]
  i2540.isExit = !!i2541[10]
  i2540.mute = !!i2541[11]
  i2540.solo = !!i2541[12]
  var i2543 = i2541[13]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2543[i + 0]) );
  }
  i2540.conditions = i2542
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2547 = data
  i2546.mode = i2547[0]
  i2546.parameter = i2547[1]
  i2546.threshold = i2547[2]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2553 = data
  i2552.destinationStateId = i2553[0]
  i2552.isExit = !!i2553[1]
  i2552.mute = !!i2553[2]
  i2552.solo = !!i2553[3]
  var i2555 = i2553[4]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2555[i + 0]) );
  }
  i2552.conditions = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2559 = data
  i2558.defaultBool = !!i2559[0]
  i2558.defaultFloat = i2559[1]
  i2558.defaultInt = i2559[2]
  i2558.name = i2559[3]
  i2558.nameHash = i2559[4]
  i2558.type = i2559[5]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2561 = data
  i2560.name = i2561[0]
  i2560.bytes64 = i2561[1]
  i2560.data = i2561[2]
  return i2560
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2563 = data
  i2562.hashCode = i2563[0]
  request.r(i2563[1], i2563[2], 0, i2562, 'material')
  i2562.materialHashCode = i2563[3]
  request.r(i2563[4], i2563[5], 0, i2562, 'atlas')
  i2562.normalStyle = i2563[6]
  i2562.normalSpacingOffset = i2563[7]
  i2562.boldStyle = i2563[8]
  i2562.boldSpacing = i2563[9]
  i2562.italicStyle = i2563[10]
  i2562.tabSize = i2563[11]
  i2562.m_Version = i2563[12]
  i2562.m_SourceFontFileGUID = i2563[13]
  request.r(i2563[14], i2563[15], 0, i2562, 'm_SourceFontFile_EditorRef')
  request.r(i2563[16], i2563[17], 0, i2562, 'm_SourceFontFile')
  i2562.m_AtlasPopulationMode = i2563[18]
  i2562.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2563[19], i2562.m_FaceInfo)
  var i2565 = i2563[20]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('UnityEngine.TextCore.Glyph', i2565[i + 0]));
  }
  i2562.m_GlyphTable = i2564
  var i2567 = i2563[21]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('TMPro.TMP_Character', i2567[i + 0]));
  }
  i2562.m_CharacterTable = i2566
  var i2569 = i2563[22]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2562.m_AtlasTextures = i2568
  i2562.m_AtlasTextureIndex = i2563[23]
  i2562.m_IsMultiAtlasTexturesEnabled = !!i2563[24]
  i2562.m_ClearDynamicDataOnBuild = !!i2563[25]
  var i2571 = i2563[26]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('UnityEngine.TextCore.GlyphRect', i2571[i + 0]));
  }
  i2562.m_UsedGlyphRects = i2570
  var i2573 = i2563[27]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('UnityEngine.TextCore.GlyphRect', i2573[i + 0]));
  }
  i2562.m_FreeGlyphRects = i2572
  i2562.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2563[28], i2562.m_fontInfo)
  i2562.m_AtlasWidth = i2563[29]
  i2562.m_AtlasHeight = i2563[30]
  i2562.m_AtlasPadding = i2563[31]
  i2562.m_AtlasRenderMode = i2563[32]
  var i2575 = i2563[33]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.add(request.d('TMPro.TMP_Glyph', i2575[i + 0]));
  }
  i2562.m_glyphInfoList = i2574
  i2562.m_KerningTable = request.d('TMPro.KerningTable', i2563[34], i2562.m_KerningTable)
  i2562.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2563[35], i2562.m_FontFeatureTable)
  var i2577 = i2563[36]
  var i2576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 1, i2576, '')
  }
  i2562.fallbackFontAssets = i2576
  var i2579 = i2563[37]
  var i2578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2579.length; i += 2) {
  request.r(i2579[i + 0], i2579[i + 1], 1, i2578, '')
  }
  i2562.m_FallbackFontAssetTable = i2578
  i2562.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2563[38], i2562.m_CreationSettings)
  var i2581 = i2563[39]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('TMPro.TMP_FontWeightPair', i2581[i + 0]) );
  }
  i2562.m_FontWeightTable = i2580
  var i2583 = i2563[40]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('TMPro.TMP_FontWeightPair', i2583[i + 0]) );
  }
  i2562.fontWeights = i2582
  return i2562
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2585 = data
  i2584.m_FaceIndex = i2585[0]
  i2584.m_FamilyName = i2585[1]
  i2584.m_StyleName = i2585[2]
  i2584.m_PointSize = i2585[3]
  i2584.m_Scale = i2585[4]
  i2584.m_UnitsPerEM = i2585[5]
  i2584.m_LineHeight = i2585[6]
  i2584.m_AscentLine = i2585[7]
  i2584.m_CapLine = i2585[8]
  i2584.m_MeanLine = i2585[9]
  i2584.m_Baseline = i2585[10]
  i2584.m_DescentLine = i2585[11]
  i2584.m_SuperscriptOffset = i2585[12]
  i2584.m_SuperscriptSize = i2585[13]
  i2584.m_SubscriptOffset = i2585[14]
  i2584.m_SubscriptSize = i2585[15]
  i2584.m_UnderlineOffset = i2585[16]
  i2584.m_UnderlineThickness = i2585[17]
  i2584.m_StrikethroughOffset = i2585[18]
  i2584.m_StrikethroughThickness = i2585[19]
  i2584.m_TabWidth = i2585[20]
  return i2584
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2589 = data
  i2588.m_Index = i2589[0]
  i2588.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2589[1], i2588.m_Metrics)
  i2588.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2589[2], i2588.m_GlyphRect)
  i2588.m_Scale = i2589[3]
  i2588.m_AtlasIndex = i2589[4]
  i2588.m_ClassDefinitionType = i2589[5]
  return i2588
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2591 = data
  i2590.m_Width = i2591[0]
  i2590.m_Height = i2591[1]
  i2590.m_HorizontalBearingX = i2591[2]
  i2590.m_HorizontalBearingY = i2591[3]
  i2590.m_HorizontalAdvance = i2591[4]
  return i2590
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2593 = data
  i2592.m_X = i2593[0]
  i2592.m_Y = i2593[1]
  i2592.m_Width = i2593[2]
  i2592.m_Height = i2593[3]
  return i2592
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2596 = root || request.c( 'TMPro.TMP_Character' )
  var i2597 = data
  i2596.m_ElementType = i2597[0]
  i2596.m_Unicode = i2597[1]
  i2596.m_GlyphIndex = i2597[2]
  i2596.m_Scale = i2597[3]
  return i2596
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2603 = data
  i2602.Name = i2603[0]
  i2602.PointSize = i2603[1]
  i2602.Scale = i2603[2]
  i2602.CharacterCount = i2603[3]
  i2602.LineHeight = i2603[4]
  i2602.Baseline = i2603[5]
  i2602.Ascender = i2603[6]
  i2602.CapHeight = i2603[7]
  i2602.Descender = i2603[8]
  i2602.CenterLine = i2603[9]
  i2602.SuperscriptOffset = i2603[10]
  i2602.SubscriptOffset = i2603[11]
  i2602.SubSize = i2603[12]
  i2602.Underline = i2603[13]
  i2602.UnderlineThickness = i2603[14]
  i2602.strikethrough = i2603[15]
  i2602.strikethroughThickness = i2603[16]
  i2602.TabWidth = i2603[17]
  i2602.Padding = i2603[18]
  i2602.AtlasWidth = i2603[19]
  i2602.AtlasHeight = i2603[20]
  return i2602
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2607 = data
  i2606.id = i2607[0]
  i2606.x = i2607[1]
  i2606.y = i2607[2]
  i2606.width = i2607[3]
  i2606.height = i2607[4]
  i2606.xOffset = i2607[5]
  i2606.yOffset = i2607[6]
  i2606.xAdvance = i2607[7]
  i2606.scale = i2607[8]
  return i2606
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.KerningTable' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.add(request.d('TMPro.KerningPair', i2611[i + 0]));
  }
  i2608.kerningPairs = i2610
  return i2608
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.KerningPair' )
  var i2615 = data
  i2614.xOffset = i2615[0]
  i2614.m_FirstGlyph = i2615[1]
  i2614.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2615[2], i2614.m_FirstGlyphAdjustments)
  i2614.m_SecondGlyph = i2615[3]
  i2614.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2615[4], i2614.m_SecondGlyphAdjustments)
  i2614.m_IgnoreSpacingAdjustments = !!i2615[5]
  return i2614
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2616 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2617 = data
  var i2619 = i2617[0]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2619[i + 0]));
  }
  i2616.m_GlyphPairAdjustmentRecords = i2618
  return i2616
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2623 = data
  i2622.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2623[0], i2622.m_FirstAdjustmentRecord)
  i2622.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2623[1], i2622.m_SecondAdjustmentRecord)
  i2622.m_FeatureLookupFlags = i2623[2]
  return i2622
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2625 = data
  i2624.m_GlyphIndex = i2625[0]
  i2624.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2625[1], i2624.m_GlyphValueRecord)
  return i2624
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2627 = data
  i2626.m_XPlacement = i2627[0]
  i2626.m_YPlacement = i2627[1]
  i2626.m_XAdvance = i2627[2]
  i2626.m_YAdvance = i2627[3]
  return i2626
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2631 = data
  i2630.sourceFontFileName = i2631[0]
  i2630.sourceFontFileGUID = i2631[1]
  i2630.pointSizeSamplingMode = i2631[2]
  i2630.pointSize = i2631[3]
  i2630.padding = i2631[4]
  i2630.packingMode = i2631[5]
  i2630.atlasWidth = i2631[6]
  i2630.atlasHeight = i2631[7]
  i2630.characterSetSelectionMode = i2631[8]
  i2630.characterSequence = i2631[9]
  i2630.referencedFontAssetGUID = i2631[10]
  i2630.referencedTextAssetGUID = i2631[11]
  i2630.fontStyle = i2631[12]
  i2630.fontStyleModifier = i2631[13]
  i2630.renderMode = i2631[14]
  i2630.includeFontFeatures = !!i2631[15]
  return i2630
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, 'regularTypeface')
  request.r(i2635[2], i2635[3], 0, i2634, 'italicTypeface')
  return i2634
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i2636 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i2637 = data
  i2636.Count = i2637[0]
  return i2636
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i2638 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i2639 = data
  return i2638
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2640 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2641 = data
  i2640.useSafeMode = !!i2641[0]
  i2640.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2641[1], i2640.safeModeOptions)
  i2640.timeScale = i2641[2]
  i2640.unscaledTimeScale = i2641[3]
  i2640.useSmoothDeltaTime = !!i2641[4]
  i2640.maxSmoothUnscaledTime = i2641[5]
  i2640.rewindCallbackMode = i2641[6]
  i2640.showUnityEditorReport = !!i2641[7]
  i2640.logBehaviour = i2641[8]
  i2640.drawGizmos = !!i2641[9]
  i2640.defaultRecyclable = !!i2641[10]
  i2640.defaultAutoPlay = i2641[11]
  i2640.defaultUpdateType = i2641[12]
  i2640.defaultTimeScaleIndependent = !!i2641[13]
  i2640.defaultEaseType = i2641[14]
  i2640.defaultEaseOvershootOrAmplitude = i2641[15]
  i2640.defaultEasePeriod = i2641[16]
  i2640.defaultAutoKill = !!i2641[17]
  i2640.defaultLoopType = i2641[18]
  i2640.debugMode = !!i2641[19]
  i2640.debugStoreTargetId = !!i2641[20]
  i2640.showPreviewPanel = !!i2641[21]
  i2640.storeSettingsLocation = i2641[22]
  i2640.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2641[23], i2640.modules)
  i2640.createASMDEF = !!i2641[24]
  i2640.showPlayingTweens = !!i2641[25]
  i2640.showPausedTweens = !!i2641[26]
  return i2640
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2642 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2643 = data
  i2642.logBehaviour = i2643[0]
  i2642.nestedTweenFailureBehaviour = i2643[1]
  return i2642
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2644 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2645 = data
  i2644.showPanel = !!i2645[0]
  i2644.audioEnabled = !!i2645[1]
  i2644.physicsEnabled = !!i2645[2]
  i2644.physics2DEnabled = !!i2645[3]
  i2644.spriteEnabled = !!i2645[4]
  i2644.uiEnabled = !!i2645[5]
  i2644.textMeshProEnabled = !!i2645[6]
  i2644.tk2DEnabled = !!i2645[7]
  i2644.deAudioEnabled = !!i2645[8]
  i2644.deUnityExtendedEnabled = !!i2645[9]
  i2644.epoOutlineEnabled = !!i2645[10]
  return i2644
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.TMP_Settings' )
  var i2647 = data
  i2646.m_enableWordWrapping = !!i2647[0]
  i2646.m_enableKerning = !!i2647[1]
  i2646.m_enableExtraPadding = !!i2647[2]
  i2646.m_enableTintAllSprites = !!i2647[3]
  i2646.m_enableParseEscapeCharacters = !!i2647[4]
  i2646.m_EnableRaycastTarget = !!i2647[5]
  i2646.m_GetFontFeaturesAtRuntime = !!i2647[6]
  i2646.m_missingGlyphCharacter = i2647[7]
  i2646.m_warningsDisabled = !!i2647[8]
  request.r(i2647[9], i2647[10], 0, i2646, 'm_defaultFontAsset')
  i2646.m_defaultFontAssetPath = i2647[11]
  i2646.m_defaultFontSize = i2647[12]
  i2646.m_defaultAutoSizeMinRatio = i2647[13]
  i2646.m_defaultAutoSizeMaxRatio = i2647[14]
  i2646.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2647[15], i2647[16] )
  i2646.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2647[17], i2647[18] )
  i2646.m_autoSizeTextContainer = !!i2647[19]
  i2646.m_IsTextObjectScaleStatic = !!i2647[20]
  var i2649 = i2647[21]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2649.length; i += 2) {
  request.r(i2649[i + 0], i2649[i + 1], 1, i2648, '')
  }
  i2646.m_fallbackFontAssets = i2648
  i2646.m_matchMaterialPreset = !!i2647[22]
  request.r(i2647[23], i2647[24], 0, i2646, 'm_defaultSpriteAsset')
  i2646.m_defaultSpriteAssetPath = i2647[25]
  i2646.m_enableEmojiSupport = !!i2647[26]
  i2646.m_MissingCharacterSpriteUnicode = i2647[27]
  i2646.m_defaultColorGradientPresetsPath = i2647[28]
  request.r(i2647[29], i2647[30], 0, i2646, 'm_defaultStyleSheet')
  i2646.m_StyleSheetsResourcePath = i2647[31]
  request.r(i2647[32], i2647[33], 0, i2646, 'm_leadingCharacters')
  request.r(i2647[34], i2647[35], 0, i2646, 'm_followingCharacters')
  i2646.m_UseModernHangulLineBreakingRules = !!i2647[36]
  return i2646
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2651 = data
  i2650.hashCode = i2651[0]
  request.r(i2651[1], i2651[2], 0, i2650, 'material')
  i2650.materialHashCode = i2651[3]
  request.r(i2651[4], i2651[5], 0, i2650, 'spriteSheet')
  var i2653 = i2651[6]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.add(request.d('TMPro.TMP_Sprite', i2653[i + 0]));
  }
  i2650.spriteInfoList = i2652
  var i2655 = i2651[7]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 1, i2654, '')
  }
  i2650.fallbackSpriteAssets = i2654
  i2650.m_Version = i2651[8]
  i2650.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2651[9], i2650.m_FaceInfo)
  var i2657 = i2651[10]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.add(request.d('TMPro.TMP_SpriteCharacter', i2657[i + 0]));
  }
  i2650.m_SpriteCharacterTable = i2656
  var i2659 = i2651[11]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('TMPro.TMP_SpriteGlyph', i2659[i + 0]));
  }
  i2650.m_SpriteGlyphTable = i2658
  return i2650
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2663 = data
  i2662.name = i2663[0]
  i2662.hashCode = i2663[1]
  i2662.unicode = i2663[2]
  i2662.pivot = new pc.Vec2( i2663[3], i2663[4] )
  request.r(i2663[5], i2663[6], 0, i2662, 'sprite')
  i2662.id = i2663[7]
  i2662.x = i2663[8]
  i2662.y = i2663[9]
  i2662.width = i2663[10]
  i2662.height = i2663[11]
  i2662.xOffset = i2663[12]
  i2662.yOffset = i2663[13]
  i2662.xAdvance = i2663[14]
  i2662.scale = i2663[15]
  return i2662
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2669 = data
  i2668.m_Name = i2669[0]
  i2668.m_HashCode = i2669[1]
  i2668.m_ElementType = i2669[2]
  i2668.m_Unicode = i2669[3]
  i2668.m_GlyphIndex = i2669[4]
  i2668.m_Scale = i2669[5]
  return i2668
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2672 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'sprite')
  i2672.m_Index = i2673[2]
  i2672.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2673[3], i2672.m_Metrics)
  i2672.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2673[4], i2672.m_GlyphRect)
  i2672.m_Scale = i2673[5]
  i2672.m_AtlasIndex = i2673[6]
  i2672.m_ClassDefinitionType = i2673[7]
  return i2672
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('TMPro.TMP_Style', i2677[i + 0]));
  }
  i2674.m_StyleList = i2676
  return i2674
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_Style' )
  var i2681 = data
  i2680.m_Name = i2681[0]
  i2680.m_HashCode = i2681[1]
  i2680.m_OpeningDefinition = i2681[2]
  i2680.m_ClosingDefinition = i2681[3]
  i2680.m_OpeningTagArray = i2681[4]
  i2680.m_ClosingTagArray = i2681[5]
  i2680.m_OpeningTagUnicodeArray = i2681[6]
  i2680.m_ClosingTagUnicodeArray = i2681[7]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2683 = data
  var i2685 = i2683[0]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2685[i + 0]) );
  }
  i2682.files = i2684
  i2682.componentToPrefabIds = i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2689 = data
  i2688.path = i2689[0]
  request.r(i2689[1], i2689[2], 0, i2688, 'unityObject')
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2691 = data
  var i2693 = i2691[0]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2693[i + 0]) );
  }
  i2690.scriptsExecutionOrder = i2692
  var i2695 = i2691[1]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2695[i + 0]) );
  }
  i2690.sortingLayers = i2694
  var i2697 = i2691[2]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2697[i + 0]) );
  }
  i2690.cullingLayers = i2696
  i2690.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2691[3], i2690.timeSettings)
  i2690.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2691[4], i2690.physicsSettings)
  i2690.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2691[5], i2690.physics2DSettings)
  i2690.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2691[6], i2690.qualitySettings)
  i2690.enableRealtimeShadows = !!i2691[7]
  i2690.enableAutoInstancing = !!i2691[8]
  i2690.enableDynamicBatching = !!i2691[9]
  i2690.lightmapEncodingQuality = i2691[10]
  i2690.desiredColorSpace = i2691[11]
  var i2699 = i2691[12]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( i2699[i + 0] );
  }
  i2690.allTags = i2698
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.value = i2703[1]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2707 = data
  i2706.id = i2707[0]
  i2706.name = i2707[1]
  i2706.value = i2707[2]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2711 = data
  i2710.id = i2711[0]
  i2710.name = i2711[1]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2713 = data
  i2712.fixedDeltaTime = i2713[0]
  i2712.maximumDeltaTime = i2713[1]
  i2712.timeScale = i2713[2]
  i2712.maximumParticleTimestep = i2713[3]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2715 = data
  i2714.gravity = new pc.Vec3( i2715[0], i2715[1], i2715[2] )
  i2714.defaultSolverIterations = i2715[3]
  i2714.bounceThreshold = i2715[4]
  i2714.autoSyncTransforms = !!i2715[5]
  i2714.autoSimulation = !!i2715[6]
  var i2717 = i2715[7]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2717[i + 0]) );
  }
  i2714.collisionMatrix = i2716
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2721 = data
  i2720.enabled = !!i2721[0]
  i2720.layerId = i2721[1]
  i2720.otherLayerId = i2721[2]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2723 = data
  request.r(i2723[0], i2723[1], 0, i2722, 'material')
  i2722.gravity = new pc.Vec2( i2723[2], i2723[3] )
  i2722.positionIterations = i2723[4]
  i2722.velocityIterations = i2723[5]
  i2722.velocityThreshold = i2723[6]
  i2722.maxLinearCorrection = i2723[7]
  i2722.maxAngularCorrection = i2723[8]
  i2722.maxTranslationSpeed = i2723[9]
  i2722.maxRotationSpeed = i2723[10]
  i2722.baumgarteScale = i2723[11]
  i2722.baumgarteTOIScale = i2723[12]
  i2722.timeToSleep = i2723[13]
  i2722.linearSleepTolerance = i2723[14]
  i2722.angularSleepTolerance = i2723[15]
  i2722.defaultContactOffset = i2723[16]
  i2722.autoSimulation = !!i2723[17]
  i2722.queriesHitTriggers = !!i2723[18]
  i2722.queriesStartInColliders = !!i2723[19]
  i2722.callbacksOnDisable = !!i2723[20]
  i2722.reuseCollisionCallbacks = !!i2723[21]
  i2722.autoSyncTransforms = !!i2723[22]
  var i2725 = i2723[23]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2725[i + 0]) );
  }
  i2722.collisionMatrix = i2724
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2729 = data
  i2728.enabled = !!i2729[0]
  i2728.layerId = i2729[1]
  i2728.otherLayerId = i2729[2]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2731 = data
  var i2733 = i2731[0]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2733[i + 0]) );
  }
  i2730.qualityLevels = i2732
  var i2735 = i2731[1]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( i2735[i + 0] );
  }
  i2730.names = i2734
  i2730.shadows = i2731[2]
  i2730.anisotropicFiltering = i2731[3]
  i2730.antiAliasing = i2731[4]
  i2730.lodBias = i2731[5]
  i2730.shadowCascades = i2731[6]
  i2730.shadowDistance = i2731[7]
  i2730.shadowmaskMode = i2731[8]
  i2730.shadowProjection = i2731[9]
  i2730.shadowResolution = i2731[10]
  i2730.softParticles = !!i2731[11]
  i2730.softVegetation = !!i2731[12]
  i2730.activeColorSpace = i2731[13]
  i2730.desiredColorSpace = i2731[14]
  i2730.masterTextureLimit = i2731[15]
  i2730.maxQueuedFrames = i2731[16]
  i2730.particleRaycastBudget = i2731[17]
  i2730.pixelLightCount = i2731[18]
  i2730.realtimeReflectionProbes = !!i2731[19]
  i2730.shadowCascade2Split = i2731[20]
  i2730.shadowCascade4Split = new pc.Vec3( i2731[21], i2731[22], i2731[23] )
  i2730.streamingMipmapsActive = !!i2731[24]
  i2730.vSyncCount = i2731[25]
  i2730.asyncUploadBufferSize = i2731[26]
  i2730.asyncUploadTimeSlice = i2731[27]
  i2730.billboardsFaceCameraPosition = !!i2731[28]
  i2730.shadowNearPlaneOffset = i2731[29]
  i2730.streamingMipmapsMemoryBudget = i2731[30]
  i2730.maximumLODLevel = i2731[31]
  i2730.streamingMipmapsAddAllCameras = !!i2731[32]
  i2730.streamingMipmapsMaxLevelReduction = i2731[33]
  i2730.streamingMipmapsRenderersPerFrame = i2731[34]
  i2730.resolutionScalingFixedDPIFactor = i2731[35]
  i2730.streamingMipmapsMaxFileIORequests = i2731[36]
  i2730.currentQualityLevel = i2731[37]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2741 = data
  i2740.weight = i2741[0]
  i2740.vertices = i2741[1]
  i2740.normals = i2741[2]
  i2740.tangents = i2741[3]
  return i2740
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2743 = data
  i2742.xPlacement = i2743[0]
  i2742.yPlacement = i2743[1]
  i2742.xAdvance = i2743[2]
  i2742.yAdvance = i2743[3]
  return i2742
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[58],"87":[40],"88":[40],"89":[40],"90":[40],"91":[40],"92":[40],"93":[40],"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[95],"102":[95],"103":[95],"104":[95],"105":[95],"106":[95],"107":[95],"108":[58],"109":[37],"110":[111],"112":[111],"1":[0],"69":[113],"114":[113],"115":[10],"116":[113],"117":[0],"44":[37,0],"22":[0,16],"118":[0],"119":[16,0],"120":[37],"121":[16,0],"122":[0],"123":[124],"125":[0],"126":[0],"4":[1],"18":[16,0],"17":[0],"3":[1],"127":[0],"128":[0],"129":[0],"130":[0],"131":[0],"132":[0],"133":[0],"12":[0],"134":[0],"9":[16,0],"135":[0],"136":[0],"137":[0],"138":[0],"11":[16,0],"139":[0],"140":[51],"141":[51],"52":[51],"142":[51],"143":[58],"144":[58],"145":[124],"146":[124]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Texture2D","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Transform","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","HyperCasual.Runner.SaveManager","CoinEffectMove","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","PlayerController","UnityEngine.BoxCollider","HyperCasual.Runner.Gate","TMPro.TextMeshPro","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","SimpleDeactivateOnTap","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","UnityEngine.Camera","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","CollectableParticleManager","CheerPhraseController","OutroAnimationController","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","UnityEngine.Light","HyperCasual.Runner.LevelManager","HyperCasual.Runner.FinishLine","UnityEngine.MeshCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.18f1";

Deserializers.productName = "Luna Tutorial";

Deserializers.lunaInitializationTime = "06/27/2025 13:17:35";

Deserializers.lunaDaysRunning = "2.8";

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

Deserializers.buildID = "ea9932dc-1b83-4192-89bb-99ac7369dd31";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

