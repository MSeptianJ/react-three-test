import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './components/three';
import Loader from './components/progress';
import { ARButton, XR } from '@react-three/xr';

function App() {
	return (
		<>
			{/* <div className="Title">
				<h1>Prototype 1</h1>
			</div> */}
			<ARButton />
			<Canvas id="canvas" shadows>
				<Suspense fallback={null}>
					<XR referenceSpace="local">
						<Three />
					</XR>
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
