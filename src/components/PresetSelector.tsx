import { useState } from "react";
import { presets } from "../utils/presets";

interface PresetSelectorProps {
  selectedLimit: number | null;
  onSelect: (limit: number | null) => void;
}

export function PresetSelector({ selectedLimit, onSelect }: PresetSelectorProps) {
  const [customValue, setCustomValue] = useState("");

  const handleCustom = () => {
    const num = parseInt(customValue, 10);
    if (num > 0) onSelect(num);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        文字数制限:
      </span>
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          selectedLimit === null
            ? "bg-blue-600 text-white shadow-sm"
            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        なし
      </button>
      {presets.map((preset) => (
        <button
          key={preset.label}
          onClick={() => onSelect(preset.maxLength)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            selectedLimit === preset.maxLength
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {preset.label}
          <span className="ml-1 opacity-60">({preset.maxLength})</span>
        </button>
      ))}
      <div className="flex items-center gap-1">
        <input
          type="number"
          min="1"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCustom()}
          placeholder="カスタム"
          className="w-24 px-2 py-1.5 rounded-lg text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCustom}
          className="px-2 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          設定
        </button>
      </div>
    </div>
  );
}
