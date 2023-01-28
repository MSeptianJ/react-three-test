import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import angleToRadians from '../../utils/angle';
import { Duck } from '../objects/duck';

export default function Three() {
	const orbitControlRef = useRef(null);
	const duckRef = useRef(null);
	const ballRef = useRef(null);

	// useFrame((state) => {
	// 	if (!!orbitControlRef.current) {
	// 		const { x, y } = state.mouse;
	// 		orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
	// 		orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
	// 		orbitControlRef.current.update();
	// 	}
	// });

	// useEffect(() => {
	// 	if (!!ballRef.current) {
	// 		const tl = gsap.timeline({ repeat: -1 });
	// 		// console.log(ballRef.current);
	// 		const pos = ballRef.current.position;

	// 		tl.to(pos, {
	// 			x: -3,
	// 			duration: 1,
	// 		});
	// 		tl.to(
	// 			pos,
	// 			{
	// 				y: 1,
	// 				duration: 1,
	// 				ease: 'bounce.out',
	// 			},
	// 			'<'
	// 		);
	// 	}
	// }, [ballRef.current]);

	useEffect(() => {
		if (!!duckRef.current) {
			const tl = gsap.timeline({ repeat: -1 });
			const pos = duckRef.current.position;

			tl.to(pos, {
				x: -3,
				duration: 1,
			});
			tl.to(
				pos,
				{
					y: 0,
					duration: 1,
					ease: 'bounce.out',
				},
				'<'
			);
		}
	}, [duckRef.current]);

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 1, 15]} />
			<OrbitControls
				// autoRotate={true}
				ref={orbitControlRef}
				minPolarAngle={angleToRadians(60)}
				maxPolarAngle={angleToRadians(80)}
			/>

			{/* Ball */}
			{/* <mesh ref={ballRef} castShadow receiveShadow position={[3, 5, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshStandardMaterial color="#4287f5" metalness={0.8} roughness={0.4} />
			</mesh> */}
			<Duck position={[3, 5, 0]} ref={duckRef} />
			{/* <Cactus position={[-2, 1, 0]} /> */}

			{/* Floor */}
			<mesh castShadow receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
				<planeGeometry args={[16, 16]} />
				<meshStandardMaterial color="#b7f77c" />
			</mesh>

			{/* Wall */}
			{/* <mesh castShadow receiveShadow position={[0, 4, -8]}>
				<planeGeometry args={[16, 8]} />
				<meshStandardMaterial color="#b7f77c" />
			</mesh> */}

			{/* Light */}
			<ambientLight args={['#ffffff', 0.2]} />
			<spotLight
				castShadow
				args={['#ffffff', 1, 30, angleToRadians(40), 0.5, 0.4]}
				position={[3, 6, 6]}
			/>

			{/* Environment */}
			{/* <Environment preset="lobby" blur={0.8} /> */}

			<Environment background>
				<mesh>
					<sphereGeometry args={[50, 100, 100]} />
					<meshBasicMaterial color="#b7f77c" side={THREE.BackSide} />
				</mesh>
			</Environment>
		</>
	);
}
