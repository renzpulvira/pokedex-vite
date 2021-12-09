import { Navbar } from "./Nav.styles";
import { connect } from "react-redux";
import { themeToggle } from "../../store/actions/theme.actions";

const Nav = ({ dispatch, theme }) => {
  return (
    <Navbar>
      <p>Pokedex</p>
      <button onClick={() => dispatch(themeToggle())}>
        {theme ? "Light" : "Dark"}
      </button>
    </Navbar>
  );
};

const mapPropsToState = (state) => ({
  theme: state.theme,
});

export default connect(mapPropsToState)(Nav);
