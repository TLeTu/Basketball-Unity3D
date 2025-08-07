var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2800 = root || request.c( 'UnityEngine.JointSpring' )
  var i2801 = data
  i2800.spring = i2801[0]
  i2800.damper = i2801[1]
  i2800.targetPosition = i2801[2]
  return i2800
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2802 = root || request.c( 'UnityEngine.JointMotor' )
  var i2803 = data
  i2802.m_TargetVelocity = i2803[0]
  i2802.m_Force = i2803[1]
  i2802.m_FreeSpin = i2803[2]
  return i2802
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.JointLimits' )
  var i2805 = data
  i2804.m_Min = i2805[0]
  i2804.m_Max = i2805[1]
  i2804.m_Bounciness = i2805[2]
  i2804.m_BounceMinVelocity = i2805[3]
  i2804.m_ContactDistance = i2805[4]
  i2804.minBounce = i2805[5]
  i2804.maxBounce = i2805[6]
  return i2804
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.JointDrive' )
  var i2807 = data
  i2806.m_PositionSpring = i2807[0]
  i2806.m_PositionDamper = i2807[1]
  i2806.m_MaximumForce = i2807[2]
  i2806.m_UseAcceleration = i2807[3]
  return i2806
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2809 = data
  i2808.m_Spring = i2809[0]
  i2808.m_Damper = i2809[1]
  return i2808
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2811 = data
  i2810.m_Limit = i2811[0]
  i2810.m_Bounciness = i2811[1]
  i2810.m_ContactDistance = i2811[2]
  return i2810
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2813 = data
  i2812.m_ExtremumSlip = i2813[0]
  i2812.m_ExtremumValue = i2813[1]
  i2812.m_AsymptoteSlip = i2813[2]
  i2812.m_AsymptoteValue = i2813[3]
  i2812.m_Stiffness = i2813[4]
  return i2812
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2815 = data
  i2814.m_LowerAngle = i2815[0]
  i2814.m_UpperAngle = i2815[1]
  return i2814
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2816 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2817 = data
  i2816.m_MotorSpeed = i2817[0]
  i2816.m_MaximumMotorTorque = i2817[1]
  return i2816
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2819 = data
  i2818.m_DampingRatio = i2819[0]
  i2818.m_Frequency = i2819[1]
  i2818.m_Angle = i2819[2]
  return i2818
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2821 = data
  i2820.m_LowerTranslation = i2821[0]
  i2820.m_UpperTranslation = i2821[1]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2822 = root || new pc.UnityMaterial()
  var i2823 = data
  i2822.name = i2823[0]
  request.r(i2823[1], i2823[2], 0, i2822, 'shader')
  i2822.renderQueue = i2823[3]
  i2822.enableInstancing = !!i2823[4]
  var i2825 = i2823[5]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2825[i + 0]) );
  }
  i2822.floatParameters = i2824
  var i2827 = i2823[6]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2827[i + 0]) );
  }
  i2822.colorParameters = i2826
  var i2829 = i2823[7]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2829[i + 0]) );
  }
  i2822.vectorParameters = i2828
  var i2831 = i2823[8]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2831[i + 0]) );
  }
  i2822.textureParameters = i2830
  var i2833 = i2823[9]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2833[i + 0]) );
  }
  i2822.materialFlags = i2832
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.value = i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2841 = data
  i2840.name = i2841[0]
  i2840.value = new pc.Color(i2841[1], i2841[2], i2841[3], i2841[4])
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2845 = data
  i2844.name = i2845[0]
  i2844.value = new pc.Vec4( i2845[1], i2845[2], i2845[3], i2845[4] )
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2849 = data
  i2848.name = i2849[0]
  request.r(i2849[1], i2849[2], 0, i2848, 'value')
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.enabled = !!i2853[1]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2855 = data
  i2854.position = new pc.Vec3( i2855[0], i2855[1], i2855[2] )
  i2854.scale = new pc.Vec3( i2855[3], i2855[4], i2855[5] )
  i2854.rotation = new pc.Quat(i2855[6], i2855[7], i2855[8], i2855[9])
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2857 = data
  i2856.enabled = !!i2857[0]
  i2856.isTrigger = !!i2857[1]
  request.r(i2857[2], i2857[3], 0, i2856, 'material')
  i2856.center = new pc.Vec3( i2857[4], i2857[5], i2857[6] )
  i2856.radius = i2857[7]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2859 = data
  i2858.mass = i2859[0]
  i2858.drag = i2859[1]
  i2858.angularDrag = i2859[2]
  i2858.useGravity = !!i2859[3]
  i2858.isKinematic = !!i2859[4]
  i2858.constraints = i2859[5]
  i2858.maxAngularVelocity = i2859[6]
  i2858.collisionDetectionMode = i2859[7]
  i2858.interpolation = i2859[8]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2861 = data
  i2860.enabled = !!i2861[0]
  request.r(i2861[1], i2861[2], 0, i2860, 'sharedMaterial')
  var i2863 = i2861[3]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 2, i2862, '')
  }
  i2860.sharedMaterials = i2862
  i2860.receiveShadows = !!i2861[4]
  i2860.shadowCastingMode = i2861[5]
  i2860.sortingLayerID = i2861[6]
  i2860.sortingOrder = i2861[7]
  i2860.lightmapIndex = i2861[8]
  i2860.lightmapSceneIndex = i2861[9]
  i2860.lightmapScaleOffset = new pc.Vec4( i2861[10], i2861[11], i2861[12], i2861[13] )
  i2860.lightProbeUsage = i2861[14]
  i2860.reflectionProbeUsage = i2861[15]
  var i2865 = i2861[16]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 3) {
    i2864.push( new pc.Vec3( i2865[i + 0], i2865[i + 1], i2865[i + 2] ) );
  }
  i2860.positions = i2864
  i2860.positionCount = i2861[17]
  i2860.time = i2861[18]
  i2860.startWidth = i2861[19]
  i2860.endWidth = i2861[20]
  i2860.widthMultiplier = i2861[21]
  i2860.autodestruct = !!i2861[22]
  i2860.emitting = !!i2861[23]
  i2860.numCornerVertices = i2861[24]
  i2860.numCapVertices = i2861[25]
  i2860.minVertexDistance = i2861[26]
  i2860.colorGradient = i2861[27] ? new pc.ColorGradient(i2861[27][0], i2861[27][1], i2861[27][2]) : null
  i2860.startColor = new pc.Color(i2861[28], i2861[29], i2861[30], i2861[31])
  i2860.endColor = new pc.Color(i2861[32], i2861[33], i2861[34], i2861[35])
  i2860.generateLightingData = !!i2861[36]
  i2860.textureMode = i2861[37]
  i2860.alignment = i2861[38]
  i2860.widthCurve = new pc.AnimationCurve( { keys_flow: i2861[39] } )
  return i2860
}

Deserializers["BallController"] = function (request, data, root) {
  var i2870 = root || request.c( 'BallController' )
  var i2871 = data
  i2870.dragSpeed = i2871[0]
  i2870.swipeThreshold = i2871[1]
  return i2870
}

