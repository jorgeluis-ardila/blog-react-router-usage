import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UsersWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  `
);

export const UsersList = styled('ul')(
  ({ theme }) => css`
    width: min(90%, 500px);
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid ${theme.hexs.background.darkSupply};
      color: ${theme.hexs.color.light};
      font-size: ${theme.typography.size(15)};
      &:last-of-type {
        border: none;
      }
      .item-name,
      .highlight {
        font-weight: bold;
        color: ${theme.hexs.color.highlight};
        font-size: ${theme.typography.size(18)};
      }

      .highlight {
        font-size: ${theme.typography.size(14)};
      }

      .value {
        color: ${theme.hexs.color.light};
        font-weight: normal;
      }
      .edit {
        font-size: ${theme.typography.size(14)};
        font-weight: 500;
        padding: 10px 15px;
      }
    }
  `
);
