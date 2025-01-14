import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'
// import Background from "three/src/renderers/common/Background.js";
// import Shery from "sheryjs";
// Shery.mouseFollower()
gsap.registerPlugin(ScrollTrigger);

function lenis(){
    const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel:true
    });

lenis.on('scroll');

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}

lenis()

var x=window.matchMedia("(min-width:600px)")
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
// tl2.from('.hero-content h1:nth-child(1)',{
//     x:-800,
//     duration:1,
//     ease:"expo.out"
// },"hero")
tl2.from('.centertext h1',{ 
    y:800,
    duration:1,
    ease:"expo.out"
},"hero")
                                            // tl2.from('.nav',{
                                            //     y:-100,
                                            //     opacity:0,
                                            //     duration:1
                                            // },"hero")
                                            // tl2.to('.nav',{
                                            //     scaleX:1,
                                            //     duration:1,
                                            //     ease:"expo.inOut"
                                            // })
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


if(!x.matches){
gsap.set(".cursor",{
    display:"none"
})
}else{
    gsap.set(".cursor",{
        display:"initial"
    })
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
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scrub:2,
        start:"top top",
        end:"200% 20%",
        pin:true,
        // markers:true
    }
});
gsap.set(".para-effect span",{
    opacity:.01
})
tl3.to(".para-effect span",{
    opacity:1,
    stagger:.03,
    ease:"power4",
},'para')
tl3.from(".imgdiv",{
    height:0,
    // width:0,
    stagger:1,
    duration:2
    
},'para')
}
para_effect()

function cursor(){
    window.addEventListener("mousemove",function(e){
        gsap.to(".innercursor,.cursor",{
            x:e.clientX,
            y:e.clientY,
            opacity:1,
            ease:"back.out",
            stagger:.04,
            // duration:.2
        })
    })
}
cursor()


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

function page3(){
    var tll=gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scrub:1,
            start:"20% 20%",
            end:"300% 30%",
            // markers:true,
            pin:true   
        }
    });
    
    tll.from(".circle1,.circle2",{
        y:200,
        opacity:0,
        duration:5
    })
    tll.to(".circle1",{
        left:"50%",
        duration:5
    },"circle")
    tll.to(".circle2",{
        left:"50%",
        duration:5
    },"circle")
    tll.to(".circle2 h1",{
        display:"none",
    })
    tll.to(".circle2",{
        scale:20,
        duration:3
    },"yo")
    
    tll.to(".page3",{
        backgroundColor:"#fff"
    })
    tll.to(".circle1,.circle2",{
        display:"none"
    })
    tll.to(".svg,.contentmobile",{
        opacity:1
    })
    // var tlll=gsap.timeline({
    //     scrollTrigger:{
    //         trigger:".page3",
    //         start:"50% 50%",
    //         end:"250% 50%",
    //         scrub:1
    //     }
    // })
    
    tll.from("#mb1",{
        x:1000,
        duration:2,
    })
    tll.from("#mb1>h1",{
        opacity:0
    })
    tll.from("#mb2",{
        x:1000,
        duration:2,
    })
    tll.from("#mb2>h1",{
        opacity:0
    })
    tll.from("#mb3",{
        x:1000,
        duration:2,
    })
    tll.from("#mb3>h1",{
        opacity:0
    })
    
    tll.to(".svg",{
        maskSize:"200%",
        // transform:"rotate(200deg)",
        duration:8
    },'svg')
    tll.to(".svg .img",{
        backgroundSize:"100%",
        duration:7
    },'svg')
    tll.to(".img .svgcontent",{
        opacity:0
    })
    tll.to(".svg2",{
        maskSize:"200%",
        duration:8
    },'svg2')
    tll.to(".svg2 .img2",{
        backgroundSize:"100%",
        duration:7
    },'svg2')
    tll.to(".img2 .svg2content",{
        opacity:0
    })
    tll.to(".svg3",{
        maskSize:"200%",
        duration:8
    },'svg3')
    tll.to(".svg3 .img3",{
        backgroundSize:"100%",
        duration:7
    },'svg3')
}
page3()

if(x.matches){

    gsap.to(".websiteprogress",{
        width:"100%",
    // ease:"power1",
    scrollTrigger:{
        scroller:"body",
        trigger:".main",
        start:"top top",
        end:"bottom bottom",
        // markers:true,
        scrub:1
    }
})
}
if(!x.matches){
    
    gsap.to(".websiteprogress",{
        height:"100%",
        // ease:"power1",
        scrollTrigger:{
            scroller:"body",
            trigger:".main",
            start:"top top",
            end:"bottom bottom",
            // markers:true,
            scrub:1
        }
    })
    
}

// function preventScroll(event) {
//     event.preventDefault();
// }

