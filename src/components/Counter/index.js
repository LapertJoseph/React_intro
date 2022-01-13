import React from 'react';
import { useState } from 'react';

import './index.css';

const Counter = ( {initialCount, ...rest} ) => {            // ici on recupere l'initialState qu'on passe dans l'utilisation du composant + le rest (className)
    console.log(rest);
    const [count, setCount] = useState(initialCount)

    return (
        <div {...rest} >                                                             {/* ici on passe le rest des props dans la div (toto, className) */}
            Total: {count}
            <button onClick={() => setCount(initialCount)}>Réinitialiser</button>    {/* initialcount d'ou la valeur sera initialiser dans l'utilisation d'un compo */}
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
};

export default Counter;