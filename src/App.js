import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';



const App = ()=> {
  return (
    <>
      < NavBar />
      <ItemsListContainer/>
      <ItemDetailContainer/>
      <Cart/>
    </>
  )
}
export default App;
