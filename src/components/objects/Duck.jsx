import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';

export function Duck(props) {
	const { nodes, materials } = useGLTF('/Duck.gltf');
	return (
		<group {...props} dispose={null}>
			<OrbitControls />
			<group scale={0.01}>
				<ambientLight args={['#ffffff', 0.3]} />
				<PerspectiveCamera makeDefault={false} position={[0, 0, 15]} />
				<mesh
					geometry={nodes.LOD3spShape.geometry}
					material={materials['blinn3-fx']}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/Duck.gltf');
