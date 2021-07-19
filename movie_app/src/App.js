
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
  <HashRouter> 
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie-detail" component={Detail} />
    {/* <Route path="/home">
      <h1>Home</h1>
      </Route> 
    <Route path="/home/introduction">
      <h1>Introduction</h1>
    </Route> 
    <Route path="/about">
      <h1>About</h1>
      </Route>
      이외 <BrowserRouter></BrowserRouter>가 있음 */}
      </HashRouter>
  );
}

export default App;