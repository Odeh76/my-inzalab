import React, { useState } from 'react'
import { Sidebar, NavLink, Bars, CloseButton  } from './Styles'



function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    
    // const handleClick = () => {setOpenMenu(!openMenu)};
    // const closeMenu = () => {setOpenMenu(false)};


    return (
        <Sidebar openMenu={openMenu}>
            <Bars />
            <CloseButton />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/25under25">25 Under 25</NavLink>
            <NavLink to="programs">Programs</NavLink>
            <NavLink to="resources">Resources</NavLink>
            <NavLink to="meettheitos">Meet The ITOs</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </Sidebar>
    )
}

export default Navbar
