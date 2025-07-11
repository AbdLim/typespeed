/**
 * Application constants and configuration
 */

/**
 * Default test settings
 */
export const DEFAULT_TEST_SETTINGS = {
    wordCount: 50,
    timeLimit: 60,
    includeNumbers: false,
    includePunctuation: false,
    mode: "words" as const,
} as const;

/**
 * Available word count options
 */
export const WORD_COUNT_OPTIONS = [25, 50, 100, 200] as const;

/**
 * Available time limit options (in seconds)
 */
export const TIME_LIMIT_OPTIONS = [30, 60, 120, 300] as const;

/**
 * Test modes
 */
export const TEST_MODES = {
    WORDS: "words",
    TIME: "time",
} as const;

/**
 * Character status types
 */
export const CHAR_STATUS = {
    CORRECT: "correct",
    INCORRECT: "incorrect",
    PENDING: "pending",
    EXTRA: "extra",
} as const;

/**
 * Application screens
 */
export const SCREENS = {
    TEST: "test",
    STATS: "stats",
    SETTINGS: "settings",
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
    SETTINGS: "typingTestSettings",
    RESULTS: "typingTestResults",
} as const;

/**
 * Timer configuration
 */
export const TIMER_CONFIG = {
    UPDATE_INTERVAL: 100, // milliseconds
    WARNING_THRESHOLD: 10, // seconds
} as const;

/**
 * WPM calculation constants
 */
export const WPM_CONFIG = {
    CHARS_PER_WORD: 5,
    MIN_TIME_MINUTES: 1 / 60, // 1 second minimum
} as const;

/**
 * UI configuration
 */
export const UI_CONFIG = {
    MAX_RECENT_RESULTS: 10,
    MIN_TEXT_HEIGHT: 200,
    FONT_SIZE: "1.5rem",
    LINE_HEIGHT: "2.5rem",
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
    INVALID_WORD_COUNT: "Word count must be greater than 0",
    TEST_RESET_ERROR: "Error resetting test",
    TEST_COMPLETE_ERROR: "Error completing test",
    STORAGE_READ_ERROR: "Error reading localStorage key",
    STORAGE_WRITE_ERROR: "Error setting localStorage key",
} as const; 