

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { DoubleSide } from 'three';
import { useRef, useState } from 'react';
import * as THREE from 'three'
import React from 'react';

export default function Bullet(props) {
    const { meshProps, setBulletPos } = props;
  
    const ref = useRef();
  
    useFrame((state, delta) => {
      ref.current.position.x += 2 * delta;
      if (ref.current.position.x > 4) {
        ref.current.position.x = -4;
      }
      setBulletPos([ref.current.position.x, ref.current.position.y, ref.current.position.z]);
    });
  
  
    return (
      <mesh ref={ref} {...meshProps}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={0x00ffff} wireframe />
      </mesh>
    )
  }
  
