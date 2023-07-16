import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="cards_container">
      {data &&
        data.map((p) => (
          <Card key={p.id} id={p.id} name={p.name} img={p.img} types={p.type} />
        ))}
    </div>
  );
};

export default Cards;
