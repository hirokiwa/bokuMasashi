import React from 'react';
import styled, { css } from 'styled-components'

const BodyOutline = styled.div`
    display:flex;
    background:#fae3d9;
    height: 100vh;
`

const Body = ():JSX.Element => {
  return (
    <BodyOutline>
        ぼくまさし
    </BodyOutline>
  );
}

export default Body;