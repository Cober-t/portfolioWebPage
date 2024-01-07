import { styles } from "../../styles"
import { useEffect, useState } from "react"


const ArticlePreviewTemplate = ({item, ...props}) => {
	
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

export default ArticlePreviewTemplate