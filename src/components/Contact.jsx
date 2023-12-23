import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {

	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_fb2vxve",
				"template_oghs4rs",
				{
					from_name: form.name,
					to_name: "Jorge",
					from_email: form.email,
					to_email: "jorgetejadolopez@gmail.com",
				},
				"HoUaVJll9lhvzBmRn"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({ name: "", email: ""})
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			)
	}

	return (

		<div className={`${styles.paddingX} ${styles.paddingY} xl:mt-12 flex flex-col gap-10 overflow-hidden`}>

			<h3 className={`${styles.sectionHeadText} mt-[150px] font-homeSections font-regular flex flex-col items-center`}>SUBSCRIBE TO STAY TUNE</h3>

			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mb-10 text-secondary rounded-lg text-[18px]"
			>
				<label className="flex flex-col mb-10 ml-10">
					<div className="h-[3rem] w-0.5 bg-secondary">
						<input 
							type="text" 
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="YOUR NAME..."
							className="py-4 px-6 placeholder:text-secondary bg-transparent font-homeSections font-regular outline-none"
						/>
					</div>
				</label>

				<label className='flex flex-col ml-10'>
					<div className="absolute h-[3rem] w-0.5 bg-secondary">
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="YOUR EMAIL..."
							className='py-4 px-6 placeholder:text-secondary bg-transparent font-homeSections font-regular outline-none'
						/>
					</div>
				</label>

				<div className="mt-[100px] flex flex-col items-center">
					<button
						type="submit"
						className="py-3 px-8 bg-primary opacity-45 hover:opacity-85
						outline-none w-fit text-black-100 font-homeSections font-medium rounded-xl"
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</div>

			</form>
			
			<h3 className={`${styles.sectionHeadText} mt-[300px] mb-[50px] flex flex-col items-center font-homeSections font-regular`}>OR JOIN MY TELEGRAM CHANNEL</h3>
			<div className="flex flex-col items-center mb-[300px]">
				<button 
					type="submit" 
					className="bg-blue-600 hover:bg-blue-700 h-16 w-16 rounded-full"
					>
				</button>
			</div>

			<div className="flex flex-row justify-evenly">
				<a href="https://google.com" target="_blank" className="bg-red-600 hover:bg-red-700 h-8 w-8 rounded-full"/>
				<a href="https://google.com" target="_blank" className="bg-blue-600 hover:bg-blue-700 h-8 w-8 rounded-full"/>
				<a href="https://google.com" target="_blank" className="bg-purple-600 hover:bg-purple-700 h-8 w-8 rounded-full"/>
				<a href="https://google.com" target="_blank" className="bg-amber-600 hover:bg-amber-700 h-8 w-8 rounded-full"/>
			</div>

		</div>

	)
}

export default Contact