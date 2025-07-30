import { useState } from "react";
import { Header } from "./components/Header";
import { TypingTest } from "./components/TypingTest";
import { Stats } from "./components/Stats";
import { Settings } from "./components/Settings";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TestSettings, TestResult } from "./types";
import { DEFAULT_TEST_SETTINGS, STORAGE_KEYS } from "./constants";

function App() {
  // Current screen state
  const [currentScreen, setCurrentScreen] = useState<
    "test" | "stats" | "settings"
  >("test");

  // Settings management with localStorage persistence
  const [settings, setSettings] = useLocalStorage<TestSettings>(
    STORAGE_KEYS.SETTINGS,
    DEFAULT_TEST_SETTINGS
  );

  // Results management with localStorage persistence
  const [results, setResults] = useLocalStorage<TestResult[]>(
    STORAGE_KEYS.RESULTS,
    []
  );

  /**
   * Handles test completion by adding the result to storage
   */
  const handleTestComplete = (result: TestResult) => {
    setResults((prev) => [...prev, result]);
  };

  /**
   * Handles settings changes by updating the stored settings
   */
  const handleSettingsChange = (newSettings: TestSettings) => {
    setSettings(newSettings);
  };

  /**
   * Handles screen navigation
   */
  const handleScreenChange = (screen: "test" | "stats" | "settings") => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-custom-bg text-on-background font-inter">
      <Header
        currentScreen={currentScreen}
        onScreenChange={handleScreenChange}
      />

      <main className="pb-8">
        {currentScreen === "test" && (
          <TypingTest settings={settings} onTestComplete={handleTestComplete} />
        )}

        {currentScreen === "stats" && <Stats results={results} />}

        {currentScreen === "settings" && (
          <Settings
            settings={settings}
            onSettingsChange={handleSettingsChange}
          />
        )}
      </main>
    </div>
  );
}

export default App;
