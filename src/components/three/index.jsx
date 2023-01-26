import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import angleToRadians from '../../utils/angle';
import { Duck } from '../objects/Duck';

export default function Three() {
	const orbitControlRef = useRef(null);
	// useFrame((state) => {
	// 	if (!!orbitControlRef.current) {
	// 		const { x, y } = state.mouse;
	// 		orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
	// 		orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
	// 		orbitControlRef.current.update();
	// 	}
	// });

	return (
		<>
			{/* <PerspectiveCamera makeDefault position={[0, 1, 15]} /> */}
			<OrbitControls
				// autoRotate={true}
				ref={orbitControlRef}
				minPolarAngle={angleToRadians(60)}
				maxPolarAngle={angleToRadians(80)}
			/>

			{/* Ball */}
			{/* <mesh castShadow receiveShadow position={[0, 2, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color="#4287f5" />
			</mesh> */}

			{/* Object */}
			<Duck position={[0, 2, 0]} />

			{/* Floor */}
			<mesh castShadow receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
				<planeGeometry args={[16, 16]} />
				<meshStandardMaterial color="#95dd50" />
			</mesh>

			{/* Wall */}
			<mesh castShadow receiveShadow position={[0, 4, -8]}>
				<planeGeometry args={[16, 8]} />
				<meshStandardMaterial color="#95dd50" />
			</mesh>

			{/* Light */}
			<ambientLight args={['#ffffff', 0.2]} />
			<spotLight
				castShadow
				args={['#ffffff', 1, 30, angleToRadians(40), 0.5, 0.4]}
				position={[3, 6, 6]}
			/>

			{/* Environment */}
			<Environment background>
				<mesh>
					<sphereGeometry args={[50, 100, 100]} />
					<meshBasicMaterial color="#82c93f" side={THREE.BackSide} />
				</mesh>
			</Environment>
		</>
	);
}
