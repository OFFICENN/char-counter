interface ProgressBarProps {
  current: number;
  max: number;
}

export function ProgressBar({ current, max }: ProgressBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  const isOver = current > max;
  const remaining = max - current;

  return (
    <div className="space-y-1">
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-200 ${
            isOver
              ? "bg-red-500"
              : percentage > 80
                ? "bg-yellow-500"
                : "bg-blue-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          {current.toLocaleString()} / {max.toLocaleString()} 文字
        </span>
        <span
          className={`font-medium ${
            isOver ? "text-red-500" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {isOver
            ? `${(current - max).toLocaleString()} 文字オーバー`
            : `残り ${remaining.toLocaleString()} 文字`}
        </span>
      </div>
    </div>
  );
}
