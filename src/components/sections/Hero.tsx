import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 });
      
      tl.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center pt-16 lg:pt-20 bg-primary-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                ref={titleRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-light text-secondary-900 leading-tight"
              >
                The New
                <br />
                <span className="font-bold">Modernism</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg lg:text-xl text-secondary-600 leading-relaxed max-w-lg"
              >
                Experience timeless design that transcends trends. We help brands, 
                creatives bring their vision to life through sophisticated design 
                systems, distinctive visual identities, and purposeful aesthetics.
              </p>
            </div>

            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Explore Collection
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-primary-200">
              <img
                src="https://images.pexels.com/photos/6899258/pexels-photo-6899258.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-2">
                Substance in Beauty
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Every piece tells a story of craftsmanship, innovation, and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};