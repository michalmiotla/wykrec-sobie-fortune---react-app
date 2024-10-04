export function Consonant({ letter, chosenLetters, handleConsonants }) {
	return (
		<button
			disabled={chosenLetters.includes(letter) ? true : false}
			onClick={() => {
				handleConsonants(letter)
			}}
			className='bg-white border-2 font-bold text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-black aspect-[5/7] w-5 sm:w-7 md:w-9 lg:w-7 xl:w-9 m-[2px] hover:bg-light-beige transition-colors duration-300 disabled:bg-light-red'>
			{letter}
		</button>
	)
}
