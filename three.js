import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
var loader = new GLTFLoader();

var sword;

var container = document.getElementById( 'canvas3d' );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, canvas:container });

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffbb, 0);

const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
scene.add( ambientLight );

const dirLight = new THREE.DirectionalLight( 0xefefff, 1.5 );
dirLight.position.set( 10, 10, 10 );
scene.add( dirLight );

camera.position.z = 5;

// Load a glTF resource
loader.load(
    // resource URL
    './chap.gltf',
    // called when the resource is loaded
    function ( gltf ) {
    sword = gltf.scene;
        scene.add( sword );
        
        sword.animations; // Array<THREE.AnimationClip>
        sword.scene; // THREE.Group
        sword.scenes; // Array<THREE.Group>
        sword.cameras; // Array<THREE.Camera>
        sword.asset; // Object
        sword.position.set(0,0.5,1);
        sword.center();

    },
    // called while loading is progressing
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);





function animate() {
    requestAnimationFrame( animate );

    sword.rotation.y+=0.009;

    renderer.render( scene, camera );

}
animate();
