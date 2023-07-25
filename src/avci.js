import './App.css';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, SpotLight } from '@react-three/drei'
import { DoubleSide } from 'three';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three'
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AmbientLight } from 'three';
import Cam from './props/Cam';
import Bullet from './props/Bullet';
import { BulletTrack } from './props/Line';


const camprops = [
  {
    position: [2, 2, 2],
    alignment: [-1, -1],
    rotation: [Math.PI/4, -Math.PI / 2, Math.PI / 2]
  },
  {
    position: [-2, 2, -2],
    rotation: [Math.PI/4, Math.PI / 2, 0],
    alignment: [-1, 1],
  },
  {
    position: [-2, 2, 2],
    rotation: [Math.PI/4, -Math.PI / 2, Math.PI / 2],
    alignment: [-1, -1],
  },
  {
    position: [2, 2, -2],
    rotation: [Math.PI/4, Math.PI / 2, 0],
    alignment: [-1, 1],
  }
]




      
export default function Avci() {

const initialBulletPos = [-4, 1, 0];
const [bulletPos, setBulletPos] = useState(initialBulletPos);
const [trackStart, setTrackStart] = useState([-2, 1, 0]);

useEffect(() => {
  if (bulletPos[0] === -2)
    setTrackStart(bulletPos);
}, [bulletPos]);

return (
    <Canvas frameloop="always" camera={{ position: [0, 0, 8] }}>
        <ambientLight args={[0xcccccc]} />

        <mesh>

          {camprops.map((cam) => {
            return (
              <Cam
                bulletPos={bulletPos}
                setBulletPos={setBulletPos}
                lineEnd={bulletPos}
                alignment={cam.alignment}
                meshProps={{
                  position: cam.position,
                  rotation: cam.rotation
                }}
              />
            )
          })}

          <Bullet setBulletPos={setBulletPos} meshProps={{
            position: bulletPos
          }} />
          {bulletPos[0] > -2 ? <BulletTrack start={trackStart} end={bulletPos} bulletPos={bulletPos} /> : ""}

        </mesh>
        <OrbitControls />
      </Canvas>
  
);
}
