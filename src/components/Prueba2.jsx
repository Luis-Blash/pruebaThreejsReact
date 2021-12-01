import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Prueba2 = () => {
  const container = useRef(null);

  useEffect(() => {
    var camera, scene, renderer;
    camera = new THREE.PerspectiveCamera(
      75,
      container.current.clientWidth / container.current.clientHeight,
      1,
      1100
    );
    camera.position.z = 0.01;

    scene = new THREE.Scene();

    const texture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
      render
    );
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = texture;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.current.clientWidth, container.current.clientHeight);
    container.current.appendChild(renderer.domElement);

    //

    window.addEventListener("resize", onWindowResize, false);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);

    function onWindowResize() {
      camera.aspect = container.current.clientWidth / container.current.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.current.clientWidth, container.current.clientHeight);
    }

    function render() {
      renderer.render(scene, camera);
    }
  }, []);

  return <div ref={container}></div>;
};
