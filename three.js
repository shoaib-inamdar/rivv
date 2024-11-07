import './style.css'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap'

//scene
const scene = new THREE.Scene()
var x=window.matchMedia("(min-width:600px)")

//camera
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 4
if(!x.matches){
    camera.position.z=6
}
camera.position.y=.5

// Load HDRI environment map
const rgbeLoader = new RGBELoader()
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = texture
    
    // scene.background = texture
})


// GLTF Loader
const loader = new GLTFLoader()
let model;

loader.load(
    '/models/4Tshirt.glb',
    function (gltf) {
        model = gltf.scene
        scene.add(model)
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.x += (model.position.x - center.x)
        model.position.y += (model.position.y - center.y)
        // model.position.z += (model.position.z - center.z)
        
        const scaleValue = 1
        model.scale.set(scaleValue, scaleValue, scaleValue)
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    function (error) {
        console.error('An error happened:', error)
    }
)

window.addEventListener("mousemove",(e)=>{
    if(model){
        const rotationx=(e.clientX/window.innerWidth-.5)*(Math.PI*.18);
        const rotationy=(e.clientY/window.innerHeight-.5)*(Math.PI*.1);
        gsap.to(model.rotation, {
            x: rotationy,
            y: rotationx,
            duration: 0.5,
            ease: "power2.out"
        });
    }
})

window.addEventListener("resize",()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    composer.setSize(window.innerWidth,window.innerHeight);
})
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas'),
    antialias: true,
    alpha:true
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.outputEncoding = THREE.sRGBEncoding

// Post Processing
const composer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const rgbShiftPass = new ShaderPass(RGBShiftShader)
rgbShiftPass.uniforms['amount'].value = 0.0025
composer.addPass(rgbShiftPass)
// const controls = new OrbitControls( camera, renderer.domElement );
// controls.update();


function animate() {
    window.requestAnimationFrame(animate)
    
    if (model) {
        // model.rotation.y += 0.005
    }
    
    composer.render()
    renderer.render( scene, camera );

}
animate()
