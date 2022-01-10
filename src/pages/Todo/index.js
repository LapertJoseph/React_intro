import "./index.css"
// import Button from "../Button"


    const Todo = () => {

        const todos = [
            { id: 1, texte: "Todo 1" },
            { id: 2, texte: "Todo 2" },
            { id: 3, texte: "Todo 3" },
            { id: 4, texte: "Todo 4" }
        ]

        const supprimer = (id) => {
            console.log(id);
            /* Supprimer ma todo */
        }
        
        return ( 
            <div className="todo">
                <ul>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                        <li id={`todo-${todo.id}`}>{todo.texte}</li>                                            {/* Permet de boucler dans le tableau en ajouter todo.texte au nouveau tableau créer par map*/}
                        <button onClick={() => supprimer(todo.id)} key={`btn-${todo.id}`}>Supprimer</button>                      
                        </div>
                    ))}
                </ul>
            </div>
        );
    }

export default Todo;

// .map renvois un nouveau tableau avec la modification apportée et on peux construire des éléments ou des composants.
// {todos.map((todo) => <li id={`todo-${todo.id}`}>{todo.texte}</li>)} notation souvent utilisé pour parcourir des données et faire des actions.
// pour eviter que qu'une fonction soit executer lors de l'hoisting il faut mettre une () => pour qu'il lance seulement quand on clique par exemple

