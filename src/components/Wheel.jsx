export function Wheel() {
	return (
		<div className='w-full relative flex justify-center items-center'>
			<img className='absolute -top-4 h-8 sm:h-10 md:h-12 lg:h-10 xl:h-12 z-10' src='../triangleStop.png' alt='' />
			<img
				className='w-[350px] rotate-45 sm:w-[475px]  md:w-[600px]  lg:w-[475px]  xl:w-[600px]'
				src='../wheel.png'
				alt=''
			/>
			<button className='absolute bg-transparent border-none text-base sm:text-xl xl:text-2xl text-white rounded-full aspect-square w-[80px] sm:w-[110px]  md:w-[140px]  lg:w-[110px]  xl:w-[140px]  '>
				SPIN
			</button>
		</div>
	)
}
