import { Buttons } from './Buttons'
import { Wheel } from './Wheel'

export function WheelSide() {
	return (
		<div className='flex flex-col items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 gap-4'>
			<Wheel />
			<Buttons />
		</div>
	)
}
