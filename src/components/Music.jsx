import { SectionWrapper } from "../hoc"
import { technologies } from "../constants/constants"
import { styles } from "../styles"




const Music = () => {

	return (
		
		<div className="flex flex-col w-full h-full">
			{technologies.map((technology) => (
				<div 
				key={technology.name}
				className={`${styles.paddingX} h-[65px] grid grid-cols-1 justify-items-end items-center font-homeSections font-medium uppercase border-black-100 border-b text-black-100`}>
						{technology.name}
				</div>
			))}
		</div>
	)
}

export default SectionWrapper(Music, "music")