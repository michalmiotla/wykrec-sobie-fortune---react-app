import { FinishGameButton } from './FinishGameButton'
import { NextRoundButton } from './NextRoundButton'
import { useContext } from 'react'
import { RoundStateContext } from '../../context/RoundStateContext'

export function TimeIsUp({ resetRound, setShowEndGamePanel, finishGame, chosenAnswer }) {
	const round = useContext(RoundStateContext)

	return (
		<div className='fixed lg:absolute z-20 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center bg-transparent'>
			<div className='w-full h-1/2 lg:h-1/4 p-2 text-center flex flex-col items-center justify-around bg-white lg:bg-[rgba(255,255,255,0.85)]  border-2 lg:border-x-0 border-black drop-shadow-xl'>
				<p className='text-center text-base sm:text-xl xl:text-2xl'>Czas minął. Brak punktów za rundę.</p>
				<p className='text-sm sm:text-sm lg:text-base'>
					POPRAWNA ODPOWIEDŹ TO: <span className='font-bold'>{chosenAnswer.answer}</span>
				</p>
				{round === 3 ? (
					<FinishGameButton setShowEndGamePanel={setShowEndGamePanel} finishGame={finishGame} />
				) : (
					<NextRoundButton resetRound={resetRound} />
				)}
			</div>
		</div>
	)
}
