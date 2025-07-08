// using createPortal and passing component to particular part of html dom
import { createPortal } from "react-dom";
import React from "react";
// destructuring prop taken from CopyInput component
const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "5rem", fontSize: "32px" }}>
          Copied to Clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
