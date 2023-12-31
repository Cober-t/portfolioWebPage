
import { useMatch, useLocation, useResolvedPath, Link } from 'react-router-dom';

export function CustomLink({ to, uniqueKey, children, ...props }) {
    
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li key={uniqueKey} className={isActive ? "active list-none" : "list-none"}>
            <Link to={to} {...props} onClick={window.scroll(0, 0)}>
                {children}
            </Link>
        </li>
    )
}

export function PrintIcons({identifier, object}) {

    const location = useLocation()    

    if ( identifier != location.pathname ) {
        return (
            <CustomLink to={`${object.id}`} key={object.id + "IconNavbar"}
                onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
            >
                <img src={object.icon} alt="logo" className='w-6 h-6 object-contain mt-1' />
            </CustomLink>
        )
    }
}

export function DrawCurrentIcon({identifier, object}) {

    const location = useLocation()

    if ( identifier === location.pathname ) 
        return (
            <CustomLink to={`${object.id}`} key={object.id + "CurrentIconNavbar"}
                onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
            >
                <img src={object.icon} alt="logo" className='w-6 h-6 object-contain mt-1' />
            </CustomLink>
        )
}

export function DrawNameSection({identifier, object}) {

    const location = useLocation()

    if ( identifier == location.pathname)
        return (
            <div className={`${object.color} xs:text-[32px] sm:text-[32px] md:text-[32px] uppercase tracking-wider text-black-100`}> 
                {object.title}
            </div>
        )
}

const style= "ps-10 xs:text-[48px] text-[48px] uppercase text-black-100 "
export const navLinks = [
    {
        id: "/music",
        title: "Music",
        icon: musicIcon,
        color: "text-musicColor",
        style: style + "hover:text-musicColor",
    },
    {
        id: "/illustration",
        title: "Illustration",
        icon: illustrationIcon,
        color: "text-illustrationColor",
        style: style + "hover:text-illustrationColor",
    },
    {
        id: "/videogames",
        title: "Videogames",
        icon: videogameIcon,
        color: "text-videogamesColor",
        style: style + "hover:text-videogamesColor",
    },
    {
        id: "/other",
        title: "Other",
        icon: otherIcon,
        color: "text-otherColor",
        style: style + "hover:text-otherColor",
    },
    {
        id: "/art3D",
        title: "Art 3D",
        icon: art3dIcon,
        color: "text-art3DColor",
        style: style + "hover:text-art3DColor",
    },
];

// # CONSTANTS
export const animationFilter = "animation"
export const photographFilter = "photograph"
export const illustrationFilter = "illustration"
export const comicFilter = "comic"
export const visible = "visible"
export const hidden = "invisible"

// # ICONS
import logo from "./assets/icons/logo.svg";
import musicIcon from "./assets/icons/sectionMusic.svg";
import musicPlay from "./assets/icons/musicPlay.svg";
import musicPause from "./assets/icons/musicPause.svg";
import illustrationIcon from "./assets/icons/sectionIllustration.svg";
import videogameIcon from "./assets/icons/sectionVideogames.svg";
import otherIcon from "./assets/icons/sectionOthers.svg";
import art3dIcon from "./assets/icons/section3DArt.svg";
import searchIcon from "./assets/icons/search.svg"

import videogameDictPath from "./assets/videogames/videogameDict.json"
import musicDictPath from "./assets/music/musicDict.json"
import otherDictPath from "./assets/other/otherDict.json"
import illustrationDictPath from "./assets/illustration/illustrationDict.json"
import art3dDictPath from "./assets/art3D/art3dDict.json"


export {
  logo,
  musicIcon,
  musicPlay,
  musicPause,
  illustrationIcon,
  videogameIcon,
  otherIcon,
  art3dIcon,
  searchIcon,

  videogameDictPath,
  musicDictPath,
  otherDictPath,
  illustrationDictPath,
  art3dDictPath,
}