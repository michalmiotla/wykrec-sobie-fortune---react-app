import { useContext } from 'react'
import { DisabledButtonsStateContext } from '../../context/DisabledButtonsStateContext'

export function BuyVowelButton() {
	const [disabledButtonsState, setDisabledButtonsState] = useContext(DisabledButtonsStateContext)

	function buyVowel() {
		setDisabledButtonsState({
			...disabledButtonsState,
			spinButton: true,
			buyVowelButton: true,
			guessAnswerButton: true,
			vowelsArea: false,
		})
	}

	return (
		<button
			disabled={disabledButtonsState.buyVowelButton}
			onClick={buyVowel}
			className={`w-1/2 bg-light-beige  rounded-full border-[3px]  ${
				disabledButtonsState.buyVowelButton ? 'border-red-400' : 'border-green-400'
			} drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer disabled:cursor-default disabled:hover:bg-light-beige hover:bg-white transition-colors duration-500 `}>
			KUP SAMOGŁOSKĘ
		</button>
	)
}
