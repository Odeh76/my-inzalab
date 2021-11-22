import React, { useState } from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Div, Main, Footer, Navbar, NavLink } from './Styles'

function Layout({children}) {


    const [openMenu, setOpenMenu] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setOpenMenu(!openMenu);
        console.log('link clicked')
    }

    return (
        <Div>
            <Navbar openMenu={openMenu} onClick={handleClick}>
            {/* <NavLink>Home</NavLink>
            <NavLink>25 Under 25</NavLink>
            <NavLink>Programs</NavLink>
            <NavLink>Resources</NavLink>
            <NavLink>Meet The ITOs</NavLink>
            <NavLink>Contact</NavLink> */}
            </Navbar>
            <GlobalStyles />
            <Main>{children}</Main>
            <Footer />
        </Div>
    )
}

export default Layout
