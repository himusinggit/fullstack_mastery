gsap.from(".p1 .box",{
    scale:0,
    delay:0.5,
    duration:1,
})
gsap.from(".p2 h1",{
    opacity:0,
    x:200,
    duration:0.8,
    scrollTrigger:{
        trigger:".p2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
gsap.from(".p2 h2",{
    opacity:0,
    x:-200,
    duration:0.8,
    scrollTrigger:{
        trigger:".p2 h2",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
gsap.from(".p3 .box",{
    scale:0,
    delay:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".p3 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        scrub:true,
        pin:true
    }
})