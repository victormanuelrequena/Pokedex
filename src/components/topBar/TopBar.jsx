import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { apiData } from '../../context/apiContext';
import TYPES from '../../actions/apiReducerTypes';

const TopBar = () => {
  const [pokeSearch, setPokeSearch] = useState('');
  const { getPokemonsData, state } = useContext(apiData);
  const { colors } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    getPokemonsData(pokeSearch);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setPokeSearch(value);
  }

  return (
    <TopBarStyled colors={colors}>
      <Title>Pokedex App</Title>
      <FormSearchPk onSubmit={handleSubmit}>
      <LabelSearch>
        Search Pokemon by id
      <InputSearchPk
      type="text" 
      placeholder="Buscar Pokemon por nombre o id"
      value={pokeSearch}
      onChange={handleChange}
      />
      </LabelSearch>
      </FormSearchPk>
    </TopBarStyled>
  )
}

const TopBarStyled = styled.div`
  width: 100%;
  height: 4em;
  /* border: 1px solid red; */
  padding: 0 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: ${({colors}) => colors.length > 0 ? `linear-gradient(to right, rgba(${colors[0].red}, ${colors[0].green}, ${colors[0].blue}) 0%, rgba(${colors[1].red}, ${colors[1].green}, ${colors[1].blue}) 31%, rgba(${colors[2].red}, ${colors[2].green}, ${colors[2].blue}) 100%)` : ''};
  box-shadow: 0px -8px 15px rgba(0, 0, 0, .1);
`;

const Title = styled.h1`

`;

const FormSearchPk = styled.form`

`;

const LabelSearch = styled.label`
  display: flex;
  flex-direction: column;
`;

const InputSearchPk = styled.input`
  font-size: 12px;
  padding: .6em 1em;
  border-radius: 6px;
  outline: none;
  border: 1px solid black;
`;

export default TopBar;
