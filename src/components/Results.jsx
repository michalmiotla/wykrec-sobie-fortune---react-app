export function Results({ setShowResultsPanel, setIsGameStarted }) {
	return (
		<div className='relative z-150 h-full w-full md:w-2/3 lg:w-full py-6 gap-12 my-auto flex flex-col items-center justify-center '>
			<p className='text-center text-base font-bold sm:text-xl xl:text-2xl py-2'>TWOJE NAJLEPSZE WYNIKI:</p>
			<ol className='text-center text-base sm:text-xl xl:text-2xl'>
				<li>1.</li>
				<li>2.</li>
				<li>3.</li>
				<li>4.</li>
				<li>5.</li>
				<li>6.</li>
				<li>7.</li>
				<li>8.</li>
				<li>9.</li>
				<li>10.</li>
			</ol>
			<button
				className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '
				onClick={() => {
					setShowResultsPanel(false), setIsGameStarted(false)
				}}>
				POWRÓT
			</button>
		</div>
	)
}
