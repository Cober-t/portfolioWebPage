import { styles } from "../../styles"
import { useState, useRef, useEffect } from "react";
import { musicPlay, musicPause } from "../../constants";
import MusicTarget from './MusicTarget'

const convertTime = (time) => {    

    let mins = Math.floor(time / 60);
    if (mins < 10)
		mins = '0' + String(mins);

    let secs = Math.floor(time % 60);
    if (secs < 10)
		secs = '0' + String(secs);

    return mins + ':' + secs;
}


const Music = ({data}) => {
	
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
		<div className="md:pt-[73px]">
			{data && data.map((musicItem) => (
				<li key={musicItem.name} className="list-none">
					<div 
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

						
						<div className={`${styles.textTitle} flex flex-row gap-8 items-center`}>
							{musicItem.name}

							<img src={lastPlayedSong == musicItem.name && playing ? musicPause : musicPlay} 
								className='w-8 h-8 object-contain' 
								onClick={()=> { 
									playing ? stop(musicItem) : play(musicItem)
									setExpanded(musicItem.name)
									setLastPlayedSong(musicItem.name)
								}}
							/>
						</div>
					</div>

					<div>
						<MusicTarget item={musicItem} expanded={expanded} />
					</div>
				</li>
			))}
		</div>
	)
}

export default Music