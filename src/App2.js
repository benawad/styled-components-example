import React from "react";
import { ThemeProvider } from "styled-components";

import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import HeaderText from "./components/HeaderText";

const theme = {
  font: "Calibri"
};

export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <HeaderText>I am some header text!</HeaderText>
      <Button primary>Primary</Button>
      <Button>Regular</Button>
      <HeaderText>I am more header text!</HeaderText>
    </Wrapper>
  </ThemeProvider>
);
