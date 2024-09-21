import { useEffect, useState } from "react";
import { InputField, WrapField } from "./InputText.styled";

export const InputText = ({
  errors,
  touched,
  value,
  sz,
  IconBefore,
  IconAfter,
  $showBorder,
  showIconBefore,
  showIconAfter,
  $short,
  $userText,
  fill,
  whiteTheme
}) => {
  const [hasError, setError] = useState(false);
  useEffect(() => {
    if (errors.email && touched.email) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errors, touched]);
  return (
    <WrapField $short={$short}>
      {showIconBefore && (
        <IconBefore
          width={20}
          height={20}
          error={hasError}
          disabled={$userText}
        />
      )}
      <InputField
        id="Email"
        className={errors.email && touched.email && "error"}
        type="email"
        placeholder="Email"
        value={value}
        name="email"
        sz={sz}
        $showBorder={$showBorder}
        showIconBefore={showIconBefore}
        showIconAfter={showIconAfter}
        disabled={$userText}
        $userText={$userText}
        $fill={fill}
        $whiteTheme={whiteTheme}
      />
      {showIconAfter && (
        <IconAfter
          width={16}
          height={16}
          error={hasError}
          disabled={$userText}
        />
      )}
    </WrapField>
  );
};
