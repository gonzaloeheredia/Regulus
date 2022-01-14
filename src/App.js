import './App.css';
import ItemsListContainer from './components/ItemsListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      < Navbar />
      <ItemsListContainer greeting = 'You are welcome'/>
    </>
  )
}
export default App;
