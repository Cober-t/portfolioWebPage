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
				<div className="flex justify-center h-[0.05rem] w-full bg-black-100"/>

				{/*=======  GAMEPLAY IMG  ======*/}
				<img src={videogame.gameplayImg} className="w-full py-5 object-contain"/>


				{/*=====  VERTICAL LINE 2  =====*/}
				<div className="flex justify-center h-[0.05rem] w-full bg-black-100"/>

				{/*=========  PROJECT  ==========*/}
				<div className="xs:grid-cols-1 grid-cols-1 grid lg:grid-cols-2">

					<div className="flex flex-row w-full font-homeSections font-medium uppercase text-gray-700 xs:px-12 md:px-5 py-5">
						<div className="flex md:flex-col">

							<p className="text-[28px] text-black-100 font-semibold mr-5">ABOUT THE PROJECT</p>

							<div className="flex flex-col text-end font-homeSections mr-5 h-fit">
								<p className="text-[36px] text-black-100 font-semibold">{videogame.developmentDays}</p>
								<p className="text-[12px] text-gray-500 font-regular mb-5">Development days</p>
								<p className="text-[36px] text-black-100 font-semibold">{videogame.skillLevel}</p>
								<p className="text-[12px] text-gray-500 font-regular mb-5">Time to complete the game</p>
								<p className="text-[36px] text-black-100 font-semibold">{videogame.timeToComplete}</p>
								<p className="text-[12px] text-gray-500 font-regular">Skill required to play the game</p>
							</div>
						</div>

						<img src={videogame.coverImg} className="inline-object object-contain xs:h-full lg:w-full justify-end"/>

					</div>

					<div className={`${styles.textBody} lg:pr-10 py-5 flex lg:flex-row xs:flex-col`}>
						<p className="xs:px-10 lg:px-5 text-[14px] font-bodySection font-regular tracking-normal text-justify">
							<div className="flex justify-shelf-center lg:h-full lg:w-[0.1rem] xs:h-[0.1em] mt-3 mb-3 xs:w-full bg-black-100"/>
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
			className={`xs:px-10 px-4 xs:max-h-[100px] md:xs:max-h-[150px] border-black-100 
				flex justify-between gap-x-4 border-b border-r items-center`}
				// bg-[url('${previewImage}')]`}
			{...props}>
			
			<SubtitleComponent 
				videogame={videogame} 
				className={`font-homeSections font-medium uppercase text-gray-400 py-5 text-[11px] max-w-[200px] text-start`}/>

			<div className={`font-homeSections font-medium uppercase text-gray-800 text-end text-[28px]`}>
				{videogame.title}
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

			<div className={`${previewVisibility == "visible" ? "hidden" : "visible"} grid grid-cols-2 overflow-none`}>

				<div className="max-h-screen md:grid-cols-1 md:grid gap-0 h-screen select-none overflow-y-scroll no-scrollbar">

					{...videogameList.map((videogame) =>

						<VideogameItemList
							videogame={videogame}
							previewImage={videogameImage}
							onDoubleClick={()=> {
								setPreviewVisibility("visible")
								setVideogamePreview(videogame)
							}}
							onClick={() => { setVideogameImage(videogame.gameplayImg) }}
							onMouseEnter={()=> { setVideogameImage(videogame.gameplayImg) }}/>

					)}

				</div>	
				
				<div className={`xs:invisible md:${previewVisibility == "visible" ? "hidden" : "visible"} flex flex-col items-center`}>
					<img src={videogameImage} alt="Image not found"
						className="object-contain"/>
				</div>
			</div>

		</>
	)
}

export default SectionWrapper(Videogames, "videogames");
