import { useState, useEffect } from "react"


function Example3() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    /*  console.log("THIS IS THE CONSOLE LOG OUTSIDE THE USEEFFECT");  */ // THIS RUNS ON EACH UPDATE

    useEffect(() => {
        console.log("I'm udating the first state COUNT", count);

    }, [count]) // the dependencies array is to run this part of the code when the state variable that we are adding here is updated



    return (
        <>
            <h1>Example 3</h1>
            <h1>Counter: <span>{count}</span></h1>
            <button onClick={() => setCount(count + 1)}>🧸</button>
            <h1>Counter: <span>{count2}</span></h1>
            <button onClick={() => setCount2(count2 + 1)}>💩</button>
        </>
    )
}

export default Example3