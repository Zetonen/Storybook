import styled from "styled-components";
import { colors } from "../../constants/colors";

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 11px;
  z-index: 1;
  transform: translateY(-50%);
`;

const getColor = (disabled, error) => {
  if (disabled) {
    return "#A0A0AB";
  }
  if (error) {
    return colors.RED;
  }
  return "#A0A0AB";
};
export const Search = ({ width, height, error, disabled }) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={"none"}
    >
      <path
        id="Icon"
        d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
        stroke={getColor(disabled, error)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
