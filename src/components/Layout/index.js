import React from 'react'
import { Navbar } from '..'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Div, Main, Footer } from './Styles'




function Layout({children}) {


    // const [openMenu, setOpenMenu] = useState(false)
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setOpenMenu(!openMenu);
    //     console.log('link clicked')
    // }

    return (
        <Div>
            <Navbar />
            <GlobalStyles />
            <Main>{children}</Main>
            <Footer />
        </Div>
    )
}

export default Layout
