import styled from "styled-components";
import { colors } from "../../constants/colors";

import { Field } from "formik";

const sizes = (sz, showIconBefore, showIconAfter) => {
  switch (sz) {
    case "sm":
      return `padding: 1px ${showIconAfter ? 11 + 20 : 11}px 1px 
      ${showIconBefore ? 11 + 27 : 11}px;
    font-size: 12px;`;
    case "md":
      return `padding: 5px ${showIconAfter ? 11 + 20 : 11}px 5px 
      ${showIconBefore ? 11 + 27 : 11}px;
        font-size: 12px;`;
    case "lg":
      return `padding: 7px 11px;
      font-size: 12px;`;
    case "x":
      return `padding: 7px ${showIconAfter ? 11 + 20 : 11}px 7px 
      ${showIconBefore ? 15 + 27 : 15}px;
      font-size: 14px;`;
    case "xl":
      return `padding: 9px ${showIconAfter ? 11 + 20 : 11}px 9px 
      ${showIconBefore ? 15 + 27 : 15}px;
      font-size: 14px;`;
    case "xxl":
      return `padding: 11px ${showIconAfter ? 11 + 20 : 11}px 11px 
      ${showIconBefore ? 15 + 27 : 15}px;
    font-size: 14px;`;

    default:
      return `padding: 5px 11px;
        font-size: 12px;`;
  }
};
const showBorder = (show, val) => {
  if (show) {
    return val;
  }
  return "none";
};
export const InputField = styled(Field).withConfig({
  shouldForwardProp: (prop) =>
    !["showIconBefore", "showIconAfter", "sz"].includes(prop),
})`
  width: 100%;
  ${({ sz, showIconBefore, showIconAfter }) =>
    sizes(sz, showIconBefore, showIconAfter)}
  position: relative;
  background-color: ${({ $fill, $whiteTheme }) => {
    if ($fill) {
      return `${colors.WHITE}`;
    }
    if ($whiteTheme) {
      return `${colors.GREY}`;
    }
    return `${colors.BLACK}`;
  }};
  ${({ $fill }) => $fill && `color:${colors.PRIMARY};`}
  border: ${({ $showBorder }) =>
    showBorder($showBorder, `1px solid ${colors.GREY}`)};
  border-radius: 4px;
  outline: none;
  line-height: 1.25;

  text-overflow: ellipsis;
  cursor: ${({ $userText }) => ($userText ? "not-allowed" : "auto")};
  &:focus {
    border: ${({ $showBorder }) =>
      showBorder($showBorder, `1px solid ${colors.BLUE}`)};
    box-shadow: 0px 0px 0px 4px rgba(46, 144, 250, 0.24);
  }
  &.error {
    border: ${({ $showBorder }) =>
      showBorder($showBorder, ` 1px solid ${colors.ERROR}`)};
    fill: ${colors.RED};
  }
  &.error:focus {
    box-shadow: 0px 0px 0px 4px rgba(240, 68, 56, 0.24);
  }
  &:disabled {
    border: ${({ $showBorder }) =>
      showBorder($showBorder, `1px solid ${colors.GREY}`)};
    box-shadow: none;
    fill: ${colors.GREY};
  }
`;

export const WrapField = styled.div`
  position: relative;
  width: ${({ $short }) => ($short ? "40%" : "100%")};
  border: none;
`;
