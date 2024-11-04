import { useContext } from "react";
import { ChosenLettersStateContext } from "../../context/ChosenLettersStateContext";

export function Vowel({ letter, handleVowels }) {
  const chosenLetters = useContext(ChosenLettersStateContext);
  return (
    <button
      onClick={() => {
        handleVowels(letter);
      }}
      disabled={chosenLetters.includes(letter) ? true : false}
      className="text-md m-[2px] aspect-[5/7] w-5 border-2 border-black bg-light-khaki font-bold transition-colors duration-300 hover:bg-light-beige disabled:bg-light-red sm:w-7 sm:text-xl md:w-9 md:text-2xl lg:w-7 lg:text-xl xl:w-9 xl:text-2xl"
    >
      {letter}
    </button>
  );
}
