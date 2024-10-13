export function EndOfGamePanel({ totalPoints, setShowResultsPanel, resetGame }) {
	return (
		<div className='absolute z-100 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-12 flex flex-col items-center justify-center '>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-center text-base font-bold sm:text-xl xl:text-2xl py-2'>TWÓJ WYNIK TO:</p>
				<p className="className='text-center text-base sm:text-xl xl:text-2xl'">{totalPoints} ZŁ</p>
			</div>

			<div className='flex flex-col lg:flex-row justify-center items-center w-full md:w-2/3 lg:w-full gap-6'>
				<button
					className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
					onClick={() => {
						setShowResultsPanel(true)
					}}>
					NAJLEPSZE WYNIKI
				</button>
				<button
					className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
					onClick={() => resetGame()}>
					ZAGRAJ PONOWNIE
				</button>
			</div>
		</div>
	)
}
