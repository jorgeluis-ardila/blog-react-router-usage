import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostWrapper = styled('div')(
  ({ theme }) => css`
    padding: 20px 5%;
    width: 100%;
    ~ .main-button {
      font-weight: 500;
      font-size: ${theme.typography.size(16)};
    }
    h2 {
      font-size: ${theme.typography.size(20)};
      font-weight: bold;
      text-align: center;
      color: ${theme.hexs.color.highlight};
    }
    p {
      color: ${theme.hexs.color.light};
      line-height: 180%;
      &.author {
        font-style: italic;
        padding: 15px 0;
        .author__name {
          font-weight: bold;
          color: ${theme.hexs.color.error};
        }
      }
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
  `
);
