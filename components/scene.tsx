'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Model from './model';

export default function Scene() {
  return (
    <Canvas className='w-full h-full !fixed bg-transparent'>
      <ambientLight intensity={0.3} />
      <directionalLight color='#FFFFFF' position={[10, 10, 5]} intensity={1} />
      <directionalLight color='#FFFFFF' position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1000} position={[1, 10, 0]} />
      <Model />
    </Canvas>
  );
}
