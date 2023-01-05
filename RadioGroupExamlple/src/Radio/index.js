import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {checked: child.props.value === selected, onChange})
  })

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  const hanldeChange = (e) => {
    onChange(e.target.value)
  }
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input
        onChange={hanldeChange}
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
