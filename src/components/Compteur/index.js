import React from 'react';
import { useState } from 'react';

import './index.css';

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            Total: {count}
            <button onClick={() => setCount(0)}>Réinitialiser</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
};

export default Counter;