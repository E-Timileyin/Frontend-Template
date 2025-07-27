import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const createFadeUpAnimation = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(element, 
    { 
      y: 60, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out",
      ...options 
    }
  );
};

export const createStaggerAnimation = (elements: string | Element[], options?: gsap.TweenVars) => {
  return gsap.fromTo(elements,
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      ...options
    }
  );
};

export const createScrollTriggerAnimation = (
  trigger: string | Element,
  element: string | Element,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(element,
    {
      y: 80,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      ...options
    }
  );
};

export const createPreloaderAnimation = () => {
  const tl = gsap.timeline();
  
  tl.to(".preloader-dot", {
    scale: 1.5,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });

  return tl;
};