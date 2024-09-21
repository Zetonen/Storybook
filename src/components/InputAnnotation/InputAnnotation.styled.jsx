import styled from "styled-components";
import { ErrorMessage } from "formik";
import { colors } from "../../constants/colors";

const sizes = (sz) => {
  switch (sz) {
    case "sm":
    case "md":
    case "lg":
      return `font-size: 12px;`;
    case "x":
    case "xl":
    case "xxl":
      return `font-size: 14px;`;

    default:
      return `font-size: 12px;`;
  }
};

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${colors.RED};
  ${(prop) => sizes(prop.$sz)}
  line-height: 1.67;
  transform: translateY(100%);
`;
export const DisableText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${colors.GREY};
  ${(prop) => sizes(prop.$sz)}
  line-height: 1.67;
  transform: translateY(100%);
`;
