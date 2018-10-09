import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import remindersModule from "./modules/reminders";

const reducer = combineReducers({
  remindersModule
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
