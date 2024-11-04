export function FinishGameButton({ setShowEndGamePanel, finishGame }) {
  return (
    <button
      className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
      onClick={() => {
        setShowEndGamePanel(true), finishGame();
      }}
    >
      KONIEC GRY
    </button>
  );
}
