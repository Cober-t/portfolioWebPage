import React, { useState } from 'react'
import { navLinks, CustomLink, PrintIcons, DrawCurrentIcon, DrawNameSection } from '../constants/constants';
import { logo } from '../assets';


const Navbar = () => {
        const [active, setActive] = useState();

        return (

            <nav className={`${active} xs:px-10 sm:px-10 xs:py-9 sm:py-9 md:py-6 z-20 flex w-full items-center bg-backgroundColor border-b-2 border-black-100`}>

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
                <div className="absolute left-[9rem] xs:h-[5rem] sm:h-[5rem] h-[4rem] w-0.5 bg-black-100"/>

                {/*=====  NAME CURRENT SECTION  ====*/}
                {navLinks.map((link) => (
                    <DrawNameSection identifier={link.id} object={link}/>
                ))}

                {/*=======  VERTICAL LINE 2  =======*/}
                <div className="absolute right-[9rem] md:right-[13rem] xs:h-[5rem] sm:h-[5rem] h-[4rem] w-0.5 bg-black-100"/>

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
