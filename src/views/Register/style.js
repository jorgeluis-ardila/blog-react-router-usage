import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    .register-link {
      color: ${theme.hexs.color.highlight};
      font-weight: bold;
    }
  `
);

export const Form = styled('form')(
  ({ theme }) => css`
    width: min(90%, 500px);
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .main-input {
      text-transform: none;
      font-size: ${theme.typography.size(16)};
      letter-spacing: 0.3px;
    }
  `
);
