import { useGLTF } from '@react-three/drei';

export function Duck(props) {
	const { nodes, materials } = useGLTF('/Duck.gltf');
	return (
		<group {...props} dispose={null}>
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