Deserializers["LaunchController"] = function (request, data, root) {
  var i2872 = root || request.c( 'LaunchController' )
  var i2873 = data
  request.r(i2873[0], i2873[1], 0, i2872, 'landingTarget')
  i2872.yMax = i2873[2]
  i2872.g = i2873[3]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'clip')
  request.r(i2875[2], i2875[3], 0, i2874, 'outputAudioMixerGroup')
  i2874.playOnAwake = !!i2875[4]
  i2874.loop = !!i2875[5]
  i2874.time = i2875[6]
  i2874.volume = i2875[7]
  i2874.pitch = i2875[8]
  i2874.enabled = !!i2875[9]
  return i2874
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2876 = root || request.c( 'AudioController' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'collisionSound')
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'sharedMesh')
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2881 = data
  request.r(i2881[0], i2881[1], 0, i2880, 'additionalVertexStreams')
  i2880.enabled = !!i2881[2]
  request.r(i2881[3], i2881[4], 0, i2880, 'sharedMaterial')
  var i2883 = i2881[5]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 2) {
  request.r(i2883[i + 0], i2883[i + 1], 2, i2882, '')
  }
  i2880.sharedMaterials = i2882
  i2880.receiveShadows = !!i2881[6]
  i2880.shadowCastingMode = i2881[7]
  i2880.sortingLayerID = i2881[8]
  i2880.sortingOrder = i2881[9]
  i2880.lightmapIndex = i2881[10]
  i2880.lightmapSceneIndex = i2881[11]
  i2880.lightmapScaleOffset = new pc.Vec4( i2881[12], i2881[13], i2881[14], i2881[15] )
  i2880.lightProbeUsage = i2881[16]
  i2880.reflectionProbeUsage = i2881[17]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2885 = data
  i2884.name = i2885[0]
  i2884.tagId = i2885[1]
  i2884.enabled = !!i2885[2]
  i2884.isStatic = !!i2885[3]
  i2884.layer = i2885[4]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2887 = data
  i2886.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2887[0], i2886.main)
  i2886.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2887[1], i2886.colorBySpeed)
  i2886.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2887[2], i2886.colorOverLifetime)
  i2886.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2887[3], i2886.emission)
  i2886.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2887[4], i2886.rotationBySpeed)
  i2886.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2887[5], i2886.rotationOverLifetime)
  i2886.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2887[6], i2886.shape)
  i2886.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2887[7], i2886.sizeBySpeed)
  i2886.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2887[8], i2886.sizeOverLifetime)
  i2886.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2887[9], i2886.textureSheetAnimation)
  i2886.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2887[10], i2886.velocityOverLifetime)
  i2886.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2887[11], i2886.noise)
  i2886.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2887[12], i2886.inheritVelocity)
  i2886.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2887[13], i2886.forceOverLifetime)
  i2886.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2887[14], i2886.limitVelocityOverLifetime)
  i2886.useAutoRandomSeed = !!i2887[15]
  i2886.randomSeed = i2887[16]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2888 = root || new pc.ParticleSystemMain()
  var i2889 = data
  i2888.duration = i2889[0]
  i2888.loop = !!i2889[1]
  i2888.prewarm = !!i2889[2]
  i2888.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[3], i2888.startDelay)
  i2888.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[4], i2888.startLifetime)
  i2888.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[5], i2888.startSpeed)
  i2888.startSize3D = !!i2889[6]
  i2888.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[7], i2888.startSizeX)
  i2888.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[8], i2888.startSizeY)
  i2888.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[9], i2888.startSizeZ)
  i2888.startRotation3D = !!i2889[10]
  i2888.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[11], i2888.startRotationX)
  i2888.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[12], i2888.startRotationY)
  i2888.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[13], i2888.startRotationZ)
  i2888.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2889[14], i2888.startColor)
  i2888.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[15], i2888.gravityModifier)
  i2888.simulationSpace = i2889[16]
  request.r(i2889[17], i2889[18], 0, i2888, 'customSimulationSpace')
  i2888.simulationSpeed = i2889[19]
  i2888.useUnscaledTime = !!i2889[20]
  i2888.scalingMode = i2889[21]
  i2888.playOnAwake = !!i2889[22]
  i2888.maxParticles = i2889[23]
  i2888.emitterVelocityMode = i2889[24]
  i2888.stopAction = i2889[25]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2890 = root || new pc.MinMaxCurve()
  var i2891 = data
  i2890.mode = i2891[0]
  i2890.curveMin = new pc.AnimationCurve( { keys_flow: i2891[1] } )
  i2890.curveMax = new pc.AnimationCurve( { keys_flow: i2891[2] } )
  i2890.curveMultiplier = i2891[3]
  i2890.constantMin = i2891[4]
  i2890.constantMax = i2891[5]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2892 = root || new pc.MinMaxGradient()
  var i2893 = data
  i2892.mode = i2893[0]
  i2892.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2893[1], i2892.gradientMin)
  i2892.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2893[2], i2892.gradientMax)
  i2892.colorMin = new pc.Color(i2893[3], i2893[4], i2893[5], i2893[6])
  i2892.colorMax = new pc.Color(i2893[7], i2893[8], i2893[9], i2893[10])
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2895 = data
  i2894.mode = i2895[0]
  var i2897 = i2895[1]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2897[i + 0]) );
  }
  i2894.colorKeys = i2896
  var i2899 = i2895[2]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2899[i + 0]) );
  }
  i2894.alphaKeys = i2898
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2900 = root || new pc.ParticleSystemColorBySpeed()
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2901[1], i2900.color)
  i2900.range = new pc.Vec2( i2901[2], i2901[3] )
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2905 = data
  i2904.color = new pc.Color(i2905[0], i2905[1], i2905[2], i2905[3])
  i2904.time = i2905[4]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2909 = data
  i2908.alpha = i2909[0]
  i2908.time = i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2910 = root || new pc.ParticleSystemColorOverLifetime()
  var i2911 = data
  i2910.enabled = !!i2911[0]
  i2910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2911[1], i2910.color)
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2912 = root || new pc.ParticleSystemEmitter()
  var i2913 = data
  i2912.enabled = !!i2913[0]
  i2912.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2913[1], i2912.rateOverTime)
  i2912.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2913[2], i2912.rateOverDistance)
  var i2915 = i2913[3]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2915[i + 0]) );
  }
  i2912.bursts = i2914
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2918 = root || new pc.ParticleSystemBurst()
  var i2919 = data
  i2918.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2919[0], i2918.count)
  i2918.cycleCount = i2919[1]
  i2918.minCount = i2919[2]
  i2918.maxCount = i2919[3]
  i2918.repeatInterval = i2919[4]
  i2918.time = i2919[5]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2920 = root || new pc.ParticleSystemRotationBySpeed()
  var i2921 = data
  i2920.enabled = !!i2921[0]
  i2920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[1], i2920.x)
  i2920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[2], i2920.y)
  i2920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2921[3], i2920.z)
  i2920.separateAxes = !!i2921[4]
  i2920.range = new pc.Vec2( i2921[5], i2921[6] )
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2922 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2923 = data
  i2922.enabled = !!i2923[0]
  i2922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[1], i2922.x)
  i2922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[2], i2922.y)
  i2922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[3], i2922.z)
  i2922.separateAxes = !!i2923[4]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2924 = root || new pc.ParticleSystemShape()
  var i2925 = data
  i2924.enabled = !!i2925[0]
  i2924.shapeType = i2925[1]
  i2924.randomDirectionAmount = i2925[2]
  i2924.sphericalDirectionAmount = i2925[3]
  i2924.randomPositionAmount = i2925[4]
  i2924.alignToDirection = !!i2925[5]
  i2924.radius = i2925[6]
  i2924.radiusMode = i2925[7]
  i2924.radiusSpread = i2925[8]
  i2924.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2925[9], i2924.radiusSpeed)
  i2924.radiusThickness = i2925[10]
  i2924.angle = i2925[11]
  i2924.length = i2925[12]
  i2924.boxThickness = new pc.Vec3( i2925[13], i2925[14], i2925[15] )
  i2924.meshShapeType = i2925[16]
  request.r(i2925[17], i2925[18], 0, i2924, 'mesh')
  request.r(i2925[19], i2925[20], 0, i2924, 'meshRenderer')
  request.r(i2925[21], i2925[22], 0, i2924, 'skinnedMeshRenderer')
  i2924.useMeshMaterialIndex = !!i2925[23]
  i2924.meshMaterialIndex = i2925[24]
  i2924.useMeshColors = !!i2925[25]
  i2924.normalOffset = i2925[26]
  i2924.arc = i2925[27]
  i2924.arcMode = i2925[28]
  i2924.arcSpread = i2925[29]
  i2924.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2925[30], i2924.arcSpeed)
  i2924.donutRadius = i2925[31]
  i2924.position = new pc.Vec3( i2925[32], i2925[33], i2925[34] )
  i2924.rotation = new pc.Vec3( i2925[35], i2925[36], i2925[37] )
  i2924.scale = new pc.Vec3( i2925[38], i2925[39], i2925[40] )
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2926 = root || new pc.ParticleSystemSizeBySpeed()
  var i2927 = data
  i2926.enabled = !!i2927[0]
  i2926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[1], i2926.x)
  i2926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[2], i2926.y)
  i2926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2927[3], i2926.z)
  i2926.separateAxes = !!i2927[4]
  i2926.range = new pc.Vec2( i2927[5], i2927[6] )
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2928 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2929 = data
  i2928.enabled = !!i2929[0]
  i2928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[1], i2928.x)
  i2928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[2], i2928.y)
  i2928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[3], i2928.z)
  i2928.separateAxes = !!i2929[4]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2930 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2931 = data
  i2930.enabled = !!i2931[0]
  i2930.mode = i2931[1]
  i2930.animation = i2931[2]
  i2930.numTilesX = i2931[3]
  i2930.numTilesY = i2931[4]
  i2930.useRandomRow = !!i2931[5]
  i2930.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[6], i2930.frameOverTime)
  i2930.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[7], i2930.startFrame)
  i2930.cycleCount = i2931[8]
  i2930.rowIndex = i2931[9]
  i2930.flipU = i2931[10]
  i2930.flipV = i2931[11]
  i2930.spriteCount = i2931[12]
  var i2933 = i2931[13]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.sprites = i2932
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2936 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2937 = data
  i2936.enabled = !!i2937[0]
  i2936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[1], i2936.x)
  i2936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[2], i2936.y)
  i2936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[3], i2936.z)
  i2936.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[4], i2936.radial)
  i2936.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[5], i2936.speedModifier)
  i2936.space = i2937[6]
  i2936.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[7], i2936.orbitalX)
  i2936.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[8], i2936.orbitalY)
  i2936.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[9], i2936.orbitalZ)
  i2936.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[10], i2936.orbitalOffsetX)
  i2936.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[11], i2936.orbitalOffsetY)
  i2936.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[12], i2936.orbitalOffsetZ)
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2938 = root || new pc.ParticleSystemNoise()
  var i2939 = data
  i2938.enabled = !!i2939[0]
  i2938.separateAxes = !!i2939[1]
  i2938.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[2], i2938.strengthX)
  i2938.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[3], i2938.strengthY)
  i2938.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[4], i2938.strengthZ)
  i2938.frequency = i2939[5]
  i2938.damping = !!i2939[6]
  i2938.octaveCount = i2939[7]
  i2938.octaveMultiplier = i2939[8]
  i2938.octaveScale = i2939[9]
  i2938.quality = i2939[10]
  i2938.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[11], i2938.scrollSpeed)
  i2938.scrollSpeedMultiplier = i2939[12]
  i2938.remapEnabled = !!i2939[13]
  i2938.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[14], i2938.remapX)
  i2938.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[15], i2938.remapY)
  i2938.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[16], i2938.remapZ)
  i2938.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[17], i2938.positionAmount)
  i2938.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[18], i2938.rotationAmount)
  i2938.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[19], i2938.sizeAmount)
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2940 = root || new pc.ParticleSystemInheritVelocity()
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.mode = i2941[1]
  i2940.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2941[2], i2940.curve)
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2942 = root || new pc.ParticleSystemForceOverLifetime()
  var i2943 = data
  i2942.enabled = !!i2943[0]
  i2942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[1], i2942.x)
  i2942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[2], i2942.y)
  i2942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2943[3], i2942.z)
  i2942.space = i2943[4]
  i2942.randomized = !!i2943[5]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2944 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2945 = data
  i2944.enabled = !!i2945[0]
  i2944.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[1], i2944.limit)
  i2944.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[2], i2944.limitX)
  i2944.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[3], i2944.limitY)
  i2944.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[4], i2944.limitZ)
  i2944.dampen = i2945[5]
  i2944.separateAxes = !!i2945[6]
  i2944.space = i2945[7]
  i2944.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2945[8], i2944.drag)
  i2944.multiplyDragByParticleSize = !!i2945[9]
  i2944.multiplyDragByParticleVelocity = !!i2945[10]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2947 = data
  i2946.enabled = !!i2947[0]
  request.r(i2947[1], i2947[2], 0, i2946, 'sharedMaterial')
  var i2949 = i2947[3]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 2) {
  request.r(i2949[i + 0], i2949[i + 1], 2, i2948, '')
  }
  i2946.sharedMaterials = i2948
  i2946.receiveShadows = !!i2947[4]
  i2946.shadowCastingMode = i2947[5]
  i2946.sortingLayerID = i2947[6]
  i2946.sortingOrder = i2947[7]
  i2946.lightmapIndex = i2947[8]
  i2946.lightmapSceneIndex = i2947[9]
  i2946.lightmapScaleOffset = new pc.Vec4( i2947[10], i2947[11], i2947[12], i2947[13] )
  i2946.lightProbeUsage = i2947[14]
  i2946.reflectionProbeUsage = i2947[15]
  request.r(i2947[16], i2947[17], 0, i2946, 'mesh')
  i2946.meshCount = i2947[18]
  i2946.activeVertexStreamsCount = i2947[19]
  i2946.alignment = i2947[20]
  i2946.renderMode = i2947[21]
  i2946.sortMode = i2947[22]
  i2946.lengthScale = i2947[23]
  i2946.velocityScale = i2947[24]
  i2946.cameraVelocityScale = i2947[25]
  i2946.normalDirection = i2947[26]
  i2946.sortingFudge = i2947[27]
  i2946.minParticleSize = i2947[28]
  i2946.maxParticleSize = i2947[29]
  i2946.pivot = new pc.Vec3( i2947[30], i2947[31], i2947[32] )
  request.r(i2947[33], i2947[34], 0, i2946, 'trailMaterial')
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2951 = data
  i2950.name = i2951[0]
  i2950.halfPrecision = !!i2951[1]
  i2950.useUInt32IndexFormat = !!i2951[2]
  i2950.vertexCount = i2951[3]
  i2950.aabb = i2951[4]
  var i2953 = i2951[5]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( !!i2953[i + 0] );
  }
  i2950.streams = i2952
  i2950.vertices = i2951[6]
  var i2955 = i2951[7]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2955[i + 0]) );
  }
  i2950.subMeshes = i2954
  var i2957 = i2951[8]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 16) {
    i2956.push( new pc.Mat4().setData(i2957[i + 0], i2957[i + 1], i2957[i + 2], i2957[i + 3],  i2957[i + 4], i2957[i + 5], i2957[i + 6], i2957[i + 7],  i2957[i + 8], i2957[i + 9], i2957[i + 10], i2957[i + 11],  i2957[i + 12], i2957[i + 13], i2957[i + 14], i2957[i + 15]) );
  }
  i2950.bindposes = i2956
  var i2959 = i2951[9]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2959[i + 0]) );
  }
  i2950.blendShapes = i2958
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2965 = data
  i2964.triangles = i2965[0]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2971 = data
  i2970.name = i2971[0]
  var i2973 = i2971[1]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2973[i + 0]) );
  }
  i2970.frames = i2972
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2975 = data
  i2974.name = i2975[0]
  i2974.width = i2975[1]
  i2974.height = i2975[2]
  i2974.mipmapCount = i2975[3]
  i2974.anisoLevel = i2975[4]
  i2974.filterMode = i2975[5]
  i2974.hdr = !!i2975[6]
  i2974.format = i2975[7]
  i2974.wrapMode = i2975[8]
  i2974.alphaIsTransparency = !!i2975[9]
  i2974.alphaSource = i2975[10]
  i2974.graphicsFormat = i2975[11]
  i2974.sRGBTexture = !!i2975[12]
  i2974.desiredColorSpace = i2975[13]
  i2974.wrapU = i2975[14]
  i2974.wrapV = i2975[15]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i2977 = data
  i2976.name = i2977[0]
  i2976.width = i2977[1]
  i2976.height = i2977[2]
  i2976.anisoLevel = i2977[3]
  i2976.filterMode = i2977[4]
  i2976.hdr = !!i2977[5]
  i2976.colorFormat = i2977[6]
  i2976.depthStencilFormat = i2977[7]
  i2976.renderTextureFormat = i2977[8]
  i2976.depth = i2977[9]
  i2976.wrapU = i2977[10]
  i2976.wrapV = i2977[11]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2979 = data
  i2978.name = i2979[0]
  i2978.atlasId = i2979[1]
  i2978.mipmapCount = i2979[2]
  i2978.hdr = !!i2979[3]
  i2978.size = i2979[4]
  i2978.anisoLevel = i2979[5]
  i2978.filterMode = i2979[6]
  var i2981 = i2979[7]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 4) {
    i2980.push( UnityEngine.Rect.MinMaxRect(i2981[i + 0], i2981[i + 1], i2981[i + 2], i2981[i + 3]) );
  }
  i2978.rects = i2980
  i2978.wrapU = i2979[8]
  i2978.wrapV = i2979[9]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2985 = data
  i2984.name = i2985[0]
  i2984.index = i2985[1]
  i2984.startup = !!i2985[2]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2987 = data
  i2986.center = new pc.Vec3( i2987[0], i2987[1], i2987[2] )
  i2986.size = new pc.Vec3( i2987[3], i2987[4], i2987[5] )
  i2986.enabled = !!i2987[6]
  i2986.isTrigger = !!i2987[7]
  request.r(i2987[8], i2987[9], 0, i2986, 'material')
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2989 = data
  i2988.enabled = !!i2989[0]
  i2988.type = i2989[1]
  i2988.color = new pc.Color(i2989[2], i2989[3], i2989[4], i2989[5])
  i2988.cullingMask = i2989[6]
  i2988.intensity = i2989[7]
  i2988.range = i2989[8]
  i2988.spotAngle = i2989[9]
  i2988.shadows = i2989[10]
  i2988.shadowNormalBias = i2989[11]
  i2988.shadowBias = i2989[12]
  i2988.shadowStrength = i2989[13]
  i2988.shadowResolution = i2989[14]
  i2988.lightmapBakeType = i2989[15]
  i2988.renderMode = i2989[16]
  request.r(i2989[17], i2989[18], 0, i2988, 'cookie')
  i2988.cookieSize = i2989[19]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2991 = data
  i2990.enabled = !!i2991[0]
  i2990.aspect = i2991[1]
  i2990.orthographic = !!i2991[2]
  i2990.orthographicSize = i2991[3]
  i2990.backgroundColor = new pc.Color(i2991[4], i2991[5], i2991[6], i2991[7])
  i2990.nearClipPlane = i2991[8]
  i2990.farClipPlane = i2991[9]
  i2990.fieldOfView = i2991[10]
  i2990.depth = i2991[11]
  i2990.clearFlags = i2991[12]
  i2990.cullingMask = i2991[13]
  i2990.rect = i2991[14]
  request.r(i2991[15], i2991[16], 0, i2990, 'targetTexture')
  i2990.usePhysicalProperties = !!i2991[17]
  i2990.focalLength = i2991[18]
  i2990.sensorSize = new pc.Vec2( i2991[19], i2991[20] )
  i2990.lensShift = new pc.Vec2( i2991[21], i2991[22] )
  i2990.gateFit = i2991[23]
  i2990.commandBufferCount = i2991[24]
  i2990.cameraType = i2991[25]
  return i2990
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i2993 = data
  i2992.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i2993[0] )
  i2992.m_MaxRayIntersections = i2993[1]
  return i2992
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i2994 = root || request.c( 'RotateRing' )
  var i2995 = data
  i2994.rotationSpeed = i2995[0]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i2997 = data
  i2996.useMotor = !!i2997[0]
  i2996.useLimits = !!i2997[1]
  i2996.useSpring = !!i2997[2]
  i2996.limits = request.d('UnityEngine.JointLimits', i2997[3], i2996.limits)
  i2996.motor = request.d('UnityEngine.JointMotor', i2997[4], i2996.motor)
  i2996.spring = request.d('UnityEngine.JointSpring', i2997[5], i2996.spring)
  request.r(i2997[6], i2997[7], 0, i2996, 'connectedBody')
  i2996.axis = new pc.Vec3( i2997[8], i2997[9], i2997[10] )
  i2996.anchor = new pc.Vec3( i2997[11], i2997[12], i2997[13] )
  i2996.connectedAnchor = new pc.Vec3( i2997[14], i2997[15], i2997[16] )
  i2996.autoConfigureConnectedAnchor = !!i2997[17]
  i2996.massScale = i2997[18]
  i2996.connectedMassScale = i2997[19]
  i2996.enableCollision = !!i2997[20]
  i2996.breakForce = i2997[21]
  i2996.breakTorque = i2997[22]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2999 = data
  i2998.center = new pc.Vec3( i2999[0], i2999[1], i2999[2] )
  i2998.radius = i2999[3]
  i2998.height = i2999[4]
  i2998.direction = i2999[5]
  i2998.enabled = !!i2999[6]
  i2998.isTrigger = !!i2999[7]
  request.r(i2999[8], i2999[9], 0, i2998, 'material')
  return i2998
}

