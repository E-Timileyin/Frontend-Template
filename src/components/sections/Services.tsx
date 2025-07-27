import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Rooted in Craft",
      subtitle: "Driven by Vision",
      description: "Our heritage in traditional glassmaking techniques combined with contemporary design innovation creates furniture that stands the test of time.",
      image: "https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Every Piece",
      subtitle: "Tells A Story",
      description: "From conception to completion, each design carries the narrative of craftsmanship, innovation, and the pursuit of perfection in every detail.",
      image: "https://images.pexels.com/photos/6899266/pexels-photo-6899266.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-32 bg-white">
      <Container>
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-light text-secondary-900 leading-tight max-w-4xl mx-auto">
            TonelliDesign is a creative studio built on the belief that design is not decoration, it's storytelling.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-display font-light text-secondary-900">
                    {service.title}
                  </h3>
                  <h4 className="text-2xl lg:text-3xl font-display font-bold text-secondary-900">
                    {service.subtitle}
                  </h4>
                </div>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};