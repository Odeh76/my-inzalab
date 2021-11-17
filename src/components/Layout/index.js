import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles'
import { Div, Main, Footer } from './Styles'


function Layout({children}) {
    return (
        <Div>
            <GlobalStyles />
            <Main>{children}</Main>
            <Footer />
        </Div>
    )
}

export default Layout