Deserializers["RimCollider"] = function (request, data, root) {
  var i3000 = root || request.c( 'RimCollider' )
  var i3001 = data
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3003 = data
  i3002.enabled = !!i3003[0]
  request.r(i3003[1], i3003[2], 0, i3002, 'sharedMaterial')
  var i3005 = i3003[3]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 2, i3004, '')
  }
  i3002.sharedMaterials = i3004
  i3002.receiveShadows = !!i3003[4]
  i3002.shadowCastingMode = i3003[5]
  i3002.sortingLayerID = i3003[6]
  i3002.sortingOrder = i3003[7]
  i3002.lightmapIndex = i3003[8]
  i3002.lightmapSceneIndex = i3003[9]
  i3002.lightmapScaleOffset = new pc.Vec4( i3003[10], i3003[11], i3003[12], i3003[13] )
  i3002.lightProbeUsage = i3003[14]
  i3002.reflectionProbeUsage = i3003[15]
  request.r(i3003[16], i3003[17], 0, i3002, 'sharedMesh')
  var i3007 = i3003[18]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 2) {
  request.r(i3007[i + 0], i3007[i + 1], 2, i3006, '')
  }
  i3002.bones = i3006
  i3002.updateWhenOffscreen = !!i3003[19]
  i3002.localBounds = i3003[20]
  request.r(i3003[21], i3003[22], 0, i3002, 'rootBone')
  var i3009 = i3003[23]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3009[i + 0]) );
  }
  i3002.blendShapesWeights = i3008
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3015 = data
  i3014.weight = i3015[0]
  return i3014
}

Deserializers["HoopTrigger"] = function (request, data, root) {
  var i3016 = root || request.c( 'HoopTrigger' )
  var i3017 = data
  i3016.hoopType = i3017[0]
  return i3016
}

Deserializers["BallCarousel"] = function (request, data, root) {
  var i3018 = root || request.c( 'BallCarousel' )
  var i3019 = data
  i3018.rotationSpeed = i3019[0]
  var i3021 = i3019[1]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 2) {
  request.r(i3021[i + 0], i3021[i + 1], 2, i3020, '')
  }
  i3018.balls = i3020
  return i3018
}

