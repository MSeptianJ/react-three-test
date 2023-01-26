import { Canvas } from '@react-three/fiber';
import { ARButton, Controllers, XR } from '@react-three/xr';
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
			<ARButton />
			<Canvas id="canvas" shadows>
				<Suspense fallback={null} r3f>
					<XR isPresenting>
						<Duck
							position={[0, 0.3, -1]}
							rotation={[0, angleToRadians(-90), 0]}
						/>
					</XR>
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
