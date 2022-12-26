import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { HomeScreeen } from './components/HomeScreen';
import { ProductScreen } from './components/ProductScreen';
function App() {
  return (
    <Router>

    <div>
      <header>
        <Link to="/">amazona</Link>
      
      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreeen/>} />

        </Routes>
        
    
      </main>
    </div>
    </Router>
  );
}

export default App;