document.querySelector(".explore").addEventListener("click",function(){
    // window.addEventListener('scroll', preventScroll, { passive: false });
    
    // window.addEventListener('wheel', preventScroll, { passive: false });
    // window.addEventListener('touchmove', preventScroll, { passive: false });
    gsap.to('.explore',{
        bottom:"-2.5rem",
        opacity:0    
    })
    gsap.to(".nav",{
        y:-100
    })
    gsap.to(".back",{
        bottom:"2.5rem",
        opacity:1
    })
    gsap.to(".next",{
        opacity:1,
        right:0
    })
    gsap.to(".prev",{
        opacity:1,
        left:0
    })
    

})

document.querySelector(".back").addEventListener("click",function(){
    gsap.to('.explore',{
        bottom:"2.5rem",
        opacity:1
    })
    gsap.to(".nav",{
        y:0
    })
    gsap.to(".back",{
        bottom:"-2.5rem",
        opacity:0
    })
    gsap.to(".next",{
        opacity:0,
        right:"-2.5rem"
    })
    gsap.to(".prev",{
        opacity:0,
        left:"-2.5rem"
    })
    
})

// document.querySelectorAll(".cursoreffect").addEventListener("mouseenter",function(e){
//     gsap.to(".innercursor",{
//         scale:7
//     })
// })
// document.querySelectorAll(".cursoreffect").addEventListener("mouseleave",function(){
//     gsap.to(".innercursor",{
//         scale:1
//     })
// })

document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseenter",function(elem){
        gsap.to(".innercursor",{
            scale:5
        })
    })
})
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseleave",function(elem){
        gsap.to(".innercursor",{
            scale:1
        })
    })
})

gsap.from(".line1",{
    width:"0%",
    ease:"expo.inOut",
    // opacity:0,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"5% 15%",
        end:"5% 25%",
        scrub:2,
        // markers:true
    }
})
gsap.from(".line2",{
    width:"0%",
    ease:"expo.inOut",
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"50% top",
        end:"50% top",
        scrub:2
        // markers:true
    }
})
if(!x.matches){
    gsap.to("#img1",{
        opacity:0,
        scrollTrigger:{
            scroll:"body",
            trigger:".page4",
            start:"top 20%",
            end:"top 20%",
            scrub:1,
            // markers:true
        }
    })
    gsap.to("#img2",{
        opacity:0,
        scrollTrigger:{
            scroll:"body",
            trigger:".page4",
            start:"40% top",
            end:"40% top",
            scrub:1,
            // markers:true
        }
    })
}

gsap.from('.page4 .texteffect h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.page4',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 50%',
        scrub: 2,
        // markers:true
    }
})
gsap.from('#card1 .textelem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.page4',
        scroller: 'body',
        start: 'top 10%',
        end: 'top 20%',
        scrub: 2,
        // markers:true
    }
})
gsap.from('#card2 .textelem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.page4',
        scroller: 'body',
        start: '57% 10%',
        end: '57% 20%',
        scrub: 2,
        // markers:true
    }
})
gsap.from('.question1 .textelem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.question1',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 2,
        // markers:true
    }
})
gsap.from(".question1 .underline",{
    width:"0%",
    ease:"expo.inOut",
    // opacity:0,
    scrollTrigger:{
        trigger:".question1",
        scroller:"body",
        start:"top 55%",
        end:"top 55%",
        scrub:2,
        // markers:true
    }
})
gsap.from('.question2 .textelem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.question2',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 2,
        // markers:true
    }
})
gsap.to(".question2 .underline",{
    width:"100%",
    ease:"expo.inOut",
    // opacity:0,
    scrollTrigger:{
        trigger:".question2",
        scroller:"body",
        start:"top 55%",
        end:"top 55%",
        scrub:2,
        // markers:true
    }
})
gsap.from('.question3 .textelem h1', {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.question3',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 2,
        // markers:true
    }
})
gsap.from(".question3 .underline",{
    width:"0%",
    ease:"expo.inOut",
    // opacity:0,
    scrollTrigger:{
        trigger:".question3",
        scroller:"body",
        start:"top 55%",
        end:"top 55%",
        scrub:2,
        // markers:true
    }
})
// gsap.to(".circle",{
//     rotate:-90,
//     scrollTrigger:{
//         trigger:".page4",
//         scroller:"body",
//         start:"top 20%",
//         end:"bottom 60%",
//         scrub:1,
//         markers:true
//     }
// })
// Shery.imageEffect(".cardimg",{
//     style:2,
//     debug:true
// })
// document.querySelector(".card").addEventListener("mousemove",function(e){
//     gsap.to(".incircle",{
//         left:e.clientX,
//         top:e.clientY,
//         scale:2
//     })
// }
// )