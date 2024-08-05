import { answersArray } from './answersArray'

export function findAnswer() {
	const index = Math.floor(Math.random() * answersArray.length)
	const answer = answersArray[index].answer
	const category = answersArray[index].category
	const fullAnswer = answersArray[index].answer.split(' ')
	const splittedAnswer = fullAnswer.map(word => word.split(''))
	return { answer, category, fullAnswer, splittedAnswer }
}

export const chosenAnswer = findAnswer()
