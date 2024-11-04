import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'

function lenis(){
    const lenis = new Lenis();

lenis.on('scroll');

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}

lenis()

var x=window.matchMedia("(min-width:600px)")

gsap.registerPlugin(ScrollTrigger);
gsap.set(".textcontent h1",{
    scale:100
})
var tl2=gsap.timeline();
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        scrub:1,
        start:"0% top",
        end:"bottom 100%",
        // markers:true,
        pin:true   
    }
});
var progress=document.querySelector(".progress")
tl2.to(progress,{
    width:"100%",
    // ease:"power2.out",
    ease: "power1.inOut",
    duration:8
})
tl2.to(".loader",{
    opacity:0,
    // ease:"power2.out",
    // duration:5
})
tl2.to(".loader",{
    display:"none"
})
tl2.from('.hero-content h1:nth-child(1)',{
    x:-800,
    duration:1,
    ease:"expo.out"
},"hero")
tl2.from('.hero-content h1:nth-child(2)',{
    x:800,
    duration:1,
    ease:"expo.out"
},"hero")
tl2.from('.nav',{
    y:-100,
    opacity:0,
    duration:1
},"hero")
tl2.to('.nav',{
    scaleX:1,
    duration:1,
    ease:"expo.inOut"
})
// tl.to('.hero-content h1:nth-child(1)',{
//     x:800,
//     duration:1,
//     ease:"expo.out"
// },'hero2')
// tl.to('.hero-content h1:nth-child(2)',{
//     x:-800,
//     duration:1,
//     ease:"expo.out"
// },"hero2")

tl.to(".video",{
    "--clip":"0%",
},"a")
.to(".textcontent h1",{
    scale:1
},"a")
// .to(".textcontent",{
    //     flexDirection:'column',
    //     ease:"power2.out"
    // },"b")
tl.to(".innertext",{
    width:"100%",
},"b")


if(x.matches){
    tl.to(".text1 h1",{
    fontSize:"14rem"
},"b")
}

function para_effect(){
    var clutter="";
document.querySelector(".para-effect")
.textContent.split("")
.forEach(function(e){
    if(e==="") clutter+=`<span>$nbsp;</span>`
    clutter+=`<span>${e}</span>`;
})
document.querySelector(".para-effect").innerHTML=clutter;
gsap.set(".para-effect span",{
    opacity:.01
})
gsap.to(".para-effect span",{
    opacity:1,
    stagger:.03,
    ease:"power4",
    scrollTrigger:{
        trigger:".page2",
        scrub:2,
        start:"top top",
        end:"200% bottom",
        pin:true,
        // markers:true
    }
})
}
para_effect()


//     var increment=1.5+"rem"
//     var logotexth1=document.querySelectorAll(".logotext>h1").forEach(function(e){
//     gsap.to(e,{
//         top:"-="+increment,
//         // ease:"power2.out",
//         repeat:-1,
//         // duration:4.5
//     })
//     increment-=1.5+"rem"
// })