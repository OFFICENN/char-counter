interface TextAreaProps {
  text: string;
  onChange: (text: string) => void;
}

export function TextArea({ text, onChange }: TextAreaProps) {
  return (
    <textarea
      value={text}
      onChange={(e) => onChange(e.target.value)}
      placeholder="ここにテキストを入力してください..."
      className="w-full h-64 sm:h-80 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base leading-relaxed font-sans"
      aria-label="テキスト入力エリア"
    />
  );
}
