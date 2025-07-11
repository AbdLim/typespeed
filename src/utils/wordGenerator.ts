/**
 * Word generation utilities for typing tests
 */

/**
 * Common English words used for typing tests
 * Sourced from frequently used words in English language
 */
const commonWords = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
    "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
    "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
    "is", "water", "long", "find", "here", "thing", "great", "man", "world", "life",
    "still", "hand", "high", "right", "old", "tell", "try", "kind", "call", "came",
    "each", "part", "may", "again", "place", "where", "help", "put", "end", "why",
    "turn", "head", "keep", "ask", "last", "much", "need", "too", "feel", "three",
    "state", "never", "become", "between", "really", "something", "another", "much",
    "family", "own", "out", "leave", "public", "same", "under", "never", "open",
    "door", "not", "America", "where", "after", "back", "little", "only", "round",
    "man", "year", "came", "show", "every", "good", "me", "give", "our", "under",
    "name", "very", "through", "just", "form", "sentence", "great", "think", "say",
    "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move",
    "right", "boy", "old", "too", "any", "same", "tell", "does", "set", "three",
    "want", "air", "well", "also", "play", "small", "end", "put", "home", "read",
    "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big",
    "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light",
    "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point",
    "mother", "world", "near", "build", "self", "earth", "father"
];

/**
 * Generates a random sequence of words for typing tests
 * 
 * @param count - Number of words to generate
 * @returns Space-separated string of random words
 */
export const generateWords = (count: number): string => {
    if (count <= 0) {
        throw new Error("Word count must be greater than 0");
    }

    const words: string[] = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * commonWords.length);
        const word = commonWords[randomIndex];
        words.push(word);
    }

    return words.join(" ");
};

/**
 * Generates a single random word
 * 
 * @returns A random word from the common words list
 */
export const generateRandomWord = (): string => {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    return commonWords[randomIndex];
};

/**
 * Gets the total number of available words
 * 
 * @returns Number of words in the common words list
 */
export const getWordCount = (): number => {
    return commonWords.length;
};

/**
 * Validates if a word exists in the common words list
 * 
 * @param word - Word to check
 * @returns True if the word exists in the list
 */
export const isValidWord = (word: string): boolean => {
    return commonWords.includes(word.toLowerCase());
};
