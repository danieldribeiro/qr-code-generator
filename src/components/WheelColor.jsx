import React from 'react';
import { CirclePicker } from 'react-color';

const ColorPickerRound = ({ handleColor }) => {
  // Cores padrão do CirclePicker
  const defaultColors = [
    '#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', 
    '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#FF0000', '#00FF00',
    '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080'
  ];

  // Adicionando a cor preta à lista de cores padrão
  const colorsWithBlack = [...defaultColors, '#000000'];

  return (
    <CirclePicker 
      colors={colorsWithBlack} 
      onChange={handleColor} 
      className='color-pickers' 
    />
  );
};

export default ColorPickerRound;
