var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2093 = data
  i2092.pivot = new pc.Vec2( i2093[0], i2093[1] )
  i2092.anchorMin = new pc.Vec2( i2093[2], i2093[3] )
  i2092.anchorMax = new pc.Vec2( i2093[4], i2093[5] )
  i2092.sizeDelta = new pc.Vec2( i2093[6], i2093[7] )
  i2092.anchoredPosition3D = new pc.Vec3( i2093[8], i2093[9], i2093[10] )
  i2092.rotation = new pc.Quat(i2093[11], i2093[12], i2093[13], i2093[14])
  i2092.scale = new pc.Vec3( i2093[15], i2093[16], i2093[17] )
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.planeDistance = i2095[1]
  i2094.referencePixelsPerUnit = i2095[2]
  i2094.isFallbackOverlay = !!i2095[3]
  i2094.renderMode = i2095[4]
  i2094.renderOrder = i2095[5]
  i2094.sortingLayerName = i2095[6]
  i2094.sortingOrder = i2095[7]
  i2094.scaleFactor = i2095[8]
  request.r(i2095[9], i2095[10], 0, i2094, 'worldCamera')
  i2094.overrideSorting = !!i2095[11]
  i2094.pixelPerfect = !!i2095[12]
  i2094.targetDisplay = i2095[13]
  i2094.overridePixelPerfect = !!i2095[14]
  return i2094
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2097 = data
  i2096.m_UiScaleMode = i2097[0]
  i2096.m_ReferencePixelsPerUnit = i2097[1]
  i2096.m_ScaleFactor = i2097[2]
  i2096.m_ReferenceResolution = new pc.Vec2( i2097[3], i2097[4] )
  i2096.m_ScreenMatchMode = i2097[5]
  i2096.m_MatchWidthOrHeight = i2097[6]
  i2096.m_PhysicalUnit = i2097[7]
  i2096.m_FallbackScreenDPI = i2097[8]
  i2096.m_DefaultSpriteDPI = i2097[9]
  i2096.m_DynamicPixelsPerUnit = i2097[10]
  i2096.m_PresetInfoIsWorld = !!i2097[11]
  return i2096
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2099 = data
  i2098.m_IgnoreReversedGraphics = !!i2099[0]
  i2098.m_BlockingObjects = i2099[1]
  i2098.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2099[2] )
  return i2098
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i2100 = root || request.c( 'EndCardController' )
  var i2101 = data
  i2100.alwaysShowEndcardTESTING = !!i2101[0]
  i2100.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i2101[1], i2100.EndCardOpenedEvent)
  i2100._backgroundColor = new pc.Color(i2101[2], i2101[3], i2101[4], i2101[5])
  request.r(i2101[6], i2101[7], 0, i2100, '_backgroundTexture')
  request.r(i2101[8], i2101[9], 0, i2100, '_iconTexture')
  i2100._iconColor = new pc.Color(i2101[10], i2101[11], i2101[12], i2101[13])
  request.r(i2101[14], i2101[15], 0, i2100, '_buttonTexture')
  i2100._buttonColor = new pc.Color(i2101[16], i2101[17], i2101[18], i2101[19])
  i2100._endCardDescriptionText = i2101[20]
  i2100._CTAButtonText = i2101[21]
  i2100._useBestFitOnCTA = !!i2101[22]
  i2100._CTAFontColor = new pc.Color(i2101[23], i2101[24], i2101[25], i2101[26])
  i2100._descriptionFontColor = new pc.Color(i2101[27], i2101[28], i2101[29], i2101[30])
  request.r(i2101[31], i2101[32], 0, i2100, '_CTAFont')
  request.r(i2101[33], i2101[34], 0, i2100, '_descriptionFont')
  i2100._CTAFontSize = i2101[35]
  i2100._descriptionFontSize = i2101[36]
  i2100._centerDescriptionX = !!i2101[37]
  i2100._centerDescriptionY = !!i2101[38]
  i2100._centerButtonX = !!i2101[39]
  i2100._centerButtonY = !!i2101[40]
  i2100._descriptionPositionX = i2101[41]
  i2100._descriptionPositionY = i2101[42]
  i2100._buttonPositionX = i2101[43]
  i2100._buttonPositionY = i2101[44]
  i2100._CTAFontSizeLandscape = i2101[45]
  i2100._descriptionFontSizeLandscape = i2101[46]
  i2100._centerDescriptionXLandscape = !!i2101[47]
  i2100._centerDescriptionYLandscape = !!i2101[48]
  i2100._centerButtonXLandscape = !!i2101[49]
  i2100._centerButtonYLandscape = !!i2101[50]
  i2100._descriptionPositionXLandscape = i2101[51]
  i2100._descriptionPositionYLandscape = i2101[52]
  i2100._buttonPositionXLandscape = i2101[53]
  i2100._buttonPositionYLandscape = i2101[54]
  i2100._centerIconX = !!i2101[55]
  i2100._centerIconY = !!i2101[56]
  i2100._iconPositionX = i2101[57]
  i2100._iconPositionY = i2101[58]
  i2100._iconSize = i2101[59]
  i2100._roundEdgesOnIcon = !!i2101[60]
  i2100._centerIconXLandscape = !!i2101[61]
  i2100._centerIconYLandscape = !!i2101[62]
  i2100._iconPositionXLandscape = i2101[63]
  i2100._iconPositionYLandscape = i2101[64]
  i2100._iconSizeLandscape = i2101[65]
  i2100._roundEdgesOnIconLandscape = !!i2101[66]
  i2100._endCardClickableOptions = i2101[67]
  i2100._buttonAnimationType = i2101[68]
  i2100._endCardPortraitAnimationType = i2101[69]
  i2100._endCardLandscapeAnimationType = i2101[70]
  request.r(i2101[71], i2101[72], 0, i2100, '_backgroundImage')
  request.r(i2101[73], i2101[74], 0, i2100, '_CTAButton')
  request.r(i2101[75], i2101[76], 0, i2100, '_ScreenCTAButton')
  request.r(i2101[77], i2101[78], 0, i2100, '_CTAButtonTextText')
  request.r(i2101[79], i2101[80], 0, i2100, '_EndCardDescriptionTextText')
  request.r(i2101[81], i2101[82], 0, i2100, '_maskIcon')
  request.r(i2101[83], i2101[84], 0, i2100, '_iconRect')
  request.r(i2101[85], i2101[86], 0, i2100, '_iconRectMask')
  request.r(i2101[87], i2101[88], 0, i2100, '_descriptionRect')
  request.r(i2101[89], i2101[90], 0, i2100, '_buttonRect')
  request.r(i2101[91], i2101[92], 0, i2100, '_CTAButtonAnimator')
  request.r(i2101[93], i2101[94], 0, i2100, '_endCardAnimator')
  request.r(i2101[95], i2101[96], 0, i2100, '_iconImage')
  request.r(i2101[97], i2101[98], 0, i2100, '_CTAButtonImage')
  return i2100
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2103 = data
  i2102.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2103[0], i2102.m_PersistentCalls)
  return i2102
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2105 = data
  var i2107 = i2105[0]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(request.d('UnityEngine.Events.PersistentCall', i2107[i + 0]));
  }
  i2104.m_Calls = i2106
  return i2104
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'm_Target')
  i2110.m_TargetAssemblyTypeName = i2111[2]
  i2110.m_MethodName = i2111[3]
  i2110.m_Mode = i2111[4]
  i2110.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2111[5], i2110.m_Arguments)
  i2110.m_CallState = i2111[6]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'animatorController')
  request.r(i2113[2], i2113[3], 0, i2112, 'avatar')
  i2112.updateMode = i2113[4]
  i2112.hasTransformHierarchy = !!i2113[5]
  i2112.applyRootMotion = !!i2113[6]
  var i2115 = i2113[7]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 2) {
  request.r(i2115[i + 0], i2115[i + 1], 2, i2114, '')
  }
  i2112.humanBones = i2114
  i2112.enabled = !!i2113[8]
  return i2112
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i2118 = root || request.c( 'EndCardSetScale' )
  var i2119 = data
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2121 = data
  i2120.cullTransparentMesh = !!i2121[0]
  return i2120
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2123 = data
  i2122.m_AspectMode = i2123[0]
  i2122.m_AspectRatio = i2123[1]
  return i2122
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'm_Texture')
  i2124.m_UVRect = UnityEngine.Rect.MinMaxRect(i2125[2], i2125[3], i2125[4], i2125[5])
  request.r(i2125[6], i2125[7], 0, i2124, 'm_Material')
  i2124.m_Maskable = !!i2125[8]
  i2124.m_Color = new pc.Color(i2125[9], i2125[10], i2125[11], i2125[12])
  i2124.m_RaycastTarget = !!i2125[13]
  i2124.m_RaycastPadding = new pc.Vec4( i2125[14], i2125[15], i2125[16], i2125[17] )
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.tagId = i2127[1]
  i2126.enabled = !!i2127[2]
  i2126.isStatic = !!i2127[3]
  i2126.layer = i2127[4]
  return i2126
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2129 = data
  i2128.m_ShowMaskGraphic = !!i2129[0]
  return i2128
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.Image' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'm_Sprite')
  i2130.m_Type = i2131[2]
  i2130.m_PreserveAspect = !!i2131[3]
  i2130.m_FillCenter = !!i2131[4]
  i2130.m_FillMethod = i2131[5]
  i2130.m_FillAmount = i2131[6]
  i2130.m_FillClockwise = !!i2131[7]
  i2130.m_FillOrigin = i2131[8]
  i2130.m_UseSpriteMesh = !!i2131[9]
  i2130.m_PixelsPerUnitMultiplier = i2131[10]
  request.r(i2131[11], i2131[12], 0, i2130, 'm_Material')
  i2130.m_Maskable = !!i2131[13]
  i2130.m_Color = new pc.Color(i2131[14], i2131[15], i2131[16], i2131[17])
  i2130.m_RaycastTarget = !!i2131[18]
  i2130.m_RaycastPadding = new pc.Vec4( i2131[19], i2131[20], i2131[21], i2131[22] )
  return i2130
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.UI.Text' )
  var i2133 = data
  i2132.m_FontData = request.d('UnityEngine.UI.FontData', i2133[0], i2132.m_FontData)
  i2132.m_Text = i2133[1]
  request.r(i2133[2], i2133[3], 0, i2132, 'm_Material')
  i2132.m_Maskable = !!i2133[4]
  i2132.m_Color = new pc.Color(i2133[5], i2133[6], i2133[7], i2133[8])
  i2132.m_RaycastTarget = !!i2133[9]
  i2132.m_RaycastPadding = new pc.Vec4( i2133[10], i2133[11], i2133[12], i2133[13] )
  return i2132
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'm_Font')
  i2134.m_FontSize = i2135[2]
  i2134.m_FontStyle = i2135[3]
  i2134.m_BestFit = !!i2135[4]
  i2134.m_MinSize = i2135[5]
  i2134.m_MaxSize = i2135[6]
  i2134.m_Alignment = i2135[7]
  i2134.m_AlignByGeometry = !!i2135[8]
  i2134.m_RichText = !!i2135[9]
  i2134.m_HorizontalOverflow = i2135[10]
  i2134.m_VerticalOverflow = i2135[11]
  i2134.m_LineSpacing = i2135[12]
  return i2134
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.Button' )
  var i2137 = data
  i2136.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2137[0], i2136.m_OnClick)
  i2136.m_Navigation = request.d('UnityEngine.UI.Navigation', i2137[1], i2136.m_Navigation)
  i2136.m_Transition = i2137[2]
  i2136.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2137[3], i2136.m_Colors)
  i2136.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2137[4], i2136.m_SpriteState)
  i2136.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2137[5], i2136.m_AnimationTriggers)
  i2136.m_Interactable = !!i2137[6]
  request.r(i2137[7], i2137[8], 0, i2136, 'm_TargetGraphic')
  return i2136
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2139 = data
  i2138.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2139[0], i2138.m_PersistentCalls)
  return i2138
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'm_ObjectArgument')
  i2140.m_ObjectArgumentAssemblyTypeName = i2141[2]
  i2140.m_IntArgument = i2141[3]
  i2140.m_FloatArgument = i2141[4]
  i2140.m_StringArgument = i2141[5]
  i2140.m_BoolArgument = !!i2141[6]
  return i2140
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2143 = data
  i2142.m_Mode = i2143[0]
  i2142.m_WrapAround = !!i2143[1]
  request.r(i2143[2], i2143[3], 0, i2142, 'm_SelectOnUp')
  request.r(i2143[4], i2143[5], 0, i2142, 'm_SelectOnDown')
  request.r(i2143[6], i2143[7], 0, i2142, 'm_SelectOnLeft')
  request.r(i2143[8], i2143[9], 0, i2142, 'm_SelectOnRight')
  return i2142
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2145 = data
  i2144.m_NormalColor = new pc.Color(i2145[0], i2145[1], i2145[2], i2145[3])
  i2144.m_HighlightedColor = new pc.Color(i2145[4], i2145[5], i2145[6], i2145[7])
  i2144.m_PressedColor = new pc.Color(i2145[8], i2145[9], i2145[10], i2145[11])
  i2144.m_SelectedColor = new pc.Color(i2145[12], i2145[13], i2145[14], i2145[15])
  i2144.m_DisabledColor = new pc.Color(i2145[16], i2145[17], i2145[18], i2145[19])
  i2144.m_ColorMultiplier = i2145[20]
  i2144.m_FadeDuration = i2145[21]
  return i2144
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'm_HighlightedSprite')
  request.r(i2147[2], i2147[3], 0, i2146, 'm_PressedSprite')
  request.r(i2147[4], i2147[5], 0, i2146, 'm_SelectedSprite')
  request.r(i2147[6], i2147[7], 0, i2146, 'm_DisabledSprite')
  return i2146
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2149 = data
  i2148.m_NormalTrigger = i2149[0]
  i2148.m_HighlightedTrigger = i2149[1]
  i2148.m_PressedTrigger = i2149[2]
  i2148.m_SelectedTrigger = i2149[3]
  i2148.m_DisabledTrigger = i2149[4]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2151 = data
  i2150.m_Alpha = i2151[0]
  i2150.m_Interactable = !!i2151[1]
  i2150.m_BlocksRaycasts = !!i2151[2]
  i2150.m_IgnoreParentGroups = !!i2151[3]
  i2150.enabled = !!i2151[4]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2153 = data
  i2152.name = i2153[0]
  i2152.width = i2153[1]
  i2152.height = i2153[2]
  i2152.mipmapCount = i2153[3]
  i2152.anisoLevel = i2153[4]
  i2152.filterMode = i2153[5]
  i2152.hdr = !!i2153[6]
  i2152.format = i2153[7]
  i2152.wrapMode = i2153[8]
  i2152.alphaIsTransparency = !!i2153[9]
  i2152.alphaSource = i2153[10]
  i2152.graphicsFormat = i2153[11]
  i2152.sRGBTexture = !!i2153[12]
  i2152.desiredColorSpace = i2153[13]
  i2152.wrapU = i2153[14]
  i2152.wrapV = i2153[15]
  return i2152
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i2154 = root || request.c( 'DOTWeenPulseAnim' )
  var i2155 = data
  i2154.pulseSize = new pc.Vec2( i2155[0], i2155[1] )
  i2154.pulseDuration = i2155[2]
  i2154.ease = i2155[3]
  return i2154
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2156 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2157 = data
  i2156.m_hasFontAssetChanged = !!i2157[0]
  request.r(i2157[1], i2157[2], 0, i2156, 'm_baseMaterial')
  i2156.m_maskOffset = new pc.Vec4( i2157[3], i2157[4], i2157[5], i2157[6] )
  i2156.m_text = i2157[7]
  i2156.m_isRightToLeft = !!i2157[8]
  request.r(i2157[9], i2157[10], 0, i2156, 'm_fontAsset')
  request.r(i2157[11], i2157[12], 0, i2156, 'm_sharedMaterial')
  var i2159 = i2157[13]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 2) {
  request.r(i2159[i + 0], i2159[i + 1], 2, i2158, '')
  }
  i2156.m_fontSharedMaterials = i2158
  request.r(i2157[14], i2157[15], 0, i2156, 'm_fontMaterial')
  var i2161 = i2157[16]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2156.m_fontMaterials = i2160
  i2156.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2157[17], i2157[18], i2157[19], i2157[20])
  i2156.m_fontColor = new pc.Color(i2157[21], i2157[22], i2157[23], i2157[24])
  i2156.m_enableVertexGradient = !!i2157[25]
  i2156.m_colorMode = i2157[26]
  i2156.m_fontColorGradient = request.d('TMPro.VertexGradient', i2157[27], i2156.m_fontColorGradient)
  request.r(i2157[28], i2157[29], 0, i2156, 'm_fontColorGradientPreset')
  request.r(i2157[30], i2157[31], 0, i2156, 'm_spriteAsset')
  i2156.m_tintAllSprites = !!i2157[32]
  request.r(i2157[33], i2157[34], 0, i2156, 'm_StyleSheet')
  i2156.m_TextStyleHashCode = i2157[35]
  i2156.m_overrideHtmlColors = !!i2157[36]
  i2156.m_faceColor = UnityEngine.Color32.ConstructColor(i2157[37], i2157[38], i2157[39], i2157[40])
  i2156.m_fontSize = i2157[41]
  i2156.m_fontSizeBase = i2157[42]
  i2156.m_fontWeight = i2157[43]
  i2156.m_enableAutoSizing = !!i2157[44]
  i2156.m_fontSizeMin = i2157[45]
  i2156.m_fontSizeMax = i2157[46]
  i2156.m_fontStyle = i2157[47]
  i2156.m_HorizontalAlignment = i2157[48]
  i2156.m_VerticalAlignment = i2157[49]
  i2156.m_textAlignment = i2157[50]
  i2156.m_characterSpacing = i2157[51]
  i2156.m_wordSpacing = i2157[52]
  i2156.m_lineSpacing = i2157[53]
  i2156.m_lineSpacingMax = i2157[54]
  i2156.m_paragraphSpacing = i2157[55]
  i2156.m_charWidthMaxAdj = i2157[56]
  i2156.m_enableWordWrapping = !!i2157[57]
  i2156.m_wordWrappingRatios = i2157[58]
  i2156.m_overflowMode = i2157[59]
  request.r(i2157[60], i2157[61], 0, i2156, 'm_linkedTextComponent')
  request.r(i2157[62], i2157[63], 0, i2156, 'parentLinkedComponent')
  i2156.m_enableKerning = !!i2157[64]
  i2156.m_enableExtraPadding = !!i2157[65]
  i2156.checkPaddingRequired = !!i2157[66]
  i2156.m_isRichText = !!i2157[67]
  i2156.m_parseCtrlCharacters = !!i2157[68]
  i2156.m_isOrthographic = !!i2157[69]
  i2156.m_isCullingEnabled = !!i2157[70]
  i2156.m_horizontalMapping = i2157[71]
  i2156.m_verticalMapping = i2157[72]
  i2156.m_uvLineOffset = i2157[73]
  i2156.m_geometrySortingOrder = i2157[74]
  i2156.m_IsTextObjectScaleStatic = !!i2157[75]
  i2156.m_VertexBufferAutoSizeReduction = !!i2157[76]
  i2156.m_useMaxVisibleDescender = !!i2157[77]
  i2156.m_pageToDisplay = i2157[78]
  i2156.m_margin = new pc.Vec4( i2157[79], i2157[80], i2157[81], i2157[82] )
  i2156.m_isUsingLegacyAnimationComponent = !!i2157[83]
  i2156.m_isVolumetricText = !!i2157[84]
  request.r(i2157[85], i2157[86], 0, i2156, 'm_Material')
  i2156.m_Maskable = !!i2157[87]
  i2156.m_Color = new pc.Color(i2157[88], i2157[89], i2157[90], i2157[91])
  i2156.m_RaycastTarget = !!i2157[92]
  i2156.m_RaycastPadding = new pc.Vec4( i2157[93], i2157[94], i2157[95], i2157[96] )
  return i2156
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2164 = root || request.c( 'TMPro.VertexGradient' )
  var i2165 = data
  i2164.topLeft = new pc.Color(i2165[0], i2165[1], i2165[2], i2165[3])
  i2164.topRight = new pc.Color(i2165[4], i2165[5], i2165[6], i2165[7])
  i2164.bottomLeft = new pc.Color(i2165[8], i2165[9], i2165[10], i2165[11])
  i2164.bottomRight = new pc.Color(i2165[12], i2165[13], i2165[14], i2165[15])
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2166 = root || new pc.UnityMaterial()
  var i2167 = data
  i2166.name = i2167[0]
  request.r(i2167[1], i2167[2], 0, i2166, 'shader')
  i2166.renderQueue = i2167[3]
  i2166.enableInstancing = !!i2167[4]
  var i2169 = i2167[5]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2169[i + 0]) );
  }
  i2166.floatParameters = i2168
  var i2171 = i2167[6]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2171[i + 0]) );
  }
  i2166.colorParameters = i2170
  var i2173 = i2167[7]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2173[i + 0]) );
  }
  i2166.vectorParameters = i2172
  var i2175 = i2167[8]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2175[i + 0]) );
  }
  i2166.textureParameters = i2174
  var i2177 = i2167[9]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2177[i + 0]) );
  }
  i2166.materialFlags = i2176
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2181 = data
  i2180.name = i2181[0]
  i2180.value = i2181[1]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.value = new pc.Color(i2185[1], i2185[2], i2185[3], i2185[4])
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2189 = data
  i2188.name = i2189[0]
  i2188.value = new pc.Vec4( i2189[1], i2189[2], i2189[3], i2189[4] )
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2193 = data
  i2192.name = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'value')
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2197 = data
  i2196.name = i2197[0]
  i2196.enabled = !!i2197[1]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2199 = data
  i2198.position = new pc.Vec3( i2199[0], i2199[1], i2199[2] )
  i2198.scale = new pc.Vec3( i2199[3], i2199[4], i2199[5] )
  i2198.rotation = new pc.Quat(i2199[6], i2199[7], i2199[8], i2199[9])
  return i2198
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i2200 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 2, i2202, '')
  }
  i2200.m_LevelManagers = i2202
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'sharedMesh')
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'additionalVertexStreams')
  i2208.enabled = !!i2209[2]
  request.r(i2209[3], i2209[4], 0, i2208, 'sharedMaterial')
  var i2211 = i2209[5]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2208.sharedMaterials = i2210
  i2208.receiveShadows = !!i2209[6]
  i2208.shadowCastingMode = i2209[7]
  i2208.sortingLayerID = i2209[8]
  i2208.sortingOrder = i2209[9]
  i2208.lightmapIndex = i2209[10]
  i2208.lightmapSceneIndex = i2209[11]
  i2208.lightmapScaleOffset = new pc.Vec4( i2209[12], i2209[13], i2209[14], i2209[15] )
  i2208.lightProbeUsage = i2209[16]
  i2208.reflectionProbeUsage = i2209[17]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.isTrigger = !!i2213[1]
  request.r(i2213[2], i2213[3], 0, i2212, 'material')
  i2212.center = new pc.Vec3( i2213[4], i2213[5], i2213[6] )
  i2212.radius = i2213[7]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2215 = data
  i2214.mass = i2215[0]
  i2214.drag = i2215[1]
  i2214.angularDrag = i2215[2]
  i2214.useGravity = !!i2215[3]
  i2214.isKinematic = !!i2215[4]
  i2214.constraints = i2215[5]
  i2214.maxAngularVelocity = i2215[6]
  i2214.collisionDetectionMode = i2215[7]
  i2214.interpolation = i2215[8]
  return i2214
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2216 = root || request.c( 'PlayerController' )
  var i2217 = data
  i2216.active = !!i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'rb')
  i2216.moveForce = i2217[3]
  i2216.maxSpeed = i2217[4]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.halfPrecision = !!i2219[1]
  i2218.useUInt32IndexFormat = !!i2219[2]
  i2218.vertexCount = i2219[3]
  i2218.aabb = i2219[4]
  var i2221 = i2219[5]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( !!i2221[i + 0] );
  }
  i2218.streams = i2220
  i2218.vertices = i2219[6]
  var i2223 = i2219[7]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2223[i + 0]) );
  }
  i2218.subMeshes = i2222
  var i2225 = i2219[8]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 16) {
    i2224.push( new pc.Mat4().setData(i2225[i + 0], i2225[i + 1], i2225[i + 2], i2225[i + 3],  i2225[i + 4], i2225[i + 5], i2225[i + 6], i2225[i + 7],  i2225[i + 8], i2225[i + 9], i2225[i + 10], i2225[i + 11],  i2225[i + 12], i2225[i + 13], i2225[i + 14], i2225[i + 15]) );
  }
  i2218.bindposes = i2224
  var i2227 = i2219[9]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2227[i + 0]) );
  }
  i2218.blendShapes = i2226
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2233 = data
  i2232.triangles = i2233[0]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2239 = data
  i2238.name = i2239[0]
  var i2241 = i2239[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2241[i + 0]) );
  }
  i2238.frames = i2240
  return i2238
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2242 = root || request.c( 'InputManager' )
  var i2243 = data
  i2242.m_InputSensitivity = i2243[0]
  return i2242
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i2244 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i2245 = data
  i2244.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2245[0], i2244.m_GoldEventListener)
  i2244.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2245[1], i2244.m_KeyEventListener)
  i2244.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2245[2], i2244.m_WinEventListener)
  return i2244
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i2246 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'm_Event')
  return i2246
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i2248 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i2249 = data
  return i2248
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i2250 = root || request.c( 'CoinEffectMove' )
  var i2251 = data
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2253 = data
  i2252.center = new pc.Vec3( i2253[0], i2253[1], i2253[2] )
  i2252.size = new pc.Vec3( i2253[3], i2253[4], i2253[5] )
  i2252.enabled = !!i2253[6]
  i2252.isTrigger = !!i2253[7]
  request.r(i2253[8], i2253[9], 0, i2252, 'material')
  return i2252
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i2254 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i2255 = data
  i2254.m_GateType = i2255[0]
  i2254.m_Value = i2255[1]
  request.r(i2255[2], i2255[3], 0, i2254, 'm_Text')
  i2254.m_SnapToGrid = !!i2255[4]
  return i2254
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2256 = root || request.c( 'TMPro.TextMeshPro' )
  var i2257 = data
  i2256._SortingLayer = i2257[0]
  i2256._SortingLayerID = i2257[1]
  i2256._SortingOrder = i2257[2]
  i2256.m_hasFontAssetChanged = !!i2257[3]
  request.r(i2257[4], i2257[5], 0, i2256, 'm_renderer')
  i2256.m_maskType = i2257[6]
  i2256.m_text = i2257[7]
  i2256.m_isRightToLeft = !!i2257[8]
  request.r(i2257[9], i2257[10], 0, i2256, 'm_fontAsset')
  request.r(i2257[11], i2257[12], 0, i2256, 'm_sharedMaterial')
  var i2259 = i2257[13]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.m_fontSharedMaterials = i2258
  request.r(i2257[14], i2257[15], 0, i2256, 'm_fontMaterial')
  var i2261 = i2257[16]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 2, i2260, '')
  }
  i2256.m_fontMaterials = i2260
  i2256.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2257[17], i2257[18], i2257[19], i2257[20])
  i2256.m_fontColor = new pc.Color(i2257[21], i2257[22], i2257[23], i2257[24])
  i2256.m_enableVertexGradient = !!i2257[25]
  i2256.m_colorMode = i2257[26]
  i2256.m_fontColorGradient = request.d('TMPro.VertexGradient', i2257[27], i2256.m_fontColorGradient)
  request.r(i2257[28], i2257[29], 0, i2256, 'm_fontColorGradientPreset')
  request.r(i2257[30], i2257[31], 0, i2256, 'm_spriteAsset')
  i2256.m_tintAllSprites = !!i2257[32]
  request.r(i2257[33], i2257[34], 0, i2256, 'm_StyleSheet')
  i2256.m_TextStyleHashCode = i2257[35]
  i2256.m_overrideHtmlColors = !!i2257[36]
  i2256.m_faceColor = UnityEngine.Color32.ConstructColor(i2257[37], i2257[38], i2257[39], i2257[40])
  i2256.m_fontSize = i2257[41]
  i2256.m_fontSizeBase = i2257[42]
  i2256.m_fontWeight = i2257[43]
  i2256.m_enableAutoSizing = !!i2257[44]
  i2256.m_fontSizeMin = i2257[45]
  i2256.m_fontSizeMax = i2257[46]
  i2256.m_fontStyle = i2257[47]
  i2256.m_HorizontalAlignment = i2257[48]
  i2256.m_VerticalAlignment = i2257[49]
  i2256.m_textAlignment = i2257[50]
  i2256.m_characterSpacing = i2257[51]
  i2256.m_wordSpacing = i2257[52]
  i2256.m_lineSpacing = i2257[53]
  i2256.m_lineSpacingMax = i2257[54]
  i2256.m_paragraphSpacing = i2257[55]
  i2256.m_charWidthMaxAdj = i2257[56]
  i2256.m_enableWordWrapping = !!i2257[57]
  i2256.m_wordWrappingRatios = i2257[58]
  i2256.m_overflowMode = i2257[59]
  request.r(i2257[60], i2257[61], 0, i2256, 'm_linkedTextComponent')
  request.r(i2257[62], i2257[63], 0, i2256, 'parentLinkedComponent')
  i2256.m_enableKerning = !!i2257[64]
  i2256.m_enableExtraPadding = !!i2257[65]
  i2256.checkPaddingRequired = !!i2257[66]
  i2256.m_isRichText = !!i2257[67]
  i2256.m_parseCtrlCharacters = !!i2257[68]
  i2256.m_isOrthographic = !!i2257[69]
  i2256.m_isCullingEnabled = !!i2257[70]
  i2256.m_horizontalMapping = i2257[71]
  i2256.m_verticalMapping = i2257[72]
  i2256.m_uvLineOffset = i2257[73]
  i2256.m_geometrySortingOrder = i2257[74]
  i2256.m_IsTextObjectScaleStatic = !!i2257[75]
  i2256.m_VertexBufferAutoSizeReduction = !!i2257[76]
  i2256.m_useMaxVisibleDescender = !!i2257[77]
  i2256.m_pageToDisplay = i2257[78]
  i2256.m_margin = new pc.Vec4( i2257[79], i2257[80], i2257[81], i2257[82] )
  i2256.m_isUsingLegacyAnimationComponent = !!i2257[83]
  i2256.m_isVolumetricText = !!i2257[84]
  request.r(i2257[85], i2257[86], 0, i2256, 'm_Material')
  i2256.m_Maskable = !!i2257[87]
  i2256.m_Color = new pc.Color(i2257[88], i2257[89], i2257[90], i2257[91])
  i2256.m_RaycastTarget = !!i2257[92]
  i2256.m_RaycastPadding = new pc.Vec4( i2257[93], i2257[94], i2257[95], i2257[96] )
  return i2256
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i2262 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_Event')
  i2262.m_Count = i2263[2]
  i2262.m_Sound = i2263[3]
  i2262.m_Particle = i2263[4]
  i2262.m_SnapToGrid = !!i2263[5]
  return i2262
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i2264 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i2265 = data
  i2264.UsePositionBasedOffset = !!i2265[0]
  i2264.PositionBasedScale = i2265[1]
  i2264.Bob = !!i2265[2]
  i2264.BobSpeed = i2265[3]
  i2264.BobHeight = i2265[4]
  i2264.Spin = !!i2265[5]
  i2264.SpinSpeed = i2265[6]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2267 = data
  i2266.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2267[0], i2266.main)
  i2266.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2267[1], i2266.colorBySpeed)
  i2266.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2267[2], i2266.colorOverLifetime)
  i2266.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2267[3], i2266.emission)
  i2266.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2267[4], i2266.rotationBySpeed)
  i2266.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2267[5], i2266.rotationOverLifetime)
  i2266.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2267[6], i2266.shape)
  i2266.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2267[7], i2266.sizeBySpeed)
  i2266.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2267[8], i2266.sizeOverLifetime)
  i2266.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2267[9], i2266.textureSheetAnimation)
  i2266.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2267[10], i2266.velocityOverLifetime)
  i2266.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2267[11], i2266.noise)
  i2266.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2267[12], i2266.inheritVelocity)
  i2266.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2267[13], i2266.forceOverLifetime)
  i2266.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2267[14], i2266.limitVelocityOverLifetime)
  i2266.useAutoRandomSeed = !!i2267[15]
  i2266.randomSeed = i2267[16]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemMain()
  var i2269 = data
  i2268.duration = i2269[0]
  i2268.loop = !!i2269[1]
  i2268.prewarm = !!i2269[2]
  i2268.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[3], i2268.startDelay)
  i2268.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[4], i2268.startLifetime)
  i2268.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[5], i2268.startSpeed)
  i2268.startSize3D = !!i2269[6]
  i2268.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[7], i2268.startSizeX)
  i2268.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[8], i2268.startSizeY)
  i2268.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[9], i2268.startSizeZ)
  i2268.startRotation3D = !!i2269[10]
  i2268.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[11], i2268.startRotationX)
  i2268.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[12], i2268.startRotationY)
  i2268.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[13], i2268.startRotationZ)
  i2268.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2269[14], i2268.startColor)
  i2268.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[15], i2268.gravityModifier)
  i2268.simulationSpace = i2269[16]
  request.r(i2269[17], i2269[18], 0, i2268, 'customSimulationSpace')
  i2268.simulationSpeed = i2269[19]
  i2268.useUnscaledTime = !!i2269[20]
  i2268.scalingMode = i2269[21]
  i2268.playOnAwake = !!i2269[22]
  i2268.maxParticles = i2269[23]
  i2268.emitterVelocityMode = i2269[24]
  i2268.stopAction = i2269[25]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2270 = root || new pc.MinMaxCurve()
  var i2271 = data
  i2270.mode = i2271[0]
  i2270.curveMin = new pc.AnimationCurve( { keys_flow: i2271[1] } )
  i2270.curveMax = new pc.AnimationCurve( { keys_flow: i2271[2] } )
  i2270.curveMultiplier = i2271[3]
  i2270.constantMin = i2271[4]
  i2270.constantMax = i2271[5]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2272 = root || new pc.MinMaxGradient()
  var i2273 = data
  i2272.mode = i2273[0]
  i2272.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2273[1], i2272.gradientMin)
  i2272.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2273[2], i2272.gradientMax)
  i2272.colorMin = new pc.Color(i2273[3], i2273[4], i2273[5], i2273[6])
  i2272.colorMax = new pc.Color(i2273[7], i2273[8], i2273[9], i2273[10])
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2275 = data
  i2274.mode = i2275[0]
  var i2277 = i2275[1]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2277[i + 0]) );
  }
  i2274.colorKeys = i2276
  var i2279 = i2275[2]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2279[i + 0]) );
  }
  i2274.alphaKeys = i2278
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemColorBySpeed()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2281[1], i2280.color)
  i2280.range = new pc.Vec2( i2281[2], i2281[3] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2285 = data
  i2284.color = new pc.Color(i2285[0], i2285[1], i2285[2], i2285[3])
  i2284.time = i2285[4]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2289 = data
  i2288.alpha = i2289[0]
  i2288.time = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemColorOverLifetime()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2291[1], i2290.color)
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemEmitter()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[1], i2292.rateOverTime)
  i2292.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[2], i2292.rateOverDistance)
  var i2295 = i2293[3]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2295[i + 0]) );
  }
  i2292.bursts = i2294
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemBurst()
  var i2299 = data
  i2298.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[0], i2298.count)
  i2298.cycleCount = i2299[1]
  i2298.minCount = i2299[2]
  i2298.maxCount = i2299[3]
  i2298.repeatInterval = i2299[4]
  i2298.time = i2299[5]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemRotationBySpeed()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[1], i2300.x)
  i2300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.y)
  i2300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.z)
  i2300.separateAxes = !!i2301[4]
  i2300.range = new pc.Vec2( i2301[5], i2301[6] )
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[1], i2302.x)
  i2302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[2], i2302.y)
  i2302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[3], i2302.z)
  i2302.separateAxes = !!i2303[4]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemShape()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.shapeType = i2305[1]
  i2304.randomDirectionAmount = i2305[2]
  i2304.sphericalDirectionAmount = i2305[3]
  i2304.randomPositionAmount = i2305[4]
  i2304.alignToDirection = !!i2305[5]
  i2304.radius = i2305[6]
  i2304.radiusMode = i2305[7]
  i2304.radiusSpread = i2305[8]
  i2304.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[9], i2304.radiusSpeed)
  i2304.radiusThickness = i2305[10]
  i2304.angle = i2305[11]
  i2304.length = i2305[12]
  i2304.boxThickness = new pc.Vec3( i2305[13], i2305[14], i2305[15] )
  i2304.meshShapeType = i2305[16]
  request.r(i2305[17], i2305[18], 0, i2304, 'mesh')
  request.r(i2305[19], i2305[20], 0, i2304, 'meshRenderer')
  request.r(i2305[21], i2305[22], 0, i2304, 'skinnedMeshRenderer')
  i2304.useMeshMaterialIndex = !!i2305[23]
  i2304.meshMaterialIndex = i2305[24]
  i2304.useMeshColors = !!i2305[25]
  i2304.normalOffset = i2305[26]
  i2304.arc = i2305[27]
  i2304.arcMode = i2305[28]
  i2304.arcSpread = i2305[29]
  i2304.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[30], i2304.arcSpeed)
  i2304.donutRadius = i2305[31]
  i2304.position = new pc.Vec3( i2305[32], i2305[33], i2305[34] )
  i2304.rotation = new pc.Vec3( i2305[35], i2305[36], i2305[37] )
  i2304.scale = new pc.Vec3( i2305[38], i2305[39], i2305[40] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemSizeBySpeed()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.separateAxes = !!i2307[4]
  i2306.range = new pc.Vec2( i2307[5], i2307[6] )
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[1], i2308.x)
  i2308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.y)
  i2308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[3], i2308.z)
  i2308.separateAxes = !!i2309[4]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.mode = i2311[1]
  i2310.animation = i2311[2]
  i2310.numTilesX = i2311[3]
  i2310.numTilesY = i2311[4]
  i2310.useRandomRow = !!i2311[5]
  i2310.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[6], i2310.frameOverTime)
  i2310.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[7], i2310.startFrame)
  i2310.cycleCount = i2311[8]
  i2310.rowIndex = i2311[9]
  i2310.flipU = i2311[10]
  i2310.flipV = i2311[11]
  i2310.spriteCount = i2311[12]
  var i2313 = i2311[13]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2310.sprites = i2312
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[1], i2316.x)
  i2316.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[2], i2316.y)
  i2316.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[3], i2316.z)
  i2316.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[4], i2316.radial)
  i2316.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[5], i2316.speedModifier)
  i2316.space = i2317[6]
  i2316.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[7], i2316.orbitalX)
  i2316.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[8], i2316.orbitalY)
  i2316.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[9], i2316.orbitalZ)
  i2316.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[10], i2316.orbitalOffsetX)
  i2316.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[11], i2316.orbitalOffsetY)
  i2316.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[12], i2316.orbitalOffsetZ)
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2318 = root || new pc.ParticleSystemNoise()
  var i2319 = data
  i2318.enabled = !!i2319[0]
  i2318.separateAxes = !!i2319[1]
  i2318.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[2], i2318.strengthX)
  i2318.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[3], i2318.strengthY)
  i2318.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[4], i2318.strengthZ)
  i2318.frequency = i2319[5]
  i2318.damping = !!i2319[6]
  i2318.octaveCount = i2319[7]
  i2318.octaveMultiplier = i2319[8]
  i2318.octaveScale = i2319[9]
  i2318.quality = i2319[10]
  i2318.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[11], i2318.scrollSpeed)
  i2318.scrollSpeedMultiplier = i2319[12]
  i2318.remapEnabled = !!i2319[13]
  i2318.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[14], i2318.remapX)
  i2318.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[15], i2318.remapY)
  i2318.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[16], i2318.remapZ)
  i2318.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[17], i2318.positionAmount)
  i2318.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[18], i2318.rotationAmount)
  i2318.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[19], i2318.sizeAmount)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2320 = root || new pc.ParticleSystemInheritVelocity()
  var i2321 = data
  i2320.enabled = !!i2321[0]
  i2320.mode = i2321[1]
  i2320.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[2], i2320.curve)
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemForceOverLifetime()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[1], i2322.x)
  i2322.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[2], i2322.y)
  i2322.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[3], i2322.z)
  i2322.space = i2323[4]
  i2322.randomized = !!i2323[5]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[1], i2324.limit)
  i2324.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[2], i2324.limitX)
  i2324.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[3], i2324.limitY)
  i2324.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[4], i2324.limitZ)
  i2324.dampen = i2325[5]
  i2324.separateAxes = !!i2325[6]
  i2324.space = i2325[7]
  i2324.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[8], i2324.drag)
  i2324.multiplyDragByParticleSize = !!i2325[9]
  i2324.multiplyDragByParticleVelocity = !!i2325[10]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2327 = data
  i2326.enabled = !!i2327[0]
  request.r(i2327[1], i2327[2], 0, i2326, 'sharedMaterial')
  var i2329 = i2327[3]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2326.sharedMaterials = i2328
  i2326.receiveShadows = !!i2327[4]
  i2326.shadowCastingMode = i2327[5]
  i2326.sortingLayerID = i2327[6]
  i2326.sortingOrder = i2327[7]
  i2326.lightmapIndex = i2327[8]
  i2326.lightmapSceneIndex = i2327[9]
  i2326.lightmapScaleOffset = new pc.Vec4( i2327[10], i2327[11], i2327[12], i2327[13] )
  i2326.lightProbeUsage = i2327[14]
  i2326.reflectionProbeUsage = i2327[15]
  request.r(i2327[16], i2327[17], 0, i2326, 'mesh')
  i2326.meshCount = i2327[18]
  i2326.activeVertexStreamsCount = i2327[19]
  i2326.alignment = i2327[20]
  i2326.renderMode = i2327[21]
  i2326.sortMode = i2327[22]
  i2326.lengthScale = i2327[23]
  i2326.velocityScale = i2327[24]
  i2326.cameraVelocityScale = i2327[25]
  i2326.normalDirection = i2327[26]
  i2326.sortingFudge = i2327[27]
  i2326.minParticleSize = i2327[28]
  i2326.maxParticleSize = i2327[29]
  i2326.pivot = new pc.Vec3( i2327[30], i2327[31], i2327[32] )
  request.r(i2327[33], i2327[34], 0, i2326, 'trailMaterial')
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.atlasId = i2331[1]
  i2330.mipmapCount = i2331[2]
  i2330.hdr = !!i2331[3]
  i2330.size = i2331[4]
  i2330.anisoLevel = i2331[5]
  i2330.filterMode = i2331[6]
  var i2333 = i2331[7]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 4) {
    i2332.push( UnityEngine.Rect.MinMaxRect(i2333[i + 0], i2333[i + 1], i2333[i + 2], i2333[i + 3]) );
  }
  i2330.rects = i2332
  i2330.wrapU = i2331[8]
  i2330.wrapV = i2331[9]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.index = i2337[1]
  i2336.startup = !!i2337[2]
  return i2336
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'PlayableSettings' )
  var i2339 = data
  i2338.m_SkipMainMenu = !!i2339[0]
  i2338.m_UseCTAScreen = !!i2339[1]
  i2338.m_EndcardActivationSendsToStore = !!i2339[2]
  i2338.m_ShowEndcardAfterXTaps = !!i2339[3]
  i2338.m_TapsBeforeShowingEndcard = i2339[4]
  return i2338
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i2340 = root || request.c( 'SimpleDeactivateOnTap' )
  var i2341 = data
  return i2340
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'm_FirstSelected')
  i2342.m_sendNavigationEvents = !!i2343[2]
  i2342.m_DragThreshold = i2343[3]
  return i2342
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2345 = data
  i2344.m_HorizontalAxis = i2345[0]
  i2344.m_VerticalAxis = i2345[1]
  i2344.m_SubmitButton = i2345[2]
  i2344.m_CancelButton = i2345[3]
  i2344.m_InputActionsPerSecond = i2345[4]
  i2344.m_RepeatDelay = i2345[5]
  i2344.m_ForceModuleActive = !!i2345[6]
  i2344.m_SendPointerHoverToParent = !!i2345[7]
  return i2344
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i2346 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'm_SequenceManagerPrefab')
  return i2346
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i2348 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'm_MusicSource')
  request.r(i2349[2], i2349[3], 0, i2348, 'm_EffectSource')
  i2348.m_MinSoundInterval = i2349[4]
  var i2351 = i2349[5]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i2351[i + 0]) );
  }
  i2348.m_Sounds = i2350
  return i2348
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i2354 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i2355 = data
  i2354.m_SoundID = i2355[0]
  request.r(i2355[1], i2355[2], 0, i2354, 'm_AudioClip')
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'clip')
  request.r(i2357[2], i2357[3], 0, i2356, 'outputAudioMixerGroup')
  i2356.playOnAwake = !!i2357[4]
  i2356.loop = !!i2357[5]
  i2356.time = i2357[6]
  i2356.volume = i2357[7]
  i2356.pitch = i2357[8]
  i2356.enabled = !!i2357[9]
  return i2356
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i2358 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'm_Canvas')
  request.r(i2359[2], i2359[3], 0, i2358, 'm_Root')
  request.r(i2359[4], i2359[5], 0, i2358, 'm_ViewLayer')
  return i2358
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i2360 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'm_GoldText')
  var i2363 = i2361[2]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2360.Keys = i2362
  i2360.gainKeyColor = new pc.Color(i2361[3], i2361[4], i2361[5], i2361[6])
  return i2360
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i2366 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'm_LoseEvent')
  return i2366
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i2368 = root || request.c( 'CollectableParticleManager' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'keyParticlePrefab')
  request.r(i2369[2], i2369[3], 0, i2368, 'coinParticlePrefab')
  i2368.keyParticleCount = i2369[4]
  i2368.coinParticlesCount = i2369[5]
  return i2368
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i2370 = root || request.c( 'CheerPhraseController' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( i2373[i + 0] );
  }
  i2370.phrases = i2372
  i2370.cheerPhraseColour = new pc.Color(i2371[1], i2371[2], i2371[3], i2371[4])
  request.r(i2371[5], i2371[6], 0, i2370, 'cheerText')
  request.r(i2371[7], i2371[8], 0, i2370, 'cheerTextAnimator')
  request.r(i2371[9], i2371[10], 0, i2370, 'keyCollectEvent')
  return i2370
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i2376 = root || request.c( 'OutroAnimationController' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'winEvent')
  i2376.endCardDelay = i2377[2]
  var i2379 = i2377[3]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2376.confettiParticles = i2378
  return i2376
}

