import { useState, useEffect } from "react";
import WebFont from "webfontloader";

// Components
import Wrapper from "./components/Container";
import Nav from "./components/Nav/Nav";
import { PokemonDetails, PokemonItem } from "./components/Pokemon";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);

  const pokemons = [
    { name: "Bulbasaur" },
    { name: "Charizard" },
    { name: "Pikachu" },
    { name: "Pichu" },
    { name: "Mewtwo" },
    { name: "Mew" },
    { name: "Bulbasaur" },
    { name: "Charizard" },
    { name: "Pikachu" },
    { name: "Pichu" },
    { name: "Mewtwo" },
    { name: "Mew" },
  ];

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper className="App">
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          gridColumnGap: "8px",
          gridRowGap: "8px",
        }}
      >
        <button onClick={handleModalOpen}>Open Modal</button>
        {pokemons.map((item, index) => (
          <PokemonItem
            key={index}
            PokemonName={item.name}
            onClick={handleModalOpen}
          />
        ))}
      </div>
      <PokemonDetails isOpen={isModalOpen} handleModalOpen={handleModalOpen} />
    </Wrapper>
  );
}

export default App;
