import otherArticleList from '../assets/other/otherDict.json'

import { useState, useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { searchIcon } from '../assets'


const ArticlePageTemplate = ({item, ...props}) => {
	
	const [articleText, setArticleItemText] = useState("")

	useEffect(() => {

		if (item && item.articleText) {

				fetch(item.articleText)
				.then(response => response.text())
				.then(text => setArticleItemText(text))
		}
	})

	if (item){

		const sliptData = articleText.split('-')
		const note = sliptData[0]
		const title = sliptData[1]
		const subtitle = sliptData[2]
		const text = sliptData[3]

		return (
			<div {...props}>

				<div
					style={{'--image-url': `url(${item.headerImg})`}} 
					className={`bg-[image:var(--image-url)] h-[800px] bg-cover bg-no-repeat bg-center
					flex xs:justify-start sm:justify-start xs:items-end sm:items-end xs:pb-10 sm:pb-5 sm:pl-10`}>
						
					<div className='flex flex-col max-w-[500px] px-10 py-10
						xs:bg-white-100 xs:bg-opacity-35 xs:backdrop-blur-[2px]'>
						<p className='font-homeSections italic font-semibold text-[16px] sm:text-[18px] text-gray-700 inline-block'>
							{note}
						</p>
						<p className='font-homeSections font-semibold text-[26px] sm:text-[28px] mb-2 text-black-100 inline-block'>
							{title}
						</p>
						<p className='font-bodySection leading-normal font-regular text-[16px] sm:text-[18px] text-black-100 text-justify inline-block'>
							{subtitle}
						</p>
					</div>

				</div>

				<div className='flex w-full justify-center'>

					
					<div className='mb-20 mt-10 xs:px-10 sm:px-10 text-justify sm:text-[16px] inline-block max-w-[600px]'>
						<p className='text-start font-homeSections uppercase font-bold xs:text-[12px] text-gray-400'>
							{item.date}
						</p>
						<p className='text-start font-homeSections font-bold xs:text-[12px] mb-4 text-gray-500'>
							{item.tags}
						</p>
						<p className='xs:text-[14px] sm:text-[16px] font-bold font-bodySection text-gray-800 leading-loose'>
							{text}

						</p>
					</div>
				</div>
			</div>
		)
	}
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

	const [galleryView, setGalleryView] = useState("hidden")
	const [articleView, setArticleView] = useState()
	const [findArticleActive, setFindArticleActive] = useState("hidden")

	const [choosenTag, setChoosenTag] = useState('')
	const handleTagValue = (event) => {
		setChoosenTag(event.target.value)
	}
	const handleFindArticleActive = (event) => {
		if (event.key == "Enter")
			setFindArticleActive("hidden")
	}

	useEffect(()=> {

		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				setGalleryView("hidden")
			}
		}
			window.addEventListener('keydown', handleEsc);
	 
		return () => {
			window.removeEventListener('keydown', handleEsc);
		}

	}, [choosenTag])

	return (
		<>
			<div className={`${galleryView} bg-primary select-none`}>
				<ArticlePageTemplate item={articleView}/>
			</div>

			<div className={`${galleryView == "block" ? "xs:hidden md:hidden" : "block"}`}>

				<div className='flex justify-center items-center py-5'>
					<img src={searchIcon} alt="Serch Icon not found" 
						className={`${findArticleActive == "hidden" ? "block" : "xs:hidden md:hidden"} h-5 w-5 `}
						onClick={() => { setFindArticleActive("block") }}/>

					<input type="text" id="choosenTag" placeholder='|...' onChange={handleTagValue} onKeyDown={handleFindArticleActive}
						className={`${findArticleActive} max-w-[800px]`}/>
				</div>

				<div className="justify-center items-center w-full overflow-y-scroll overflow-x-scroll no-scrollbar
					grid grid-flow-row xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">

						{otherArticleList.map((otherItem) => {

							let itemTags = otherItem.tags.trim().replace('#', '').split(',')
							const articleItem = <GalleryItem item={otherItem} className={`xs:px-3 select-none xs:w-screen mb-5 max-w-fit`}
													onDoubleClick={()=> {
														setGalleryView("block")
														setArticleView(otherItem)
													}}/>
							if (findArticleActive != "block" && choosenTag == '')
								return articleItem
							else if (itemTags.includes(choosenTag))
								return articleItem
						})}
				</div>

			</div>
		</>
	)
}

export default SectionWrapper(Other, "other")