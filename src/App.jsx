import { useState } from 'react'
import { Logo } from './components/Logo'
import { StartPanel } from './components/Startpanel'
import { MainContainer } from './components/MainContainer'
import { Results } from './components/Results'

function App() {
	const [isGameStarted, setIsGameStarted] = useState(false)
	const [showResultsPanel, setShowResultsPanel] = useState(false)

	return (
		<div className='relative flex justify-center h-full w-full font-poppins'>
			<div className='absolute w-full min-w-[375px] min-h-screen bg-painted bg-cover bg-center'>
				<div className='relative container 2xl:max-w-[1280px] h-full flex flex-col items-center min-h-screen mx-auto'>
					<Logo />

					{!isGameStarted && !showResultsPanel && (
						<StartPanel
							setIsGameStarted={setIsGameStarted}
							setShowResultsPanel={setShowResultsPanel}
							showResultsPanel={showResultsPanel}
						/>
					)}
					{isGameStarted && !showResultsPanel && (
						<MainContainer setShowResultsPanel={setShowResultsPanel} setIsGameStarted={setIsGameStarted} />
					)}
					{showResultsPanel && (
						<Results setShowResultsPanel={setShowResultsPanel} setIsGameStarted={setIsGameStarted} />
					)}
				</div>
			</div>
		</div>
	)
}

export default App
