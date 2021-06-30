import './App.css';
import Informacion_estudios from './Componentes/informacion_estudios/Informacion_estudios';
import Informacion from './Componentes/informacion/Informacion';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
  Route,
} from 'react-router-dom';

function App() {
  return (
<div className='container'>
   <Router>
     <Switch>
        <Route path='/home'><Home /></Route>
       <Route path='/informacion'><Informacion /></Route>
       <Route path='/informacion_estudios'><Informacion_estudios /></Route>
       <Route path='/'><Home /></Route>
     </Switch>
   </Router>
</div>

  );
}
export default App;
