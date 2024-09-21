import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "reset-css";

export const GlobalStyles = createGlobalStyle`
body {  
  /* height: 100%; */
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button, a, input {
font-family: inherit;
font-size: inherit;
color: inherit;
}
a {
    text-decoration: none;
}
`;
