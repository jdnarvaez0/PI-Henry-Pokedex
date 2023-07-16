import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar_container">
			<Link to="/" className="logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png"
					alt="logo pokeball"
				/>
			</Link>
			<SearchBar />
			<Link to="/form" className="btn-navbar">
				<button>Create Pokemon</button>
			</Link>
		</div>
	);
};

export default Navbar;
