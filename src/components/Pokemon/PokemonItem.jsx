import { ScPokemonItem } from "./Pokemon.styles";

const PokemonItem = ({ PokemonName }) => {
  return (
    <ScPokemonItem>
      <img src={PokemonName} alt="A Pokemon" />
    </ScPokemonItem>
  );
};

export default PokemonItem;
