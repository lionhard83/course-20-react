import axios from "axios"
import { ApiResponse, CharacterModel } from "./Character";
import { useEffect, useState } from "react";
import { Character } from "../Character/Character";



export const CharactersList = () => {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    const [currentCharacter, setCurrentCharacter] = useState<CharacterModel | null>(null);
    const [hasNext, setNext] = useState(true);

    const loadData = async (page: number) => {
        const response = await axios.get<ApiResponse>(`https://rickandmortyapi.com/api/character?page=${page}`);
        setCharacters(response.data.results);
        // setNext(Boolean(response.data.info.next))
    }

    useEffect(() => {loadData(page)}, [page])
    

    return <div>
        <br/>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={!hasNext} onClick={() => setPage(page + 1)}>Next</button>

        {/* <div style={{backgroundColor: 'red'}}>
            {currentCharacter && <Character character={currentCharacter}></Character>}
        </div> */}
        <br/>
        {characters.map((item) => <Character currentCharacter={currentCharacter} f={setCurrentCharacter} character={item}></Character>)}
    </div>
}