interface HeaderProps {
  userName: string;
  onOpenSettings: () => void;
}

export function Header({ userName, onOpenSettings }: HeaderProps) {
  return (
    <header className="text-center py-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
        {userName ? `${userName}さんの` : ""}文字カウンター
      </h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        テキストを入力すると、リアルタイムで文字数をカウントします
      </p>
      {userName && (
        <button
          onClick={onOpenSettings}
          className="mt-1 text-xs text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          名前を変更
        </button>
      )}
    </header>
  );
}
