// Code Keypad Component Here
import React from "react";

function Keypad() {
  return (
    <div>
      <h4>enter password</h4>
      <input onKeyUp={passwordHandler} type="password" />
    </div>
  );
}

function passwordHandler() {
  console.log("Entering password...");
}

export default Keypad;
