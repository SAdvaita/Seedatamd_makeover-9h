"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Torus } from "@react-three/drei"
import type * as THREE from "three"

export default function Hero3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Simple glowing orbs */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.4, 16, 16]} position={[2, 1, -1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere args={[0.3, 16, 16]} position={[-2, -1, 1]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.0} rotationIntensity={0.3} floatIntensity={1.5}>
        <Sphere args={[0.25, 16, 16]} position={[-1.5, 1.5, 1.5]}>
          <meshStandardMaterial color="#0d9488" emissive="#0d9488" emissiveIntensity={0.8} transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <Sphere args={[0.2, 16, 16]} position={[1.5, -1.8, 0.5]}>
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.8} transparent opacity={0.6} />
        </Sphere>
      </Float>

      {/* Simple flowing rings */}
      <Float speed={1.3} rotationIntensity={1.5} floatIntensity={0.8}>
        <Torus args={[1.2, 0.08, 16, 100]} position={[0, 2, -2]} rotation={[0.5, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.4} />
        </Torus>
      </Float>

      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.0}>
        <Torus args={[0.8, 0.06, 16, 100]} position={[-1, -2, 1]} rotation={[1, 0.5, 0]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} transparent opacity={0.3} />
        </Torus>
      </Float>
    </group>
  )
}
