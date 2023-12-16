import { destroyGame, resetMark } from "@store/slice/GameSlice";
import { useDispatch } from "react-redux";

export function Tie() {
	const dispatch = useDispatch();

	return (
		<>
			<div className="flex items-center justify-center gap-3 py-5 text-center">
				<div className="whitespace-nowrap text-2xl font-bold uppercase text-arsenic-100 sm:text-3xl md:text-4xl">
					It's a Tie
				</div>
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
					className="rounded-lg border-b-4 border-arsenic-950 bg-arsenic-200 px-3 py-2 font-semibold uppercase text-arsenic-950"
				>
					Next Round
				</button>
			</div>
		</>
	);
}
