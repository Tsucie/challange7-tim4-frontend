import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";

const CardCarSection = ({ car }) => {
  const {
    image,
    manufacture,
    model,
    rentPerDay,
    capacity,
    transmission,
    year,
  } = car;

  return (
    <>
      <div className="col m-2">
        <div className="card" style={{ width: "18rem", height: "550px" }}>
          <img
            src={image}
            className="card-img-top img-fluid"
            alt=""
            style={{ height: "190px", objectFit: "cover" }}
          />
          <div className="card-body" style={{ fontSize: "14px" }}>
            <p className="card-title">
              {manufacture} {model}
            </p>
            <p className="fw-bold">Rp. {rentPerDay} / hari</p>
            <div className="my-2">
              <i className="bi bi-people me-2"></i>
              {capacity} Orang
            </div>
            <div className="my-2">
              <i className="bi bi-gear me-2"></i>
              {transmission}
            </div>
            <div className="my-2">
              <i className="bi bi-calendar4 me-2"></i>
              {year}
            </div>
            <a
              href="/cars"
              className="btn bg-button text-white w-100 mt-2 fw-bold mt-4"
              style={{ fontSize: "14px" }}
            >
              Pilih Mobil
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCarSection;
