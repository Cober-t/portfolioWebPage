import { useMatch, useLocation, useResolvedPath, Link } from 'react-router-dom';
import { useProgress } from '@react-three/drei';


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

export function DrawCurrentIcon({object}) {

    const location = useLocation()

    if ( object.id === location.pathname ) 
        return (
            <CustomLink to={`${object.id}`} 
                onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
            >
                <img src={object.icon} alt="logo"/>
            </CustomLink>
        )
}

export function DrawNameSection({object}) {

    const location = useLocation()

    if ( object.id == location.pathname)
        return (
            <div className={`${object.color} xs:text-[32px] sm:text-[32px] md:text-[32px] uppercase tracking-wider text-black-100`}> 
                {object.title}
            </div>
        )
}

const style= "select-none xs:pl-6 md:pl-[50px] xs:text-[48px] md:text-[62px] uppercase text-black-100"
export const navLinks = [
    {
        id: "/music",
        title: "Music",
        icon: musicIcon,
        color: "text-musicColor",
        style: style + " hover:text-musicColor",
    },
    {
        id: "/illustration",
        title: "Illustration",
        icon: illustrationIcon,
        color: "text-illustrationColor",
        style: style + " hover:text-illustrationColor",
    },
    {
        id: "/videogames",
        title: "Videogames",
        icon: videogameIcon,
        color: "text-videogamesColor",
        style: style + " hover:text-videogamesColor",
    },
    {
        id: "/other",
        title: "Other",
        icon: otherIcon,
        color: "text-otherColor",
        style: style + " hover:text-otherColor",
    },
    {
        id: "/art3D",
        title: "Art 3D",
        icon: art3dIcon,
        color: "text-art3DColor",
        style: style + " hover:text-art3DColor",
    },
];

function ModelLoader() {
    const { active, progress, errors, item, loaded, total } = useProgress()

    const reference = useRef()

    if(loadingBarElement != null && reference != undefined)
    {
        if(loaded)
        {
            window.setTimeout(() => {
                gsap.to(
                    reference.material.opacity, 
                    { duration: 3 , value: 0, delay: 1 })   
                // Update loadingBarElement
                loadingBarElement.classList.add('ended')
                loadingBarElement.style.transform = ''  
            }, 500)
        }
        if (progress)
            loadingBarElement.style.transform = `scaleX(${progress})`
    }

    return <>
        <mesh position={[0, 0, 0]} scale={[2, 3, 2]} rotation-x={Math.PI*0.5} rotation-z={Math.PI*0.5} rotation-y={-Math.PI/1.5}>
            <planeBufferGeometry attach="geometry" args={[25, 15]} />
            <meshBasicMaterial attach="material" color="black" transparent={true} />
        </mesh>
    </>
    // return <Html center>{progress} % loaded</Html>
}

// # CONSTANTS
export const animationFilter = "animation"
export const photographFilter = "photograph"
export const illustrationFilter = "illustration"
export const comicFilter = "comic"
export const visible = "visible"
export const hidden = "invisible"

// # ICONS
import logo from "/assets/icons/logo.svg";
import musicIcon from "/assets/icons/sectionMusic.svg";
import musicPlay from "/assets/icons/musicPlay.svg";
import musicPause from "/assets/icons/musicPause.svg";
import illustrationIcon from "/assets/icons/sectionIllustration.svg";
import videogameIcon from "/assets/icons/sectionVideogames.svg";
import otherIcon from "/assets/icons/sectionOthers.svg";
import art3dIcon from "/assets/icons/section3DArt.svg";
import searchIcon from "/assets/icons/search.svg"

const videogameDictPath = "/assets/videogames/videogameDict.json"
const musicDictPath = "/assets/music/musicDict.json"
const otherDictPath = "/assets/other/otherDict.json"
const illustrationDictPath = "/assets/illustration/illustrationDict.json"
const art3dDictPath = "/assets/art3D/art3dDict.json"


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

    ModelLoader
}