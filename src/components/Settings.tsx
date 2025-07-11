import React from "react";
import { TestSettings } from "../types";

interface SettingsProps {
    settings: TestSettings;
    onSettingsChange: (settings: TestSettings) => void;
}

export const Settings: React.FC<SettingsProps> = ({
    settings,
    onSettingsChange,
}) => {
    const updateSetting = <K extends keyof TestSettings>(
        key: K,
        value: TestSettings[K],
    ) => {
        onSettingsChange({ ...settings, [key]: value });
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h2 className="text-headline1 text-on-background font-inter mb-8 text-center">
                Settings
            </h2>

            <div className="space-y-8">
                {/* Test Mode */}
                <div className="bg-custom-surface rounded-xl p-6 shadow-custom-elevated">
                    <h3 className="text-headline2 text-on-background font-inter mb-4">
                        Test Mode
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => updateSetting("mode", "words")}
                            className={`p-4 rounded-lg font-inter font-medium transition-colors duration-200 ${
                                settings.mode === "words"
                                    ? "bg-primary text-on-primary"
                                    : "bg-slate-700 text-on-surface hover:bg-slate-600"
                            }`}
                        >
                            Word Count
                        </button>
                        <button
                            onClick={() => updateSetting("mode", "time")}
                            className={`p-4 rounded-lg font-inter font-medium transition-colors duration-200 ${
                                settings.mode === "time"
                                    ? "bg-primary text-on-primary"
                                    : "bg-slate-700 text-on-surface hover:bg-slate-600"
                            }`}
                        >
                            Time Limit
                        </button>
                    </div>
                </div>

                {/* Word Count */}
                {settings.mode === "words" && (
                    <div className="bg-custom-surface rounded-xl p-6 shadow-custom-elevated">
                        <h3 className="text-headline2 text-on-background font-inter mb-4">
                            Word Count
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                            {[25, 50, 100, 200].map((count) => (
                                <button
                                    key={count}
                                    onClick={() =>
                                        updateSetting("wordCount", count)
                                    }
                                    className={`p-3 rounded-lg font-inter font-medium transition-colors duration-200 ${
                                        settings.wordCount === count
                                            ? "bg-secondary text-on-secondary"
                                            : "bg-slate-700 text-on-surface hover:bg-slate-600"
                                    }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Time Limit */}
                {settings.mode === "time" && (
                    <div className="bg-custom-surface rounded-xl p-6 shadow-custom-elevated">
                        <h3 className="text-headline2 text-on-background font-inter mb-4">
                            Time Limit (seconds)
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                            {[30, 60, 120, 300].map((time) => (
                                <button
                                    key={time}
                                    onClick={() =>
                                        updateSetting("timeLimit", time)
                                    }
                                    className={`p-3 rounded-lg font-inter font-medium transition-colors duration-200 ${
                                        settings.timeLimit === time
                                            ? "bg-secondary text-on-secondary"
                                            : "bg-slate-700 text-on-surface hover:bg-slate-600"
                                    }`}
                                >
                                    {time < 60 ? `${time}s` : `${time / 60}m`}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Info */}
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-headline2 text-on-background font-inter mb-2">
                        How to Use
                    </h3>
                    <ul className="text-body2 text-on-surface font-inter space-y-1">
                        <li>• Choose your preferred test mode and settings</li>
                        <li>• Start typing to begin the test automatically</li>
                        <li>• Use backspace to correct mistakes</li>
                        <li>• Your progress is tracked in real-time</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
