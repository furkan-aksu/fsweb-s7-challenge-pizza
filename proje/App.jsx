import React from "react";
import { Route } from "react-router-dom";
import Success from "./component/Success";
import Home from "./component/Home";
import OrderPizza from "./component/OrderPizza";

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/OrderPizza">
        <OrderPizza />
      </Route>
      <Route exact path="/Success">
        <Success />
      </Route>
    </>
  );
}
export default App;
