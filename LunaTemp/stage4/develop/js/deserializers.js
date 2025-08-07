var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.JointSpring' )
  var i1681 = data
  i1680.spring = i1681[0]
  i1680.damper = i1681[1]
  i1680.targetPosition = i1681[2]
  return i1680
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.JointMotor' )
  var i1683 = data
  i1682.m_TargetVelocity = i1683[0]
  i1682.m_Force = i1683[1]
  i1682.m_FreeSpin = i1683[2]
  return i1682
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.JointLimits' )
  var i1685 = data
  i1684.m_Min = i1685[0]
  i1684.m_Max = i1685[1]
  i1684.m_Bounciness = i1685[2]
  i1684.m_BounceMinVelocity = i1685[3]
  i1684.m_ContactDistance = i1685[4]
  i1684.minBounce = i1685[5]
  i1684.maxBounce = i1685[6]
  return i1684
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.JointDrive' )
  var i1687 = data
  i1686.m_PositionSpring = i1687[0]
  i1686.m_PositionDamper = i1687[1]
  i1686.m_MaximumForce = i1687[2]
  i1686.m_UseAcceleration = i1687[3]
  return i1686
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1689 = data
  i1688.m_Spring = i1689[0]
  i1688.m_Damper = i1689[1]
  return i1688
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1691 = data
  i1690.m_Limit = i1691[0]
  i1690.m_Bounciness = i1691[1]
  i1690.m_ContactDistance = i1691[2]
  return i1690
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1693 = data
  i1692.m_ExtremumSlip = i1693[0]
  i1692.m_ExtremumValue = i1693[1]
  i1692.m_AsymptoteSlip = i1693[2]
  i1692.m_AsymptoteValue = i1693[3]
  i1692.m_Stiffness = i1693[4]
  return i1692
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1695 = data
  i1694.m_LowerAngle = i1695[0]
  i1694.m_UpperAngle = i1695[1]
  return i1694
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1697 = data
  i1696.m_MotorSpeed = i1697[0]
  i1696.m_MaximumMotorTorque = i1697[1]
  return i1696
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1699 = data
  i1698.m_DampingRatio = i1699[0]
  i1698.m_Frequency = i1699[1]
  i1698.m_Angle = i1699[2]
  return i1698
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1701 = data
  i1700.m_LowerTranslation = i1701[0]
  i1700.m_UpperTranslation = i1701[1]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1702 = root || new pc.UnityMaterial()
  var i1703 = data
  i1702.name = i1703[0]
  request.r(i1703[1], i1703[2], 0, i1702, 'shader')
  i1702.renderQueue = i1703[3]
  i1702.enableInstancing = !!i1703[4]
  var i1705 = i1703[5]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1705[i + 0]) );
  }
  i1702.floatParameters = i1704
  var i1707 = i1703[6]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1707[i + 0]) );
  }
  i1702.colorParameters = i1706
  var i1709 = i1703[7]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1709[i + 0]) );
  }
  i1702.vectorParameters = i1708
  var i1711 = i1703[8]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1711[i + 0]) );
  }
  i1702.textureParameters = i1710
  var i1713 = i1703[9]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1713[i + 0]) );
  }
  i1702.materialFlags = i1712
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.value = i1717[1]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.value = new pc.Color(i1721[1], i1721[2], i1721[3], i1721[4])
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.value = new pc.Vec4( i1725[1], i1725[2], i1725[3], i1725[4] )
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1729 = data
  i1728.name = i1729[0]
  request.r(i1729[1], i1729[2], 0, i1728, 'value')
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.enabled = !!i1733[1]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1735 = data
  i1734.position = new pc.Vec3( i1735[0], i1735[1], i1735[2] )
  i1734.scale = new pc.Vec3( i1735[3], i1735[4], i1735[5] )
  i1734.rotation = new pc.Quat(i1735[6], i1735[7], i1735[8], i1735[9])
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.isTrigger = !!i1737[1]
  request.r(i1737[2], i1737[3], 0, i1736, 'material')
  i1736.center = new pc.Vec3( i1737[4], i1737[5], i1737[6] )
  i1736.radius = i1737[7]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1739 = data
  i1738.mass = i1739[0]
  i1738.drag = i1739[1]
  i1738.angularDrag = i1739[2]
  i1738.useGravity = !!i1739[3]
  i1738.isKinematic = !!i1739[4]
  i1738.constraints = i1739[5]
  i1738.maxAngularVelocity = i1739[6]
  i1738.collisionDetectionMode = i1739[7]
  i1738.interpolation = i1739[8]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1741 = data
  i1740.enabled = !!i1741[0]
  request.r(i1741[1], i1741[2], 0, i1740, 'sharedMaterial')
  var i1743 = i1741[3]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1740.sharedMaterials = i1742
  i1740.receiveShadows = !!i1741[4]
  i1740.shadowCastingMode = i1741[5]
  i1740.sortingLayerID = i1741[6]
  i1740.sortingOrder = i1741[7]
  i1740.lightmapIndex = i1741[8]
  i1740.lightmapSceneIndex = i1741[9]
  i1740.lightmapScaleOffset = new pc.Vec4( i1741[10], i1741[11], i1741[12], i1741[13] )
  i1740.lightProbeUsage = i1741[14]
  i1740.reflectionProbeUsage = i1741[15]
  var i1745 = i1741[16]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 3) {
    i1744.push( new pc.Vec3( i1745[i + 0], i1745[i + 1], i1745[i + 2] ) );
  }
  i1740.positions = i1744
  i1740.positionCount = i1741[17]
  i1740.time = i1741[18]
  i1740.startWidth = i1741[19]
  i1740.endWidth = i1741[20]
  i1740.widthMultiplier = i1741[21]
  i1740.autodestruct = !!i1741[22]
  i1740.emitting = !!i1741[23]
  i1740.numCornerVertices = i1741[24]
  i1740.numCapVertices = i1741[25]
  i1740.minVertexDistance = i1741[26]
  i1740.colorGradient = i1741[27] ? new pc.ColorGradient(i1741[27][0], i1741[27][1], i1741[27][2]) : null
  i1740.startColor = new pc.Color(i1741[28], i1741[29], i1741[30], i1741[31])
  i1740.endColor = new pc.Color(i1741[32], i1741[33], i1741[34], i1741[35])
  i1740.generateLightingData = !!i1741[36]
  i1740.textureMode = i1741[37]
  i1740.alignment = i1741[38]
  i1740.widthCurve = new pc.AnimationCurve( { keys_flow: i1741[39] } )
  return i1740
}

Deserializers["BallController"] = function (request, data, root) {
  var i1750 = root || request.c( 'BallController' )
  var i1751 = data
  i1750.dragSpeed = i1751[0]
  i1750.swipeThreshold = i1751[1]
  return i1750
}

