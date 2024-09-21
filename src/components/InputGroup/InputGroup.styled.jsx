import styled from "styled-components";
import { colors } from "../../constants/colors";

export const StyledGroup = styled.div`
  padding: 20px;
  color: ${colors.PRIMARY};
  ${({ $whiteTheme }) =>
    $whiteTheme &&
    `color: ${colors.WHITE};
  background-color: ${colors.BLACK};`}
`;

export const WrapField = styled.div`
  position: relative;
`;
export const WrapInput = styled.div`
  min-width: 245px;

  ${({ $labelPosition }) => {
    switch ($labelPosition) {
      case "Side":
        return `display:flex;
                align-items: baseline;
                justify-content: space-between;`;

      default:
        return;
    }
  }}
`;
