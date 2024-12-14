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
import { texture } from 'three/webgpu'
var isexplore=false

//scene
const scene = new THREE.Scene()
var x=window.matchMedia("(min-width:600px)")

//camera
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 1
if(!x.matches){
    camera.position.z=2
}
// camera.position.y=.1

// Load HDRI environment map
const rgbeLoader = new RGBELoader()
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.environment = texture
    
    // scene.background = texture
})


// const textureloader=new THREE.TextureLoader();
// textureloader.load('./texture1.jpg',
//     function(texture){
//         const material=new THREE.MeshBasicMaterial({map:texture})
//     },
//     undefined,
//     function(error){
//         console.error('An error happened:', error)
//     }
// );
// GLTF Loader
const loader = new GLTFLoader()
var model;
var arr=['/textures/texture1.jpg','/textures/texture2.jpg','/textures/texture3.jpg','/textures/texture4.jpg'];
// var arr=['texture1.jpg','texture2.jpg','texture3.jpg','texture4.jpg'];

// var i=0;
// var no=document.querySelector(".prev")
// no.addEventListener("click",function(){
//     console.log('ouyoyo')
//     // i++;
// })
loader.load(
    '/models/shirt_baked.glb',
    function (gltf) {
        model = gltf.scene
        
        // Center and scale the model
        var box = new THREE.Box3().setFromObject(model)
        var center = box.getCenter(new THREE.Vector3())
        // model.position.x += (model.position.x - center.x)
        model.position.x=2
        model.position.y += (model.position.y - center.y)
        // model.position.z += (model.position.z - center.z)
        
        const scaleValue = 1
        model.scale.set(scaleValue, scaleValue, scaleValue)
        // var val=arr[0];
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(`${arr[i]}`,(texture) => console.log('Texture loaded:', texture),
        (progress) => console.log('Loading progress:', progress),
        (error) => console.error('Error occurred:', error)); // Replace with your texture path
        
        // Assuming the model has mesh materials
        model.traverse((node) => {
            if (node.isMesh) {
                node.material.map = texture; // Apply the texture to all mesh materials
                node.material.needsUpdate = true;
            }
            });
        scene.add(model)
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    function (error) {
        console.error('An error happened:', error)
    }
)



window.addEventListener("mousemove",(e)=>{
    if(!isexplore){

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
}
})
// function preventScroll(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     return false;
// }
// function disableScrolling() {
//     window.addEventListener('scroll', preventScroll, { passive: false });
// }

// // Function to enable scrolling
// function enableScrolling() {
//     window.removeEventListener('scroll', preventScroll);
// }
document.querySelector(".explore").addEventListener("click",function(){
    // const controls = new OrbitControls( camera, renderer.domElement );
    isexplore=true
    if(isexplore){
        // disableScrolling()
        // controls.update();
        // controls.enableZoom = false;
        // isexplore=false
        gsap.to(".centertext h1",{
            y:800,
            duration:1,
            ease:"expo.inOut"
        })
        gsap.to(camera.position,{
            x:2,
            duration:1,
            ease:"expo.inOut"
        })
        // camera.position.x=2
    }
    
})
document.querySelector(".back").addEventListener("click",function(){
    // const controls = new OrbitControls( camera, renderer.domElement );
    isexplore=false
    // enableScrolling()
    // model.position.x += (model.position.x - center.x)
    // model.position.y += (model.position.y - center.y)
    // controls.enabled=false;
    // controls.update();
    gsap.to(".centertext h1",{
        y:0,
        duration:1,
        ease:"expo.inOut"
    })
    gsap.to(camera.position,{
        x:0,
        duration:1,
        ease:"expo.inOut"
    })
})

var i = 0;
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", function () {
    
    i = (i + 1) % arr.length;
    console.log(`Texture index updated: ${i}`);

    if (model) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(
            `${arr[i]}`,
            (texture) => console.log('Texture loaded:', texture),
            (progress) => console.log('Loading progress:', progress),
            (error) => console.error('Error occurred:', error)
        );

        
        model.traverse((node) => {
            if (node.isMesh) {
                node.material.map = texture;
                node.material.needsUpdate = true;
            }
        });
    }
});
const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function () {
    i = (i - 1 + arr.length) % arr.length; 
    console.log(`Texture index updated: ${i}`);

    if (model) {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(
            `${arr[i]}`,
            (texture) => console.log('Texture loaded:', texture),
            (progress) => console.log('Loading progress:', progress),
            (error) => console.error('Error occurred:', error)
        );

        model.traverse((node) => {
            if (node.isMesh) {
                node.material.map = texture; 
                node.material.needsUpdate = true;
            }
        });
    }
});



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



function animate() {
    window.requestAnimationFrame(animate)
    
    if (model) {
        model.rotation.y += 0.02
    }
    
    composer.render()
    renderer.render( scene, camera );

}
animate()
