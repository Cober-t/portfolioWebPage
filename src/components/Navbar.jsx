        import React, { useState } from 'react'

import { styles } from '../styles';
import { navLinks, CustomLink, PrintIcons, DrawCurrentIcon, DrawNameSection } from '../constants/constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
        const [active, setActive] = useState();
        const [toggle, setToggle] = useState(false);

        return (

            <nav className={`${active} sm:px-14 px-2 z-20 bg-backgroundColor border-b-3 border-black-100`}>
                
                <div className="w-full flex items-center">

                    <ul className='list-none md:flex gap-8 justify-items-start'>
                        <CustomLink to="/" key="mainLogo" className='flex gap-2'
                            onClick={() => { window.scroll(0, 0); setActive("hidden"); }}
                        >
                            <img src={logo} alt="logo" className='w-7 h-7 object-contain' />
                        </CustomLink>

                        {navLinks.map((link) => (
                            <DrawCurrentIcon identifier={link.id} object={link}/>
                        ))}

                    </ul>
                    <div className="ml-5 mr-10 h-[4rem] w-1 bg-black-100 justify-items-start"/>


                    <div className='justify-items-center'>
                        {navLinks.map((link) => (
                            <DrawNameSection identifier={link.id} object={link}/>
                        ))}
                    </div>

                    <div className="ml-10 mr-5 h-[4rem] w-1 bg-black-100 md:justify-items-end"/>
                    <ul className='md:flex gap-5 list-none justify-items-end'>

                        {navLinks.map((link) => (
                            <PrintIcons identifier={link.id} object={link}/>
                        ))}
                    </ul>

                    {/* <div className='md:hidden flex flex-1 justify-end itms-center'>
                        <img src={toggle ? close : menu} 
                            alt="menu" 
                            className='w-[28px] h-[28px] object-contain cursor-pointer'
                            onClick={() => { window.scroll(0, 0); setToggle(!toggle); }}
                            />

                        <div className={`${!toggle ? 'hidden':'flex'} 
                        p-6 white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                            <ul className='list-none flex justify-end items-start list-none flex-col gap-4'>
                                {navLinks.map((link) => (
                                    <CustomLink to={`${link.id}`} key={link.id + "Toggle"} 
                                            className={"font-poppins font-medium cursor-pointer text-[16px]"}
                                            onClick={() => { window.scroll(0, 0); setToggle(!toggle); }}>
                                        <img src={link.icon} alt="logo" className='w-7 h-7 object-contain' />
                                    </CustomLink>
                                ))}
                            </ul>
                        </div>

                    </div> */}

                </div>

            </nav>
        )
}

export default Navbar
