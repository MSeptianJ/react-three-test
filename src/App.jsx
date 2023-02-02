import {
	Box,
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { ARButton, Controllers, useHitTest, useXR, XR } from '@react-three/xr';
import { Suspense, useRef, useState } from 'react';
import './App.css';
import { Duck } from './components/objects/Duck';
import angleToRadians from './utils/angle';

const HitTestExample = () => {
	const ref = useRef(null);

	useHitTest((hitMatrix, hit) => {
		hitMatrix.decompose(
			ref.current.position,
			ref.current.quaternion,
			ref.current.scale
		);
	});

	return <Box ref={ref} args={[0.1, 0.1, 0.1]} />;
};

function PlayerExample() {
	const player = useXR((state) => state.player);
	useFrame(() => void (player.rotation.x = player.rotation.y += 0.01));

	return null;
}

function App() {
	const [error, setError] = useState('Testing');
	return (
		<>
			<div className="Title">
				<h1>{error}</h1>
			</div>
			<ARButton
				sessionInit={{
					optionalFeatures: ['local-floor', 'bounded-floor', 'hit-test'],
				}}
				onError={(e) => {
					setError('Error: ', e);
				}}
			/>
			<Canvas id="canvas" shadows>
				<Suspense fallback={null} r3f>
					<XR referenceSpace="local-floor">
						<Duck
							position={[0, 0.3, -5]}
							rotation={[0, angleToRadians(-90), 0]}
						>
							<OrbitControls />
							<ambientLight args={['#ffffff', 0.3]} />
							<PerspectiveCamera makeDefault position={[0, 1, 20]} />
							<Environment preset="sunset" />
						</Duck>

						<ambientLight />
						<pointLight position={[10, 10, 10]} />
						<PlayerExample />
						<Controllers />
						<OrbitControls />
					</XR>
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
