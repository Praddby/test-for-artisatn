import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #303240;
  overflow: hidden;
`;

export const PageNavigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 50px;
`;

export const HeaderLink = styled(NavLink)`
  border-bottom: 2px solid transparent;
  text-decoration: none;
  font-size: 16px;
  margin-left: 20px;
  color: #ffffff;

  &.active {
    color: #30b6dd;
    border-bottom: 2px solid #30b6dd;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  margin-left: 50px;
  color: white;
  text-decoration: none;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
