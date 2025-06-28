import React from 'react'
import { featureLists, goodLists } from '../../Constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useMediaQuery} from 'react-responsive';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Art = () => {

	const isMobile = useMediaQuery({maxWidth: 767});

	useGSAP(() => {
		const start = isMobile ? 'top 0%' : 'top top';

		const maskTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.pin',
				start: start,
				end: 'bottom center',
				scrub: 1.5,
				pin: true
			}
		})

		maskTl
		.to('.fade-out', {
			opacity: 0,
			stagger: 0.2,
			duration: 5,
			ease: 'power1.inOut'
		})
		.to('.masked-img', {
			scale: 1.3,
			maskPosition: 'center',
			maskSize: '400%',
			duration: 5,
			ease: 'power1.inOut'
		}, '-=2')
		.to('.masked-content', {
			opacity: 1,
			duration: 2,
			ease: 'power1.inOut'
		}, '-=2')
	}, [])

	return (
		<section id='art' className=' min-h-dvh w-screen py-20 pt-40 md:pb-40'>
			<div className='pin container mx-auto h-full relative'>
				<h2 className='fade-out relative text-8xl md:text-[20vw] text-nowrap leading-none font-modern-negra text-center bg-clip-text text-[#505050]'>
					The Art
				</h2>

				<div className='content'>
					<div className='art-img w-full h-[70vh] md:w-[60vw] md:h-[70vh] rounded-2xl overflow-hidden absolute top-0 left-0 md:top-1/2 md:-translate-y-[60%] md:left-1/2 md:-translate-x-1/2'>
						<img 
							src="/images/under-img.jpg" 
							alt="art image" 
							className='masked-img abs-center size-full object-contain'
						/>
					</div>

					<div className='relative mt-48 md:mt-20 flex flex-col justify-between gap-5 md:flex-row'>
						<ul className='space-y-2 md:space-y-4 fade-out text-sm md:text-base'>
							{goodLists.map((feature, i) => (
								<li className='flex items-center gap-2 w-fit md:w-60'>
									<img src="/images/check.png" alt="check mark" className='size-4' />
									<p>{feature}</p>
								</li>
							))}
						</ul>

						<ul className='space-y-2 md:space-y-4 fade-out self-end md:self-auto text-sm md:text-base'>
							{featureLists.map((feature, i) => (
								<li className='flex items-center gap-2 w-fit md:w-60'>
									<img src="/images/check.png" alt="check mark" className='size-4' />
									<p>{feature}</p>
								</li>
							))}
						</ul>
					</div>

					<div className='masked-container mt-4 text-center bg-black'>
						<h3 className='fade-out text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-10'>
							Sip Worthy Perfection
						</h3>

						<div className='masked-content flex flex-col items-center w-full opacity-0 md:px-0 px-5 space-y-5 absolute md:-bottom-20 lg:-bottom-6 bottom-10 left-1/2 -translate-x-1/2'>
							<h2 className='md:text-5xl text-2xl text-center font-serif font-semibold md:w-full w-80 text-white'>Made with craft, Poured with Passion</h2>
							<p className='text-lg w-full'>This isn't just a drink. It's a carefully crafted moment made just for you</p>
						</div>
					</div>

				</div>
				
				<div className='masked-content size-30 rotate-20 absolute top-10 left-0 opacity-0 hidden md:block'>
					<img src="/images/drink4.png" alt="" />
				</div>
			
				<div className='masked-content size-30 absolute bottom-10 md:bottom-10 right-0 -rotate-10 opacity-0 -z-1 hidden md:block'>
					<img src="/images/drink3.png" alt="" />
				</div>
			</div>
		</section>
	)
}

export default Art