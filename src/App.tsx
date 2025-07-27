import React, { useState, useLayoutEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { News } from './components/sections/News';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Services />
            <Gallery />
            <News />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;