import { Spherical } from 'three';

const orbitElectron = (mesh, theta, phi, radius) => {
	const spherical = new Spherical();
	spherical.setFromVector3(mesh.position);

	spherical.theta = theta || spherical.theta;
	spherical.phi = phi || spherical.phi;
	spherical.radius = radius || spherical.radius;

	mesh.position.setFromSpherical(spherical);
};

export default orbitElectron;
