// Template for GSAP scroll-triggered nav animation
// GSAP Docs: https://greensock.com/docs/v3/GSAP/Timeline
// Event handling: https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event
// Stagger Docs: https://greensock.com/docs/v3/Staggers

// Ensure GSAP is loaded in your project
// import gsap from 'gsap'; // Uncomment if using modules

// Select all nav items with the data attribute
const navItems = document.querySelectorAll('[data-animation="nav-scroll"]');

// Set initial state: visible (y: 0, opacity: 1)
gsap.set(navItems, { y: 0, opacity: 1 });

// Create a GSAP timeline (paused by default)
const navTimeline = gsap.timeline({ paused: true });

// Animate nav items up and fade out when scrolling down
navTimeline.to(navItems, {
  y: -20, // Move up 20px
  opacity: 0, // Fade out
  duration: 0.5,
  ease: 'power2.out',
  stagger: 0.1, // Stagger each item
  // See: https://greensock.com/docs/v3/Staggers
});

// Track last scroll position
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    // Scrolling down: hide nav items
    navTimeline.play();
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up: show nav items
    navTimeline.reverse();
  }
  lastScrollY = currentScrollY;
});

// Usage:
// 1. Add data-animation="nav-scroll" to each nav item you want animated.
// 2. Nav items are visible by default. Scrolling down hides them, scrolling up shows them.
// 3. Adjust animation properties as needed.
// 4. See GSAP timeline docs: https://greensock.com/docs/v3/GSAP/Timeline
// 5. See GSAP stagger docs: https://greensock.com/docs/v3/Staggers 