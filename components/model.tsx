import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const ref = useRef<any>();
  const { nodes } = useGLTF('/model.gltf') as GLTFResult;

  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.2));

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/model.gltf');
