import { Logo } from './components/Logo'
import { GridContainer } from './components/GridContainer'

function App() {
	return (
		<div className='relative flex justify-center h-full w-full bg-black font-poppins'>
			<div className='absolute w-full min-w-[375px] max-w-[1440px] min-h-screen p-2 bg-painted bg-cover bg-center'>
				<div className='container 2xl:max-w-[1280px] h-full mx-auto overflow-hidden'>
					<Logo />
					<GridContainer />
				</div>
			</div>
		</div>
	)
}

export default App
