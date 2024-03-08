import {CharacterModel} from '../CharactersList/Character'


type CharacterProps = {
    character: CharacterModel,
    f?: (character: CharacterModel) => void;
}
export const Character = ({character, f}: CharacterProps) => {
    console.log("Sto renderizzando Character");
    return <div>
        <button onClick={() => {f && f(character)}}>Seleziona</button>
        <img alt={character.name} src={character.image}></img>
        <h2>{character.name}</h2>
    </div>
}