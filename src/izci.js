import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import Cam from "./props/Cam";
import * as THREE from 'three';
import { Line } from "./props/Line";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const camprops = [
  {
    position: [10, 1, 10],
    alignment: [0, 0],
    rotation: [Math.PI / 2, -Math.PI / 2, Math.PI / 2]
  },
  {
    position: [5, 1, 10],
    rotation: [Math.PI, Math.PI / 2, 0],
    alignment: [0, 0],
  },
  {
    position: [-3, 1, 10],
    rotation: [Math.PI / 2, -Math.PI / 2, Math.PI / 2],
    alignment: [0, 0],
  },
  {
    position: [-10, 1, 10],
    rotation: [Math.PI, Math.PI / 2, 0],
    alignment: [0, 0],
  }
]


const carPlaneProps = {
  size: [50, 10],
}

function CarPlane(props) {
  const { setCarPosition } = props;
  const car = useLoader(GLTFLoader, '/models/car.gltf');

  const carRef = useRef(null);
  useFrame((state, delta) => {
    carRef.current.position.x += 5 * delta;
    if (carRef.current.position.x > 20) {
      carRef.current.position.x = -20;
    }
    setCarPosition([carRef.current.position.x, carRef.current.position.y, carRef.current.position.z]);
  })
  return (
    <mesh position={[0, 0, 0]} >
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={carPlaneProps.size} />
        <meshBasicMaterial color={'gray'} side={THREE.DoubleSide} />
      </mesh>
      <mesh scale={[0.75, 0.75, 0.75]} ref={carRef} position={[-carPlaneProps.size[0] / 2 + 2, 0, 0]}>
        <mesh position={[0, 0, 5]} rotation={[0, Math.PI / 2, 0]}>

          <primitive object={car.scene.clone(true)} />
        </mesh>
      </mesh>
    </mesh>
  )
}

export default function Izci() {

  const [carPosition, setCarPosition] = useState([-13, 0.5, 0])

  return (
    <Canvas frameloop="always" camera={{ position: [0, 10, 20] }}>
      <ambientLight args={[0xcccccc]} />
      <mesh>
        <CarPlane setCarPosition={setCarPosition} />

        {camprops.map((cam) => {
          return (
            <group>

              <Cam
                alignment={cam.alignment}
                rotationY={cam.rotationY}
                rotationZ={cam.rotationZ}
                lineEnd={carPosition}
                bulletPos={carPosition}
                project={"izci"}
                meshProps={{
                  position: cam.position,
                  rotation: cam.rotation
                }}
              >
              </Cam>
            </group>
          );
        })}
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
