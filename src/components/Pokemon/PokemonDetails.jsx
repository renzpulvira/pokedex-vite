import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PokemonDetailsModal } from "./Pokemon.styles";
import { connect } from "react-redux";

const PokemonDetails = ({ isOpen, handleModalOpen, dispatch, modal }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <PokemonDetailsModal>
      <div className="dropshadow" onClick={handleModalOpen}></div>
      <div className="modal-box">
        <h3>Ohyonk</h3>
      </div>
    </PokemonDetailsModal>,
    document.getElementById("modal")
  );
};

const mapPropsToState = (state) => ({
  modal: state.modal,
});

export default connect(mapPropsToState)(PokemonDetails);
