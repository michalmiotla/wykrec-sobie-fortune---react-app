import { Results } from './Results'
import { AnswerBoard } from './AnswerBoard'
import { LettersBoard } from './LettersBoard'
import { useState } from 'react'
import { answersArray } from '../../utils/answersArray'

function findAnswer() {
	const index = Math.floor(Math.random() * answersArray.length)
	const answer = answersArray[index].answer
	const category = answersArray[index].category
	const fullAnswer = answersArray[index].answer.split(' ')
	const splittedAnswer = fullAnswer.map(word => word.split(''))
	return { answer, category, fullAnswer, splittedAnswer }
}

const chosenAnswer = findAnswer()

export function BoardsSide() {
	const [chosenLetters, setChosenLetters] = useState([])

	console.log(chosenLetters)

	return (
		<div className='flex flex-col items-center lg:col-start-2 lg:col-end-3 gap-4 mb-8 lg:mb-0'>
			<Results />
			<AnswerBoard chosenLetters={chosenLetters} chosenAnswer={chosenAnswer} />
			<LettersBoard setChosenLetters={setChosenLetters} chosenAnswer={chosenAnswer} />
		</div>
	)
}
