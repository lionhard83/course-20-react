import axios from "axios"
import { ApiResponse, CharacterModel } from "./Character";
import { useEffect, useState } from "react";
import { Character } from "../Character/Character";



export const CharactersList = () => {
    const [page, setPage] = useState(40);
    const [characters, setCharacters] = useState<CharacterModel[]>([]);
    const [hasNext, setNext] = useState(true);

    const loadData = async (page: number) => {
        const response = await axios.get<ApiResponse>(`https://rickandmortyapi.com/api/character?page=${page}`);
        setCharacters(response.data.results);
        setNext(Boolean(response.data.info.next))
    }

    useEffect(() => {loadData(page)}, [page])
    

    return <div>
        <br/>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={!hasNext} onClick={() => setPage(page + 1)}>Next</button>
        <br/>
        {characters.map((item) => <Character character={item}></Character>)}
    </div>
}