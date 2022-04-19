import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Textform2 from './components/Textform2' ;

let name = "vishwajit vm" ;
function App() {
  return (
    <>
    <Navbar title="Bloging Page" aboutTitle="About Us"></Navbar>
    <div className="container">
      <Textform heading="Enter Text To View Transform"></Textform>
      {/* <Textform2 Headings="EXPERIMENT ZONE"></Textform2> */}
    </div>
    </>
  );
}

export default App;
