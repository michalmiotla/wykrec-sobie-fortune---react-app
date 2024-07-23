import { answersArray } from '../utils/answersArray'

console.log(answersArray)

export function AnswerBoard() {
	return (
		<div className='flex flex-col items-center justify-between w-[350px] h-[200px] sm:w-[475px] sm:h-[275px] md:w-[600px] md:h-[350px] lg:w-[475px] lg:h-[275px] xl:w-[600px] xl:h-[350px] p-2 bg-light-beige rounded-2xl border-2 border-black'>
			<div className='flex justify-center items-center bg-white w-[80%] h-[15%] border-2 border-black drop-shadow-lg'>
				<p className='text-base sm:text-xl xl:text-2xl '>
					KATEGORIA: <span className='font-bold'>MUZYKA</span>
				</p>
			</div>
			<div className='bg-white w-[95%] h-[60%]'>letters</div>
			<div className='flex justify-between w-[80%] h-[15%]'>
				<p className='text-base sm:text-xl xl:text-2xl '>RUNDA:</p>
				<p className='font-bold text-base sm:text-xl xl:text-2xl'>2/3</p>
			</div>
		</div>
	)
}