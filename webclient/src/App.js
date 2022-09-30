import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
<BrowserRouter>
   <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
