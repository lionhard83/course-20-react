import {CharacterModel} from '../CharactersList/Character'


type CharacterProps = {
    character: CharacterModel,
    currentCharacter: CharacterModel | null,
    f?: (p: CharacterModel) => void;
}
export const Character = ({character, f, currentCharacter}: CharacterProps) => {
    return <div style={{
        border: '2px solid red', 
        margin: '2px', 
        backgroundColor: currentCharacter && character.id === currentCharacter.id ? 'red' : 'white'}}>
        <button onClick={() => {f && f(character)}}>Seleziona</button>
        <img alt={character.name} src={character.image}></img>
        <h2>{character.name}</h2>
    </div>
}