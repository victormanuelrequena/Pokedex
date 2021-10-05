import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { apiData } from '../../context/apiContext';

const Canvas = () => {

  const { state, setColors } = useContext(apiData);
  const { pokeData: pokemon } = state;

  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');

    function renderPokemon(pokemon) {
      // image.setAttribute('src', `${config.ASSETS_URL}/${pokemon.id}.png`);
      image.setAttribute('src', `${pokemon.sprites.front_default}`);
      image.addEventListener('load', () => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        getColorPalette(ctx);
      });
    }

    function getColorPalette(ctx) {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const quality = 90;
      let colors = [];
      for (let i = 0; i < canvas.width * canvas.height; i = i + quality) {
        const offSet = i * 4;
        const alpha = imgData[offSet + 3];
        if (alpha > 0) {
          const red = imgData[offSet];
          const green = imgData[offSet + 1];
          const blue = imgData[offSet + 2];
          colors.push({ red, green, blue })
          // console.log(colors);
          console.log('%c color', `background: rgba(${red}, ${green}, ${blue});`)
        }
      }
      setColors(colors);
      return colors;
    }

    renderPokemon(pokemon);
  }, [pokemon])

  return (
    <CanvasStyled width="100" height="100" ref={canvasRef} />
  )
}

const CanvasStyled = styled.canvas`
  border: 1px solid red;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 0;
  opacity: 0;
`;

export default Canvas
