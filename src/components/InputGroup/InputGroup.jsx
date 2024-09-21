import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StyledGroup, WrapField, WrapInput } from "./InputGroup.styled";
import { InputAnnotation } from "../InputAnnotation/InputAnnotation";
import { InputLabel } from "../InputLabel/InputLabel";
import { InputText } from "../InputText/InputText";
import { Search } from "../Icons/Search";
import { Help } from "../Icons/Help";
import { useSelector } from "react-redux";
import {
  selectFill,
  selectIconAfter,
  selectIconBefore,
  selectInputTextSize,
  selectLabel,
  selectLabelPosition,
  selectLabelSize,
  selectRequired,
  selectShowBorder,
  selectShowHelperText,
  selectUserText,
  selectWhiteTheme,
} from "../../redux/settings/selectors";
import { emailRegexp } from "../../constants/regexp";

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(emailRegexp, "Enter correct email")
    .required("This field is required"),
});
export const InputGroup = () => {
  const whiteTheme = useSelector(selectWhiteTheme);
  const labelPosition = useSelector(selectLabelPosition);
  const showBorder = useSelector(selectShowBorder);
  const iconBefore = useSelector(selectIconBefore);
  const iconAfter = useSelector(selectIconAfter);
  const showHelperText = useSelector(selectShowHelperText);
  const labelSize = useSelector(selectLabelSize);
  const hasLabel = useSelector(selectLabel);
  const inputSize = useSelector(selectInputTextSize);
  const userText = useSelector(selectUserText);
  const fill = useSelector(selectFill);
  const required = useSelector(selectRequired);

  return (
    <StyledGroup $whiteTheme={!whiteTheme}>
      <Formik initialValues={{ email: "" }} validationSchema={schema}>
        {({ values, errors, touched, setFieldValue }) => {
          {
            !userText && values.email && setFieldValue("email", "");
          }

          return (
            <Form>
              <WrapField>
                <WrapInput $labelPosition={labelPosition}>
                  {hasLabel && (
                    <InputLabel
                      inputId={"Email"}
                      $sz={labelSize}
                      required={userText && required}
                    />
                  )}
                  <InputText
                    errors={errors}
                    touched={touched}
                    value={values.email}
                    sz={inputSize}
                    IconBefore={Search}
                    IconAfter={Help}
                    $showBorder={showBorder}
                    showIconBefore={iconBefore}
                    showIconAfter={iconAfter}
                    $short={hasLabel && labelPosition === "Side"}
                    $userText={!userText}
                    fill={fill}
                    whiteTheme={whiteTheme}
                  />
                </WrapInput>
                {showHelperText && (
                  <InputAnnotation
                    err={errors.email}
                    $sz={"md"}
                    $userText={!userText}
                  />
                )}
              </WrapField>
            </Form>
          );
        }}
      </Formik>
    </StyledGroup>
  );
};
