export function GuessAnswerButton({ setShowGuessAnswerInput }) {
	return (
		<button
			onClick={() => setShowGuessAnswerInput(true)}
			className='w-1/2 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '>
			ODGADNIJ HASŁO
		</button>
	)
}
