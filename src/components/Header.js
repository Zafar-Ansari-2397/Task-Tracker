import React from "react";
import Button from "../components/Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task-Tracker",
};
Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default Header;
