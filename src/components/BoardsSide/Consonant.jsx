import { useState } from 'react'

export function Consonant({
	letter,
	setChosenLetters,
	chosenAnswer,
	setRoundPoints,
	valueOfSpinnedWheel,
	disabledButtonsState,
	setDisabledButtonsState,
	roundPoints,
}) {
	const [isConsonantButtonDisabled, setIsConsonantButtonDisabled] = useState(false)

	function chooseConsonantsToReveal() {
		setChosenLetters(prev => [...prev, letter])
		setIsConsonantButtonDisabled(true)
	}

	function checkIsConsonantInAnswer() {
		const answer = [...chosenAnswer.answer]
		answer.forEach(l => {
			if (l === letter) {
				setRoundPoints(prevPoints => prevPoints + valueOfSpinnedWheel)
			}
		})
	}

	function handleConsonantButton() {
		if (roundPoints >= 400) {
			setDisabledButtonsState({
				...disabledButtonsState,
				consonantsArea: true,
				spinButton: false,
				buyVowelButton: false,
				guessAnswerButton: false,
			})
		} else {
			setDisabledButtonsState({
				...disabledButtonsState,
				consonantsArea: true,
				spinButton: false,
				buyVowelButton: true,
				guessAnswerButton: false,
			})
		}
	}

	return (
		<button
			disabled={isConsonantButtonDisabled}
			onClick={() => {
				checkIsConsonantInAnswer(), chooseConsonantsToReveal(), handleConsonantButton()
			}}
			className='bg-white border-2 font-bold text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-black aspect-[5/7] w-5 sm:w-7 md:w-9 lg:w-7 xl:w-9 m-[2px] hover:bg-light-beige transition-colors duration-300 disabled:bg-light-red'>
			{letter}
		</button>
	)
}
