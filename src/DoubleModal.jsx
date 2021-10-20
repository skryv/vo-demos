import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-modal";
import "@govflanders/vl-ui-util";

export default function DoubleModal() {
  useEffect(() => {
    window.vl.modal.dressAll();
  }, []);

  function openFirstModal() {
    window.vl.modal.toggle(document.getElementById("modal-first"));
    window.vl.modal.lastClickedToggle = document.getElementById("modal-first");
  }

  function closeFirstModal() {
    window.vl.modal.toggle(document.getElementById("modal-first"));
  }

  function openSecondModal() {
    window.vl.modal.toggle(document.getElementById("modal-second"));
    window.vl.modal.lastClickedToggle = document.getElementById("modal-second");
  }

  function closeSecondModal() {
    window.vl.modal.toggle(document.getElementById("modal-second"));
  }

  function firstModal() {
    return (
      <ModalPortal>
        <div className="vl-modal">
          {/* No dialog because the user is not asked to confirm */}
          <div
            id="modal-first"
            data-vl-modal
            tabIndex="-1"
            aria-modal="true"
            aria-hidden="true"
            className="vl-modal-dialog vl-modal-dialog--medium vl-modal-dialog--right"
          >
            {/* Close button */}
            <button
              type="button"
              className="vl-modal-dialog__close"
              onClick={closeFirstModal}
            >
              <i
                className="vl-modal-dialog__close__icon vl-vi vl-vi-cross"
                aria-hidden="true"
              />
              <span className="vl-u-visually-hidden">Close</span>
            </button>

            {/* Content */}
            <h2 className="vl-modal-dialog__title" id="modal-toggle-1-title">
              First modal
            </h2>
            <div
              className="vl-modal-dialog__content"
              id="modal-toggle-1-description"
            >
              Content of first modal
            </div>
            <div className="vl-modal-dialog__footer">
              <div className="vl-action-group">
                <button className="vl-button" onClick={() => openSecondModal()}>
                  <span className="vl-button__label">Open second modal</span>
                </button>
              </div>
            </div>
            {/* When the second modal is declared here, its z-index is not set correctly */}
            {/* {secondModal()} */}
          </div>
        </div>
      </ModalPortal>
    );
  }
  function secondModal() {
    return (
      <ModalPortal>
        <div className="vl-modal">
          {/* A dialog because the user is asked to confirm */}
          <dialog
            id="modal-second"
            data-vl-modal
            tabIndex="-1"
            aria-modal="true"
            aria-hidden="true"
            className="vl-modal-dialog"
          >
            {/* Close button */}
            <button
              type="button"
              className="vl-modal-dialog__close"
              onClick={closeSecondModal}
            >
              <i
                className="vl-modal-dialog__close__icon vl-vi vl-vi-cross"
                aria-hidden="true"
              />
              <span className="vl-u-visually-hidden">Close</span>
            </button>
            {/* Content */}
            <h2 className="vl-modal-dialog__title" id="modal-toggle-1-title">
              Second modal
            </h2>
            <div
              className="vl-modal-dialog__content"
              id="modal-toggle-1-description"
            >
              Content of second modal
            </div>
          </dialog>
        </div>
      </ModalPortal>
    );
  }

  return (
    <div>
      {/* Problem statement */}
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          Problem: Suppose you have a button that opens a modal where you can
          see some details of a property (first modal). Within this modal there
          is a button that opens a modal where the user needs to confirm some
          stuff (second modal). The second modal does not have its own
          "backdrop". So (1) the first modal is still clearly visible underneath
          and (2) when closing the second modal, the backdrop of the first modal
          disappears.
        </p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/DoubleModal.jsx"
          target="_blank"
          rel="noreferrer"
        >
          Go to the code
        </a>
      </div>

      {/* Current status */}
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p class="vl-u-mark vl-u-mark--success">
          (2) Fixed by: Upgrading to Webuniversum @govflanders/vl-ui-modal
          v8.0.0
        </p>
        <p class="vl-u-mark vl-u-mark--warning">(1) Not fixed</p>
      </div>

      {/* Demo */}
      <div>
        <p>Demo:</p>
        <button className="vl-button" onClick={() => openFirstModal()}>
          Open first modal
        </button>
        {firstModal()}
        {secondModal()}
      </div>
    </div>
  );
}

const modalRoot = document.getElementsByTagName("body")[0];

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
