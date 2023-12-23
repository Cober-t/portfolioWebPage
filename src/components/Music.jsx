import { SectionWrapper } from "../hoc"
import { musicList } from "../constants/constants";
import { styles } from "../styles"
import { useState } from "react";
import { musicPlay, musicPause } from "../assets";
import { useRef } from "react";


const expandMusicTarget = (musicItem, expanded) => {

	if (expanded == musicItem.name) {

		return (
			<div className="xs:px-5 sm:px-5 gap-3
				xs:max-h-[600px] md:max-h-[300px] border-t border-black-100 xs:overflow-y-scroll md:overflow-y-hidden no-scrollbar
				flex xs:flex-col md:flex-row xs:justify-center md:justify-evenly items-center">
	
				<img src={musicPlay} className='w-[250px] h-[250px] xs:mb-5 xs:mt-10 md:mt-3 md:px-[20px] object-contain'/>				
	
				{/* <div className="xs:mt-5 xs:mb-5 xs:h-[0.05rem] xs:w-[40.5rem] sm:h-[0.05rem] sm:w-[40.5rem] md:h-[12rem] md:w-1 bg-black-100"/> */}
	
				<div className="border-black-100 md:border-l md:border-t-0 xs:mr-5 xs:ml-5 xs:border-t md:mb-2s md:overflow-y-scroll no-scrollbar">
					<p className={`${styles.textBody} md:max-h-[200px] xs:py-5 xs:mb-5 md:px-5 text-justify`}>
						{musicItem.text}
					</p>
				</div>
	
			</div>
		)
	}
}

const convertTime = (time) => {    

    let mins = Math.floor(time / 60);
    if (mins < 10)
		mins = '0' + String(mins);

    let secs = Math.floor(time % 60);
    if (secs < 10)
		secs = '0' + String(secs);

    return mins + ':' + secs;
}


const Music = () => {
	
	const audioRef = useRef(null)
	const [expanded, setExpanded] = useState(false)
	const [lastPlayedSong, setLastPlayedSong] = useState(null)
	const [playing, setPlaying] = useState(false)

	const play = (song) => {
		if (song.path) {
			setPlaying(true)
		  	audioRef.current.play()
		}
	}
	
	const stop = (song) => {
		if (song.path) {
			audioRef.current.pause()
			audioRef.current.currentTime = 0
			song.name != lastPlayedSong ? play(song) : setLastPlayedSong(null)
		}
	}

	const onPlaying = () => {
		if (audioRef.current.paused) setPlaying(false)
	}

	
	return (
		<>
			{musicList.map((musicItem) => (
				<>
					<div 
						key={musicItem.name}
						className={`${styles.textTitle} ${styles.paddingX} select-none min-h-[65px] 
									flex flex-row justify-between items-center border-black-100 border-t`}
						onDoubleClick={() => {
							setExpanded(expanded == musicItem.name ? null : musicItem.name)
						}}>

						<audio
							ref={audioRef}
							src={musicItem.path}
							onTimeUpdate={onPlaying}
						/>
						
						<div className={`${styles.textTitle} gap-5`}>
							{audioRef.current == null ? "00:00": convertTime(audioRef.current.duration) }
						</div>

						
						<div className={`${styles.textTitle} flex flex-row gap-5`}>
							{musicItem.name}

							<img src={lastPlayedSong == musicItem.name && playing ? musicPause : musicPlay} 
								className='w-6 h-6 object-contain' 
								onClick={()=> { 
									playing ? stop(musicItem) : play(musicItem)
									setExpanded(musicItem.name)
									setLastPlayedSong(musicItem.name)
								}}
							/>
						</div>
					</div>

					<div>
						{expandMusicTarget(musicItem, expanded)}
					</div>
				</>
			))}
		</>
	)
}

export default SectionWrapper(Music, "music")