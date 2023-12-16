import { GameState, Player } from "@interface/TicTacToe";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { checkWinner, generateStrategy } from "@util/TicTacToe";

export const gameState: GameState = {
	page: "start",
	score: { O: 0, X: 0, tie: 0 },
	choosePlayer: "X",
	mode: null,
	tie: false,
	markOnBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	currentTurn: "X",
	winner: null,
	// winner: { coordinates: [0, 1, 2], player: "O" },
};

export const gameSlice = createSlice({
	initialState: gameState,
	name: "likedSlice",
	reducers: {
		match(state) {
			state.page = "match";
		},
		start(state) {
			state.page = "start";
		},
		choosePlayer(state, action: PayloadAction<GameState["choosePlayer"]>) {
			state.choosePlayer = state.currentTurn = action.payload;
		},
		updateBoardPosition(
			state,
			action: PayloadAction<{ player: Player; position: number }>,
		) {
			state.tie = false;

			if (action.payload.position < state.markOnBoard.length)
				state.markOnBoard[action.payload.position] =
					action.payload.player;

			state.winner = checkWinner(state.markOnBoard);

			if (state.winner && typeof state.winner.player !== "object") {
				state.score[state.winner.player]++;
				state.currentTurn = state.winner.player;
				return;
			}

			if (
				state.markOnBoard.findIndex((element) => element === 0) === -1
			) {
				state.tie = true;
				state.score.tie++;
				return;
			}

			if (state.mode) {
				const cpu = state.choosePlayer === "O" ? "X" : "O";

				const cpuNextChances = generateStrategy(
					[...state.markOnBoard],
					cpu,
				);

				const chooseNextChances = generateStrategy(
					[...state.markOnBoard],
					state.choosePlayer,
				);

				const isPlayerWinning = chooseNextChances[2].find((element) => {
					return element.length < 2;
				});

				if (
					isPlayerWinning &&
					(cpuNextChances[2].length
						? cpuNextChances[2][0].length !== 1
						: true)
				) {
					console.log(cpuNextChances, cpuNextChances[2][0]);
					state.markOnBoard[isPlayerWinning[0]] = cpu;
				} else if (cpuNextChances[2][0]) {
					console.log(cpuNextChances, cpuNextChances[2][0]);
					state.markOnBoard[cpuNextChances[2][0][0]] = cpu;
				} else if (cpuNextChances[1][0]) {
					console.log(cpuNextChances, cpuNextChances[1][0]);
					state.markOnBoard[cpuNextChances[1][0][0]] = cpu;
				}
			} else if (action.payload.player === "O") {
				state.currentTurn = "X";
			} else if (action.payload.player === "X") {
				state.currentTurn = "O";
			}

			state.winner = checkWinner(state.markOnBoard);

			if (state.winner && typeof state.winner.player !== "object") {
				state.score[state.winner.player]++;
				if (!state.mode) state.currentTurn = state.winner.player;
			}
		},
		setMode(state, action: PayloadAction<GameState["mode"]>) {
			state.mode = action.payload;
		},
		resetMark(state) {
			state.winner = null;
			state.markOnBoard = gameState.markOnBoard;
			state.tie = false;
		},
		destroyGame(state) {
			state.choosePlayer = gameState.choosePlayer;
			state.currentTurn = gameState.currentTurn;
			state.markOnBoard = gameState.markOnBoard;
			state.mode = gameState.mode;
			state.page = gameState.page;
			state.score = gameState.score;
			state.tie = gameState.tie;
			state.winner = gameState.winner;
		},
	},
});

export const {
	match,
	setMode,
	resetMark,
	destroyGame,
	choosePlayer,
	updateBoardPosition,
} = gameSlice.actions;

export default gameSlice.reducer;
