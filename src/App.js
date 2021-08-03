import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard} />
    </BrowserRouter>
  );
};

export default App;
