import { styles } from "../../styles"

const VideogameGallery = ({videogame, previewImage, ...props}) => {

	return (
		<div
			key={videogame.name}
			style={{'--image-url': `url(${previewImage})`}}
			className={`max-h-md border-black-100 
			border-b border-r items-center lg:bg-transparent xs:bg-[image:var(--image-url)] xs:bg-cover xs:bg-center xs:bg-no-repeat`}
			{...props}>
			
			<div className="lg:bg-opacity-100 xs:backdrop-blur-[2px] xs:bg-primary xs:bg-cover xs:bg-opacity-45  xs:w-full xs:flex flex justify-between items-center gap-x-4 xs:px-10 xs:py-10 px-4">
				{
					videogame.subtitle && 
						<div className={`font-homeSections font-medium uppercase xs:text-gray-300 lg:text-gray-400 text-[11px] max-w-[200px] text-start`}>
							{videogame.subtitle}
						</div>
				}

				<div className={`font-homeSections font-medium uppercase text-gray-800 text-end text-[28px]`}>
					{videogame.name}
				</div>
			</div>
		</div>
	)
}

export default VideogameGallery