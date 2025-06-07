import React, { useEffect, useState } from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Component mounted or count changed: ${count}`)
        return()=>{
            console.log(`Component unmounted or count changed. Cleaning up.... `)
        };
    },[count]);

    const increment = ()=> {
        setCount(prevCount => prevCount +1);
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            

        </>
    )
}
export default UseEffect