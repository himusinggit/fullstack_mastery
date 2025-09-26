gsap.to(".p2 h1",{
    transform: "translateX(-125%)",
    scrollTrigger: {
        trigger:".p2",
        scroller: "body",
        markers: true,
        start:"top 0%",
        end:"top -150%",
        scrub:1,
        pin:true
    }
})

let path="M 10 90 Q 750 90 1500 90";
let finalPath="M 10 90 Q 750 90 1500 90";
let string=document.querySelector(".string");
string.addEventListener("mousemove",(e)=>{
    gsap.to("svg path",{
        duration:0.3,
        attr:{
            d:`M 10 90 Q ${e.clientX} ${e.clientY-string.getBoundingClientRect().top} 1500 90`
        }
    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{

        ease: "elastic.out(1,0.1)",
        duration:1.5,
        attr:{
            d:finalPath
        }
    })
})