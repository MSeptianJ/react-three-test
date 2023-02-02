import { useGLTF } from '@react-three/drei';
import { useHitTest } from '@react-three/xr';
import { useRef } from 'react';

export function Duck(props) {
	const { nodes, materials } = useGLTF('/Duck.gltf');
	const duckRef = useRef();

	useHitTest((hitMatrix, hit) => {
		hitMatrix.decompose(
			duckRef.current.position,
			duckRef.current.quaternion,
			duckRef.current.scale
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
