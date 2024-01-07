import { Leva } from 'leva'       
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../hoc';
import '../style.css'
import { art3dDictPath, illustrationDictPath, musicDictPath, otherDictPath, videogameDictPath } from '../constants';

// const Home = React.lazy(() => import('./Home'));
// const Illustration = React.lazy(() => import('./Illustration'));
// const Music = React.lazy(() => import('./Music'));
// const Other = React.lazy(() => import('./Other'));
// const Videogames = React.lazy(() => import('./Videogames'));
// const Art3D = React.lazy(() => import('./Art3D'));

import {Home, Illustration, Music, Other, Videogames, Art3D} from "./index"

const Transition = () => {

    return (
        <>
            <motion.div
                className="slide-in"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            /> 
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}


function HomeWrapper(Component) {

    return (
        <Suspense fallback={<Transition/>}>
            <Component/>
        </Suspense>
    )
}

function App() {

    return (
        // <Leva collapsed/>
        <AnimatePresence mode="wait">
    
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={ HomeWrapper(Home) }/>
                    <Route path="/illustration" element={ SectionWrapper(Illustration, illustrationDictPath) }/>
                    <Route path="/videogames" element={ SectionWrapper(Videogames, videogameDictPath) }/>
                    <Route path="/music" element={ SectionWrapper(Music, musicDictPath) }/>
                    <Route path="/other" element={ SectionWrapper(Other, otherDictPath) }/>
                    <Route path="/art3D" element={ SectionWrapper(Art3D, art3dDictPath) }/>
                </Routes>

            </BrowserRouter>
    
        </AnimatePresence>
    )
}

export default App