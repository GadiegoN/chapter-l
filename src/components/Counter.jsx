import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    function somar() {
        //console.log('Somar');
        setCounter(counter + 1);
    }
    function subtrair() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={somar}>Somar</button>
            <button type="button" onClick={subtrair}>Subtrair</button>
        </div>
    );
}