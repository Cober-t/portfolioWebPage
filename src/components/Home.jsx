import { Contact, Hero, StarsCanvas } from '.';
import { navLinks, CustomLink } from '../constants/constants';
import { styles } from '../styles';
import { useState } from 'react';


const Home = () => {

	return (

		<div className="relative z-0 bg-backgroundColor">

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Hero />
			</div>

			{navLinks.map((link) => (
				<CustomLink to={`${link.id}`} key={link.id + "Home"} className={`${link.style}`}>
					{link.title}
					<hr className="h-px mb-10 mt-2 bg-black-100 border-0"></hr>
				</CustomLink>
			))}

			<div className="relative z-0 bg-contactColor">

				<Contact />
				{/* <StarsCanvas /> */}

			</div>

		</div>
		
	)
}


export default Home