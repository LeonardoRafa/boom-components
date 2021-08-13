import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../helpers";

import { Container } from "./styles";

const Radio = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  disabled,
  className,
  style
}) => (
  <Container style={style} className={className}>
    <input
      onChange={onChange}
      value={value}
      name={name}
      type="radio"
      id={id}
      hidden
      checked={checked}
      disabled={disabled}
    />
    <div className="radioContainer">
      <span className="checkmark" />
    </div>
    {label && <div className="radioLabel">{label}</div>}
  </Container>
);

Radio.propTypes = {
  /** add custom className */
  className: PropTypes.string,
  /** specifies the initial state of radio */
  checked: PropTypes.bool,
  /** disabled click of radio */
  disabled: PropTypes.bool,
  /** specifies id of radio */
  id: PropTypes.string.isRequired,
  /** label of radio */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** name of radio group */
  name: PropTypes.string.isRequired,
  /** callback when click radio */
  onChange: PropTypes.func,
  /** component main style */
  style: PropTypes.object,
  /** value of radio when selected */
  value: PropTypes.string.isRequired
};

Radio.defaultProps = {
  className: "",
  checked: false,
  disabled: false,
  onChange: noop,
  style: null
};

export default Radio;
