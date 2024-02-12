import { useState, useEffect } from "react"


function Example2() {
    const [count, setCount] = useState(0)

    /*  console.log("THIS IS THE CONSOLE LOG OUTSIDE THE USEEFFECT");  */ // THIS RUNS ON EACH UPDATE

    useEffect(() => {
        // Whatever we add here with an empty array at the end, is going to run only when the component is MOUNTED
        /* console.log("THIS IS THE CONSOLE LOG INSIDE THE USEEFFECT"); */ // THIS RUNS ONLY WHE IT's MOUNTED
        const interval = setInterval(() => {
            console.log("HELLO THE COUNTER IS RUNNING, THE COUNT IS: ", count);
            setCount((previousValue) => previousValue + 1) // If we don't tell it to get the previous value its going to do: 0+1 on each second.
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("The component example 2 is unmounted");
        }

    }, [])



    return (
        <>
            <h1>Counter: <span>{count}</span></h1>
            {/* <button onClick={() => setCount(count + 1)}>🧸</button> */}
        </>
    )
}

export default Example2