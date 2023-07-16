import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonDetail, clearDetail } from "../../store/actions/index";
import Loading from "../Loading/Loading";
import "./Detail.css";

const Detail = (props) => {
  const idPokemon = props.match.params.id;
  const dispatch = useDispatch();
  const pokeDetails = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    dispatch(getPokemonDetail(idPokemon));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, idPokemon]);

  return (
    <>
      <div className="container_detail">
        {!pokeDetails.name ? (
          <div className="top-loader">
            <Loading />
          </div>
        ) : (
          <div>
            <div className="card_detail">
              <div className="top">
                <h2>{pokeDetails.name}</h2>
                <div className="container_types">
                  {pokeDetails.types
                    ? pokeDetails?.types.map((type) => (
                      <h4 key={type.name} id={type.name}>
                        {type.name.toUpperCase()}
                      </h4>
                    ))
                    : null}
                </div>
                <div className="container_image">
                  <img src={pokeDetails.imgUrl} alt="poke-detail" />
                </div>
              </div>
              <div className="stats">
                <div className="stats_1">
                  <p>Life: {pokeDetails.hp}</p>
                  <meter
                    min="0"
                    max="200"
                    value={pokeDetails.hp}
                    low="40"
                    high="150"
                    optimun="200"
                  />
                  <p>Speed: {pokeDetails.speed}</p>
                  <meter
                    min="0"
                    max="200"
                    value={pokeDetails.speed}
                    low="40"
                    high="150"
                    optimun="200"
                  />
                </div>
                <div className="stats_2">
                  <p>Defense: {pokeDetails.defense}</p>
                  <meter
                    min="0"
                    max="200"
                    value={pokeDetails.defense}
                    low="40"
                    high="150"
                    optimun="200"
                  />
                  <p>Attack: {pokeDetails.attack}</p>
                  <meter
                    min="0"
                    max="200"
                    value={pokeDetails.attack}
                    low="40"
                    high="150"
                    optimun="200"
                  />
                </div>
                <div className="stats_3">
                  <p>Weight: {pokeDetails.weight}</p>
                  <meter
                    min="0"
                    max="200"
                    value={pokeDetails.weight}
                    low="40"
                    high="150"
                    optimun="200"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="btn_container" >
        <Link to="/pokemons">
          <div className="home">
            <span>
              Back to Home
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Detail;
