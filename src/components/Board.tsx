import { GameState } from "@interface/TicTacToe";
import { resetMark, updateBoardPosition } from "@store/slice/GameSlice";
import { useDispatch, useSelector } from "react-redux";
import { ChoosePlayer } from "@components/ChoosePlayer";
import { X } from "@components/X";
import { O } from "@components/O";
import { Reset } from "@components/Reset";
import { MatchComplete } from "@components/MatchComplete";

export function Board() {
	const dispatch = useDispatch();
	const gameState: GameState = useSelector((state: any) => state.GameReducer);

	const { currentTurn: turn } = gameState;

	return (
		<div className="relative flex h-d-screen w-full select-none items-center justify-center">
			<div className="flex w-[calc(100%_-_2rem)] flex-col items-center gap-5 xs:w-96">
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center justify-center gap-1">
						<div className="flex w-16">
							<div className="w-1/2">
								<X className="fill-x" />
							</div>
							<div className="w-1/2">
								<O className="fill-o" />
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-1 rounded-lg border-b-4 border-b-arsenic-950 bg-arsenic-400 px-3 py-2">
						<div className="w-5">
							<ChoosePlayer
								player={turn}
								style="fill-arsenic-100"
							/>
						</div>
						<p className="font-bold uppercase text-arsenic-100">
							Turn
						</p>
					</div>
					<div
						className="flex h-fit w-8 cursor-pointer items-center justify-center rounded border-b-2 border-b-arsenic-950 bg-arsenic-100 p-1.5"
						onClick={() => {
							dispatch(resetMark());
						}}
					>
						<Reset />
					</div>
				</div>
				<div className="grid aspect-square w-full grid-cols-3 grid-rows-3 gap-5">
					{gameState.markOnBoard.map((element, index) => (
						<div
							key={index}
							className={`relative flex h-full w-full cursor-pointer items-center justify-center rounded-xl border-b-[6px] border-b-arsenic-950 bg-arsenic-400 ${
								gameState.winner?.coordinates.includes(index) &&
								(gameState.winner.player === "O"
									? "bg-o"
									: "bg-x")
							}`}
						>
							<div
								className="call w-8/12"
								onClick={() => {
									if (!element)
										dispatch(
											updateBoardPosition({
												player: turn,
												position: index,
											}),
										);
								}}
							>
								{(() => {
									if (
										gameState.winner?.coordinates.includes(
											index,
										)
									) {
										return (
											<ChoosePlayer
												player={gameState.winner.player}
												style="fill-arsenic-400 stroke-[35px]"
											/>
										);
									} else if (element) {
										return (
											<ChoosePlayer
												player={element}
												oStyle="fill-o"
												xStyle="fill-x"
											/>
										);
									} else {
										return (
											<ChoosePlayer
												player={turn}
												oStyle="o"
												xStyle="x"
											/>
										);
									}
								})()}
							</div>
						</div>
					))}
				</div>
				<div className="flex w-full justify-between gap-5 uppercase">
					<div className="flex w-full flex-col rounded-lg bg-x p-1 text-center text-sm">
						<p>X (You)</p>
						<p className="font-bold">{gameState.score.X}</p>
					</div>
					<div className="flex w-full flex-col rounded-lg bg-arsenic-100 p-1 text-center text-sm">
						<p>Ties</p>
						<p className="font-bold">{gameState.score.tie}</p>
					</div>
					<div className="flex w-full flex-col rounded-lg bg-o p-1 text-center text-sm">
						<p>O (CPU)</p>
						<p className="font-bold">{gameState.score.O}</p>
					</div>
				</div>
			</div>
			<MatchComplete />
		</div>
	);
}
