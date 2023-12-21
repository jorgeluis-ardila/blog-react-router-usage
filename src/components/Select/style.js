import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SelectStyled = styled('select')(
  ({ theme }) => css`
    height: 50px;
    border-radius: 15px;
    padding: 8px;
    border: none;
    background-color: ${theme.hexs.background.darkSupply};
    color: ${theme.hexs.color.light};
    font-size: ${theme.typography.size(20)};
    letter-spacing: ${theme.typography.size(3)};
    line-height: 34px;
    text-align: center;
    text-transform: uppercase;
    &:focus {
      outline: 1px solid ${theme.hexs.background.pink};
    }
    &::placeholder {
      letter-spacing: 0;
      color: ${theme.darken(theme.hexs.color.light, 50)};
    }
  `
);
