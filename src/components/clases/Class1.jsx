import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Class1 = () => {
  const container = useRef(null);
  useEffect(() => {
    // Scenea
    var scene = new THREE.Scene();
    scene.background = new THREE.Color('#E04747');
    // Camara
    var camera = new THREE.PerspectiveCamera(
      75,
      container.current.clientWidth / container.current.clientHeight
    );

    // renderer
    var renderer = new THREE.WebGLRenderer();
    /// tamaño de ventana
    renderer.setSize(container.current.clientWidth, container.current.clientHeight)
    // se agrega al dom
    container.current.appendChild( renderer.domElement )

    // add geometry
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({color: '#47E0C2'})
    var cube = new THREE.Mesh(geometry, material)

    // agregar a la scena objetos
    scene.add(cube);

    // posicion de la camara 
    camera.position.z = 5

    // renderiza scena
    renderer.render(scene,camera)

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    animate();
  }, []);
  return <div ref={container}></div>;
};
