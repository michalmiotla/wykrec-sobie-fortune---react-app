import { useState } from 'react'

export function ResultsPanel({ setShowResultsPanel, setIsGameStarted }) {
	const [showTable, setShowTable] = useState(true)

	const resultsArray = JSON.parse(localStorage.getItem('results'))
	resultsArray.sort(function (a, b) {
		return b - a
	})
	const mappedResults = resultsArray.map((r, index) => (
		<li className='flex justify-between p-3 border-b-2 border-black' key={resultsArray[index]}>
			<p>{index + 1}. </p>
			<p className='font-bold'>{r} ZŁ</p>
		</li>
	))

	return (
		<div className='relative z-150 h-full w-full md:w-2/3 lg:w-full py-6 gap-12 my-auto flex flex-col items-center justify-center '>
			<p className='text-center text-base font-bold sm:text-xl xl:text-2xl py-2'>TWOJE NAJLEPSZE WYNIKI:</p>
			{resultsArray.length > 0 && showTable ? (
				<ol className='text-base sm:text-xl xl:text-2xl py-4 px-12 w-1/2 min-w-[300px] bg-light-beige  border-2 border-black rounded-2xl drop-shadow-xl'>
					{mappedResults}
				</ol>
			) : (
				<p>Brak wyników</p>
			)}

			<div className='flex flex-col lg:flex-row items-center justify-center w-full gap-2 py-6'>
				<button
					className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
					onClick={() => {
						setShowResultsPanel(false), setIsGameStarted(false)
					}}>
					POWRÓT DO MENU
				</button>
				<button
					className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
					onClick={() => {
						localStorage.clear('results')
						localStorage.setItem('results', '[]')
						setShowTable(false)
					}}>
					WYCZYŚĆ TABELĘ
				</button>
			</div>
		</div>
	)
}
