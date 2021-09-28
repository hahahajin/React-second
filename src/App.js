import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail1 from "./pages/Detail1";
import Detail2 from "./pages/Detail2";
import Detail3 from "./pages/Detail3";

import "./App.css";
import { useState } from "react";

function App() {
  return (
      <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/detail1" component={Detail1} />
          <Route exact path="/detail2" component={Detail2} />
          <Route exact path="/detail3" component={Detail3} />

      </Router>
  );
}

export default App;