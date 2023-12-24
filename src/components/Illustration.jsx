import React, { useEffect, useState } from "react"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { illutrationList } from "../constants/constants"

const visible = "visible"
const hidden = "invisible"

const ArtItem = ({item, isVisible, ...props}) => {
	
    if (isVisible == visible) {

		return ( 
			<img src={item.icon}
				onClick={()=> {console.log(item.title)}}
			/>
		)
	}
}

const Illustration = () => {

	const [animation, setAnimationFilter] = useState(visible)
	const [photograph, setPhotographFilter] = useState(visible)
	const [illustration, setIllustrationFilter] = useState(visible)
	const [comic, setComicFilter] = useState(visible)

	const setOpacity = (value) => {
		return value == hidden ? "opacity-35" : "opacity-75"
	}

	const disableAnimations = (()=> { setAnimationFilter(animation == visible ? hidden : visible) })
	const disablePhotographs = (()=> { setPhotographFilter(photograph == visible ? hidden : visible) })
	const disableIllustrations = (()=> { setIllustrationFilter(illustration == visible ? hidden : visible) })
	const disableComics = (()=> { setComicFilter(comic == visible ? hidden : visible) })

	return (
		<div className="overflow-y-scroll no-scrollbar">

			<div className={`${styles.paddingX} ${styles.paddingY} w-full justify-evenly grid xs:grid-cols-2 sm:grid-cols-4 items-center bg-backgroundColor`}> 
				<button
					type="button" onClick={ disableAnimations }
					className={`text-purple-500 hover:opacity-75 ${setOpacity(animation)} text-md font-medium ${styles.textTitle} uppercase`}>
						#animacion
				</button>
				<button
					type="button" onClick={ disablePhotographs }
					className={`text-blue-500 hover:opacity-75 ${setOpacity(photograph)} text-md font-medium ${styles.textTitle} uppercase`}>
						#fotografias
				</button>
				<button
					type="button" onClick={ disableComics }
					className={`text-green-800 hover:opacity-75 ${setOpacity(comic)} text-md font-medium ${styles.textTitle} uppercase`}>
						#comics
				</button>
				<button
					type="button" onClick={ disableIllustrations }
					className={`text-red-500 hover:opacity-75 ${setOpacity(illustration)} text-md font-medium ${styles.textTitle} uppercase`}>
						#illustracion
				</button>
			</div>

			<div className="w-screen mb-20 xs:px-10 md:px-15 xl:px-15 items-center justify-between grid grid-flow-row-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-3 gap-8">

				{illutrationList.map((artItem) => (
					<ArtItem item={artItem} isVisible={animation}/>
				))}

			</div>
		</div>
	)
}

export default SectionWrapper(Illustration, "illustration")
