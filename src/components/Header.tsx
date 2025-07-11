import React from "react";
import { Keyboard } from "lucide-react";

interface HeaderProps {
    currentScreen: "test" | "stats" | "settings";
    onScreenChange: (screen: "test" | "stats" | "settings") => void;
}

export const Header: React.FC<HeaderProps> = ({
    currentScreen,
    onScreenChange,
}) => {
    return (
        <header className="bg-custom-surface border-b border-slate-700">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                            <Keyboard className="w-6 h-6 text-on-primary" />
                        </div>
                        <div>
                            <h1 className="text-headline2 text-on-background font-inter">
                                TypeSpeed
                            </h1>
                            <p className="text-caption text-on-surface">
                                Master your typing speed
                            </p>
                        </div>
                    </div>

                    <nav className="flex space-x-1 bg-slate-800 rounded-lg p-1">
                        {[
                            { key: "test", label: "Test" },
                            { key: "stats", label: "Stats" },
                            { key: "settings", label: "Settings" },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() =>
                                    onScreenChange(key as "test" | "settings")
                                }
                                className={`px-4 py-2 rounded-md text-body2 font-inter font-medium transition-all duration-200 ${
                                    currentScreen === key
                                        ? "bg-primary text-on-primary shadow-custom-default"
                                        : "text-on-surface hover:text-on-background hover:bg-slate-700"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};
