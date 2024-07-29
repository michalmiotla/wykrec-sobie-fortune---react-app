export function SpinButton({ setIsSpinDisabled }) {
	function spinTheWheel() {
		setIsSpinDisabled(false)
	}

	return (
		<button
			onClick={spinTheWheel}
			className='w-1/2 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '>
			ZAKREĆ KOŁEM
		</button>
	)
}