import './App.css';
import Headers from './Headers';
import Menu from './Menu';
import Footer from './Footer';
import NavBar from './NavBar'
import data from "../logic/dlist"; // Import the data
import footerInfo from '../logic/footerInfo';

function App() {
  return (
    <div className="App">
     <Headers/>
     <NavBar params={data}/>
     <Menu/>
     <Footer footInfo={footerInfo}/>

    </div>
  );
}

export default App;
