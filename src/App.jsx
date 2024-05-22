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

useGLTF.preload("./models/testing_gen2_ani_01.glb")

function Model(props) {
  const group = useRef()
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF(
    "./models/testing_gen2_ani_01.glb"
  )
  const { actions, names } = useAnimations(animations, group)
  console.log(names)

  useEffect(() => void (actions.STEP.reset().play().paused = true), [])

  useFrame(
    () => (actions.STEP.time = actions.STEP.getClip().duration * scroll.offset)
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Genesis2Male"
          position={[0.057, -0.087, 0.059]}
          rotation={[1.513, 0.054, 0.195]}
          scale={0.01}
        >
          <group name="Armani_20393Shape">
            <skinnedMesh
              name="Armani_20393"
              geometry={nodes.Armani_20393.geometry}
              material={materials.Cap}
              skeleton={nodes.Armani_20393.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_1"
              geometry={nodes.Armani_20393_1.geometry}
              material={materials.SidesUnder}
              skeleton={nodes.Armani_20393_1.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_2"
              geometry={nodes.Armani_20393_2.geometry}
              material={materials.TopBack}
              skeleton={nodes.Armani_20393_2.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_3"
              geometry={nodes.Armani_20393_3.geometry}
              material={materials["Neck.001"]}
              skeleton={nodes.Armani_20393_3.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_4"
              geometry={nodes.Armani_20393_4.geometry}
              material={materials.Top}
              skeleton={nodes.Armani_20393_4.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_5"
              geometry={nodes.Armani_20393_5.geometry}
              material={materials.Thin}
              skeleton={nodes.Armani_20393_5.skeleton}
            />
            <skinnedMesh
              name="Armani_20393_6"
              geometry={nodes.Armani_20393_6.geometry}
              material={materials.Sides}
              skeleton={nodes.Armani_20393_6.skeleton}
            />
          </group>
          <group name="Genesis2MaleShape">
            <skinnedMesh
              name="Genesis2Male_1"
              geometry={nodes.Genesis2Male_1.geometry}
              material={materials.Legs}
              skeleton={nodes.Genesis2Male_1.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_2"
              geometry={nodes.Genesis2Male_2.geometry}
              material={materials.EyeReflection}
              skeleton={nodes.Genesis2Male_2.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_3"
              geometry={nodes.Genesis2Male_3.geometry}
              material={materials.Nostrils}
              skeleton={nodes.Genesis2Male_3.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_4"
              geometry={nodes.Genesis2Male_4.geometry}
              material={materials.Lacrimals}
              skeleton={nodes.Genesis2Male_4.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_5"
              geometry={nodes.Genesis2Male_5.geometry}
              material={materials.Pupils}
              skeleton={nodes.Genesis2Male_5.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_6"
              geometry={nodes.Genesis2Male_6.geometry}
              material={materials.Lips}
              skeleton={nodes.Genesis2Male_6.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_7"
              geometry={nodes.Genesis2Male_7.geometry}
              material={materials.Tear}
              skeleton={nodes.Genesis2Male_7.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_8"
              geometry={nodes.Genesis2Male_8.geometry}
              material={materials.Gums}
              skeleton={nodes.Genesis2Male_8.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_9"
              geometry={nodes.Genesis2Male_9.geometry}
              material={materials.Irises}
              skeleton={nodes.Genesis2Male_9.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_10"
              geometry={nodes.Genesis2Male_10.geometry}
              material={materials.Teeth}
              skeleton={nodes.Genesis2Male_10.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_11"
              geometry={nodes.Genesis2Male_11.geometry}
              material={materials.Cornea}
              skeleton={nodes.Genesis2Male_11.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_12"
              geometry={nodes.Genesis2Male_12.geometry}
              material={materials.Face}
              skeleton={nodes.Genesis2Male_12.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_13"
              geometry={nodes.Genesis2Male_13.geometry}
              material={materials.Toenails}
              skeleton={nodes.Genesis2Male_13.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_14"
              geometry={nodes.Genesis2Male_14.geometry}
              material={materials.Sclera}
              skeleton={nodes.Genesis2Male_14.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_15"
              geometry={nodes.Genesis2Male_15.geometry}
              material={materials.Fingernails}
              skeleton={nodes.Genesis2Male_15.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_16"
              geometry={nodes.Genesis2Male_16.geometry}
              material={materials.Head}
              skeleton={nodes.Genesis2Male_16.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_17"
              geometry={nodes.Genesis2Male_17.geometry}
              material={materials.Ears}
              skeleton={nodes.Genesis2Male_17.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_18"
              geometry={nodes.Genesis2Male_18.geometry}
              material={materials.Hands}
              skeleton={nodes.Genesis2Male_18.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_19"
              geometry={nodes.Genesis2Male_19.geometry}
              material={materials.Shoulders}
              skeleton={nodes.Genesis2Male_19.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_20"
              geometry={nodes.Genesis2Male_20.geometry}
              material={materials.Neck}
              skeleton={nodes.Genesis2Male_20.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_21"
              geometry={nodes.Genesis2Male_21.geometry}
              material={materials.Hips}
              skeleton={nodes.Genesis2Male_21.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_22"
              geometry={nodes.Genesis2Male_22.geometry}
              material={materials.Torso}
              skeleton={nodes.Genesis2Male_22.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_23"
              geometry={nodes.Genesis2Male_23.geometry}
              material={materials.Nipples}
              skeleton={nodes.Genesis2Male_23.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_24"
              geometry={nodes.Genesis2Male_24.geometry}
              material={materials.Forearms}
              skeleton={nodes.Genesis2Male_24.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_25"
              geometry={nodes.Genesis2Male_25.geometry}
              material={materials.Feet}
              skeleton={nodes.Genesis2Male_25.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_26"
              geometry={nodes.Genesis2Male_26.geometry}
              material={materials.Eyelashes}
              skeleton={nodes.Genesis2Male_26.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_27"
              geometry={nodes.Genesis2Male_27.geometry}
              material={materials.Tongue}
              skeleton={nodes.Genesis2Male_27.skeleton}
            />
            <skinnedMesh
              name="Genesis2Male_28"
              geometry={nodes.Genesis2Male_28.geometry}
              material={materials.InnerMouth}
              skeleton={nodes.Genesis2Male_28.skeleton}
            />
          </group>
          <primitive object={nodes.hip} />
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
    <fog attach="fog" args={["#a0a0f0", 0, 20]} />
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
