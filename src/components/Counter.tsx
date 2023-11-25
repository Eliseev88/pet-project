import { useState } from 'react'

// изначально тс ругается на импорт модулей, поэтому необходимо явно задекларировать этот тип (файл global.d.ts)
import cl from  './Counter.module.scss';
 
export function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <div className={cl.btn}>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}
