import './App.css';
// import { Prueba1 } from './components/Prueba1';
import { Prueba2 } from './components/Prueba2';

function App() {
  return (
    <div className="App grid h-screen grid-rows-2" id="general">
      <Prueba2 />
      <div className="bg-blue-500"></div>
    </div>
  );
}

export default App;
