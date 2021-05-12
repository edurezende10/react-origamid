
import ExercicioState from './components/State/exercicioState/ExercicioState';
import AppModal from './components/State/AppModal';
import Estado from './components/State/Estado';
import Reatividade from './components/State/Reatividade';
import UseEffect01 from './components/UseEffect01';
import ExercicioEffect from './components/ExercicioEffect/ExercicioEffect';
import UseRef from './components/UseRef/UseRef';
import UseRefComentario from './components/UseRef/UseRefComentario';
import userContext from './components/UseContext/userContext'
import Produto from './components/UseContext/Produto';

function App() {
  return (
    <div className="App">
  {/*     <Estado />
      <AppModal />
      <Reatividade /> 
      <ExercicioState />
      <UseEffect01 />
      <ExercicioEffect />
      
      <UseRef />
      <UseRefComentario />
    */}
    <userContext.Provider value={{nome:"eduardo"}}>
      <div>
        <Produto/>
      </div>

    </userContext.Provider>

   
    </div>
  );
}

export default App;
