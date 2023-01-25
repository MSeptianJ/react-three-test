import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import angleToRadians from '../../utils/angle';

export default function Three() {
	const orbitControlRef = useRef(null);
	useFrame((state) => {
		if (!!orbitControlRef.current) {
			const { x, y } = state.mouse;
			orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
			orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
			orbitControlRef.current.update();
		}
	});

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 1, 15]} />
			<OrbitControls
				ref={orbitControlRef}
				minPolarAngle={angleToRadians(60)}
				maxPolarAngle={angleToRadians(80)}
			/>
			{/* Ball */}
			<mesh position={[0, 2, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color="#4287f5" />
			</mesh>
			{/* Floor */}
			<mesh rotation={[-angleToRadians(90), 0, 0]}>
				<planeGeometry args={[7, 7]} />
				<meshStandardMaterial color="#b7bec9" />
			</mesh>
			{/* Light */}
			<ambientLight args={['#ffffff', 1]} />
			{/* <pointLight args={['#ffffff', 3]} /> */}
		</>
	);
}

// function Ship(props) {
// 	const { scene } = useGLTF('/Duck.gltf');

// 	return <primitive object={scene} />;
// }
