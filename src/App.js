import './App.css';
import Account from './components/Account';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Manager from './components/Manager';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
      <>
        <Header />
        {/* <Route path="/manager" element={<Manager />} />
        <Route path="/account" element={<Account />} /> */}
      </>
  );
}

export default App;
