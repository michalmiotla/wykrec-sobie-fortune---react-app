import { useState } from 'react'
import { NextRound } from '../NextRound'

export function GuessAnswerInput({
	setShowGuessAnswerInput,
	chosenAnswer,
	setRoundPoints,
	setRound,
	setTotalPoints,
	roundPoints,
}) {
	const [playerGuess, setPlayerGuess] = useState('')
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)

	function checkPlayerGuess() {
		if (playerGuess.toUpperCase() === chosenAnswer.answer) {
			setIsAnswerCorrect(true)
			setRoundPoints(prevPoints => prevPoints + 1000)
		} else {
			setIsAnswerCorrect(false)
		}
	}

	return (
		<div className='fixed lg:absolute z-20 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center bg-transparent'>
			<div className='w-full h-1/2 lg:h-1/4 flex flex-col items-center justify-around bg-white lg:bg-[rgba(255,255,255,0.85)]  border-2 lg:border-x-0 border-black drop-shadow-xl'>
				<div className='flex flex-col items-center justify-center'>
					<p className='font-bold text-base sm:text-xl xl:text-2xl'>TWOJA ODPOWIEDŹ TO:</p>
					<p className='text-center text-base sm:text-xl xl:text-2xl'>(PAMIĘTAJ O SPACJACH I POLSKICH ZNAKACH)</p>
				</div>

				<input
					className={`text-center w-[75%] sm:w-[60%] lg:w-[500px] py-2 px-4 p- rounded-full border-2 border-black  ${
						isAnswerCorrect === true && 'border-green-400'
					} 
                    ${isAnswerCorrect === false && 'border-red-400'}
                    drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 `}
					onChange={e => {
						setPlayerGuess(e.target.value)
					}}
					type='text'
				/>
				<div className='flex flex-col lg:flex-row items-center justify-center w-full gap-2'>
					{!isAnswerCorrect ? (
						<>
							<button
								className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
								onClick={() => {
									checkPlayerGuess()
								}}>
								SPRAWDŹ
							</button>
							<button
								className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
								onClick={() => setShowGuessAnswerInput(false)}>
								WRÓĆ DO GRY
							</button>
						</>
					) : (
						<NextRound
							setShowGuessAnswerInput={setShowGuessAnswerInput}
							setRound={setRound}
							setTotalPoints={setTotalPoints}
							roundPoints={roundPoints}
							setRoundPoints={setRoundPoints}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
