import {CharacterModel} from '../CharactersList/Character'


type CharacterProps = {
    character: CharacterModel
}
export const Character = ({character}: CharacterProps) => {
    return <div>
        <img alt={character.name} src={character.image}></img>
        <h2>{character.name}</h2>
    </div>
}