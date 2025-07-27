import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';

gsap.registerPlugin(ScrollTrigger);

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement[]>([]);

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

      gsap.fromTo(galleryRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6899270/pexels-photo-6899270.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Modern living room design"
    },
    {
      src: "https://images.pexels.com/photos/6899262/pexels-photo-6899262.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Contemporary furniture piece"
    },
    {
      src: "https://images.pexels.com/photos/6899264/pexels-photo-6899264.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Glass furniture detail"
    },
    {
      src: "https://images.pexels.com/photos/6899268/pexels-photo-6899268.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Interior design showcase"
    }
  ];

  return (
    <section ref={sectionRef} id="gallery" className="py-20 lg:py-32 bg-primary-50">
      <Container>
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-light text-secondary-900 leading-tight mb-6">
            Every Piece Tells A Story
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed max-w-2xl mx-auto">
            Discover our curated collection of contemporary furniture pieces that define modern living spaces with elegance and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) galleryRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-primary-200 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};