import React from 'react';
import styled, { css } from 'styled-components'

const HeaderOutline = styled.div`
    background:#8ac6d1;
    padding:0.5rem 0;
`
const Title = styled.h1`
    color: #ffb6b9;
    margin:0;
    font-size:3.5em;
    text-shadow:0 15px 15px rgb(0 0 0 / 25%);
    border-bottom:1.5px solid #e6e8ff;
    overflow:hidden;
    padding-left:0.5rem;
    margin-bottom:1rem;
`

const Header = ():JSX.Element => {
  return (
    <HeaderOutline>
        <Title>ぼくまさし</Title>
    </HeaderOutline>
  );
}

export default Header;