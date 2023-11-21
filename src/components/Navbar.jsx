import React, { useState } from 'react'

import { styles } from '../styles';
import { navLinks, CustomLink } from '../constants/constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
        const [active, setActive] = useState();
        const [toggle, setToggle] = useState(false);
        // const [scrolled, setScrolled] = useState(false);

        return (

            <nav className={`${styles.paddingX} ${active} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
                
                <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

                    <ul className='lit-none hidden md:flex flex-row gap-5'>
                        <CustomLink to="/" key="mainLogo" className='flex items-center gap-2'
                            onClick={() => { setActive("hidden") }}
                        >
                            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                        </CustomLink>

                        
                        {/* <CustomLink to={currentSection.id}  
                            key="currentSectionLogo" className='flex items-center gap-2'
                            onClick={() => {
                                window.scroll(0, 0)
                            }}
                        >
                            <img src={currentSection.icon} alt="logoSection" className='w-9 h-9 object-contain' />
                        </CustomLink> */}
                    </ul>
                
                    <ul className='lit-none hidden md:flex flex-row gap-5'>
                        {navLinks.map((link) => (
                            <CustomLink to={`${link.id}`} key={link.id + "Navbar"}>
                                <img src={link.icon} alt="logo" className='w-7 h-7 object-contain' />
                            </CustomLink>
                        ))}
                    </ul>

                    <div className='md:hidden flex flex-1 justify-end itms-center'>
                        <img src={toggle ? close : menu} 
                            alt="menu" 
                            className='w-[28px] h-[28px] object-contain cursor-pointer'
                            onClick={() => setToggle(!toggle)}
                        />

                        <div className={`${!toggle ? 'hidden':'flex'} 
                        p-6 white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                {navLinks.map((link) => (
                                    <CustomLink to={`${link.id}`} key={link.id + "Toggle"} 
                                            className={"font-poppins font-medium cursor-pointer text-[16px]"}
                                            onClick={() => { setToggle(!toggle) }}>
                                        <img src={link.icon} alt="logo" className='w-7 h-7 object-contain' />
                                    </CustomLink>
                                ))}
                            </ul>

                        </div>

                    </div>

                </div>


            </nav>
        )

}
export default Navbar