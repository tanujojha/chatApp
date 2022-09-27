import {BrowserRouter,Routes,Route} from "react-router-dom";
import Prelog from './pages/prelog/prelog.js';
import Postlog from './pages/postlog/postlog.js';
import SomeState from './context/someState';



function App() {

  return (

    <SomeState>
      <BrowserRouter>
        <Prelog/>
        
      </BrowserRouter>
    </SomeState>

  );
}

export default App;

// <BrowserRouter>
//   <Prelog/>
//
// </BrowserRouter>
