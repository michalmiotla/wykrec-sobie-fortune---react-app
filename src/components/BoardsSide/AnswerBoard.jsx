import { Letter } from "./Letter";
import { useContext } from "react";
import { RoundStateContext } from "../../context/RoundStateContext";
import { ChosenLettersStateContext } from "../../context/ChosenLettersStateContext";

export function AnswerBoard({ chosenAnswer }) {
  const round = useContext(RoundStateContext);
  const chosenLetters = useContext(ChosenLettersStateContext);

  const showedAnswer = chosenAnswer.splittedAnswer.map((word, index) => (
    <div
      className="flex w-full flex-wrap items-center justify-center"
      key={index}
    >
      {word.map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          chosenLetters={chosenLetters}
        ></Letter>
      ))}
    </div>
  ));

  return (
    <div className="flex h-[200px] w-[350px] flex-col items-center justify-between rounded-2xl border-2 border-black bg-light-beige p-2 sm:h-[275px] sm:w-[475px] md:h-[350px] md:w-[600px] lg:h-[275px] lg:w-[475px] xl:h-[350px] xl:w-[600px]">
      <div className="flex h-[15%] w-[80%] items-center justify-center border-2 border-black bg-white drop-shadow-lg">
        <p className="text-base sm:text-xl xl:text-2xl">
          KATEGORIA: <span className="font-bold">{chosenAnswer.category}</span>
        </p>
      </div>
      <div className="flex h-[60%] w-[95%] flex-wrap items-center justify-center">
        {showedAnswer}
      </div>
      <div className="flex h-[15%] w-[80%] justify-between">
        <p className="text-base sm:text-xl xl:text-2xl">RUNDA:</p>
        <p className="text-base font-bold sm:text-xl xl:text-2xl">{round}/3</p>
      </div>
    </div>
  );
}
