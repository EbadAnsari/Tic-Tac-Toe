interface IconProps {
	className: string;
}

export function O({ className }: Readonly<IconProps>) {
	return (
		<svg xlinkTitle="O" x="0px" y="0px" viewBox="0 0 1000 1000">
			<path
				className={className}
				d="M500,937.3c-58.9,0-116.2-11.5-170.3-34.4c-52.1-22-98.8-53.5-139-93.7c-40.1-40.1-71.6-86.8-93.7-139
				C74.2,616.2,62.7,558.9,62.7,500s11.5-116.2,34.4-170.3c22-52.1,53.5-98.8,93.7-139s86.8-71.6,139-93.7
				C383.8,74.2,441.1,62.7,500,62.7s116.2,11.5,170.3,34.4c52.1,22,98.8,53.5,139,93.7c40.1,40.1,71.6,86.8,93.7,139
				c22.8,54,34.4,111.2,34.4,170.3c0,58.9-11.5,116.2-34.4,170.3c-22,52.1-53.5,98.8-93.7,139c-40.1,40.1-86.8,71.6-139,93.7
				C616.2,925.8,558.9,937.3,500,937.3z M500,290.1c-115.7,0-209.9,94.2-209.9,209.9S384.3,709.9,500,709.9S709.9,615.7,709.9,500
	S615.7,290.1,500,290.1z"
			/>
		</svg>
	);
}
