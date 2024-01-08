import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
// const Navbar = React.lazy(() => import('./Navbar'));

const Transition = () => {

    return (
        <>
            <motion.div
                className="w-full h-full bg-black-100 fixed top-0 left-0 origin-bottom z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            /> 
            <motion.div
                className="w-full h-full bg-black-100 fixed top-0 left-0 origin-bottom z-20"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

function SectionWrapper(Component, path) {
    
    const [data, setData] = useState()
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        
        fetch(path)
        .then((response) => response.json())
        .then((data) => {
            setData(data) 
            setIsLoaded(true)
        });
    }, []);

    if (isLoaded) {
        return (
            // <Suspense fallback={<Transition />}>
                <div className={`relative z-0 bg-backgroundColor overflow-none`}>
                    <Navbar/>
                    <Component data={data}/>
                    {/* <Transition /> */}
                    
                </div>
            // </Suspense>
        )
    }
    // else {
    //     return (
    //         <Transition />
            // <div className="w-screen h-screen flex text-[42px] items-center justify-center text-black-100 bg-backgroundColor"> 
            //     LOADING .... 
            // </div>
    //     )
    // }
}

export default SectionWrapper;