import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";

const StartSection = () => {
  return (
    <section id="getting-started">
      <Container className="text-center text-white">
        <div className="bg-primary-darkblue rounded-3 p-5">
          <h1 className="h1 text-white text-center">
            Sewa Mobil di Palembang Sekarang
          </h1>
          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="btn bg-button text-white mt-3" href="/cars">
            Mulai Sewa Mobil
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default StartSection;
