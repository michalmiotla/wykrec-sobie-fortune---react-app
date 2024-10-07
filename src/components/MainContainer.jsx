import { BoardsSide } from './BoardsSide/BoardsSide'
import { WheelSide } from './WheelSide/WheelSide'
import { answerToGuess, findAnswer } from '../utils/findAnswer'
import { useEffect, useState } from 'react'
import { TimeIsUp } from './BoardsSide/TimeIsUp'
import { setValueOfSpinnedWheel } from '../utils/setValueOfSpinnedWheel'
import { QuickInfo } from './QuickInfo'

export function MainContainer() {
	const [chosenAnswer, setChosenAnswer] = useState(answerToGuess)
	const [roundPoints, setRoundPoints] = useState(0)
	const [totalPoints, setTotalPoints] = useState(0)
	const [round, setRound] = useState(1)
	const [rotateWheel, setRotateWheel] = useState(0)
	const [chosenLetters, setChosenLetters] = useState([])
	const [isRoundRestarted, setIsRoundRestarted] = useState(false)
	const [roundTimeMinutes, setRoundTimeMinutes] = useState(3)
	const [roundTimeSeconds, setRoundTimeSeconds] = useState(0)
	const [isTimeRunning, setIsTimeRunning] = useState(true)
	const [disabledButtonsState, setDisabledButtonsState] = useState({
		spinOnWheel: false,
		spinButton: true,
		buyVowelButton: true,
		guessAnswerButton: false,
		consonantsArea: true,
		vowelsArea: true,
	})

	const [showInfo, setShowInfo] = useState(false)
	const [showGuessAnswerInput, setShowGuessAnswerInput] = useState(false)
	const [isWheelSpinning, setIsWheelSpinning] = useState(false)

	useEffect(() => {
		let timeInterval

		if (isTimeRunning) {
			timeInterval = setInterval(() => {
				if (roundTimeSeconds !== 0) {
					setRoundTimeSeconds(prevTime => prevTime - 1)
				} else if (roundTimeSeconds === 0) {
					if (roundTimeMinutes !== 0) {
						setRoundTimeSeconds(prevTime => prevTime + 59)
						setRoundTimeMinutes(prevTime => prevTime - 1)
					} else {
						setIsTimeRunning(false)
					}
				}

				if (isRoundRestarted) {
					setIsTimeRunning(true)
					setRoundTimeMinutes(3)
					setRoundTimeSeconds(0)
				}
			}, 1000)
		}

		return () => clearInterval(timeInterval)
	}, [isRoundRestarted, isTimeRunning, roundTimeMinutes, roundTimeSeconds])

	let initialDeg = 0
	let valueOfSpinnedWheel = setValueOfSpinnedWheel(initialDeg, rotateWheel)

	function resetRound() {
		setIsRoundRestarted(true)
		setRound(prevRound => (prevRound < 3 ? prevRound + 1 : prevRound))
		setTotalPoints(prevPoints => prevPoints + roundPoints)
		setRoundPoints(0)
		setChosenAnswer(findAnswer())
		setChosenLetters([])
		setDisabledButtonsState({
			spinOnWheel: false,
			spinButton: true,
			buyVowelButton: true,
			guessAnswerButton: false,
			consonantsArea: true,
			vowelsArea: true,
		})
		setIsTimeRunning(true)
		setIsWheelSpinning(false)
	}

	function handleConsonants(letter) {
		setChosenLetters(prev => [...prev, letter])

		function checkIsConsonantInAnswer(letter) {
			const answerSplitted = [...chosenAnswer.answer]
			const answer = chosenAnswer.answer

			answerSplitted.forEach(el => {
				if (el === letter) {
					setRoundPoints(prevPoints => prevPoints + valueOfSpinnedWheel)
				}
			})

			!answer.includes(letter) && setShowInfo(true)
		}

		checkIsConsonantInAnswer(letter)
		setDisabledButtonsState({
			...disabledButtonsState,
			consonantsArea: true,
			guessAnswerButton: false,
		})
	}

	function handleVowels(letter) {
		function chooseVowelsToReveal(letter) {
			setRoundPoints(prevpoints => prevpoints - 400)
			setChosenLetters(prev => [...prev, letter])

			setDisabledButtonsState({
				...disabledButtonsState,
				guessAnswerButton: false,
				vowelsArea: true,
			})
		}

		function checkIsVowelsInAnswer(letter) {
			const answer = chosenAnswer.answer
			answer.includes(letter) || setShowInfo(true)
		}

		chooseVowelsToReveal(letter)
		checkIsVowelsInAnswer(letter)
	}

	useEffect(() => {
		const answer = [...chosenAnswer.answer]
		const consonantsInAnswer = answer.filter(
			a =>
				a !== 'A' &&
				a !== 'Ą' &&
				a !== 'E' &&
				a !== 'Ę' &&
				a !== 'I' &&
				a !== 'O' &&
				a !== 'Ó' &&
				a !== 'U' &&
				a !== 'Y' &&
				a !== ' '
		)

		const remainingConsonants = []
		consonantsInAnswer.forEach(c => chosenLetters.includes(c) && remainingConsonants.push(c))

		const vowelsInAnswer = answer.filter(
			a =>
				a === 'A' ||
				a === 'Ą' ||
				a === 'E' ||
				a === 'Ę' ||
				a === 'I' ||
				a === 'O' ||
				a === 'Ó' ||
				a === 'U' ||
				a === 'Y'
		)

		const remainingVowels = []

		vowelsInAnswer.forEach(c => chosenLetters.includes(c) && remainingVowels.push(c))

		if (remainingConsonants.length >= consonantsInAnswer.length) {
			setDisabledButtonsState({
				...disabledButtonsState,
				spinButton: true,
				buyVowelButton: roundPoints >= 400 && !(remainingVowels.length >= vowelsInAnswer.length) ? false : true,
			})
		} else if (remainingVowels.length >= vowelsInAnswer.length) {
			setDisabledButtonsState({
				...disabledButtonsState,
				spinButton: remainingConsonants.length >= consonantsInAnswer.length ? true : false,
				buyVowelButton: true,
			})
		} else if (chosenLetters.length === 0) {
			setDisabledButtonsState({
				...disabledButtonsState,
				spinButton: true,
				buyVowelButton: roundPoints >= 400 ? false : true,
			})
		} else {
			setDisabledButtonsState({
				...disabledButtonsState,
				spinButton: false,
				buyVowelButton: roundPoints >= 400 ? false : true,
			})
		}
	}, [chosenLetters, roundPoints])

	return (
		<div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-20'>
			<BoardsSide
				roundPoints={roundPoints}
				chosenAnswer={chosenAnswer}
				round={round}
				totalPoints={totalPoints}
				disabledButtonsState={disabledButtonsState}
				chosenLetters={chosenLetters}
				roundTimeMinutes={roundTimeMinutes}
				roundTimeSeconds={roundTimeSeconds}
				handleConsonants={handleConsonants}
				handleVowels={handleVowels}
			/>
			<WheelSide
				initialDeg={initialDeg}
				valueOfSpinnedWheel={valueOfSpinnedWheel}
				setRotateWheel={setRotateWheel}
				rotateWheel={rotateWheel}
				setRoundPoints={setRoundPoints}
				chosenAnswer={chosenAnswer}
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				resetRound={resetRound}
				setIsRoundRestarted={setIsRoundRestarted}
				roundTimeMinutes={roundTimeMinutes}
				setShowGuessAnswerInput={setShowGuessAnswerInput}
				showGuessAnswerInput={showGuessAnswerInput}
				setIsTimeRunning={setIsTimeRunning}
				isTimeRunning={isTimeRunning}
				setIsWheelSpinning={setIsWheelSpinning}
				isWheelSpinning={isWheelSpinning}
			/>
			{!isTimeRunning && roundTimeSeconds === 0 && (
				<TimeIsUp
					setIsTimeRunning={setIsTimeRunning}
					setRoundTimeMinutes={setRoundTimeMinutes}
					resetRound={resetRound}
				/>
			)}
			{showInfo && <QuickInfo chosenLetters={chosenLetters} setShowInfo={setShowInfo} />}
		</div>
	)
}
