import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial dots animation
      gsap.set(dotsRef.current, { scale: 0.8, opacity: 0.6 });
      
      const tl = gsap.timeline({ repeat: 2 });
      
      tl.to(dotsRef.current, {
        scale: 1.2,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.inOut",
      })
      .to(dotsRef.current, {
        scale: 0.8,
        opacity: 0.6,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.inOut",
      })
      .call(() => {
        // Exit animation
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-100"
    >
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) dotsRef.current[index] = el;
            }}
            className="w-3 h-3 bg-secondary-900 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};