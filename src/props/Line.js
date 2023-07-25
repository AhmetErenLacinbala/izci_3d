
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, SpotLight } from '@react-three/drei'
import { DoubleSide } from 'three';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three'
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AmbientLight } from 'three';

export function Line({ start, end, bulletPos, meshPos, project, treshold }) {
    const ref = useRef();
  
    useFrame(() => {
      ref.current.visible = true;
      if(project === "avci"){

        if (bulletPos[0] < 2 && bulletPos[0] > -2) {
          if (meshPos[0] < 0 && bulletPos[0] < 0) {
            ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)));
          }
          else if (meshPos[0] > 0 && bulletPos[0] > 0) {
            ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)));
          }
        }
        
        
        if (meshPos[0] > 0) {
          if (bulletPos[0] > 0) {
            ref.current.visible = true
          }
        }
        else if (meshPos[0] < 0) {
          if (bulletPos[0] < 0) {
            ref.current.visible = true
          }
        }
        
        else ref.current.visible = false
        
      }
      else{
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)));
        if(end[0] > start[0]-7 && end[0] < start[0]+7){
          ref.current.visible = true;
        }
        else ref.current.visible = false
      }
      })
      
      return (
        <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color="hotpink" />
      </line>
    )
  }

  export function BulletTrack(props) {
    const { start, end, bulletPos, setTrackStart } = props;
    const ref = useRef();
  
  
  
    useFrame(() => {
      if (bulletPos[0] < 2 && bulletPos[0] > -2)
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)));
      if (bulletPos[0] > -2) ref.current.visible = true
      else ref.current.visible = false
    })
  
    return (
      <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color="hotpink" />
      </line>
    )
  }
  