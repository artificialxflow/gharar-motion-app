export type TabType = 
  | 'roadmap' 
  | 'episodes' 
  | 'prompts' 
  | 'psychology' 
  | 'municipal' 
  | 'schools';

export interface CharacterProfile {
  id: string;
  nameFa: string;
  nameEn: string;
  roleFa: string;
  age: string;
  appearanceFa: string;
  attireFa: string;
  colorPalette: { name: string; hex: string; psychology: string }[];
  voiceNotesFa: string;
  referencePromptEn: string;
  avoidUncannyPromptEn: string;
}

export interface PromptTemplate {
  id: string;
  category: 'character' | 'flow_motion' | 'elevenlabs' | 'liveportrait' | 'studio';
  titleFa: string;
  tool: string;
  descriptionFa: string;
  promptText: string;
  negativePrompt?: string;
  suggestedSettings: Record<string, string | number>;
  tags: string[];
}

export interface EpisodeDialogue {
  speaker: 'arash' | 'maryam' | 'narrator';
  textFa: string;
  shotTypeFa: string;
  actingNoteFa: string;
  visualCueFa?: string;
}

export interface EpisodeItem {
  id: number;
  questionNumber: number;
  titleFa: string;
  coreQuestionFa: string;
  coreAnswerFa: string;
  behavioralHookFa: string;
  scenePromptEn: string;
  dialogues: EpisodeDialogue[];
  keyTakeawayFa: string;
  durationEstimate: string;
}

export interface BehavioralPrinciple {
  id: string;
  titleFa: string;
  subTitleFa: string;
  traditionalProblemFa: string;
  ghararSolutionFa: string;
  psychologicalMechanismFa: string;
  quoteFromAnalysisFa: string;
  iconName: string;
}

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  titleFa: string;
  toolFa: string;
  timelineFa: string;
  descriptionFa: string;
  deliverablesFa: string[];
  riskMitigationFa: string;
  techStack: string[];
}

export interface DistrictWasteData {
  districtName: string;
  cardboardKg: number;
  plasticKg: number;
  glassMetalKg: number;
  peakDay: string;
  fleetOptimizedPercent: number;
  trend: 'up' | 'down' | 'stable';
}
