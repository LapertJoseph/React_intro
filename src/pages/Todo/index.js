import { useRef, useState } from 'react';  // on importe les hooks useRef et useState (déclare un état=données et founis aussi la fonction qui modifie l'état)

import Button from '../../components/Button';

import './index.css';

const Todo = () => {

    // ici le hook useState
    const [todos, setTodos] = useState([
        { id: 1, texte: "Todo 1" },    // <li>Todo 1</li>
        { id: 2, texte: "Todo 2" },    // <li>Todo 2</li>
        { id: 3, texte: "Todo 3" },    // <li>Todo 3</li>
        { id: 4, texte: "Todo 4" }     // <li>Todo 4</li>
    ]);

    const textRef = useRef();           // je crée une référence qui prévois de ratacher a input texte afin de récup la valeur 

    const supprimer = (id) => {     // on utilise setTodos afin de filtrer le tableau todos via la fonction filtrer
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }
    
    const ajouter = () => {
        const newTodo = { id: todos.length + 1, texte: textRef.current.value }  // ic on récupére la valeur de textRef afin de l'affecter à la nouvelle todo
        // setTodos([...todos, newTodo])
        setTodos(prevState => [...prevState, newTodo])          // ici on ajoute une todo via setTodos
    }

    return (                            // on effectue le rendu de la page todo
        <div className="todo">
            <div>
                <input type="text" ref={textRef}/>                          {/* on rattache la ref textRef à l'élément input texte */}
                <Button texte="Ajouter" onClick={ajouter}></Button>         {/* on attache la fonction ajouter à l'élément Button via l'évent Onclick */}
            </div>
            <ul>
                {todos.map((todo) => (                                      // on utilise la fonction map afin de parcourir les todos et de retourner l'affichage attendu (<li> text <Button texte="Supprimer"/> <li> 
                    <li id={`todo-${todo.id}`} key={`todo-${todo.id}`}>                                     {/* key dois être unique, nécéssaire à React (MAJ les rendus ) */}
                        {todo.texte} <Button onClick={() => supprimer(todo.id)} texte="supprimer"></Button> 
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Todo;