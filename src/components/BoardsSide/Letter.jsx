export function Letter({ letter, chosenLetters }) {
  return (
    <div className="text-md m-[2px] flex aspect-[5/7] w-5 items-center justify-center border-2 border-black bg-white font-bold sm:w-7 sm:text-xl md:w-9 md:text-2xl lg:w-7 lg:text-xl xl:w-9 xl:text-2xl">
      <p>{chosenLetters.filter((l) => (l == letter ? letter : ""))}</p>
    </div>
  );
}
