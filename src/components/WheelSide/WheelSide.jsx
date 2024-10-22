import { Buttons } from './Buttons'
import { Wheel } from './Wheel'
import { GuessAnswerInput } from './GuessAnswerInput'

export function WheelSide({
	chosenAnswer,
	// setRoundPoints,
	setGamePoints,
	gamePoints,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setDisabledButtonsState,
	disabledButtonsState,
	resetRound,
	setIsRoundRestarted,
	roundTime,
	setShowGuessAnswerInput,
	showGuessAnswerInput,
	setIsTimeRunning,
	isTimeRunning,
	setIsWheelSpinning,
	isWheelSpinning,
	round,
	setShowEndGamePanel,
	finishGame,
	setIsAnswerCorrect,
	isAnswerCorrect,
}) {
	return (
		<div className='relative lg:static flex flex-col items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 gap-4'>
			<Wheel
				initialDeg={initialDeg}
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRotateWheel={setRotateWheel}
				rotateWheel={rotateWheel}
				setGamePoints={setGamePoints}
				gamePoints={gamePoints}
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
					setGamePoints={setGamePoints}
					gamePoints={gamePoints}
					resetRound={resetRound}
					roundTime={roundTime}
					setIsTimeRunning={setIsTimeRunning}
					setIsAnswerCorrect={setIsAnswerCorrect}
					isAnswerCorrect={isAnswerCorrect}
					round={round}
					setShowEndGamePanel={setShowEndGamePanel}
					finishGame={finishGame}
				/>
			)}
		</div>
	)
}
