export function StartPanel({ setIsGameStarted }) {
	return (
		<div className='absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center bg-transparent'>
			<div className='w-full h-1/2 lg:h-1/4 flex flex-col items-center justify-around bg-white lg:bg-[rgba(255,255,255,0.85)]  border-2 lg:border-x-0 border-black drop-shadow-xl'>
				<div className='flex flex-col items-center justify-center'>
					<p className='font-bold text-base sm:text-xl xl:text-2xl'>WITAJ W GRZE WYKRĘĆ SOBIE FORTUNĘ!</p>
					<p className='text-center text-base sm:text-xl xl:text-2xl'>(ZASADY GRY)</p>
				</div>

				<div className='flex flex-col lg:flex-row items-center justify-center w-full gap-2'>
					<button
						onClick={() => setIsGameStarted(true)}
						className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '>
						ZACZNIJ GRĘ!
					</button>
				</div>
			</div>
		</div>
	)
}
