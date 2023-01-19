import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './components/three';

function App() {
	return (
		<Canvas id="canvas">
			<Suspense fallback={null}>
				<Three />
			</Suspense>
		</Canvas>
	);
}

export default App;
