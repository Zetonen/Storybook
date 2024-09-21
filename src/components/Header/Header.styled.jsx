import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 16px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;
export const NavListItemLink = styled(Link)`
  display: block;
  font-size: 16px;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
