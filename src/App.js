import logo from './logo.svg';
import './App.css';
import './CSS/layout.css'
import ListaAlumnos from './components/Alumnos';
import Primertp from './components/Primertp';
import Menu from './components/Menu';
import Card from './components/Card';
import Footer from './components/Footer';
import './CSS/center.css'


function App() {
  return (
    <div className="App">
      <div className='grid '>
        <div className='caja c1'><Primertp title="EL GRUPO 10"/></div>
        <div className='caja c2'><Menu/></div>
        <div className='caja c3 '>
          <div className='container'>
          <h2>Integrantes</h2>
          <ul className='lista'>
            <li>Nieva Tobias<ListaAlumnos integra={true}/></li>
            <li>Sosa Tomas <ListaAlumnos integra={false}/></li>
            <li>Jara Joaquin <ListaAlumnos integra={false}/></li>
            <li>Contreras Nicolas <ListaAlumnos integra={false}/></li>
            <li>Cano Ian<ListaAlumnos integra={true}/></li>
            <li>Ortiz Elias <ListaAlumnos integra={false}/></li>
            
          </ul>
          </div>
        </div>
        <div className='caja c4'><Card/></div>
        <div className='caja c5'><Footer/></div>
      </div>
    </div>
  );
}

export default App;
