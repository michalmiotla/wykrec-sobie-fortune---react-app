export function NextRoundButton({ resetRound }) {
	return (
		<button
			className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
			onClick={() => {
				resetRound()
			}}>
			KOLEJNA RUNDA
		</button>
	)
}
