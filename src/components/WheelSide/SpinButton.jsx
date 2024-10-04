export function SpinButton({ setDisabledButtonsState, disabledButtonsState }) {
	function spinTheWheel() {
		setDisabledButtonsState({
			...disabledButtonsState,
			spinOnWheel: false,
			spinButton: true,
			buyVowelButton: true,
			guessAnswerButton: true,
		})
	}

	return (
		<button
			disabled={disabledButtonsState.spinButton}
			onClick={spinTheWheel}
			className={`w-1/2 bg-light-beige hover:bg-light-khaki ${
				disabledButtonsState.spinButton ? 'border-red-400' : 'border-green-400'
			} rounded-full border-[3px]  drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer disabled:cursor-default disabled:hover:bg-light-beige hover:bg-white transition-all duration-500 `}>
			ZAKREĆ KOŁEM
		</button>
	)
}
