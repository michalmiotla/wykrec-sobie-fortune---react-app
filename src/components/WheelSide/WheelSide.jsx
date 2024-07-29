import { useState } from 'react'
import { Buttons } from './Buttons'
import { Wheel } from './Wheel'
import { GuessAnswerInput } from './GuessAnswerInput'

export function WheelSide({ chosenAnswer }) {
	const [isSpinDisabled, setIsSpinDisabled] = useState(true)
	const [showGuessAnswerInput, setShowGuessAnswerInput] = useState(false)

	return (
		<div className='relative lg:static flex flex-col items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 gap-4'>
			<Wheel isSpinDisabled={isSpinDisabled} setIsSpinDisabled={setIsSpinDisabled} />
			<Buttons setShowGuessAnswerInput={setShowGuessAnswerInput} setIsSpinDisabled={setIsSpinDisabled} />
			{showGuessAnswerInput && (
				<GuessAnswerInput setShowGuessAnswerInput={setShowGuessAnswerInput} chosenAnswer={chosenAnswer} />
			)}
		</div>
	)
}
