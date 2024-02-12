import { useState } from "react"

function Example1() {
    const [count, setCount] = useState(0)

    // DONT TRY THIS AT HOME 😵
    setInterval(() => {
        setCount(count + 1)
    }, 1000)

    return (
        <>
            <h1>Counter: <span>{count}</span></h1>
        </>
    )
}

export default Example1