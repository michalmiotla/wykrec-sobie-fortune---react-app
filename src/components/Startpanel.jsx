import { Results } from './Results'

export function StartPanel({ setIsGameStarted, setShowResultsPanel, showResultsPanel }) {
	return (
		<>
			<div className='w-full flex flex-col items-center justify-around  p-8  drop-shadow-xl'>
				<div className='flex flex-col items-center justify-center'>
					<p className='font-bold text-base text-center sm:text-xl xl:text-2xl'>
						WITAJ W GRZE <q>WYKRĘĆ SOBIE FORTUNĘ!</q>
					</p>
					<p className='text-center text-base sm:text-xl xl:text-2xl py-2'>ZASADY GRY:</p>
					<div className='text-[10px] sm:text-sm lg:text-base'>
						<ul className='list-disc py-10'>
							<li className=' py-1'>
								Gra wzorowana jest na teleturnieju
								<q>
									<b>Koło Fortuny</b>
								</q>
								. Celem gry jest zdobycie jak najwyższej wygranej, poprzez odkrywanie ukrytych liter w hasłach i
								odgadywaniu ich w całości.
							</li>
							<li className='py-1'>
								Rozgrywka składa się z <b>trzech rund</b>, każda z nich może trwać <b>maksymalnie trzy minuty</b>.
								Kolejka rozpoczyna się od zakręcenia kołem, na którym znajdują się pola z pięniędzmi (od 100 do 1000
								złotych) oraz pole
								<q>
									<b>Bankrut</b>
								</q>
								które sprawia, że gracz traci wszystkie uzbierane dotychczas w tej rundzie pieniądze.
							</li>
							<li className='py-1'>
								Po zakręceniu kołem gracz ma za zadanie wytypować <b>spółgłoskę</b>, która według niego znajduje się w
								haśle. Jeśli trafi, na jego konto trafia wylosowana kwota. Jeśli spółgłoska pojawia się w haśle
								wielokrotnie, nagorda zostaje wielokrotnie pomnożona.
							</li>
							<li className='py-1'>
								Po wytypowaniu spółgłoski gracz ma prawo dalej kręcić kołem i odgadywać kolejne spółgłoski, by ułatwić
								sobie drogę do odgadnięcia hasła, ryzykując jednak trafieniem na <q>Bankruta</q>, kupić
								<b> samogłoskę</b> za <b>400 złotych</b>, co może znacząco ułatwić odgadnięcie hasła, ale wpływa
								negatywnie na końcowy wynik rundy, lub próbować odgadnąć hasło.
							</li>
							<li className='py-1'>
								Im szybciej gracz wytypuje prawidłową odpowiedź, wpisując ją w całości w dedykowanym oknie, tym wyższy
								<b> bonus</b> dostanie na koniec rundy (pierwsza minuta rundy to 3000 złotych bonusu, druga - 2000 zł,
								trzecia - 1000 zł) .
							</li>
							<li className='py-1'>
								By zdobyć jak najwyższą wygraną, gracz musi polegać na wiedzy, spostrzegawczości, szybkości i odrobinie
								szczęścia. <b>POWODZENIA!</b>
							</li>
						</ul>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row items-center justify-center w-full gap-2'>
					<button
						onClick={() => setIsGameStarted(true)}
						className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '>
						ZACZNIJ GRĘ!
					</button>
					<button
						onClick={() => setShowResultsPanel(true)}
						className='w-1/2 lg:w-1/4 bg-light-beige hover:bg-light-khaki rounded-full border-2 border-black drop-shadow-xl aspect-[100/15] text-base sm:text-xl xl:text-2xl font-bold hover:cursor-pointer transition-colors duration-300 '>
						NAJLEPSZE WYNIKI
					</button>
				</div>
			</div>
			{showResultsPanel && <Results setShowResultsPanel={setShowResultsPanel} />}
		</>
	)
}
