import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';


function App() {
  

  return (
    <>
      <Header />
      <Gallery />
      <Footer />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h1>Hola soy Jessica</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </> 
  )
}

export default App
