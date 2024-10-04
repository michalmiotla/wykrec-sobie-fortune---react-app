import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'

export function Wheel({
	setRoundPoints,
	disabledButtonsState,
	setDisabledButtonsState,
	setRotateWheel,
	rotateWheel,
	valueOfSpinnedWheel,
	initialDeg,
	setIsGameRestarted,
}) {
	const [isWheelSpinning, setIsWheelSpinning] = useState(false)
	const [startSpinDegrees, setStartSpinDegrees] = useState(0)

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
				setRoundPoints(prevPoints => prevPoints * valueOfSpinnedWheel)
			}, 5000)
			return () => {
				clearTimeout(timer1)
			}
		}
	}, [valueOfSpinnedWheel, setRoundPoints])

	return (
		<div className='w-full relative flex justify-center items-center'>
			<img className='absolute -top-4 h-8 sm:h-10 md:h-12 lg:h-10 xl:h-12 z-10' src='../triangleStop.png' alt='' />
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
					setIsGameRestarted(false)
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
