import { useState } from "react";

/**
 * Custom hook for managing localStorage with TypeScript support
 */

/**
 * Hook for managing localStorage with automatic JSON serialization/deserialization
 * 
 * @param key - The localStorage key to use
 * @param initialValue - The initial value if no value exists in localStorage
 * @returns A tuple with the current value and a setter function
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue] as const;
}

/**
 * Hook for managing localStorage with automatic JSON serialization/deserialization
 * Includes validation to ensure the stored value matches the expected type
 * 
 * @param key - The localStorage key to use
 * @param initialValue - The initial value if no value exists in localStorage
 * @param validator - Optional function to validate the stored value
 * @returns A tuple with the current value and a setter function
 */
export function useLocalStorageWithValidation<T>(
    key: string, 
    initialValue: T,
    validator?: (value: unknown) => value is T
) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (!item) return initialValue;
            
            const parsed = JSON.parse(item);
            
            // If validator is provided, use it to validate the parsed value
            if (validator && !validator(parsed)) {
                console.warn(`Invalid value found in localStorage for key "${key}", using initial value`);
                return initialValue;
            }
            
            return parsed;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue] as const;
}
