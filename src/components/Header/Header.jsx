import { NavList, NavListItemLink, StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <NavList>
        <li>
          <NavListItemLink to="/">Settings</NavListItemLink>
        </li>
        <li>
          <NavListItemLink to="/Document">Document</NavListItemLink>
        </li>
      </NavList>
    </StyledHeader>
  );
};
