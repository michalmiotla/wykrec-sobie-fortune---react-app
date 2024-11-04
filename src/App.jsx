import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { StartPanel } from "./components/StartPanel";
import { MainContainer } from "./components/MainContainer";
import { ResultsPanel } from "./components/ResultsPanel";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showResultsPanel, setShowResultsPanel] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("results") === null) {
      localStorage.setItem("results", "[]");
    }
  });

  return (
    <div className="relative flex h-full w-full justify-center font-poppins">
      <div className="absolute min-h-screen w-full min-w-[375px] bg-painted bg-cover bg-center">
        <div className="container relative mx-auto flex h-full min-h-screen flex-col items-center 2xl:max-w-[1280px]">
          <Logo />

          {!isGameStarted && !showResultsPanel && (
            <StartPanel
              setIsGameStarted={setIsGameStarted}
              setShowResultsPanel={setShowResultsPanel}
            />
          )}
          {isGameStarted && !showResultsPanel && (
            <MainContainer
              setShowResultsPanel={setShowResultsPanel}
              showResultsPanel={showResultsPanel}
              setIsGameStarted={setIsGameStarted}
            />
          )}
          {showResultsPanel && (
            <ResultsPanel
              setShowResultsPanel={setShowResultsPanel}
              setIsGameStarted={setIsGameStarted}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