Deserializers["LevelFailedHandler"] = function (request, data, root) {
  var i2382 = root || request.c( 'LevelFailedHandler' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'loseEvent')
  i2382.endCardDelay = i2383[2]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.aspect = i2385[1]
  i2384.orthographic = !!i2385[2]
  i2384.orthographicSize = i2385[3]
  i2384.backgroundColor = new pc.Color(i2385[4], i2385[5], i2385[6], i2385[7])
  i2384.nearClipPlane = i2385[8]
  i2384.farClipPlane = i2385[9]
  i2384.fieldOfView = i2385[10]
  i2384.depth = i2385[11]
  i2384.clearFlags = i2385[12]
  i2384.cullingMask = i2385[13]
  i2384.rect = i2385[14]
  request.r(i2385[15], i2385[16], 0, i2384, 'targetTexture')
  i2384.usePhysicalProperties = !!i2385[17]
  i2384.focalLength = i2385[18]
  i2384.sensorSize = new pc.Vec2( i2385[19], i2385[20] )
  i2384.lensShift = new pc.Vec2( i2385[21], i2385[22] )
  i2384.gateFit = i2385[23]
  i2384.commandBufferCount = i2385[24]
  i2384.cameraType = i2385[25]
  return i2384
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i2386 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'targetPlayer')
  i2386.m_CameraAnglePreset = i2387[2]
  i2386.m_Offset = new pc.Vec3( i2387[3], i2387[4], i2387[5] )
  i2386.m_LookAtOffset = new pc.Vec3( i2387[6], i2387[7], i2387[8] )
  i2386.m_LockCameraPosition = !!i2387[9]
  i2386.m_SmoothCameraFollow = !!i2387[10]
  i2386.m_SmoothCameraFollowStrength = i2387[11]
  return i2386
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i2388 = root || request.c( 'CoinEffectManager' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'coinEffectPrefab')
  request.r(i2389[2], i2389[3], 0, i2388, 'coinCounter')
  request.r(i2389[4], i2389[5], 0, i2388, 'player')
  i2388.speed = i2389[6]
  request.r(i2389[7], i2389[8], 0, i2388, 'm_CoinEvent')
  i2388.effectPoolCount = i2389[9]
  i2388.offsetZ = i2389[10]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.type = i2391[1]
  i2390.color = new pc.Color(i2391[2], i2391[3], i2391[4], i2391[5])
  i2390.cullingMask = i2391[6]
  i2390.intensity = i2391[7]
  i2390.range = i2391[8]
  i2390.spotAngle = i2391[9]
  i2390.shadows = i2391[10]
  i2390.shadowNormalBias = i2391[11]
  i2390.shadowBias = i2391[12]
  i2390.shadowStrength = i2391[13]
  i2390.shadowResolution = i2391[14]
  i2390.lightmapBakeType = i2391[15]
  i2390.renderMode = i2391[16]
  request.r(i2391[17], i2391[18], 0, i2390, 'cookie')
  i2390.cookieSize = i2391[19]
  return i2390
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i2392 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i2393 = data
  return i2392
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i2394 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'm_WinEvent')
  i2394.m_SnapToGrid = !!i2395[2]
  return i2394
}

