import {BrowserRouter,Routes,Route} from "react-router-dom";
import Prelog from './pages/prelog/prelog.js';
import Postlog from './pages/postlog/postlog.js';
import SomeState from './context/someState';



function App() {

  return (
    <BrowserRouter>
      <SomeState>
        <Prelog/>
      </SomeState>
    </BrowserRouter>

  );
}

export default App;
