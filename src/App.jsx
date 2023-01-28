import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './components/three';
import Loader from './components/progress';
import { Environment } from '@react-three/drei';

function App() {
	return (
		<>
			<div className="Title">
				<h1>Prototype 1</h1>
			</div>
			<Canvas id="canvas" shadows>
				<Suspense fallback={null} r3f>
					<Three />
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
