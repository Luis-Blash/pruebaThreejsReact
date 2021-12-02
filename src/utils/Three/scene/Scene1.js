import { PerspectiveCamera, Scene } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
class Scene1 extends Scene{
    constructor(loaderManager,camera = PerspectiveCamera,control= OrbitControls,renderer){
        
    }
}

export default Scene1;