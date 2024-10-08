export function EndOfGamePanel({ totalPoints }) {
	return (
		<div className='absolute z-50 h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white'>
			<p>Koniec gry</p>
			<p>{totalPoints} zł</p>
		</div>
	)
}
