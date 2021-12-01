import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Prueba1 = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log(mountRef.current.clientHeight);
    console.log(mountRef.current.clientWidth);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", onWindowResize, false);

    animate();


  }, []);

  return <div ref={mountRef}></div>;
};
