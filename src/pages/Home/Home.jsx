import { InputGroup } from "../../components/InputGroup/InputGroup";
import { Settings } from "../../components/Settings/Settings";
import { StyledHome } from "./Home.styled";

export const Home = () => {
  return (
    <StyledHome>
      <InputGroup />
      <Settings />
    </StyledHome>
  );
};
