// GSAP Animations
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".cta-button", { duration: 1.5, scale: 0.8, opacity: 0, ease: "elastic.out(1, 0.3)", delay: 1 });
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
