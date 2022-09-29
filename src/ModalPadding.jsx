import React, { useEffect } from "react";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-modal";
import "@govflanders/vl-ui-util";

export default function ModalPadding() {
  useEffect(() => {
    window.vl.modal.dressAll();
  });

  function demo() {
    return (
      <>
        <button class="vl-button" vl-button data-vl-modal-open="modal-1">
          <span class="vl-button__label">Open modal</span>
        </button>
        <div className="vl-modal" data-testid="modal-content">
          <dialog
            id="modal-1"
            aria-describedby="modal-1-description"
            aria-labelledby="modal-1-title"
            data-vl-modal
            data-vl-modal-closable
            tabindex="-1"
            aria-modal="true"
            aria-hidden="true"
            className="vl-modal-dialog"
          >
            <div className="vl-modal-dialog__wrapper">
              <button type="button" className="vl-modal-dialog__close">
                <i
                  className="vl-modal-dialog__close__icon vl-vi vl-vi-cross"
                  aria-hidden="true"
                ></i>
                <span className="vl-u-visually-hidden">Close</span>
              </button>
              <h2 id="modal-1-title" className="vl-modal-dialog__title">
                Modal title
              </h2>
              <div
                id="modal-1-description"
                className="vl-modal-dialog__content"
              >
                Modal content
              </div>
              <div className="vl-modal-dialog__footer">
                <div className="vl-action-group">
                  <button className="vl-button">
                    <span className="vl-button__label">Yes</span>
                  </button>
                  <button className="vl-link">
                    <i
                      className="vl-link__icon vl-link__icon--before vl-vi vl-vi-cross"
                      aria-hidden="true"
                    ></i>
                    No
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </>
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
        <p>Problem: The padding around the modal got removed</p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/ModalPadding.js"
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
        <p>
          <span>Current status: </span>
          <span className="vl-u-mark vl-u-mark--success">Fixed </span>
          <span>
            by adding a wrapper around the dialog content with class
            "vl-modal-dialog__wrapper"
          </span>
        </p>
      </div>

      {/* Demo */}
      <div>
        <p>Demo:</p>
        {demo()}
      </div>
    </div>
  );
}
