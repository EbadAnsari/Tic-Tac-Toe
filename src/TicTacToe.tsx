import { Board } from "@components/Board";
import { StartGame } from "@components/StartGame";
import { GameState } from "@interface/TicTacToe";
import { useSelector } from "react-redux";

export function TicTacToe() {
	const gameState: GameState = useSelector((state: any) => state.GameReducer);

	if (gameState.page === "start") return <StartGame />;
	else if (gameState.page === "match") return <Board />;
}
