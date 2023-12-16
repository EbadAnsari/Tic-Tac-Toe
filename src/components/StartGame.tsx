import { match, setMode } from "@store/slice/GameSlice";
import { useDispatch } from "react-redux";
import { O } from "@components/O";
import { X } from "@components/X";
import { PickPlayer } from "@components/PickPlayer";

export function StartGame() {
	const dispatch = useDispatch();

	return (
		<div className="relative -top-8 flex h-d-screen w-full select-none items-center justify-center">
			<div className="w-[calc(100%_-_2rem)] xs:w-[30rem]">
				<div className="flex w-full items-center justify-center gap-1 py-6">
					<div className="w-8">
						<X className="fill-x" />
					</div>
					<div className="w-8">
						<O className="fill-o" />
					</div>
				</div>
				<PickPlayer />
				<div className="mt-10  space-y-3">
					<div
						onClick={() => {
							dispatch(setMode("CPU"));
							dispatch(match());
						}}
						className="w-full rounded-lg border-b-4 border-b-o-shadow bg-o py-4 text-center text-lg font-semibold uppercase active:border-transparent"
					>
						New Game (vs CPU)
					</div>
					<div
						onClick={() => {
							dispatch(match());
						}}
						className="w-full rounded-lg border-b-4 border-b-x-shadow bg-x py-4 text-center text-lg font-semibold uppercase active:border-transparent"
					>
						New Game (vs Player)
					</div>
				</div>
			</div>
		</div>
	);
}
