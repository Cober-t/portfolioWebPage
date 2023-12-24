import React, { useEffect, useState } from "react"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { illutrationList } from "../constants/constants"


const ArtItem = ({item, isVisible, ...props}) => {
	
    if (isVisible == "visible") {

		return ( 
			<img src={item.icon}/>
		)
	}
}

const Illustration = () => {

	const visible = "visible"
	const hidden = "invisible"
	const [animation, setAnimationFilter] = useState(visible)
	const [photograph, setPhotographFilter] = useState(visible)
	const [illustration, setIllustrationFilter] = useState(visible)
	const [comic, setComicFilter] = useState(visible)

	const setOpacity = (value) => {
		return value == hidden ? "opacity-75" : "opacity-35"
	}

	const disableAnimations = (()=> { setAnimationFilter(animation == visible ? hidden : visible) })
	const disablePhotographs = (()=> { setPhotographFilter(photograph == visible ? hidden : visible) })
	const disableIllustrations = (()=> { setIllustrationFilter(illustration == visible ? hidden : visible) })
	const disableComics = (()=> { setComicFilter(comic == visible ? hidden : visible) })

	return (
		<div className="overflow-y-scroll no-scrollbar">

			<div className={`${styles.paddingX} ${styles.paddingY} xs:inline-block md:flex md:flex-row justify-evenly items-center bg-backgroundColor`}> 
				<button
					type="button" onClick={ disableAnimations }
					className={`text-amber-500 hover:opacity-75 ${setOpacity(animation)} px-6 pb-2 pt-2.5 text-md font-medium leading-normal`}>
						#animacion
				</button>
				<button
					type="button" onClick={ disablePhotographs }
					className={`text-blue-500 hover:opacity-75 ${setOpacity(photograph)} px-6 pb-2 pt-2.5 text-md font-medium leading-normal`}>
						#fotografias
				</button>
				<button
					type="button" onClick={ disableIllustrations }
					className={`text-red-500 hover:opacity-75 ${setOpacity(illustration)} px-6 pb-2 pt-2.5 text-md font-medium leading-normal`}>
						#illustracion
				</button>
				<button
					type="button" onClick={ disableComics }
					className={`text-green-800 hover:opacity-75 ${setOpacity(comic)} px-6 pb-2 pt-2.5 text-md font-medium leading-normal`}>
						#comics
				</button>
			</div>

			<div className="justify-between gap-5 xs:columns-2 md:columns-4">

				{illutrationList.map((artItem) => (
					<ArtItem item={artItem} isVisible={animation}/>
				))}

			</div>
		</div>
	)
}

export default SectionWrapper(Illustration, "illustration")
