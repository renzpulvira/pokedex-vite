import { combineReducers } from "redux";
import themeReducer from "./theme.reducer";
import modalReducer from "./modal.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
});

export default rootReducer;
