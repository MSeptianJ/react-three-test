import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Spherical } from 'three';

const orbitElectron = (mesh, theta, phi, radius) => {
	const spherical = new Spherical();
	spherical.setFromVector3(mesh.position);

	spherical.theta = theta || spherical.theta;
	spherical.phi = phi || spherical.phi;
	spherical.radius = radius || spherical.radius;

	mesh.position.setFromSpherical(spherical);
};

export function Duck(props) {
	const { nodes, materials } = useGLTF('/Duck.gltf');
	const duckRef = useRef();

	useFrame((engine) => {
		orbitElectron(
			duckRef.current,
			engine.clock.elapsedTime * 20 * Math.PI * 0.5
		);
	});

	return (
		<group {...props} dispose={null} ref={duckRef}>
			<group scale={0.01}>
				<mesh
					geometry={nodes.LOD3spShape.geometry}
					material={materials['blinn3-fx']}
				/>
				{props.children}
			</group>
		</group>
	);
}

useGLTF.preload('/Duck.gltf');
