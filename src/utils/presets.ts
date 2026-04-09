export interface Preset {
  label: string;
  maxLength: number;
}

export const presets: Preset[] = [
  { label: "Twitter", maxLength: 140 },
  { label: "Instagram キャプション", maxLength: 2200 },
  { label: "note 見出し", maxLength: 100 },
  { label: "メタディスクリプション", maxLength: 120 },
  { label: "ブログタイトル", maxLength: 32 },
];
