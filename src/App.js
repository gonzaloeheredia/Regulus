import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';
import Cart from './components/CartWidget';

const App = ()=> {
  return (
    <>
      < NavBar />
      <ItemsListContainer greeting = 'You are welcome'/>
    </>
  )
}
export default App;
