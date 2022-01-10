import "./index.css"
// import Button from "../Button"


    const Todo = () => {

        const todos = [
            { id: 1, texte: "Todo 1" },
            { id: 2, texte: "Todo 2" },
            { id: 3, texte: "Todo 3" },
            { id: 4, texte: "Todo 4" }
        ]
        
        return ( 
            <div className="todo">
                <ul>
                    {todos.map((todo) => <li>{todo.texte}</li>)}  {/* Permet de boucler dans le tableau en ajouter todo.texte au nouveau tableau créer par map*/}
                </ul>
            </div>
        );
    }
 
export default Todo;

// .map renvois un nouveau tableau avec la modification apportée et on peux construire des éléments ou des composants.
