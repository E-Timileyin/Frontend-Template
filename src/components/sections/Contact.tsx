import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 lg:py-32 bg-primary-100">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-light text-secondary-900 leading-tight">
                Ready to Elevate
                <br />
                <span className="font-bold">Your Space?</span>
              </h2>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Let's create something extraordinary together. Get in touch to discuss your vision 
                and discover how our expertise can transform your space with timeless design.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project and vision..."
                />
              </div>
              
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-primary-200">
              <img
                src="https://images.pexels.com/photos/6899280/pexels-photo-6899280.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern interior consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};