document.addEventListener('DOMContentLoaded', () =>{

    const lenis = new Lenis({autoRaf: true,});

    const ease = "power4.inOut";


    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (e) =>{
            e.preventDefault();
            const href = link.getAttribute("href");


            if((href && !href.startsWith("#")) && (href !== window.location.href)){
                animateTransition().then(()=>{
                    window.location.href = href;
                })
            }

        })
    })

    revealTransition().then(()=>{
        gsap.set(".block", { visibility : "hidden"});
    })

    function revealTransition(){
        return new Promise((resolve)=>[
            gsap.set(".block", { scaleY : 1}),
            gsap.to(".block", {
                scaleY : 0,
                duration: 1,
                stagger: {
                    each: 0.1,
                    from: "start",
                    grid: "auto",
                    axis: "x"
                },
                ease: ease,
                onComplete: resolve
            })
        ])
    }

    function animateTransition(){
        return new Promise((resolve)=>{
            gsap.set(".block", { visibility : "visible", scaleY: 0});
            gsap.to(".block", {
                scaleY: 1,
                duration: 1,
                stagger: {
                    each: "0.1",
                    from: "start",
                    grid: [2, 5],
                    axis: "x"
                },
                ease: ease,
                onComplete: resolve
            })
        })
    }

    gsap.fromTo(".enter-animation", 
        {
            y: -100, opacity: 0
        }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 0.7, 
            ease: "power4.out", 
            delay: 0.8
        }
    );

});