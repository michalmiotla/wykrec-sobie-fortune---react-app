import { FinishGameButton } from "./FinishGameButton";
import { NextRoundButton } from "./NextRoundButton";
import { useContext } from "react";
import { RoundStateContext } from "../../context/RoundStateContext";

export function TimeIsUp({
  resetRound,
  setShowEndGamePanel,
  finishGame,
  chosenAnswer,
}) {
  const round = useContext(RoundStateContext);

  return (
    <div className="fixed left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-transparent lg:absolute">
      <div className="flex h-1/2 w-full flex-col items-center justify-around border-2 border-black bg-white p-2 text-center drop-shadow-xl lg:h-1/4 lg:border-x-0 lg:bg-[rgba(255,255,255,0.85)]">
        <p className="text-center text-base sm:text-xl xl:text-2xl">
          Czas minął. Brak punktów za rundę.
        </p>
        <p className="text-sm sm:text-sm lg:text-base">
          POPRAWNA ODPOWIEDŹ TO:{" "}
          <span className="font-bold">{chosenAnswer.answer}</span>
        </p>
        {round === 3 ? (
          <FinishGameButton
            setShowEndGamePanel={setShowEndGamePanel}
            finishGame={finishGame}
          />
        ) : (
          <NextRoundButton resetRound={resetRound} />
        )}
      </div>
    </div>
  );
}
