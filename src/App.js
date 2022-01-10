import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {    // Destructuring qui permet de récuperer les props de App.js

console.log();
  return (
    <div className="app">
      <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
        <Routes>
          <Route path="/" element={ <Todo /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// -----------------------------------------  Commentaire  ----------------------------------------------------------------------------------------//

// 1 - une props sont des parametres (props, ) (le premier sera toujours des props) callback
// 2 - quand on fais un rendu visuel on le met dans le return
// 3 - la logique du composannt est avant le return
// 4 - ne pas oublier d'importer le component dans App.js
// 5 - import de BrowserRouter as Router et Routes as Switch et Route pour les rendu des components.
// 6 - Ajout des route Todo, About et Erreur
// 7 - Ajout Balise nav et link vers Home