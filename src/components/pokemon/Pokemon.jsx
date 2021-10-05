import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiData } from '../../context/apiContext';
import config from '../../config/config';
import Canvas from '../canvas/Canvas';
import { typeColor } from '../../styles/typeColors';
import PokeBall from '../pokeBall/PokeBall';

const Pokemon = () => {
  // return (
  //   <PokeBall />
  // )
  const { state } = useContext(apiData);
  const { pokeData: pokemon, colors } = state;
  console.log(state);

  if(pokemon.sprites) {
    return (
      <>
      <PokemonStyled>
        <LeftOptions>
  
        </LeftOptions>
        <PokemonData colors={colors}>
          <Canvas />
          <PkSprite src={`${config.ASSETS_URL}/${pokemon.id >= 100 ? pokemon.id : `0${pokemon.id}`}.png`} alt={`Imagen de ${pokemon.name}`} />
          <PkName colors={colors}>{pokemon.name} - #{pokemon.id}</PkName>
          <PkInfo>
            <P colors={colors}>Type: {pokemon.types.map((type) => (
              <PkType
              type={type}
              typeColor={typeColor}
              key={type.slot}
              >
                {type.type.name}
              </PkType>
            ))}</P>
            <P colors={colors}>Height: {pokemon.height} m</P>
            <P colors={colors}>Weight: {pokemon.weight / 10} Kg</P>
          </PkInfo>
        </PokemonData>
        <RightOptions>
  
        </RightOptions>
      </PokemonStyled>
      <PkGradient colors={colors}></PkGradient>
      </>
    )
  } else {
    return <h1>Cargando</h1>
  }
}

const PokemonStyled = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  min-height: 600px;
  height: 500px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left-options pokemon right-option";
`;

const LeftOptions = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-area: "right-options";
`;

const PokemonData = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PkSprite = styled.img`
  width: 210px;
  height: 210px;
  margin: 0 auto;
  z-index: 1;
`;

const PkName = styled.strong`
  width: 80%;
  margin: 0 auto;
  font-size: 28px;
  text-align: center;
  margin-top: -1em;
  border-radius: 10px;
  padding:.1em 0;
  /* background: ${({ colors }) => colors.length > 0 ? `rgba(${colors[0].red}, ${colors[0].green}, ${colors[0].blue})` : ''}; */
  background-image: ${({colors}) => colors.length > 0 ? `linear-gradient(to right, rgba(${colors[0].red}, ${colors[0].green}, ${colors[0].blue}) 0%, rgba(${colors[1].red}, ${colors[1].green}, ${colors[1].blue}) 31%, rgba(${colors[2].red}, ${colors[2].green}, ${colors[2].blue}) 100%)` : ''};
  box-shadow: 0px -8px 15px rgba(0, 0, 0, .1);
  color: white;
`;

const PkInfo = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .6em;
  margin-top: 1em;
  padding: 0 2.8em;
  `;

const P = styled.p`
  color: #333;
  display: flex;
`;

const PkType = styled.p`
  /* border: 1px solid red; */
  color: ${({typeColor, type}) => typeColor ? typeColor[type.type.name].font : ''};
  padding: 0 .6em;
  margin-left: .4em;
  font-size: 14px;
  background: ${({typeColor, type}) => typeColor ? typeColor[type.type.name].background : ''};
`;

const PkGradient = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ colors }) => colors.length > 0 ? `linear-gradient(to top, rgba(${colors[0].red}, ${colors[0].green}, ${colors[0].blue}) -20%, #fff 100%)` : ''};
  opacity: .6;
  position: absolute;
  bottom: 0;
`;

const RightOptions = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-area: "right-options";
`;

export default Pokemon;
