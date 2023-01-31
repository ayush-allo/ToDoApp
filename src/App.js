import Navbar from './Navbar';
import ListAdd from './ListAdd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar appName = "ToDoApp"/>
      <ListAdd/>
    </div>
  );
}

export default App;
