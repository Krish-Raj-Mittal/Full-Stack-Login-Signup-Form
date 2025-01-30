import './App.css';
import Signup from './Pages/Signup';
import Login  from './Pages/Login';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
   </div>
  );
}

export default App;
