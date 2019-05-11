import React from "react";
import { Container, ModalContainer } from "./modal.style";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const [el, setEl] = React.useState(document.createElement("div"));

  React.useLayoutEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  const modalBody = (
    <Container>
      <ModalContainer>{children}</ModalContainer>
    </Container>
  );
  return createPortal(modalBody, el);
};

export default Modal;
