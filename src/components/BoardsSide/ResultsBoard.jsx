export function ResultsBoard({ gamePoints }) {
  return (
    <div className="flex w-full justify-around">
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[20px] xl:text-[24px]">Wynik rundy:</p>
        <span className="text-[24px] font-bold md:text-[28px] xl:text-[32px]">
          {gamePoints.roundPoints} zł
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-[20px] xl:text-[24px]">Wynik ogólny:</p>
        <span className="text-[24px] font-bold md:text-[28px] xl:text-[32px]">
          {gamePoints.totalPoints} zł
        </span>
      </div>
    </div>
  );
}
