import React, {useState, useEffect} from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import videogameList from '../assets/videogames/videogameDict.json'


const VideogameItem = ({videogame, ...props}) => {
	
	const [descriptionText, setDescriptionText] = useState("")

	useEffect(()=> {

		if (videogame.description) {

			fetch(videogame.description)
			.then(response => response.text())
			.then(text => setDescriptionText(text))
		}

	}, [])

	return (
		<div className="w-full bg-primary">

			<div>{descriptionText}</div>
			<div>{videogame.title}</div>
			<img src={videogame.coverImg} alt="Image not found"/>
			
		</div>
	)
};

const Videogames = () => {
	

	return (

		<div className={`${styles.paddingX} bg-primary no-scrollbar rounded-[20px]`}>

			{...videogameList.map(videogame => 

				<VideogameItem videogame={videogame}/>
			
			)}

		</div>
	);
};

export default SectionWrapper(Videogames, "videogames");
