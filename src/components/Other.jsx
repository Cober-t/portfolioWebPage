import otherArticleList from '../assets/other/otherDict.json'

import { useState, useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { searchIcon } from '../assets'


const ArticlePage = () => {

	return (
		<div>

		</div>
	)
}

const GalleryItem = ({item, ...props}) => {
	
	const [galleryItemText, setGalleryItemText] = useState("")

	useEffect(() => {

		if (item && item.galleryText) {

				fetch(item.galleryText)
				.then(response => response.text())
				.then(text => setGalleryItemText(text))
		}
	})

	const itemDataText = galleryItemText.split('-')
	const note = itemDataText[0]
	const title = itemDataText[1]
	const description = itemDataText[1]

	return (
		<div {...props}>

			<div className="h-[0.1em] mb-2 w-full bg-black-100"/>
			<img src={item.previewImg} alt="Image not found" />

			<div className='flex flex-col text-start mt-2 gap-y-1'>

				<p className='font-homeSections italic font-regular text-[12px] text-gray-700'>
					{note}
				</p>
				<p className='font-homeSections font-semibold text-[14px] text-black-100'>
					{title}
				</p>
				<p className='font-bodySection font-regular mb-2 text-[12px] text-black-100'>
					{description}
				</p>

			</div>

			<p className='text-end font-homeSections uppercase font-regular text-[10px] text-gray-500'>
				{item.date}
			</p>

		</div>
	)
}


const Other = () => {

	return (
		<>
			<div className='flex justify-center items-center py-5'>
				<img src={searchIcon} alt="Serch Icon not found" className='h-5 w-5' 
					 onClick={() => {console.log("Find articles")}}/>
			</div>

			<div className="justify-center items-center w-full overflow-y-scroll overflow-x-scroll no-scrollbar
				grid grid-flow-row xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">

					{otherArticleList.map((otherItem) => (

						<GalleryItem
							item={otherItem} 
							className={`xs:px-3 select-none xs:w-screen mb-5 max-w-fit`}
							onClick={()=> console.log("Open article page: " + title)}
						/>

					))}
			</div>
		</>
	)
}

export default SectionWrapper(Other, "other")