import { LabelInput, Required } from "./InputLabel.styled";

export const InputLabel = ({ inputId, $sz, required }) => {
  return (
    <LabelInput htmlFor={inputId} $sz={$sz}>
      Email {required && <Required data-clue={'Required'}>*</Required>}
    </LabelInput>
  );
};
