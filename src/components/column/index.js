import React from "react";
import { Container } from "./column.style";
import Todo from "../todo";
import { addTodo } from "../../redux/actions";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

const mapDisaptchToProps = dispatch => {
  return {
    addTodo: (todo, columnId) => dispatch(addTodo(todo, columnId))
  };
};
const Column = props => {
  const [task, setTask] = React.useState("");
  return (
    <Droppable droppableId={props.column.id}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <input
            value={task}
            onChange={event => setTask(event.target.value)}
            type="text"
          />
          <button onClick={() => props.addTodo(task, props.column.id)}>
            Add me
          </button>
          {props.todos.map((todo, index) => {
            return <Todo key={todo.id} index={index} todo={todo} />;
          })}
        </Container>
      )}
    </Droppable>
  );
};

export default connect(
  null,
  mapDisaptchToProps
)(Column);
