import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddBook from './pages/AddBook';
import ModifyBook from './pages/ModifyBook';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path="/modify/:bookId" element={<ModifyBook />} />
        </Routes>
      </Router>
  );
}

export default App;
