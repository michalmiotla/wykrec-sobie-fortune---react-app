import { BoardsSide } from './BoardsSide/BoardsSide'
import { WheelSide } from './WheelSide/WheelSide'
import { findAnswer } from '../utils/findAnswer'
import { useEffect, useState } from 'react'
import { TimeIsUp } from './PopUps/TimeIsUp'
import { setValueOfSpinnedWheel } from '../utils/setValueOfSpinnedWheel'
import { QuickInfo } from './PopUps/QuickInfo'
import { EndOfGamePanel } from './EndOfGamePanel'
import { GuessAnswerInput } from './PopUps/GuessAnswerInput'
import { RoundStateContext } from '../context/RoundStateContext'
import { DisabledButtonsStateContext } from '../context/DisabledButtonsStateContext'
import { ChosenLettersStateContext } from '../context/ChosenLettersStateContext'

let answerToGuess = findAnswer()

export function MainContainer({ setShowResultsPanel, setIsGameStarted, showResultsPanel }) {
	const [chosenAnswer, setChosenAnswer] = useState(answerToGuess)
	const [round, setRound] = useState(1)
	const [rotateWheel, setRotateWheel] = useState(0)
	const [chosenLetters, setChosenLetters] = useState([])
	const [isRoundRestarted, setIsRoundRestarted] = useState(false)
	const [isTimeRunning, setIsTimeRunning] = useState(true)
	const [showInfo, setShowInfo] = useState(false)
	const [showGuessAnswerInput, setShowGuessAnswerInput] = useState(false)
	const [isWheelSpinning, setIsWheelSpinning] = useState(false)
	const [showEndGamePanel, setShowEndGamePanel] = useState(false)
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
	const [gamePoints, setGamePoints] = useState({
		roundPoints: 0,
		totalPoints: 0,
	})
	const [disabledButtonsState, setDisabledButtonsState] = useState({
		spinOnWheel: false,
		spinButton: true,
		buyVowelButton: true,
		guessAnswerButton: false,
		consonantsArea: true,
		vowelsArea: true,
	})
	const [roundTime, setRoundTime] = useState({
		minutes: 3,
		seconds: 0,
	})

	let initialDeg = 0
	let valueOfSpinnedWheel = setValueOfSpinnedWheel(initialDeg, rotateWheel)

	useEffect(() => {
		let timeInterval

		if (isTimeRunning) {
			timeInterval = setInterval(() => {
				if (roundTime.seconds !== 0) {
					setRoundTime({ ...roundTime, seconds: roundTime.seconds - 1 })
				} else if (roundTime.seconds === 0) {
					if (roundTime.minutes !== 0) {
						setRoundTime({ minutes: roundTime.minutes - 1, seconds: roundTime.seconds + 59 })
					} else {
						setIsTimeRunning(false)
					}
				}
			}, 10)
		}

		return () => clearInterval(timeInterval)
	}, [isTimeRunning, roundTime])

	useEffect(() => {
		if (isRoundRestarted) {
			setIsTimeRunning(true)
		}
	}, [isRoundRestarted])

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
				buyVowelButton:
					gamePoints.roundPoints >= 400 && !(remainingVowels.length >= vowelsInAnswer.length) ? false : true,
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
				buyVowelButton: gamePoints.roundPoints >= 400 ? false : true,
			})
		} else {
			setDisabledButtonsState({
				...disabledButtonsState,
				spinButton: false,
				buyVowelButton: gamePoints.roundPoints >= 400 ? false : true,
			})
		}
	}, [chosenLetters, gamePoints.roundPoints])

	function basicReset() {
		setGamePoints({ ...gamePoints, roundPoints: 0 })
		setRoundTime({
			minutes: 3,
			seconds: 0,
		})

		answerToGuess = findAnswer()
		setChosenAnswer(answerToGuess)
		setChosenLetters([])
		setDisabledButtonsState({
			spinOnWheel: false,
			spinButton: true,
			buyVowelButton: true,
			guessAnswerButton: false,
			consonantsArea: true,
			vowelsArea: true,
		})
		setIsWheelSpinning(false)
		setShowGuessAnswerInput(false)
		setIsTimeRunning(true)
		setShowInfo(false)
	}

	function resetRound() {
		basicReset()
		setIsRoundRestarted(true)
		setRound(prevRound => (prevRound < 3 ? prevRound + 1 : prevRound))
		if (!(!isTimeRunning && roundTime.minutes === 0 && roundTime.seconds === 0)) {
			setGamePoints({ roundPoints: 0, totalPoints: gamePoints.totalPoints + gamePoints.roundPoints })
		}
		setIsAnswerCorrect(null)
	}

	function resetGame() {
		basicReset()
		setIsGameStarted(false)
		setGamePoints({
			roundPoints: 0,
			totalPoints: 0,
		})
		setRound(1)
		setRotateWheel(0)
		setIsRoundRestarted(false)
		setShowEndGamePanel(false)
	}

	function finishGame() {
		setGamePoints({ ...gamePoints, totalPoints: gamePoints.totalPoints + gamePoints.roundPoints })
		setShowGuessAnswerInput(false)
	}

	function handleConsonants(letter) {
		setChosenLetters(prev => [...prev, letter])

		function checkIsConsonantInAnswer(letter) {
			const answerSplitted = [...chosenAnswer.answer]
			const answer = chosenAnswer.answer

			answerSplitted.forEach(el => {
				if (el === letter) {
					setGamePoints(prevGamePoints => ({
						...gamePoints,
						roundPoints: prevGamePoints.roundPoints + valueOfSpinnedWheel,
					}))
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
			setGamePoints({ ...gamePoints, roundPoints: gamePoints.roundPoints - 400 })
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

	return (
		<RoundStateContext.Provider value={round}>
			{!showEndGamePanel ? (
				<div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:gap-8 xl:gap-16 2xl:gap-24 lg:grid-rows-1 my-8 lg:my-20 3xl:my-32'>
					<ChosenLettersStateContext.Provider value={chosenLetters}>
						<BoardsSide
							chosenAnswer={chosenAnswer}
							gamePoints={gamePoints}
							disabledButtonsState={disabledButtonsState}
							roundTime={roundTime}
							handleConsonants={handleConsonants}
							handleVowels={handleVowels}
						/>
					</ChosenLettersStateContext.Provider>
					<DisabledButtonsStateContext.Provider value={[disabledButtonsState, setDisabledButtonsState]}>
						<WheelSide
							initialDeg={initialDeg}
							valueOfSpinnedWheel={valueOfSpinnedWheel}
							setRotateWheel={setRotateWheel}
							rotateWheel={rotateWheel}
							setGamePoints={setGamePoints}
							gamePoints={gamePoints}
							setIsRoundRestarted={setIsRoundRestarted}
							setShowGuessAnswerInput={setShowGuessAnswerInput}
							setIsWheelSpinning={setIsWheelSpinning}
							isWheelSpinning={isWheelSpinning}
						/>
					</DisabledButtonsStateContext.Provider>

					{showInfo && isTimeRunning && <QuickInfo chosenLetters={chosenLetters} setShowInfo={setShowInfo} />}

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
							setShowEndGamePanel={setShowEndGamePanel}
							finishGame={finishGame}
						/>
					)}
					{!isTimeRunning && roundTime.minutes === 0 && roundTime.seconds === 0 && (
						<TimeIsUp
							resetRound={resetRound}
							setShowEndGamePanel={setShowEndGamePanel}
							finishGame={finishGame}
							chosenAnswer={chosenAnswer}
						/>
					)}
				</div>
			) : (
				<EndOfGamePanel
					gamePoints={gamePoints}
					setShowResultsPanel={setShowResultsPanel}
					resetGame={resetGame}
					showResultsPanel={showResultsPanel}
				/>
			)}
		</RoundStateContext.Provider>
	)
}
