import './App.css';
import Account from './components/Account';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Manager from './components/Manager';
import Product from './components/Product';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div id='app'>
      <Header />
      <Hero/>
      <Product />
      <Routes>
          <Route path="/manager" element={<Manager />} />
          <Route path="/account" element={<Account />} />
      </Routes>
    </div>

  );
}

export default App;
