const ADD_TODO = "ADD_TODO";
const MOVE_TODO = "MOVE_TODO";
const DELETE_TODO = "DELETE_TODO";
const ADD_COLUMN = "ADD_COLUMN";
const uuidv4 = require("uuid/v4");
export default function reducer(
  state = {
    todos: {},
    columns: {
      "643a345b-c886-4a1f-9f30-a984558e0edc": {
        id: "643a345b-c886-4a1f-9f30-a984558e0edc",
        todosIds: []
      }
    },
    columnOrder: ["643a345b-c886-4a1f-9f30-a984558e0edc"]
  },
  action
) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      const uid = uuidv4();
      const task = { id: uid, content: action.payload.task };
      return {
        ...state,
        todos: { ...state.todos, [uid]: task },
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            todosIds: [...state.columns[action.payload.columnId].todosIds, uid]
          }
        }
      };
    case MOVE_TODO:
      const { source, destination, draggableId } = action.payload;
      console.log(action.payload);
      if (!destination) return;
      if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
      ) {
        return;
      }
      if (source.droppableId === destination.droppableId) {
        const column = state.columns[source.droppableId];
        const newTodosIds = Array.from(column.todosIds);

        newTodosIds.splice(source.index, 1);
        newTodosIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column,
          todosIds: newTodosIds
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn
          }
        };

        return newState;
      } else if (source.droppableId !== destination.droppableId) {
        const sourceColumn = state.columns[source.droppableId];
        const destinationColumn = state.columns[destination.droppableId];

        const newSourceTodos = Array.from(sourceColumn.todosIds);
        const newDestinationTodos = Array.from(destinationColumn.todosIds);

        newSourceTodos.splice(source.index, 1);
        newDestinationTodos.splice(destination.index, 0, draggableId);

        const newSourceColumn = {
          ...sourceColumn,
          todosIds: newSourceTodos
        };

        const newDestinationColumn = {
          ...destinationColumn,
          todosIds: newDestinationTodos
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newSourceColumn.id]: newSourceColumn,
            [newDestinationColumn.id]: newDestinationColumn
          }
        };
        return newState;
      } else return state;
    case DELETE_TODO:
      return state;
    case ADD_COLUMN:
      const colUid = uuidv4();
      return {
        ...state,
        columns: {
          ...state.columns,
          [colUid]: {
            id: colUid,
            todosIds: []
          }
        },
        columnOrder: [...state.columnOrder, colUid]
      };

    default:
      return state;
  }
}
