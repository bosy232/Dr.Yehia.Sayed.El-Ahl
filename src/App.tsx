import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Articles from './components/Articles';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Articles />
          <Contact />
        </main>
        <footer className="bg-teal-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Dr. Yehia Sayed El-Ahl. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App