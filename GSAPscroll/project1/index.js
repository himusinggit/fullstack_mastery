gsap.registerPlugin(ScrollTrigger);
gsap.to('.object', {
    x:1000,duration:1,
    ease:'linear',
    scrollTrigger:{
        trigger:'.object',
        start:'top 80%',
        markers:true,
    }
});

