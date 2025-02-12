export function prettifyLanguage(text: string): string {
  const mapping: Record<string, string> = {
    "Language.ENGLISH": "English",
    "Language.SLOVAK": "Slovak",
  };

  return mapping[text] || text;
}