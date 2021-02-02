import Home from "./Home"
import NavBar from "./NavBar"
import Create from "./Create"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import BlogDetails from "./BlogDetails"
import Error from './Error'

function App() {

      const title = "Welcome"

  return (

    <Router>
      <div className="App">
        <NavBar/>
          <div className="content">

              <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>
                    
                    <Route path="/create">
                        <Create/>
                    </Route>

                    <Route path="/blogs/:id">
                        <BlogDetails/>
                    </Route>

                    <Route path="*">
                        <Error/>
                    </Route>

              </Switch>
              
            
          </div>
      </div>
    </Router>
  );
}

export default App;
