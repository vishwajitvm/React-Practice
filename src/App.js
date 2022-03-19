import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';

let name = "vishwajit vm" ;
function App() {
  return (
    <>
    <Navbar title="Bloging Page" aboutTitle="About Us"></Navbar>
    <div className="container">
      <Textform heading="Enter Text To View Transform"></Textform>
    </div>
    </>
  );
}

export default App;
