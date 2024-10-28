import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        markers:true,
        pin:true
        
    }
});
tl.to(".video",{
    "--clip":"0%",
},"a")
tl.to(".textcontent h1",{
    scale:1
},"a")
// .to(".textcontent",{
//     flexDirection:'column',
//     ease:"power2.out"
// },"b")
.to(".innertext",{
    width:"100%",
})