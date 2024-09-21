import {
  StyleSettings,
  StyleSwitch,
  Text,
  Title,
  WrapLabel,
} from "./Settings.styled";
import { useDispatch, useSelector } from "react-redux";
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
import {
  setFill,
  setIconAfter,
  setIconBefore,
  setInputBorder,
  setInputSize,
  setLabel,
  setLabelPosition,
  setLabelSize,
  setRequired,
  setShowHelperText,
  setUserText,
  setWhiteTheme,
} from "../../redux/settings/slice";
import { Select } from "../Select/Select";
import {
  inputSizeOptions,
  labelPositionOptions,
  labelSizeOptions,
} from "../../constants/settingsOptions";
import { useState } from "react";

export const Settings = () => {
  const [activeSelect, setActiveSelect] = useState(null);
  const whiteTheme = useSelector(selectWhiteTheme);
  const label = useSelector(selectLabel);
  const userText = useSelector(selectUserText);
  const labelPosition = useSelector(selectLabelPosition);
  const labelSize = useSelector(selectLabelSize);
  const inputSize = useSelector(selectInputTextSize);
  const showHelperText = useSelector(selectShowHelperText);
  const inputBorder = useSelector(selectShowBorder);
  const iconBefore = useSelector(selectIconBefore);
  const iconAfter = useSelector(selectIconAfter);
  const fill = useSelector(selectFill);
  const required = useSelector(selectRequired);

  const dispatch = useDispatch();
  const handleSwitch = (val, reduxFn) => {
    dispatch(reduxFn(val));
  };
  return (
    <StyleSettings>
      <Title>Settings</Title>
      <WrapLabel>
        <Text>White theme</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setWhiteTheme)}
          checked={whiteTheme}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text> Label size</Text>
        <Select
          options={labelSizeOptions}
          value={labelSize}
          reduxFn={setLabelSize}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          id={"sel-1"}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>User text</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setUserText)}
          checked={userText}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Label position</Text>
        <Select
          options={labelPositionOptions}
          value={labelPosition}
          reduxFn={setLabelPosition}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          id={"sel-2"}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Show helper text</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setShowHelperText)}
          checked={showHelperText}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Label</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setLabel)}
          checked={label}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>

      <Title>Input Settings</Title>
      <WrapLabel>
        <Text>Size</Text>
        <Select
          options={inputSizeOptions}
          value={inputSize}
          reduxFn={setInputSize}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          id={"sel-3"}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Border</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setInputBorder)}
          checked={inputBorder}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Icon before</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setIconBefore)}
          checked={iconBefore}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Icon after</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setIconAfter)}
          checked={iconAfter}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Fill</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setFill)}
          checked={fill}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
      <WrapLabel>
        <Text>Required</Text>
        <StyleSwitch
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#448AE3"
          onChange={(val) => handleSwitch(val, setRequired)}
          checked={required}
          handleDiameter={20}
          height={12}
          width={30}
        />
      </WrapLabel>
    </StyleSettings>
  );
};
