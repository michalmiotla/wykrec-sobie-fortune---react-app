import { useEffect, useState } from 'react'
import { Logo } from './components/Logo'
import { StartPanel } from './components/StartPanel'
import { MainContainer } from './components/MainContainer'
import { ResultsPanel } from './components/ResultsPanel'

function App() {
	const [isGameStarted, setIsGameStarted] = useState(false)
	const [showResultsPanel, setShowResultsPanel] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('results') === null) {
			localStorage.setItem('results', '[]')
		}
	})

	return (
		<div className='relative flex justify-center h-full w-full font-poppins'>
			<div className='absolute w-full min-w-[375px] min-h-screen bg-painted bg-cover bg-center'>
				<div className='relative container 2xl:max-w-[1280px] h-full flex flex-col items-center min-h-screen mx-auto'>
					<Logo />

					{!isGameStarted && !showResultsPanel && (
						<StartPanel setIsGameStarted={setIsGameStarted} setShowResultsPanel={setShowResultsPanel} />
					)}
					{isGameStarted && !showResultsPanel && (
						<MainContainer
							setShowResultsPanel={setShowResultsPanel}
							showResultsPanel={showResultsPanel}
							setIsGameStarted={setIsGameStarted}
						/>
					)}
					{showResultsPanel && (
						<ResultsPanel setShowResultsPanel={setShowResultsPanel} setIsGameStarted={setIsGameStarted} />
					)}
				</div>
			</div>
		</div>
	)
}

export default App
