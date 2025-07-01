import React, {useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import {useMediaQuery} from 'react-responsive';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {

	const videoRef = useRef(null);

	const isMobile = useMediaQuery({maxWidth: 767});

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

		const startValue = isMobile ? 'top 50%' : 'center 60%';
		const endValue = isMobile ? '120% top' : 'bottom top';

		// Video Animation
		const videoTl = gsap.timeline({
			scrollTrigger: {
				trigger: 'video',
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true
			}
		});

		videoRef.current.onloadedmetadata = () => {
			videoTl.to(videoRef.current, {
				currentTime: videoRef.current.duration
			});
		}

	}, []);

  return (
	<div className=''>
		<section id="hero" className='noisy radial-gradient'>
			<h1 className='title'>MOJITO</h1>

			<img 
				src="/images/hero-left-leaf.png" 
				alt="left leaf"
				className='hero-leaf left-leaf absolute left-0 -bottom-16 md:bottom-16 lg:bottom-10' 
			/>

			<img 
				src="/images/hero-right-leaf.png" 
				alt="right leaf"
				className='hero-leaf right-leaf absolute right-0 top-1/2 -translate-y-1/3 md:translate-y-[-50%] lg:translate-y-[-60%]' 
			/>

			<div className="body container mx-auto absolute left-1/2 -translate-x-1/2 top-auto md:top-[42vh] lg:bottom-10 px-2">
				<div className="content flex flex-col lg:flex-row gap-10 w-full justify-between items-center lg:items-end mx-auto size-full">
					<div className='space-y-5 hidden lg:block max-w-md'>
						<p className='text-lg'>Cool. Crisp. Classic.</p>
						<p className='subtitle font-modern-negra text-6xl text-yellow'>
							Sip the Spirit <br />of Summer
						</p>
					</div>

					<div className='view-cocktails space-y-5 text-center lg:text-start text-base lg:text-lg max-w-md md:max-w-md lg:max-w-2xs'>
						<p className='subtitle mix-blend-difference'>
							Every cocktail on our menu is a balance of premiun ingredients, creative flair, and timeless recipes
							- designed to delight your senses.
						</p>

						<a href='#cocktails' className='underline-dashed hover:text-yellow font-semibold opacity-80'>View cocktails</a>
					</div>
				</div>
			</div>
		</section>

		<div className='video absolute bottom-0 left-0 w-full h-1/2 md:h-[80%] object-bottom'>
			<video 
				ref={videoRef}
				src="/videos/output.mp4"
				muted
				playsInline
				preload='auto'
				className='object-bottom object-cover md:object-contain size-full'
			/>
		</div>
	</div>
  )
}

export default Hero