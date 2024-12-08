// Initialize Smooth Scrollbar
let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
});

// ScrollTrigger Scroller Proxy
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;  // Update scrollTop on smooth scroll
        }
        return bodyScrollBar.scrollTop; // Return the current scroll position
    },
});

bodyScrollBar.addListener(ScrollTrigger.update); // Update ScrollTrigger whenever the smooth scroll position changes

// Panel Animations
gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
var images = gsap.utils.toArray('.panel:not(.teal)');
images.forEach((image, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".black",
            scroller: ".scroller",  // Link scroll to the smooth scroll container
            start: () => "top -" + (window.innerHeight * (i + 0.5)),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
            markers: false, // Disable markers for cleaner output
        }
    });
    // Use opacity instead of height for smoother animations
    tl.to(image, { opacity: 0 });
});

// Text Animations
gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
var texts = gsap.utils.toArray('.panel-text');
texts.forEach((text, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".black",
            scroller: ".scroller",  // Link scroll to the smooth scroll container
            start: () => "top -" + (window.innerHeight * i),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
            markers: false, // Disable markers for cleaner output
        }
    });
    tl.to(text, { duration: 0.33, opacity: 1, y: "50%" })
      .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
});

// Create ScrollTrigger for Pinning
ScrollTrigger.create({
    trigger: ".black",
    scroller: ".scroller",  // Link scroll to the smooth scroll container
    scrub: true,
    markers: true,
    pin: true,
    start: "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,
    pinSpacing: false, // Disable pin spacing to avoid layout shift
});