"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function EnhancedSparklyParticles() {
  const mesh = useRef<THREE.Points>(null)
  const light = useRef<THREE.PointLight>(null)

  const particleCount = 3000 // Increased for more sparkle

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Create a more spread out distribution for sparkly effect
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 8 + Math.random() * 150

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Enhanced sparkly color palette with more variety
      const colorChoice = Math.random()
      if (colorChoice < 0.25) {
        // Bright Cyan
        colors[i * 3] = 0.1 + Math.random() * 0.2 // R
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2 // G
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1 // B
      } else if (colorChoice < 0.5) {
        // Bright Blue
        colors[i * 3] = 0.2 + Math.random() * 0.3 // R
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.4 // G
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1 // B
      } else if (colorChoice < 0.75) {
        // Bright Teal
        colors[i * 3] = 0.1 + Math.random() * 0.2 // R
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.3 // G
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.4 // B
      } else {
        // Sparkly Purple/Pink
        colors[i * 3] = 0.6 + Math.random() * 0.4 // R
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.3 // G
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2 // B
      }

      // Varying sizes for sparkly effect
      sizes[i] = 0.5 + Math.random() * 2.5
    }

    return [positions, colors, sizes]
  }, [particleCount])

  useFrame((state) => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      const sizes = mesh.current.geometry.attributes.size.array as Float32Array

      // Enhanced flowing motion with sparkly twinkling
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // Calculate distance from center
        const dist = Math.sqrt(x * x + y * y + z * z)

        // Create flowing motion based on distance and time
        const speed = 0.08 + (i % 15) * 0.015
        const angle = state.clock.elapsedTime * speed + dist * 0.006

        // Apply subtle wave motion
        positions[i3] += Math.sin(angle) * 0.015
        positions[i3 + 1] += Math.cos(angle) * 0.015
        positions[i3 + 2] += Math.sin(angle * 0.8) * 0.015

        // Sparkly size variation for twinkling effect
        const twinkle = Math.sin(state.clock.elapsedTime * (2 + (i % 5)) + i) * 0.5 + 0.5
        sizes[i] = (0.5 + Math.random() * 2.5) * (0.3 + twinkle * 0.7)
      }

      mesh.current.geometry.attributes.position.needsUpdate = true
      mesh.current.geometry.attributes.size.needsUpdate = true
    }

    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 25
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 25
      light.current.intensity = 1.8 + Math.sin(state.clock.elapsedTime * 2) * 0.5
    }
  })

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
          <bufferAttribute attach="attributes-size" count={particleCount} array={sizes} itemSize={1} />
        </bufferGeometry>
        <pointsMaterial size={1.2} vertexColors transparent opacity={0.9} sizeAttenuation />
      </points>

      {/* Multiple colored lights for enhanced sparkly effect */}
      <pointLight ref={light} intensity={2} color="#06b6d4" />
      <pointLight position={[-20, 20, -20]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[20, -20, 20]} intensity={1.3} color="#0d9488" />
      <pointLight position={[0, 25, 0]} intensity={1.0} color="#8b5cf6" />
      <pointLight position={[0, -25, 0]} intensity={0.8} color="#ec4899" />
    </>
  )
}

export default function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <EnhancedSparklyParticles />
    </Canvas>
  )
}
