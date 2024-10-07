import React from "react";

const ToggleText = () => {
  const [toggleText, setToggleText] = React.useState(true);
  return (
    <>
      {toggleText && <div>Hello, World!</div>}
      <button onClick={() => setToggleText(!toggleText)}>
        {toggleText ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default ToggleText;
