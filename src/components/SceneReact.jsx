import * as THREE from "three";
import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const SceneReact = () => {
  useEffect(() => {
    const canvas = document.getElementById("container");
    let camera, scene, renderer;
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight; // the canvas default
    const near = 4;
    const far = 1100;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 0.01;
    const texture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
      render
    );
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth/2, canvas.clientWidth/2);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
    canvas.append(renderer.domElement)
    function render() {
      renderer.render(scene, camera);
    }
  }, []);
  return (
    <div className="App grid h-screen grid-rows-2" id="general">
      <div className="h-full w-full" id="container">
      </div>
      <div className="bg-blue-500"></div>
    </div>
  );
};
