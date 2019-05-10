import React from "react";
import "./App.css";
import Column from "./components/column";
import { connect } from "react-redux";
import { moveTodo, addColumn } from "./redux/actions";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
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

function App({ moveTodo, addColumn, todosData }) {
  const onDragEnd = React.useCallback(
    result => {
      moveTodo(result);
    },
    [moveTodo]
  );
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <button onClick={() => addColumn()}>Add Column</button>
      <Container>
        {todosData.columnOrder.map(columnId => {
          const todos = todosData.columns[columnId].todosIds.map(
            todoId => todosData.todos[todoId]
          );
          const column = todosData.columns[columnId];
          return <Column key={columnId} column={column} todos={todos} />;
        })}
      </Container>
    </DragDropContext>
  );
}
export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(App);
