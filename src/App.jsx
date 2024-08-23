import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SelectBeast from './SelectBeast';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import {useState}from 'react';
import HornedBeast from './hornedBeast.json';

function App() {

  const [displayModal, setDisplayModal] = useState (false);
  const [selectedBeast, setSelectedBeast] = useState ({});
  
  function mostrarModal(name){
    const beastWithName =HornedBeast.find(beast=>beast.title===name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  console.log (selectedBeast);
  return (
    <>
      <Header/>
      <Gallery mostrarModal={mostrarModal} allbeast={HornedBeast}/>
      <SelectBeast selectedBeast={selectedBeast} show={displayModal} mostrarModal={mostrarModal}/>
      <Footer/>
    </> 
  );
}

export default App;
