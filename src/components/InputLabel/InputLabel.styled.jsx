import styled from "styled-components";
import { colors } from "../../constants/colors";

const sizes = (sz) => {
  switch (sz) {
    case "sm":
    case "md":
    case "lg":
      return `
      margin-bottom: 4px;
      font-size: 12px;`;
    case "x":
    case "xl":
    case "xxl":
      return `
      margin-bottom: 6px;
      font-size: 14px;`;

    default:
      return `
      margin-bottom: 4px;
      font-size: 12px;`;
  }
};

export const LabelInput = styled.label`
  display: block;
  ${(props) => sizes(props.$sz)}
  font-weight: 500;
  line-height: 1.67;
`;
export const Required = styled.span`
  position: relative;
  color: ${colors.RED};
  &::before {
    content: attr(data-clue);
    position: absolute;
    top: -4px;
    left: 50%;
    padding: 8px 12px;
    font-size: 12px;
    color: ${colors.WHITE};
    border: none;
    border-radius: 8px;
    background-color: ${colors.BLACK};
    transform: translate(-50%, -100%);
    opacity: 0;
    pointer-events: none;
  }
  &:hover::before {
    opacity: 1;
  }
`;
