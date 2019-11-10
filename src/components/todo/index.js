import React from "react";
import {
  Container,
  RepoName,
  IssueOwner,
  IssueLabels,
  IssueLabel
} from "./todo.style";
import { Draggable } from "react-beautiful-dnd";
import { TodoTitle } from "./todo.style";
const Todo = props => {
  return (
    <Draggable index={props.index} draggableId={props.todo.id}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TodoTitle>{props.todo.content}</TodoTitle>
          <RepoName>Github repo issue #21 opened by</RepoName>
          <IssueOwner>ipsum</IssueOwner>
          <IssueLabels>
            <IssueLabel>enhancement</IssueLabel>
            <IssueLabel>front-end</IssueLabel>
          </IssueLabels>
        </Container>
      )}
    </Draggable>
  );
};

export default Todo;
