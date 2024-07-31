export function GuessAnswerButton({ setShowGuessAnswerInput, disabledButtonsState }) {
	return (
		<button
			disabled={disabledButtonsState.guessAnswerButton}
			onClick={() => setShowGuessAnswerInput(true)}
			className='w-1/2 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer disabled:cursor-default disabled:hover:bg-light-beige transition-colors duration-300 '>
			ODGADNIJ HASŁO
		</button>
	)
}
