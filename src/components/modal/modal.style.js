import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalContainer = styled.div`
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  z-index: 1000;
`;
