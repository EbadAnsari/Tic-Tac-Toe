import { Coordinate, GameState, Player, Winner } from "@interface/TicTacToe";

// : utils

export const Coordinates: Winner["coordinates"][] = [
	// ! row
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	// ! column
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	// ! diagonal
	[0, 4, 8],
	[2, 4, 6],
];

export function checkWinner(mark: GameState["markOnBoard"]): Winner | null {
	// ! row
	// : 1 1 1
	// : 0 0 0
	// : 0 0 0
	// ! break
	// : 0 0 0
	// : 1 1 1
	// : 0 0 0
	// ! break
	// : 0 0 0
	// : 0 0 0
	// : 1 1 1
	// ! break
	// ! column
	// : 1 0 0
	// : 1 0 0
	// : 1 0 0
	// ! break
	// : 0 1 0
	// : 0 1 0
	// : 0 1 0
	// ! break
	// : 0 0 1
	// : 0 0 1
	// : 0 0 1
	// ! break
	// ! diagonal
	// : 1 0 0
	// : 0 1 0
	// : 0 0 1
	// ! break
	// : 0 0 1
	// : 0 1 0
	// : 1 0 0

	let row = 0;
	let column = 0;

	{
		const first45Diagonal = mark[0];
		const second45Diagonal = mark[4];
		const third45Diagonal = mark[8];

		const first135Diagonal = mark[2];
		const second135Diagonal = mark[4];
		const third135Diagonal = mark[6];

		if (
			first45Diagonal === "O" &&
			second45Diagonal === "O" &&
			third45Diagonal === "O"
		) {
			return { coordinates: [0, 4, 8], player: "O" };
		} else if (
			first45Diagonal === "X" &&
			second45Diagonal === "X" &&
			third45Diagonal === "X"
		) {
			return { coordinates: [0, 4, 8], player: "X" };
		} else if (
			first135Diagonal === "O" &&
			second135Diagonal === "O" &&
			third135Diagonal === "O"
		) {
			return { coordinates: [2, 4, 6], player: "O" };
		} else if (
			first135Diagonal === "X" &&
			second135Diagonal === "X" &&
			third135Diagonal === "X"
		) {
			return { coordinates: [2, 4, 6], player: "X" };
		}
	}

	while (column < 3) {
		const firstRow = mark[row];
		const secondRow = mark[row + 1];
		const thirdRow = mark[row + 2];

		const firstColumn = mark[column];
		const secondColumn = mark[column + 3];
		const thirdColumn = mark[column + 6];

		if (firstRow === "O" && secondRow === "O" && thirdRow === "O") {
			return {
				coordinates: [row, row + 1, row + 2],
				player: "O",
			};
		} else if (firstRow === "X" && secondRow === "X" && thirdRow === "X") {
			return { coordinates: [row, row + 1, row + 2], player: "X" };
		} else if (
			firstColumn === "O" &&
			secondColumn === "O" &&
			thirdColumn === "O"
		) {
			return {
				coordinates: [column, column + 3, column + 6],
				player: "O",
			};
		} else if (
			firstColumn === "X" &&
			secondColumn === "X" &&
			thirdColumn === "X"
		) {
			return {
				coordinates: [column, column + 3, column + 6],
				player: "X",
			};
		}

		row += 3;
		column++;
	}

	return null;
}

export class Random<T> {
	private set: T[];
	constructor(array: T[]) {
		this.set = array;
	}

	random() {
		debugger;
		return this.set.splice(
			Math.floor(Math.random() * (this.set.length - 1)),
			1
		)[0];
	}
}

export function checkMove(
	markOnBoard: GameState["markOnBoard"],
	cordinates: Coordinate,
	cpu: Player
) {
	let chance = 0;
	const coordinate: number[] = [];

	const first = cordinates[0];
	const second = cordinates[1];
	const third = cordinates[2];

	if (markOnBoard[first] === 0 || markOnBoard[first] === cpu) {
		chance++;
		if (markOnBoard[first] === 0) {
			coordinate.push(first);
		}
	}

	if (markOnBoard[second] === 0 || markOnBoard[second] === cpu) {
		chance++;
		if (markOnBoard[second] === 0) coordinate.push(second);
	}

	if (markOnBoard[third] === 0 || markOnBoard[third] === cpu) {
		chance++;
		if (markOnBoard[third] === 0) coordinate.push(third);
	}

	return { chance, coordinate };
}

export function generateStrategy(
	markOnBoard: GameState["markOnBoard"],
	cpu: Player
) {
	const bestStartegy: [number[][], number[][], number[][]] = [[], [], []];

	for (const coordinate of Coordinates) {
		const chance = checkMove(markOnBoard, coordinate, cpu);
		if (chance.coordinate.length)
			bestStartegy[chance.chance - 1].push(chance.coordinate);
	}

	bestStartegy.forEach((element) => {
		element.sort((a, b) => {
			return a.length - b.length;
		});
	});

	return bestStartegy;
}
