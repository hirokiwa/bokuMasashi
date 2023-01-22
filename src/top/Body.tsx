import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import masashi from '../../src/imgSource/masashi.png'

const BodyOutline = styled.div`
    display:flex;
    background:#fae3d9;
    height: 100vh;
`
const MasashiDisplay = styled.div`

`
const DataDisplay = styled.div`

`

const Body = (): JSX.Element => {
    const [totalCarolie, setTotalCarolie] = useState(0);

    const GrowMasashi = styled.img`
        height:70%;
        transform: scaleX(${String( 1 + totalCarolie/10000 )})
    `
    
    return (
        <BodyOutline>
            <MasashiDisplay> 
                <GrowMasashi src={masashi}></GrowMasashi>
            </MasashiDisplay>
            <DataDisplay>
            </DataDisplay>
        </BodyOutline>
    );
}

export default Body;