import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEdit} />
          <Route path="/edit/:id" component={AddEdit} />
          <Route path="/view/:id" component={View} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter> 
  );
}
export default App;
