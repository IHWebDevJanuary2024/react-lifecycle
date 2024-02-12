import { useState, useEffect } from "react"
import './Example4.css'

function Example4() {
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

    return (
        <>
            <h1>Example 4</h1>
            <div className="characters-container">
                {
                    characters.map((character) => {
                        return (
                            <div key={character.id} className="character-card">
                                {/* we want to change the style only for abadango */}
                                <h3 className={formatName(character.name) === "Abadango" && "abadango"}>{formatName(character.name)}</h3>
                                <img src={character.image} alt={character.name} />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Example4