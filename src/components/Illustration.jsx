import React, { useEffect, useState } from "react"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { illutrationList, visible, hidden, animationFilter, comicFilter, photographFilter, illustrationFilter } from "../constants/constants"


const ArtItem = ({item, filters, ...props}) => {

	return (
		<img src={item.image}
			onClick={()=> {console.log(item.title)}}
			{...props}
		/>
	)
}

const Illustration = () => {
	
	const [filterDict, setFiltersDict] = useState([
		{ tag: animationFilter,    value: visible, color: "text-purple-500"},
		{ tag: comicFilter, 	   value: visible, color: "text-red-500"},
		{ tag: photographFilter,   value: visible, color: "text-blue-500"},
		{ tag: illustrationFilter, value: visible, color: "text-green-700"},
	])
	
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
		<div className="overflow-y-scroll no-scrollbar">

			<div className={`${styles.paddingX} ${styles.paddingY} w-full justify-center grid xs:grid-cols-2 md:grid-cols-4 items-center bg-backgroundColor`}> 
				{
					filterDict.map((filter, index) => 
						<button
							type="button" onClick={ ()=> (disableFilter(filter, index)) }
							className={`${filter.color} hover:opacity-75 ${setOpacity(index)} text-md font-medium ${styles.textTitle} uppercase`}>
								#{filter.tag}
						</button>
					)
				}
			</div>

			{/* <div className="w-screen mb-20 xs:px-10 md:px-15 xl:px-15 items-center justify-between grid grid-flow-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-3 gap-8"> */}
			<div className="xs:columns-2 sm:columns-3 mr-10 ml-10 md:columns-4 gap-x-6">
				{illutrationList.map((artItem) => {

					if (artItem.tag == animationFilter && filterDict[0].value == visible)
						return <ArtItem item={artItem} filters={filterDict} className="py-3"/>

					if (artItem.tag == photographFilter && filterDict[1].value == visible)
						return <ArtItem item={artItem} filters={filterDict} className="py-3"/>

					if (artItem.tag == illustrationFilter && filterDict[2].value == visible)
						return <ArtItem item={artItem} filters={filterDict} className="py-3"/>

					if (artItem.tag == comicFilter && filterDict[3].value == visible)
						return <ArtItem item={artItem} filters={filterDict} className="py-3"/>
					}
				)}
			</div>
		</div>
	)
}

export default SectionWrapper(Illustration, "illustration")
