import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BlogWrapper = styled('div')(
  ({ theme }) => css`
    height: 100vh;
    h1 {
      margin-bottom: 15px;
    }
  `
);

export const ContentWrapper = styled('div')(
  ({ theme }) => css`
    display: flex;
    gap: 15px;
    height: 100%;
  `
);

export const Divider = styled('hr')(
  ({ theme }) => css`
    border: none;
    border-left: 1px solid ${theme.lighten(theme.hexs.color.dark, 10)};
  `
);

export const SideBar = styled('aside')(
  ({ theme }) => css`
    width: 30%;
    padding: 10px;
  `
);
