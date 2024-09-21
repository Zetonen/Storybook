import styled from "styled-components";
import { colors } from "../../constants/colors";
import Select from "react-select";
import Switch from "react-switch";

export const StyleSettings = styled.div`
  padding: 30px 15px;
  border-radius: 4px;
  background-color: ${colors.BLACK};
  color: ${colors.SETTINGS_TEXT};
`;
export const WrapLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const StyleSelect = styled(Select)`
  /* width: 100%; */
  transform: scale(0.6);
`;
export const Title = styled.p`
  margin-bottom: 8px;
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid ${colors.GREY};
`;

export const Text = styled.p`
  width: 110px;
`;
export const StyleSwitch = styled(Switch)`
  margin-left: -4px;
`;
