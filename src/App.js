import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./views/Category/Category";

import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/category" component={Category} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