Deserializers["LaunchController"] = function (request, data, root) {
  var i1752 = root || request.c( 'LaunchController' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'landingTarget')
  i1752.yMax = i1753[2]
  i1752.g = i1753[3]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'clip')
  request.r(i1755[2], i1755[3], 0, i1754, 'outputAudioMixerGroup')
  i1754.playOnAwake = !!i1755[4]
  i1754.loop = !!i1755[5]
  i1754.time = i1755[6]
  i1754.volume = i1755[7]
  i1754.pitch = i1755[8]
  i1754.enabled = !!i1755[9]
  return i1754
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1756 = root || request.c( 'AudioController' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'collisionSound')
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'sharedMesh')
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'additionalVertexStreams')
  i1760.enabled = !!i1761[2]
  request.r(i1761[3], i1761[4], 0, i1760, 'sharedMaterial')
  var i1763 = i1761[5]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1760.sharedMaterials = i1762
  i1760.receiveShadows = !!i1761[6]
  i1760.shadowCastingMode = i1761[7]
  i1760.sortingLayerID = i1761[8]
  i1760.sortingOrder = i1761[9]
  i1760.lightmapIndex = i1761[10]
  i1760.lightmapSceneIndex = i1761[11]
  i1760.lightmapScaleOffset = new pc.Vec4( i1761[12], i1761[13], i1761[14], i1761[15] )
  i1760.lightProbeUsage = i1761[16]
  i1760.reflectionProbeUsage = i1761[17]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.tagId = i1765[1]
  i1764.enabled = !!i1765[2]
  i1764.isStatic = !!i1765[3]
  i1764.layer = i1765[4]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1767 = data
  i1766.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1767[0], i1766.main)
  i1766.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1767[1], i1766.colorBySpeed)
  i1766.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1767[2], i1766.colorOverLifetime)
  i1766.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1767[3], i1766.emission)
  i1766.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1767[4], i1766.rotationBySpeed)
  i1766.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1767[5], i1766.rotationOverLifetime)
  i1766.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1767[6], i1766.shape)
  i1766.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1767[7], i1766.sizeBySpeed)
  i1766.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1767[8], i1766.sizeOverLifetime)
  i1766.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1767[9], i1766.textureSheetAnimation)
  i1766.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1767[10], i1766.velocityOverLifetime)
  i1766.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1767[11], i1766.noise)
  i1766.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1767[12], i1766.inheritVelocity)
  i1766.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1767[13], i1766.forceOverLifetime)
  i1766.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1767[14], i1766.limitVelocityOverLifetime)
  i1766.useAutoRandomSeed = !!i1767[15]
  i1766.randomSeed = i1767[16]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemMain()
  var i1769 = data
  i1768.duration = i1769[0]
  i1768.loop = !!i1769[1]
  i1768.prewarm = !!i1769[2]
  i1768.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[3], i1768.startDelay)
  i1768.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[4], i1768.startLifetime)
  i1768.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[5], i1768.startSpeed)
  i1768.startSize3D = !!i1769[6]
  i1768.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[7], i1768.startSizeX)
  i1768.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[8], i1768.startSizeY)
  i1768.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[9], i1768.startSizeZ)
  i1768.startRotation3D = !!i1769[10]
  i1768.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[11], i1768.startRotationX)
  i1768.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[12], i1768.startRotationY)
  i1768.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[13], i1768.startRotationZ)
  i1768.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1769[14], i1768.startColor)
  i1768.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[15], i1768.gravityModifier)
  i1768.simulationSpace = i1769[16]
  request.r(i1769[17], i1769[18], 0, i1768, 'customSimulationSpace')
  i1768.simulationSpeed = i1769[19]
  i1768.useUnscaledTime = !!i1769[20]
  i1768.scalingMode = i1769[21]
  i1768.playOnAwake = !!i1769[22]
  i1768.maxParticles = i1769[23]
  i1768.emitterVelocityMode = i1769[24]
  i1768.stopAction = i1769[25]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1770 = root || new pc.MinMaxCurve()
  var i1771 = data
  i1770.mode = i1771[0]
  i1770.curveMin = new pc.AnimationCurve( { keys_flow: i1771[1] } )
  i1770.curveMax = new pc.AnimationCurve( { keys_flow: i1771[2] } )
  i1770.curveMultiplier = i1771[3]
  i1770.constantMin = i1771[4]
  i1770.constantMax = i1771[5]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1772 = root || new pc.MinMaxGradient()
  var i1773 = data
  i1772.mode = i1773[0]
  i1772.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1773[1], i1772.gradientMin)
  i1772.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1773[2], i1772.gradientMax)
  i1772.colorMin = new pc.Color(i1773[3], i1773[4], i1773[5], i1773[6])
  i1772.colorMax = new pc.Color(i1773[7], i1773[8], i1773[9], i1773[10])
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1775 = data
  i1774.mode = i1775[0]
  var i1777 = i1775[1]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1777[i + 0]) );
  }
  i1774.colorKeys = i1776
  var i1779 = i1775[2]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1779[i + 0]) );
  }
  i1774.alphaKeys = i1778
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1780 = root || new pc.ParticleSystemColorBySpeed()
  var i1781 = data
  i1780.enabled = !!i1781[0]
  i1780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1781[1], i1780.color)
  i1780.range = new pc.Vec2( i1781[2], i1781[3] )
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1785 = data
  i1784.color = new pc.Color(i1785[0], i1785[1], i1785[2], i1785[3])
  i1784.time = i1785[4]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1789 = data
  i1788.alpha = i1789[0]
  i1788.time = i1789[1]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemColorOverLifetime()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1791[1], i1790.color)
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemEmitter()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[1], i1792.rateOverTime)
  i1792.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[2], i1792.rateOverDistance)
  var i1795 = i1793[3]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1795[i + 0]) );
  }
  i1792.bursts = i1794
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1798 = root || new pc.ParticleSystemBurst()
  var i1799 = data
  i1798.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[0], i1798.count)
  i1798.cycleCount = i1799[1]
  i1798.minCount = i1799[2]
  i1798.maxCount = i1799[3]
  i1798.repeatInterval = i1799[4]
  i1798.time = i1799[5]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemRotationBySpeed()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[1], i1800.x)
  i1800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.y)
  i1800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.z)
  i1800.separateAxes = !!i1801[4]
  i1800.range = new pc.Vec2( i1801[5], i1801[6] )
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.x)
  i1802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.y)
  i1802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.z)
  i1802.separateAxes = !!i1803[4]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemShape()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.shapeType = i1805[1]
  i1804.randomDirectionAmount = i1805[2]
  i1804.sphericalDirectionAmount = i1805[3]
  i1804.randomPositionAmount = i1805[4]
  i1804.alignToDirection = !!i1805[5]
  i1804.radius = i1805[6]
  i1804.radiusMode = i1805[7]
  i1804.radiusSpread = i1805[8]
  i1804.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[9], i1804.radiusSpeed)
  i1804.radiusThickness = i1805[10]
  i1804.angle = i1805[11]
  i1804.length = i1805[12]
  i1804.boxThickness = new pc.Vec3( i1805[13], i1805[14], i1805[15] )
  i1804.meshShapeType = i1805[16]
  request.r(i1805[17], i1805[18], 0, i1804, 'mesh')
  request.r(i1805[19], i1805[20], 0, i1804, 'meshRenderer')
  request.r(i1805[21], i1805[22], 0, i1804, 'skinnedMeshRenderer')
  i1804.useMeshMaterialIndex = !!i1805[23]
  i1804.meshMaterialIndex = i1805[24]
  i1804.useMeshColors = !!i1805[25]
  i1804.normalOffset = i1805[26]
  i1804.arc = i1805[27]
  i1804.arcMode = i1805[28]
  i1804.arcSpread = i1805[29]
  i1804.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[30], i1804.arcSpeed)
  i1804.donutRadius = i1805[31]
  i1804.position = new pc.Vec3( i1805[32], i1805[33], i1805[34] )
  i1804.rotation = new pc.Vec3( i1805[35], i1805[36], i1805[37] )
  i1804.scale = new pc.Vec3( i1805[38], i1805[39], i1805[40] )
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemSizeBySpeed()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[1], i1806.x)
  i1806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[2], i1806.y)
  i1806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[3], i1806.z)
  i1806.separateAxes = !!i1807[4]
  i1806.range = new pc.Vec2( i1807[5], i1807[6] )
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[1], i1808.x)
  i1808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[2], i1808.y)
  i1808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[3], i1808.z)
  i1808.separateAxes = !!i1809[4]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.mode = i1811[1]
  i1810.animation = i1811[2]
  i1810.numTilesX = i1811[3]
  i1810.numTilesY = i1811[4]
  i1810.useRandomRow = !!i1811[5]
  i1810.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[6], i1810.frameOverTime)
  i1810.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[7], i1810.startFrame)
  i1810.cycleCount = i1811[8]
  i1810.rowIndex = i1811[9]
  i1810.flipU = i1811[10]
  i1810.flipV = i1811[11]
  i1810.spriteCount = i1811[12]
  var i1813 = i1811[13]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 2, i1812, '')
  }
  i1810.sprites = i1812
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1816 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1817 = data
  i1816.enabled = !!i1817[0]
  i1816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[1], i1816.x)
  i1816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[2], i1816.y)
  i1816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[3], i1816.z)
  i1816.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[4], i1816.radial)
  i1816.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[5], i1816.speedModifier)
  i1816.space = i1817[6]
  i1816.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[7], i1816.orbitalX)
  i1816.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[8], i1816.orbitalY)
  i1816.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[9], i1816.orbitalZ)
  i1816.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[10], i1816.orbitalOffsetX)
  i1816.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[11], i1816.orbitalOffsetY)
  i1816.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1817[12], i1816.orbitalOffsetZ)
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemNoise()
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.separateAxes = !!i1819[1]
  i1818.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[2], i1818.strengthX)
  i1818.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[3], i1818.strengthY)
  i1818.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[4], i1818.strengthZ)
  i1818.frequency = i1819[5]
  i1818.damping = !!i1819[6]
  i1818.octaveCount = i1819[7]
  i1818.octaveMultiplier = i1819[8]
  i1818.octaveScale = i1819[9]
  i1818.quality = i1819[10]
  i1818.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[11], i1818.scrollSpeed)
  i1818.scrollSpeedMultiplier = i1819[12]
  i1818.remapEnabled = !!i1819[13]
  i1818.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[14], i1818.remapX)
  i1818.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[15], i1818.remapY)
  i1818.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[16], i1818.remapZ)
  i1818.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[17], i1818.positionAmount)
  i1818.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[18], i1818.rotationAmount)
  i1818.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[19], i1818.sizeAmount)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1820 = root || new pc.ParticleSystemInheritVelocity()
  var i1821 = data
  i1820.enabled = !!i1821[0]
  i1820.mode = i1821[1]
  i1820.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[2], i1820.curve)
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemForceOverLifetime()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[1], i1822.x)
  i1822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[2], i1822.y)
  i1822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[3], i1822.z)
  i1822.space = i1823[4]
  i1822.randomized = !!i1823[5]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[1], i1824.limit)
  i1824.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[2], i1824.limitX)
  i1824.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[3], i1824.limitY)
  i1824.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[4], i1824.limitZ)
  i1824.dampen = i1825[5]
  i1824.separateAxes = !!i1825[6]
  i1824.space = i1825[7]
  i1824.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[8], i1824.drag)
  i1824.multiplyDragByParticleSize = !!i1825[9]
  i1824.multiplyDragByParticleVelocity = !!i1825[10]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1827 = data
  i1826.enabled = !!i1827[0]
  request.r(i1827[1], i1827[2], 0, i1826, 'sharedMaterial')
  var i1829 = i1827[3]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1826.sharedMaterials = i1828
  i1826.receiveShadows = !!i1827[4]
  i1826.shadowCastingMode = i1827[5]
  i1826.sortingLayerID = i1827[6]
  i1826.sortingOrder = i1827[7]
  i1826.lightmapIndex = i1827[8]
  i1826.lightmapSceneIndex = i1827[9]
  i1826.lightmapScaleOffset = new pc.Vec4( i1827[10], i1827[11], i1827[12], i1827[13] )
  i1826.lightProbeUsage = i1827[14]
  i1826.reflectionProbeUsage = i1827[15]
  request.r(i1827[16], i1827[17], 0, i1826, 'mesh')
  i1826.meshCount = i1827[18]
  i1826.activeVertexStreamsCount = i1827[19]
  i1826.alignment = i1827[20]
  i1826.renderMode = i1827[21]
  i1826.sortMode = i1827[22]
  i1826.lengthScale = i1827[23]
  i1826.velocityScale = i1827[24]
  i1826.cameraVelocityScale = i1827[25]
  i1826.normalDirection = i1827[26]
  i1826.sortingFudge = i1827[27]
  i1826.minParticleSize = i1827[28]
  i1826.maxParticleSize = i1827[29]
  i1826.pivot = new pc.Vec3( i1827[30], i1827[31], i1827[32] )
  request.r(i1827[33], i1827[34], 0, i1826, 'trailMaterial')
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.halfPrecision = !!i1831[1]
  i1830.useUInt32IndexFormat = !!i1831[2]
  i1830.vertexCount = i1831[3]
  i1830.aabb = i1831[4]
  var i1833 = i1831[5]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( !!i1833[i + 0] );
  }
  i1830.streams = i1832
  i1830.vertices = i1831[6]
  var i1835 = i1831[7]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1835[i + 0]) );
  }
  i1830.subMeshes = i1834
  var i1837 = i1831[8]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 16) {
    i1836.push( new pc.Mat4().setData(i1837[i + 0], i1837[i + 1], i1837[i + 2], i1837[i + 3],  i1837[i + 4], i1837[i + 5], i1837[i + 6], i1837[i + 7],  i1837[i + 8], i1837[i + 9], i1837[i + 10], i1837[i + 11],  i1837[i + 12], i1837[i + 13], i1837[i + 14], i1837[i + 15]) );
  }
  i1830.bindposes = i1836
  var i1839 = i1831[9]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1839[i + 0]) );
  }
  i1830.blendShapes = i1838
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1845 = data
  i1844.triangles = i1845[0]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1851 = data
  i1850.name = i1851[0]
  var i1853 = i1851[1]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1853[i + 0]) );
  }
  i1850.frames = i1852
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.width = i1855[1]
  i1854.height = i1855[2]
  i1854.mipmapCount = i1855[3]
  i1854.anisoLevel = i1855[4]
  i1854.filterMode = i1855[5]
  i1854.hdr = !!i1855[6]
  i1854.format = i1855[7]
  i1854.wrapMode = i1855[8]
  i1854.alphaIsTransparency = !!i1855[9]
  i1854.alphaSource = i1855[10]
  i1854.graphicsFormat = i1855[11]
  i1854.sRGBTexture = !!i1855[12]
  i1854.desiredColorSpace = i1855[13]
  i1854.wrapU = i1855[14]
  i1854.wrapV = i1855[15]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.width = i1857[1]
  i1856.height = i1857[2]
  i1856.anisoLevel = i1857[3]
  i1856.filterMode = i1857[4]
  i1856.hdr = !!i1857[5]
  i1856.colorFormat = i1857[6]
  i1856.depthStencilFormat = i1857[7]
  i1856.renderTextureFormat = i1857[8]
  i1856.depth = i1857[9]
  i1856.wrapU = i1857[10]
  i1856.wrapV = i1857[11]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.atlasId = i1859[1]
  i1858.mipmapCount = i1859[2]
  i1858.hdr = !!i1859[3]
  i1858.size = i1859[4]
  i1858.anisoLevel = i1859[5]
  i1858.filterMode = i1859[6]
  var i1861 = i1859[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 4) {
    i1860.push( UnityEngine.Rect.MinMaxRect(i1861[i + 0], i1861[i + 1], i1861[i + 2], i1861[i + 3]) );
  }
  i1858.rects = i1860
  i1858.wrapU = i1859[8]
  i1858.wrapV = i1859[9]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.index = i1865[1]
  i1864.startup = !!i1865[2]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1867 = data
  i1866.center = new pc.Vec3( i1867[0], i1867[1], i1867[2] )
  i1866.size = new pc.Vec3( i1867[3], i1867[4], i1867[5] )
  i1866.enabled = !!i1867[6]
  i1866.isTrigger = !!i1867[7]
  request.r(i1867[8], i1867[9], 0, i1866, 'material')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1869 = data
  i1868.enabled = !!i1869[0]
  i1868.type = i1869[1]
  i1868.color = new pc.Color(i1869[2], i1869[3], i1869[4], i1869[5])
  i1868.cullingMask = i1869[6]
  i1868.intensity = i1869[7]
  i1868.range = i1869[8]
  i1868.spotAngle = i1869[9]
  i1868.shadows = i1869[10]
  i1868.shadowNormalBias = i1869[11]
  i1868.shadowBias = i1869[12]
  i1868.shadowStrength = i1869[13]
  i1868.shadowResolution = i1869[14]
  i1868.lightmapBakeType = i1869[15]
  i1868.renderMode = i1869[16]
  request.r(i1869[17], i1869[18], 0, i1868, 'cookie')
  i1868.cookieSize = i1869[19]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1871 = data
  i1870.enabled = !!i1871[0]
  i1870.aspect = i1871[1]
  i1870.orthographic = !!i1871[2]
  i1870.orthographicSize = i1871[3]
  i1870.backgroundColor = new pc.Color(i1871[4], i1871[5], i1871[6], i1871[7])
  i1870.nearClipPlane = i1871[8]
  i1870.farClipPlane = i1871[9]
  i1870.fieldOfView = i1871[10]
  i1870.depth = i1871[11]
  i1870.clearFlags = i1871[12]
  i1870.cullingMask = i1871[13]
  i1870.rect = i1871[14]
  request.r(i1871[15], i1871[16], 0, i1870, 'targetTexture')
  i1870.usePhysicalProperties = !!i1871[17]
  i1870.focalLength = i1871[18]
  i1870.sensorSize = new pc.Vec2( i1871[19], i1871[20] )
  i1870.lensShift = new pc.Vec2( i1871[21], i1871[22] )
  i1870.gateFit = i1871[23]
  i1870.commandBufferCount = i1871[24]
  i1870.cameraType = i1871[25]
  return i1870
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i1873 = data
  i1872.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1873[0] )
  i1872.m_MaxRayIntersections = i1873[1]
  return i1872
}

