import { useGLTF } from '@react-three/drei';
import { forwardRef } from 'react';

export const Duck = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF('/Duck.gltf');
	return (
		<group {...props} dispose={null} ref={ref}>
			<group scale={0.01}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.LOD3spShape.geometry}
					material={materials['blinn3-fx']}
				/>
			</group>
		</group>
	);
});

useGLTF.preload('/Duck.gltf');
