// GSAP Timeline Docs: https://greensock.com/docs/v3/GSAP/Timeline
// ScrollTrigger Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger
// Cubic Bezier Docs: https://greensock.com/docs/v3/Eases#custom

// Ensure GSAP and ScrollTrigger are loaded in your project
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function () {
  const heroTimeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'cubic-bezier(0.86,0.13,0.404,0.773)' // Custom cubic-bezier
    }
  });

  // Set .homeHero-name to 0% opacity (starts 0.3s after start)
  heroTimeline.to('.homehero-name', {
    opacity: 0,
    duration: 0.3
  }, 0);


  // Set .homeHero-label.middle to 100% opacity (starts 0.3s after start)
  heroTimeline.to('.homehero-label.middle', {
    opacity: 1,
    duration: 0.3
  }, .3);

  //  Move .homeHero-label.top up 100% and set opacity to 70%
  heroTimeline.to('.homehero-label.top', {
    y: '-100%',
    opacity: 0.7,
    duration: 0.5
  }, .5); // Start at 0s

  // Move .homeHero-label.bottom down 100% and set opacity to 20% (simultaneous)
  heroTimeline.to('.homehero-label.bottom', {
    y: '100%',
    opacity: 0.2,
    duration: 0.5
  }, .7); // Start at 0s

  



  // Set up ScrollTrigger to play the timeline when .layoutContainer_hero top crosses -5% viewport
  ScrollTrigger.create({
    trigger: '.layoutcontainer_hero',
    start: 'top -5%', // When top of trigger is 5% above viewport top
    onEnter: () => heroTimeline.play(),
    // Optionally, you can add onLeaveBack: () => heroTimeline.reverse(),
    // See: https://greensock.com/docs/v3/Plugins/ScrollTrigger
  });
});

// Usage:
// 1. Ensure GSAP and ScrollTrigger are loaded and registered.
// 2. Add the appropriate classes to your HTML elements.
// 3. Adjust selectors and timing as needed.
// 4. See GSAP and cubic-bezier docs for further customization. 