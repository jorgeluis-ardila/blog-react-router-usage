import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonStyled = styled('button')(
  ({ theme }) => css`
    display: block;
    padding: 10px 25px;
    border-radius: 15px;
    background-color: ${theme.hexs.background.red};
    color: ${theme.darken(theme.hexs.color.dark, 30)};
    font-size: ${theme.typography.size(20)};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      background-color: ${theme.lighten(theme.hexs.background.red, 10)};
    }
    &.negate {
      background-color: ${theme.hexs.background.darkSupply};
      color: ${theme.darken(theme.hexs.color.light, 30)};
      &:hover {
        background-color: ${theme.lighten(theme.hexs.background.darkSupply, 20)};
        color: ${theme.hexs.background.dark};
      }
    }
    &:disabled {
      background-color: ${theme.hexs.button.disabled};
      color: ${theme.darken(theme.hexs.button.disabled, 30)};
      cursor: default;
    }
  `
);
