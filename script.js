 
 function locomotivejs(){
    gsap.registerPlugin(ScrollTrigger);
 
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

  
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
ScrollTrigger.refresh();


 }
 locomotivejs();

function logoanimation(){
    gsap.to(".navpart1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
          trigger: ".page1",
          scroller: ".main",
          start: "top 0",
          end: "top -5%",
          scrub: 1,
        },
      });
      gsap.to(".navpart2 .links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
          trigger: ".page1",
          scroller: ".main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
}
logoanimation();
function lodingani(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.9,
        stagger:0.5
    })
}
lodingani();
function hoverEffect(){
  document.addEventListener("mousemove",(dets)=>{
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
    })
});

document.querySelectorAll(".child").forEach((elem)=>{

    elem.addEventListener("mouseenter",()=>{
        gsap.to(".cursor",{
            transform: `translate(-50%,-50%) scale(1)`
        })
    })
})
document.querySelectorAll(".child").forEach((elem)=>{

    elem.addEventListener("mouseleave",()=>{
        gsap.to(".cursor",{
            transform: `translate(-50%,-50%) scale(0)`
             
        })
    })
})}
hoverEffect()

