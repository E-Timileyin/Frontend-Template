import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(contentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-32 bg-primary-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-secondary-600 text-lg">About Tonelli Design</p>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-light text-secondary-900 leading-tight">
                  Born in the 1980s from a deep passion for research and experimentation
                </h2>
              </div>
              
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p className="text-lg">
                  Since the 1980s from a deep passion for research and experimentation, Tonelli 
                  Design has become a touchstone in the world of glass furniture design.
                </p>
                <p>
                  Our commitment to innovation and excellence has established us as pioneers 
                  in contemporary furniture manufacturing. Each piece reflects our dedication 
                  to combining traditional craftsmanship with cutting-edge design philosophy.
                </p>
                <p>
                  We believe that great design transcends mere functionality—it tells a story, 
                  evokes emotion, and creates spaces that inspire and transform daily life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-display font-bold text-xl text-secondary-900 mb-2">
                  Design Philosophy
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Every creation embodies our belief that form and function should exist in perfect harmony.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-secondary-900 mb-2">
                  Craftsmanship
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Meticulous attention to detail and traditional techniques merged with innovative processes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-primary-200">
              <img
                src="https://images.pexels.com/photos/6899254/pexels-photo-6899254.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Glass furniture design process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};