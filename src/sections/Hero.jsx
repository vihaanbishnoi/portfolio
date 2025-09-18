/* 
Home page (Sticky Navbar + Liquid Ether Animation)
About me, Work experience and Skills
Projects (Filterable Gallery)
Contact (Form with validation)
Footer (Social media links (Icons with links to LinkedIn, GitHub))
*/
import React from 'react'
import LiquidEther from '../components/LiquidEther';

const Hero = () => {
  return (
    <section id='Hero'>
      <div className="liquid-ether-container relative overflow-hidden w-full h-screen pointer-events-none touch-none">
        <LiquidEther />
      </div>
    </section>
  );
}

export default Hero
