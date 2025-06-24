import React from 'react'
import Navbar from './Components/Navbar'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
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
      
    </main>
  )
}

export default App