import { BuyLetter } from './BuyLetter'
import { GuessAnswer } from './GuessAnswer'
import { Spin } from './Spin'

export function Buttons({ setIsSpinDisabled }) {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center lg:justify-end gap-2'>
			<Spin setIsSpinDisabled={setIsSpinDisabled} />
			<BuyLetter />
			<GuessAnswer />
		</div>
	)
}
