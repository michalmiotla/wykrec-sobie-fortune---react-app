export function Results({ roundPoints }) {
	return (
		<div className='flex w-full justify-around'>
			<div className='flex flex-col justify-center items-center'>
				<p className='md:text-[20px] xl:text-[24px]'>Wynik rundy:</p>
				<span className='text-[24px] md:text-[28px] xl:text-[32px] font-bold'>{roundPoints} zł</span>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<p className='md:text-[20px] xl:text-[24px]'>Wynik ogólny:</p>
				<span className='text-[24px] md:text-[28px] xl:text-[32px] font-bold'>4300 zł</span>
			</div>
		</div>
	)
}
