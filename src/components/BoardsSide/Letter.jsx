export function Letter({ letter, chosenLetters }) {
	return (
		<div className='flex justify-center items-center bg-white border-2 font-bold text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-black aspect-[5/7] w-5 sm:w-7 md:w-9 lg:w-7 xl:w-9 m-[2px]'>
			<p>{chosenLetters.filter(l => (l == letter ? letter : ''))}</p>
		</div>
	)
}
