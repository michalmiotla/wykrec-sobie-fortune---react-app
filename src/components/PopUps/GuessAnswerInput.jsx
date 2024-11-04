import { useState, useContext } from "react";
import { NextRoundButton } from "./NextRoundButton";
import { FinishGameButton } from "./FinishGameButton";
import { RoundStateContext } from "../../context/RoundStateContext";

export function GuessAnswerInput({
  setShowGuessAnswerInput,
  chosenAnswer,
  setGamePoints,
  gamePoints,
  resetRound,
  roundTime,
  setIsTimeRunning,
  setIsAnswerCorrect,
  isAnswerCorrect,
  setShowEndGamePanel,
  finishGame,
}) {
  const [playerGuess, setPlayerGuess] = useState("");
  const [bonusPoints, setBonusPoints] = useState(0);
  const round = useContext(RoundStateContext);

  function checkPlayerGuess() {
    let pointsFromGoodAnswer;

    if (roundTime.minutes === 2 || roundTime.minutes === 3) {
      pointsFromGoodAnswer = 3000;
    } else if (roundTime.minutes === 1) {
      pointsFromGoodAnswer = 2000;
    } else if (roundTime.minutes === 0) {
      pointsFromGoodAnswer = 1000;
    }

    setBonusPoints(pointsFromGoodAnswer);

    if (playerGuess.toUpperCase() === chosenAnswer.answer) {
      setIsAnswerCorrect(true);
      setIsTimeRunning(false);
      setGamePoints({
        ...gamePoints,
        roundPoints: gamePoints.roundPoints + pointsFromGoodAnswer,
      });
    } else {
      setIsAnswerCorrect(false);
    }
  }

  return (
    <div className="fixed left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-transparent lg:absolute">
      <div className="flex h-1/2 w-full flex-col items-center justify-around border-2 border-black bg-white drop-shadow-xl lg:h-1/3 lg:border-x-0 lg:bg-[rgba(255,255,255,0.85)]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-bold sm:text-xl xl:text-2xl">
            TWOJA ODPOWIEDŹ TO:
          </p>
          <p className="text-center text-base sm:text-xl xl:text-2xl">
            (PAMIĘTAJ O SPACJACH I POLSKICH ZNAKACH)
          </p>
        </div>

        <input
          disabled={isAnswerCorrect}
          className={`p- w-[75%] rounded-full border-2 border-black px-4 py-2 text-center sm:w-[60%] lg:w-[500px] ${
            isAnswerCorrect === true && "border-green-400"
          } ${isAnswerCorrect === false && "border-red-400"} aspect-[100/15] text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer disabled:cursor-default disabled:bg-white sm:text-xl xl:text-2xl`}
          onChange={(e) => {
            setPlayerGuess(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && checkPlayerGuess()}
          type="text"
        />
        <div
          className={`flex flex-col ${!isAnswerCorrect && "lg:flex-row"} w-full items-center justify-center gap-2`}
        >
          {(isAnswerCorrect === null || isAnswerCorrect === false) && (
            <>
              <button
                className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
                onClick={() => {
                  checkPlayerGuess();
                }}
              >
                SPRAWDŹ
              </button>
              <button
                className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
                onClick={() => setShowGuessAnswerInput(false)}
              >
                WRÓĆ DO GRY
              </button>
            </>
          )}

          {isAnswerCorrect && round !== 3 && (
            <>
              <div className="rounded-full border-2 border-green-400 bg-white px-4 py-2">
                <p className="text-center text-base text-green-400 sm:text-xl xl:text-2xl">
                  <span className="font-bold">{bonusPoints} ZŁ</span> BONUSU ZA
                  POPRAWNĄ ODPOWIEDŹ!
                </p>
              </div>

              <NextRoundButton resetRound={resetRound} />
            </>
          )}

          {isAnswerCorrect && round === 3 && (
            <>
              <div className="rounded-full border-2 border-green-400 bg-white px-4 py-2">
                <p className="text-center text-base text-green-400 sm:text-xl xl:text-2xl">
                  <span className="font-bold">{bonusPoints} ZŁ</span> BONUSU ZA
                  POPRAWNĄ ODPOWIEDŹ!
                </p>
              </div>

              <FinishGameButton
                setShowEndGamePanel={setShowEndGamePanel}
                finishGame={finishGame}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
