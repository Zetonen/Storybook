import { createSlice } from "@reduxjs/toolkit";
import {
  inputSizeOptions,
  labelPositionOptions,
  labelSizeOptions,
} from "../../constants/settingsOptions";

const defValLabelPos =
  labelPositionOptions.length > 0 ? labelPositionOptions[0].label : "None";
const defValLabelSz =
  labelSizeOptions.length > 0 ? labelSizeOptions[0].label : "None";
const defValInputSz =
  inputSizeOptions.length > 0 ? inputSizeOptions[0].label : "None";
const initialState = {
  whiteTheme: true,
  labelSize: defValLabelSz,
  userText: true,
  labelPosition: defValLabelPos,
  helperText: "",
  showHelperText: true,
  label: true,
  inputSize: defValInputSz,
  inputBorder: true,
  iconBefore: true,
  iconAfter: true,
  fill: true,
  required: false,
};
const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setWhiteTheme: (state, action) => {
      state.whiteTheme = action.payload;
    },
    setLabelSize: (state, action) => {
      state.labelSize = action.payload;
    },
    setUserText: (state, action) => {
      state.userText = action.payload;
    },
    setInputSize: (state, action) => {
      console.log(action);
      console.log(state.inputSize);

      state.inputSize = action.payload;
    },
    setLabelPosition: (state, action) => {
      console.log(action.payload);
      state.labelPosition = action.payload;
    },
    setHelperText: (state, action) => {
      state.helperText = action.payload;
    },
    setShowHelperText: (state, action) => {
      state.showHelperText = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
    setInputBorder: (state, action) => {
      state.inputBorder = action.payload;
    },
    setIconBefore: (state, action) => {
      state.iconBefore = action.payload;
    },
    setIconAfter: (state, action) => {
      state.iconAfter = action.payload;
    },
    setFill: (state, action) => {
      state.fill = action.payload;
    },
    setRequired: (state, action) => {
      state.required = action.payload;
    },
  },
});

export const {
  setWhiteTheme,
  setLabelSize,
  setUserText,
  setInputSize,
  setLabelPosition,
  setLabelBorder,
  setHelperText,
  setShowHelperText,
  setLabel,
  setInputBorder,
  setIconBefore,
  setIconAfter,
  setFill,
  setRequired,
} = slice.actions;

// Експорт редюсера
export const settingsReducer = slice.reducer;
