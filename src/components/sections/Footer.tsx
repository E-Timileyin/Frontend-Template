import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(logoRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const footerLinks = {
    "Company": ["About", "Services", "Gallery", "News", "Contact"],
    "Services": ["Interior Design", "Furniture Design", "Consultation", "Custom Projects"],
    "Support": ["Help Center", "Care Guide", "Warranty", "Returns"]
  };

  return (
    <footer ref={footerRef} className="bg-secondary-900 text-white">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left Side - Brand */}
            <div ref={logoRef} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold">
                  Tonelli<span className="font-light">design</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg font-medium">Stay Informed.</p>
                  <p className="text-lg font-medium">Stay Inspired.</p>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="space-y-4 max-w-md">
                <p className="text-gray-300">
                  Subscribe to receive updates on our latest collections and design insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-accent-500 text-secondary-900 font-medium rounded-r-lg hover:bg-accent-400 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Links */}
            <div ref={contentRef} className="grid sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h3 className="font-medium text-white">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 TonelliDesign. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};