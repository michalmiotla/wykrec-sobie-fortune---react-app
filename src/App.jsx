import { Logo } from './components/Logo'
import { GridContainer } from './components/GridContainer'

function App() {
	return (
		<div className='relative flex justify-center w-screen h-screen bg-black font-poppins'>
			<div className='absolute w-full min-w-[375px] max-w-[1440px] p-2 h-full bg-painted bg-cover bg-center'>
				<div className='container 2xl:max-w-[1280px] h-full mx-auto'>
					<Logo />
					<GridContainer />
				</div>
			</div>
		</div>
	)
}

export default App
