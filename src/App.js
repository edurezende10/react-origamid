import './App.css';
import AppModal from './components/State/AppModal';
import Estado from './components/State/Estado';
import Reatividade from './components/State/Reatividade';

function App() {
  return (
    <div className="App">
      <Estado />
      <AppModal />
      <Reatividade />
   
    </div>
  );
}

export default App;
