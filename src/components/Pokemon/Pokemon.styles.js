import styled from "styled-components";

export const ScPokemonItem = styled.button`
  padding: 8px;
  display: grid;
  place-items: center;
  border: 1px solid #ddd;

  border-radius: 8px;

  &:hover {
    border: 1px solid #888;
  }
`;

export const PokemonDetailsModal = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  .dropshadow {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .modal-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    height: 450px;
    width: 450px;
  }
`;
