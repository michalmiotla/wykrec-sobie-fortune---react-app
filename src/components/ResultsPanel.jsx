import { useState } from "react";

export function ResultsPanel({ setShowResultsPanel, setIsGameStarted }) {
  const [showTable, setShowTable] = useState(true);

  const resultsArray = JSON.parse(localStorage.getItem("results"));
  resultsArray.sort(function (a, b) {
    return b - a;
  });

  if (resultsArray.length >= 10) {
    resultsArray.splice(9, resultsArray.length - 10);
  }

  const mappedResults = resultsArray.map((r, index) => (
    <li
      className="flex justify-between border-b-2 border-black p-3"
      key={index}
    >
      <p>{index + 1}. </p>
      <p className="font-bold">{r} ZŁ</p>
    </li>
  ));

  return (
    <div className="z-150 relative my-auto flex h-full w-full flex-col items-center justify-center gap-12 py-6 md:w-2/3 lg:w-full">
      <p className="py-2 text-center text-base font-bold sm:text-xl xl:text-2xl">
        TWOJE NAJLEPSZE WYNIKI:
      </p>
      {resultsArray.length > 0 && showTable ? (
        <ol className="w-1/2 min-w-[300px] rounded-2xl border-2 border-black bg-light-beige px-12 py-4 text-base drop-shadow-xl sm:text-xl xl:text-2xl">
          {mappedResults}
        </ol>
      ) : (
        <p>Brak wyników</p>
      )}

      <div className="flex w-full flex-col items-center justify-center gap-2 py-6 lg:flex-row">
        <button
          className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
          onClick={() => {
            setShowResultsPanel(false), setIsGameStarted(false);
          }}
        >
          POWRÓT DO MENU
        </button>
        <button
          className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
          onClick={() => {
            localStorage.clear("results");
            localStorage.setItem("results", "[]");
            setShowTable(false);
          }}
        >
          WYCZYŚĆ TABELĘ
        </button>
      </div>
    </div>
  );
}
