import React, {useEffect, useRef, useState} from 'react';
import { navLinks } from '../../Constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useWindowScroll } from 'react-use';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {

	const [lastScrollY, setlastScrollY] = useState(0);
	const [isNavVisible, setisNavVisible] = useState(true);

	const navRef = useRef();

	const { y: currentScrollY } = useWindowScroll();

	// Track Scroll direction and display nav on scrolling up
	useEffect(() => {

		if (!navRef.current) return;

		if (currentScrollY === 0) {
			setisNavVisible(true);
			navRef.current.classList.remove('blurred-nav');
		}

		else if (currentScrollY > lastScrollY) {
			setisNavVisible(false);
			navRef.current.classList.add('blurred-nav');
		}

		else if (currentScrollY < lastScrollY) {
			setisNavVisible(true);
			navRef.current.classList.add('blurred-nav');
		}

		setlastScrollY(currentScrollY);

	}, [currentScrollY])
	

	useGSAP(() => {
		gsap.to(navRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: .3,
			ease: 'power1.inOut'
		});
	}, [isNavVisible])
	
	

	return (
		<nav ref={navRef} className='fixed transition-all duration-300'>
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