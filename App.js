
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import aumedimiI from "./Components/aumedimi";
import cicloI from "./Components/ciclo";
import estadentroI from "./Components/estadentro";
import nomeII from "./Components/nomeIdade";
import olaI from "./Components/ola";
import todolI from "./Components/todol";
import Layout from './Components/layout'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <a> */}
          {/* Learn React */}
        {/* </a> */}

      {/* <h1>Ola, Mundo!!</h1> */}
    
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/about">Acerca</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* sssssssssssssssssss */}
        <Route exact path="/" render={() => (
          <Layout>
            <HomePage />
          </Layout>
        )} />
        <Route path="/about" render={() => (
          <Layout>
            <AboutPage />
          </Layout>
        )} />
        <Route path="/contact" render={() => (
          <Layout>
            <ContactPage />
          </Layout>
        )} />
        <Route path="/services" render={() => (
          <Layout>
            <ServicesPage />
          </Layout>
        )} />
      </div>
    </Router>

   



      </header>
      
      <div>
      <olaI />
      <nomeI />
      <aumedimiI />
      <todolI />
      <cicloI />
      <estadentroI />
    </div>
    </div>
  );
}
// function app(){
//   return(
//     // <div>
//     //   <ola></ola>
//     //   <nome></nome>
//     //   <aumedimi></aumedimi>
//     //   <todol></todol>
//     //   <ciclo></ciclo>
//     //   <estadentro></estadentro>
//     // </div>
//   )
// }

export default App;
