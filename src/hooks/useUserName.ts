import { useState, useEffect } from "react";

const STORAGE_KEY = "char-counter-username";

export function useUserName() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get("name");

    if (nameFromUrl) {
      setUserName(nameFromUrl);
      localStorage.setItem(STORAGE_KEY, nameFromUrl);
    } else {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUserName(stored);
    }
  }, []);

  const updateUserName = (name: string) => {
    setUserName(name);
    if (name) {
      localStorage.setItem(STORAGE_KEY, name);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return { userName, updateUserName };
}
