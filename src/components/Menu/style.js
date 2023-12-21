import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled('nav')(
  ({ theme }) => css`
    padding: 20px 15px;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
    }
  `
);

export const Link = styled(NavLink)(
  ({ theme }) => css`
    color: ${theme.hexs.color.light};
    &.active {
      color: ${theme.hexs.button.active};
      font-weight: bold;
    }
  `
);
