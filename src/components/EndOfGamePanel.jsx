import { useEffect } from "react";

export function EndOfGamePanel({ gamePoints, setShowResultsPanel, resetGame }) {
  console.log("render");

  const newResult = gamePoints.totalPoints;
  const results = JSON.parse(localStorage.getItem("results"));
  const updatedArray = JSON.stringify([...results, newResult]);

  useEffect(() => {
    localStorage.setItem("results", updatedArray);
  });

  return (
    <div className="z-100 relative my-auto flex h-full w-full flex-col items-center justify-center gap-12">
      <>
        <div className="flex flex-col items-center justify-center">
          <p className="py-2 text-center text-base font-bold sm:text-xl xl:text-2xl">
            TWÓJ WYNIK TO:
          </p>
          <p className="className='text-center xl:text-2xl' text-base sm:text-xl">
            {gamePoints.totalPoints} ZŁ
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 md:w-2/3 lg:w-full lg:flex-row">
          <button
            className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
            onClick={() => {
              setShowResultsPanel(true), resetGame();
            }}
          >
            NAJLEPSZE WYNIKI
          </button>
          <button
            className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
            onClick={() => resetGame()}
          >
            ZAGRAJ PONOWNIE
          </button>
        </div>
      </>
    </div>
  );
}