Deserializers["RotateRing"] = function (request, data, root) {
  var i1874 = root || request.c( 'RotateRing' )
  var i1875 = data
  i1874.rotationSpeed = i1875[0]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i1877 = data
  i1876.useMotor = !!i1877[0]
  i1876.useLimits = !!i1877[1]
  i1876.useSpring = !!i1877[2]
  i1876.limits = request.d('UnityEngine.JointLimits', i1877[3], i1876.limits)
  i1876.motor = request.d('UnityEngine.JointMotor', i1877[4], i1876.motor)
  i1876.spring = request.d('UnityEngine.JointSpring', i1877[5], i1876.spring)
  request.r(i1877[6], i1877[7], 0, i1876, 'connectedBody')
  i1876.axis = new pc.Vec3( i1877[8], i1877[9], i1877[10] )
  i1876.anchor = new pc.Vec3( i1877[11], i1877[12], i1877[13] )
  i1876.connectedAnchor = new pc.Vec3( i1877[14], i1877[15], i1877[16] )
  i1876.autoConfigureConnectedAnchor = !!i1877[17]
  i1876.massScale = i1877[18]
  i1876.connectedMassScale = i1877[19]
  i1876.enableCollision = !!i1877[20]
  i1876.breakForce = i1877[21]
  i1876.breakTorque = i1877[22]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1879 = data
  i1878.center = new pc.Vec3( i1879[0], i1879[1], i1879[2] )
  i1878.radius = i1879[3]
  i1878.height = i1879[4]
  i1878.direction = i1879[5]
  i1878.enabled = !!i1879[6]
  i1878.isTrigger = !!i1879[7]
  request.r(i1879[8], i1879[9], 0, i1878, 'material')
  return i1878
}

Deserializers["RimCollider"] = function (request, data, root) {
  var i1880 = root || request.c( 'RimCollider' )
  var i1881 = data
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1883 = data
  i1882.enabled = !!i1883[0]
  request.r(i1883[1], i1883[2], 0, i1882, 'sharedMaterial')
  var i1885 = i1883[3]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.sharedMaterials = i1884
  i1882.receiveShadows = !!i1883[4]
  i1882.shadowCastingMode = i1883[5]
  i1882.sortingLayerID = i1883[6]
  i1882.sortingOrder = i1883[7]
  i1882.lightmapIndex = i1883[8]
  i1882.lightmapSceneIndex = i1883[9]
  i1882.lightmapScaleOffset = new pc.Vec4( i1883[10], i1883[11], i1883[12], i1883[13] )
  i1882.lightProbeUsage = i1883[14]
  i1882.reflectionProbeUsage = i1883[15]
  request.r(i1883[16], i1883[17], 0, i1882, 'sharedMesh')
  var i1887 = i1883[18]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1882.bones = i1886
  i1882.updateWhenOffscreen = !!i1883[19]
  i1882.localBounds = i1883[20]
  request.r(i1883[21], i1883[22], 0, i1882, 'rootBone')
  var i1889 = i1883[23]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1889[i + 0]) );
  }
  i1882.blendShapesWeights = i1888
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1895 = data
  i1894.weight = i1895[0]
  return i1894
}

