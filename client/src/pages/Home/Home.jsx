import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
	getAllPokemons,
	getAllTypes,
	filterPokesByType,
	orderByName,
	filterPokesByCreated,
	orderByAttack,
} from "../../store/actions/index";

import Card from "../../components/Card/Card";
import NavBar from "../../components/Navbar/Navbar";
import Paginado from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import "./Home.css";

const Home = () => {
	const allPokemons = useSelector((state) => state.pokemons);
	const allTypes = useSelector((state) => state.allTypes);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [pokesPerPage] = useState(12);
	const lastPoke = currentPage * pokesPerPage;
	const firstPoke = lastPoke - pokesPerPage;
	const currentPokes = allPokemons.slice(firstPoke, lastPoke);
	const paginado = (numberPage) => setCurrentPage(numberPage);
	const [order, setOrder] = useState("");

	useEffect(() => {
		dispatch(getAllTypes());
		dispatch(getAllPokemons());
	}, [dispatch]);

	const handleFilterByTypes = (e) => {
		dispatch(filterPokesByType(e.target.value));
		setCurrentPage(1);
	};

	const handlerOrderByName = (e) => {
		dispatch(orderByName(e.target.value));
		setOrder(e.target.value);
		setCurrentPage(1);
	};

	const handlerFilterCreated = (e) => {
		dispatch(filterPokesByCreated(e.target.value));
		setCurrentPage(1);
	};

	const handlerOrderByAttack = (e) => {
		dispatch(orderByAttack(e.target.value));
		setOrder(e.target.value);
		setCurrentPage(1);
	};

	const handleReset = (e) => {
		e.preventDefault();
		dispatch(getAllTypes());
		dispatch(getAllPokemons());
		document.getElementById("order").value = "order";
		document.getElementById("created").value = "all";
		document.getElementById("types").value = "type";
		setCurrentPage(1);
	};

	return (
		<>
			<NavBar />
			<div className="filter_container noselect">
				<button
					type="submit"
					className="btn_reset"
					onClick={(e) => handleReset(e)}
				>
					Reset
				</button>

				<div className="filter_items">
					<div className="filter_title">By Order</div>
					<select
						id="order"
						defaultValue="Select the order"
						onChange={(e) => handlerOrderByName(e)}
					>
						<option value="order">none</option>
						<option value="asc">A - Z</option>
						<option value="des">Z - A</option>
					</select>
				</div>

				<div className="filter_items">
					<div className="filter_title">By Attack</div>
					<select
						defaultValue="Order by attack"
						onChange={handlerOrderByAttack}
					>
						<option value="attack">none</option>
						<option value="minAttack">Min attack</option>
						<option value="maxAttack">Max attack</option>
					</select>
				</div>

				<div className="filter_items">
					<div className="filter_title">Types</div>
					<select
						id="types"
						defaultValue="Select the type"
						onChange={(e) => handleFilterByTypes(e)}
					>
						<option value="type">none</option>
						<option value="All">All</option>
						{allTypes?.map((type) => (
							<option key={type.id} value={type.name}>
								{type.name}
							</option>
						))}
					</select>
				</div>

				<div className="filter_items">
					<div className="filter_title">pokemon</div>
					<select id="created" onChange={(e) => handlerFilterCreated(e)}>
						<option value="all">All</option>
						<option value="created">Created</option>
						<option value="api">Api</option>
					</select>
				</div>
			</div>

			<div className="">
				<div className="cards_container">
					{!currentPokes.length ? ( //!
						<Loading />
					) : currentPokes.length ? (
						currentPokes.map((poke) => {
							return (
								<div key={poke.id}>
									<Card
										id={poke.id}
										name={poke.name}
										types={
											poke.types?.[0]
												? poke.types.map((t) => t.name)
												: poke.types.map((t) => t.name + " ")
										}
										img={poke.imgUrl}
										attack={poke.attack}
										weight={poke.weight}
										key={poke.id}
									/>
								</div>
							);
						})
					) : null}
				</div>
			</div>
			<div>
				{currentPokes.length > 0 && allPokemons.length > 12 ? (
					<div className="pag">
						<Paginado
							pokesPerPage={pokesPerPage}
							allPokes={allPokemons.length}
							paginado={paginado}
							currentPage={currentPage}
						/>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Home;
