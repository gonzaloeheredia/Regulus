import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';

const App = ()=> {
  return (
    <>
      < NavBar />
      <ItemsListContainer greeting = 'You are welcome'/>
    </>
  )
}
export default App;
