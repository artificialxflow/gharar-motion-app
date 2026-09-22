import React from 'react';
import { TabType } from '../types';
import { 
  GitBranch, 
  Film, 
  Sparkles, 
  BrainCircuit, 
  BarChart2, 
  GraduationCap, 
  Download,
  Share2,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenExport: () => void;
  completedStepsCount: number;
  totalStepsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenExport,
  completedStepsCount,
  totalStepsCount,
}) => {
  const tabs = [
    { id: 'roadmap' as TabType, labelFa: 'نقشه راه اجرایی', icon: GitBranch },
    { id: 'episodes' as TabType, labelFa: 'استودیوی ۱۰ سناریو', icon: Film },
    { id: 'prompts' as TabType, labelFa: 'بانک پرامپت‌های AI', icon: Sparkles },
    { id: 'psychology' as TabType, labelFa: 'روانشناسی و اقتصاد رفتاری', icon: BrainCircuit },
    { id: 'municipal' as TabType, labelFa: 'داشبورد کلان شهرداری', icon: BarChart2 },
    { id: 'schools' as TabType, labelFa: 'مدارس و نسل پایه', icon: GraduationCap },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with branding and actions */}
        <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  کمپین موشن و هوش مصنوعی «قرار»
                </h1>
                <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                  نسخه استودیو تولید
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                نقشه راه جامع، پرامپت‌های Google Flow و میدجرنی، سناریوی ۱۰ قسمتی و مهندسی رفتار
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Progress Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>پیشرفت تولید:</span>
              <span className="font-bold text-slate-900 font-mono">
                {completedStepsCount} / {totalStepsCount} مرحله
              </span>
            </div>

            {/* Export button */}
            <button
              id="export-roadmap-btn"
              onClick={onOpenExport}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>خروجی و کپی تمام پرامپت‌ها</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 space-x-reverse overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300/80 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{tab.labelFa}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
