import React from "react";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Header from "./Header";
import ListContainer from "./ListContainer";

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
