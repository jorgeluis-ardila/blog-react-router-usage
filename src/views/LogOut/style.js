import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContentWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .message {
      font-size: ${theme.typography.size(20)};
      color: ${theme.hexs.color.light};
    }
  `
);
