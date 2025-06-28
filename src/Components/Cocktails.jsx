import React from 'react'
import { cocktailLists, mockTailLists } from '../../Constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useMediaQuery} from 'react-responsive';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Cocktails = () => {

	const isMobile = useMediaQuery({maxWidth: 767});

	const start = isMobile ? 'top -20%' : 'top 20%';
	const end = isMobile ? 'bottom 50%' : 'bottom 50%';

	useGSAP(() => {
		const parallaxTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#cocktails',
				start: start,
				end: end,
				scrub: true
			}
		});

		parallaxTl
		.from('#c-left-leaf', {
			x: -100,
			y: 100
		})
		.from('#c-right-leaf', {
			x: 100,
			y: 100
		}, '<')
	})

  return (
	<section id='cocktails' className='noisy relative min-h-dvh w-full'>
		<img src="/images/cocktail-left-leaf.png" alt="" id='c-left-leaf' className='size-1/3 md:size-fit object-contain absolute left-0 -bottom-20 md:bottom-0'/>
		<img src="/images/cocktail-right-leaf.png" alt="" id='c-right-leaf' className='size-1/3  md:size-fit object-contain absolute right-0 -bottom-20 md:bottom-0'/>

		<div className="list container mx-auto px-2 z-10 relative flex flex-col md:flex-row justify-between items-start gap-20 pt-20 md:pt-40 pb-20">
			<div className="popular space-y-8 w-full md:w-fit">
				<h2>Most Popular Cocktails</h2>

				<ul className='space-y-8'>
					{cocktailLists.map(({name, country, detail, price}) => (
						<li key={name} className='flex justify-between items-start'>
							<div className='md:me-28'>
								<h3 className='name'>{name}</h3>
								<p className='text-sm'>{country} | {detail}</p>
							</div>
							<span className='text-xl font-medium'>- {price}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="loved space-y-8 w-full md:w-fit pb-20 md:pb-0">
				<h2>Most Loved Mocktails</h2>

				<ul className='space-y-8'>
					{mockTailLists.map(({name, country, detail, price}) => (
						<li key={name} className='flex justify-between items-start'>
							<div className='md:me-28'>
								<h3 className='name'>{name}</h3>
								<p className='text-sm'>{country} | {detail}</p>
							</div>
							<span className='text-xl font-medium'>- {price}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
  )
}

export default Cocktails