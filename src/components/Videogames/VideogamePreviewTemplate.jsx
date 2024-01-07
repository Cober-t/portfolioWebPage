import { styles } from "../../styles"
import { useState, useEffect } from "react"
// import ReactPlayer from "react-player";
import { musicPlay } from "../../constants";

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
				<div className="px-6 pt-10">

					<div className={`font-homeSections font-semibold uppercase text-gray-700 text-left flex flex-row text-[72px]`}>
						{videogame.name}
					</div>

					{
						videogame.subtitle && 
							<div className={`font-homeSections font-medium uppercase text-gray-500 mt-3 ml-1.5 text-[14px] text-start`}>
								{videogame.subtitle}
							</div>
					}

					<div className={`font-homeSections font-medium uppercase text-gray-500 mb-1 text-[14px] text-end`}>
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
				<div className="xs:grid xs:grid-cols-1 justify-center lg:flex">

					<div className="flex lg:justify-between w-full h-full font-homeSections font-medium uppercase text-gray-700 xs:px-6 md:pl-10 py-5">

						<div className="xs:flex-col h-full w-full">
							<div className="flex flex-row w-full">
								<p className="text-[28px] sm:min-w-[175px] text-black-100 font-semibold mr-5 mb-10 text-start">ABOUT THE PROJECT</p>
							</div>
							<div className="flex flex-row justify-end items-start font-homeSections">
								<div className="flex flex-col text-end mr-5">
									<p className="text-[36px] text-black-100 font-semibold">{videogame.developmentDays}</p>
									<p className="text-[12px] text-gray-500 font-regular mb-5">Development days</p>
									<p className="text-[36px] text-black-100 font-semibold">{videogame.skillLevel}</p>
									<p className="text-[12px] text-gray-500 font-regular mb-5">Time to complete the game</p>
									<p className="text-[36px] text-black-100 font-semibold">{videogame.timeToComplete}</p>
									<p className="text-[12px] text-gray-500 font-regular">Skill required to play the game</p>
								</div>
								<img src={videogame.coverImg} className="object-contain xs:h-fit justify-end sm:hidden xs:block"/>
							</div>
						</div>
						<img src={videogame.coverImg} className="xs:h-full items-end lg:w-full lg:min-w-[300px] justify-end xs:hidden sm:block"/>

					</div>

					<div className={`${styles.textBody} lg:max-w-[500px] py-5 flex lg:flex-row xs:flex-col items-center`}>
						<div className="lg:block xs:hidden lg:h-full lg:w-[0.1rem] xs:h-[0.1em] mt-3 mb-3 xs:w-full bg-black-100"/>
						<div className="flex flex-col xs:px-6 md:pl-6 lg:h-full xs:h-[500px] items-center">
							<div className="xs:block lg:hidden lg:h-full lg:w-[0.1rem] xs:h-[0.1em] mt-3 mb-3 xs:w-full bg-black-100"/>
							<p className="text-[14px] font-bodySection font-regular tracking-normal mb-8 justify-start text-justify">
								{descriptionText}
							</p>
							<div className="lg:block xs:hidden h-full w-full">
								{/* <ReactPlayer height="100%" width="100%" url="https://www.youtube.com/watch?v=UAO2urG23S4"/> */}
							</div>
							<div className="lg:hidden xs:block h-full w-full justify-center flex items-center">
								{/* <ReactPlayer height="100%" width="75%" url="https://www.youtube.com/watch?v=UAO2urG23S4"/> */}
							</div>
						</div>
					</div>

				</div>

				{/*=====  VERTICAL LINE 3  =====*/}
				<div className="flex justify-center h-[0.1rem] w-full bg-black-100"/>

				{/*=========  FOOBAR  ==========*/}
				<div className={`xs:px-25 md:px-20 py-5 flex flex-row justify-center`}>
					<li key={`${videogame.name}Link`} className="list-none flex flex-row font-homeSections font-semibold text-[14px] text-start uppercase text-gray-700">
						WHERE CAN YOU PLAY IT
						<img src={musicPlay} onClick={()=>videogame.itchLink} className="ml-5 mr-20 w-5 h-5"/>
					</li>

					<li key={`${videogame.name}DevDiary`} className="list-none font-homeSections font-semibold text-[14px] text-end uppercase text-gray-700">
						DEV DIARY
					</li>

				</div>

			</div>
		)
	}
}

export default VideogamePreviewTemplate