export function QuickInfo({ chosenLetters, setShowInfo }) {
	return (
		<div className='fixed lg:absolute z-30 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-transparent flex flex-col items-center justify-center'>
			<div className='relative w-2/3 md:w-1/2 p-4 gap-2 lg:gap-6 flex flex-col items-center justify-around bg-white lg:bg-[rgba(255,255,255,0.85)]  border-2  border-black drop-shadow-xl'>
				<p className='text-center text-base sm:text-xl xl:text-2xl'>
					Litera <b>{chosenLetters[chosenLetters.length - 1]}</b> nie znajduje się w haśle!
				</p>
				<button
					className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
					onClick={() => setShowInfo(false)}>
					Zamknij
				</button>
			</div>
		</div>
	)
}
