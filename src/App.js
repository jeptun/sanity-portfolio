import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SinglePost from "./pages/SinglePost";
import Post from "./pages/Post";
import UsefulLinks from "./pages/UsefulLinks";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={UsefulLinks} path='/usefulLinks' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
