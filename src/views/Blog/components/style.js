import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Componente = styled('div')(({ theme }) => css``);

export const Content = styled('div')(
  ({ theme }) => css`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .main-button {
      font-size: ${theme.typography.size(16)};
      font-weight: 600;
      &.back-button {
        font-size: ${theme.typography.size(13)};
        text-transform: none;
      }
    }
  `
);

export const PostListWrapper = styled('div')(
  ({ theme }) => css`
    .post-title {
      color: ${theme.hexs.color.highlight};
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    .post-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: ${theme.hexs.color.light};
      font-size: ${theme.typography.size(14)};
      li {
        display: flex;
        gap: 5px;
        &:hover {
          color: ${theme.hexs.color.error};
        }
        &::before {
          content: '';
          display: block;
          margin-top: 5px;
          width: 8px;
          min-width: 8px;
          max-width: 8px;
          height: 8px;
          min-height: 8px;
          max-height: 8px;
          flex-basis: 8px;
          border-radius: 100%;
          background: ${theme.hexs.background.pink};
        }
      }
    }
  `
);

export const UserPostWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  `
);
