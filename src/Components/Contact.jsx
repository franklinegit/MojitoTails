import React from 'react'
import { openingHours, socials } from '../../Constants'

const Contact = () => {
  return (
	<footer id='contact' className='relative radial-gradient min-h-dvh w-screen py-20 max-md:pb-50'>
		<img src="/images/footer-drinks.png" alt="footer drinks" className='size-50 absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0'/>
		<img src="/images/footer-left-leaf.png" alt="footer leaf" className='size-50 absolute bottom-0 left-0 hidden md:block' />

		<div className='container relative h-full flex flex-col items-center text-center'>
			<h2 className='font-modern-negra font-bold mb-10 text-center text-4xl md:text-6xl'>
				Where to Find Us
			</h2>

			<div className='space-y-2 mb-10'>
				<h4 className='uppercase font-semibold text-sm text-yellow'>Visit our store</h4>
				<p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
			</div>

			<div className='space-y-2 mb-10'>
				<h4 className='uppercase font-semibold text-sm text-yellow'>Contact us</h4>
				<div>
					<p>(555) 987-6543</p>
					<p>hello@jsmcocktail.com</p>
				</div>
			</div>

			<div className='space-y-2 mb-10'>
				<h4 className='uppercase font-semibold text-sm text-yellow'>Open every day</h4>

				<div>
					{openingHours.map((opening) => (
						<p>
							<span>{opening.day}: </span>
							<span>{opening.time}</span>
						</p>
					))}
				</div>
			</div>

			<div className='space-y-2'>
				<h4 className='text-center uppercase font-semibold text-sm text-yellow'>Socials</h4>

				<div className='flex items-center gap-10'>
					{socials.map((social) => (
						<a 
							href={social.url}
							target='blank'
							rel='noreferer'
							aria-label={social.name}>
							
							<img src={social.icon} alt="social icon" className='size-5' />
						</a>
					))}
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Contact