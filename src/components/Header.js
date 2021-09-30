import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "black" : "black"}
        text={showAdd ? "Close" : "Add Item"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "pink",
//   backgroundColor: "skyblue",
// };

export default Header;
