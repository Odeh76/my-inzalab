import React from 'react'
import { Layout } from '../../components'
import { NominateBtn } from '../../components/Buttons/Nominate/Styles'
import { TwentyFiveIPContainer, TwentyFiveIPMainHeader, TwentyFiveIPMainImage } from './Styles'



function TwentyFiveUnderTwentyFiveIP () {
    return (
        <>
        <Layout>
            <TwentyFiveIPContainer>
                <TwentyFiveIPMainImage />
                <TwentyFiveIPMainHeader>25 Under 25</TwentyFiveIPMainHeader>
                <NominateBtn>Nominate</NominateBtn>
            </TwentyFiveIPContainer>
        </Layout>
        </>
    )
}

export default TwentyFiveUnderTwentyFiveIP 