import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, types, img, attack }) => {
	return (
		<div className="card_container">
			<figure className={types[1] ? types[1] : types[0]}>
				<div className="pokemon">
					<div className="container-counter">
						<div className="counter">
							{id <= 9 ? <p>#0{id}</p> : <p>#{id}</p>}
						</div>
					</div>
					<div className="img_container">
						<img src={img} alt="poke" />
					</div>
					<div className="card_info">
						<h2 className="card_title">{name}</h2>
						<h4>Attack: {attack}</h4>
						{types.length >= 2 ? (
							<div className="types">
								<p className="cardType">{types[0]}</p>
								<p className="cardType">{types[1]}</p>
							</div>
						) : (
							<div className="types">
								<h3 className="cardType">{types[0]}</h3>
							</div>
						)}
					</div>
					<Link to={`detalle/${id}`}>
						<button className="btn_card">Detalle</button>
					</Link>
				</div>
			</figure>
		</div>
	);
};

export default Card;
