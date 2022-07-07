import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="button">
        Try it out!
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Sorry about that!</h2>
            <p>
              Arbitrade is still closed-source and under development at this time! If you'd like to view the minimum viable product, check out the github project below!
              If you'd like to view the current source code, reach out to me on one of my socials at the bottom of this page!
            </p>
            <a href="https://github.com/liamgoss/Polygon-Arbitrage-Bot">Arbitrage Proof of Concept</a>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}