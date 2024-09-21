import { DisableText, ErrMessage } from "./InputAnnotation.styled";

const Message = (disable, err, $sz) => {
  if (disable) {
    return <DisableText>Disable</DisableText>;
  }
  return err && <ErrMessage name="email" component="div" $sz={$sz} />;
};
export const InputAnnotation = ({ err, $sz, $userText }) => {
  return Message($userText, err, $sz);
};
