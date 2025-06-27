import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import {useMediaQuery} from 'react-responsive';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {

	useGSAP(() => {
		const paragraphs = gsap.utils.toArray('.paragraph');
		const grids = gsap.utils.toArray('.top-grid, .bottom-grid');

		paragraphs.forEach((paragraph) => {
			const split = new SplitText(paragraph, {type: 'lines'});
			const parentElement = paragraph.parentNode;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: parentElement,
					start: 'top 80%',
					toggleActions: 'play none none reverse'
				}
			});

			tl.from(split.lines, {
				yPercent: 100,
				opacity: 0,
				duration: 1,
				ease: 'expo.out',
				stagger: 0.06,
			});

			return () => split.revert();
		});

		grids.forEach((grid) => {
			const images = gsap.utils.toArray('.img-container', grid);

			gsap.from(images, {
				opacity: 0,
				y: 20,
				filter: 'blur(3px)',
				duration: .8,
				ease: 'power2.inOut',
				stagger: 0.16,
				scrollTrigger: {
					trigger: grid,
					start: 'top 90%',
					toggleActions: 'play none none reverse'
				}
			});
		});


	}, [])


	return (
		<section id='about' className=''>
			<div className='container mx-auto pt-40 px-2 md:px-5 mb-16'>
				<div className='content mb-16 flex flex-col gap-10 justify-between md:flex-row'>
					<div className='flex-1 flex flex-col justify-between gap-5 md:max-w-md'>
						<p className='px-4 py-2 bg-white text-black w-max rounded-full font-medium'>
							Best Cocktails
						</p>

						<h2 className='paragraph font-modern-negra text-4xl'>
							Where every detail
							matters <span className='text-white'>- </span>from muddle
							to garnish
						</h2>
					</div>

					<div className="sub-content flex-1 flex flex-col justify-between gap-5 md:max-w-md">
						<p className='paragraph'>
							Every cocktail we serve is a reflection of our obsession with detail - 
							from the first muddle to the final garnish. That care is what turns 
							a simple drink into something truly memorable.
						</p>

						<div className='grid grid-cols-2'>
							<div className='border-r-1 pr-2 flex flex-col justify-between gap-4'>
								<p className='flex items-center gap-1'>
									<span><img src="/images/star.svg"/></span>
									<span><img src="/images/star.svg"/></span>
									<span><img src="/images/star.svg"/></span>
									<span><img src="/images/star.svg"/></span>
									<span><img src="/images/star.svg"/></span>
								</p>

								<div>
									<p><span className='text-yellow font-bold text-xl'>4.5</span>/5</p>

									<p className='text-xs'>More than <b>+12000</b> customers</p>
								</div>
							</div>

							<div className='grid items-center justify-center '>
								<div className='profiles flex items-center rounded-full w-max px-3 py-2'>
									<img src="/images/profile1.png" className='profile '/>
									<img src="/images/profile2.png" className='profile -ml-2'/>
									<img src="/images/profile3.png" className='profile -ml-2'/>
									<img src="/images/profile4.png" className='profile -ml-2'/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='imgs grid grid-cols-1 gap-2'>
					<div className='top-grid grid grid-cols-1  md:grid-cols-5 lg:grid-cols-12 gap-2'>
						<div className='img-container col-span-1 md:col-span-2 lg:col-span-3'>
							<img src="/images/abt1.png" className='object-center' />
						</div>

						<div className='img-container col-span-1 md:col-span-3 lg:col-span-4'>
							<img src="/images/abt2.png"/>
						</div>

						<div className='img-container col-span-1 md:col-span-5 lg:col-span-5'>
							<img src="/images/abt2.png"/>
						</div>
					</div>

					<div className='bottom-grid grid grid-cols-1 md:grid-cols-12 gap-2'>
						<div className='img-container  col-span-1 md:col-span-7 lg:col-span-8'>
							<img src="/images/abt3.png"/>
						</div>

						<div className='img-container col-span-1 md:col-span-5 lg:col-span-4'>
							<img src="/images/abt4.png"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About