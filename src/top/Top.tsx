import React from 'react';
import styled, { css } from 'styled-components'
import Header from '../parts/Header';
import Body from './Body';

const Top = ():JSX.Element => {
  return (
    <>
        <Header></Header>
        <Body></Body>
    </>
  );
}

export default Top;