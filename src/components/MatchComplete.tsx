import { GameState } from "@interface/TicTacToe";
import { useSelector } from "react-redux";
import { Tie } from "@components/Tie";
import { NotTie } from "@components/NotTie";

export function MatchComplete() {
	const gameState: GameState = useSelector((state: any) => state.GameReducer);

	return (
		(gameState.tie || gameState.winner) && (
			<section className="fixed flex h-d-screen w-d-screen items-center justify-center bg-black bg-opacity-40 transition-all [&:has(.scale-down)]:bg-opacity-20">
				<div className="relative">
					<div
						className="absolute right-2 top-2 z-10 flex aspect-square w-4 cursor-pointer items-center justify-center rounded-full bg-arsenic-100 after:absolute after:left-1/2 after:top-1/2 after:aspect-square after:w-[55%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-arsenic-950 after:transition-transform after:duration-100"
						onClick={(event) => {
							(event.target as HTMLDivElement).classList.toggle(
								"scale-down",
							);
						}}
					></div>

					<div className="rounded-xl bg-arsenic-800 px-8 py-5 text-arsenic-100 transition-all xs:px-8 xs:py-5 sm:w-auto sm:px-20 sm:py-8 md:px-28 md:py-10">
						{gameState.tie && <Tie />}
						{gameState.winner && <NotTie />}
					</div>
				</div>
			</section>
		)
	);
}
