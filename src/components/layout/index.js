import React from "react";
import { Container, Main } from "./layout.style";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
