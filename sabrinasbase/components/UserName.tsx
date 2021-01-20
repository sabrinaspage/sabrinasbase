import React, { useRef, useEffect } from "react";
import HelvitikerFont from '../node_modules/three/examples/fonts/helvetiker_bold.typeface.json';
import * as THREE from "three";

interface Props {
  name?: string;
}

const App: React.FC<Props> = ({ name = "Sabrina Reyes" }) => {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const loader = new THREE.FontLoader();
    const textGeometry = new THREE.TextGeometry(name, {
      font: loader.parse(HelvitikerFont),
      size: 1,
    });
    const material = new THREE.MeshToonMaterial({
        color: 0x196ff,
    });
    const text = new THREE.Mesh(textGeometry, material);

    scene.add(text);

    camera.position.z = 80; // determines how far we are from the cube
    text.position.y = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={mount} />;
};

export default App;
