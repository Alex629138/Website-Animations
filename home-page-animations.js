document.addEventListener("DOMContentLoaded", ()=>{
    //Stack boxes animation

    gsap.registerPlugin(ScrollTrigger);

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    document.querySelectorAll(".stack-box-hover").forEach((box)=>{
        box.addEventListener("mouseenter", ()=>{
            gsap.to(box, {
                scale: 1.1,
                rotate: "random(-10, 10)",
                duration: 0.3,
                ease: "power2.out"
            })
        })
    })


    let tl = gsap.timeline({
        scrollTrigger :{
        trigger: '.stack-container',
        start: 'top top',
        pin: true,
        end: 'bottom+=1024 top',
        scrub: true,
        // markers: true,
    }
    });

    tl.to(".stack-box-1", {
        scale: 3,
        duration: 1,
        y: 160,
        x: 400,
        boxShadow: "0px 0px 20px 5px rgb(111, 77, 56)",
        // rotate: "random(-10, 10)",
        zIndex: 1,
        ease: "power2.inOut"
    }, ">");

    tl.to(".stack-box-2", {
        scale: 3,
        duration: 1,
        y: 180,
        boxShadow: "0px 0px 20px 5px rgb(111, 77, 56)",
        // rotate: "random(-10, 10)",
        zIndex: 1,
        ease: "power2.inOut"
    }, ">");

    tl.to(".stack-box-3", {
        scale: 3,
        duration: 1,
        y: 200,
        x: -400,
        boxShadow: "0px 0px 20px 5px rgb(111, 77, 56)",
        // rotate: "random(-10, 10)",
        zIndex: 1,
        ease: "power2.inOut"
    }, ">");

    ScrollTrigger.refresh();
})