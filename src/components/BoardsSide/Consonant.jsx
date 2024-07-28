import { useState } from 'react'

export function Consonant({ letter, setChosenLetters, chosenAnswer }) {
	const [isConsonantDisabled, setIsConsonantDisabled] = useState(false)

	function chooseConsonantsToReveal() {
		setChosenLetters(prev => [...prev, letter])
		setIsConsonantDisabled(true)
	}

	function checkIsConsonantInAnswer() {
		const answer = chosenAnswer.answer
		if (answer.includes(letter)) {
			console.log('ok')
		} else {
			alert('nie ma literki w haśle')
		}
	}

	return (
		<button
			disabled={isConsonantDisabled}
			onClick={() => {
				checkIsConsonantInAnswer(), chooseConsonantsToReveal()
			}}
			className='bg-white border-2 font-bold text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-black aspect-[5/7] w-5 sm:w-7 md:w-9 lg:w-7 xl:w-9 m-[2px] hover:bg-light-beige transition-colors duration-300 disabled:bg-light-red'>
			{letter}
		</button>
	)
}
