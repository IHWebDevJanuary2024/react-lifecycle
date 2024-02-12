import { useState, useEffect } from "react"
import './Example4.css'

function Example5() {
    const [characters, setCharacters] = useState([]) // At the beggining we have no info (that's why the empty array)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((jsonResponse) => setCharacters(jsonResponse.results))
            .catch((error) => console.error(error)) // The console.error displays it with a red background in the browser console
        // .then((jsonResponse) => console.table(jsonResponse.results)) // we can console.table the results to have them in a table format in the console

    }, []) // DON'T FORGET THE EMPTY ARRAY HERE!!!! ⚠️

    const formatName = (originalName) => {

        let formatedName = originalName.split(' ')

        return formatedName[0] // we want to return only the first part of the name
    }

    /* The styles can also be applied inline by adding an object with the properties in camelcase: */
    const nameStyle = {
        backgroundColor: "blue",
        color: "white"
    }

    return (
        <>
            <h1>Example 5</h1>
            <div className="characters-container">
                {
                    characters.map((character) => {
                        return (
                            <div key={character.id} className="character-card">

                                <h3 style={formatName(character.name) === "Abadango" ? nameStyle : {}} >{formatName(character.name)}</h3>
                                <img src={character.image} alt={character.name} />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Example5