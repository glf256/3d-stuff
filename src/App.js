import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  KeyboardControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  Environment,
  useGLTF
} from '@react-three/drei'
import { useDeferredValue } from 'react/cjs/react.development'

export default function App() {
  return (
    <Canvas>
      <Environment preset="sunset" background blur ear={1} far={1000} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <World />
      <FlyControls movementSpeed={10} rollSpeed={0} />
      <PointerLockControls />
    </Canvas>
  )
}

function Model({ url, ...props }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}

function World() {
  return (
    <>
      <Model url={'/models/city/building_A.gltf'} />
    </>
  )
}
