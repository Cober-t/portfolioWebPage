import {
    musicIcon,
    illustrationIcon,
    videogameIcon,
    art3dIcon,
    otherIcon,
    testSong,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";


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

export const animationFilter = "animation"
export const photographFilter = "photograph"
export const illustrationFilter = "illustration"
export const comicFilter = "comic"
const illutrationList = [
    {
        title: "Web Developer",
        icon: web,
        tag: photographFilter
    },
    {
        title: "React Native Developer",
        icon: mobile,
        tag: illustrationFilter
    },
    {
        title: "Backend Developer",
        icon: backend,
        tag: comicFilter
    },
    {
        title: "Content Creator",
        icon: creator,
        tag: animationFilter
    },
    {
        title: "Web Developer",
        icon: web,
        tag: photographFilter
    },
    {
        title: "React Native Developer",
        icon: mobile,
        tag: illustrationFilter
    },
    {
        title: "Backend Developer",
        icon: backend,
        tag: comicFilter
    },
    {
        title: "Webbb  Developer",
        icon: web,
        tag: photographFilter
    },
    {
        title: "Native Developer",
        icon: mobile,
        tag: illustrationFilter
    },
    {
        title: "Developer",
        icon: backend,
        tag: comicFilter
    },
    {
        title: "Creator",
        icon: creator,
        tag: animationFilter
    },
    {
        title: "Web",
        icon: web,
        tag: photographFilter
    },
    {
        title: "React Native",
        icon: mobile,
        tag: illustrationFilter
    },
    {
        title: "Backend",
        icon: backend,
        tag: comicFilter
    },
    {
        title: "Content",
        icon: creator,
        tag: animationFilter
    },
];

const musicList = [
    {
        name: "HTML 5",
        icon: html,
        path: testSong,
        text: "loren ipstum  loren ipstum  loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum  loren ipstum  loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum."
    },
    {
        name: "CSS 3",
        icon: css,
        path: testSong,
        text: "loren ipstum  loren ipstum  loren ipstum loren ipstum loren ipstum loren ipstum"
    },
    {
        name: "JavaScript",
        icon: javascript,
        path: testSong,
        text: "loren ipstum  loren ipstum  loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum."
    },
    {
        name: "TypeScript",
        icon: typescript,
        path: testSong,
        text: "loren ipstum  loren ipstum  loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum \
        loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum loren ipstum."
    },
shopify];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { illutrationList, musicList, experiences, testimonials, projects };