Deserializers["BallSelection"] = function (request, data, root) {
  var i3024 = root || request.c( 'BallSelection' )
  var i3025 = data
  i3024.ballName = i3025[0]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3027 = data
  i3026.enabled = !!i3027[0]
  request.r(i3027[1], i3027[2], 0, i3026, 'sharedMaterial')
  var i3029 = i3027[3]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 2) {
  request.r(i3029[i + 0], i3029[i + 1], 2, i3028, '')
  }
  i3026.sharedMaterials = i3028
  i3026.receiveShadows = !!i3027[4]
  i3026.shadowCastingMode = i3027[5]
  i3026.sortingLayerID = i3027[6]
  i3026.sortingOrder = i3027[7]
  i3026.lightmapIndex = i3027[8]
  i3026.lightmapSceneIndex = i3027[9]
  i3026.lightmapScaleOffset = new pc.Vec4( i3027[10], i3027[11], i3027[12], i3027[13] )
  i3026.lightProbeUsage = i3027[14]
  i3026.reflectionProbeUsage = i3027[15]
  i3026.color = new pc.Color(i3027[16], i3027[17], i3027[18], i3027[19])
  request.r(i3027[20], i3027[21], 0, i3026, 'sprite')
  i3026.flipX = !!i3027[22]
  i3026.flipY = !!i3027[23]
  i3026.drawMode = i3027[24]
  i3026.size = new pc.Vec2( i3027[25], i3027[26] )
  i3026.tileMode = i3027[27]
  i3026.adaptiveModeThreshold = i3027[28]
  i3026.maskInteraction = i3027[29]
  i3026.spriteSortPoint = i3027[30]
  return i3026
}

Deserializers["SpriteRender"] = function (request, data, root) {
  var i3030 = root || request.c( 'SpriteRender' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, '_camera')
  i3030.lockYAxis = !!i3031[2]
  i3030.reverseDirection = !!i3031[3]
  i3030.enableYAnimation = !!i3031[4]
  i3030._animationSpeed = i3031[5]
  i3030._animationRange = i3031[6]
  i3030._baseYPosition = i3031[7]
  return i3030
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3032 = root || request.c( 'GameManager' )
  var i3033 = data
  request.r(i3033[0], i3033[1], 0, i3032, 'perfectParticleSystem')
  request.r(i3033[2], i3033[3], 0, i3032, 'passSound')
  request.r(i3033[4], i3033[5], 0, i3032, 'backgroundMusic')
  request.r(i3033[6], i3033[7], 0, i3032, 'perfectSound')
  i3032._perfectThreshold = i3033[8]
  var i3035 = i3033[9]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 2) {
  request.r(i3035[i + 0], i3035[i + 1], 2, i3034, '')
  }
  i3032._balls = i3034
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3037 = data
  i3036.pivot = new pc.Vec2( i3037[0], i3037[1] )
  i3036.anchorMin = new pc.Vec2( i3037[2], i3037[3] )
  i3036.anchorMax = new pc.Vec2( i3037[4], i3037[5] )
  i3036.sizeDelta = new pc.Vec2( i3037[6], i3037[7] )
  i3036.anchoredPosition3D = new pc.Vec3( i3037[8], i3037[9], i3037[10] )
  i3036.rotation = new pc.Quat(i3037[11], i3037[12], i3037[13], i3037[14])
  i3036.scale = new pc.Vec3( i3037[15], i3037[16], i3037[17] )
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3039 = data
  i3038.enabled = !!i3039[0]
  i3038.planeDistance = i3039[1]
  i3038.referencePixelsPerUnit = i3039[2]
  i3038.isFallbackOverlay = !!i3039[3]
  i3038.renderMode = i3039[4]
  i3038.renderOrder = i3039[5]
  i3038.sortingLayerName = i3039[6]
  i3038.sortingOrder = i3039[7]
  i3038.scaleFactor = i3039[8]
  request.r(i3039[9], i3039[10], 0, i3038, 'worldCamera')
  i3038.overrideSorting = !!i3039[11]
  i3038.pixelPerfect = !!i3039[12]
  i3038.targetDisplay = i3039[13]
  i3038.overridePixelPerfect = !!i3039[14]
  return i3038
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3040 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3041 = data
  i3040.m_UiScaleMode = i3041[0]
  i3040.m_ReferencePixelsPerUnit = i3041[1]
  i3040.m_ScaleFactor = i3041[2]
  i3040.m_ReferenceResolution = new pc.Vec2( i3041[3], i3041[4] )
  i3040.m_ScreenMatchMode = i3041[5]
  i3040.m_MatchWidthOrHeight = i3041[6]
  i3040.m_PhysicalUnit = i3041[7]
  i3040.m_FallbackScreenDPI = i3041[8]
  i3040.m_DefaultSpriteDPI = i3041[9]
  i3040.m_DynamicPixelsPerUnit = i3041[10]
  i3040.m_PresetInfoIsWorld = !!i3041[11]
  return i3040
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3042 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3043 = data
  i3042.m_IgnoreReversedGraphics = !!i3043[0]
  i3042.m_BlockingObjects = i3043[1]
  i3042.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3043[2] )
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3045 = data
  i3044.cullTransparentMesh = !!i3045[0]
  return i3044
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3046 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3047 = data
  i3046.m_hasFontAssetChanged = !!i3047[0]
  request.r(i3047[1], i3047[2], 0, i3046, 'm_baseMaterial')
  i3046.m_maskOffset = new pc.Vec4( i3047[3], i3047[4], i3047[5], i3047[6] )
  i3046.m_text = i3047[7]
  i3046.m_isRightToLeft = !!i3047[8]
  request.r(i3047[9], i3047[10], 0, i3046, 'm_fontAsset')
  request.r(i3047[11], i3047[12], 0, i3046, 'm_sharedMaterial')
  var i3049 = i3047[13]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 2) {
  request.r(i3049[i + 0], i3049[i + 1], 2, i3048, '')
  }
  i3046.m_fontSharedMaterials = i3048
  request.r(i3047[14], i3047[15], 0, i3046, 'm_fontMaterial')
  var i3051 = i3047[16]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 2) {
  request.r(i3051[i + 0], i3051[i + 1], 2, i3050, '')
  }
  i3046.m_fontMaterials = i3050
  i3046.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3047[17], i3047[18], i3047[19], i3047[20])
  i3046.m_fontColor = new pc.Color(i3047[21], i3047[22], i3047[23], i3047[24])
  i3046.m_enableVertexGradient = !!i3047[25]
  i3046.m_colorMode = i3047[26]
  i3046.m_fontColorGradient = request.d('TMPro.VertexGradient', i3047[27], i3046.m_fontColorGradient)
  request.r(i3047[28], i3047[29], 0, i3046, 'm_fontColorGradientPreset')
  request.r(i3047[30], i3047[31], 0, i3046, 'm_spriteAsset')
  i3046.m_tintAllSprites = !!i3047[32]
  request.r(i3047[33], i3047[34], 0, i3046, 'm_StyleSheet')
  i3046.m_TextStyleHashCode = i3047[35]
  i3046.m_overrideHtmlColors = !!i3047[36]
  i3046.m_faceColor = UnityEngine.Color32.ConstructColor(i3047[37], i3047[38], i3047[39], i3047[40])
  i3046.m_fontSize = i3047[41]
  i3046.m_fontSizeBase = i3047[42]
  i3046.m_fontWeight = i3047[43]
  i3046.m_enableAutoSizing = !!i3047[44]
  i3046.m_fontSizeMin = i3047[45]
  i3046.m_fontSizeMax = i3047[46]
  i3046.m_fontStyle = i3047[47]
  i3046.m_HorizontalAlignment = i3047[48]
  i3046.m_VerticalAlignment = i3047[49]
  i3046.m_textAlignment = i3047[50]
  i3046.m_characterSpacing = i3047[51]
  i3046.m_wordSpacing = i3047[52]
  i3046.m_lineSpacing = i3047[53]
  i3046.m_lineSpacingMax = i3047[54]
  i3046.m_paragraphSpacing = i3047[55]
  i3046.m_charWidthMaxAdj = i3047[56]
  i3046.m_enableWordWrapping = !!i3047[57]
  i3046.m_wordWrappingRatios = i3047[58]
  i3046.m_overflowMode = i3047[59]
  request.r(i3047[60], i3047[61], 0, i3046, 'm_linkedTextComponent')
  request.r(i3047[62], i3047[63], 0, i3046, 'parentLinkedComponent')
  i3046.m_enableKerning = !!i3047[64]
  i3046.m_enableExtraPadding = !!i3047[65]
  i3046.checkPaddingRequired = !!i3047[66]
  i3046.m_isRichText = !!i3047[67]
  i3046.m_parseCtrlCharacters = !!i3047[68]
  i3046.m_isOrthographic = !!i3047[69]
  i3046.m_isCullingEnabled = !!i3047[70]
  i3046.m_horizontalMapping = i3047[71]
  i3046.m_verticalMapping = i3047[72]
  i3046.m_uvLineOffset = i3047[73]
  i3046.m_geometrySortingOrder = i3047[74]
  i3046.m_IsTextObjectScaleStatic = !!i3047[75]
  i3046.m_VertexBufferAutoSizeReduction = !!i3047[76]
  i3046.m_useMaxVisibleDescender = !!i3047[77]
  i3046.m_pageToDisplay = i3047[78]
  i3046.m_margin = new pc.Vec4( i3047[79], i3047[80], i3047[81], i3047[82] )
  i3046.m_isUsingLegacyAnimationComponent = !!i3047[83]
  i3046.m_isVolumetricText = !!i3047[84]
  request.r(i3047[85], i3047[86], 0, i3046, 'm_Material')
  i3046.m_Maskable = !!i3047[87]
  i3046.m_Color = new pc.Color(i3047[88], i3047[89], i3047[90], i3047[91])
  i3046.m_RaycastTarget = !!i3047[92]
  i3046.m_RaycastPadding = new pc.Vec4( i3047[93], i3047[94], i3047[95], i3047[96] )
  return i3046
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3052 = root || request.c( 'TMPro.VertexGradient' )
  var i3053 = data
  i3052.topLeft = new pc.Color(i3053[0], i3053[1], i3053[2], i3053[3])
  i3052.topRight = new pc.Color(i3053[4], i3053[5], i3053[6], i3053[7])
  i3052.bottomLeft = new pc.Color(i3053[8], i3053[9], i3053[10], i3053[11])
  i3052.bottomRight = new pc.Color(i3053[12], i3053[13], i3053[14], i3053[15])
  return i3052
}

