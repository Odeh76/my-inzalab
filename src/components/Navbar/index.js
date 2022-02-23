import React, { useState } from 'react'
import { Sidebar, NavLink, Bars, CloseButton, NavbarLogo, UserCircle  } from './Styles'




function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    
    const handleClick = () => {setOpenMenu(!openMenu)};
    // const closeMenu = () => {setOpenMenu(false)};


    return (
        <>
        <Sidebar openMenu={openMenu}>
            <Bars onClick={handleClick} openMenu={openMenu} />
            <NavbarLogo openMenu={openMenu} to="/" />
            <CloseButton openMenu={openMenu} onClick={handleClick} />
            <NavLink openMenu={openMenu} to="/">Home</NavLink>
            <NavLink openMenu={openMenu} to="/twentyfiveundertwentyfive">25 Under 25</NavLink>
            <NavLink openMenu={openMenu} to="programs">Programs</NavLink>
            <NavLink openMenu={openMenu} to="resources">Resources</NavLink>
            <NavLink openMenu={openMenu} to="meettheitos">Meet The ITOs</NavLink>
            <NavLink openMenu={openMenu} to="contact">Contact</NavLink>
            <UserCircle openMenu={openMenu} />
        </Sidebar>
        </>
    )
}

export default Navbar
