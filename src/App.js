import './App.css';
import ExercicioState from './components/State/exercicioState/ExercicioState';
import AppModal from './components/State/AppModal';
import Estado from './components/State/Estado';
import Reatividade from './components/State/Reatividade';

function App() {
  return (
    <div className="App">
  {/*     <Estado />
      <AppModal />
      <Reatividade /> */}
      <ExercicioState />
   
    </div>
  );
}

export default App;
