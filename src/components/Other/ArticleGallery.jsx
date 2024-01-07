import { styles } from "../../styles"
import { useState, useEffect } from "react"


const ArticleGallery = ({item, articleActive, choosenTag, tags, ...props}) => {
	
	const [galleryItemText, setGalleryItemText] = useState("")

	useEffect(() => {

		if (item.galleryText) {

				fetch(item.galleryText)
				.then(response => response.text())
				.then(text => setGalleryItemText(text))
		}
	})

	const itemDataText = galleryItemText.split('-')
	const note = itemDataText[0]
	const title = itemDataText[1]
	const description = itemDataText[2]

	const articleItem =
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

	
	if (articleActive != "block" && choosenTag == '') {
		return articleItem
	}
	else if (tags.includes(choosenTag)) {
		return articleItem
	}


}

export default ArticleGallery