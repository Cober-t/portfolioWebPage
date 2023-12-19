import { Contact, Hero } from '.';
import { navLinks, CustomLink } from '../constants/constants';
import { styles } from '../styles';
import { useState } from 'react';


const Home = () => {

	return (

		<div className="relative z-0 bg-backgroundColor overflow-y-scroll no-scrollbar">

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Hero />
			</div>

			{navLinks.map((link) => (
				<CustomLink to={`${link.id}`} key={link.id + "Home"} className={`${link.style}`}>
					{link.title}
					<hr className="list-none h-px mb-10 mt-2 bg-black-100 border-0"></hr>
				</CustomLink>
			))}

			<div className="relative z-0 bg-contactColor">
				<Contact />
			</div>

		</div>
		
	)
}


export default Home