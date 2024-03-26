import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import Bag from './components/Bag'
import Apple from "./components/Apple"
import Pear from "./components/Pear"



function App() {
  return (
    <div className="App">
      <Bag children={<Apple message="I am an apple prop!!" />} /> /* Invoking Bag component and adding Apple component as prop child. */
      
    </div>
  );
}

export default App;
