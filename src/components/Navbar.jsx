import React, { useState } from 'react'
import { logo, navLinks, CustomLink, 
    PrintIcons, DrawCurrentIcon, DrawNameSection } from '../constants';


const Navbar = () => {
        const [active, setActive] = useState();

        return (

            <nav className={`${active} select-none absolute top-0 py-9 z-10 flex w-full items-center bg-backgroundColor border-b-2 border-black-100`}>

                {/*=========  MAIN ICONS  ==========*/}
                <div className='flex gap-6 absolute left-0 px-10'>
                    <CustomLink to="/" key="mainLogo" className='flex gap-2'
                        onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
                    >
                        <img src={logo} alt="logo" className='w-7 h-7 object-contain' />
                    </CustomLink>

                    {navLinks.map((link) => (
                        <DrawCurrentIcon identifier={link.id} object={link}/>
                    ))}
                </div>

                {/*=======  VERTICAL LINE 1  =======*/}
                <div className="absolute left-[9rem] h-full w-0.5 bg-black-100"/>

                {/*=====  NAME CURRENT SECTION  ====*/}
                <div className='absolute left-1/2 -translate-x-1/2 md:-translate-x-2/3'>
                    {navLinks.map((link) => (
                        <DrawNameSection identifier={link.id} object={link}/>
                    ))}
                </div>

                {/*=======  VERTICAL LINE 2  =======*/}
                <div className="absolute right-[9rem] md:right-[13rem] h-full w-0.5 bg-black-100"/>

                {/*========  SECTION ICONS  ========*/}
                <div className='md:flex absolute right-0 px-10 gap-4 gap-y-1 xs:grid xs:grid-cols-2'>

                    {navLinks.map((link) => (
                        <PrintIcons identifier={link.id} object={link}/>
                    ))}
                </div>

            </nav>
        )
}

export default Navbar
