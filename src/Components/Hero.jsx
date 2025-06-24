import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {

	useGSAP(() => {
		const heroSplit = new SplitText('.title', { type: 'chars, words' });
		const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

		heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			opacity: 0,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.06
		});

		gsap.from(paragraphSplit.lines, {
			yPercent: 100,
			opacity: 0,
			duration: 1.8,
			delay: 1,
			ease: 'expo.out',
			stagger: 0.06
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: 0.5
			}
		})
		.to('.right-leaf', {y: 50})
		.to('.left-leaf', {y: -200}, '<')


	}, []);

  return (
	<>
		<section id="hero" className='noisy'>
			<h1 className='title'>MOJITO</h1>

			<img 
				src="/images/hero-left-leaf.png" 
				alt="left leaf"
				className='hero-leaf left-leaf' 
			/>

			<img 
				src="/images/hero-right-leaf.png" 
				alt="right leaf"
				className='hero-leaf right-leaf' 
			/>

			<div className="body container mx-auto absolute left-1/2 -translate-x-1/2 top-auto md:top-[42vh] lg:bottom-10 px-2 md:px-5">
				<div className="content flex flex-col lg:flex-row gap-10 w-full justify-between items-center lg:items-end mx-auto size-full">
					<div className='space-y-5 hidden lg:block max-w-md'>
						<p className='text-lg'>Cool. Crisp. Classic.</p>
						<p className='subtitle font-modern-negra text-6xl text-yellow'>
							Sip the Spirit <br />of Summer
						</p>
					</div>

					<div className='view-cocktails space-y-5 text-center lg:text-start text-lg max-w-md md:max-w-md lg:max-w-2xs'>
						<p className='subtitle'>
							Every cocktail on our menu is a balance of premiun ingredients, creative flair, and timeless recipes
							- designed to delight your senses.
						</p>

						<a className='hover:text-yellow font-semibold opacity-80'>View cocktails</a>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default Hero