Deserializers["HoopTrigger"] = function (request, data, root) {
  var i1896 = root || request.c( 'HoopTrigger' )
  var i1897 = data
  i1896.hoopType = i1897[0]
  return i1896
}

Deserializers["BallCarousel"] = function (request, data, root) {
  var i1898 = root || request.c( 'BallCarousel' )
  var i1899 = data
  i1898.rotationSpeed = i1899[0]
  var i1901 = i1899[1]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.balls = i1900
  return i1898
}

Deserializers["BallSelection"] = function (request, data, root) {
  var i1904 = root || request.c( 'BallSelection' )
  var i1905 = data
  i1904.ballName = i1905[0]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1907 = data
  i1906.enabled = !!i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'sharedMaterial')
  var i1909 = i1907[3]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 2) {
  request.r(i1909[i + 0], i1909[i + 1], 2, i1908, '')
  }
  i1906.sharedMaterials = i1908
  i1906.receiveShadows = !!i1907[4]
  i1906.shadowCastingMode = i1907[5]
  i1906.sortingLayerID = i1907[6]
  i1906.sortingOrder = i1907[7]
  i1906.lightmapIndex = i1907[8]
  i1906.lightmapSceneIndex = i1907[9]
  i1906.lightmapScaleOffset = new pc.Vec4( i1907[10], i1907[11], i1907[12], i1907[13] )
  i1906.lightProbeUsage = i1907[14]
  i1906.reflectionProbeUsage = i1907[15]
  i1906.color = new pc.Color(i1907[16], i1907[17], i1907[18], i1907[19])
  request.r(i1907[20], i1907[21], 0, i1906, 'sprite')
  i1906.flipX = !!i1907[22]
  i1906.flipY = !!i1907[23]
  i1906.drawMode = i1907[24]
  i1906.size = new pc.Vec2( i1907[25], i1907[26] )
  i1906.tileMode = i1907[27]
  i1906.adaptiveModeThreshold = i1907[28]
  i1906.maskInteraction = i1907[29]
  i1906.spriteSortPoint = i1907[30]
  return i1906
}

Deserializers["SpriteRender"] = function (request, data, root) {
  var i1910 = root || request.c( 'SpriteRender' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, '_camera')
  i1910.lockYAxis = !!i1911[2]
  i1910.reverseDirection = !!i1911[3]
  i1910.enableYAnimation = !!i1911[4]
  i1910._animationSpeed = i1911[5]
  i1910._animationRange = i1911[6]
  i1910._baseYPosition = i1911[7]
  return i1910
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1912 = root || request.c( 'GameManager' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'perfectParticleSystem')
  request.r(i1913[2], i1913[3], 0, i1912, 'passSound')
  request.r(i1913[4], i1913[5], 0, i1912, 'backgroundMusic')
  request.r(i1913[6], i1913[7], 0, i1912, 'perfectSound')
  i1912._perfectThreshold = i1913[8]
  var i1915 = i1913[9]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 2, i1914, '')
  }
  i1912._balls = i1914
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1917 = data
  i1916.pivot = new pc.Vec2( i1917[0], i1917[1] )
  i1916.anchorMin = new pc.Vec2( i1917[2], i1917[3] )
  i1916.anchorMax = new pc.Vec2( i1917[4], i1917[5] )
  i1916.sizeDelta = new pc.Vec2( i1917[6], i1917[7] )
  i1916.anchoredPosition3D = new pc.Vec3( i1917[8], i1917[9], i1917[10] )
  i1916.rotation = new pc.Quat(i1917[11], i1917[12], i1917[13], i1917[14])
  i1916.scale = new pc.Vec3( i1917[15], i1917[16], i1917[17] )
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.planeDistance = i1919[1]
  i1918.referencePixelsPerUnit = i1919[2]
  i1918.isFallbackOverlay = !!i1919[3]
  i1918.renderMode = i1919[4]
  i1918.renderOrder = i1919[5]
  i1918.sortingLayerName = i1919[6]
  i1918.sortingOrder = i1919[7]
  i1918.scaleFactor = i1919[8]
  request.r(i1919[9], i1919[10], 0, i1918, 'worldCamera')
  i1918.overrideSorting = !!i1919[11]
  i1918.pixelPerfect = !!i1919[12]
  i1918.targetDisplay = i1919[13]
  i1918.overridePixelPerfect = !!i1919[14]
  return i1918
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1921 = data
  i1920.m_UiScaleMode = i1921[0]
  i1920.m_ReferencePixelsPerUnit = i1921[1]
  i1920.m_ScaleFactor = i1921[2]
  i1920.m_ReferenceResolution = new pc.Vec2( i1921[3], i1921[4] )
  i1920.m_ScreenMatchMode = i1921[5]
  i1920.m_MatchWidthOrHeight = i1921[6]
  i1920.m_PhysicalUnit = i1921[7]
  i1920.m_FallbackScreenDPI = i1921[8]
  i1920.m_DefaultSpriteDPI = i1921[9]
  i1920.m_DynamicPixelsPerUnit = i1921[10]
  i1920.m_PresetInfoIsWorld = !!i1921[11]
  return i1920
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1923 = data
  i1922.m_IgnoreReversedGraphics = !!i1923[0]
  i1922.m_BlockingObjects = i1923[1]
  i1922.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1923[2] )
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1925 = data
  i1924.cullTransparentMesh = !!i1925[0]
  return i1924
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1926 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1927 = data
  i1926.m_hasFontAssetChanged = !!i1927[0]
  request.r(i1927[1], i1927[2], 0, i1926, 'm_baseMaterial')
  i1926.m_maskOffset = new pc.Vec4( i1927[3], i1927[4], i1927[5], i1927[6] )
  i1926.m_text = i1927[7]
  i1926.m_isRightToLeft = !!i1927[8]
  request.r(i1927[9], i1927[10], 0, i1926, 'm_fontAsset')
  request.r(i1927[11], i1927[12], 0, i1926, 'm_sharedMaterial')
  var i1929 = i1927[13]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1926.m_fontSharedMaterials = i1928
  request.r(i1927[14], i1927[15], 0, i1926, 'm_fontMaterial')
  var i1931 = i1927[16]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1926.m_fontMaterials = i1930
  i1926.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1927[17], i1927[18], i1927[19], i1927[20])
  i1926.m_fontColor = new pc.Color(i1927[21], i1927[22], i1927[23], i1927[24])
  i1926.m_enableVertexGradient = !!i1927[25]
  i1926.m_colorMode = i1927[26]
  i1926.m_fontColorGradient = request.d('TMPro.VertexGradient', i1927[27], i1926.m_fontColorGradient)
  request.r(i1927[28], i1927[29], 0, i1926, 'm_fontColorGradientPreset')
  request.r(i1927[30], i1927[31], 0, i1926, 'm_spriteAsset')
  i1926.m_tintAllSprites = !!i1927[32]
  request.r(i1927[33], i1927[34], 0, i1926, 'm_StyleSheet')
  i1926.m_TextStyleHashCode = i1927[35]
  i1926.m_overrideHtmlColors = !!i1927[36]
  i1926.m_faceColor = UnityEngine.Color32.ConstructColor(i1927[37], i1927[38], i1927[39], i1927[40])
  i1926.m_fontSize = i1927[41]
  i1926.m_fontSizeBase = i1927[42]
  i1926.m_fontWeight = i1927[43]
  i1926.m_enableAutoSizing = !!i1927[44]
  i1926.m_fontSizeMin = i1927[45]
  i1926.m_fontSizeMax = i1927[46]
  i1926.m_fontStyle = i1927[47]
  i1926.m_HorizontalAlignment = i1927[48]
  i1926.m_VerticalAlignment = i1927[49]
  i1926.m_textAlignment = i1927[50]
  i1926.m_characterSpacing = i1927[51]
  i1926.m_wordSpacing = i1927[52]
  i1926.m_lineSpacing = i1927[53]
  i1926.m_lineSpacingMax = i1927[54]
  i1926.m_paragraphSpacing = i1927[55]
  i1926.m_charWidthMaxAdj = i1927[56]
  i1926.m_enableWordWrapping = !!i1927[57]
  i1926.m_wordWrappingRatios = i1927[58]
  i1926.m_overflowMode = i1927[59]
  request.r(i1927[60], i1927[61], 0, i1926, 'm_linkedTextComponent')
  request.r(i1927[62], i1927[63], 0, i1926, 'parentLinkedComponent')
  i1926.m_enableKerning = !!i1927[64]
  i1926.m_enableExtraPadding = !!i1927[65]
  i1926.checkPaddingRequired = !!i1927[66]
  i1926.m_isRichText = !!i1927[67]
  i1926.m_parseCtrlCharacters = !!i1927[68]
  i1926.m_isOrthographic = !!i1927[69]
  i1926.m_isCullingEnabled = !!i1927[70]
  i1926.m_horizontalMapping = i1927[71]
  i1926.m_verticalMapping = i1927[72]
  i1926.m_uvLineOffset = i1927[73]
  i1926.m_geometrySortingOrder = i1927[74]
  i1926.m_IsTextObjectScaleStatic = !!i1927[75]
  i1926.m_VertexBufferAutoSizeReduction = !!i1927[76]
  i1926.m_useMaxVisibleDescender = !!i1927[77]
  i1926.m_pageToDisplay = i1927[78]
  i1926.m_margin = new pc.Vec4( i1927[79], i1927[80], i1927[81], i1927[82] )
  i1926.m_isUsingLegacyAnimationComponent = !!i1927[83]
  i1926.m_isVolumetricText = !!i1927[84]
  request.r(i1927[85], i1927[86], 0, i1926, 'm_Material')
  i1926.m_Maskable = !!i1927[87]
  i1926.m_Color = new pc.Color(i1927[88], i1927[89], i1927[90], i1927[91])
  i1926.m_RaycastTarget = !!i1927[92]
  i1926.m_RaycastPadding = new pc.Vec4( i1927[93], i1927[94], i1927[95], i1927[96] )
  return i1926
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1932 = root || request.c( 'TMPro.VertexGradient' )
  var i1933 = data
  i1932.topLeft = new pc.Color(i1933[0], i1933[1], i1933[2], i1933[3])
  i1932.topRight = new pc.Color(i1933[4], i1933[5], i1933[6], i1933[7])
  i1932.bottomLeft = new pc.Color(i1933[8], i1933[9], i1933[10], i1933[11])
  i1932.bottomRight = new pc.Color(i1933[12], i1933[13], i1933[14], i1933[15])
  return i1932
}

