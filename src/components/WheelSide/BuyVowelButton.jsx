export function BuyVowelButton({ setDisabledButtonsState, disabledButtonsState }) {
	function buyVowel() {
		setDisabledButtonsState({
			...disabledButtonsState,
			spinButton: true,
			buyVowelButton: true,
			guessAnswerButton: true,
			vowelsArea: false,
		})
	}

	return (
		<button
			disabled={disabledButtonsState.buyVowelButton}
			onClick={buyVowel}
			className='w-1/2 bg-light-beige  rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer hover:bg-light-khaki disabled:cursor-default disabled:hover:bg-light-beige transition-colors duration-300 '>
			KUP SAMOGŁOSKĘ
		</button>
	)
}
