import { useState } from 'react'
import { Buttons } from './Buttons'
import { Wheel } from './Wheel'

export function WheelSide() {
	const [isSpinDisabled, setIsSpinDisabled] = useState(true)

	return (
		<div className='flex flex-col items-center lg:col-start-1 lg:col-end-2 lg:row-start-1 gap-4'>
			<Wheel isSpinDisabled={isSpinDisabled} setIsSpinDisabled={setIsSpinDisabled} />
			<Buttons setIsSpinDisabled={setIsSpinDisabled} />
		</div>
	)
}
