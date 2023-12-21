import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .greeting {
      font-size: ${theme.typography.size(30)};
      color: ${theme.hexs.color.light};
      .username {
        color: ${theme.hexs.color.highlight};
        font-weight: bold;
      }
    }
  `
);

export const InfoWrapper = styled('div')(
  ({ theme }) => css`
    width: min(90%, 500px);
    h3 {
      font-size: ${theme.typography.size(20)};
      font-weight: bold;
      text-transform: uppercase;
      color: ${theme.hexs.color.error};
      text-align: center;
      margin-bottom: 20px;
    }
    ul {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: auto;
      gap: 15px;
      p {
        padding: 5px 0;
        color: ${theme.hexs.color.light};
        font-size: ${theme.typography.size(15)};
        &.title {
          font-weight: bold;
          color: ${theme.hexs.color.highlight};
          font-size: ${theme.typography.size(18)};
        }
      }
    }
  `
);

export const PermissionList = styled('div')(
  ({ theme }) => css`
    width: min(90%, 500px);
    h3 {
      font-size: ${theme.typography.size(20)};
      font-weight: bold;
      text-transform: uppercase;
      color: ${theme.hexs.color.error};
      text-align: center;
      margin-bottom: 20px;
    }
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
