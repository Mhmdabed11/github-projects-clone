import React from "react";
import "./App.css";
import Column from "./components/column";
import { connect } from "react-redux";
import { moveTodo, addColumn } from "./redux/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Layout from "./components/layout";
import Modal from "./components/modal";
const Container = styled.div`
  display: flex;
`;
const AddNewColumn = styled.button`
  width: 353px;
  flex-basis: 353px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 103px;
  margin-top: 0.875rem;
  background-color: #fff;
  border: 1px dashed #959da5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PlusLabel = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-right: 0.5rem;
`;

const ModalWrapper = styled.div`
  padding: 1rem;
`;
const ModalHeader = styled.div`
  background-color: #f6f8fa;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalHeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const ModalHeaderClose = styled.div``;
const FormLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const Input = styled.input`
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  color: #24292e;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  padding: 6px 8px;
  width: inherit;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-top: 0.5rem;
`;

const AddColumnBtn = styled.button`
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  color: #fff;
  background-repeat: repeat-x;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin-top: 0.5rem;
  &:disabled {
    background-color: #eff3f6;
    background-image: none;
    border-color: rgba(27, 31, 35, 0.2);
    box-shadow: none;
    color: rgba(36, 41, 46, 0.4);
  }
`;

const ModalContainer = styled.div`
  width: 446px;
  color: #24292;
  background-color: #fff;
  border: 1px solid #000000;
`;
const mapStateToProps = state => {
  return {
    todosData: state
  };
};
const mapDisaptchToProps = dispatch => {
  return {
    moveTodo: result => dispatch(moveTodo(result)),
    addColumn: result => dispatch(addColumn(result))
  };
};

function App(props) {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [columnName, setcolumnName] = React.useState("");
  function onDragEnd(result) {
    props.moveTodo(result);
  }
  function showModal() {
    // props.addColumn();
    setModalVisibility(true);
  }
  function createColumn(e) {
    e.preventDefault();
    props.addColumn(columnName);
    setModalVisibility(false);
  }

  function closeModal() {
    setModalVisibility(false);
  }
  return (
    <Layout>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
          style={{ color: "red" }}
        >
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {props.todosData.columnOrder.map((columnId, index) => {
                const column = props.todosData.columns[columnId];
                const todos = column.todosIds.map(
                  todoId => props.todosData.todos[todoId]
                );
                return (
                  <Column
                    key={columnId}
                    column={column}
                    index={index}
                    todos={todos}
                  />
                );
              })}
              {provided.placeholder}
              <AddNewColumn onClick={showModal}>
                <PlusLabel>+</PlusLabel> Add Column
              </AddNewColumn>
              {modalVisibility ? (
                <Modal>
                  <ModalContainer>
                    <ModalHeader>
                      <ModalHeaderTitle>Add a column</ModalHeaderTitle>
                      <ModalHeaderClose onClick={closeModal}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="Close"
                          style={{
                            fill: "#000000",
                            width: "10px",
                            height: "10px",
                            fontWeight: "1000",
                            cursor: "pointer"
                          }}
                        >
                          <path
                            d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                            fillRule="evenodd"
                          />
                        </svg>
                      </ModalHeaderClose>
                    </ModalHeader>
                    <ModalWrapper>
                      <form>
                        <FormLabel>Column name</FormLabel>
                        <div>
                          <Input
                            onChange={e => setcolumnName(e.target.value)}
                            required
                          />
                        </div>
                        <AddColumnBtn
                          disabled={!columnName}
                          onClick={createColumn}
                        >
                          Add Column
                        </AddColumnBtn>
                      </form>
                    </ModalWrapper>
                  </ModalContainer>
                </Modal>
              ) : null}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </Layout>
  );
}
export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(App);
