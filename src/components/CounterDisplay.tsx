import type { CountResult } from "../hooks/useTextCounter";

interface CounterDisplayProps {
  counts: CountResult;
}

const items: { key: keyof CountResult; label: string }[] = [
  { key: "charsWithSpaces", label: "文字数（スペース含む）" },
  { key: "charsWithoutSpaces", label: "文字数（スペース除く）" },
  { key: "words", label: "単語数" },
  { key: "lines", label: "行数" },
  { key: "paragraphs", label: "段落数" },
];

export function CounterDisplay({ counts }: CounterDisplayProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {items.map(({ key, label }) => (
        <div
          key={key}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center"
        >
          <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
            {counts[key].toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