Deserializers["ScoreUI"] = function (request, data, root) {
  var i1934 = root || request.c( 'ScoreUI' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, '_perfectScoreText')
  return i1934
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'm_FirstSelected')
  i1936.m_sendNavigationEvents = !!i1937[2]
  i1936.m_DragThreshold = i1937[3]
  return i1936
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1939 = data
  i1938.m_HorizontalAxis = i1939[0]
  i1938.m_VerticalAxis = i1939[1]
  i1938.m_SubmitButton = i1939[2]
  i1938.m_CancelButton = i1939[3]
  i1938.m_InputActionsPerSecond = i1939[4]
  i1938.m_RepeatDelay = i1939[5]
  i1938.m_ForceModuleActive = !!i1939[6]
  i1938.m_SendPointerHoverToParent = !!i1939[7]
  return i1938
}

Deserializers["ScoreManager"] = function (request, data, root) {
  var i1940 = root || request.c( 'ScoreManager' )
  var i1941 = data
  i1940.onScoreChanged = request.d('UnityEngine.Events.UnityEvent', i1941[0], i1940.onScoreChanged)
  i1940.onPerfectScore = request.d('UnityEngine.Events.UnityEvent', i1941[1], i1940.onPerfectScore)
  return i1940
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1943 = data
  i1942.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1943[0], i1942.m_PersistentCalls)
  return i1942
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('UnityEngine.Events.PersistentCall', i1947[i + 0]));
  }
  i1944.m_Calls = i1946
  return i1944
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'm_Target')
  i1950.m_TargetAssemblyTypeName = i1951[2]
  i1950.m_MethodName = i1951[3]
  i1950.m_Mode = i1951[4]
  i1950.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1951[5], i1950.m_Arguments)
  i1950.m_CallState = i1951[6]
  return i1950
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'm_ObjectArgument')
  i1952.m_ObjectArgumentAssemblyTypeName = i1953[2]
  i1952.m_IntArgument = i1953[3]
  i1952.m_FloatArgument = i1953[4]
  i1952.m_StringArgument = i1953[5]
  i1952.m_BoolArgument = !!i1953[6]
  return i1952
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.UI.Image' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_Sprite')
  i1954.m_Type = i1955[2]
  i1954.m_PreserveAspect = !!i1955[3]
  i1954.m_FillCenter = !!i1955[4]
  i1954.m_FillMethod = i1955[5]
  i1954.m_FillAmount = i1955[6]
  i1954.m_FillClockwise = !!i1955[7]
  i1954.m_FillOrigin = i1955[8]
  i1954.m_UseSpriteMesh = !!i1955[9]
  i1954.m_PixelsPerUnitMultiplier = i1955[10]
  request.r(i1955[11], i1955[12], 0, i1954, 'm_Material')
  i1954.m_Maskable = !!i1955[13]
  i1954.m_Color = new pc.Color(i1955[14], i1955[15], i1955[16], i1955[17])
  i1954.m_RaycastTarget = !!i1955[18]
  i1954.m_RaycastPadding = new pc.Vec4( i1955[19], i1955[20], i1955[21], i1955[22] )
  return i1954
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_Texture')
  i1956.m_UVRect = UnityEngine.Rect.MinMaxRect(i1957[2], i1957[3], i1957[4], i1957[5])
  request.r(i1957[6], i1957[7], 0, i1956, 'm_Material')
  i1956.m_Maskable = !!i1957[8]
  i1956.m_Color = new pc.Color(i1957[9], i1957[10], i1957[11], i1957[12])
  i1956.m_RaycastTarget = !!i1957[13]
  i1956.m_RaycastPadding = new pc.Vec4( i1957[14], i1957[15], i1957[16], i1957[17] )
  return i1956
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.UI.Button' )
  var i1959 = data
  i1958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1959[0], i1958.m_OnClick)
  i1958.m_Navigation = request.d('UnityEngine.UI.Navigation', i1959[1], i1958.m_Navigation)
  i1958.m_Transition = i1959[2]
  i1958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1959[3], i1958.m_Colors)
  i1958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1959[4], i1958.m_SpriteState)
  i1958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1959[5], i1958.m_AnimationTriggers)
  i1958.m_Interactable = !!i1959[6]
  request.r(i1959[7], i1959[8], 0, i1958, 'm_TargetGraphic')
  return i1958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1961 = data
  i1960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1961[0], i1960.m_PersistentCalls)
  return i1960
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1963 = data
  i1962.m_Mode = i1963[0]
  i1962.m_WrapAround = !!i1963[1]
  request.r(i1963[2], i1963[3], 0, i1962, 'm_SelectOnUp')
  request.r(i1963[4], i1963[5], 0, i1962, 'm_SelectOnDown')
  request.r(i1963[6], i1963[7], 0, i1962, 'm_SelectOnLeft')
  request.r(i1963[8], i1963[9], 0, i1962, 'm_SelectOnRight')
  return i1962
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1965 = data
  i1964.m_NormalColor = new pc.Color(i1965[0], i1965[1], i1965[2], i1965[3])
  i1964.m_HighlightedColor = new pc.Color(i1965[4], i1965[5], i1965[6], i1965[7])
  i1964.m_PressedColor = new pc.Color(i1965[8], i1965[9], i1965[10], i1965[11])
  i1964.m_SelectedColor = new pc.Color(i1965[12], i1965[13], i1965[14], i1965[15])
  i1964.m_DisabledColor = new pc.Color(i1965[16], i1965[17], i1965[18], i1965[19])
  i1964.m_ColorMultiplier = i1965[20]
  i1964.m_FadeDuration = i1965[21]
  return i1964
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'm_HighlightedSprite')
  request.r(i1967[2], i1967[3], 0, i1966, 'm_PressedSprite')
  request.r(i1967[4], i1967[5], 0, i1966, 'm_SelectedSprite')
  request.r(i1967[6], i1967[7], 0, i1966, 'm_DisabledSprite')
  return i1966
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1969 = data
  i1968.m_NormalTrigger = i1969[0]
  i1968.m_HighlightedTrigger = i1969[1]
  i1968.m_PressedTrigger = i1969[2]
  i1968.m_SelectedTrigger = i1969[3]
  i1968.m_DisabledTrigger = i1969[4]
  return i1968
}

Deserializers["BackBtn"] = function (request, data, root) {
  var i1970 = root || request.c( 'BackBtn' )
  var i1971 = data
  i1970._animationSpeed = i1971[0]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1973 = data
  i1972.m_Alpha = i1973[0]
  i1972.m_Interactable = !!i1973[1]
  i1972.m_BlocksRaycasts = !!i1973[2]
  i1972.m_IgnoreParentGroups = !!i1973[3]
  i1972.enabled = !!i1973[4]
  return i1972
}

