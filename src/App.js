import './App.scss';
import Schedule from './Components/Schedule';
import Show from './Components/Show';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Schedule />} />
        <Route path='/show/:id' element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
