import { consonantsArray } from '../../utils/consonantsArray'
import { vowelsArray } from '../../utils/vowelsArray'
import { Consonant } from '../BoardsSide/Consonant'
import { Vowel } from './Vowel'

export function LettersBoard({
	setChosenLetters,
	chosenAnswer,
	setRoundPoints,
	valueOfSpinnedWheel,
	disabledButtonsState,
	setDisabledButtonsState,
	roundPoints,
}) {
	const mappedConsonants = consonantsArray.map((consonant, index) => (
		<Consonant
			valueOfSpinnedWheel={valueOfSpinnedWheel}
			letter={consonant}
			key={index}
			setChosenLetters={setChosenLetters}
			chosenAnswer={chosenAnswer}
			setRoundPoints={setRoundPoints}
			roundPoints={roundPoints}
			disabledButtonsState={disabledButtonsState}
			setDisabledButtonsState={setDisabledButtonsState}></Consonant>
	))

	const mappedVowels = vowelsArray.map((vowel, index) => (
		<Vowel
			letter={vowel}
			key={index}
			setChosenLetters={setChosenLetters}
			chosenAnswer={chosenAnswer}
			setRoundPoints={setRoundPoints}
			disabledButtonsState={disabledButtonsState}
			setDisabledButtonsState={setDisabledButtonsState}></Vowel>
	))

	return (
		<div className='flex flex-col items-center justify-between w-[350px] h-[200px] sm:w-[475px] sm:h-[275px] md:w-[600px] md:h-[350px] lg:w-[475px] lg:h-[275px] xl:w-[600px] xl:h-[350px] p-2 bg-light-beige rounded-2xl border-2 border-black'>
			<div className='flex justify-center items-center  bg-white w-[80%] h-[15%] border-2 border-black drop-shadow-lg'>
				<p className='text-base sm:text-xl xl:text-2xl '>WYBIERZ LITERĘ:</p>
			</div>
			<div className='flex flex-col items-center justify-around w-[95%] h-[60%]'>
				<div className='relative flex justify-center items-center flex-wrap'>
					{mappedConsonants}
					{disabledButtonsState.consonantsArea && <div className='absolute bg-red-200 h-full w-full'></div>}
				</div>

				<div className='relative flex justify-center items-center'>
					{mappedVowels}
					{disabledButtonsState.vowelsArea && <div className='absolute bg-blue-200 h-full w-full'></div>}
				</div>
			</div>
			<div className='flex justify-between w-[80%] h-[15%]'>
				<p className='text-base sm:text-xl xl:text-2xl '>DO KONCA RUNDY:</p>
				<p className='font-bold text-base sm:text-xl xl:text-2xl '>01:22</p>
			</div>
		</div>
	)
}
