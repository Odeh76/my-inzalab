import React, { useState, useEffect } from 'react'
import { Sidebar, NavLink, Bars, CloseButton, NavbarLogo, UserCircle, NavList  } from './Styles'
// import { motion } from 'framer-motion/dist/framer-motion'




function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => {setOpenMenu(!openMenu)};
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return (
        <>
        <Sidebar openMenu={openMenu}>
            <Bars onClick={handleClick} openMenu={openMenu} />
            <CloseButton onClick={handleClick} openMenu={openMenu} />
            <NavbarLogo openMenu={openMenu} to="/" />
            <UserCircle openMenu={openMenu} />
            <NavLink openMenu={openMenu} to="/">Home</NavLink>
            <NavLink openMenu={openMenu} to="/twentyfiveundertwentyfive">25 Under 25</NavLink>
            <NavLink openMenu={openMenu} to="programs">Programs</NavLink>
            <NavLink openMenu={openMenu} to="resources">Resources</NavLink>
            <NavLink openMenu={openMenu} to="meettheitos">Meet The ITOs</NavLink>
            <NavLink openMenu={openMenu} to="contact">Contact</NavLink>
        </Sidebar>
        </>
    )
}

export default Navbar
