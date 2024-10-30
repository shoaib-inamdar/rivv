import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'

const lenis = new Lenis();

lenis.on('scroll');

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


var x=window.matchMedia("(min-width:600px)")

gsap.registerPlugin(ScrollTrigger);
gsap.set(".textcontent h1",{
    scale:100
})
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