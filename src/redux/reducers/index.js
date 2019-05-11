const ADD_TODO = "ADD_TODO";
const MOVE_TODO = "MOVE_TODO";
const DELETE_TODO = "DELETE_TODO";
const ADD_COLUMN = "ADD_COLUMN";
const uuidv4 = require("uuid/v4");
export default function reducer(
  state = {
    todos: { "todo-1": { id: "todo-1", content: "my name is mohammad abed" } },
    columns: {
      "column-1": {
        id: "column-1",
        todosIds: ["todo-1"]
      }
    },
    columnOrder: ["column-1"]
  },
  action
) {
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload.task) return state;
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
      const { source, destination, draggableId, type } = action.payload;

      if (type === "column") {
        if (!destination) {
          return state;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return state;
        }
        const newColumnOrder = Array.from(state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        const newState = { ...state, columnOrder: newColumnOrder };
        return newState;
      }
      if (!destination) return state;
      if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
      ) {
        return state;
      }
      if (source.droppableId === destination.droppableId) {
        const column = state.columns[destination.droppableId];
        const newTodos = Array.from(column.todosIds);

        newTodos.splice(source.index, 1);
        newTodos.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column,
          todosIds: newTodos
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [column.id]: newColumn
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

        const newSrouceColumn = {
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
            [sourceColumn.id]: newSrouceColumn,
            [destinationColumn.id]: newDestinationColumn
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
