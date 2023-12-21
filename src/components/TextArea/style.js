import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextAreaWrapper = styled('div')(
  ({ theme }) => css`
    display: inline-block;
    position: relative;
    max-height: 100px;
    border-radius: 15px;
    padding: 8px;
    background-color: ${theme.hexs.background.darkSupply};
    &.focused {
      outline: 1px solid ${theme.hexs.background.pink};
    }
  `
);
export const TextAreaStyled = styled('textarea')(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border: none;
    color: ${theme.hexs.color.light};
    font-size: ${theme.typography.size(14)};
    line-height: 160%;
    resize: none;
    &::placeholder {
      letter-spacing: 0;
      color: ${theme.darken(theme.hexs.color.light, 50)};
    }
  `
);
