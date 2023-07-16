import React from "react";
import { Link } from "react-router-dom";
import LogoPokemon from "../../assets/images/logo-pokemon.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container_landing">
      <h1 className="titulo">Welcome</h1>
      <h2 className="titulo">To Henry</h2>
      <figure>
        <section className="img-bg"></section>
        <img src={LogoPokemon} alt="Pokemon Logo" />
      </figure>
      <div className="btn">
        <Link to="/pokemons">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
