import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <Carousel className="mb-2 pb-2">
              <Carousel.Item className="mb-2 pb-2">
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1601224748193-d24f166b5c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">The Climbing Dot</h1>
            <p>
              The Climbing Dot è un sito incentrato sull arrampicata, sponsorizzando gli eventi piu popolari 
              e cercando di far rimanere in contatto i vari climber.
              Entra  a far parte della comunity <Link to="/climbing-blog/signup">registrandoti ora!!</Link> o <Link to="/climbing-blog/login">effettua il Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;