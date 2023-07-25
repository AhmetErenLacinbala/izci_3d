

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Line } from './Line';

export default function Cam(props) {
  const { scene } = useLoader(GLTFLoader, '/models/camera.glb');
  const { meshProps, lineEnd, rotationY, rotationZ, alignment, bulletPos, scanTreshold } = props;
  const izciPos = [meshProps.position[0], meshProps.position[1], meshProps.position[2] - 0.1]


  return (
    <mesh>

      <mesh rotation={[Math.PI / 4, rotationY, rotationZ]} scale={[0.1, 0.1, 0.1]}  {...meshProps}>

        <primitive object={scene.clone(true)} />
      </mesh>
      <Line start={izciPos} treshold={scanTreshold} project={props.propject} bulletPos={bulletPos} end={lineEnd.map(arr => arr + 0.5)} meshPos={meshProps.position} />

      {props.children}

    </mesh>
  )
}
