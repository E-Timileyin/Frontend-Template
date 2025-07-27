import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Container } from '../ui/Container';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLNavElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-primary-200">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl lg:text-3xl font-display font-bold text-secondary-900">
              Tonelli<span className="font-light">Design</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-secondary-700 hover:text-secondary-900 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-secondary-700 hover:text-secondary-900 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-secondary-700 hover:text-secondary-900 transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};