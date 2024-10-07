import { Buttons } from './Buttons'
import { Wheel } from './Wheel'
import { GuessAnswerInput } from './GuessAnswerInput'
import { useState } from 'react'

export function WheelSide({
	chosenAnswer,
	setRoundPoints,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setDisabledButtonsState,
	disabledButtonsState,
	resetRound,
	setIsRoundRestarted,
	roundTimeMinutes,
	setShowGuessAnswerInput,
	showGuessAnswerInput,
	setIsTimeRunning,
	isTimeRunning,
	setIsWheelSpinning,
	isWheelSpinning,
}) {
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)

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
				setIsRoundRestarted={setIsRoundRestarted}
				setIsWheelSpinning={setIsWheelSpinning}
				isWheelSpinning={isWheelSpinning}
			/>
			<Buttons
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				setShowGuessAnswerInput={setShowGuessAnswerInput}
			/>

			{((showGuessAnswerInput && isTimeRunning) ||
				(showGuessAnswerInput && !isTimeRunning && isAnswerCorrect === true)) && (
				<GuessAnswerInput
					setShowGuessAnswerInput={setShowGuessAnswerInput}
					chosenAnswer={chosenAnswer}
					setRoundPoints={setRoundPoints}
					resetRound={resetRound}
					roundTimeMinutes={roundTimeMinutes}
					setIsTimeRunning={setIsTimeRunning}
					setIsAnswerCorrect={setIsAnswerCorrect}
					isAnswerCorrect={isAnswerCorrect}
				/>
			)}

			{!isTimeRunning && (isAnswerCorrect === null || isAnswerCorrect === false) && setShowGuessAnswerInput(false)}
		</div>
	)
}
