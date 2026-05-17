import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createBrowserHistory } from "history";
import rootReducer, { RootState } from "./rootReducer";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

// Auto-update values after state changes to persist them
store.subscribe(() => {
  const state = store.getState() as RootState;

  localStorage.setItem("lang", state.settings.lang);
  localStorage.setItem("theme", state.settings.theme);
});

export default store;
