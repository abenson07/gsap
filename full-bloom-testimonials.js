// GSAP Docs: https://greensock.com/docs/v3/GSAP/Timeline
// Looping and callbacks: https://greensock.com/docs/v3/GSAP/Timeline/callbacks

// Select all testimonial elements (update selector as needed)
const testimonials = document.querySelectorAll('[data-animation="testimonial"]');

if (testimonials.length > 0) {
  // Hide all testimonials initially
  gsap.set(testimonials, { opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%' });
  // Show the first testimonial
  gsap.set(testimonials[0], { opacity: 1 });

  let current = 0;
  const duration = 1; // Fade duration in seconds
  const displayTime = 2; // Time each testimonial stays visible

  function showNextTestimonial() {
    const next = (current + 1) % testimonials.length;
    const tl = gsap.timeline({
      onComplete: () => {
        current = next;
        setTimeout(showNextTestimonial, displayTime * 1000);
      }
    });
    tl.to(testimonials[current], { opacity: 0, duration, ease: 'power2.inOut' })
      .to(testimonials[next], { opacity: 1, duration, ease: 'power2.inOut' }, '<');
    // Docs: https://greensock.com/docs/v3/GSAP/Timeline
  }

  // Start the loop after initial display time
  setTimeout(showNextTestimonial, displayTime * 1000);
}

// Usage:
// 1. Add data-animation="testimonial" to each testimonial element, stacked in the DOM.
// 2. Adjust duration and displayTime as needed.
// 3. See GSAP timeline docs: https://greensock.com/docs/v3/GSAP/Timeline 