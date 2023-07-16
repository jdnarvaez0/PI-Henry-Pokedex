import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../store/actions/index";
import "./Form.css";

const signos = [
	"/",
	"(",
	")",
	".",
	",",
	"#",
	"$",
	"%",
	"&",
	"!",
	"¡",
	"?",
	"¿",
	"@",
	'"',
	"{",
	"}",
	"[",
	"]",
];

const validateForm = (poke) => {
	const errors = {};
	if (!poke.name) errors.name = "Name is required";
	if (poke.name.length > 0 && poke.name.length < 5)
		errors.name = "He name cannot have less than 5 letters";
	if (poke.name.length > 15)
		errors.name = "The name cannot have more than 15 letters";
	for (let i = 0; i < signos.length; i++) {
		if (poke.name.includes(signos[i])) {
			errors.name = "Signs are not allowed in the name";
		}
	}
	if (!poke.hp || (poke.hp && Number(poke.hp) === 0))
		errors.hp = "Please enter a number greater than 0";
	if (!poke.defense || (poke.defense && Number(poke.defense) === 0))
		errors.defense = "Please enter a number greater than 0";
	if (!poke.attack || (poke.attack && Number(poke.attack) === 0))
		errors.attack = "Please enter a number greater than 0";
	if (!poke.speed || (poke.speed && Number(poke.speed) === 0))
		errors.speed = "Please enter a number greater than 0";
	if (!poke.height || (poke.height && Number(poke.height) === 0))
		errors.height = "Please enter a number greater than 0";
	if (!poke.weight || (poke.weight && Number(poke.weight) === 0))
		errors.weight = "Please enter a number greater than 0";

	return errors;
};

const Form = () => {
	const dispatch = useDispatch();
	const types = useSelector((state) => state.allTypes);
	const history = useHistory();
	const [error, setError] = useState({});
	const [data, setData] = useState({
		name: "",
		hp: "",
		defense: "",
		attack: "",
		speed: "",
		height: "",
		weight: "",
		imgUrl: "",
		tipos: [],
	});

	useEffect(() => {
		dispatch(getAllTypes());
	}, [dispatch]);

	const handleSudmit = (e) => {
		e.preventDefault();
		setError(validateForm(data));
		if (!data.name) return alert("Por favor, completar todos los campos");
		if (Object.keys(error).length > 0) {
			return alert("Please make sure you fill in the details correctly.");
		}
		if (!data.tipos.length) {
			data.tipos = ["normal"];
		}
		dispatch(postPokemon(data));
		alert("Pokemon creado");
		history.push("/home");
	};

	const handleSelectType = (e) => {
		const typeSelect = e.target.value;
		if (data.tipos.length >= 2) {
			return alert("You cannot choose more than two types");
		}
		if (!data.tipos.includes(typeSelect)) {
			setData({
				...data,
				tipos: [...data.tipos, typeSelect],
			});
		}
	};

	const handleChangeData = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
		setError(
			validateForm({
				...data,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleDeleteType = (type) => {
		setData({
			...data,
			tipos: data.tipos.filter((t) => t !== type),
		});
	};

	return (
		<div className="container_form">
			<div className="formulario">
				<div className="title">
					<h2>Create Pokemon</h2>
				</div>
				<form onSubmit={handleSudmit} className="form">
					<div className="columns">
						<div>
							<label htmlFor="name">Name: </label>
							<input
								type="text"
								name="name"
								value={data.name}
								onChange={handleChangeData}
							/>
						</div>
						{error.name && <span>{error.name}</span>}

						<div>
							<label htmlFor="hp">Life: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="hp"
								value={data.hp}
								onChange={handleChangeData}
							/>
						</div>
						{error.hp && <span>{error.hp}</span>}

						<div>
							<label htmlFor="defense">Defense: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="defense"
								value={data.defense}
								onChange={handleChangeData}
							/>
						</div>
						{error.defense && <span>{error.defense}</span>}

						<div>
							<label htmlFor="attack">Attack: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="attack"
								value={data.attack}
								onChange={handleChangeData}
							/>
						</div>
						{error.attack && <span>{error.attack}</span>}

						<div>
							<label htmlFor="speed">Speed: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="speed"
								value={data.speed}
								onChange={handleChangeData}
							/>
						</div>
						{error.speed && <span>{error.speed}</span>}
					</div>
					<div className="columns">
						<div>
							<label htmlFor="height">Height: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="height"
								value={data.height}
								onChange={handleChangeData}
							/>
						</div>
						{error.height && <span>{error.height}</span>}

						<div>
							<label htmlFor="weight">Weight: </label>
							<input
								type="number"
								min="0"
								max="1000"
								name="weight"
								value={data.weight}
								onChange={handleChangeData}
							/>
						</div>
						{error.weight && <span>{error.weight}</span>}

						<div>
							<label htmlFor="img">Image: </label>
							<input
								type="text"
								name="imgUrl"
								value={data.imgUrl}
								onChange={handleChangeData}
							/>
						</div>

						<div>
							<label htmlFor="type">Type/s: </label>
							<select
								name="type"
								className="select-form"
								onChange={handleSelectType}
							>
								{types.map((t) => {
									return (
										<option key={t.id} value={t.name}>
											{t.name}
										</option>
									);
								})}
							</select>

							<div className="selected-type">
								{data.tipos?.map((type) => {
									return (
										<span key={type}>
											{type}{" "}
											<button onClick={() => handleDeleteType(type)}>x</button>
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</form>
				<div className="btn-form">
					<Link to="/pokemons">
						<button>CANCEL</button>
					</Link>
					{Object.keys(error).length > 0 ? (
						<button type="submit">CREATE</button>
					) : (
						<button type="submit">CREATE</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Form;
