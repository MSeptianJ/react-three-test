import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';
import { Suspense } from 'react';
import './App.css';
import { Duck } from './components/objects/Duck';
import angleToRadians from './utils/angle';
// import Three from './components/three';

function App() {
	return (
		<>
			{/* <div className="Title">
				<h1>Prototype 1</h1>
			</div> */}
			<ARButton
				sessionInit={{
					optionalFeatures: ['local-floor', 'bounded-floor'],
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
					</XR>
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
