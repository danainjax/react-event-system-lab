// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  return (
    <div>
      <button onFocus={focusHandler} onBlur={blurHandler}>
        RENDER
      </button>
    </div>
  );
}

function focusHandler() {
  console.log("Good!");
}

function blurHandler() {
  console.log("Hey! Eyes on me!");
}

export default EyesOnMe;
