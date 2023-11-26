import React from "react";

const Modal = ({ title, content, price, image }) => {
  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              style={{ color: "#EA5F6E" }}
              id="productModalLabel"
            >
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                const modalElement = document.getElementById("productModal");
                const modal = new window.bootstrap.Modal(modalElement);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,.125)",
              }}
            >
              <img
                className="mx-auto text-center d-block"
                style={{ maxWidth: "70%" }}
                src={image}
                alt=""
              />
            </div>

            <p className="pt-4">{content}</p>
            <p style={{ color: "#387EA1" }}>Price: ${price}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              style={{ backgroundColor: "#2F6C90", color: "#fff" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
