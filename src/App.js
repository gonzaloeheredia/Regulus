import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail'
import Cart from './components/Cart'



const App = ()=> {
  return (
    <>
      < NavBar />
      <ItemsListContainer/>
      <ItemDetail/>
      <Cart/>
    </>
  )
}
export default App;
