'use client';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import Model from './model';

export default function Scene() {
  return (
    <Canvas
      className='w-full h-full !fixed bg-transparent'
      camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}
    >
      <Stage preset='rembrandt' intensity={1} environment='city'>
        <Model />
      </Stage>
    </Canvas>
  );
}
