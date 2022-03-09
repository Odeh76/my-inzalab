import React from 'react'
import { Navbar } from '..'
import { GlobalStyles } from '../../theme/GlobalStyles'
import Footer from '../Footer'
import { Div, Main } from './Styles'




function Layout({children}) {


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
