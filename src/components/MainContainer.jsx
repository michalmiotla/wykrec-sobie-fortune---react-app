import { BoardsSide } from './BoardsSide/BoardsSide'
import { WheelSide } from './WheelSide/WheelSide'
import { chosenAnswer } from '../utils/findAnswer'
import { useState } from 'react'

export function MainContainer() {
	const [roundPoints, setRoundPoints] = useState(0)
	const [totalPoints, setTotalPoints] = useState(0)
	const [round, setRound] = useState(1)
	const [rotateWheel, setRotateWheel] = useState(0)
	const [disabledButtonsState, setDisabledButtonsState] = useState({
		spinOnWheel: false,
		spinButton: true,
		buyVowelButton: true,
		guessAnswerButton: true,
		consonantsArea: true,
		vowelsArea: true,
	})

	console.log(chosenAnswer)

	let initialDeg = 0

	function setValue() {
		switch (true) {
			case (initialDeg + rotateWheel) % 360 > 0 && (initialDeg + rotateWheel) % 360 <= 22.5:
				return 500
			case (initialDeg + rotateWheel) % 360 > 22.5 && (initialDeg + rotateWheel) % 360 <= 45:
				return 200
			case (initialDeg + rotateWheel) % 360 > 45 && (initialDeg + rotateWheel) % 360 <= 67.5:
				return 700
			case (initialDeg + rotateWheel) % 360 > 67.5 && (initialDeg + rotateWheel) % 360 <= 90:
				return 100
			case (initialDeg + rotateWheel) % 360 > 90 && (initialDeg + rotateWheel) % 360 <= 112.5:
				return 400
			case (initialDeg + rotateWheel) % 360 > 112.5 && (initialDeg + rotateWheel) % 360 <= 135:
				return 150
			case (initialDeg + rotateWheel) % 360 > 135 && (initialDeg + rotateWheel) % 360 <= 157.5:
				return 800
			case (initialDeg + rotateWheel) % 360 > 157.5 && (initialDeg + rotateWheel) % 360 <= 180:
				return 250
			case (initialDeg + rotateWheel) % 360 > 180 && (initialDeg + rotateWheel) % 360 <= 202.5:
				return 350
			case (initialDeg + rotateWheel) % 360 > 202.5 && (initialDeg + rotateWheel) % 360 <= 225:
				return 200
			case (initialDeg + rotateWheel) % 360 > 225 && (initialDeg + rotateWheel) % 360 <= 247.5:
				return 600
			case (initialDeg + rotateWheel) % 360 > 247.5 && (initialDeg + rotateWheel) % 360 <= 270:
				return 100
			case (initialDeg + rotateWheel) % 360 > 270 && (initialDeg + rotateWheel) % 360 <= 292.5:
				return 300
			case (initialDeg + rotateWheel) % 360 > 292.5 && (initialDeg + rotateWheel) % 360 <= 315:
				return 150
			case (initialDeg + rotateWheel) % 360 > 315 && (initialDeg + rotateWheel) % 360 <= 337.5:
				return 1000
			case (initialDeg + rotateWheel) % 360 > 337.5 && (initialDeg + rotateWheel) % 360 <= 360:
				return 0
		}
	}

	let valueOfSpinnedWheel = setValue()

	return (
		<div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
			<BoardsSide
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRoundPoints={setRoundPoints}
				roundPoints={roundPoints}
				chosenAnswer={chosenAnswer}
				setRound={setRound}
				round={round}
				totalPoints={totalPoints}
				disabledButtonsState={disabledButtonsState}
				setDisabledButtonsState={setDisabledButtonsState}
				setTotalPoints={setTotalPoints}
			/>
			<WheelSide
				initialDeg={initialDeg}
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRotateWheel={setRotateWheel}
				rotateWheel={rotateWheel}
				setRoundPoints={setRoundPoints}
				chosenAnswer={chosenAnswer}
				setRound={setRound}
				setTotalPoints={setTotalPoints}
				roundPoints={roundPoints}
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
			/>
		</div>
	)
}
