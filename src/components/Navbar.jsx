import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { logo, navLinks, CustomLink } from '../constants';


const Navbar = () => {
        const [active, setActive] = useState();
        const [currentSection, setCurrentSection] = useState()
        const location = useLocation()

        useEffect(() => {

            const currentIcon = navLinks.filter((link) => link.id === location.pathname)
            setCurrentSection(currentIcon[0])


        }, [location.pathname])


        return (

            <nav className={`${active} select-none absolute top-0 py-9 z-10 flex w-full items-center bg-backgroundColor border-b-2 border-black-100`}>

                {
                    currentSection &&
                    <div className='flex absolute gap-6 left-0 px-10'>
                        <CustomLink to="/" key="mainLogo" className='flex gap-2'
                            onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
                            >
                            <img src={logo} alt="logo" className='w-7 h-7 object-contain' />
                        </CustomLink>

                        <CustomLink to={currentSection.id} 
                            onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
                            >
                            <img src={currentSection.icon} alt="logo" className='w-6 h-6 mt-1'/>
                        </CustomLink>

                    </div>
                }

                {/*=======  VERTICAL LINE 1  =======*/}
                <div className="absolute left-[9rem] h-full w-0.5 bg-black-100"/>
                
                {
                    currentSection && 
                    <div className={`${currentSection.color} absolute left-1/2 -translate-x-1/2 md:-translate-x-2/3
                        xs:text-[32px] sm:text-[32px] md:text-[32px] uppercase tracking-wider`}> 
                        {currentSection.title}
                    </div>
                }

                {/*=======  VERTICAL LINE 2  =======*/}
                <div className="absolute right-[9rem] md:right-[13rem] h-full w-0.5 bg-black-100"/>

                <div className='md:flex absolute right-0 px-10 gap-4 gap-y-1 xs:grid xs:grid-cols-2'>

                    {navLinks.map(object => {

                        if (object.id != location.pathname ) {
                            return (
                                <ul key={object.id} className='w-6 h-6 object-contain mt-1 list-none'>
                                    <CustomLink to={`${object.id}`}
                                        onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
                                        >
                                        <img src={object.icon} alt="logo"/>
                                    </CustomLink>
                                </ul>
                            )
                        }
                    })}
                </div>

            </nav>
        )
}

export default Navbar
