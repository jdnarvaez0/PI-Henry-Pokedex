import React from "react";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="container__loading">
			<div className="gif__container">
				<img
					src="https://i.gifer.com/VgI.gif"
					className="loading__gif noselect"
					alt="loading-gif"
				></img>
				<div className="loading__text">Loading...</div>
			</div>
		</div>
	);
};

export default Loading;
