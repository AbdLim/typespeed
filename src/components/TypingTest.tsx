import { useState, useEffect, useCallback, useRef } from "react";
import { RotateCcw, Clock, Target, Zap, AlertCircle } from "lucide-react";
import { generateWords } from "../utils/wordGenerator";
import {
  calculateWPM,
  calculateAccuracy,
  formatTime,
} from "../utils/testCalculations";
import { TypingTestProps, TestState, TestResult } from "../types";

export const TypingTest: React.FC<TypingTestProps> = ({
  settings,
  onTestComplete,
}) => {
  // Test content and user input
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");

  // Test state management
  const [testState, setTestState] = useState<TestState>({
    isActive: false,
    isCompleted: false,
    startTime: null,
    currentIndex: 0,
    errors: 0,
    wpm: 0,
    accuracy: 100,
    timeLeft: settings.timeLimit,
  });

  // Timer and results
  const [elapsedTime, setElapsedTime] = useState(0);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // DOM reference for keyboard focus
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Resets the test to initial state with new text
   */
  const resetTest = useCallback(() => {
    try {
      const newText = generateWords(settings.wordCount);
      setText(newText);
      setUserInput("");
      setElapsedTime(0);
      setTestResult(null);
      setTestState({
        isActive: false,
        isCompleted: false,
        startTime: null,
        currentIndex: 0,
        errors: 0,
        wpm: 0,
        accuracy: 100,
        timeLeft: settings.timeLimit,
      });

      // Focus the container for keyboard events
      containerRef.current?.focus();
    } catch (error) {
      console.error("Error resetting test:", error);
    }
  }, [settings]);

  /**
   * Completes the test and calculates final results
   */
  const completeTest = useCallback(() => {
    if (testState.isCompleted) return;

    try {
      const correctChars = userInput
        .split("")
        .filter((char, index) => char === text[index]).length;
      const errors = userInput.length - correctChars;
      const timeSpent =
        settings.mode === "time" ? settings.timeLimit : elapsedTime || 1;

      const result: TestResult = {
        id: Date.now().toString(),
        wpm: calculateWPM(correctChars, timeSpent),
        accuracy: calculateAccuracy(correctChars, userInput.length),
        errors,
        totalChars: userInput.length,
        timeSpent,
        date: new Date(),
      };

      setTestResult(result);
      setTestState((prev) => ({
        ...prev,
        isCompleted: true,
        isActive: false,
      }));
      onTestComplete(result);
    } catch (error) {
      console.error("Error completing test:", error);
    }
  }, [
    testState.isCompleted,
    userInput,
    text,
    elapsedTime,
    settings.mode,
    settings.timeLimit,
    onTestComplete,
  ]);

  // Initialize test on mount and when settings change
  useEffect(() => {
    resetTest();
  }, [resetTest]);

  // Timer effect - updates every 100ms for smooth countdown
  useEffect(() => {
    let interval: number;

    if (testState.isActive && !testState.isCompleted && testState.startTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - testState.startTime!) / 1000);
        setElapsedTime(elapsed);

        const timeLeft =
          settings.mode === "time"
            ? Math.max(0, settings.timeLimit - elapsed)
            : settings.timeLimit;

        setTestState((prev) => ({
          ...prev,
          timeLeft,
        }));

        // Auto-complete when time runs out
        if (settings.mode === "time" && elapsed >= settings.timeLimit) {
          completeTest();
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [
    testState.isActive,
    testState.isCompleted,
    testState.startTime,
    settings.mode,
    settings.timeLimit,
    completeTest,
  ]);

  // Real-time WPM and accuracy calculation
  useEffect(() => {
    if (testState.isActive && userInput.length > 0) {
      const correctChars = userInput
        .split("")
        .filter((char, index) => char === text[index]).length;
      const timeInMinutes = Math.max(elapsedTime / 60, 1 / 60);

      const newWpm = Math.round(correctChars / 5 / timeInMinutes);
      const newAccuracy = Math.round((correctChars / userInput.length) * 100);

      setTestState((prev) => ({
        ...prev,
        wpm: newWpm,
        accuracy: newAccuracy,
      }));
    }
  }, [userInput, text, elapsedTime, testState.isActive]);

  /**
   * Handles keyboard input during the test
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (testState.isCompleted) return;

    // Prevent default behavior for most keys
    if (e.key !== "Tab" && e.key !== "F5" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }

    if (e.key === "Backspace") {
      if (userInput.length > 0) {
        const newInput = userInput.slice(0, -1);
        setUserInput(newInput);
      }
      return;
    }

    // Only accept printable characters
    if (e.key.length === 1) {
      const newInput = userInput + e.key;

      // Start test on first character
      if (!testState.isActive && newInput.length === 1) {
        setTestState((prev) => ({
          ...prev,
          isActive: true,
          startTime: Date.now(),
        }));
      }

      setUserInput(newInput);

      // Complete test when all words are typed (word mode)
      if (settings.mode === "words" && newInput.length === text.length) {
        setTimeout(() => completeTest(), 100);
      }
    }
  };

  /**
   * Renders the text with visual feedback for each character
   */
  const renderText = () => {
    return text.split("").map((char, index) => {
      let className = "text-xl font-mono ";

      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += "text-secondary bg-secondary/10 ";
        } else {
          className += "text-custom-error bg-custom-error/10 ";
        }
      } else if (index === userInput.length) {
        className += "text-on-background bg-primary/30 animate-pulse ";
      } else {
        className += "text-on-surface ";
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  /**
   * Gets the appropriate time display based on test mode
   */
  const getDisplayTime = () => {
    if (settings.mode === "time") {
      return testState.timeLeft;
    }
    return elapsedTime;
  };

  /**
   * Test completion analysis component
   */
  const TestAnalysis = () => {
    if (!testResult) return null;

    const wordsTyped = Math.floor(testResult.totalChars / 5);
    const correctWords = Math.floor(
      (testResult.totalChars - testResult.errors) / 5
    );

    return (
      <div className="bg-custom-surface rounded-xl p-8 mb-6 shadow-custom-elevated">
        <div className="text-center mb-8">
          <h2 className="text-headline1 text-on-background font-inter mb-2">
            Test Complete!
          </h2>
          <p className="text-body1 text-on-surface font-inter">
            Here's how you performed
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mx-auto mb-3">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-secondary font-inter">
              {testResult.wpm}
            </div>
            <div className="text-body2 text-on-surface font-inter">WPM</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-3">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary font-inter">
              {testResult.accuracy}%
            </div>
            <div className="text-body2 text-on-surface font-inter">
              Accuracy
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-custom-error/20 rounded-lg mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-custom-error" />
            </div>
            <div className="text-2xl font-bold text-custom-error font-inter">
              {testResult.errors}
            </div>
            <div className="text-body2 text-on-surface font-inter">Errors</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-on-surface/20 rounded-lg mx-auto mb-3">
              <Clock className="w-6 h-6 text-on-surface" />
            </div>
            <div className="text-2xl font-bold text-on-surface font-inter">
              {formatTime(testResult.timeSpent)}
            </div>
            <div className="text-body2 text-on-surface font-inter">Time</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-lg font-semibold text-on-background font-inter">
              {wordsTyped}
            </div>
            <div className="text-body2 text-on-surface font-inter">
              Words Typed
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-lg font-semibold text-on-background font-inter">
              {correctWords}
            </div>
            <div className="text-body2 text-on-surface font-inter">
              Correct Words
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-lg font-semibold text-on-background font-inter">
              {testResult.totalChars}
            </div>
            <div className="text-body2 text-on-surface font-inter">
              Characters
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Timer (only shown during active test) */}
      {testState.isActive && !testState.isCompleted && (
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 text-on-surface">
            <Clock className="w-6 h-6" />
            <span
              className={`text-2xl font-inter font-bold ${
                settings.mode === "time" &&
                testState.timeLeft <= 10 &&
                testState.isActive
                  ? "text-custom-error animate-pulse"
                  : ""
              }`}
            >
              {formatTime(getDisplayTime())}
            </span>
          </div>
        </div>
      )}

      {/* Test Analysis (shown after completion) */}
      {testState.isCompleted && <TestAnalysis />}

      {/* Test Area (hidden when completed) */}
      {!testState.isCompleted && (
        <div
          ref={containerRef}
          className="bg-custom-surface rounded-xl p-8 mb-6 shadow-custom-elevated focus:outline-none focus:ring-2 focus:ring-primary/50"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="text-center leading-relaxed min-h-[200px] max-w-4xl mx-auto flex items-center justify-center">
            <div style={{ fontSize: "1.5rem", lineHeight: "2.5rem" }}>
              {text ? (
                renderText()
              ) : (
                <div className="text-on-surface font-inter">
                  Loading text...
                </div>
              )}
            </div>
          </div>

          {!testState.isActive && (
            <div className="text-center mt-6">
              <p className="text-body1 text-on-surface font-inter opacity-75">
                Start typing to begin the test...
              </p>
            </div>
          )}
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={resetTest}
          className="flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary-variant text-on-primary rounded-lg font-inter font-semibold transition-colors duration-200 shadow-custom-default"
        >
          <RotateCcw className="w-5 h-5" />
          <span>{testState.isCompleted ? "Try Again" : "Reset Test"}</span>
        </button>
      </div>
    </div>
  );
};
