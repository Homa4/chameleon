import './App.css';
import Headers from './Headers';
import Menu from './Menu';
import Bottom from './Bottom';
import NavBar from './NavBar'
import data from "../logic/dlist"; // Import the data


function App() {
  return (
    <div className="App">
     <Headers/>
     <NavBar params={data}/>
     <Menu/>
     <Bottom/>

    </div>
  );
}

export default App;
