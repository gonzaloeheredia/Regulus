import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';



const App = ()=> {
  return (
    
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemsListContainer/>}  />
          <Route exact path='/category/category' element={ <ItemsListContainer/>}  />
          <Route exact path='/detail/:id' element={ <ItemDetailContainer/>}  />
          <Route exact path='/cart' element={ <Cart/> }  />          
        </Routes>
      </BrowserRouter>
    
  )
}
export default App;
