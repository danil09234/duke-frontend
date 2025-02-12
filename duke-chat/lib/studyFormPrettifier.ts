export function prettifyStudyForm(text: string): string {
    const mapping: Record<string, string> = {
      "StudyForm.PRESENT": "Present",
      "StudyForm.EXTERNAL": "External",
    };
  
    return mapping[text] || text;
  }