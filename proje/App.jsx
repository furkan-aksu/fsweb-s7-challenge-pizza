import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import OrderSuccess from "./components/Success";

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/OrderPizza">
        <OrderPizza />
      </Route>
      <Route exact path="/OrderSuccess">
        <OrderSuccess />
      </Route>
    </>
  );
}

export default App;
