import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import Error from "./pages/Error";
import Ask from "./pages/Ask";
import Show from "./pages/Show";
import Jobs from "./pages/Jobs";
import Best from "./pages/Best";

function App() {
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
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/newest">
                <New />
              </Route>
              <Route path="/best">
                <Best />
              </Route>
              <Route path="/ask">
                <Ask />
              </Route>
              <Route path="/show">
                <Show />
              </Route>
              <Route path="/jobs">
                <Jobs />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
            <Footer />
          </tbody>
        </table>
      </div>
    </Router>
  );
}

export default App;
