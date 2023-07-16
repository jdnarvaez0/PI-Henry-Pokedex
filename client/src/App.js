import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Detail from "./components/Details/Detail";
import Form from "./components/Form/Form";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Landing} />
			<Switch>
				<Route exact path="/pokemons" component={Home} />
				<Route exact path="/detalle/:id" component={Detail} />
				<Route exact path="/form" component={Form} />
			</Switch>
		</Router>
	);
}

export default App;
