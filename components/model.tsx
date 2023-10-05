import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {};
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model.gltf') as GLTFResult;

  console.log(nodes.mesh_0.material, materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/model.gltf');
