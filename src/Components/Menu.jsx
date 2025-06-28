import React, { useRef, useState } from 'react'
import { cocktailSlides } from '../../Constants/index'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Menu = () => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const totalCocktails = cocktailSlides.length;
	const contentRef = useRef(null);

	const goToSlide = (index) => {
		const newIndex = (index + totalCocktails) % totalCocktails;

		setCurrentIndex(newIndex);
	}

	const getCocktailAt = (indexOffset) => {
		return cocktailSlides[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
	}

	const currentCocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);


	useGSAP(() => {
		gsap.fromTo('#title', {
			opacity: 0
		}, {
			opacity: 1,
			duration: 1,
			ease: 'power1.inOut'
		});

		gsap.fromTo('.cocktail-img', {
			opacity: 0,
			xPercent: -100
		}, {
			opacity: 1,
			xPercent: 0,
			duration: 1,
			ease: 'power1.inOut'
		});

		gsap.fromTo('.details', {
			opacity: 0,
			yPercent: 100
		}, {
			opacity: 1,
			yPercent: 0,
			duration: 1,
			ease: 'power1.inOut',
			stagger: 0.3
		});

		const leafTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#menu',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			}
		});

		const leftLeafTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#menu',
				start: 'bottom bottom',
				end: 'bottom top',
				scrub: true
			}
		});

		leafTl.to('#right-leaf', {
			y: 400
		})
		leftLeafTl.to('#left-leaf', {
			y: -150
		})

	}, [currentIndex])

	return (
		<section id='menu' aria-labelledby='menu-heading' className='radial-gradient relative min-h-dvh w-screen py-20 lg:pb-40'>
			<div id='left-leaf' className='size-30 md:size-50 absolute bottom-0 left-0'>
				<img src="/images/slider-left-leaf.png" alt="left leaf" />
			</div>

			<div id='right-leaf' className='size-30 md:size-50 absolute top-0 right-0'>
				<img src="/images/slider-right-leaf.png" alt="right leaf" />
			</div>


			<div className='container relative'>
				<h2 id='menu-heading' className='sr-only'>
					Cocktail Menu
				</h2>

				<nav className='grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-20 z-10 relative mx-auto max-w-6xl sm:mb-22 mb-20'>
					{cocktailSlides.map((cocktail, i) => {
						const isActive = i === currentIndex;

						return (
							<button 
								key={cocktail.id} 
								className={`${isActive ? 
									'text-white border-b-2 border-b-white' :
									'text-white/50 border-b-2 border-b-white/50'} text-xl md:text-2xl hover:text-yellow hover:border-yellow transition-colors duration-300 font-modern-negra`}
								onClick={() => goToSlide(i)}>

								{cocktail.name}
							
							</button>
						);
					})}
				</nav>

				<div className='relative flex flex-col justify-between items-center'>
					<div className='arrows flex items-center justify-between w-full absolute top-60 md:top-40'>
						<button className='text-white hover:text-yellow cursor-pointer transition-colors max-w-36' onClick={() => goToSlide(currentIndex - 1)}>
							<span className='text-3xl font-modern-negra leading-none hidden'>{prevCocktail.name}</span>
							<img src="/images/right-arrow.png" alt="right arrow" aria-hidden='true' className='size-8'/>
						</button>
						
						<button className='felx flex-col items-end text-white hover:text-yellow cursor-pointer transition-colors max-w-36' onClick={() => goToSlide(currentIndex + 1)}>
							<span className='text-3xl font-modern-negra leading-none hidden'>{nextCocktail.name}</span>
							<img src="/images/left-arrow.png" alt="left arrow" aria-hidden='true' className='size-8 self-end'/>
						</button>
					</div>

					<div className='cocktail-img flex-center mt-10'>
						<img src={currentCocktail.image} alt="Cocktail" className='object-contain h-[60vh]' />
					</div>

					<div className='flex max-md:flex-col gap-10 md:items-end justify-between w-full lg:absolute bottom-0'>
						<div ref={contentRef} className='space-y-4 lg:translate-y-20'>
							<p>Recipe for:</p>
							<p id='title' className='font-modern-negra md:text-6xl text-3xl text-yellow max-w-40'>{currentCocktail.name}</p>
						</div>

						<div className='details space-y-5 md:max-w-md text-left lg:translate-y-20'>
							<h2 className='md:text-5xl text-3xl font-serif'>{currentCocktail.title}</h2>
							<p className='md:text-lg pe-5'>{currentCocktail.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Menu