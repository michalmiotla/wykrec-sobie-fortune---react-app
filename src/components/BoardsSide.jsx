import { Results } from './Results'
import { AnswerBoard } from './AnswerBoard'
import { LettersBoard } from './LettersBoard'

export function BoardsSide() {
	return (
		<div className='flex flex-col items-center lg:col-start-2 lg:col-end-3 gap-4 mb-8 lg:mb-0'>
			<Results />
			<AnswerBoard />
			<LettersBoard />
		</div>
	)
}
