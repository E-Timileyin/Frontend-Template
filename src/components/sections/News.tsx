import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { CalendarDays, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const News: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement[]>([]);

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

      gsap.fromTo(articlesRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: articlesRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const newsArticles = [
    {
      title: "What Sets The New Modernism 2024",
      excerpt: "The philosophy of The New Modernism 2024 influences our visual foundation and experience...",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/6899272/pexels-photo-6899272.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Event Trends on The New Edition",
      excerpt: "Explore how contemporary design principles are reshaping the future of furniture and interior spaces...",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/6899274/pexels-photo-6899274.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Glass Innovation Leads The New Modernism 2024",
      excerpt: "Discover the latest innovations in glass furniture design and how they're defining contemporary living...",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/6899276/pexels-photo-6899276.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Future Collections Leads The New Modernism 2024",
      excerpt: "Preview our upcoming furniture collections that will define the next generation of modern design...",
      date: "February 28, 2024",
      image: "https://images.pexels.com/photos/6899278/pexels-photo-6899278.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section ref={sectionRef} id="news" className="py-20 lg:py-32 bg-white">
      <Container>
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-light text-secondary-900 leading-tight mb-6">
            Read Our Latest
            <br />
            News On Innovations
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed max-w-2xl mx-auto">
            Stay informed about our latest design innovations, industry insights, and upcoming collections that shape the future of contemporary furniture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              ref={(el) => {
                if (el) articlesRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-primary-200 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-secondary-500">
                    <CalendarDays size={16} className="mr-2" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold text-secondary-900 leading-tight group-hover:text-accent-500 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-secondary-800 group-hover:text-accent-500 transition-colors duration-300">
                    Read More
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};