import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const New = lazy(() => import("./pages/New"));
const Error = lazy(() => import("./pages/Error"));
const Ask = lazy(() => import("./pages/Ask"));
const Show = lazy(() => import("./pages/Show"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Best = lazy(() => import("./pages/Best"));

const App = () => {
  return (
    <Router>
      <div className="App">
        <table
          border="0"
          cellPadding="0"
          cellSpacing="0"
          className="table-main"
          bgcolor="#f6f6ef"
        >
          <tbody>
            <Header />
            <Suspense
              fallback={
                <tr>
                  <td>Loading..</td>
                </tr>
              }
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newest" component={New} />
                <Route path="/ask" component={Ask} />
                <Route path="/show" component={Show} />
                <Route path="/jobs" component={Jobs} />
                <Route path="/best" component={Best} />
                <Route path="*" component={Error} />
              </Switch>
            </Suspense>
            <Footer />
          </tbody>
        </table>
      </div>
    </Router>
  );
};

export default App;
