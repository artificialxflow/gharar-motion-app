import React, { useState } from 'react';
import { ROADMAP_STEPS, CHARACTERS } from '../data/campaignData';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Wrench, 
  ShieldAlert, 
  User, 
  Palette, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Layers,
  ArrowLeft
} from 'lucide-react';

interface RoadmapTabProps {
  completedSteps: Record<string, boolean>;
  toggleStepCompletion: (stepId: string) => void;
  onNavigateToTab: (tab: any) => void;
}

export const RoadmapTab: React.FC<RoadmapTabProps> = ({
  completedSteps,
  toggleStepCompletion,
  onNavigateToTab,
}) => {
  const [expandedStep, setExpandedStep] = useState<string>(ROADMAP_STEPS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="bg-gradient-to-l from-slate-900 via-slate-800 to-emerald-950 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs px-3 py-1 rounded-full font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معماری تولید هوش مصنوعی + اقتصاد رفتاری</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white mb-2">
            نقشه راه ۸ مرحله‌ای تولید کمپین چندقسمتی «قرار»
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            راهنمای عملیاتی و دقیق برای پیاده‌سازی ویدیوهای یکدست با Google Flow، حفظ ثبات چهره مجریان (آرش و مریم)، دوبله احساسی ElevenLabs و همگام‌سازی با سامانه تفکیک پسماند شهری.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-slate-400 ml-1">ابزار اصلی تصویر:</span>
              <span className="text-emerald-300 font-semibold">Midjourney & Nano Banana</span>
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-slate-400 ml-1">موتور متحرک‌سازی:</span>
              <span className="text-emerald-300 font-semibold">Google Flow (Start/End Lock)</span>
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-slate-400 ml-1">سنتز و میمیک:</span>
              <span className="text-emerald-300 font-semibold">ElevenLabs & LivePortrait</span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Identity Cards (Arash & Maryam) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-600" />
              <span>هویت مجریان مجازی (شناسنامه آرش و مریم)</span>
            </h3>
            <p className="text-xs text-slate-500">
              طراحی با استراتژی گریز از دره وهم‌انگیز (Uncanny Valley) و انتخاب رنگ‌های نمادین
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('prompts')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>مشاهده پرامپت‌های کامل</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CHARACTERS.map((char) => (
            <div 
              key={char.id} 
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{char.nameFa}</h4>
                      <span className="text-xs font-mono text-slate-400">({char.nameEn})</span>
                      <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                        {char.age}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-700 font-medium mt-0.5">{char.roleFa}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <User className="w-5 h-5 text-slate-600" />
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">ویژگی‌های ظاهری و روانی:</span>
                    <p className="leading-relaxed">{char.appearanceFa}</p>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">پوشش و لباس فرم:</span>
                    <p className="leading-relaxed">{char.attireFa}</p>
                  </div>

                  {/* Color Swatches */}
                  <div>
                    <span className="font-semibold text-slate-800 text-[11px] block mb-1.5 flex items-center gap-1">
                      <Palette className="w-3 h-3 text-slate-500" />
                      روانشناسی پالت رنگی:
                    </span>
                    <div className="space-y-1.5">
                      {char.colorPalette.map((cp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] bg-white p-1.5 rounded border border-slate-100">
                          <span 
                            className="w-4 h-4 rounded-full shrink-0 border border-slate-300 shadow-2xs" 
                            style={{ backgroundColor: cp.hex }}
                          />
                          <span className="font-medium text-slate-900 shrink-0">{cp.name}:</span>
                          <span className="text-slate-500 truncate">{cp.psychology}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">لحن صدا: {char.voiceNotesFa.split('،')[0]}</span>
                <button
                  onClick={() => handleCopy(char.referencePromptEn, `char-${char.id}`)}
                  className="flex items-center gap-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                >
                  {copiedId === `char-${char.id}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>کپی پرامپت چهره</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8-Step Production Roadmap Interactive Timeline */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>مراحل گام‌به‌گام پایپ‌لاین تولید (Roadmap Checklist)</span>
            </h3>
            <p className="text-xs text-slate-500">
              روی هر مرحله کلیک کنید تا جزئیات فنی، ریسک‌ها و خروجی‌ها را بررسی نمایید. می‌توانید هر مرحله را تیک بزنید.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {ROADMAP_STEPS.map((step) => {
            const isCompleted = !!completedSteps[step.id];
            const isExpanded = expandedStep === step.id;

            return (
              <div
                key={step.id}
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  isCompleted 
                    ? 'border-emerald-300 bg-emerald-50/20' 
                    : isExpanded 
                    ? 'border-slate-300 shadow-xs' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header of Step Card */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setExpandedStep(isExpanded ? '' : step.id)}
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <button
                      id={`check-step-${step.stepNumber}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStepCompletion(step.id);
                      }}
                      className="shrink-0 p-1 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                      title={isCompleted ? 'علامت‌گذاری به عنوان در حال انجام' : 'علامت‌گذاری به عنوان تکمیل شده'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 hover:text-slate-400" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          فاز {step.stepNumber}
                        </span>
                        <h4 className={`text-sm sm:text-base font-bold truncate ${isCompleted ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {step.titleFa}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Wrench className="w-3 h-3 text-slate-400" />
                          {step.toolFa}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {step.timelineFa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 mr-2">
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {isExpanded ? 'بستن' : 'مشاهده جزئیات'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs text-slate-600 space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {step.descriptionFa}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      {/* Deliverables */}
                      <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/70">
                        <span className="font-bold text-slate-800 text-xs block mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          خروجی‌ها و دستاوردها (Deliverables):
                        </span>
                        <ul className="space-y-1.5 list-disc list-inside text-slate-600 pr-1">
                          {step.deliverablesFa.map((d, i) => (
                            <li key={i} className="leading-relaxed">{d}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Risk Mitigation */}
                      <div className="bg-amber-50/60 rounded-lg p-3.5 border border-amber-200/80">
                        <span className="font-bold text-amber-900 text-xs block mb-2 flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4 text-amber-600" />
                          مدیریت ریسک فنی و روانشناختی:
                        </span>
                        <p className="text-amber-800 leading-relaxed">
                          {step.riskMitigationFa}
                        </p>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="text-slate-400 font-medium">ابزارهای این فاز:</span>
                      {step.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-mono font-medium border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
