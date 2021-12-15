import React from 'react'
import { Sidebar, NavLink } from './Styles'



function Navbar() {
    return (
        <Sidebar>
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
