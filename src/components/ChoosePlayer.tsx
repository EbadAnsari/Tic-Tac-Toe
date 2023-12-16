import { Player } from "@interface/TicTacToe";
import { O } from "@components/O";
import { X } from "@components/X";

export function ChoosePlayer({
	player,
	oStyle,
	xStyle,
	style,
}: (
	| { style: string; oStyle?: false; xStyle?: false }
	| {
			oStyle: string;
			xStyle: string;
			style?: false;
	  }
) & {
	player: Player;
}) {
	return player === "O" ? (
		<O className={(oStyle ?? style) || ""} />
	) : (
		<X className={(xStyle ?? style) || ""} />
	);
}
