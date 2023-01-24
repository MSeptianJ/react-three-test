import { PerspectiveCamera } from '@react-three/drei';

export default function Three() {
	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 1, 15]} />
			{/* Ball */}
			<mesh position={[0, 1, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color="#4287f5" />
			</mesh>
			{/* Floor */}
			<mesh rotation={[30, 0, 0]}>
				<planeGeometry args={[7, 7]} />
				<meshStandardMaterial color="#b7bec9" />
			</mesh>
			{/* Light */}
			<ambientLight args={['#ffffff', 1]} />
		</>
	);
}
