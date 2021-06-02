import React from "react";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Header from "./Header";
import ListContainer from "./ListContainer";
/**
 * Provider is a tag from React-Redux to provide the Store values
 * to all the components included in the tag
 */
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ListContainer />
      </div>
    </Provider>
  );
}

export default App;