Deserializers["ScoreUI"] = function (request, data, root) {
  var i3054 = root || request.c( 'ScoreUI' )
  var i3055 = data
  request.r(i3055[0], i3055[1], 0, i3054, '_perfectScoreText')
  return i3054
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3057 = data
  request.r(i3057[0], i3057[1], 0, i3056, 'm_FirstSelected')
  i3056.m_sendNavigationEvents = !!i3057[2]
  i3056.m_DragThreshold = i3057[3]
  return i3056
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3058 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3059 = data
  i3058.m_HorizontalAxis = i3059[0]
  i3058.m_VerticalAxis = i3059[1]
  i3058.m_SubmitButton = i3059[2]
  i3058.m_CancelButton = i3059[3]
  i3058.m_InputActionsPerSecond = i3059[4]
  i3058.m_RepeatDelay = i3059[5]
  i3058.m_ForceModuleActive = !!i3059[6]
  i3058.m_SendPointerHoverToParent = !!i3059[7]
  return i3058
}

Deserializers["ScoreManager"] = function (request, data, root) {
  var i3060 = root || request.c( 'ScoreManager' )
  var i3061 = data
  i3060.onScoreChanged = request.d('UnityEngine.Events.UnityEvent', i3061[0], i3060.onScoreChanged)
  i3060.onPerfectScore = request.d('UnityEngine.Events.UnityEvent', i3061[1], i3060.onPerfectScore)
  return i3060
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3062 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3063 = data
  i3062.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3063[0], i3062.m_PersistentCalls)
  return i3062
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3065 = data
  var i3067 = i3065[0]
  var i3066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3067.length; i += 1) {
    i3066.add(request.d('UnityEngine.Events.PersistentCall', i3067[i + 0]));
  }
  i3064.m_Calls = i3066
  return i3064
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3070 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3071 = data
  request.r(i3071[0], i3071[1], 0, i3070, 'm_Target')
  i3070.m_TargetAssemblyTypeName = i3071[2]
  i3070.m_MethodName = i3071[3]
  i3070.m_Mode = i3071[4]
  i3070.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3071[5], i3070.m_Arguments)
  i3070.m_CallState = i3071[6]
  return i3070
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3072 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3073 = data
  request.r(i3073[0], i3073[1], 0, i3072, 'm_ObjectArgument')
  i3072.m_ObjectArgumentAssemblyTypeName = i3073[2]
  i3072.m_IntArgument = i3073[3]
  i3072.m_FloatArgument = i3073[4]
  i3072.m_StringArgument = i3073[5]
  i3072.m_BoolArgument = !!i3073[6]
  return i3072
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3074 = root || request.c( 'UnityEngine.UI.Image' )
  var i3075 = data
  request.r(i3075[0], i3075[1], 0, i3074, 'm_Sprite')
  i3074.m_Type = i3075[2]
  i3074.m_PreserveAspect = !!i3075[3]
  i3074.m_FillCenter = !!i3075[4]
  i3074.m_FillMethod = i3075[5]
  i3074.m_FillAmount = i3075[6]
  i3074.m_FillClockwise = !!i3075[7]
  i3074.m_FillOrigin = i3075[8]
  i3074.m_UseSpriteMesh = !!i3075[9]
  i3074.m_PixelsPerUnitMultiplier = i3075[10]
  request.r(i3075[11], i3075[12], 0, i3074, 'm_Material')
  i3074.m_Maskable = !!i3075[13]
  i3074.m_Color = new pc.Color(i3075[14], i3075[15], i3075[16], i3075[17])
  i3074.m_RaycastTarget = !!i3075[18]
  i3074.m_RaycastPadding = new pc.Vec4( i3075[19], i3075[20], i3075[21], i3075[22] )
  return i3074
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3076 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, 'm_Texture')
  i3076.m_UVRect = UnityEngine.Rect.MinMaxRect(i3077[2], i3077[3], i3077[4], i3077[5])
  request.r(i3077[6], i3077[7], 0, i3076, 'm_Material')
  i3076.m_Maskable = !!i3077[8]
  i3076.m_Color = new pc.Color(i3077[9], i3077[10], i3077[11], i3077[12])
  i3076.m_RaycastTarget = !!i3077[13]
  i3076.m_RaycastPadding = new pc.Vec4( i3077[14], i3077[15], i3077[16], i3077[17] )
  return i3076
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3078 = root || request.c( 'UnityEngine.UI.Button' )
  var i3079 = data
  i3078.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3079[0], i3078.m_OnClick)
  i3078.m_Navigation = request.d('UnityEngine.UI.Navigation', i3079[1], i3078.m_Navigation)
  i3078.m_Transition = i3079[2]
  i3078.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3079[3], i3078.m_Colors)
  i3078.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3079[4], i3078.m_SpriteState)
  i3078.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3079[5], i3078.m_AnimationTriggers)
  i3078.m_Interactable = !!i3079[6]
  request.r(i3079[7], i3079[8], 0, i3078, 'm_TargetGraphic')
  return i3078
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3080 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3081 = data
  i3080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3081[0], i3080.m_PersistentCalls)
  return i3080
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3083 = data
  i3082.m_Mode = i3083[0]
  i3082.m_WrapAround = !!i3083[1]
  request.r(i3083[2], i3083[3], 0, i3082, 'm_SelectOnUp')
  request.r(i3083[4], i3083[5], 0, i3082, 'm_SelectOnDown')
  request.r(i3083[6], i3083[7], 0, i3082, 'm_SelectOnLeft')
  request.r(i3083[8], i3083[9], 0, i3082, 'm_SelectOnRight')
  return i3082
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3084 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3085 = data
  i3084.m_NormalColor = new pc.Color(i3085[0], i3085[1], i3085[2], i3085[3])
  i3084.m_HighlightedColor = new pc.Color(i3085[4], i3085[5], i3085[6], i3085[7])
  i3084.m_PressedColor = new pc.Color(i3085[8], i3085[9], i3085[10], i3085[11])
  i3084.m_SelectedColor = new pc.Color(i3085[12], i3085[13], i3085[14], i3085[15])
  i3084.m_DisabledColor = new pc.Color(i3085[16], i3085[17], i3085[18], i3085[19])
  i3084.m_ColorMultiplier = i3085[20]
  i3084.m_FadeDuration = i3085[21]
  return i3084
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3086 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3087 = data
  request.r(i3087[0], i3087[1], 0, i3086, 'm_HighlightedSprite')
  request.r(i3087[2], i3087[3], 0, i3086, 'm_PressedSprite')
  request.r(i3087[4], i3087[5], 0, i3086, 'm_SelectedSprite')
  request.r(i3087[6], i3087[7], 0, i3086, 'm_DisabledSprite')
  return i3086
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3088 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3089 = data
  i3088.m_NormalTrigger = i3089[0]
  i3088.m_HighlightedTrigger = i3089[1]
  i3088.m_PressedTrigger = i3089[2]
  i3088.m_SelectedTrigger = i3089[3]
  i3088.m_DisabledTrigger = i3089[4]
  return i3088
}

Deserializers["BackBtn"] = function (request, data, root) {
  var i3090 = root || request.c( 'BackBtn' )
  var i3091 = data
  i3090._animationSpeed = i3091[0]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3093 = data
  i3092.m_Alpha = i3093[0]
  i3092.m_Interactable = !!i3093[1]
  i3092.m_BlocksRaycasts = !!i3093[2]
  i3092.m_IgnoreParentGroups = !!i3093[3]
  i3092.enabled = !!i3093[4]
  return i3092
}

