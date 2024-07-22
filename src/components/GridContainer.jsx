import { BoardsSide } from './BoardsSide'
import { WheelSide } from './WheelSide'

export function GridContainer() {
	return (
		<div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
			<BoardsSide />
			<WheelSide />
		</div>
	)
}
