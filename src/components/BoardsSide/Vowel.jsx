import { useState } from 'react'

export function Vowel({ letter, setChosenLetters, chosenAnswer, setRoundPoints }) {
	const [isVowelDisabled, setIsVowelDisabled] = useState(false)

	function chooseVowelsToReveal() {
		setChosenLetters(prev => [...prev, letter])
		setIsVowelDisabled(true)
		setRoundPoints(prevpoints => prevpoints - 400)
	}

	function checkIsVowelsInAnswer() {
		const answer = chosenAnswer.answer
		if (answer.includes(letter)) {
			console.log('ok')
		} else {
			alert('nie ma literki w haśle')
		}
	}

	return (
		<button
			onClick={() => {
				chooseVowelsToReveal(), checkIsVowelsInAnswer()
			}}
			disabled={isVowelDisabled}
			className='bg-light-khaki border-2 font-bold text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-black aspect-[5/7] w-5 sm:w-7 md:w-9 lg:w-7 xl:w-9 m-[2px] hover:bg-light-beige transition-colors duration-300'>
			{letter}
		</button>
	)
}
