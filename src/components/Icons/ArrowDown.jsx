import styled from "styled-components";

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  transform: translateY(-50%);
`;
export const ArrowDown = ({ width, height }) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </Icon>
  );
};
