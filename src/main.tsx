import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { TicTacToe } from "./TicTacToe";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<TicTacToe />
		</Provider>
	</React.StrictMode>,
);
