import React from "react";
import { useState, useEffect, useRef, Suspense } from "react";
import { SectionWrapper } from '../hoc'
import ModelView from "./ModelView";
import modelsList from "../assets/art3D/art3dDict.json"


const ModelItem = ({item, ...props}) => {
	
	return (
		<div {...props}>
			
			<div className="flex flex-row justify-end items-center
				font-homeSections font-semibold xs:text-[18px] sm:text-[24px] text-gray-800">
				{item.num}
			</div>
			<div className="flex justify-center items-center">
				<img src={item.previewImg} alt="Image not found"
					className="h-full w-full object-contain scale-125"/>
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
				<ModelView item={modelPreview}/>
			</div>

			<div className={`${previewVisibility == "block" ? "xs:hidden md:hidden" : "block"} select-none items-end
				overflow-x-scroll no-scrollbar h-screen w-screen bg-primary`}>

				<div className="xs:overflow-y-scroll xs:overflow-x-hidden sm:overflow-y-hidden sm:overflow-x-scroll xs:h-full sm:h-fit
				xs:py-[100px] sm:pt-[175px] pb-[50px] xs:px-0 xs:gap-[100px] sm:px-[100px] md:gap-[150px] grid sm:grid-flow-col sm:auto-cols-max
				xs:justify-center sm:justify-start scroll">
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