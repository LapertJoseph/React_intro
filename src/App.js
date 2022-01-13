import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Counter from './components/Counter';

const App = () => {

  return (
    <div className="app">
      <Router>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">À propos</Link> <br />
        <Link to="/counter">counter</Link>
      </nav>
        <Routes>
          <Route path="/" element={ <Todo /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/counter" element={ <Counter initialCount={0} toto="count2" className="counter"/> } />   {/* ici on passe le state de base */}
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
// -----------------------------------------  Commentaire  ----------------------------------------------------------------------------------------//

// 1 - une props sont des parametres (props, ) (le premier sera toujours des props = callback)
// 2 - quand on fais un rendu visuel on le met dans le return
// 3 - la logique du composannt est avant le return
// 4 - ne pas oublier d'importer le component dans App.js
// 5 - import de BrowserRouter as Router et Routes as Switch, Route pour les rendu des components et Link pour les navigation.
// 6 - Ajout des route Todo, About et Erreur
// 7 - Ajout Balise nav et link