/**
 * Debouce a function passed as param at the inputed time or 300ms
 * @param key A unique key so we don't cancel others by mistake
 * @param callback The function to call
 * @param time Time to wait before calling the function
 *
 * @example debounce("my-component-debounced-callback", () => console.log("hello1"))
 * @example debounce("my-component-debounced-callback", () => console.log("hello1"), 1000)
 */
export declare const debounce: (key: string, callback: () => void, time?: number) => void;
