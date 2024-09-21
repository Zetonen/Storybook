import { useSelector } from "react-redux";
import { LabelInput, Required } from "./InputLabel.styled";
import { selectWhiteTheme } from "../../redux/settings/selectors";

export const InputLabel = ({ inputId, $sz, required }) => {
  const whiteTheme = useSelector(selectWhiteTheme);

  return (
    <LabelInput htmlFor={inputId} $sz={$sz}>
      Email {required && <Required $whiteTheme={whiteTheme} data-clue={'Required'}>*</Required>}
    </LabelInput>
  );
};
