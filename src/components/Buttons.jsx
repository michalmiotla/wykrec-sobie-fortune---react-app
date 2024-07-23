import { BuyLetter } from './BuyLetter'
import { GuessAnswer } from './GuessAnswer'
import { Spin } from './Spin'

export function Buttons() {
	return (
		<div className='flex flex-col w-full h-full items-center justify-end gap-2'>
			<Spin />
			<BuyLetter />
			<GuessAnswer />
		</div>
	)
}
