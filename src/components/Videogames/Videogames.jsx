import React, {useState, useEffect} from "react";
import { styles } from "../../styles";
import { videogameDictPath } from "../../constants";
import VideogameGallery from "./VideogameGallery";
import VideogamePreviewTemplate from "./VideogamePreviewTemplate";

const Videogames = ({data}) => {

	const [previewVisibility, setPreviewVisibility] = useState("hidden")
	const [videogamePreview, setVideogamePreview] = useState()
	const [videogameImage, setVideogameImage] = useState()

	useEffect(()=> {

		setVideogameImage(videogameDictPath[0].gameplayImg)

		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				setVideogameImage(videogameDictPath[0].gameplayImg)
				setPreviewVisibility("hidden")
			}
		}
			window.addEventListener('keydown', handleEsc);
	 
		return () => {
			window.removeEventListener('keydown', handleEsc);
		}

	}, [])

	return (
		<>
			<div className={`${previewVisibility} bg-primary select-none pt-[73px]`}>
				<VideogamePreviewTemplate videogame={videogamePreview}/>
			</div>

			<div className={`${previewVisibility == "block" ? "xs:hidden md:hidden" : "block"} grid xs:grid-cols-1 lg:grid-cols-2
				h-screen md:grid gap-0 select-none`}>

				<div className="overflow-y-scroll no-scrollbar pt-[73px]">
					{data && data.map((videogame) =>
						<li key={videogame.name} className="list-none">
							<VideogameGallery
								videogame={videogame}
								previewImage={videogameImage}
								onDoubleClick={()=> {
									setPreviewVisibility("block")
									setVideogamePreview(videogame)
								}}
								onClick={() => { setVideogameImage(videogame.gameplayImg) }}
								onMouseEnter={()=> { setVideogameImage(videogame.gameplayImg) }}/>
						</li>
					)}
				</div>

				<div
					style={{'--image-url': `url(${videogameImage})`}} 
					className="flex justify-center xs:hidden lg:block
						bg-[image:var(--image-url)] h-screen bg-cover bg-no-repeat bg-center">
				</div>
			</div>	

		</>
	)
}

export default Videogames
