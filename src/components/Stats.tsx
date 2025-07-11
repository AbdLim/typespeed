import React from "react";
import { TrendingUp, Target, Clock, BarChart3 } from "lucide-react";
import { TestResult } from "../types";

interface StatsProps {
    results: TestResult[];
}

export const Stats: React.FC<StatsProps> = ({ results }) => {
    const recentResults = results.slice(-10).reverse();
    const avgWPM =
        results.length > 0
            ? Math.round(
                  results.reduce((sum, r) => sum + r.wpm, 0) / results.length,
              )
            : 0;
    const avgAccuracy =
        results.length > 0
            ? Math.round(
                  results.reduce((sum, r) => sum + r.accuracy, 0) /
                      results.length,
              )
            : 0;
    const bestWPM =
        results.length > 0 ? Math.max(...results.map((r) => r.wpm)) : 0;
    const totalTests = results.length;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-headline1 text-on-background font-inter mb-8 text-center">
                Statistics
            </h2>

            {results.length === 0 ? (
                <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-on-surface mx-auto mb-4" />
                    <h3 className="text-headline2 text-on-background font-inter mb-2">
                        No Results Yet
                    </h3>
                    <p className="text-body1 text-on-surface font-inter">
                        Complete some typing tests to see your statistics here.
                    </p>
                </div>
            ) : (
                <div className="space-y-8">
                    {/* Overview Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-custom-surface rounded-xl p-6 text-center shadow-custom-elevated">
                            <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-on-background font-inter">
                                {avgWPM}
                            </div>
                            <div className="text-body2 text-on-surface font-inter">
                                Avg WPM
                            </div>
                        </div>
                        <div className="bg-custom-surface rounded-xl p-6 text-center shadow-custom-elevated">
                            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-on-background font-inter">
                                {avgAccuracy}%
                            </div>
                            <div className="text-body2 text-on-surface font-inter">
                                Avg Accuracy
                            </div>
                        </div>
                        <div className="bg-custom-surface rounded-xl p-6 text-center shadow-custom-elevated">
                            <BarChart3 className="w-8 h-8 text-secondary-variant mx-auto mb-2" />
                            <div className="text-2xl font-bold text-on-background font-inter">
                                {bestWPM}
                            </div>
                            <div className="text-body2 text-on-surface font-inter">
                                Best WPM
                            </div>
                        </div>
                        <div className="bg-custom-surface rounded-xl p-6 text-center shadow-custom-elevated">
                            <Clock className="w-8 h-8 text-on-surface mx-auto mb-2" />
                            <div className="text-2xl font-bold text-on-background font-inter">
                                {totalTests}
                            </div>
                            <div className="text-body2 text-on-surface font-inter">
                                Tests Completed
                            </div>
                        </div>
                    </div>

                    {/* Recent Results */}
                    <div className="bg-custom-surface rounded-xl p-6 shadow-custom-elevated">
                        <h3 className="text-headline2 text-on-background font-inter mb-6">
                            Recent Results
                        </h3>
                        <div className="space-y-3">
                            {recentResults.map((result) => (
                                <div
                                    key={result.id}
                                    className="flex items-center justify-between p-4 bg-slate-800 rounded-lg"
                                >
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-secondary font-inter">
                                                {result.wpm}
                                            </div>
                                            <div className="text-caption text-on-surface font-inter">
                                                WPM
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-primary font-inter">
                                                {result.accuracy}%
                                            </div>
                                            <div className="text-caption text-on-surface font-inter">
                                                Accuracy
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-on-surface font-inter">
                                                {result.errors}
                                            </div>
                                            <div className="text-caption text-on-surface font-inter">
                                                Errors
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-body2 text-on-surface font-inter">
                                        {result.date.toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Chart (Simple Bar Chart) */}
                    <div className="bg-custom-surface rounded-xl p-6 shadow-custom-elevated">
                        <h3 className="text-headline2 text-on-background font-inter mb-6">
                            WPM Progress
                        </h3>
                        <div className="h-48 flex items-end justify-between space-x-2">
                            {recentResults.map((result, index) => (
                                <div
                                    key={result.id}
                                    className="flex-1 flex flex-col items-center"
                                >
                                    <div
                                        className="w-full bg-primary rounded-t-sm transition-all duration-300 hover:bg-primary-variant"
                                        style={{
                                            height: `${
                                                (result.wpm /
                                                    Math.max(
                                                        ...recentResults.map(
                                                            (r) => r.wpm,
                                                        ),
                                                    )) *
                                                100
                                            }%`,
                                            minHeight: "8px",
                                        }}
                                    />
                                    <div className="text-caption text-on-surface font-inter mt-2">
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
