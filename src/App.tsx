import { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { TextArea } from "./components/TextArea";
import { CounterDisplay } from "./components/CounterDisplay";
import { PresetSelector } from "./components/PresetSelector";
import { ProgressBar } from "./components/ProgressBar";
import { ActionButtons } from "./components/ActionButtons";
import { Toast } from "./components/Toast";
import { NameSettingModal } from "./components/NameSettingModal";
import { useTextCounter } from "./hooks/useTextCounter";
import { useUserName } from "./hooks/useUserName";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [text, setText] = useState("");
  const [charLimit, setCharLimit] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showNameModal, setShowNameModal] = useState(false);

  const counts = useTextCounter(text);
  const { userName, updateUserName } = useUserName();
  const { isDark, toggleDarkMode } = useDarkMode();

  const handleShowToast = useCallback((message: string) => {
    setToastMessage(null);
    requestAnimationFrame(() => setToastMessage(message));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <Header
          userName={userName}
          onOpenSettings={() => setShowNameModal(true)}
        />

        <div className="space-y-5">
          <CounterDisplay counts={counts} />

          <PresetSelector
            selectedLimit={charLimit}
            onSelect={setCharLimit}
          />

          {charLimit !== null && (
            <ProgressBar current={counts.charsWithSpaces} max={charLimit} />
          )}

          <TextArea text={text} onChange={setText} />

          <ActionButtons
            text={text}
            onClear={() => setText("")}
            onShowToast={handleShowToast}
          />
        </div>

        <footer className="mt-10 text-center">
          <button
            onClick={() => setShowNameModal(true)}
            className="text-xs text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            名前を設定する
          </button>
        </footer>
      </div>

      {showNameModal && (
        <NameSettingModal
          currentName={userName}
          onSave={updateUserName}
          onClose={() => setShowNameModal(false)}
        />
      )}

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
