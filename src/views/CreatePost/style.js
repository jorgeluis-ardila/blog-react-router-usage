import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
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
    fieldset {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      input {
        text-transform: none;
        letter-spacing: 0.2px;
        font-size: ${theme.typography.size(16)};
      }
    }
    label {
      font-size: ${theme.typography.size(14)};
      color: ${theme.hexs.color.light};
    }
  `
);

export const ButtonWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    .main-button {
      font-weight: 600;
      font-size: ${theme.typography.size(18)};
    }
  `
);
