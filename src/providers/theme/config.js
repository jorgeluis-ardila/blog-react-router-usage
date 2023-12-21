import './fonts.css';
import { mixins, utils } from './mixins';

const getThemeConfig = () => {
  const { hexToRGB, lighten, darken } = utils;
  return {
    hexToRGB,
    lighten,
    darken,
    hexs: {
      background: {
        dark: '#1E1E24',
        darkSupply: '#444140',
        red: '#E54B4B',
        pink: '#FFA987',
      },
      color: {
        light: '#F7EBE8',
        dark: '#1E1E24',
        highlight: '#deb887',
        error: utils.darken('#FFA987', 30),
      },
      button: {
        active: '#E54B4B',
        disabled: utils.lighten('#444140', 20),
        hover: utils.darken('#E54B4B', 30),
      },
    },
    typography: {
      family: {
        montserrat: 'Montserrat',
      },
      size: value => `${value / 16}rem`,
    },
  };
};

export default getThemeConfig;
