import { BuyVowelButton } from './BuyVowelButton'
import { GuessAnswerButton } from './GuessAnswerButton'
import { SpinButton } from './SpinButton'

export function Buttons({ setIsSpinDisabled, setShowGuessAnswerInput, setDisabledButtonsState, disabledButtonsState }) {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center lg:justify-end gap-2'>
			<SpinButton
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				setIsSpinDisabled={setIsSpinDisabled}
			/>
			<BuyVowelButton setDisabledButtonsState={setDisabledButtonsState} disabledButtonsState={disabledButtonsState} />

			<GuessAnswerButton
				setDisabledButtonsState={setDisabledButtonsState}
				disabledButtonsState={disabledButtonsState}
				setShowGuessAnswerInput={setShowGuessAnswerInput}
			/>
		</div>
	)
}
