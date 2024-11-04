export function QuickInfo({ chosenLetters, setShowInfo }) {
  return (
    <div className="fixed left-1/2 top-1/2 z-30 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-transparent lg:absolute">
      <div className="relative flex w-2/3 flex-col items-center justify-around gap-2 border-2 border-black bg-white p-4 drop-shadow-xl md:w-1/2 lg:gap-6 lg:bg-[rgba(255,255,255,0.85)]">
        <p className="text-center text-base sm:text-xl xl:text-2xl">
          Litera <b>{chosenLetters[chosenLetters.length - 1]}</b> nie znajduje
          się w haśle!
        </p>
        <button
          className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
          onClick={() => setShowInfo(false)}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}
