import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function App() {
	return (
		<Canvas id="canvas">
			<Suspense fallback={null}></Suspense>
		</Canvas>
	);
}

export default App;
