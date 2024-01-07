import { useState, useEffect } from 'react'
import { searchIcon } from '../../constants'
import ArticleGallery from './ArticleGallery'
import ArticlePreviewTemplate from './ArticlePreviewTemplate'



const Other = ({data}) => {

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
				<ArticlePreviewTemplate item={articleView}/>
			</div>

			<div className={`${galleryView == "block" ? "xs:hidden md:hidden" : "block"}`}>

				<div className='flex justify-center items-center py-5 pt-[100px]'>
					<img src={searchIcon} alt="Serch Icon not found" 
						className={`${findArticleActive == "hidden" ? "block" : "xs:hidden md:hidden"} h-5 w-5 `}
						onClick={() => { setFindArticleActive("block") }}/>

					<input type="text" id="choosenTag" placeholder='|...' onChange={handleTagValue} onKeyDown={handleFindArticleActive}
						className={`${findArticleActive} max-w-[800px]`}/>
				</div>

				<div className="justify-center items-center w-full overflow-y-scroll overflow-x-scroll no-scrollbar
					grid grid-flow-row xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">

						{data && data.map((otherItem) => 
							<li key={otherItem.key} className='list-none'>
								<ArticleGallery item={otherItem} className={`xs:px-3 select-none xs:w-screen mb-5 max-w-fit`}
											articleActive={findArticleActive}
											choosenTag={choosenTag}
											tags={otherItem.tags.replaceAll(' ', '').replaceAll('#', '').split(',')}
											onDoubleClick={()=> {
												setGalleryView("block")
												setArticleView(otherItem)
											}}/>
							</li>
						
						)}
				</div>

			</div>
		</>
	)
}

export default Other