import { GameState } from "@interface/TicTacToe";
import { destroyGame, resetMark } from "@store/slice/GameSlice";
import { useDispatch, useSelector } from "react-redux";
import { ChoosePlayer } from "@components/ChoosePlayer";

export function NotTie() {
	const dispatch = useDispatch();
	const gameState: GameState = useSelector((state: any) => state.GameReducer);

	return (
		gameState.winner && (
			<>
				<p className="text-center font-bold uppercase">You Won</p>
				<div className="flex items-center justify-center gap-3 py-5 text-center">
					<div className="w-8 whitespace-nowrap text-2xl font-bold uppercase text-arsenic-100 sm:w-10 sm:text-3xl md:w-12 md:text-4xl">
						<ChoosePlayer
							xStyle="fill-x"
							oStyle="fill-o"
							player={gameState.winner.player}
						/>
					</div>
					<p
						className={`text-2xl font-bold uppercase sm:text-3xl md:text-4xl ${
							gameState.winner.player === "O"
								? "text-o"
								: "text-x"
						}`}
						style={{
							lineHeight: "2.25rem",
							translate: "0 -5%",
						}}
					>
						Takes the round
					</p>
				</div>
				<div className="flex flex-col justify-center gap-2 text-sm sm:flex-row sm:gap-4 sm:text-base">
					<button
						onClick={() => {
							dispatch(destroyGame());
						}}
						className="rounded-lg border-b-4 border-b-arsenic-200 bg-arsenic-100 px-3 py-2 font-semibold uppercase text-arsenic-950"
					>
						Quit
					</button>
					<button
						onClick={() => {
							dispatch(resetMark());
						}}
						className={`rounded-lg border-b-4 px-3 py-2 font-semibold uppercase text-arsenic-950 ${
							gameState.winner.player === "O"
								? "border-b-x-shadow bg-x"
								: "border-b-o-shadow bg-o"
						}`}
					>
						Next Round
					</button>
				</div>
			</>
		)
	);
}
