"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text3D, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export default function ProductShowcase() {
  const groupRef = useRef<THREE.Group>(null)

  // Create data visualization points
  const dataPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 20; i++) {
      const x = (i / 20) * 3 - 1.5
      const y = Math.sin(i * 0.5) * 0.5 + Math.cos(i * 0.3) * 0.3
      const z = 0.15
      points.push([x, y, z])
    }
    return points
  }, [])

  const dataPoints2 = useMemo(() => {
    const points = []
    for (let i = 0; i < 15; i++) {
      const x = (i / 15) * 3 - 1.5
      const y = Math.sin(i * 0.7 + 2) * 0.4 - 0.3
      const z = 0.15
      points.push([x, y, z])
    }
    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <RoundedBox args={[2, 3, 0.2]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1e293b"
            roughness={0.1}
            metalness={0.9}
            emissive="#0f172a"
            emissiveIntensity={0.1}
          />
        </RoundedBox>

        {/* Enhanced Screen */}
        <RoundedBox args={[1.8, 2.8, 0.1]} radius={0.05} position={[0, 0, 0.11]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} transparent opacity={0.9} />
        </RoundedBox>

        {/* Data visualization points */}
        <group position={[0, 0, 0.22]}>
          {dataPoints.map((point, i) => (
            <Sphere key={`data1-${i}`} args={[0.03, 8, 8]} position={point}>
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
            </Sphere>
          ))}

          {dataPoints2.map((point, i) => (
            <Sphere key={`data2-${i}`} args={[0.025, 8, 8]} position={point}>
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} />
            </Sphere>
          ))}
        </group>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Text3D font="/fonts/Inter_Bold.json" size={0.3} height={0.05} position={[-1, 1.5, 0.5]}>
          Connect
          <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.3} />
        </Text3D>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Text3D font="/fonts/Inter_Bold.json" size={0.25} height={0.05} position={[0.5, -1.5, 0.3]}>
          Analyze
          <meshStandardMaterial color="#3b82f6" emissive="#2563eb" emissiveIntensity={0.3} />
        </Text3D>
      </Float>

      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={2}>
        <Text3D font="/fonts/Inter_Bold.json" size={0.2} height={0.05} position={[-0.8, -0.5, 0.8]}>
          Collaborate
          <meshStandardMaterial color="#0d9488" emissive="#0f766e" emissiveIntensity={0.3} />
        </Text3D>
      </Float>

      {/* Floating orbs around the device */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[0.1, 16, 16]} position={[1.5, 1, 1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} transparent opacity={0.8} />
        </Sphere>
      </Float>

      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
        <Sphere args={[0.08, 16, 16]} position={[-1.2, -1.5, 0.8]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} transparent opacity={0.8} />
        </Sphere>
      </Float>
    </group>
  )
}
