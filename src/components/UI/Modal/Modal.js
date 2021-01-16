import React from "react";
import Auxi from "../../../hoc/Auxi";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";
const Modal = (props) => {

 

  return (
    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxi>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
