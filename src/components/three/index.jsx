export default function Three() {
	return (
		<>
			<mesh>
				<sphereGeometry args={[1, 32, 16]} />
				<meshStandardMaterial color="#4287f5" />
			</mesh>

			<mesh>
				<planeGeometry args={[7, 7]} />
				<meshStandardMaterial color="#b7bec9" />
			</mesh>

			<ambientLight args={['#ffffff', 1]} />
		</>
	);
}
