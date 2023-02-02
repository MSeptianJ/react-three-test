import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Object from './components/bouncingDuck';

function App() {
	return (
		<>
			<div className="Title">
				<h1>Prototype 1</h1>
			</div>
			<Canvas id="canvas" shadows>
				<Suspense fallback={null} r3f>
					<Object />
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
