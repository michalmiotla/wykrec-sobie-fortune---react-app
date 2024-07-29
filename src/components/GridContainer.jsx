import { BoardsSide } from '../components/BoardsSide/BoardsSide'
import { WheelSide } from '../components/WheelSide/WheelSide'
import { answersArray } from '../utils/answersArray'

function findAnswer() {
	const index = Math.floor(Math.random() * answersArray.length)
	const answer = answersArray[index].answer
	const category = answersArray[index].category
	const fullAnswer = answersArray[index].answer.split(' ')
	const splittedAnswer = fullAnswer.map(word => word.split(''))
	return { answer, category, fullAnswer, splittedAnswer }
}

const chosenAnswer = findAnswer()

console.log(chosenAnswer)

export function GridContainer() {
	return (
		<div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
			<BoardsSide chosenAnswer={chosenAnswer} />
			<WheelSide chosenAnswer={chosenAnswer} />
		</div>
	)
}
