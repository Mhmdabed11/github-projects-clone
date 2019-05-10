const ADD_TODO = "ADD_TODO";
const MOVE_TODO = "MOVE_TODO";
const DELETE_TODO = "DELETE_TODO";
const ADD_COLUMN = "ADD_COLUMN";

export const addTodo = (task, columnId) => {
  return {
    type: ADD_TODO,
    payload: { task, columnId }
  };
};

export const moveTodo = payload => {
  return {
    type: MOVE_TODO,
    payload
  };
};

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};

export const addColumn = () => {
  return {
    type: ADD_COLUMN
  };
};
