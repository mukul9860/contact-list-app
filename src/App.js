import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import SearchPage from './pages/SearchPage';

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
          <Route path="/search" component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter> 
  );
}
export default App;
