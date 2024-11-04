export function StartPanel({ setIsGameStarted, setShowResultsPanel }) {
  return (
    <>
      <div className="relative my-auto flex w-full flex-col items-center justify-center px-2 drop-shadow-xl">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="py-6 text-center text-base font-bold sm:text-xl xl:text-2xl">
            WITAJ W GRZE <q>WYKRĘĆ SOBIE FORTUNĘ</q>!
          </p>
          <p className="py-6 text-center text-base sm:text-xl xl:text-2xl">
            ZASADY GRY:
          </p>
          <div className="text-[10px] sm:text-sm lg:text-base">
            <ul className="list-disc px-4 py-6">
              <li className="py-1">
                Gra wzorowana jest na teleturnieju
                <q>
                  <b>Koło Fortuny</b>
                </q>
                . Celem gry jest zdobycie jak najwyższej wygranej, poprzez
                odkrywanie ukrytych liter w hasłach i odgadywaniu ich w całości.
              </li>
              <li className="py-1">
                Rozgrywka składa się z <b>trzech rund</b>, każda z nich może
                trwać <b>maksymalnie trzy minuty</b>. Kolejka rozpoczyna się od
                zakręcenia kołem, na którym znajdują się pola z wartościami
                pieniężnymi (od 100 do 1000 złotych) oraz pole
                <q>
                  <b>Bankrut</b>
                </q>
                które sprawia, że gracz traci wszystkie uzbierane dotychczas w
                tej rundzie pieniądze.
              </li>
              <li className="py-1">
                Po zakręceniu kołem gracz ma za zadanie wytypować{" "}
                <b>spółgłoskę</b>, która według niego znajduje się w haśle.
                Jeśli trafi, na jego konto trafia wylosowana kwota. Jeśli
                spółgłoska pojawia się w haśle wielokrotnie, nagorda zostaje
                wielokrotnie pomnożona.
              </li>
              <li className="py-1">
                Po wytypowaniu spółgłoski gracz ma prawo dalej kręcić kołem i
                odgadywać kolejne spółgłoski, by ułatwić sobie drogę do
                odgadnięcia hasła, ryzykując jednak trafieniem na{" "}
                <q>Bankruta</q>, kupić
                <b> samogłoskę</b> za <b>400 złotych</b>, co może znacząco
                ułatwić odgadnięcie hasła, ale wpływa negatywnie na końcowy
                wynik rundy, lub próbować odgadnąć hasło.
              </li>
              <li className="py-1">
                Im szybciej gracz wytypuje prawidłową odpowiedź, wpisując ją w
                całości w dedykowanym oknie, tym wyższy
                <b> bonus</b> dostanie na koniec rundy (pierwsza minuta rundy to
                3000 złotych bonusu, druga - 2000 zł, trzecia - 1000 zł) .
              </li>
              <li className="py-1">
                By zdobyć jak najwyższą wygraną, gracz musi polegać na wiedzy,
                spostrzegawczości, szybkości i odrobinie szczęścia.{" "}
                <b>POWODZENIA!</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 py-6 lg:flex-row">
          <button
            onClick={() => setIsGameStarted(true)}
            className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
          >
            ZACZNIJ GRĘ!
          </button>
          <button
            onClick={() => setShowResultsPanel(true)}
            className="aspect-[100/15] w-1/2 rounded-full border-2 border-black bg-light-beige text-base font-bold drop-shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-light-khaki sm:text-xl lg:w-1/4 xl:text-2xl"
          >
            NAJLEPSZE WYNIKI
          </button>
        </div>
      </div>
    </>
  );
}
