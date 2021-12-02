import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class AppThree {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    //add Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 8;
    this.camera.position.y = 5;
  }

  // Add canvas
  append() {
    this.container.appendChild(this.renderer.domElement);
  }

  //Camera Controls
  camara() {
    window.addEventListener("resize", this.onWindowResize(), false);
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.addEventListener("change", this.render);
  }

  // render Scene
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  // extras

  texture(){
    const texture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
      this.render()
    );
    texture.mapping = THREE.EquirectangularReflectionMapping;
    this.scene.background = texture;
  }

  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
