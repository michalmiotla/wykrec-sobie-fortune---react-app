import { answersArray } from './answersArray'

export function findAnswer() {
	const index = Math.floor(Math.random() * answersArray.length)
	const category = answersArray[index].category
	const answer = answersArray[index].answer
	const fullAnswer = answersArray[index].answer.split(' ')
	const splittedAnswer = fullAnswer.map(word => word.split(''))
	answersArray.splice(index, 1)
	const answerObject = { category, answer, fullAnswer, splittedAnswer }
	console.log(answerObject)
	return answerObject
}

export const answerToGuess = findAnswer()
