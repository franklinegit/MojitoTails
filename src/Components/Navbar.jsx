import React, {useEffect} from 'react';
import { navLinks } from '../../Constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {

	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
				// end: 'bottom top',
				// toggleActions: 'play none none none'
			}
		});

		navTween.fromTo('nav', {
			backgroundColor: 'transparent'
		}, {
			backgroundColor: '#00000050',
			backdropFilter: 'blur(10px)',
			duration: 1,
			ease: 'power1.inOut'
		});
	}, []);
	

	return (
		<nav>
			<div>
				<a href="#home" className='flex items-center gap-2'>
					<img src="/images/logo.png" alt="logo" />
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} className='hover:text-white/50 transition-all duration-300'>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar