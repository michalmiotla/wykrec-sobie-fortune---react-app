import { Results } from './Results'
import { AnswerBoard } from './AnswerBoard'
import { LettersBoard } from './LettersBoard'
import { useState } from 'react'

export function BoardsSide({ chosenAnswer, roundPoints, setRoundPoints, valueOfSpinnedWheel, round, totalPoints }) {
	const [chosenLetters, setChosenLetters] = useState([])

	return (
		<div className='flex flex-col items-center lg:col-start-2 lg:col-end-3 gap-4 mb-8 lg:mb-0'>
			<Results roundPoints={roundPoints} totalPoints={totalPoints} />
			<AnswerBoard round={round} chosenLetters={chosenLetters} chosenAnswer={chosenAnswer} />
			<LettersBoard
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRoundPoints={setRoundPoints}
				setChosenLetters={setChosenLetters}
				chosenAnswer={chosenAnswer}
			/>
		</div>
	)
}
