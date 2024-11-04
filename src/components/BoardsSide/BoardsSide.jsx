import { ResultsBoard } from "./ResultsBoard";
import { AnswerBoard } from "./AnswerBoard";
import { LettersBoard } from "./LettersBoard";

export function BoardsSide({
  chosenAnswer,
  gamePoints,
  disabledButtonsState,
  roundTime,
  handleConsonants,
  handleVowels,
}) {
  return (
    <div className="mb-8 flex flex-col items-center gap-4 lg:col-start-2 lg:col-end-3 lg:mb-0">
      <ResultsBoard gamePoints={gamePoints} />
      <AnswerBoard chosenAnswer={chosenAnswer} />
      <LettersBoard
        disabledButtonsState={disabledButtonsState}
        roundTime={roundTime}
        handleConsonants={handleConsonants}
        handleVowels={handleVowels}
      />
    </div>
  );
}
