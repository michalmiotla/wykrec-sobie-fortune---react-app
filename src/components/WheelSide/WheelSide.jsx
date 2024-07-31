import { useState } from 'react'
import { Buttons } from './Buttons'
import { Wheel } from './Wheel'
import { GuessAnswerInput } from './GuessAnswerInput'

export function WheelSide({
	chosenAnswer,
	setRoundPoints,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setRound,
	setTotalPoints,
	roundPoints,
	setDisabledButtonsState,
	disabledButtonsState,
}) {
	const [showGuessAnswerInput, setShowGuessAnswerInput] = useState(false)

	return (
		<div className='relative lg:static flex flex-col items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 gap-4'>
			<Wheel
				initialDeg={initialDeg}
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRotateWheel={setRotateWheel}
				rotateWheel={rotateWheel}
				setRoundPoints={setRoundPoints}
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
			/>
			<Buttons
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				setShowGuessAnswerInput={setShowGuessAnswerInput}
			/>
			{showGuessAnswerInput && (
				<GuessAnswerInput
					setShowGuessAnswerInput={setShowGuessAnswerInput}
					chosenAnswer={chosenAnswer}
					setRoundPoints={setRoundPoints}
					setRound={setRound}
					setTotalPoints={setTotalPoints}
					roundPoints={roundPoints}
				/>
			)}
		</div>
	)
}
