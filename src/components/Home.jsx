import { Contact, Hero } from '.';
import { navLinks, CustomLink } from '../constants';


const Home = () => {

	return (

		<section className="relative z-0 bg-backgroundColor select-none">

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Hero />
			</div>

			<div>
				{navLinks.map((link) => (
					<CustomLink to={`${link.id}`} key={link.id + "Home"} className={`${link.style}`}>
						{link.title}
						<hr className="list-none h-px mb-10 mt-2 bg-black-100 border-0"></hr>
					</CustomLink>
				))}
			</div>


			<div className='py-[100px]'/>

			<div className="relative z-0 bg-contactColor">
				<Contact />
			</div>
			
		</section>
	)
}


export default Home