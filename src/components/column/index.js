import React from "react";
import {
  Container,
  TodosCount,
  ColumnHeader,
  TodoInfo,
  TodoTitle,
  ActionsWrapper,
  AddTodo,
  ManageTodo,
  NewIssue,
  NewIssueTitle,
  IssueActions,
  AddButton,
  CancelButton,
  IssuesWrapper
} from "./column.style";
import Todo from "../todo";
import { addTodo } from "../../redux/actions";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

const mapDisaptchToProps = dispatch => {
  return {
    addTodo: (todo, columnId) => dispatch(addTodo(todo, columnId))
  };
};
const Column = props => {
  const [task, setTask] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);
  function showNewIssueForm() {
    setShowForm(true);
  }
  function hideNewIssueForm() {
    setShowForm(false);
  }

  function addTodo(e) {
    e.preventDefault();
    props.addTodo(task, props.column.id);
    setShowForm(false);
    setTask("");
  }
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ColumnHeader>
            <TodoInfo>
              <TodosCount>{props.todos.length}</TodosCount>
              <TodoTitle>{props.column.title}</TodoTitle>
            </TodoInfo>
            <ActionsWrapper>
              <AddTodo onClick={showNewIssueForm}>+</AddTodo>
              <ManageTodo>...</ManageTodo>
            </ActionsWrapper>
          </ColumnHeader>
          {showForm ? (
            <NewIssue>
              <NewIssueTitle
                placeholder="Enter a note"
                rows={3}
                value={task}
                onChange={event => setTask(event.target.value)}
                type="text"
                required
              />
              <IssueActions>
                <AddButton disabled={!task} onClick={addTodo}>
                  Add
                </AddButton>
                <CancelButton onClick={hideNewIssueForm}>Cancel</CancelButton>
              </IssueActions>
            </NewIssue>
          ) : null}
          <Droppable droppableId={props.column.id}>
            {provided => (
              <IssuesWrapper
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.todos.map((todo, index) => {
                  return <Todo key={todo.id} index={index} todo={todo} />;
                })}
              </IssuesWrapper>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default connect(
  null,
  mapDisaptchToProps
)(Column);
