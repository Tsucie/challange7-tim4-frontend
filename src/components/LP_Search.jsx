import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import { Container, Button, Row, Col } from "react-bootstrap";

import Car from "./LP_CardCar";
import { getAllCars, getFilteredCars } from "../redux/actions/carsActions";
import HeaderCar from "../public/img/HeaderCar.png";

const Search = (props) => {
  const dispatch = useDispatch();
  const { cars, error } = useSelector((state) => state.cars);

  useEffect(() => {
    (async () => {
      dispatch(getAllCars());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [ availableAt, setAvailableAt ] = useState("");
  const [ capacity, setCapacity ] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!availableAt) alert("Available At is required");
    if (availableAt || capacity) {
      dispatch(getFilteredCars(availableAt, capacity));
    }
  };

  return (
    <>
      <div className="bg-aliceblue">
        <Container className="pt-5">
          <Row>
            <Col lg className="my-auto">
              <h1 className="h1 fw-bold me-4">
                Sewa & Rental Mobil Terbaik di kawasan Palembang
              </h1>
              <p className="w-75">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Button href="/cars" className="bg-button border-0 mb-5">
                Mulai Sewa Mobil
              </Button>
            </Col>
            <Col lg>
              <img src={HeaderCar} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="cars-box-search p-4 row row-cols-xl-auto mx-auto mb-4">
          <div className="col-xxl p-2 mx-auto inputDriver">
            <label
              htmlFor="TipeDriver"
              className="pb-2"
              style={{ fontSize: "13.5px" }}
            >
              Tipe Driver
            </label>
            <select className="form-select" id="driver" required>
              <option value="">Pilih Tipe Driver</option>
              <option value="yes">Dengan Supir</option>
              <option value="no">Tanpa Supir(Lepas Kunci)</option>
            </select>
          </div>
          <div className="col-xxl p-2 mx-auto inputDate">
            <label
              htmlFor="Tanggal"
              className="pb-2"
              style={{ fontSize: "13.5px" }}
            >
              Tanggal
            </label>
            <input 
              type="date" 
              id="date" 
              className="form-control" 
              onChange={(e) => setAvailableAt(e.target.value)}
              required 
            />
          </div>
          <div className="col-xxl p-2 mx-auto inputTime">
            <label
              htmlFor="Time"
              className="pb-2"
              style={{ fontSize: "13.5px" }}
            >
              Waktu Jemput/Ambil
            </label>
            <select className="form-select icon-rtl-time" id="time" required>
              <option value="0">00.00 WIB</option>
              <option value="1">01.00 WIB</option>
              <option value="2">02.00 WIB</option>
              <option value="3">03.00 WIB</option>
              <option value="4">04.00 WIB</option>
              <option value="5">05.00 WIB</option>
              <option value="6">06.00 WIB</option>
              <option value="7">07.00 WIB</option>
              <option value="8">08.00 WIB</option>
              <option value="9">09.00 WIB</option>
              <option value="10">10.00 WIB</option>
              <option value="11">11.00 WIB</option>
              <option value="12">12.00 WIB</option>
              <option value="13">13.00 WIB</option>
              <option value="14">14.00 WIB</option>
              <option value="15">15.00 WIB</option>
              <option value="16">16.00 WIB</option>
              <option value="17">17.00 WIB</option>
              <option value="18">18.00 WIB</option>
              <option value="19">19.00 WIB</option>
              <option value="20">20.00 WIB</option>
              <option value="21">21.00 WIB</option>
              <option value="22">22.00 WIB</option>
              <option value="23">23.00 WIB</option>
            </select>
          </div>
          <div
            className="col-xxl p-2 mx-auto inputPassanger"
            style={{ minWidth: "200px" }}
          >
            <label
              htmlFor="Tanggal"
              className="pb-2"
              style={{ fontSize: "13.5px" }}
            >
              Jumlah Penumpang (optional)
            </label>
            <input
              type="number"
              id="passanger"
              className="form-control icon-rtl-passanger"
              placeholder="Jumlah Penumpang"
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </div>
          <div
            className="col-xl p-2"
            style={{ display: "inline", alignSelf: "flex-end", height: "100%" }}
          >
            <button
              className="btn bg-button text-white"
              type="button"
              id="btnFilterCar"
              onClick={handleSearch}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row row-cols-auto justify-content-center">
          {cars.length === 0 ? (
            <>
              {/* <h1>Loading...</h1> */}
              <div className="loader"></div>
            </>
          ) : (
            cars.data.map((car) => (
              <Col key={car.id} md={4} className="my-2">
                <Car car={car} />
              </Col>
            ))
          )}
        </div>
      </Container>
    </>
  );
};

export default Search;
