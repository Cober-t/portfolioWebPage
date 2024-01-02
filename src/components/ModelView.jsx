import { useAnimations, useGLTF } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react';
import React from 'react'
import { Suspense } from 'react';
import { ModelLoader } from "../constants";
import * as THREE from 'three'
import { Preload } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import Camera from "./canvas/Camera";
import Lights from "./canvas/Lights";

function Model(body) {

	const model = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(model.animations, model.scene)
	animations.actions['Survey'].play()
	
	return (
		<primitive castShadow receiveShadow 
				object={model.scene} 
				scale={0.05}
				position={[0, -2, 0]}/>
	)
}

export default function ModelView({item}) {
	
	const [modelItemText, setModelItemText] = useState("")
	
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
			<section className="bg-primary select-none flex xs:flex-col md:flex-row xs:px-10 items-center">
				
				<div className="xs:h-full md:max-h-[550px] md:h-screen w-full overflow-y-scroll no-scrollbar xs:pt-[100px] md:py-[50px] md:mt-0">
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

				<div className="flex xs:flex-col md:flex-row w-full xs:h-full md:h-screen items-center ">
					<div className="xs:h-[0.1em] xs:w-full md:h-[500px] md:w-[0.1rem] bg-black-100 md:ml-5 mt-10"/>

					<div className="flex xs:flex-row md:flex-col items-center justify-start
							relative z-0 md:ml-10 bg-red-300 h-screen min-w-[450px]">

						<Canvas shadows frameloop='demand' dpr={ [1, 2] } // clamp pixel ratio (default)
							gl={ {antialias:true, // default preserveDrawingBuffer: true,
								// toneMapping: THREE.ACESFilmicToneMapping,
								outputEncoding: THREE.sRGBEncoding // THREE.ColorManagement.legacyMode = false
							} } //camera={{ position: [20, 3, 5], fov: 25 }}
      						>
							<Camera />
							<Lights />
							<Suspense fallback={<ModelLoader/>}/*fallback={ <Placeholder position-y={0.5} scale={ [2, 3, 2] }*/>  
							
								<Model body={body}/>
								
							</Suspense>
							
							<Preload all />

						</Canvas>
						{/* <img src={item.previewImg} alt="Image not found"
							className="h-screen w-screen object-contain scale-90 md:pt-[50px]"/> */}
					</div>

					<div className="flex xs:flex-row md:flex-col items-center justify-end
								relative z-10 gap-3 md:ml-5 xs:mb-20 md:mb-0">

						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-gray-500 hover:bg-gray-600 h-6 w-6 rounded-full"
							onClick={()=> {console.log(item.title)}}/>
						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> {
								console.log(item.title)
								// animations.actions['Walk'].reset().fadeIn(0.5).play()
							}}/>
						<a target="_blank" className="bg-amber-600 hover:bg-amber-700 h-6 w-6 rounded-full"
							onClick={()=> {
								console.log(item.title)
								// animations.actions['Survey'].reset().fadeIn(0.5).play()
							}}/>
					</div>

				</div>
			</section>
		)
	}
}
useGLTF.preload('./Fox/glTF/Fox.gltf')