import React from 'react'
import {Main, Footer} from './LayoutStyles'


function Layout({children}) {
    return (
        <Main>
            {children}
            <Footer />
        </Main>
    )
}

export default Layout
