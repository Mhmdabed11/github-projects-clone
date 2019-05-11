import React from "react";
import "./App.css";
import Column from "./components/column";
import { connect } from "react-redux";
import { moveTodo, addColumn } from "./redux/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Layout from "./components/layout";
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
  function onDragEnd(result) {
    props.moveTodo(result);
  }
  return (
    <Layout>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
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
              <AddNewColumn onClick={() => props.addColumn()}>
                <PlusLabel>+</PlusLabel> Add Column
              </AddNewColumn>
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
