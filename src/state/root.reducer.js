import { combineReducers } from "redux";
import todos_slice from "./slices/todos.slice";

const rootReducer = combineReducers({
  todos: todos_slice,
});

export default rootReducer;
