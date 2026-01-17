import React from 'react';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';
import Hero from './src/components/sections/Hero';
import About from './src/components/sections/About';
import Events from './src/components/sections/Events';
import Challenges from './src/components/sections/Challenges';
import Showcase from './src/components/sections/Showcase';
import Mentorship from './src/components/sections/Mentorship';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900 text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Events />
        <Challenges />
        <Showcase />
        <Mentorship />
      </main>
      <Footer />
    </div>
  );
};

export default App;