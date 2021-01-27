import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const App = () => {
	const mount = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.5,
			2000
		);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		mount.current.appendChild(renderer.domElement);

		const cubeGeometry = new THREE.BoxGeometry();
		const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(cubeGeometry, material);
        const cube2 = new THREE.Mesh(cubeGeometry, material);

        scene.add(cube);
        scene.add(cube2);

        cube2.position.x = 3;

        camera.position.z = 2; // determines how far we are from the cube
        camera.position.x = 1;

		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            cube2.rotation.x += 0.01;
			cube2.rotation.y += 0.01;

			renderer.render(scene, camera);
		};
		animate();
	}, []);

	return <div ref={mount} />;
};

export default App;