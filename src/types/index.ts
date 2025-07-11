/**
 * Core types for the TypeSpeed application
 */

/**
 * Represents a completed typing test result
 */
export interface TestResult {
  /** Unique identifier for the test result */
  id: string;
  /** Words per minute achieved */
  wpm: number;
  /** Accuracy percentage (0-100) */
  accuracy: number;
  /** Number of errors made during the test */
  errors: number;
  /** Total characters typed */
  totalChars: number;
  /** Time spent on the test in seconds */
  timeSpent: number;
  /** Date when the test was completed */
  date: Date;
}

/**
 * Configuration settings for typing tests
 */
export interface TestSettings {
  /** Number of words for word count mode */
  wordCount: number;
  /** Time limit in seconds for time mode */
  timeLimit: number;
  /** Test mode: word count or time limit */
  mode: "words" | "time";
}

/**
 * Status of individual characters during typing
 */
export interface CharStatus {
  /** The character itself */
  char: string;
  /** Current status of the character */
  status: "correct" | "incorrect" | "pending" | "extra";
  /** Position index of the character */
  index: number;
}

/**
 * Current state of an active typing test
 */
export interface TestState {
  /** Whether the test is currently active */
  isActive: boolean;
  /** Whether the test has been completed */
  isCompleted: boolean;
  /** Timestamp when the test started */
  startTime: number | null;
  /** Current character index being typed */
  currentIndex: number;
  /** Number of errors made so far */
  errors: number;
  /** Current WPM calculation */
  wpm: number;
  /** Current accuracy percentage */
  accuracy: number;
  /** Time remaining in seconds (for time mode) */
  timeLeft: number;
}

/**
 * Props for the TypingTest component
 */
export interface TypingTestProps {
  /** Test configuration settings */
  settings: TestSettings;
  /** Callback when test is completed */
  onTestComplete: (result: TestResult) => void;
}

/**
 * Props for the Stats component
 */
export interface StatsProps {
  /** Array of test results to display */
  results: TestResult[];
}

/**
 * Props for the Settings component
 */
export interface SettingsProps {
  /** Current settings configuration */
  settings: TestSettings;
  /** Callback when settings are changed */
  onSettingsChange: (settings: TestSettings) => void;
}

/**
 * Props for the Header component
 */
export interface HeaderProps {
  /** Currently active screen */
  currentScreen: "test" | "stats" | "settings";
  /** Callback when screen changes */
  onScreenChange: (screen: "test" | "stats" | "settings") => void;
}
