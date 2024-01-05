import { useState, useEffect, useRef } from 'react';
import React from 'react'
import { Suspense } from 'react';
import { ModelLoader } from "../constants";
import * as THREE from 'three'
import { Preload } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import Camera from "./canvas/Camera";
import Lights from "./canvas/Lights";
import Model from './Model';



export default function ModelView({item}) {
	
	const [modelItemText, setModelItemText] = useState("")
	const [currentAnimation, setCurrentAnimation] = useState("Survey")
	const [currentMaterial, setCurrentMaterial] = useState('')
	const [enableLights, setEnableLights] = useState(true)
	
	const body = useRef()

	useEffect(() => {
		
		if (item && item.description) {

			fetch(item.description)
			.then(response => response.text())
			.then(text => setModelItemText(text))
		}
	})
	
	if (item) {
		
		const sliptData = modelItemText.split('-')
		const description = sliptData[0]
		const noteText = sliptData[1]
		
		return (
			<section className="bg-primary select-none flex xs:flex-col md:flex-col lg:flex-row xs:px-10 items-center">
				
				<div className="xs:h-full md:max-h-[550px] md:h-screen w-full overflow-y-scroll no-scrollbar xs:pt-[100px] md:pt-[100px] lg:mt-[20px] lg:mb-[30px]">
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
					<div className="h-[0.1em] w-full bg-black-100 inline-flex"/>
					<p className="font-bodySection font-regular text-[16px] text-justify text-black-100">
						{noteText}
					</p>
				</div>

				<div className="flex xs:flex-col md:flex-col lg:flex-row w-full xs:h-full md:h-screen items-center">
					<div className="xs:h-[0.1em] xs:w-full md:h-[0.1em] md:w-full lg:h-[500px] lg:w-[0.1rem] bg-black-100 md:ml-5 mt-5"/>

					<div className="flex-1 xs:flex-row md:flex-col items-center justify-start
							relative z-0 lg:ml-5 h-screen">

						<Canvas shadows dpr={ [1, 3] } // clamp pixel ratio (default)
							gl={ {antialias: true, preserveDrawingBuffer: true,
								toneMapping: THREE.ACESFilmicToneMapping,
								} }
      						>
							<Camera />
							
							<Lights enable={enableLights}/>
							<Suspense fallback={null}>
							{/* <Suspense fallback={ <ModelLoader position-y={0.5} scale={ [2, 3, 2] }/> }> */}
							
								<Model body={body} animation={currentAnimation} mat={currentMaterial}/>
								
							</Suspense>
							
							{/* <Preload all /> */}

						</Canvas>

					</div>

					<div className="flex xs:flex-row md:flex-row lg:flex-col items-center justify-end
								relative z-10 gap-3 md:ml-5 xs:mb-20 md:mb-20 lg:mb-0">

						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> { 
								setEnableLights( enableLights == true ? false : true ) 
							}}/>

						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> { 
								setCurrentMaterial( currentMaterial == "wireframe" ? "" : "wireframe") 
							}}/>

						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> { 
								setCurrentMaterial( currentMaterial == "bones" ? "" : "bones") 
							}}/>

						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> { 
								setCurrentAnimation(currentAnimation == "Walk" ? "Survey" : "Walk") 
							}}/>

						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> { 
								setCurrentAnimation(currentAnimation == "Run" ? "Survey" : "Run") 
							}}/>
					</div>

				</div>
			</section>
		)
	}
}
