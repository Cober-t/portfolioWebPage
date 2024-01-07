import { styles } from "../../styles"
import { useState, useEffect } from "react"

const MusicTarget = ({item, expanded, ...props}) => {

	const [musicText, setMusicText] = useState("")

	useEffect(() => {

		if (item && item.description) {

				fetch(item.description)
				.then(response => response.text())
				.then(text => setMusicText(text))
		}
	})

	if (expanded == item.name) {

		return (
			<div className="w-full h-full flex bg-primary">
				<div className="xs:px-5 sm:px-5 gap-3
					xs:max-h-[600px] md:max-h-[300px] border-t border-black-100 xs:overflow-y-scroll md:overflow-y-hidden no-scrollbar
					flex xs:flex-col md:flex-row xs:justify-center md:justify-evenly items-center">
		
					<img src={item.coverImg} className='w-[250px] h-[250px] xs:mb-5 xs:mt-10 md:mt-3 md:px-[20px] object-contain'/>				
		
					<div className="border-black-100 md:border-l md:border-t-0 xs:mr-5 xs:ml-5 xs:border-t md:mb-2s md:overflow-y-scroll no-scrollbar">
						<p className={`${styles.textBody} md:max-h-[200px] xs:py-5 xs:mb-5 md:px-5 text-justify`}>
							{musicText}
						</p>
					</div>
		
				</div>
			</div>
		)
	}
}

export default MusicTarget