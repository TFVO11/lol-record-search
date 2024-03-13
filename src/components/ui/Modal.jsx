import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return <div>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

function Modal() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay onClick={porps.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
