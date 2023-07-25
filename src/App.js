
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
import Avci from './avci';
import Izci from './izci';





function App() {


  return (
    <div className="App">
      <Izci/>
    </div>
  );
}

export default App;
