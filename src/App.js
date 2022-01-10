import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';



const App = () => {    // Destructuring qui permet de récuperer les props de App.js

console.log();
  return (
    <div className="app">
      <Router>
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

// une props sont des parametres (props, ) (le premier sera toujours des props) callback
// quand on fais un rendu visuel on le met dans le return
//la logique du composannt est avant le return
// ne pas oublier d'importer le component dans App.js
// import de BrowserRouter as Router et Routes as Switch et Route pour les rendu des components.
// Ajout des route Todo, About et Erreur