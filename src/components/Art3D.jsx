import React from "react";
// import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { SectionWrapper } from '../hoc'
import modelsList from "../assets/art3D/art3dDict.json"

const ModelView = ({item, ...props}) => {
	
	const [modelItemText, setModelItemText] = useState("")

	
	useEffect(() => {
		
		if (item && item.description) {

				fetch(item.description)
				.then(response => response.text())
				.then(text => setModelItemText(text))
			}
	})
	
	if (item) {
		
		console.log(modelItemText)
		const sliptData = modelItemText.split('-')
		const description = sliptData[0]
		const noteText = sliptData[1]
		
		return (
			<div {...props}>
				
				<div className="xs:h-full md:w-full md:h-screen items-center overflow-y-scroll no-scrollbar">
					<p className="font-homeSections font-semibold uppercase text-[24px] text-gray-700 text-justify">
						{item.title}
					</p>
					<div className="h-[0.1em] mb-2 w-full bg-black-100 inline-flex"/>
					<p className="font-bodySection font-regular text-[16px] text-justify text-black-100 mb-5">
						{description}
					</p>

					<p className="font-homeSections font-semibold uppercase text-[24px] text-justify text-gray-700">
						ANEXO
					</p>
					<div className="h-[0.1em] mb-2 w-full bg-black-100 inline-flex"/>
					<p className="font-bodySection font-regular text-[16px] text-justify text-black-100">
						{noteText}
					</p>
				</div>

				<div className="flex xs:flex-col md:flex-row w-full h-screen items-center">
					<div className="xs:h-[0.1em] xs:w-full xs:mb-5 md:ml-5 md:h-[500px] md:w-[0.1rem] bg-black-100 justify-center items-center"/>
					<div className="flex xs:flex-row md:flex-col justify-center items-center
								relative z-10 gap-3 md:ml-5">

						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
					</div>

					<div className="flex xs:flex-row md:flex-col xs:items-start md:items-center justify-center w-full
							relative z-0 md:ml-10">
						<img src={item.previewImg} alt="Image not found"
							className="h-fit w-full object-contain"/>
					</div>
				</div>
			</div>
		)
	}
}

const ModelItem = ({item, ...props}) => {
	
	return (
		<div {...props}>
			
			<div className="flex flex-row justify-end items-center
				font-homeSections font-semibold xs:text-[18px] sm:text-[24px] text-gray-800">
				{item.num}
			</div>
			<div className="flex justify-center items-center">
				<img src={item.previewImg} alt="Image not found"
					className="h-fit w-full"/>
			</div>
			<p className="text-start font-homeSections font-semibold xs:text-[18px] sm:text-[24px] text-gray-800 uppercase">
				{item.title}
			</p>
			<p className="text-end font-homeSections font-regular xs:text-[12px] sm:text-[14px] text-gray-500 uppercase">
				{item.date}
			</p>
		</div>
	)
}

const Art3D = () => {

	const [previewVisibility, setPreviewVisibility] = useState("hidden")
	const [modelPreview, setModelPreview] = useState()

	useEffect(()=> {

		const handleEsc = (event) => {
			if (event.key === 'Escape') {
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
			<div className={`${previewVisibility}`}>
				<ModelView item={modelPreview} 
					className="xs:h-full md:h-screen bg-primary select-none flex xs:flex-col md:flex-row xs:px-10 py-10"/>
			</div>

			<div className={`${previewVisibility == "block" ? "xs:hidden md:hidden" : "block"} select-none`}>
				<div className="overflow-x-scroll no-scrollbar h-screen w-screen
					xs:py-10 xs:px-0 sm:px-[200px] xs:gap-[100px] md:gap-[175px] xs:justify-center sm:justify-start items-center bg-primary
					grid sm:grid-flow-col sm:auto-cols-max">

					{modelsList.map((item) => {
						return (
							<ModelItem 
								item={item} 
								className="flex flex-col" 
								onDoubleClick={()=> {
									setPreviewVisibility("block")
									setModelPreview(item)}
								}/>
						)
					})}
				</div>

			</div>
		</>
	)
}

export default SectionWrapper(Art3D, "art3d")