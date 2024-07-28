import { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'

export function Wheel({ isSpinDisabled, setIsSpinDisabled }) {
	const [isWheelSpinning, setIsWheelSpinning] = useState(false)
	const [startSpinDegrees, setStartSpinDegrees] = useState(0)
	const [rotateWheel, setRotateWheel] = useState(0)

	let initialDeg = 0

	function setDegrees() {
		const degrees = Math.floor(Math.random() * 2000 + 500)
		initialDeg = degrees % 360

		console.log(degrees)
		console.log(initialDeg)
		setRotateWheel(prevRotateValue => prevRotateValue + degrees)
		setStartSpinDegrees(initialDeg)
	}

	console.log((initialDeg + rotateWheel) % 360)

	useEffect(() => {
		if (isWheelSpinning) {
			setIsSpinDisabled(true)
			let timer1 = setTimeout(() => setIsWheelSpinning(false), 5000)
			return () => {
				clearTimeout(timer1)
			}
		}
	}, [isWheelSpinning])

	function setValue() {
		switch (true) {
			case (initialDeg + rotateWheel) % 360 > 0 && (initialDeg + rotateWheel) % 360 <= 22.5:
				return 500
			case (initialDeg + rotateWheel) % 360 > 22.5 && (initialDeg + rotateWheel) % 360 <= 45:
				return 200
			case (initialDeg + rotateWheel) % 360 > 45 && (initialDeg + rotateWheel) % 360 <= 67.5:
				return 700
			case (initialDeg + rotateWheel) % 360 > 67.5 && (initialDeg + rotateWheel) % 360 <= 90:
				return 100
			case (initialDeg + rotateWheel) % 360 > 90 && (initialDeg + rotateWheel) % 360 <= 112.5:
				return 400
			case (initialDeg + rotateWheel) % 360 > 112.5 && (initialDeg + rotateWheel) % 360 <= 135:
				return 150
			case (initialDeg + rotateWheel) % 360 > 135 && (initialDeg + rotateWheel) % 360 <= 157.5:
				return 800
			case (initialDeg + rotateWheel) % 360 > 157.5 && (initialDeg + rotateWheel) % 360 <= 180:
				return 250
			case (initialDeg + rotateWheel) % 360 > 180 && (initialDeg + rotateWheel) % 360 <= 202.5:
				return 350
			case (initialDeg + rotateWheel) % 360 > 202.5 && (initialDeg + rotateWheel) % 360 <= 225:
				return 200
			case (initialDeg + rotateWheel) % 360 > 225 && (initialDeg + rotateWheel) % 360 <= 247.5:
				return 600
			case (initialDeg + rotateWheel) % 360 > 247.5 && (initialDeg + rotateWheel) % 360 <= 270:
				return 100
			case (initialDeg + rotateWheel) % 360 > 270 && (initialDeg + rotateWheel) % 360 <= 292.5:
				return 300
			case (initialDeg + rotateWheel) % 360 > 292.5 && (initialDeg + rotateWheel) % 360 <= 315:
				return 150
			case (initialDeg + rotateWheel) % 360 > 315 && (initialDeg + rotateWheel) % 360 <= 337.5:
				return 1000
			case (initialDeg + rotateWheel) % 360 > 337.5 && (initialDeg + rotateWheel) % 360 <= 360:
				return ':('
		}
	}

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
				disabled={isSpinDisabled}
				onClick={() => {
					setIsWheelSpinning(true)
					setDegrees()
				}}
				className={`absolute bg-transparent border-none font-bold text-base sm:text-xl xl:text-2xl ${
					isSpinDisabled ? 'text-white' : 'text-red-950'
				} rounded-full aspect-square w-[80px] sm:w-[110px]  md:w-[140px]  lg:w-[110px] xl:w-[140px]`}>
				{setValue()}
			</button>
		</div>
	)
}
