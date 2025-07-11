/**
 * Utility functions for calculating typing test metrics
 */

/**
 * Calculates Words Per Minute (WPM) based on correct characters and time elapsed
 * 
 * @param correctChars - Number of correctly typed characters
 * @param timeElapsed - Time elapsed in seconds
 * @returns WPM rounded to the nearest integer
 */
export const calculateWPM = (
    correctChars: number,
    timeElapsed: number,
): number => {
    if (timeElapsed <= 0) return 0;
    
    // Standard WPM calculation: (correct characters / 5) / (time in minutes)
    // 5 characters is considered one "word" in typing tests
    const wordsTyped = correctChars / 5;
    const timeInMinutes = timeElapsed / 60;
    
    return Math.round(wordsTyped / timeInMinutes);
};

/**
 * Calculates typing accuracy percentage
 * 
 * @param correctChars - Number of correctly typed characters
 * @param totalChars - Total number of characters typed
 * @returns Accuracy percentage (0-100)
 */
export const calculateAccuracy = (
    correctChars: number,
    totalChars: number,
): number => {
    if (totalChars === 0) return 100;
    
    const accuracy = (correctChars / totalChars) * 100;
    return Math.round(accuracy);
};

/**
 * Formats seconds into a readable time string (MM:SS)
 * 
 * @param seconds - Time in seconds
 * @returns Formatted time string
 */
export const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};

/**
 * Calculates the average WPM from an array of test results
 * 
 * @param results - Array of test results
 * @returns Average WPM, or 0 if no results
 */
export const calculateAverageWPM = (results: Array<{ wpm: number }>): number => {
    if (results.length === 0) return 0;
    
    const totalWPM = results.reduce((sum, result) => sum + result.wpm, 0);
    return Math.round(totalWPM / results.length);
};

/**
 * Calculates the average accuracy from an array of test results
 * 
 * @param results - Array of test results
 * @returns Average accuracy percentage, or 0 if no results
 */
export const calculateAverageAccuracy = (results: Array<{ accuracy: number }>): number => {
    if (results.length === 0) return 0;
    
    const totalAccuracy = results.reduce((sum, result) => sum + result.accuracy, 0);
    return Math.round(totalAccuracy / results.length);
};

/**
 * Finds the best WPM from an array of test results
 * 
 * @param results - Array of test results
 * @returns Best WPM achieved, or 0 if no results
 */
export const findBestWPM = (results: Array<{ wpm: number }>): number => {
    if (results.length === 0) return 0;
    
    return Math.max(...results.map(result => result.wpm));
};
