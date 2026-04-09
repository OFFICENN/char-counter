import { useMemo } from "react";

export interface CountResult {
  charsWithSpaces: number;
  charsWithoutSpaces: number;
  words: number;
  lines: number;
  paragraphs: number;
}

export function useTextCounter(text: string): CountResult {
  return useMemo(() => {
    if (text.length === 0) {
      return {
        charsWithSpaces: 0,
        charsWithoutSpaces: 0,
        words: 0,
        lines: 0,
        paragraphs: 0,
      };
    }

    const charsWithSpaces = [...text].length;
    const charsWithoutSpaces = [...text.replace(/\s/g, "")].length;

    const words = text
      .trim()
      .split(/[\s\u3000]+/)
      .filter((w) => w.length > 0).length;

    const lines = text.split("\n").length;

    const paragraphs = text
      .split(/\n\s*\n/)
      .filter((p) => p.trim().length > 0).length;

    return { charsWithSpaces, charsWithoutSpaces, words, lines, paragraphs };
  }, [text]);
}
