import React from 'react'
import { Navbar } from '..'
import { GlobalStyles } from '../../theme/GlobalStyles'
import Footer from '../Footer'
import { Div, Main } from './Styles'




function Layout({children}) {


    // const [openMenu, setOpenMenu] = useState(false)
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setOpenMenu(!openMenu);
    //     console.log('link clicked')
    // }

    return (
        <Div>
            <GlobalStyles />
            <Main>{children}</Main>
            <Footer />
        </Div>
    )
}

export default Layout
