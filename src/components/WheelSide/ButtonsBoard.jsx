import { BuyVowelButton } from './BuyVowelButton'
import { GuessAnswerButton } from './GuessAnswerButton'
import { SpinButton } from './SpinButton'

export function ButtonsBoard({ setShowGuessAnswerInput }) {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center lg:justify-end gap-2'>
			<SpinButton />
			<BuyVowelButton />
			<GuessAnswerButton setShowGuessAnswerInput={setShowGuessAnswerInput} />
		</div>
	)
}
