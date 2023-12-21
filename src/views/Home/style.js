import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HomeWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .message {
      width: min(90%, 500px);
    }
  `
);

export const UsersList = styled('div')(
  ({ theme }) => css`
    width: min(90%, 500px);
    li {
      padding: 5px 0;
      color: ${theme.hexs.color.light};
      font-size: ${theme.typography.size(15)};
      .permission {
        font-weight: bold;
        color: ${theme.hexs.color.highlight};
        font-size: ${theme.typography.size(18)};
      }
    }
  `
);
