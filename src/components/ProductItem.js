import React from "react";

const ProductItem = (props) => {
  const { item, setStateModal } = props;
  const { image, name, price, description } = item;

  const handleItemClick = () => {
    setStateModal({
      title: name,
      content: description,
      price: price,
      image: image,
    });

    const modal = new window.bootstrap.Modal(
      document.getElementById("productModal")
    );
    modal.show();
  };

  const headingStyle = {
    color: "#EA5F6E",
    fontSize: "25px",
    paddingTop: "20px",
  };

  const priceStyle = {
    color: "#387EA1",
    fontWeight: "600",
  };

  return (
    <div
      className="col-4 p-3"
      onClick={handleItemClick}
      data-toggle="modal"
      data-target="#productModal"
    >
      <div className="border rounded p-3" style={{ cursor: "pointer" }}>
        <div
          style={{
            borderBottom: "1px solid rgba(0,0,0,.125)",
          }}
        >
          <img className="w-100" src={image} alt="" />
        </div>
        <h3 style={headingStyle}>{name}</h3>
        <p style={priceStyle}>$ {price}</p>
        <button className="py-2 px-3 btn btn-success mt-3 text-white">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
