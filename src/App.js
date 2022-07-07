
import './App.css';
import SelectBook from './components/Main/SelectBook';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BookRender from './components/Main/BookRender';
function App() {
  return (
    
      <Router>
      <div className="App">
        <Switch>
          <Route exact component={SelectBook} path={'/'} />
          <Route path={'/book/:id'} component={BookRender} />
        </Switch>
          </div>
      </Router>
  
  );
}

export default App;
