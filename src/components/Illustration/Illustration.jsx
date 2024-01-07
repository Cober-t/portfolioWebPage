import React, { useEffect, useState } from "react"
import { styles } from "../../styles"
import { visible, hidden, animationFilter, comicFilter, photographFilter, illustrationFilter } from "../../constants"


const ArtItem = ({artItem, filters, ...props}) => (
	
	filters.map((filter) => {
		
		if (artItem.tag === filter.tag && filter.value == visible)
			return <img src={artItem.image} {...props} />
	})
)


// const ArtItem = ({artItem, filters, ...props}) => {

// 	var items = []
	
// 	const itemTemplate = ({filterName, artImage}) => {
// 		<ul key={filterName}>
// 			<img src={artImage} {...props} />
// 		</ul>
// 	}

// 	filters.map((filter) => {

// 		if (artItem.tag === filter.tag && filter.value == visible) 
// 			items.push(itemTemplate(filter.name, artItem.image))
// 	})

// 	return items
// }


const Illustration = ({data}) => {
	
	const [imagePreviewd, setImagePreviewed] = useState(null)
	const [previewActive, setPreviewActive] = useState("invisible")
	const [filterDict, setFiltersDict] = useState([
		{ tag: animationFilter,    value: visible, color: "text-purple-500"},
		{ tag: comicFilter, 	   value: visible, color: "text-red-500"},
		{ tag: photographFilter,   value: visible, color: "text-blue-500"},
		{ tag: illustrationFilter, value: visible, color: "text-green-700"},
	])
	
	useEffect(() => {

		const handleEsc = (event) => {
		   if (event.key === 'Escape')
				setPreviewActive("invisible")
		};
		window.addEventListener('keydown', handleEsc);
		
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);
	
	const setOpacity = (index) => {
		return filterDict[index].value == visible ? "opacity-75" : "opacity-35"
	}

	const disableFilter = (filter, index) => { 

		setFiltersDict( 
			[...filterDict , 
			filterDict[index].value = filter.value == visible ? hidden : visible ] 
		)
		setFiltersDict([...filterDict])
	}
	
	return (
		<>
			<div className={`${previewActive} fixed select-none z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
				<figure className="mt-5 max-w-full h-auto object-fit">
					<img src={imagePreviewd} className="hover:scale-150 hover:overflow-y-scroll no-scrollbar"/>
					<figcaption className="font-homeSections font-semibold mt-2 text-center text-gray-800 dark:text-gray-800">
						Image caption
					</figcaption>
				</figure>
			</div>

			<div
				onClick={()=> {setPreviewActive("invisible")}} 
				className={`${previewActive} select-none w-full h-full bg-gray-300 fixed z-10 opacity-75`}/>

			<div className="select-none overflow-y-scroll no-scrollbar pt-[80px]">

				<div className={`${styles.paddingX} ${styles.paddingY} w-full justify-center grid xs:grid-cols-2 md:grid-cols-4 items-center bg-backgroundColor`}> 
					
					{filterDict.map((filter, index) => 
						<button key={index}
							type="button" onClick={ ()=> (disableFilter(filter, index)) }
							className={`${filter.color} hover:opacity-75 ${setOpacity(index)} text-md font-medium ${styles.textTitle} uppercase`}>
								#{filter.tag}
						</button>
					)}
					
				</div>

				<div className="xs:columns-2 sm:columns-3 mr-10 ml-10 md:columns-4 gap-x-6">
					
					{data && data.map((artItem) => 
						<li key={artItem.name} className="list-none">
							<ArtItem artItem={artItem} filters={filterDict} 
								className="py-3" 
								onClick={()=> {
									setPreviewActive("visible")
									setImagePreviewed(artItem.image)
								}}/>
						</li>
					)}

				</div>
			</div>
		</>
	)
}

export default Illustration