Deserializers["BallSelectionBtn"] = function (request, data, root) {
  var i3094 = root || request.c( 'BallSelectionBtn' )
  var i3095 = data
  request.r(i3095[0], i3095[1], 0, i3094, '_ballSelectionCanvas')
  request.r(i3095[2], i3095[3], 0, i3094, '_inGameCanvas')
  request.r(i3095[4], i3095[5], 0, i3094, '_ballCarousel')
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3097 = data
  i3096.ambientIntensity = i3097[0]
  i3096.reflectionIntensity = i3097[1]
  i3096.ambientMode = i3097[2]
  i3096.ambientLight = new pc.Color(i3097[3], i3097[4], i3097[5], i3097[6])
  i3096.ambientSkyColor = new pc.Color(i3097[7], i3097[8], i3097[9], i3097[10])
  i3096.ambientGroundColor = new pc.Color(i3097[11], i3097[12], i3097[13], i3097[14])
  i3096.ambientEquatorColor = new pc.Color(i3097[15], i3097[16], i3097[17], i3097[18])
  i3096.fogColor = new pc.Color(i3097[19], i3097[20], i3097[21], i3097[22])
  i3096.fogEndDistance = i3097[23]
  i3096.fogStartDistance = i3097[24]
  i3096.fogDensity = i3097[25]
  i3096.fog = !!i3097[26]
  request.r(i3097[27], i3097[28], 0, i3096, 'skybox')
  i3096.fogMode = i3097[29]
  var i3099 = i3097[30]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3099[i + 0]) );
  }
  i3096.lightmaps = i3098
  i3096.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3097[31], i3096.lightProbes)
  i3096.lightmapsMode = i3097[32]
  i3096.mixedBakeMode = i3097[33]
  i3096.environmentLightingMode = i3097[34]
  i3096.ambientProbe = new pc.SphericalHarmonicsL2(i3097[35])
  i3096.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3097[36])
  i3096.useReferenceAmbientProbe = !!i3097[37]
  request.r(i3097[38], i3097[39], 0, i3096, 'customReflection')
  request.r(i3097[40], i3097[41], 0, i3096, 'defaultReflection')
  i3096.defaultReflectionMode = i3097[42]
  i3096.defaultReflectionResolution = i3097[43]
  i3096.sunLightObjectId = i3097[44]
  i3096.pixelLightCount = i3097[45]
  i3096.defaultReflectionHDR = !!i3097[46]
  i3096.hasLightDataAsset = !!i3097[47]
  i3096.hasManualGenerate = !!i3097[48]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3103 = data
  request.r(i3103[0], i3103[1], 0, i3102, 'lightmapColor')
  request.r(i3103[2], i3103[3], 0, i3102, 'lightmapDirection')
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3104 = root || new UnityEngine.LightProbes()
  var i3105 = data
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i3111 = data
  i3110.name = i3111[0]
  i3110.bounciness = i3111[1]
  i3110.dynamicFriction = i3111[2]
  i3110.staticFriction = i3111[3]
  i3110.frictionCombine = i3111[4]
  i3110.bounceCombine = i3111[5]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3113 = data
  var i3115 = i3113[0]
  var i3114 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3115[i + 0]));
  }
  i3112.ShaderCompilationErrors = i3114
  i3112.name = i3113[1]
  i3112.guid = i3113[2]
  var i3117 = i3113[3]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( i3117[i + 0] );
  }
  i3112.shaderDefinedKeywords = i3116
  var i3119 = i3113[4]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3119[i + 0]) );
  }
  i3112.passes = i3118
  var i3121 = i3113[5]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3121[i + 0]) );
  }
  i3112.usePasses = i3120
  var i3123 = i3113[6]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3123[i + 0]) );
  }
  i3112.defaultParameterValues = i3122
  request.r(i3113[7], i3113[8], 0, i3112, 'unityFallbackShader')
  i3112.readDepth = !!i3113[9]
  i3112.isCreatedByShaderGraph = !!i3113[10]
  i3112.compiled = !!i3113[11]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3127 = data
  i3126.shaderName = i3127[0]
  i3126.errorMessage = i3127[1]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3132 = root || new pc.UnityShaderPass()
  var i3133 = data
  i3132.id = i3133[0]
  i3132.subShaderIndex = i3133[1]
  i3132.name = i3133[2]
  i3132.passType = i3133[3]
  i3132.grabPassTextureName = i3133[4]
  i3132.usePass = !!i3133[5]
  i3132.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[6], i3132.zTest)
  i3132.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[7], i3132.zWrite)
  i3132.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[8], i3132.culling)
  i3132.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3133[9], i3132.blending)
  i3132.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3133[10], i3132.alphaBlending)
  i3132.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[11], i3132.colorWriteMask)
  i3132.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[12], i3132.offsetUnits)
  i3132.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[13], i3132.offsetFactor)
  i3132.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[14], i3132.stencilRef)
  i3132.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[15], i3132.stencilReadMask)
  i3132.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3133[16], i3132.stencilWriteMask)
  i3132.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3133[17], i3132.stencilOp)
  i3132.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3133[18], i3132.stencilOpFront)
  i3132.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3133[19], i3132.stencilOpBack)
  var i3135 = i3133[20]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3135[i + 0]) );
  }
  i3132.tags = i3134
  var i3137 = i3133[21]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( i3137[i + 0] );
  }
  i3132.passDefinedKeywords = i3136
  var i3139 = i3133[22]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3139[i + 0]) );
  }
  i3132.passDefinedKeywordGroups = i3138
  var i3141 = i3133[23]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3141[i + 0]) );
  }
  i3132.variants = i3140
  var i3143 = i3133[24]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3143[i + 0]) );
  }
  i3132.excludedVariants = i3142
  i3132.hasDepthReader = !!i3133[25]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3145 = data
  i3144.val = i3145[0]
  i3144.name = i3145[1]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3147 = data
  i3146.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3147[0], i3146.src)
  i3146.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3147[1], i3146.dst)
  i3146.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3147[2], i3146.op)
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3149 = data
  i3148.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3149[0], i3148.pass)
  i3148.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3149[1], i3148.fail)
  i3148.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3149[2], i3148.zFail)
  i3148.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3149[3], i3148.comp)
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3153 = data
  i3152.name = i3153[0]
  i3152.value = i3153[1]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3157 = data
  var i3159 = i3157[0]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( i3159[i + 0] );
  }
  i3156.keywords = i3158
  i3156.hasDiscard = !!i3157[1]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3163 = data
  i3162.passId = i3163[0]
  i3162.subShaderIndex = i3163[1]
  var i3165 = i3163[2]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( i3165[i + 0] );
  }
  i3162.keywords = i3164
  i3162.vertexProgram = i3163[3]
  i3162.fragmentProgram = i3163[4]
  i3162.exportedForWebGl2 = !!i3163[5]
  i3162.readDepth = !!i3163[6]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3169 = data
  request.r(i3169[0], i3169[1], 0, i3168, 'shader')
  i3168.pass = i3169[2]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3173 = data
  i3172.name = i3173[0]
  i3172.type = i3173[1]
  i3172.value = new pc.Vec4( i3173[2], i3173[3], i3173[4], i3173[5] )
  i3172.textureValue = i3173[6]
  i3172.shaderPropertyFlag = i3173[7]
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3175 = data
  i3174.name = i3175[0]
  request.r(i3175[1], i3175[2], 0, i3174, 'texture')
  i3174.aabb = i3175[3]
  i3174.vertices = i3175[4]
  i3174.triangles = i3175[5]
  i3174.textureRect = UnityEngine.Rect.MinMaxRect(i3175[6], i3175[7], i3175[8], i3175[9])
  i3174.packedRect = UnityEngine.Rect.MinMaxRect(i3175[10], i3175[11], i3175[12], i3175[13])
  i3174.border = new pc.Vec4( i3175[14], i3175[15], i3175[16], i3175[17] )
  i3174.transparency = i3175[18]
  i3174.bounds = i3175[19]
  i3174.pixelsPerUnit = i3175[20]
  i3174.textureWidth = i3175[21]
  i3174.textureHeight = i3175[22]
  i3174.nativeSize = new pc.Vec2( i3175[23], i3175[24] )
  i3174.pivot = new pc.Vec2( i3175[25], i3175[26] )
  i3174.textureRectOffset = new pc.Vec2( i3175[27], i3175[28] )
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3177 = data
  i3176.name = i3177[0]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3179 = data
  i3178.name = i3179[0]
  i3178.ascent = i3179[1]
  i3178.originalLineHeight = i3179[2]
  i3178.fontSize = i3179[3]
  var i3181 = i3179[4]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3181[i + 0]) );
  }
  i3178.characterInfo = i3180
  request.r(i3179[5], i3179[6], 0, i3178, 'texture')
  i3178.originalFontSize = i3179[7]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3185 = data
  i3184.index = i3185[0]
  i3184.advance = i3185[1]
  i3184.bearing = i3185[2]
  i3184.glyphWidth = i3185[3]
  i3184.glyphHeight = i3185[4]
  i3184.minX = i3185[5]
  i3184.maxX = i3185[6]
  i3184.minY = i3185[7]
  i3184.maxY = i3185[8]
  i3184.uvBottomLeftX = i3185[9]
  i3184.uvBottomLeftY = i3185[10]
  i3184.uvBottomRightX = i3185[11]
  i3184.uvBottomRightY = i3185[12]
  i3184.uvTopLeftX = i3185[13]
  i3184.uvTopLeftY = i3185[14]
  i3184.uvTopRightX = i3185[15]
  i3184.uvTopRightY = i3185[16]
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3187 = data
  i3186.name = i3187[0]
  i3186.bytes64 = i3187[1]
  i3186.data = i3187[2]
  return i3186
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3188 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3189 = data
  i3188.hashCode = i3189[0]
  request.r(i3189[1], i3189[2], 0, i3188, 'material')
  i3188.materialHashCode = i3189[3]
  request.r(i3189[4], i3189[5], 0, i3188, 'atlas')
  i3188.normalStyle = i3189[6]
  i3188.normalSpacingOffset = i3189[7]
  i3188.boldStyle = i3189[8]
  i3188.boldSpacing = i3189[9]
  i3188.italicStyle = i3189[10]
  i3188.tabSize = i3189[11]
  i3188.m_Version = i3189[12]
  i3188.m_SourceFontFileGUID = i3189[13]
  request.r(i3189[14], i3189[15], 0, i3188, 'm_SourceFontFile_EditorRef')
  request.r(i3189[16], i3189[17], 0, i3188, 'm_SourceFontFile')
  i3188.m_AtlasPopulationMode = i3189[18]
  i3188.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3189[19], i3188.m_FaceInfo)
  var i3191 = i3189[20]
  var i3190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.add(request.d('UnityEngine.TextCore.Glyph', i3191[i + 0]));
  }
  i3188.m_GlyphTable = i3190
  var i3193 = i3189[21]
  var i3192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.add(request.d('TMPro.TMP_Character', i3193[i + 0]));
  }
  i3188.m_CharacterTable = i3192
  var i3195 = i3189[22]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3188.m_AtlasTextures = i3194
  i3188.m_AtlasTextureIndex = i3189[23]
  i3188.m_IsMultiAtlasTexturesEnabled = !!i3189[24]
  i3188.m_ClearDynamicDataOnBuild = !!i3189[25]
  var i3197 = i3189[26]
  var i3196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.add(request.d('UnityEngine.TextCore.GlyphRect', i3197[i + 0]));
  }
  i3188.m_UsedGlyphRects = i3196
  var i3199 = i3189[27]
  var i3198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.add(request.d('UnityEngine.TextCore.GlyphRect', i3199[i + 0]));
  }
  i3188.m_FreeGlyphRects = i3198
  i3188.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3189[28], i3188.m_fontInfo)
  i3188.m_AtlasWidth = i3189[29]
  i3188.m_AtlasHeight = i3189[30]
  i3188.m_AtlasPadding = i3189[31]
  i3188.m_AtlasRenderMode = i3189[32]
  var i3201 = i3189[33]
  var i3200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.add(request.d('TMPro.TMP_Glyph', i3201[i + 0]));
  }
  i3188.m_glyphInfoList = i3200
  i3188.m_KerningTable = request.d('TMPro.KerningTable', i3189[34], i3188.m_KerningTable)
  i3188.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3189[35], i3188.m_FontFeatureTable)
  var i3203 = i3189[36]
  var i3202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3203.length; i += 2) {
  request.r(i3203[i + 0], i3203[i + 1], 1, i3202, '')
  }
  i3188.fallbackFontAssets = i3202
  var i3205 = i3189[37]
  var i3204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3205.length; i += 2) {
  request.r(i3205[i + 0], i3205[i + 1], 1, i3204, '')
  }
  i3188.m_FallbackFontAssetTable = i3204
  i3188.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3189[38], i3188.m_CreationSettings)
  var i3207 = i3189[39]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('TMPro.TMP_FontWeightPair', i3207[i + 0]) );
  }
  i3188.m_FontWeightTable = i3206
  var i3209 = i3189[40]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('TMPro.TMP_FontWeightPair', i3209[i + 0]) );
  }
  i3188.fontWeights = i3208
  return i3188
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3210 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3211 = data
  i3210.m_FaceIndex = i3211[0]
  i3210.m_FamilyName = i3211[1]
  i3210.m_StyleName = i3211[2]
  i3210.m_PointSize = i3211[3]
  i3210.m_Scale = i3211[4]
  i3210.m_UnitsPerEM = i3211[5]
  i3210.m_LineHeight = i3211[6]
  i3210.m_AscentLine = i3211[7]
  i3210.m_CapLine = i3211[8]
  i3210.m_MeanLine = i3211[9]
  i3210.m_Baseline = i3211[10]
  i3210.m_DescentLine = i3211[11]
  i3210.m_SuperscriptOffset = i3211[12]
  i3210.m_SuperscriptSize = i3211[13]
  i3210.m_SubscriptOffset = i3211[14]
  i3210.m_SubscriptSize = i3211[15]
  i3210.m_UnderlineOffset = i3211[16]
  i3210.m_UnderlineThickness = i3211[17]
  i3210.m_StrikethroughOffset = i3211[18]
  i3210.m_StrikethroughThickness = i3211[19]
  i3210.m_TabWidth = i3211[20]
  return i3210
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3215 = data
  i3214.m_Index = i3215[0]
  i3214.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3215[1], i3214.m_Metrics)
  i3214.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3215[2], i3214.m_GlyphRect)
  i3214.m_Scale = i3215[3]
  i3214.m_AtlasIndex = i3215[4]
  i3214.m_ClassDefinitionType = i3215[5]
  return i3214
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3216 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3217 = data
  i3216.m_Width = i3217[0]
  i3216.m_Height = i3217[1]
  i3216.m_HorizontalBearingX = i3217[2]
  i3216.m_HorizontalBearingY = i3217[3]
  i3216.m_HorizontalAdvance = i3217[4]
  return i3216
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3218 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3219 = data
  i3218.m_X = i3219[0]
  i3218.m_Y = i3219[1]
  i3218.m_Width = i3219[2]
  i3218.m_Height = i3219[3]
  return i3218
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3222 = root || request.c( 'TMPro.TMP_Character' )
  var i3223 = data
  i3222.m_ElementType = i3223[0]
  i3222.m_Unicode = i3223[1]
  i3222.m_GlyphIndex = i3223[2]
  i3222.m_Scale = i3223[3]
  return i3222
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3228 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3229 = data
  i3228.Name = i3229[0]
  i3228.PointSize = i3229[1]
  i3228.Scale = i3229[2]
  i3228.CharacterCount = i3229[3]
  i3228.LineHeight = i3229[4]
  i3228.Baseline = i3229[5]
  i3228.Ascender = i3229[6]
  i3228.CapHeight = i3229[7]
  i3228.Descender = i3229[8]
  i3228.CenterLine = i3229[9]
  i3228.SuperscriptOffset = i3229[10]
  i3228.SubscriptOffset = i3229[11]
  i3228.SubSize = i3229[12]
  i3228.Underline = i3229[13]
  i3228.UnderlineThickness = i3229[14]
  i3228.strikethrough = i3229[15]
  i3228.strikethroughThickness = i3229[16]
  i3228.TabWidth = i3229[17]
  i3228.Padding = i3229[18]
  i3228.AtlasWidth = i3229[19]
  i3228.AtlasHeight = i3229[20]
  return i3228
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3232 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3233 = data
  i3232.id = i3233[0]
  i3232.x = i3233[1]
  i3232.y = i3233[2]
  i3232.width = i3233[3]
  i3232.height = i3233[4]
  i3232.xOffset = i3233[5]
  i3232.yOffset = i3233[6]
  i3232.xAdvance = i3233[7]
  i3232.scale = i3233[8]
  return i3232
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3234 = root || request.c( 'TMPro.KerningTable' )
  var i3235 = data
  var i3237 = i3235[0]
  var i3236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.add(request.d('TMPro.KerningPair', i3237[i + 0]));
  }
  i3234.kerningPairs = i3236
  return i3234
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3240 = root || request.c( 'TMPro.KerningPair' )
  var i3241 = data
  i3240.xOffset = i3241[0]
  i3240.m_FirstGlyph = i3241[1]
  i3240.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3241[2], i3240.m_FirstGlyphAdjustments)
  i3240.m_SecondGlyph = i3241[3]
  i3240.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3241[4], i3240.m_SecondGlyphAdjustments)
  i3240.m_IgnoreSpacingAdjustments = !!i3241[5]
  return i3240
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3242 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3243 = data
  var i3245 = i3243[0]
  var i3244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3245[i + 0]));
  }
  i3242.m_GlyphPairAdjustmentRecords = i3244
  return i3242
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3248 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3249 = data
  i3248.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3249[0], i3248.m_FirstAdjustmentRecord)
  i3248.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3249[1], i3248.m_SecondAdjustmentRecord)
  i3248.m_FeatureLookupFlags = i3249[2]
  return i3248
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3250 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3251 = data
  i3250.m_GlyphIndex = i3251[0]
  i3250.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3251[1], i3250.m_GlyphValueRecord)
  return i3250
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3252 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3253 = data
  i3252.m_XPlacement = i3253[0]
  i3252.m_YPlacement = i3253[1]
  i3252.m_XAdvance = i3253[2]
  i3252.m_YAdvance = i3253[3]
  return i3252
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3256 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3257 = data
  i3256.sourceFontFileName = i3257[0]
  i3256.sourceFontFileGUID = i3257[1]
  i3256.pointSizeSamplingMode = i3257[2]
  i3256.pointSize = i3257[3]
  i3256.padding = i3257[4]
  i3256.packingMode = i3257[5]
  i3256.atlasWidth = i3257[6]
  i3256.atlasHeight = i3257[7]
  i3256.characterSetSelectionMode = i3257[8]
  i3256.characterSequence = i3257[9]
  i3256.referencedFontAssetGUID = i3257[10]
  i3256.referencedTextAssetGUID = i3257[11]
  i3256.fontStyle = i3257[12]
  i3256.fontStyleModifier = i3257[13]
  i3256.renderMode = i3257[14]
  i3256.includeFontFeatures = !!i3257[15]
  return i3256
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3260 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3261 = data
  request.r(i3261[0], i3261[1], 0, i3260, 'regularTypeface')
  request.r(i3261[2], i3261[3], 0, i3260, 'italicTypeface')
  return i3260
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3262 = root || request.c( 'TMPro.TMP_Settings' )
  var i3263 = data
  i3262.m_enableWordWrapping = !!i3263[0]
  i3262.m_enableKerning = !!i3263[1]
  i3262.m_enableExtraPadding = !!i3263[2]
  i3262.m_enableTintAllSprites = !!i3263[3]
  i3262.m_enableParseEscapeCharacters = !!i3263[4]
  i3262.m_EnableRaycastTarget = !!i3263[5]
  i3262.m_GetFontFeaturesAtRuntime = !!i3263[6]
  i3262.m_missingGlyphCharacter = i3263[7]
  i3262.m_warningsDisabled = !!i3263[8]
  request.r(i3263[9], i3263[10], 0, i3262, 'm_defaultFontAsset')
  i3262.m_defaultFontAssetPath = i3263[11]
  i3262.m_defaultFontSize = i3263[12]
  i3262.m_defaultAutoSizeMinRatio = i3263[13]
  i3262.m_defaultAutoSizeMaxRatio = i3263[14]
  i3262.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3263[15], i3263[16] )
  i3262.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3263[17], i3263[18] )
  i3262.m_autoSizeTextContainer = !!i3263[19]
  i3262.m_IsTextObjectScaleStatic = !!i3263[20]
  var i3265 = i3263[21]
  var i3264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3265.length; i += 2) {
  request.r(i3265[i + 0], i3265[i + 1], 1, i3264, '')
  }
  i3262.m_fallbackFontAssets = i3264
  i3262.m_matchMaterialPreset = !!i3263[22]
  request.r(i3263[23], i3263[24], 0, i3262, 'm_defaultSpriteAsset')
  i3262.m_defaultSpriteAssetPath = i3263[25]
  i3262.m_enableEmojiSupport = !!i3263[26]
  i3262.m_MissingCharacterSpriteUnicode = i3263[27]
  i3262.m_defaultColorGradientPresetsPath = i3263[28]
  request.r(i3263[29], i3263[30], 0, i3262, 'm_defaultStyleSheet')
  i3262.m_StyleSheetsResourcePath = i3263[31]
  request.r(i3263[32], i3263[33], 0, i3262, 'm_leadingCharacters')
  request.r(i3263[34], i3263[35], 0, i3262, 'm_followingCharacters')
  i3262.m_UseModernHangulLineBreakingRules = !!i3263[36]
  return i3262
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3266 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3267 = data
  i3266.hashCode = i3267[0]
  request.r(i3267[1], i3267[2], 0, i3266, 'material')
  i3266.materialHashCode = i3267[3]
  request.r(i3267[4], i3267[5], 0, i3266, 'spriteSheet')
  var i3269 = i3267[6]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.add(request.d('TMPro.TMP_Sprite', i3269[i + 0]));
  }
  i3266.spriteInfoList = i3268
  var i3271 = i3267[7]
  var i3270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3271.length; i += 2) {
  request.r(i3271[i + 0], i3271[i + 1], 1, i3270, '')
  }
  i3266.fallbackSpriteAssets = i3270
  i3266.m_Version = i3267[8]
  i3266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3267[9], i3266.m_FaceInfo)
  var i3273 = i3267[10]
  var i3272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.add(request.d('TMPro.TMP_SpriteCharacter', i3273[i + 0]));
  }
  i3266.m_SpriteCharacterTable = i3272
  var i3275 = i3267[11]
  var i3274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.add(request.d('TMPro.TMP_SpriteGlyph', i3275[i + 0]));
  }
  i3266.m_SpriteGlyphTable = i3274
  return i3266
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3278 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3279 = data
  i3278.name = i3279[0]
  i3278.hashCode = i3279[1]
  i3278.unicode = i3279[2]
  i3278.pivot = new pc.Vec2( i3279[3], i3279[4] )
  request.r(i3279[5], i3279[6], 0, i3278, 'sprite')
  i3278.id = i3279[7]
  i3278.x = i3279[8]
  i3278.y = i3279[9]
  i3278.width = i3279[10]
  i3278.height = i3279[11]
  i3278.xOffset = i3279[12]
  i3278.yOffset = i3279[13]
  i3278.xAdvance = i3279[14]
  i3278.scale = i3279[15]
  return i3278
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3284 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3285 = data
  i3284.m_Name = i3285[0]
  i3284.m_HashCode = i3285[1]
  i3284.m_ElementType = i3285[2]
  i3284.m_Unicode = i3285[3]
  i3284.m_GlyphIndex = i3285[4]
  i3284.m_Scale = i3285[5]
  return i3284
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3288 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, 'sprite')
  i3288.m_Index = i3289[2]
  i3288.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3289[3], i3288.m_Metrics)
  i3288.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3289[4], i3288.m_GlyphRect)
  i3288.m_Scale = i3289[5]
  i3288.m_AtlasIndex = i3289[6]
  i3288.m_ClassDefinitionType = i3289[7]
  return i3288
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3290 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3291 = data
  var i3293 = i3291[0]
  var i3292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.add(request.d('TMPro.TMP_Style', i3293[i + 0]));
  }
  i3290.m_StyleList = i3292
  return i3290
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3296 = root || request.c( 'TMPro.TMP_Style' )
  var i3297 = data
  i3296.m_Name = i3297[0]
  i3296.m_HashCode = i3297[1]
  i3296.m_OpeningDefinition = i3297[2]
  i3296.m_ClosingDefinition = i3297[3]
  i3296.m_OpeningTagArray = i3297[4]
  i3296.m_ClosingTagArray = i3297[5]
  i3296.m_OpeningTagUnicodeArray = i3297[6]
  i3296.m_ClosingTagUnicodeArray = i3297[7]
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3299 = data
  var i3301 = i3299[0]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3301[i + 0]) );
  }
  i3298.files = i3300
  i3298.componentToPrefabIds = i3299[1]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3305 = data
  i3304.path = i3305[0]
  request.r(i3305[1], i3305[2], 0, i3304, 'unityObject')
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3307 = data
  var i3309 = i3307[0]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3309[i + 0]) );
  }
  i3306.scriptsExecutionOrder = i3308
  var i3311 = i3307[1]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 1) {
    i3310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3311[i + 0]) );
  }
  i3306.sortingLayers = i3310
  var i3313 = i3307[2]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 1) {
    i3312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3313[i + 0]) );
  }
  i3306.cullingLayers = i3312
  i3306.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3307[3], i3306.timeSettings)
  i3306.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3307[4], i3306.physicsSettings)
  i3306.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3307[5], i3306.physics2DSettings)
  i3306.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3307[6], i3306.qualitySettings)
  i3306.enableRealtimeShadows = !!i3307[7]
  i3306.enableAutoInstancing = !!i3307[8]
  i3306.enableDynamicBatching = !!i3307[9]
  i3306.lightmapEncodingQuality = i3307[10]
  i3306.desiredColorSpace = i3307[11]
  var i3315 = i3307[12]
  var i3314 = []
  for(var i = 0; i < i3315.length; i += 1) {
    i3314.push( i3315[i + 0] );
  }
  i3306.allTags = i3314
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3319 = data
  i3318.name = i3319[0]
  i3318.value = i3319[1]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3323 = data
  i3322.id = i3323[0]
  i3322.name = i3323[1]
  i3322.value = i3323[2]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3327 = data
  i3326.id = i3327[0]
  i3326.name = i3327[1]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3329 = data
  i3328.fixedDeltaTime = i3329[0]
  i3328.maximumDeltaTime = i3329[1]
  i3328.timeScale = i3329[2]
  i3328.maximumParticleTimestep = i3329[3]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3331 = data
  i3330.gravity = new pc.Vec3( i3331[0], i3331[1], i3331[2] )
  i3330.defaultSolverIterations = i3331[3]
  i3330.bounceThreshold = i3331[4]
  i3330.autoSyncTransforms = !!i3331[5]
  i3330.autoSimulation = !!i3331[6]
  var i3333 = i3331[7]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3333[i + 0]) );
  }
  i3330.collisionMatrix = i3332
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.layerId = i3337[1]
  i3336.otherLayerId = i3337[2]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'material')
  i3338.gravity = new pc.Vec2( i3339[2], i3339[3] )
  i3338.positionIterations = i3339[4]
  i3338.velocityIterations = i3339[5]
  i3338.velocityThreshold = i3339[6]
  i3338.maxLinearCorrection = i3339[7]
  i3338.maxAngularCorrection = i3339[8]
  i3338.maxTranslationSpeed = i3339[9]
  i3338.maxRotationSpeed = i3339[10]
  i3338.baumgarteScale = i3339[11]
  i3338.baumgarteTOIScale = i3339[12]
  i3338.timeToSleep = i3339[13]
  i3338.linearSleepTolerance = i3339[14]
  i3338.angularSleepTolerance = i3339[15]
  i3338.defaultContactOffset = i3339[16]
  i3338.autoSimulation = !!i3339[17]
  i3338.queriesHitTriggers = !!i3339[18]
  i3338.queriesStartInColliders = !!i3339[19]
  i3338.callbacksOnDisable = !!i3339[20]
  i3338.reuseCollisionCallbacks = !!i3339[21]
  i3338.autoSyncTransforms = !!i3339[22]
  var i3341 = i3339[23]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3341[i + 0]) );
  }
  i3338.collisionMatrix = i3340
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3345 = data
  i3344.enabled = !!i3345[0]
  i3344.layerId = i3345[1]
  i3344.otherLayerId = i3345[2]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3347 = data
  var i3349 = i3347[0]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 1) {
    i3348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3349[i + 0]) );
  }
  i3346.qualityLevels = i3348
  var i3351 = i3347[1]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( i3351[i + 0] );
  }
  i3346.names = i3350
  i3346.shadows = i3347[2]
  i3346.anisotropicFiltering = i3347[3]
  i3346.antiAliasing = i3347[4]
  i3346.lodBias = i3347[5]
  i3346.shadowCascades = i3347[6]
  i3346.shadowDistance = i3347[7]
  i3346.shadowmaskMode = i3347[8]
  i3346.shadowProjection = i3347[9]
  i3346.shadowResolution = i3347[10]
  i3346.softParticles = !!i3347[11]
  i3346.softVegetation = !!i3347[12]
  i3346.activeColorSpace = i3347[13]
  i3346.desiredColorSpace = i3347[14]
  i3346.masterTextureLimit = i3347[15]
  i3346.maxQueuedFrames = i3347[16]
  i3346.particleRaycastBudget = i3347[17]
  i3346.pixelLightCount = i3347[18]
  i3346.realtimeReflectionProbes = !!i3347[19]
  i3346.shadowCascade2Split = i3347[20]
  i3346.shadowCascade4Split = new pc.Vec3( i3347[21], i3347[22], i3347[23] )
  i3346.streamingMipmapsActive = !!i3347[24]
  i3346.vSyncCount = i3347[25]
  i3346.asyncUploadBufferSize = i3347[26]
  i3346.asyncUploadTimeSlice = i3347[27]
  i3346.billboardsFaceCameraPosition = !!i3347[28]
  i3346.shadowNearPlaneOffset = i3347[29]
  i3346.streamingMipmapsMemoryBudget = i3347[30]
  i3346.maximumLODLevel = i3347[31]
  i3346.streamingMipmapsAddAllCameras = !!i3347[32]
  i3346.streamingMipmapsMaxLevelReduction = i3347[33]
  i3346.streamingMipmapsRenderersPerFrame = i3347[34]
  i3346.resolutionScalingFixedDPIFactor = i3347[35]
  i3346.streamingMipmapsMaxFileIORequests = i3347[36]
  i3346.currentQualityLevel = i3347[37]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3357 = data
  i3356.weight = i3357[0]
  i3356.vertices = i3357[1]
  i3356.normals = i3357[2]
  i3356.tangents = i3357[3]
  return i3356
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3358 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3359 = data
  i3358.xPlacement = i3359[0]
  i3358.yPlacement = i3359[1]
  i3358.xAdvance = i3359[2]
  i3358.yAdvance = i3359[3]
  return i3358
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"30":[31],"70":[21],"71":[4],"72":[4],"27":[4],"73":[4],"74":[4],"75":[4],"76":[4],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[21],"92":[15],"93":[94],"95":[94],"41":[40],"8":[4],"96":[97],"98":[40],"99":[40],"43":[41],"51":[44,40],"100":[40],"42":[41],"101":[40],"102":[40],"103":[40],"104":[40],"105":[40],"106":[40],"107":[40],"108":[40],"109":[40],"52":[44,40],"110":[40],"111":[40],"112":[40],"113":[40],"114":[44,40],"115":[40],"116":[48],"117":[48],"49":[48],"118":[48],"119":[21],"24":[21],"120":[97],"121":[40],"122":[15,40],"45":[40,44],"123":[40],"124":[44,40],"125":[15],"126":[44,40],"127":[40],"128":[97]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","BallController","LaunchController","UnityEngine.AudioSource","AudioController","UnityEngine.AudioClip","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.BoxCollider","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.GameObject","RotateRing","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","RimCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","HoopTrigger","BallCarousel","BallSelection","UnityEngine.SpriteRenderer","UnityEngine.Sprite","SpriteRender","UnityEngine.RenderTexture","GameManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","ScoreUI","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ScoreManager","UnityEngine.UI.Image","UnityEngine.UI.RawImage","UnityEngine.UI.Button","BallSelectionBtn","BackBtn","UnityEngine.CanvasGroup","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Basketball-Unity3D";

Deserializers.lunaInitializationTime = "08/07/2025 02:03:21";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Basketball";

Deserializers.lunaAppID = "32037";

Deserializers.projectId = "f678abe0b31c5ace690f923a72919943";

Deserializers.packagesInfo = "com.unity.textmeshpro: file:E:/Projects/com.unity.textmeshpro-3.0.6\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1639";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3955";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.BasketballUnity3D";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "557c21af-9d43-4db0-8410-e5d3e9b36f4c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"]],[["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

