import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const App = () => {
  return (
    <main>
      
      <Navbar />

      <Hero />

      {/* <section className='h-dvh w-screen bg-blue-200'/> */}
      
    </main>
  )
}

export default App