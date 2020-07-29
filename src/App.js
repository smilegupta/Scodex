import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ca from "./components/pages/CA";
import Intern from "./components/pages/Internship";
import FullTime from "./components/pages/FullTime";
import Scholarships from "./components/pages/Scholarship";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/internships" component={Intern} />
          <Route path="/fulltime" component={FullTime} />
          <Route path="/campusambassador" component={Ca} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
