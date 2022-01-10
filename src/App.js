import './App.css';

function App({ message }) {    // Destructuring qui permet de récuperer les props de App.js

console.log();
  return (
    <div className="App">
  {message}
    </div>
  );
}

export default App;

// une props sont des parametres (props, ) (le premier sera toujours props)