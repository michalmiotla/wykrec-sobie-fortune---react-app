import { Results } from './Results'
import { AnswerBoard } from './AnswerBoard'
import { LettersBoard } from './LettersBoard'

export function BoardsSide({
	chosenAnswer,
	// roundPoints,
	round,
	// totalPoints,
	gamePoints,
	disabledButtonsState,
	chosenLetters,
	roundTime,
	handleConsonants,
	handleVowels,
}) {
	return (
		<div className='flex flex-col items-center lg:col-start-2 lg:col-end-3 gap-4 mb-8 lg:mb-0'>
			<Results gamePoints={gamePoints} />
			<AnswerBoard round={round} chosenLetters={chosenLetters} chosenAnswer={chosenAnswer} />
			<LettersBoard
				chosenLetters={chosenLetters}
				disabledButtonsState={disabledButtonsState}
				roundTime={roundTime}
				handleConsonants={handleConsonants}
				handleVowels={handleVowels}
			/>
		</div>
	)
}
