import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MessageText = styled('p')(
  ({ theme }) => css`
    text-align: center;
    font-size: ${theme.typography.size(20)};
    color: ${theme.hexs.color.light};
  `
);
