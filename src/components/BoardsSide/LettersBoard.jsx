import { consonantsArray } from "../../utils/consonantsArray";
import { vowelsArray } from "../../utils/vowelsArray";
import { Consonant } from "../BoardsSide/Consonant";
import { Vowel } from "./Vowel";

export function LettersBoard({
  disabledButtonsState,
  roundTime,
  handleConsonants,
  handleVowels,
}) {
  const mappedConsonants = consonantsArray.map((consonant, index) => (
    <Consonant
      letter={consonant}
      key={index}
      handleConsonants={handleConsonants}
    ></Consonant>
  ));

  const mappedVowels = vowelsArray.map((vowel, index) => (
    <Vowel letter={vowel} key={index} handleVowels={handleVowels}></Vowel>
  ));

  return (
    <>
      <div className="flex h-[200px] w-[350px] flex-col items-center justify-between rounded-2xl border-2 border-black bg-light-beige p-2 sm:h-[275px] sm:w-[475px] md:h-[350px] md:w-[600px] lg:h-[275px] lg:w-[475px] xl:h-[350px] xl:w-[600px]">
        <div className="flex h-[15%] w-[80%] items-center justify-center border-2 border-black bg-white drop-shadow-lg">
          <p className="text-base sm:text-xl xl:text-2xl">WYBIERZ LITERĘ:</p>
        </div>
        <div className="flex h-[60%] w-[95%] flex-col items-center justify-around">
          <div className="relative flex flex-wrap items-center justify-center">
            {mappedConsonants}
            {disabledButtonsState.consonantsArea && (
              <div className="absolute h-full w-full bg-light-beige opacity-40"></div>
            )}
          </div>

          <div className="relative flex items-center justify-center">
            {mappedVowels}
            {disabledButtonsState.vowelsArea && (
              <div className="absolute h-full w-full bg-light-beige opacity-40"></div>
            )}
          </div>
        </div>
        <div className="flex h-[15%] w-[80%] justify-between">
          <p className="text-base sm:text-xl xl:text-2xl">DO KONCA RUNDY:</p>
          <p className="text-base font-bold sm:text-xl xl:text-2xl">
            0{roundTime.minutes}:
            {roundTime.seconds > 9
              ? roundTime.seconds
              : `0${roundTime.seconds}`}
          </p>
        </div>
      </div>
    </>
  );
}
