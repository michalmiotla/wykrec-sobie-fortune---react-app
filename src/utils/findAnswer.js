import { answersArray } from './answersArray'

export function findAnswer() {
	const indexOfCategory = Math.floor(Math.random() * answersArray.length)
	const category = answersArray[indexOfCategory].category
	const indexOfAnswer = Math.floor(Math.random() * answersArray[indexOfCategory].answers.length)
	const answer = answersArray[indexOfCategory].answers[indexOfAnswer]
	const fullAnswer = answersArray[indexOfCategory].answers[indexOfAnswer].split(' ')
	const splittedAnswer = fullAnswer.map(word => word.split(''))
	answersArray.splice(indexOfCategory, 1)
	const answerObject = { category, answer, fullAnswer, splittedAnswer }
	console.log(answerObject)
	return answerObject
}

export const answerToGuess = findAnswer()
