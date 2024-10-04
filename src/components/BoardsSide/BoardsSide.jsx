import { Results } from './Results'
import { AnswerBoard } from './AnswerBoard'
import { LettersBoard } from './LettersBoard'

export function BoardsSide({
	chosenAnswer,
	roundPoints,
	round,
	totalPoints,
	disabledButtonsState,
	chosenLetters,
	roundTimeSeconds,
	roundTimeMinutes,
	handleConsonants,
	handleVowels,
}) {
	return (
		<div className='flex flex-col items-center lg:col-start-2 lg:col-end-3 gap-4 mb-8 lg:mb-0'>
			<Results roundPoints={roundPoints} totalPoints={totalPoints} />
			<AnswerBoard round={round} chosenLetters={chosenLetters} chosenAnswer={chosenAnswer} />
			<LettersBoard
				chosenLetters={chosenLetters}
				disabledButtonsState={disabledButtonsState}
				roundTimeSeconds={roundTimeSeconds}
				roundTimeMinutes={roundTimeMinutes}
				handleConsonants={handleConsonants}
				handleVowels={handleVowels}
			/>
		</div>
	)
}
