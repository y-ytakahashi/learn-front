import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue?: unknown) {
  const loadStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.warn(`#useLocalStorage: an error occurred loading the localstorage key "${key}"`);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(loadStoredValue);
  const setValue = (value: unknown) => {
    const valueToStore = typeof value === "function" ? value(storedValue) : value;
    setStoredValue(valueToStore);
  };

  useEffect(() => {
    setStoredValue(loadStoredValue);
  }, []);

  return [storedValue, setValue];
}
