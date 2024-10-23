import { ButtonsBoard } from './ButtonsBoard'
import { Wheel } from './Wheel'

export function WheelSide({
	setGamePoints,
	gamePoints,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setDisabledButtonsState,
	disabledButtonsState,
	setIsRoundRestarted,
	setShowGuessAnswerInput,
	setIsWheelSpinning,
	isWheelSpinning,
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
			<ButtonsBoard
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				setShowGuessAnswerInput={setShowGuessAnswerInput}
			/>
		</div>
	)
}
