import React from 'react';
import styled from 'styled-components';

const PokeBall = () => {
  return (
    <PokeBallStyled>
      <PokeballTop></PokeballTop>
      <PokeBallCenter></PokeBallCenter>
      <PokeballDown></PokeballDown>
    </PokeBallStyled>
  )
}

const PokeBallStyled = styled.div`
  border: 14px solid #222;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const PokeballTop = styled.div`
  width: 100%;
  height: 50%;
  background: #e3350d;
  border-bottom: 8px solid black;
`;

const PokeBallCenter = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f3f3f3;
  border: 10px solid black;
  position: absolute;
  top: 35%;
  left: 35%;
  right: 0;
  /* transform: translateY(100%) translateX(100%); */
  &::before {
    display: block;
    width: 50%;
    height: 50%;
    content: '';
    background: #000;
    border-radius: 50%;
    margin: 0 auto;
    transform: translateY(50%);
  }
`;

const PokeballDown = styled.div`
  width: 100%;
  height: 50%;
  background: #f3f3f3;
  border-top: 8px solid black;
`;

export default PokeBall;