Deserializers["HyperCasual.Runner.LoseHandler"] = function (request, data, root) {
  var i2396 = root || request.c( 'HyperCasual.Runner.LoseHandler' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'm_LoseEvent')
  i2396.m_SnapToGrid = !!i2397[2]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.isTrigger = !!i2399[1]
  request.r(i2399[2], i2399[3], 0, i2398, 'material')
  request.r(i2399[4], i2399[5], 0, i2398, 'sharedMesh')
  i2398.convex = !!i2399[6]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2401 = data
  i2400.ambientIntensity = i2401[0]
  i2400.reflectionIntensity = i2401[1]
  i2400.ambientMode = i2401[2]
  i2400.ambientLight = new pc.Color(i2401[3], i2401[4], i2401[5], i2401[6])
  i2400.ambientSkyColor = new pc.Color(i2401[7], i2401[8], i2401[9], i2401[10])
  i2400.ambientGroundColor = new pc.Color(i2401[11], i2401[12], i2401[13], i2401[14])
  i2400.ambientEquatorColor = new pc.Color(i2401[15], i2401[16], i2401[17], i2401[18])
  i2400.fogColor = new pc.Color(i2401[19], i2401[20], i2401[21], i2401[22])
  i2400.fogEndDistance = i2401[23]
  i2400.fogStartDistance = i2401[24]
  i2400.fogDensity = i2401[25]
  i2400.fog = !!i2401[26]
  request.r(i2401[27], i2401[28], 0, i2400, 'skybox')
  i2400.fogMode = i2401[29]
  var i2403 = i2401[30]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2403[i + 0]) );
  }
  i2400.lightmaps = i2402
  i2400.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2401[31], i2400.lightProbes)
  i2400.lightmapsMode = i2401[32]
  i2400.mixedBakeMode = i2401[33]
  i2400.environmentLightingMode = i2401[34]
  i2400.ambientProbe = new pc.SphericalHarmonicsL2(i2401[35])
  i2400.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2401[36])
  i2400.useReferenceAmbientProbe = !!i2401[37]
  request.r(i2401[38], i2401[39], 0, i2400, 'customReflection')
  request.r(i2401[40], i2401[41], 0, i2400, 'defaultReflection')
  i2400.defaultReflectionMode = i2401[42]
  i2400.defaultReflectionResolution = i2401[43]
  i2400.sunLightObjectId = i2401[44]
  i2400.pixelLightCount = i2401[45]
  i2400.defaultReflectionHDR = !!i2401[46]
  i2400.hasLightDataAsset = !!i2401[47]
  i2400.hasManualGenerate = !!i2401[48]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'lightmapColor')
  request.r(i2407[2], i2407[3], 0, i2406, 'lightmapDirection')
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2408 = root || new UnityEngine.LightProbes()
  var i2409 = data
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2417 = data
  i2416.name = i2417[0]
  i2416.bounciness = i2417[1]
  i2416.dynamicFriction = i2417[2]
  i2416.staticFriction = i2417[3]
  i2416.frictionCombine = i2417[4]
  i2416.bounceCombine = i2417[5]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2421[i + 0]));
  }
  i2418.ShaderCompilationErrors = i2420
  i2418.name = i2419[1]
  i2418.guid = i2419[2]
  var i2423 = i2419[3]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2418.shaderDefinedKeywords = i2422
  var i2425 = i2419[4]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2425[i + 0]) );
  }
  i2418.passes = i2424
  var i2427 = i2419[5]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2427[i + 0]) );
  }
  i2418.usePasses = i2426
  var i2429 = i2419[6]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2429[i + 0]) );
  }
  i2418.defaultParameterValues = i2428
  request.r(i2419[7], i2419[8], 0, i2418, 'unityFallbackShader')
  i2418.readDepth = !!i2419[9]
  i2418.isCreatedByShaderGraph = !!i2419[10]
  i2418.compiled = !!i2419[11]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2433 = data
  i2432.shaderName = i2433[0]
  i2432.errorMessage = i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2436 = root || new pc.UnityShaderPass()
  var i2437 = data
  i2436.id = i2437[0]
  i2436.subShaderIndex = i2437[1]
  i2436.name = i2437[2]
  i2436.passType = i2437[3]
  i2436.grabPassTextureName = i2437[4]
  i2436.usePass = !!i2437[5]
  i2436.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[6], i2436.zTest)
  i2436.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[7], i2436.zWrite)
  i2436.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[8], i2436.culling)
  i2436.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2437[9], i2436.blending)
  i2436.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2437[10], i2436.alphaBlending)
  i2436.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[11], i2436.colorWriteMask)
  i2436.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[12], i2436.offsetUnits)
  i2436.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[13], i2436.offsetFactor)
  i2436.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[14], i2436.stencilRef)
  i2436.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[15], i2436.stencilReadMask)
  i2436.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[16], i2436.stencilWriteMask)
  i2436.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2437[17], i2436.stencilOp)
  i2436.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2437[18], i2436.stencilOpFront)
  i2436.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2437[19], i2436.stencilOpBack)
  var i2439 = i2437[20]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2439[i + 0]) );
  }
  i2436.tags = i2438
  var i2441 = i2437[21]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( i2441[i + 0] );
  }
  i2436.passDefinedKeywords = i2440
  var i2443 = i2437[22]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2443[i + 0]) );
  }
  i2436.passDefinedKeywordGroups = i2442
  var i2445 = i2437[23]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2445[i + 0]) );
  }
  i2436.variants = i2444
  var i2447 = i2437[24]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2447[i + 0]) );
  }
  i2436.excludedVariants = i2446
  i2436.hasDepthReader = !!i2437[25]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2449 = data
  i2448.val = i2449[0]
  i2448.name = i2449[1]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2451 = data
  i2450.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[0], i2450.src)
  i2450.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[1], i2450.dst)
  i2450.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[2], i2450.op)
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2453 = data
  i2452.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[0], i2452.pass)
  i2452.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[1], i2452.fail)
  i2452.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[2], i2452.zFail)
  i2452.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[3], i2452.comp)
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.value = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2460.keywords = i2462
  i2460.hasDiscard = !!i2461[1]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2467 = data
  i2466.passId = i2467[0]
  i2466.subShaderIndex = i2467[1]
  var i2469 = i2467[2]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2466.keywords = i2468
  i2466.vertexProgram = i2467[3]
  i2466.fragmentProgram = i2467[4]
  i2466.exportedForWebGl2 = !!i2467[5]
  i2466.readDepth = !!i2467[6]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'shader')
  i2472.pass = i2473[2]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.type = i2477[1]
  i2476.value = new pc.Vec4( i2477[2], i2477[3], i2477[4], i2477[5] )
  i2476.textureValue = i2477[6]
  i2476.shaderPropertyFlag = i2477[7]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2479 = data
  i2478.name = i2479[0]
  request.r(i2479[1], i2479[2], 0, i2478, 'texture')
  i2478.aabb = i2479[3]
  i2478.vertices = i2479[4]
  i2478.triangles = i2479[5]
  i2478.textureRect = UnityEngine.Rect.MinMaxRect(i2479[6], i2479[7], i2479[8], i2479[9])
  i2478.packedRect = UnityEngine.Rect.MinMaxRect(i2479[10], i2479[11], i2479[12], i2479[13])
  i2478.border = new pc.Vec4( i2479[14], i2479[15], i2479[16], i2479[17] )
  i2478.transparency = i2479[18]
  i2478.bounds = i2479[19]
  i2478.pixelsPerUnit = i2479[20]
  i2478.textureWidth = i2479[21]
  i2478.textureHeight = i2479[22]
  i2478.nativeSize = new pc.Vec2( i2479[23], i2479[24] )
  i2478.pivot = new pc.Vec2( i2479[25], i2479[26] )
  i2478.textureRectOffset = new pc.Vec2( i2479[27], i2479[28] )
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2481 = data
  i2480.name = i2481[0]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2483 = data
  i2482.name = i2483[0]
  i2482.wrapMode = i2483[1]
  i2482.isLooping = !!i2483[2]
  i2482.length = i2483[3]
  var i2485 = i2483[4]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2485[i + 0]) );
  }
  i2482.curves = i2484
  var i2487 = i2483[5]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2487[i + 0]) );
  }
  i2482.events = i2486
  i2482.halfPrecision = !!i2483[6]
  i2482._frameRate = i2483[7]
  i2482.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2483[8], i2482.localBounds)
  i2482.hasMuscleCurves = !!i2483[9]
  var i2489 = i2483[10]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2482.clipMuscleConstant = i2488
  i2482.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2483[11], i2482.clipBindingConstant)
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2493 = data
  i2492.path = i2493[0]
  i2492.hash = i2493[1]
  i2492.componentType = i2493[2]
  i2492.property = i2493[3]
  i2492.keys = i2493[4]
  var i2495 = i2493[5]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2495[i + 0]) );
  }
  i2492.objectReferenceKeys = i2494
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2499 = data
  i2498.functionName = i2499[0]
  i2498.floatParameter = i2499[1]
  i2498.intParameter = i2499[2]
  i2498.stringParameter = i2499[3]
  request.r(i2499[4], i2499[5], 0, i2498, 'objectReferenceParameter')
  i2498.time = i2499[6]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2501 = data
  i2500.center = new pc.Vec3( i2501[0], i2501[1], i2501[2] )
  i2500.extends = new pc.Vec3( i2501[3], i2501[4], i2501[5] )
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2505 = data
  var i2507 = i2505[0]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2504.genericBindings = i2506
  var i2509 = i2505[1]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2504.pptrCurveMapping = i2508
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2513 = data
  i2512.time = i2513[0]
  request.r(i2513[1], i2513[2], 0, i2512, 'value')
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.ascent = i2515[1]
  i2514.originalLineHeight = i2515[2]
  i2514.fontSize = i2515[3]
  var i2517 = i2515[4]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2517[i + 0]) );
  }
  i2514.characterInfo = i2516
  request.r(i2515[5], i2515[6], 0, i2514, 'texture')
  i2514.originalFontSize = i2515[7]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2521 = data
  i2520.index = i2521[0]
  i2520.advance = i2521[1]
  i2520.bearing = i2521[2]
  i2520.glyphWidth = i2521[3]
  i2520.glyphHeight = i2521[4]
  i2520.minX = i2521[5]
  i2520.maxX = i2521[6]
  i2520.minY = i2521[7]
  i2520.maxY = i2521[8]
  i2520.uvBottomLeftX = i2521[9]
  i2520.uvBottomLeftY = i2521[10]
  i2520.uvBottomRightX = i2521[11]
  i2520.uvBottomRightY = i2521[12]
  i2520.uvTopLeftX = i2521[13]
  i2520.uvTopLeftY = i2521[14]
  i2520.uvTopRightX = i2521[15]
  i2520.uvTopRightY = i2521[16]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2523 = data
  i2522.name = i2523[0]
  var i2525 = i2523[1]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2525[i + 0]) );
  }
  i2522.layers = i2524
  var i2527 = i2523[2]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2527[i + 0]) );
  }
  i2522.parameters = i2526
  i2522.animationClips = i2523[3]
  i2522.avatarUnsupported = i2523[4]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.defaultWeight = i2531[1]
  i2530.blendingMode = i2531[2]
  i2530.avatarMask = i2531[3]
  i2530.syncedLayerIndex = i2531[4]
  i2530.syncedLayerAffectsTiming = !!i2531[5]
  i2530.syncedLayers = i2531[6]
  i2530.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2531[7], i2530.stateMachine)
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2533 = data
  i2532.id = i2533[0]
  i2532.name = i2533[1]
  i2532.path = i2533[2]
  var i2535 = i2533[3]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2535[i + 0]) );
  }
  i2532.states = i2534
  var i2537 = i2533[4]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2537[i + 0]) );
  }
  i2532.machines = i2536
  var i2539 = i2533[5]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2539[i + 0]) );
  }
  i2532.entryStateTransitions = i2538
  var i2541 = i2533[6]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2541[i + 0]) );
  }
  i2532.exitStateTransitions = i2540
  var i2543 = i2533[7]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2543[i + 0]) );
  }
  i2532.anyStateTransitions = i2542
  i2532.defaultStateId = i2533[8]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2547 = data
  i2546.id = i2547[0]
  i2546.name = i2547[1]
  i2546.cycleOffset = i2547[2]
  i2546.cycleOffsetParameter = i2547[3]
  i2546.cycleOffsetParameterActive = !!i2547[4]
  i2546.mirror = !!i2547[5]
  i2546.mirrorParameter = i2547[6]
  i2546.mirrorParameterActive = !!i2547[7]
  i2546.motionId = i2547[8]
  i2546.nameHash = i2547[9]
  i2546.fullPathHash = i2547[10]
  i2546.speed = i2547[11]
  i2546.speedParameter = i2547[12]
  i2546.speedParameterActive = !!i2547[13]
  i2546.tag = i2547[14]
  i2546.tagHash = i2547[15]
  i2546.writeDefaultValues = !!i2547[16]
  var i2549 = i2547[17]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 2, i2548, '')
  }
  i2546.behaviours = i2548
  var i2551 = i2547[18]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2551[i + 0]) );
  }
  i2546.transitions = i2550
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2557 = data
  i2556.fullPath = i2557[0]
  i2556.canTransitionToSelf = !!i2557[1]
  i2556.duration = i2557[2]
  i2556.exitTime = i2557[3]
  i2556.hasExitTime = !!i2557[4]
  i2556.hasFixedDuration = !!i2557[5]
  i2556.interruptionSource = i2557[6]
  i2556.offset = i2557[7]
  i2556.orderedInterruption = !!i2557[8]
  i2556.destinationStateId = i2557[9]
  i2556.isExit = !!i2557[10]
  i2556.mute = !!i2557[11]
  i2556.solo = !!i2557[12]
  var i2559 = i2557[13]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2559[i + 0]) );
  }
  i2556.conditions = i2558
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2563 = data
  i2562.mode = i2563[0]
  i2562.parameter = i2563[1]
  i2562.threshold = i2563[2]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2569 = data
  i2568.destinationStateId = i2569[0]
  i2568.isExit = !!i2569[1]
  i2568.mute = !!i2569[2]
  i2568.solo = !!i2569[3]
  var i2571 = i2569[4]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2571[i + 0]) );
  }
  i2568.conditions = i2570
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2575 = data
  i2574.defaultBool = !!i2575[0]
  i2574.defaultFloat = i2575[1]
  i2574.defaultInt = i2575[2]
  i2574.name = i2575[3]
  i2574.nameHash = i2575[4]
  i2574.type = i2575[5]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.bytes64 = i2577[1]
  i2576.data = i2577[2]
  return i2576
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2578 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2579 = data
  i2578.hashCode = i2579[0]
  request.r(i2579[1], i2579[2], 0, i2578, 'material')
  i2578.materialHashCode = i2579[3]
  request.r(i2579[4], i2579[5], 0, i2578, 'atlas')
  i2578.normalStyle = i2579[6]
  i2578.normalSpacingOffset = i2579[7]
  i2578.boldStyle = i2579[8]
  i2578.boldSpacing = i2579[9]
  i2578.italicStyle = i2579[10]
  i2578.tabSize = i2579[11]
  i2578.m_Version = i2579[12]
  i2578.m_SourceFontFileGUID = i2579[13]
  request.r(i2579[14], i2579[15], 0, i2578, 'm_SourceFontFile_EditorRef')
  request.r(i2579[16], i2579[17], 0, i2578, 'm_SourceFontFile')
  i2578.m_AtlasPopulationMode = i2579[18]
  i2578.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2579[19], i2578.m_FaceInfo)
  var i2581 = i2579[20]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.add(request.d('UnityEngine.TextCore.Glyph', i2581[i + 0]));
  }
  i2578.m_GlyphTable = i2580
  var i2583 = i2579[21]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.add(request.d('TMPro.TMP_Character', i2583[i + 0]));
  }
  i2578.m_CharacterTable = i2582
  var i2585 = i2579[22]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 2, i2584, '')
  }
  i2578.m_AtlasTextures = i2584
  i2578.m_AtlasTextureIndex = i2579[23]
  i2578.m_IsMultiAtlasTexturesEnabled = !!i2579[24]
  i2578.m_ClearDynamicDataOnBuild = !!i2579[25]
  var i2587 = i2579[26]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.add(request.d('UnityEngine.TextCore.GlyphRect', i2587[i + 0]));
  }
  i2578.m_UsedGlyphRects = i2586
  var i2589 = i2579[27]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('UnityEngine.TextCore.GlyphRect', i2589[i + 0]));
  }
  i2578.m_FreeGlyphRects = i2588
  i2578.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2579[28], i2578.m_fontInfo)
  i2578.m_AtlasWidth = i2579[29]
  i2578.m_AtlasHeight = i2579[30]
  i2578.m_AtlasPadding = i2579[31]
  i2578.m_AtlasRenderMode = i2579[32]
  var i2591 = i2579[33]
  var i2590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.add(request.d('TMPro.TMP_Glyph', i2591[i + 0]));
  }
  i2578.m_glyphInfoList = i2590
  i2578.m_KerningTable = request.d('TMPro.KerningTable', i2579[34], i2578.m_KerningTable)
  i2578.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2579[35], i2578.m_FontFeatureTable)
  var i2593 = i2579[36]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 1, i2592, '')
  }
  i2578.fallbackFontAssets = i2592
  var i2595 = i2579[37]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 1, i2594, '')
  }
  i2578.m_FallbackFontAssetTable = i2594
  i2578.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2579[38], i2578.m_CreationSettings)
  var i2597 = i2579[39]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('TMPro.TMP_FontWeightPair', i2597[i + 0]) );
  }
  i2578.m_FontWeightTable = i2596
  var i2599 = i2579[40]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('TMPro.TMP_FontWeightPair', i2599[i + 0]) );
  }
  i2578.fontWeights = i2598
  return i2578
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2601 = data
  i2600.m_FaceIndex = i2601[0]
  i2600.m_FamilyName = i2601[1]
  i2600.m_StyleName = i2601[2]
  i2600.m_PointSize = i2601[3]
  i2600.m_Scale = i2601[4]
  i2600.m_UnitsPerEM = i2601[5]
  i2600.m_LineHeight = i2601[6]
  i2600.m_AscentLine = i2601[7]
  i2600.m_CapLine = i2601[8]
  i2600.m_MeanLine = i2601[9]
  i2600.m_Baseline = i2601[10]
  i2600.m_DescentLine = i2601[11]
  i2600.m_SuperscriptOffset = i2601[12]
  i2600.m_SuperscriptSize = i2601[13]
  i2600.m_SubscriptOffset = i2601[14]
  i2600.m_SubscriptSize = i2601[15]
  i2600.m_UnderlineOffset = i2601[16]
  i2600.m_UnderlineThickness = i2601[17]
  i2600.m_StrikethroughOffset = i2601[18]
  i2600.m_StrikethroughThickness = i2601[19]
  i2600.m_TabWidth = i2601[20]
  return i2600
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2605 = data
  i2604.m_Index = i2605[0]
  i2604.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2605[1], i2604.m_Metrics)
  i2604.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2605[2], i2604.m_GlyphRect)
  i2604.m_Scale = i2605[3]
  i2604.m_AtlasIndex = i2605[4]
  i2604.m_ClassDefinitionType = i2605[5]
  return i2604
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2607 = data
  i2606.m_Width = i2607[0]
  i2606.m_Height = i2607[1]
  i2606.m_HorizontalBearingX = i2607[2]
  i2606.m_HorizontalBearingY = i2607[3]
  i2606.m_HorizontalAdvance = i2607[4]
  return i2606
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2609 = data
  i2608.m_X = i2609[0]
  i2608.m_Y = i2609[1]
  i2608.m_Width = i2609[2]
  i2608.m_Height = i2609[3]
  return i2608
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.TMP_Character' )
  var i2613 = data
  i2612.m_ElementType = i2613[0]
  i2612.m_Unicode = i2613[1]
  i2612.m_GlyphIndex = i2613[2]
  i2612.m_Scale = i2613[3]
  return i2612
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2619 = data
  i2618.Name = i2619[0]
  i2618.PointSize = i2619[1]
  i2618.Scale = i2619[2]
  i2618.CharacterCount = i2619[3]
  i2618.LineHeight = i2619[4]
  i2618.Baseline = i2619[5]
  i2618.Ascender = i2619[6]
  i2618.CapHeight = i2619[7]
  i2618.Descender = i2619[8]
  i2618.CenterLine = i2619[9]
  i2618.SuperscriptOffset = i2619[10]
  i2618.SubscriptOffset = i2619[11]
  i2618.SubSize = i2619[12]
  i2618.Underline = i2619[13]
  i2618.UnderlineThickness = i2619[14]
  i2618.strikethrough = i2619[15]
  i2618.strikethroughThickness = i2619[16]
  i2618.TabWidth = i2619[17]
  i2618.Padding = i2619[18]
  i2618.AtlasWidth = i2619[19]
  i2618.AtlasHeight = i2619[20]
  return i2618
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2623 = data
  i2622.id = i2623[0]
  i2622.x = i2623[1]
  i2622.y = i2623[2]
  i2622.width = i2623[3]
  i2622.height = i2623[4]
  i2622.xOffset = i2623[5]
  i2622.yOffset = i2623[6]
  i2622.xAdvance = i2623[7]
  i2622.scale = i2623[8]
  return i2622
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.KerningTable' )
  var i2625 = data
  var i2627 = i2625[0]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.add(request.d('TMPro.KerningPair', i2627[i + 0]));
  }
  i2624.kerningPairs = i2626
  return i2624
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2630 = root || request.c( 'TMPro.KerningPair' )
  var i2631 = data
  i2630.xOffset = i2631[0]
  i2630.m_FirstGlyph = i2631[1]
  i2630.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2631[2], i2630.m_FirstGlyphAdjustments)
  i2630.m_SecondGlyph = i2631[3]
  i2630.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2631[4], i2630.m_SecondGlyphAdjustments)
  i2630.m_IgnoreSpacingAdjustments = !!i2631[5]
  return i2630
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2633 = data
  var i2635 = i2633[0]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2635[i + 0]));
  }
  i2632.m_GlyphPairAdjustmentRecords = i2634
  return i2632
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2639 = data
  i2638.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2639[0], i2638.m_FirstAdjustmentRecord)
  i2638.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2639[1], i2638.m_SecondAdjustmentRecord)
  i2638.m_FeatureLookupFlags = i2639[2]
  return i2638
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2641 = data
  i2640.m_GlyphIndex = i2641[0]
  i2640.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2641[1], i2640.m_GlyphValueRecord)
  return i2640
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2643 = data
  i2642.m_XPlacement = i2643[0]
  i2642.m_YPlacement = i2643[1]
  i2642.m_XAdvance = i2643[2]
  i2642.m_YAdvance = i2643[3]
  return i2642
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2647 = data
  i2646.sourceFontFileName = i2647[0]
  i2646.sourceFontFileGUID = i2647[1]
  i2646.pointSizeSamplingMode = i2647[2]
  i2646.pointSize = i2647[3]
  i2646.padding = i2647[4]
  i2646.packingMode = i2647[5]
  i2646.atlasWidth = i2647[6]
  i2646.atlasHeight = i2647[7]
  i2646.characterSetSelectionMode = i2647[8]
  i2646.characterSequence = i2647[9]
  i2646.referencedFontAssetGUID = i2647[10]
  i2646.referencedTextAssetGUID = i2647[11]
  i2646.fontStyle = i2647[12]
  i2646.fontStyleModifier = i2647[13]
  i2646.renderMode = i2647[14]
  i2646.includeFontFeatures = !!i2647[15]
  return i2646
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2651 = data
  request.r(i2651[0], i2651[1], 0, i2650, 'regularTypeface')
  request.r(i2651[2], i2651[3], 0, i2650, 'italicTypeface')
  return i2650
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i2652 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i2653 = data
  i2652.Count = i2653[0]
  return i2652
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i2654 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i2655 = data
  return i2654
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2656 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2657 = data
  i2656.useSafeMode = !!i2657[0]
  i2656.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2657[1], i2656.safeModeOptions)
  i2656.timeScale = i2657[2]
  i2656.unscaledTimeScale = i2657[3]
  i2656.useSmoothDeltaTime = !!i2657[4]
  i2656.maxSmoothUnscaledTime = i2657[5]
  i2656.rewindCallbackMode = i2657[6]
  i2656.showUnityEditorReport = !!i2657[7]
  i2656.logBehaviour = i2657[8]
  i2656.drawGizmos = !!i2657[9]
  i2656.defaultRecyclable = !!i2657[10]
  i2656.defaultAutoPlay = i2657[11]
  i2656.defaultUpdateType = i2657[12]
  i2656.defaultTimeScaleIndependent = !!i2657[13]
  i2656.defaultEaseType = i2657[14]
  i2656.defaultEaseOvershootOrAmplitude = i2657[15]
  i2656.defaultEasePeriod = i2657[16]
  i2656.defaultAutoKill = !!i2657[17]
  i2656.defaultLoopType = i2657[18]
  i2656.debugMode = !!i2657[19]
  i2656.debugStoreTargetId = !!i2657[20]
  i2656.showPreviewPanel = !!i2657[21]
  i2656.storeSettingsLocation = i2657[22]
  i2656.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2657[23], i2656.modules)
  i2656.createASMDEF = !!i2657[24]
  i2656.showPlayingTweens = !!i2657[25]
  i2656.showPausedTweens = !!i2657[26]
  return i2656
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2658 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2659 = data
  i2658.logBehaviour = i2659[0]
  i2658.nestedTweenFailureBehaviour = i2659[1]
  return i2658
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2660 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2661 = data
  i2660.showPanel = !!i2661[0]
  i2660.audioEnabled = !!i2661[1]
  i2660.physicsEnabled = !!i2661[2]
  i2660.physics2DEnabled = !!i2661[3]
  i2660.spriteEnabled = !!i2661[4]
  i2660.uiEnabled = !!i2661[5]
  i2660.textMeshProEnabled = !!i2661[6]
  i2660.tk2DEnabled = !!i2661[7]
  i2660.deAudioEnabled = !!i2661[8]
  i2660.deUnityExtendedEnabled = !!i2661[9]
  i2660.epoOutlineEnabled = !!i2661[10]
  return i2660
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_Settings' )
  var i2663 = data
  i2662.m_enableWordWrapping = !!i2663[0]
  i2662.m_enableKerning = !!i2663[1]
  i2662.m_enableExtraPadding = !!i2663[2]
  i2662.m_enableTintAllSprites = !!i2663[3]
  i2662.m_enableParseEscapeCharacters = !!i2663[4]
  i2662.m_EnableRaycastTarget = !!i2663[5]
  i2662.m_GetFontFeaturesAtRuntime = !!i2663[6]
  i2662.m_missingGlyphCharacter = i2663[7]
  i2662.m_warningsDisabled = !!i2663[8]
  request.r(i2663[9], i2663[10], 0, i2662, 'm_defaultFontAsset')
  i2662.m_defaultFontAssetPath = i2663[11]
  i2662.m_defaultFontSize = i2663[12]
  i2662.m_defaultAutoSizeMinRatio = i2663[13]
  i2662.m_defaultAutoSizeMaxRatio = i2663[14]
  i2662.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2663[15], i2663[16] )
  i2662.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2663[17], i2663[18] )
  i2662.m_autoSizeTextContainer = !!i2663[19]
  i2662.m_IsTextObjectScaleStatic = !!i2663[20]
  var i2665 = i2663[21]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 1, i2664, '')
  }
  i2662.m_fallbackFontAssets = i2664
  i2662.m_matchMaterialPreset = !!i2663[22]
  request.r(i2663[23], i2663[24], 0, i2662, 'm_defaultSpriteAsset')
  i2662.m_defaultSpriteAssetPath = i2663[25]
  i2662.m_enableEmojiSupport = !!i2663[26]
  i2662.m_MissingCharacterSpriteUnicode = i2663[27]
  i2662.m_defaultColorGradientPresetsPath = i2663[28]
  request.r(i2663[29], i2663[30], 0, i2662, 'm_defaultStyleSheet')
  i2662.m_StyleSheetsResourcePath = i2663[31]
  request.r(i2663[32], i2663[33], 0, i2662, 'm_leadingCharacters')
  request.r(i2663[34], i2663[35], 0, i2662, 'm_followingCharacters')
  i2662.m_UseModernHangulLineBreakingRules = !!i2663[36]
  return i2662
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2667 = data
  i2666.hashCode = i2667[0]
  request.r(i2667[1], i2667[2], 0, i2666, 'material')
  i2666.materialHashCode = i2667[3]
  request.r(i2667[4], i2667[5], 0, i2666, 'spriteSheet')
  var i2669 = i2667[6]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.TMP_Sprite', i2669[i + 0]));
  }
  i2666.spriteInfoList = i2668
  var i2671 = i2667[7]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 1, i2670, '')
  }
  i2666.fallbackSpriteAssets = i2670
  i2666.m_Version = i2667[8]
  i2666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2667[9], i2666.m_FaceInfo)
  var i2673 = i2667[10]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.TMP_SpriteCharacter', i2673[i + 0]));
  }
  i2666.m_SpriteCharacterTable = i2672
  var i2675 = i2667[11]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_SpriteGlyph', i2675[i + 0]));
  }
  i2666.m_SpriteGlyphTable = i2674
  return i2666
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.hashCode = i2679[1]
  i2678.unicode = i2679[2]
  i2678.pivot = new pc.Vec2( i2679[3], i2679[4] )
  request.r(i2679[5], i2679[6], 0, i2678, 'sprite')
  i2678.id = i2679[7]
  i2678.x = i2679[8]
  i2678.y = i2679[9]
  i2678.width = i2679[10]
  i2678.height = i2679[11]
  i2678.xOffset = i2679[12]
  i2678.yOffset = i2679[13]
  i2678.xAdvance = i2679[14]
  i2678.scale = i2679[15]
  return i2678
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2685 = data
  i2684.m_Name = i2685[0]
  i2684.m_HashCode = i2685[1]
  i2684.m_ElementType = i2685[2]
  i2684.m_Unicode = i2685[3]
  i2684.m_GlyphIndex = i2685[4]
  i2684.m_Scale = i2685[5]
  return i2684
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'sprite')
  i2688.m_Index = i2689[2]
  i2688.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2689[3], i2688.m_Metrics)
  i2688.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2689[4], i2688.m_GlyphRect)
  i2688.m_Scale = i2689[5]
  i2688.m_AtlasIndex = i2689[6]
  i2688.m_ClassDefinitionType = i2689[7]
  return i2688
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2691 = data
  var i2693 = i2691[0]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Style', i2693[i + 0]));
  }
  i2690.m_StyleList = i2692
  return i2690
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_Style' )
  var i2697 = data
  i2696.m_Name = i2697[0]
  i2696.m_HashCode = i2697[1]
  i2696.m_OpeningDefinition = i2697[2]
  i2696.m_ClosingDefinition = i2697[3]
  i2696.m_OpeningTagArray = i2697[4]
  i2696.m_ClosingTagArray = i2697[5]
  i2696.m_OpeningTagUnicodeArray = i2697[6]
  i2696.m_ClosingTagUnicodeArray = i2697[7]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2701[i + 0]) );
  }
  i2698.files = i2700
  i2698.componentToPrefabIds = i2699[1]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2705 = data
  i2704.path = i2705[0]
  request.r(i2705[1], i2705[2], 0, i2704, 'unityObject')
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2709[i + 0]) );
  }
  i2706.scriptsExecutionOrder = i2708
  var i2711 = i2707[1]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2711[i + 0]) );
  }
  i2706.sortingLayers = i2710
  var i2713 = i2707[2]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2713[i + 0]) );
  }
  i2706.cullingLayers = i2712
  i2706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2707[3], i2706.timeSettings)
  i2706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2707[4], i2706.physicsSettings)
  i2706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2707[5], i2706.physics2DSettings)
  i2706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2707[6], i2706.qualitySettings)
  i2706.enableRealtimeShadows = !!i2707[7]
  i2706.enableAutoInstancing = !!i2707[8]
  i2706.enableDynamicBatching = !!i2707[9]
  i2706.lightmapEncodingQuality = i2707[10]
  i2706.desiredColorSpace = i2707[11]
  var i2715 = i2707[12]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2706.allTags = i2714
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.value = i2719[1]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2723 = data
  i2722.id = i2723[0]
  i2722.name = i2723[1]
  i2722.value = i2723[2]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2727 = data
  i2726.id = i2727[0]
  i2726.name = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2729 = data
  i2728.fixedDeltaTime = i2729[0]
  i2728.maximumDeltaTime = i2729[1]
  i2728.timeScale = i2729[2]
  i2728.maximumParticleTimestep = i2729[3]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2731 = data
  i2730.gravity = new pc.Vec3( i2731[0], i2731[1], i2731[2] )
  i2730.defaultSolverIterations = i2731[3]
  i2730.bounceThreshold = i2731[4]
  i2730.autoSyncTransforms = !!i2731[5]
  i2730.autoSimulation = !!i2731[6]
  var i2733 = i2731[7]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2733[i + 0]) );
  }
  i2730.collisionMatrix = i2732
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.layerId = i2737[1]
  i2736.otherLayerId = i2737[2]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'material')
  i2738.gravity = new pc.Vec2( i2739[2], i2739[3] )
  i2738.positionIterations = i2739[4]
  i2738.velocityIterations = i2739[5]
  i2738.velocityThreshold = i2739[6]
  i2738.maxLinearCorrection = i2739[7]
  i2738.maxAngularCorrection = i2739[8]
  i2738.maxTranslationSpeed = i2739[9]
  i2738.maxRotationSpeed = i2739[10]
  i2738.baumgarteScale = i2739[11]
  i2738.baumgarteTOIScale = i2739[12]
  i2738.timeToSleep = i2739[13]
  i2738.linearSleepTolerance = i2739[14]
  i2738.angularSleepTolerance = i2739[15]
  i2738.defaultContactOffset = i2739[16]
  i2738.autoSimulation = !!i2739[17]
  i2738.queriesHitTriggers = !!i2739[18]
  i2738.queriesStartInColliders = !!i2739[19]
  i2738.callbacksOnDisable = !!i2739[20]
  i2738.reuseCollisionCallbacks = !!i2739[21]
  i2738.autoSyncTransforms = !!i2739[22]
  var i2741 = i2739[23]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2741[i + 0]) );
  }
  i2738.collisionMatrix = i2740
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.layerId = i2745[1]
  i2744.otherLayerId = i2745[2]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2747 = data
  var i2749 = i2747[0]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2749[i + 0]) );
  }
  i2746.qualityLevels = i2748
  var i2751 = i2747[1]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2746.names = i2750
  i2746.shadows = i2747[2]
  i2746.anisotropicFiltering = i2747[3]
  i2746.antiAliasing = i2747[4]
  i2746.lodBias = i2747[5]
  i2746.shadowCascades = i2747[6]
  i2746.shadowDistance = i2747[7]
  i2746.shadowmaskMode = i2747[8]
  i2746.shadowProjection = i2747[9]
  i2746.shadowResolution = i2747[10]
  i2746.softParticles = !!i2747[11]
  i2746.softVegetation = !!i2747[12]
  i2746.activeColorSpace = i2747[13]
  i2746.desiredColorSpace = i2747[14]
  i2746.masterTextureLimit = i2747[15]
  i2746.maxQueuedFrames = i2747[16]
  i2746.particleRaycastBudget = i2747[17]
  i2746.pixelLightCount = i2747[18]
  i2746.realtimeReflectionProbes = !!i2747[19]
  i2746.shadowCascade2Split = i2747[20]
  i2746.shadowCascade4Split = new pc.Vec3( i2747[21], i2747[22], i2747[23] )
  i2746.streamingMipmapsActive = !!i2747[24]
  i2746.vSyncCount = i2747[25]
  i2746.asyncUploadBufferSize = i2747[26]
  i2746.asyncUploadTimeSlice = i2747[27]
  i2746.billboardsFaceCameraPosition = !!i2747[28]
  i2746.shadowNearPlaneOffset = i2747[29]
  i2746.streamingMipmapsMemoryBudget = i2747[30]
  i2746.maximumLODLevel = i2747[31]
  i2746.streamingMipmapsAddAllCameras = !!i2747[32]
  i2746.streamingMipmapsMaxLevelReduction = i2747[33]
  i2746.streamingMipmapsRenderersPerFrame = i2747[34]
  i2746.resolutionScalingFixedDPIFactor = i2747[35]
  i2746.streamingMipmapsMaxFileIORequests = i2747[36]
  i2746.currentQualityLevel = i2747[37]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2757 = data
  i2756.weight = i2757[0]
  i2756.vertices = i2757[1]
  i2756.normals = i2757[2]
  i2756.tangents = i2757[3]
  return i2756
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2759 = data
  i2758.xPlacement = i2759[0]
  i2758.yPlacement = i2759[1]
  i2758.xAdvance = i2759[2]
  i2758.yAdvance = i2759[3]
  return i2758
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

Deserializers.buildID = "ca6e60c5-2f8d-44c3-9082-598c91644900";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

