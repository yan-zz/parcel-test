import React from 'react';
import styled from 'styled-components';

export function Hello() {
  const Title = styled.h1`
    width: fit-content;
    border: solid rgb(179, 0, 89);
    border-radius: 7%;
    padding: 3px;
    font-size: xx-large;
    color: 222;
  `;

  return <Title>Hello</Title>;
}

export default Hello;
