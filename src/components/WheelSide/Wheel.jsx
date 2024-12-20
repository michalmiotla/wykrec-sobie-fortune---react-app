import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import { useContext } from 'react'
import { DisabledButtonsStateContext } from '../../context/DisabledButtonsStateContext'

export function Wheel({
	setGamePoints,
	gamePoints,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setIsRoundRestarted,
	setIsWheelSpinning,
	isWheelSpinning,
}) {
	const [startSpinDegrees, setStartSpinDegrees] = useState(0)
	const [disabledButtonsState, setDisabledButtonsState] = useContext(DisabledButtonsStateContext)

	function setDegrees() {
		const degrees = Math.floor(Math.random() * 2000 + 500)
		initialDeg = degrees % 360
		setRotateWheel(prevRotateValue => prevRotateValue + degrees)
		setStartSpinDegrees(initialDeg)
	}

	useEffect(() => {
		if (isWheelSpinning) {
			setDisabledButtonsState({ ...disabledButtonsState, spinOnWheel: true })
			let timer1 = setTimeout(() => {
				setIsWheelSpinning(false),
					valueOfSpinnedWheel !== 0
						? setDisabledButtonsState({ ...disabledButtonsState, spinOnWheel: true, consonantsArea: false })
						: setDisabledButtonsState({ ...disabledButtonsState, spinOnWheel: false })
			}, 5000)
			return () => {
				clearTimeout(timer1)
			}
		}
	}, [isWheelSpinning, setDisabledButtonsState])

	useEffect(() => {
		if (valueOfSpinnedWheel === 0) {
			let timer1 = setTimeout(() => {
				setGamePoints({ ...gamePoints, roundPoints: gamePoints.roundPoints * valueOfSpinnedWheel })
			}, 5000)
			return () => {
				clearTimeout(timer1)
			}
		}
	}, [valueOfSpinnedWheel, setGamePoints])

	return (
		<div className='w-full relative flex justify-center items-center'>
			<img className='absolute z-10 -top-4 h-8 sm:h-10 md:h-12 lg:h-10 xl:h-12' src='../triangleStop.png' alt='' />
			<motion.img
				className='w-[350px]  sm:w-[475px]  md:w-[600px]  lg:w-[475px]  xl:w-[600px]'
				src='../wheel.png'
				alt=''
				initial={{ rotate: startSpinDegrees }}
				animate={{ rotate: rotateWheel }}
				transition={{ duration: 5, ease: easeInOut }}
			/>
			<button
				disabled={disabledButtonsState.spinOnWheel}
				onClick={() => {
					setIsWheelSpinning(true)
					setDegrees()
					setIsRoundRestarted(false)
					setDisabledButtonsState({ ...disabledButtonsState, guessAnswerButton: true })
				}}
				className={`absolute bg-transparent border-none font-bold text-base sm:text-xl xl:text-2xl text-white rounded-full aspect-square w-[80px] sm:w-[110px]  md:w-[140px]  lg:w-[110px] xl:w-[140px] ${
					!disabledButtonsState.spinOnWheel && 'animate-pulse'
				}`}>
				{!disabledButtonsState.spinOnWheel && 'SPIN!'}
				{!isWheelSpinning && disabledButtonsState.spinOnWheel && valueOfSpinnedWheel !== 0 && valueOfSpinnedWheel}
				{!isWheelSpinning && disabledButtonsState.spinOnWheel && valueOfSpinnedWheel === 0 && ':('}
				{isWheelSpinning && '...'}
			</button>
		</div>
	)
}
