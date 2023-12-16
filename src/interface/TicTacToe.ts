// : TYpes & Interfaces

export type Player = "X" | "O";

export type Coordinate = [number, number, number];

export type CPU = "CPU";

export interface IconProps {
	className: string;
}

export type Page = "start" | "match";

export type Score = {
	O: number;
	X: number;
	tie: number;
};

export interface Winner {
	coordinates: Coordinate;
	player: Player;
}

export interface GameState {
	page: Page;
	score: Score;
	tie: boolean;
	choosePlayer: Player;
	mode: CPU | null;
	markOnBoard: [
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
		0 | Player,
	];
	currentTurn: Player;
	winner: Winner | null;
}
