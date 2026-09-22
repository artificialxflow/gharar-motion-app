import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { ROADMAP_STEPS } from './data/campaignData';
import { Header } from './components/Header';
import { RoadmapTab } from './components/RoadmapTab';
import { EpisodeStudioTab } from './components/EpisodeStudioTab';
import { PromptVaultTab } from './components/PromptVaultTab';
import { BehavioralMatrixTab } from './components/BehavioralMatrixTab';
import { MunicipalSimulatorTab } from './components/MunicipalSimulatorTab';
import { KidsCampaignTab } from './components/KidsCampaignTab';
import { ExportModal } from './components/ExportModal';
import { 
  Sparkles, 
  Heart, 
  ExternalLink,
  Layers,
  Leaf
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('roadmap');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  // Completed steps tracker persisted in local state
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('gharar_completed_steps');
      return saved ? JSON.parse(saved) : { 'step-1': true };
    } catch {
      return { 'step-1': true };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gharar_completed_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
  }, [completedSteps]);

  const toggleStepCompletion = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const completedStepsCount = Object.values(completedSteps).filter(Boolean).length;
  const totalStepsCount = ROADMAP_STEPS.length;

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col selection:bg-emerald-500 selection:text-white font-sans text-slate-800" dir="rtl">
      {/* Sticky Header with Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExport={() => setIsExportOpen(true)}
        completedStepsCount={completedStepsCount}
        totalStepsCount={totalStepsCount}
      />

      {/* Main Tab Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'roadmap' && (
          <RoadmapTab
            completedSteps={completedSteps}
            toggleStepCompletion={toggleStepCompletion}
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'episodes' && (
          <EpisodeStudioTab />
        )}

        {activeTab === 'prompts' && (
          <PromptVaultTab />
        )}

        {activeTab === 'psychology' && (
          <BehavioralMatrixTab />
        )}

        {activeTab === 'municipal' && (
          <MunicipalSimulatorTab />
        )}

        {activeTab === 'schools' && (
          <KidsCampaignTab />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-800">سامانه هوشمند تفکیک پسماند «قرار»</span>
            <span>—</span>
            <span>معماری تولید موشن با AI، Google Flow و اقتصاد رفتاری</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>آرش و مریم (مجریان مجازی)</span>
            <span>•</span>
            <span>۱۰ قسمت سناریو رسمی</span>
            <span>•</span>
            <button
              onClick={() => setIsExportOpen(true)}
              className="text-emerald-700 hover:text-emerald-800 font-medium cursor-pointer"
            >
              دریافت نسخه چاپی / متنی
            </button>
          </div>
        </div>
      </footer>

      {/* Export Markdown Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
