import React, {useState, useEffect} from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import videogameList from '../assets/videogames/videogameDict.json'
import { musicPlay } from "../assets";


const VideogamePreviewTemplate = ({videogame, ...props}) => {

	const [descriptionText, setDescriptionText] = useState("")

	useEffect(() => {

		if (videogame && videogame.description) {

				fetch(videogame.description)
				.then(response => response.text())
				.then(text => setDescriptionText(text))
		}
	})

	if (videogame) {

		return (
			<div>

				{/*=========  HEADER  ==========*/}
				<div className="xs:px-12 px-6 x:pt-12 pt-10">

					<div className={`font-homeSections font-semibold uppercase text-gray-700 text-left flex flex-row text-[42px]`}>
						{videogame.title}
					</div>

					<SubtitleComponent 
						videogame={videogame}
						className={`font-homeSections font-medium uppercase text-gray-500 mt-3 text-[14px] text-start`}/>

					<div className={`font-homeSections font-medium uppercase text-gray-400 mb-1 text-[14px] text-end`}>
						{videogame.releaseDate}
					</div>

				</div>

				{/*=====  VERTICAL LINE 1  =====*/}
				<div className="flex justify-center h-[0.1rem] w-full bg-black-100"/>

				{/*=======  GAMEPLAY IMG  ======*/}
				<img src={videogame.gameplayImg} className="w-full py-5 object-contain"/>

				{/*=====  VERTICAL LINE 2  =====*/}
				<div className="flex justify-center h-[0.1rem] w-full bg-black-100"/>
				{/*=========  PROJECT  ==========*/}
				<div className="xs:columns-auto columns grid justify-center lg:grid-cols-2">
					

					<div className="flex lg:justify-between w-full h-full font-homeSections font-medium uppercase text-gray-700 xs:px-6 md:pl-10 py-5 lg:mb-10">

						<div className="xs:flex-col h-full w-full">
							<div className="flex flex-row w-full">
								<p className="text-[28px] text-black-100 font-semibold mr-5 mb-10 text-start">ABOUT THE PROJECT</p>
							</div>
							<div className="flex flex-row justify-end font-homeSections">
								<div className="flex flex-col text-end mr-5">
									<p className="text-[36px] text-black-100 font-semibold">{videogame.developmentDays}</p>
									<p className="text-[12px] text-gray-500 font-regular mb-5">Development days</p>
									<p className="text-[36px] text-black-100 font-semibold">{videogame.skillLevel}</p>
									<p className="text-[12px] text-gray-500 font-regular mb-5">Time to complete the game</p>
									<p className="text-[36px] text-black-100 font-semibold">{videogame.timeToComplete}</p>
									<p className="text-[12px] text-gray-500 font-regular">Skill required to play the game</p>
								</div>
								<img src={videogame.coverImg} className="object-contain xs:h-fit justify-end sm:hidden xs:blocks"/>
							</div>
						</div>
						<img src={videogame.coverImg} className="object-contain xs:h-full lg:w-full justify-end xs:hidden sm:block"/>

					</div>

					<div className={`${styles.textBody} lg:pr-10 py-5 flex lg:flex-row xs:flex-col`}>
						<div className="flex justify-shelf-center lg:h-full lg:w-[0.1rem] xs:h-[0.1em] mt-3 mb-3 xs:w-full bg-black-100"/>
						<p className="xs:px-6 md:pl-6 text-[14px] font-bodySection font-regular tracking-normal text-justify">
							{descriptionText}
						</p>
					</div>

				</div>

				{/*=====  VERTICAL LINE 3  =====*/}
				<div className="flex justify-center h-[0.1rem] w-full bg-black-100"/>

				{/*=========  FOOBAR  ==========*/}
				<div className={`xs:px-25 md:px-20 py-5 flex flex-row justify-center`}>
					<li className="list-none flex flex-row font-homeSections font-semibold text-[14px] text-start uppercase text-gray-700">
						WHERE CAN YOU PLAY IT
						<img src={musicPlay} onClick={()=>videogame.itchLink} className="ml-5 mr-20 w-5 h-5"/>
					</li>

					<li className="list-none font-homeSections font-semibold text-[14px] text-end uppercase text-gray-700">
						DEV DIARY
					</li>

				</div>

			</div>
		)
	}
}
const SubtitleComponent = ({videogame, ...props}) => {

	if (videogame.subtitle) {
		return (
			<div {...props}>
				{videogame.subtitle}
			</div>
		)
	}
}

const VideogameItemList = ({videogame, previewImage, ...props}) => {


	return (
		<div
			key={videogame.name}
			style={{'--image-url': `url(${previewImage})`}}
			className={`max-h-[200px] border-black-100 
			border-b border-r items-center lg:bg-transparent xs:bg-[image:var(--image-url)] xs:bg-cover xs:bg-center xs:bg-no-repeat`}
			{...props}>
			
			<div className="lg:bg-opacity-100 xs:backdrop-blur-[2px] xs:bg-primary xs:bg-cover xs:bg-opacity-45 xs:h-full xs:w-full xs:flex flex justify-between items-center gap-x-4 xs:px-10 xs:py-10 px-4">
				<SubtitleComponent 
					videogame={videogame} 
					className={`font-homeSections font-medium uppercase xs:text-gray-300 lg:text-gray-400 py-5 text-[11px] max-w-[200px] text-start`}/>

				<div className={`font-homeSections font-medium uppercase text-gray-800 text-end text-[28px]`}>
					{videogame.title}
				</div>
			</div>
		</div>
	)
}

const Videogames = () => {

	const [previewVisibility, setPreviewVisibility] = useState("hidden")
	const [videogamePreview, setVideogamePreview] = useState()
	const [videogameImage, setVideogameImage] = useState()

	useEffect(()=> {

		setVideogameImage(videogameList[0].gameplayImg)

		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				setVideogameImage(videogameList[0].gameplayImg)
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
			<div className={`${previewVisibility} bg-primary select-none`}>
				<VideogamePreviewTemplate videogame={videogamePreview}/>
			</div>

			<div className={`${previewVisibility == "block" ? "hidden" : "block"} grid xs:grid-cols-1 lg:grid-cols-2 overflow-none
					max-h-screen md:grid gap-0 h-screen select-none`}>

				<div className="flex flex-col overflow-y-scroll no-scrollbar">
					{...videogameList.map((videogame) =>

						<VideogameItemList
							videogame={videogame}
							previewImage={videogameImage}
							onDoubleClick={()=> {
								setPreviewVisibility("block")
								setVideogamePreview(videogame)
							}}
							onClick={() => { setVideogameImage(videogame.gameplayImg) }}
							onMouseEnter={()=> { setVideogameImage(videogame.gameplayImg) }}/>

					)}
				</div>

				<div className={`xs:hidden lg:block relative items-center`}>
					<img src={videogameImage} alt="Image not found"
						className=""/>
				</div>
			</div>	

		</>
	)
}

export default SectionWrapper(Videogames, "videogames");
