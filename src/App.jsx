import { useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  useGLTF,
  useAnimations,
  useScroll,
  ScrollControls,
  SoftShadows,
} from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"

function Model(props) {
  const group = useRef()
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF(
    "./models/Runningman_ani_01.glb"
  )

  const { actions, names } = useAnimations(animations)

  console.log(animations)

  useEffect(() => {
    actions[0].reset().play().paused = true
  }, [])
  useFrame(
    () => (actions[0].time = actions[0].getClip().duration * scroll.offset)
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <group name="Kachujin">
            <skinnedMesh
              name="Kachujin_1"
              geometry={nodes.Kachujin_1.geometry}
              material={materials.kachujin_MAT}
              skeleton={nodes.Kachujin_1.skeleton}
            />
            <skinnedMesh
              name="Kachujin_2"
              geometry={nodes.Kachujin_2.geometry}
              material={materials.kachujin_MAT_}
              skeleton={nodes.Kachujin_2.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

export const App = () => (
  <Canvas
    shadows
    gl={{ antialias: false }}
    camera={{ position: [1, 0.5, 2.5], fov: 50 }}
  >
    <color attach="background" args={["#f0f0f0"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight
      intensity={2}
      position={[-5, 5, 5]}
      castShadow
      shadow-mapSize={2048}
      shadow-bias={-0.0001}
    />
    <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
      <Model
        position={[0, -1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </ScrollControls>
    <mesh
      rotation={[-0.5 * Math.PI, 0, 0]}
      position={[0, -1.01, 0]}
      receiveShadow
    >
      <planeGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.75} />
    </mesh>
    <SoftShadows size={40} samples={16} />
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer>
  </Canvas>
)
