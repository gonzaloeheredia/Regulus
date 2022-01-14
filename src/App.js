import './App.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      < NavBar />
      <ItemsListContainer greeting = 'You are welcome'/>
    </>
  )
}
export default App;
