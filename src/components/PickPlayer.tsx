import { choosePlayer } from "@store/slice/GameSlice";
import { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { useDispatch } from "react-redux";
import { O } from "@components/O";
import { X } from "@components/X";
import { Player } from "@interface/TicTacToe";

const gameInfo: {
	choosenPlayer: Player;
} = {
	choosenPlayer: "X",
};

export function PickPlayer() {
	const slideNavigator = useRef<HTMLDivElement>(null);
	const slide = useRef<HTMLDivElement>(null);
	const selectedPlayer = useRef<HTMLDivElement>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!slideNavigator.current) return;

		function slider() {
			if (!slide.current) return;

			if (gameInfo.choosenPlayer === "X") {
				slide.current.style.left = "50%";
				gameInfo.choosenPlayer = "O";
			} else if (gameInfo.choosenPlayer === "O") {
				slide.current.style.left = "0%";
				gameInfo.choosenPlayer = "X";
			}

			if (selectedPlayer.current)
				selectedPlayer.current.innerHTML =
					gameInfo.choosenPlayer === "O"
						? renderToString(<O className="fill-arsenic-100" />)
						: renderToString(<X className="fill-arsenic-100" />);

			dispatch(choosePlayer(gameInfo.choosenPlayer));
		}

		slideNavigator.current.addEventListener("click", slider);

		window.onkeyup = function (event) {
			if (["ArrowRight", "ArrowLeft"].includes(event.key)) slider();
		};

		return () => {
			if (!slideNavigator.current) return;
			slideNavigator.current?.removeEventListener("click", slider);
			window.onkeyup = null;
		};
	}, []);

	return (
		<div className="rounded-xl border-b-[6px] border-b-arsenic-950 bg-arsenic-400 p-3">
			<p className="py-3 text-center text-lg font-bold uppercase text-arsenic-100">
				Pick Player 1's Mark
			</p>
			<div className="rounded-xl bg-arsenic-800 p-2">
				<div className="relative flex h-14 items-center justify-around">
					<div
						className="absolute left-0 top-0 h-full w-1/2 rounded-lg bg-arsenic-400 transition-all"
						ref={slide}
					></div>
					<div className="relative w-10">
						<X className="fill-x" />
					</div>
					<div className="relative w-10">
						<O className="fill-o" />
					</div>
					<div
						className="absolute left-0 top-0 h-full w-full cursor-pointer rounded-lg focus:bg-transparent"
						ref={slideNavigator}
					></div>
				</div>
			</div>
			<p className="flex items-center justify-center gap-1 pt-3 text-center font-semibold text-arsenic-100">
				Remember:
				<span
					ref={selectedPlayer}
					className="relative inline-block w-4"
				>
					<X className="fill-arsenic-100" />
				</span>
				Goes First
			</p>
		</div>
	);
}