Deserializers["BallSelectionBtn"] = function (request, data, root) {
  var i1974 = root || request.c( 'BallSelectionBtn' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, '_ballSelectionCanvas')
  request.r(i1975[2], i1975[3], 0, i1974, '_inGameCanvas')
  request.r(i1975[4], i1975[5], 0, i1974, '_ballCarousel')
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1977 = data
  i1976.ambientIntensity = i1977[0]
  i1976.reflectionIntensity = i1977[1]
  i1976.ambientMode = i1977[2]
  i1976.ambientLight = new pc.Color(i1977[3], i1977[4], i1977[5], i1977[6])
  i1976.ambientSkyColor = new pc.Color(i1977[7], i1977[8], i1977[9], i1977[10])
  i1976.ambientGroundColor = new pc.Color(i1977[11], i1977[12], i1977[13], i1977[14])
  i1976.ambientEquatorColor = new pc.Color(i1977[15], i1977[16], i1977[17], i1977[18])
  i1976.fogColor = new pc.Color(i1977[19], i1977[20], i1977[21], i1977[22])
  i1976.fogEndDistance = i1977[23]
  i1976.fogStartDistance = i1977[24]
  i1976.fogDensity = i1977[25]
  i1976.fog = !!i1977[26]
  request.r(i1977[27], i1977[28], 0, i1976, 'skybox')
  i1976.fogMode = i1977[29]
  var i1979 = i1977[30]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1979[i + 0]) );
  }
  i1976.lightmaps = i1978
  i1976.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1977[31], i1976.lightProbes)
  i1976.lightmapsMode = i1977[32]
  i1976.mixedBakeMode = i1977[33]
  i1976.environmentLightingMode = i1977[34]
  i1976.ambientProbe = new pc.SphericalHarmonicsL2(i1977[35])
  i1976.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1977[36])
  i1976.useReferenceAmbientProbe = !!i1977[37]
  request.r(i1977[38], i1977[39], 0, i1976, 'customReflection')
  request.r(i1977[40], i1977[41], 0, i1976, 'defaultReflection')
  i1976.defaultReflectionMode = i1977[42]
  i1976.defaultReflectionResolution = i1977[43]
  i1976.sunLightObjectId = i1977[44]
  i1976.pixelLightCount = i1977[45]
  i1976.defaultReflectionHDR = !!i1977[46]
  i1976.hasLightDataAsset = !!i1977[47]
  i1976.hasManualGenerate = !!i1977[48]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'lightmapColor')
  request.r(i1983[2], i1983[3], 0, i1982, 'lightmapDirection')
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1984 = root || new UnityEngine.LightProbes()
  var i1985 = data
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1991 = data
  i1990.name = i1991[0]
  i1990.bounciness = i1991[1]
  i1990.dynamicFriction = i1991[2]
  i1990.staticFriction = i1991[3]
  i1990.frictionCombine = i1991[4]
  i1990.bounceCombine = i1991[5]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1993 = data
  var i1995 = i1993[0]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1995[i + 0]));
  }
  i1992.ShaderCompilationErrors = i1994
  i1992.name = i1993[1]
  i1992.guid = i1993[2]
  var i1997 = i1993[3]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( i1997[i + 0] );
  }
  i1992.shaderDefinedKeywords = i1996
  var i1999 = i1993[4]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1999[i + 0]) );
  }
  i1992.passes = i1998
  var i2001 = i1993[5]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2001[i + 0]) );
  }
  i1992.usePasses = i2000
  var i2003 = i1993[6]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2003[i + 0]) );
  }
  i1992.defaultParameterValues = i2002
  request.r(i1993[7], i1993[8], 0, i1992, 'unityFallbackShader')
  i1992.readDepth = !!i1993[9]
  i1992.isCreatedByShaderGraph = !!i1993[10]
  i1992.compiled = !!i1993[11]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2007 = data
  i2006.shaderName = i2007[0]
  i2006.errorMessage = i2007[1]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2012 = root || new pc.UnityShaderPass()
  var i2013 = data
  i2012.id = i2013[0]
  i2012.subShaderIndex = i2013[1]
  i2012.name = i2013[2]
  i2012.passType = i2013[3]
  i2012.grabPassTextureName = i2013[4]
  i2012.usePass = !!i2013[5]
  i2012.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[6], i2012.zTest)
  i2012.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[7], i2012.zWrite)
  i2012.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[8], i2012.culling)
  i2012.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2013[9], i2012.blending)
  i2012.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2013[10], i2012.alphaBlending)
  i2012.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[11], i2012.colorWriteMask)
  i2012.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[12], i2012.offsetUnits)
  i2012.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[13], i2012.offsetFactor)
  i2012.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[14], i2012.stencilRef)
  i2012.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[15], i2012.stencilReadMask)
  i2012.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[16], i2012.stencilWriteMask)
  i2012.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2013[17], i2012.stencilOp)
  i2012.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2013[18], i2012.stencilOpFront)
  i2012.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2013[19], i2012.stencilOpBack)
  var i2015 = i2013[20]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2015[i + 0]) );
  }
  i2012.tags = i2014
  var i2017 = i2013[21]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( i2017[i + 0] );
  }
  i2012.passDefinedKeywords = i2016
  var i2019 = i2013[22]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2019[i + 0]) );
  }
  i2012.passDefinedKeywordGroups = i2018
  var i2021 = i2013[23]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2021[i + 0]) );
  }
  i2012.variants = i2020
  var i2023 = i2013[24]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2023[i + 0]) );
  }
  i2012.excludedVariants = i2022
  i2012.hasDepthReader = !!i2013[25]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2025 = data
  i2024.val = i2025[0]
  i2024.name = i2025[1]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2027 = data
  i2026.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[0], i2026.src)
  i2026.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[1], i2026.dst)
  i2026.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[2], i2026.op)
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2029 = data
  i2028.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[0], i2028.pass)
  i2028.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[1], i2028.fail)
  i2028.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[2], i2028.zFail)
  i2028.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[3], i2028.comp)
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2033 = data
  i2032.name = i2033[0]
  i2032.value = i2033[1]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( i2039[i + 0] );
  }
  i2036.keywords = i2038
  i2036.hasDiscard = !!i2037[1]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2043 = data
  i2042.passId = i2043[0]
  i2042.subShaderIndex = i2043[1]
  var i2045 = i2043[2]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( i2045[i + 0] );
  }
  i2042.keywords = i2044
  i2042.vertexProgram = i2043[3]
  i2042.fragmentProgram = i2043[4]
  i2042.exportedForWebGl2 = !!i2043[5]
  i2042.readDepth = !!i2043[6]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'shader')
  i2048.pass = i2049[2]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.type = i2053[1]
  i2052.value = new pc.Vec4( i2053[2], i2053[3], i2053[4], i2053[5] )
  i2052.textureValue = i2053[6]
  i2052.shaderPropertyFlag = i2053[7]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2055 = data
  i2054.name = i2055[0]
  request.r(i2055[1], i2055[2], 0, i2054, 'texture')
  i2054.aabb = i2055[3]
  i2054.vertices = i2055[4]
  i2054.triangles = i2055[5]
  i2054.textureRect = UnityEngine.Rect.MinMaxRect(i2055[6], i2055[7], i2055[8], i2055[9])
  i2054.packedRect = UnityEngine.Rect.MinMaxRect(i2055[10], i2055[11], i2055[12], i2055[13])
  i2054.border = new pc.Vec4( i2055[14], i2055[15], i2055[16], i2055[17] )
  i2054.transparency = i2055[18]
  i2054.bounds = i2055[19]
  i2054.pixelsPerUnit = i2055[20]
  i2054.textureWidth = i2055[21]
  i2054.textureHeight = i2055[22]
  i2054.nativeSize = new pc.Vec2( i2055[23], i2055[24] )
  i2054.pivot = new pc.Vec2( i2055[25], i2055[26] )
  i2054.textureRectOffset = new pc.Vec2( i2055[27], i2055[28] )
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2057 = data
  i2056.name = i2057[0]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.ascent = i2059[1]
  i2058.originalLineHeight = i2059[2]
  i2058.fontSize = i2059[3]
  var i2061 = i2059[4]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2061[i + 0]) );
  }
  i2058.characterInfo = i2060
  request.r(i2059[5], i2059[6], 0, i2058, 'texture')
  i2058.originalFontSize = i2059[7]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2065 = data
  i2064.index = i2065[0]
  i2064.advance = i2065[1]
  i2064.bearing = i2065[2]
  i2064.glyphWidth = i2065[3]
  i2064.glyphHeight = i2065[4]
  i2064.minX = i2065[5]
  i2064.maxX = i2065[6]
  i2064.minY = i2065[7]
  i2064.maxY = i2065[8]
  i2064.uvBottomLeftX = i2065[9]
  i2064.uvBottomLeftY = i2065[10]
  i2064.uvBottomRightX = i2065[11]
  i2064.uvBottomRightY = i2065[12]
  i2064.uvTopLeftX = i2065[13]
  i2064.uvTopLeftY = i2065[14]
  i2064.uvTopRightX = i2065[15]
  i2064.uvTopRightY = i2065[16]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.bytes64 = i2067[1]
  i2066.data = i2067[2]
  return i2066
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2069 = data
  i2068.hashCode = i2069[0]
  request.r(i2069[1], i2069[2], 0, i2068, 'material')
  i2068.materialHashCode = i2069[3]
  request.r(i2069[4], i2069[5], 0, i2068, 'atlas')
  i2068.normalStyle = i2069[6]
  i2068.normalSpacingOffset = i2069[7]
  i2068.boldStyle = i2069[8]
  i2068.boldSpacing = i2069[9]
  i2068.italicStyle = i2069[10]
  i2068.tabSize = i2069[11]
  i2068.m_Version = i2069[12]
  i2068.m_SourceFontFileGUID = i2069[13]
  request.r(i2069[14], i2069[15], 0, i2068, 'm_SourceFontFile_EditorRef')
  request.r(i2069[16], i2069[17], 0, i2068, 'm_SourceFontFile')
  i2068.m_AtlasPopulationMode = i2069[18]
  i2068.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2069[19], i2068.m_FaceInfo)
  var i2071 = i2069[20]
  var i2070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.add(request.d('UnityEngine.TextCore.Glyph', i2071[i + 0]));
  }
  i2068.m_GlyphTable = i2070
  var i2073 = i2069[21]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('TMPro.TMP_Character', i2073[i + 0]));
  }
  i2068.m_CharacterTable = i2072
  var i2075 = i2069[22]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 2, i2074, '')
  }
  i2068.m_AtlasTextures = i2074
  i2068.m_AtlasTextureIndex = i2069[23]
  i2068.m_IsMultiAtlasTexturesEnabled = !!i2069[24]
  i2068.m_ClearDynamicDataOnBuild = !!i2069[25]
  var i2077 = i2069[26]
  var i2076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.add(request.d('UnityEngine.TextCore.GlyphRect', i2077[i + 0]));
  }
  i2068.m_UsedGlyphRects = i2076
  var i2079 = i2069[27]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('UnityEngine.TextCore.GlyphRect', i2079[i + 0]));
  }
  i2068.m_FreeGlyphRects = i2078
  i2068.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2069[28], i2068.m_fontInfo)
  i2068.m_AtlasWidth = i2069[29]
  i2068.m_AtlasHeight = i2069[30]
  i2068.m_AtlasPadding = i2069[31]
  i2068.m_AtlasRenderMode = i2069[32]
  var i2081 = i2069[33]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.add(request.d('TMPro.TMP_Glyph', i2081[i + 0]));
  }
  i2068.m_glyphInfoList = i2080
  i2068.m_KerningTable = request.d('TMPro.KerningTable', i2069[34], i2068.m_KerningTable)
  i2068.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2069[35], i2068.m_FontFeatureTable)
  var i2083 = i2069[36]
  var i2082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 1, i2082, '')
  }
  i2068.fallbackFontAssets = i2082
  var i2085 = i2069[37]
  var i2084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2085.length; i += 2) {
  request.r(i2085[i + 0], i2085[i + 1], 1, i2084, '')
  }
  i2068.m_FallbackFontAssetTable = i2084
  i2068.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2069[38], i2068.m_CreationSettings)
  var i2087 = i2069[39]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('TMPro.TMP_FontWeightPair', i2087[i + 0]) );
  }
  i2068.m_FontWeightTable = i2086
  var i2089 = i2069[40]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('TMPro.TMP_FontWeightPair', i2089[i + 0]) );
  }
  i2068.fontWeights = i2088
  return i2068
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2091 = data
  i2090.m_FaceIndex = i2091[0]
  i2090.m_FamilyName = i2091[1]
  i2090.m_StyleName = i2091[2]
  i2090.m_PointSize = i2091[3]
  i2090.m_Scale = i2091[4]
  i2090.m_UnitsPerEM = i2091[5]
  i2090.m_LineHeight = i2091[6]
  i2090.m_AscentLine = i2091[7]
  i2090.m_CapLine = i2091[8]
  i2090.m_MeanLine = i2091[9]
  i2090.m_Baseline = i2091[10]
  i2090.m_DescentLine = i2091[11]
  i2090.m_SuperscriptOffset = i2091[12]
  i2090.m_SuperscriptSize = i2091[13]
  i2090.m_SubscriptOffset = i2091[14]
  i2090.m_SubscriptSize = i2091[15]
  i2090.m_UnderlineOffset = i2091[16]
  i2090.m_UnderlineThickness = i2091[17]
  i2090.m_StrikethroughOffset = i2091[18]
  i2090.m_StrikethroughThickness = i2091[19]
  i2090.m_TabWidth = i2091[20]
  return i2090
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2095 = data
  i2094.m_Index = i2095[0]
  i2094.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2095[1], i2094.m_Metrics)
  i2094.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2095[2], i2094.m_GlyphRect)
  i2094.m_Scale = i2095[3]
  i2094.m_AtlasIndex = i2095[4]
  i2094.m_ClassDefinitionType = i2095[5]
  return i2094
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2097 = data
  i2096.m_Width = i2097[0]
  i2096.m_Height = i2097[1]
  i2096.m_HorizontalBearingX = i2097[2]
  i2096.m_HorizontalBearingY = i2097[3]
  i2096.m_HorizontalAdvance = i2097[4]
  return i2096
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2099 = data
  i2098.m_X = i2099[0]
  i2098.m_Y = i2099[1]
  i2098.m_Width = i2099[2]
  i2098.m_Height = i2099[3]
  return i2098
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2102 = root || request.c( 'TMPro.TMP_Character' )
  var i2103 = data
  i2102.m_ElementType = i2103[0]
  i2102.m_Unicode = i2103[1]
  i2102.m_GlyphIndex = i2103[2]
  i2102.m_Scale = i2103[3]
  return i2102
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2108 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2109 = data
  i2108.Name = i2109[0]
  i2108.PointSize = i2109[1]
  i2108.Scale = i2109[2]
  i2108.CharacterCount = i2109[3]
  i2108.LineHeight = i2109[4]
  i2108.Baseline = i2109[5]
  i2108.Ascender = i2109[6]
  i2108.CapHeight = i2109[7]
  i2108.Descender = i2109[8]
  i2108.CenterLine = i2109[9]
  i2108.SuperscriptOffset = i2109[10]
  i2108.SubscriptOffset = i2109[11]
  i2108.SubSize = i2109[12]
  i2108.Underline = i2109[13]
  i2108.UnderlineThickness = i2109[14]
  i2108.strikethrough = i2109[15]
  i2108.strikethroughThickness = i2109[16]
  i2108.TabWidth = i2109[17]
  i2108.Padding = i2109[18]
  i2108.AtlasWidth = i2109[19]
  i2108.AtlasHeight = i2109[20]
  return i2108
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2112 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2113 = data
  i2112.id = i2113[0]
  i2112.x = i2113[1]
  i2112.y = i2113[2]
  i2112.width = i2113[3]
  i2112.height = i2113[4]
  i2112.xOffset = i2113[5]
  i2112.yOffset = i2113[6]
  i2112.xAdvance = i2113[7]
  i2112.scale = i2113[8]
  return i2112
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2114 = root || request.c( 'TMPro.KerningTable' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.add(request.d('TMPro.KerningPair', i2117[i + 0]));
  }
  i2114.kerningPairs = i2116
  return i2114
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2120 = root || request.c( 'TMPro.KerningPair' )
  var i2121 = data
  i2120.xOffset = i2121[0]
  i2120.m_FirstGlyph = i2121[1]
  i2120.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2121[2], i2120.m_FirstGlyphAdjustments)
  i2120.m_SecondGlyph = i2121[3]
  i2120.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2121[4], i2120.m_SecondGlyphAdjustments)
  i2120.m_IgnoreSpacingAdjustments = !!i2121[5]
  return i2120
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2125[i + 0]));
  }
  i2122.m_GlyphPairAdjustmentRecords = i2124
  return i2122
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2129 = data
  i2128.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2129[0], i2128.m_FirstAdjustmentRecord)
  i2128.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2129[1], i2128.m_SecondAdjustmentRecord)
  i2128.m_FeatureLookupFlags = i2129[2]
  return i2128
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2131 = data
  i2130.m_GlyphIndex = i2131[0]
  i2130.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2131[1], i2130.m_GlyphValueRecord)
  return i2130
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2132 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2133 = data
  i2132.m_XPlacement = i2133[0]
  i2132.m_YPlacement = i2133[1]
  i2132.m_XAdvance = i2133[2]
  i2132.m_YAdvance = i2133[3]
  return i2132
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2136 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2137 = data
  i2136.sourceFontFileName = i2137[0]
  i2136.sourceFontFileGUID = i2137[1]
  i2136.pointSizeSamplingMode = i2137[2]
  i2136.pointSize = i2137[3]
  i2136.padding = i2137[4]
  i2136.packingMode = i2137[5]
  i2136.atlasWidth = i2137[6]
  i2136.atlasHeight = i2137[7]
  i2136.characterSetSelectionMode = i2137[8]
  i2136.characterSequence = i2137[9]
  i2136.referencedFontAssetGUID = i2137[10]
  i2136.referencedTextAssetGUID = i2137[11]
  i2136.fontStyle = i2137[12]
  i2136.fontStyleModifier = i2137[13]
  i2136.renderMode = i2137[14]
  i2136.includeFontFeatures = !!i2137[15]
  return i2136
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2140 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'regularTypeface')
  request.r(i2141[2], i2141[3], 0, i2140, 'italicTypeface')
  return i2140
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TMP_Settings' )
  var i2143 = data
  i2142.m_enableWordWrapping = !!i2143[0]
  i2142.m_enableKerning = !!i2143[1]
  i2142.m_enableExtraPadding = !!i2143[2]
  i2142.m_enableTintAllSprites = !!i2143[3]
  i2142.m_enableParseEscapeCharacters = !!i2143[4]
  i2142.m_EnableRaycastTarget = !!i2143[5]
  i2142.m_GetFontFeaturesAtRuntime = !!i2143[6]
  i2142.m_missingGlyphCharacter = i2143[7]
  i2142.m_warningsDisabled = !!i2143[8]
  request.r(i2143[9], i2143[10], 0, i2142, 'm_defaultFontAsset')
  i2142.m_defaultFontAssetPath = i2143[11]
  i2142.m_defaultFontSize = i2143[12]
  i2142.m_defaultAutoSizeMinRatio = i2143[13]
  i2142.m_defaultAutoSizeMaxRatio = i2143[14]
  i2142.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2143[15], i2143[16] )
  i2142.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2143[17], i2143[18] )
  i2142.m_autoSizeTextContainer = !!i2143[19]
  i2142.m_IsTextObjectScaleStatic = !!i2143[20]
  var i2145 = i2143[21]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 1, i2144, '')
  }
  i2142.m_fallbackFontAssets = i2144
  i2142.m_matchMaterialPreset = !!i2143[22]
  request.r(i2143[23], i2143[24], 0, i2142, 'm_defaultSpriteAsset')
  i2142.m_defaultSpriteAssetPath = i2143[25]
  i2142.m_enableEmojiSupport = !!i2143[26]
  i2142.m_MissingCharacterSpriteUnicode = i2143[27]
  i2142.m_defaultColorGradientPresetsPath = i2143[28]
  request.r(i2143[29], i2143[30], 0, i2142, 'm_defaultStyleSheet')
  i2142.m_StyleSheetsResourcePath = i2143[31]
  request.r(i2143[32], i2143[33], 0, i2142, 'm_leadingCharacters')
  request.r(i2143[34], i2143[35], 0, i2142, 'm_followingCharacters')
  i2142.m_UseModernHangulLineBreakingRules = !!i2143[36]
  return i2142
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2146 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2147 = data
  i2146.hashCode = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'material')
  i2146.materialHashCode = i2147[3]
  request.r(i2147[4], i2147[5], 0, i2146, 'spriteSheet')
  var i2149 = i2147[6]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.add(request.d('TMPro.TMP_Sprite', i2149[i + 0]));
  }
  i2146.spriteInfoList = i2148
  var i2151 = i2147[7]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 1, i2150, '')
  }
  i2146.fallbackSpriteAssets = i2150
  i2146.m_Version = i2147[8]
  i2146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2147[9], i2146.m_FaceInfo)
  var i2153 = i2147[10]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.add(request.d('TMPro.TMP_SpriteCharacter', i2153[i + 0]));
  }
  i2146.m_SpriteCharacterTable = i2152
  var i2155 = i2147[11]
  var i2154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.add(request.d('TMPro.TMP_SpriteGlyph', i2155[i + 0]));
  }
  i2146.m_SpriteGlyphTable = i2154
  return i2146
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2158 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.hashCode = i2159[1]
  i2158.unicode = i2159[2]
  i2158.pivot = new pc.Vec2( i2159[3], i2159[4] )
  request.r(i2159[5], i2159[6], 0, i2158, 'sprite')
  i2158.id = i2159[7]
  i2158.x = i2159[8]
  i2158.y = i2159[9]
  i2158.width = i2159[10]
  i2158.height = i2159[11]
  i2158.xOffset = i2159[12]
  i2158.yOffset = i2159[13]
  i2158.xAdvance = i2159[14]
  i2158.scale = i2159[15]
  return i2158
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2164 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2165 = data
  i2164.m_Name = i2165[0]
  i2164.m_HashCode = i2165[1]
  i2164.m_ElementType = i2165[2]
  i2164.m_Unicode = i2165[3]
  i2164.m_GlyphIndex = i2165[4]
  i2164.m_Scale = i2165[5]
  return i2164
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'sprite')
  i2168.m_Index = i2169[2]
  i2168.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2169[3], i2168.m_Metrics)
  i2168.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2169[4], i2168.m_GlyphRect)
  i2168.m_Scale = i2169[5]
  i2168.m_AtlasIndex = i2169[6]
  i2168.m_ClassDefinitionType = i2169[7]
  return i2168
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2170 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2171 = data
  var i2173 = i2171[0]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(request.d('TMPro.TMP_Style', i2173[i + 0]));
  }
  i2170.m_StyleList = i2172
  return i2170
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2176 = root || request.c( 'TMPro.TMP_Style' )
  var i2177 = data
  i2176.m_Name = i2177[0]
  i2176.m_HashCode = i2177[1]
  i2176.m_OpeningDefinition = i2177[2]
  i2176.m_ClosingDefinition = i2177[3]
  i2176.m_OpeningTagArray = i2177[4]
  i2176.m_ClosingTagArray = i2177[5]
  i2176.m_OpeningTagUnicodeArray = i2177[6]
  i2176.m_ClosingTagUnicodeArray = i2177[7]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2179 = data
  var i2181 = i2179[0]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2181[i + 0]) );
  }
  i2178.files = i2180
  i2178.componentToPrefabIds = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2185 = data
  i2184.path = i2185[0]
  request.r(i2185[1], i2185[2], 0, i2184, 'unityObject')
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2187 = data
  var i2189 = i2187[0]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2189[i + 0]) );
  }
  i2186.scriptsExecutionOrder = i2188
  var i2191 = i2187[1]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2191[i + 0]) );
  }
  i2186.sortingLayers = i2190
  var i2193 = i2187[2]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2193[i + 0]) );
  }
  i2186.cullingLayers = i2192
  i2186.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2187[3], i2186.timeSettings)
  i2186.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2187[4], i2186.physicsSettings)
  i2186.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2187[5], i2186.physics2DSettings)
  i2186.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2187[6], i2186.qualitySettings)
  i2186.enableRealtimeShadows = !!i2187[7]
  i2186.enableAutoInstancing = !!i2187[8]
  i2186.enableDynamicBatching = !!i2187[9]
  i2186.lightmapEncodingQuality = i2187[10]
  i2186.desiredColorSpace = i2187[11]
  var i2195 = i2187[12]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( i2195[i + 0] );
  }
  i2186.allTags = i2194
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.value = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2203 = data
  i2202.id = i2203[0]
  i2202.name = i2203[1]
  i2202.value = i2203[2]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2207 = data
  i2206.id = i2207[0]
  i2206.name = i2207[1]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2209 = data
  i2208.fixedDeltaTime = i2209[0]
  i2208.maximumDeltaTime = i2209[1]
  i2208.timeScale = i2209[2]
  i2208.maximumParticleTimestep = i2209[3]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2211 = data
  i2210.gravity = new pc.Vec3( i2211[0], i2211[1], i2211[2] )
  i2210.defaultSolverIterations = i2211[3]
  i2210.bounceThreshold = i2211[4]
  i2210.autoSyncTransforms = !!i2211[5]
  i2210.autoSimulation = !!i2211[6]
  var i2213 = i2211[7]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2213[i + 0]) );
  }
  i2210.collisionMatrix = i2212
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.layerId = i2217[1]
  i2216.otherLayerId = i2217[2]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'material')
  i2218.gravity = new pc.Vec2( i2219[2], i2219[3] )
  i2218.positionIterations = i2219[4]
  i2218.velocityIterations = i2219[5]
  i2218.velocityThreshold = i2219[6]
  i2218.maxLinearCorrection = i2219[7]
  i2218.maxAngularCorrection = i2219[8]
  i2218.maxTranslationSpeed = i2219[9]
  i2218.maxRotationSpeed = i2219[10]
  i2218.baumgarteScale = i2219[11]
  i2218.baumgarteTOIScale = i2219[12]
  i2218.timeToSleep = i2219[13]
  i2218.linearSleepTolerance = i2219[14]
  i2218.angularSleepTolerance = i2219[15]
  i2218.defaultContactOffset = i2219[16]
  i2218.autoSimulation = !!i2219[17]
  i2218.queriesHitTriggers = !!i2219[18]
  i2218.queriesStartInColliders = !!i2219[19]
  i2218.callbacksOnDisable = !!i2219[20]
  i2218.reuseCollisionCallbacks = !!i2219[21]
  i2218.autoSyncTransforms = !!i2219[22]
  var i2221 = i2219[23]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2221[i + 0]) );
  }
  i2218.collisionMatrix = i2220
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.layerId = i2225[1]
  i2224.otherLayerId = i2225[2]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2227 = data
  var i2229 = i2227[0]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2229[i + 0]) );
  }
  i2226.qualityLevels = i2228
  var i2231 = i2227[1]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( i2231[i + 0] );
  }
  i2226.names = i2230
  i2226.shadows = i2227[2]
  i2226.anisotropicFiltering = i2227[3]
  i2226.antiAliasing = i2227[4]
  i2226.lodBias = i2227[5]
  i2226.shadowCascades = i2227[6]
  i2226.shadowDistance = i2227[7]
  i2226.shadowmaskMode = i2227[8]
  i2226.shadowProjection = i2227[9]
  i2226.shadowResolution = i2227[10]
  i2226.softParticles = !!i2227[11]
  i2226.softVegetation = !!i2227[12]
  i2226.activeColorSpace = i2227[13]
  i2226.desiredColorSpace = i2227[14]
  i2226.masterTextureLimit = i2227[15]
  i2226.maxQueuedFrames = i2227[16]
  i2226.particleRaycastBudget = i2227[17]
  i2226.pixelLightCount = i2227[18]
  i2226.realtimeReflectionProbes = !!i2227[19]
  i2226.shadowCascade2Split = i2227[20]
  i2226.shadowCascade4Split = new pc.Vec3( i2227[21], i2227[22], i2227[23] )
  i2226.streamingMipmapsActive = !!i2227[24]
  i2226.vSyncCount = i2227[25]
  i2226.asyncUploadBufferSize = i2227[26]
  i2226.asyncUploadTimeSlice = i2227[27]
  i2226.billboardsFaceCameraPosition = !!i2227[28]
  i2226.shadowNearPlaneOffset = i2227[29]
  i2226.streamingMipmapsMemoryBudget = i2227[30]
  i2226.maximumLODLevel = i2227[31]
  i2226.streamingMipmapsAddAllCameras = !!i2227[32]
  i2226.streamingMipmapsMaxLevelReduction = i2227[33]
  i2226.streamingMipmapsRenderersPerFrame = i2227[34]
  i2226.resolutionScalingFixedDPIFactor = i2227[35]
  i2226.streamingMipmapsMaxFileIORequests = i2227[36]
  i2226.currentQualityLevel = i2227[37]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2237 = data
  i2236.weight = i2237[0]
  i2236.vertices = i2237[1]
  i2236.normals = i2237[2]
  i2236.tangents = i2237[3]
  return i2236
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2238 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2239 = data
  i2238.xPlacement = i2239[0]
  i2238.yPlacement = i2239[1]
  i2238.xAdvance = i2239[2]
  i2238.yAdvance = i2239[3]
  return i2238
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

Deserializers.creativeName = "";

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

Deserializers.buildID = "f9e237a6-4f2f-49b2-9b4e-2fefab3ab430";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"]],[["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

