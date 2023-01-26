import { useGLTF } from '@react-three/drei';

export function Cactus(props) {
	const { nodes, materials } = useGLTF('/scene.glb');
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group
					position={[0.21, 0.32, 1.42]}
					rotation={[0.59, 0.3, -3.04]}
					scale={0.05}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle002_0.geometry}
						material={materials['Material.011']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle002_1.geometry}
						material={materials['Material.010']}
					/>
				</group>
				<group
					position={[-0.67, -0.7, 1.12]}
					rotation={[0.12, -0.21, 2.1]}
					scale={0.05}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_0.geometry}
						material={materials['Material.009']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_1.geometry}
						material={materials['Material.008']}
					/>
				</group>
				<group position={[0, 1.08, 1.6]} rotation={[-0.24, 0, 0]} scale={0.07}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle_0.geometry}
						material={materials['Material.006']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle_1.geometry}
						material={materials['Material.007']}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube002_0.geometry}
					material={materials['Material.004']}
					position={[-0.55, -0.61, 0.36]}
					rotation={[0, 0, 0.44]}
					scale={[0.41, 0.41, 0.45]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube001_0.geometry}
					material={materials['Material.003']}
					position={[0.88, -0.33, 0.36]}
					rotation={[0, 0, -0.58]}
					scale={[0.38, 0.38, 0.42]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane_0.geometry}
					material={materials['Material.001']}
					position={[0, 0, -0.02]}
					scale={1.1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cube_0.geometry}
					material={materials['Material.002']}
					position={[0, 0.83, 0.61]}
					scale={[0.55, 0.55, 0.6]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/scene.glb');
