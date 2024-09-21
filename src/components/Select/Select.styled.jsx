import styled from "styled-components";
import { colors } from "../../constants/colors";

export const StyleSelect = styled.div`
  position: relative;
  width: 100px;
  padding: 2px 0 2px 6px;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid ${colors.SETTINGS_TEXT};
  border-radius: 4px;
`;
export const Title = styled.p`
  height: 20px;
`;

export const SelectList = styled.ul`
  max-height: 133px;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  color: ${colors.BLACK};
  background-color: ${colors.GREY};
  transform: translateY(100%);
  overflow-y: scroll;
  ${(props) =>
    !props.$showList &&
    `opacity: 0;
     pointer-events: none;`}
`;

export const ListItem = styled.li`
  padding: 12px 0px 12px 10px;
  &:hover {
    background-color: #ffffff;
  }
`;
