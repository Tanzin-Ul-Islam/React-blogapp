import Header from './componenet/Navbar';
import Home from './componenet/Home';
import Create from './componenet/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BlogDetails } from './componenet/BlogDetails';
import { NotFound } from './componenet/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/create"><Create/></Route>
            <Route exact path="/blogs/:id"><BlogDetails/></Route>
            <Route path="*"><NotFound/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
