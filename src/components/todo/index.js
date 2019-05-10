import React from "react";
import { Container } from "./todo.style";
import { Draggable } from "react-beautiful-dnd";
const Todo = props => {
  return (
    <Draggable index={props.index} draggableId={props.todo.id}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.todo.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Todo;
