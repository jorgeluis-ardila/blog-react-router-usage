import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ErrorPageWrapper = styled('div')(
  ({ theme }) => css`
    padding: 5% 5%;
    h1 {
      color: ${theme.hexs.background.red};
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      color: ${theme.hexs.color.light};
      font-size: ${theme.typography.size(20)};
    }
  `
);
