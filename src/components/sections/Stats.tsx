import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

gsap.registerPlugin(ScrollTrigger);

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(statsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      number: "21+",
      label: "Years of Experience",
      description: "Pioneering glass furniture design and innovative manufacturing techniques"
    },
    {
      number: "200+",
      label: "Unique Designs",
      description: "Curated collection of contemporary furniture pieces that define modern living"
    },
    {
      number: "100+",
      label: "Global Partners",
      description: "International collaborations with leading architects and interior designers"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <p className="text-secondary-600 text-lg mb-4">Since 1980</p>
          <h2 className="text-3xl lg:text-4xl font-display font-light text-secondary-900 max-w-3xl mx-auto leading-tight">
            That design is not decoration, it's storytelling. We help brands, 
            creatives bring their vision to life through sophisticated design 
            systems, distinctive visual identities, and purposeful aesthetics.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) statsRef.current[index] = el;
              }}
              className="text-center space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900">
                  {stat.number}
                </h3>
                <h4 className="text-lg font-medium text-secondary-800">
                  {stat.label}
                </h4>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};