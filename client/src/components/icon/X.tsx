interface IconProps {
	className: string;
}

export function X({ className }: Readonly<IconProps>) {
	return (
		<svg xlinkTitle="X" x="0px" y="0px" viewBox="0 0 1000 1000">
			<path
				className={className}
				d="M707.3,531.8l216.8,216.8c17.6,17.6,17.6,46.1,0,63.7L812.2,924.1c-17.6,17.6-46.1,17.6-63.7,0L531.8,707.3
			c-17.6-17.6-46.1-17.6-63.7,0L251.4,924.1c-17.6,17.6-46.1,17.6-63.7,0L75.9,812.2c-17.6-17.6-17.6-46.1,0-63.7l216.8-216.8
			c17.6-17.6,17.6-46.1,0-63.7L75.9,251.4c-17.6-17.6-17.6-46.1,0-63.7L187.8,75.9c17.6-17.6,46.1-17.6,63.7,0l216.8,216.8
			c17.6,17.6,46.1,17.6,63.7,0L748.6,75.9c17.6-17.6,46.1-17.6,63.7,0l111.8,111.8c17.6,17.6,17.6,46.1,0,63.7L707.3,468.2
			C689.8,485.8,689.8,514.2,707.3,531.8z"
			/>
		</svg>
	);
}
