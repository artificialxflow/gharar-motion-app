import React, { useState, useEffect } from 'react';
import { EPISODES } from '../data/campaignData';
import { EpisodeItem } from '../types';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Film, 
  Video, 
  Clock, 
  Sparkles, 
  User, 
  ChevronRight, 
  ChevronLeft,
  Volume2,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const EpisodeStudioTab: React.FC = () => {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  
  // Teleprompter / Rehearsal player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(3500); // ms per line

  const currentEpisode = EPISODES.find(e => e.id === selectedEpisodeId) || EPISODES[0];

  // Auto step through dialogues when playing
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (activeDialogueIndex < currentEpisode.dialogues.length - 1) {
          setActiveDialogueIndex(prev => prev + 1);
        } else {
          setIsPlaying(false);
          setActiveDialogueIndex(0);
        }
      }, playbackSpeed);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeDialogueIndex, currentEpisode.dialogues.length, playbackSpeed]);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getFullScriptText = (ep: EpisodeItem) => {
    let out = `سناریوی قسمت ${ep.questionNumber}: ${ep.titleFa}\n`;
    out += `سوال کلیدی: ${ep.coreQuestionFa}\n`;
    out += `پاسخ محوری: ${ep.coreAnswerFa}\n`;
    out += `قلاب رفتاری: ${ep.behavioralHookFa}\n\n`;
    out += `--- دیالوگ‌ها ---\n`;
    ep.dialogues.forEach((d) => {
      const spk = d.speaker === 'arash' ? 'آرش' : d.speaker === 'maryam' ? 'مریم' : 'راوی';
      out += `[${spk}] (${d.shotTypeFa}): ${d.textFa}\n(نکته بازی: ${d.actingNoteFa})\n\n`;
    });
    return out;
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Switcher */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-slate-900">
                استودیوی سناریوی ۱۰ قسمتی کمپین «قرار»
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              متن کامل دیالوگ‌ها، دستورات بازیگری، زوایای دوربین برای Google Flow و نکات روانشناسی رفتار
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(getFullScriptText(currentEpisode), 'full-script')}
              className="flex items-center gap-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer"
            >
              {copiedType === 'full-script' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">سناریو کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>کپی متن کامل قسمت {currentEpisode.questionNumber}</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleCopy(currentEpisode.scenePromptEn, 'scene-prompt')}
              className="flex items-center gap-1.5 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium px-3 py-2 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
            >
              {copiedType === 'scene-prompt' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">پرامپت صحنه کپی شد!</span>
                </>
              ) : (
                <>
                  <Video className="w-3.5 h-3.5 text-emerald-600" />
                  <span>کپی پرامپت موشن (Google Flow)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 10 Episodes Numbered Pills Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {EPISODES.map((ep) => {
            const isSelected = ep.id === selectedEpisodeId;
            return (
              <button
                key={ep.id}
                id={`btn-ep-${ep.id}`}
                onClick={() => {
                  setSelectedEpisodeId(ep.id);
                  setActiveDialogueIndex(0);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                  {ep.questionNumber}
                </span>
                <span>{ep.titleFa}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Episode Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Main Column: Script & Interactive Teleprompter */}
        <div className="lg:col-span-8 space-y-5">
          {/* Episode Core Header Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md">
                    قسمت {currentEpisode.questionNumber} از ۱۰
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    مدت تقریبی: {currentEpisode.durationEstimate}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {currentEpisode.coreQuestionFa}
                </h3>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1">
                <button
                  disabled={selectedEpisodeId <= 1}
                  onClick={() => {
                    setSelectedEpisodeId(prev => Math.max(1, prev - 1));
                    setActiveDialogueIndex(0);
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="قسمت قبلی"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  disabled={selectedEpisodeId >= 10}
                  onClick={() => {
                    setSelectedEpisodeId(prev => Math.min(10, prev + 1));
                    setActiveDialogueIndex(0);
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="قسمت بعدی"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Official Answer Box */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3.5">
              <span className="text-xs font-bold text-emerald-900 block mb-1">
                پاسخ استاندارد و محوری کمپین:
              </span>
              <p className="text-sm text-emerald-950 font-medium leading-relaxed">
                {currentEpisode.coreAnswerFa}
              </p>
            </div>
          </div>

          {/* Dialogues List with Teleprompter Player */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-emerald-600" />
                <h4 className="text-base font-bold text-slate-900">
                  متن دیالوگ‌ها و نمای بازیگری
                </h4>
              </div>

              {/* Rehearsal Controls */}
              <div className="flex items-center gap-2">
                <button
                  id="toggle-teleprompter-play"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-500 text-white shadow-xs hover:bg-amber-600'
                      : 'bg-emerald-600 text-white shadow-xs hover:bg-emerald-700'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>توقف تمرین</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>شبیه‌ساز خوانش (تله‌پرامپتر)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveDialogueIndex(0);
                  }}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="شروع مجدد دیالوگ‌ها"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dialogues list */}
            <div className="space-y-3.5">
              {currentEpisode.dialogues.map((d, index) => {
                const isArash = d.speaker === 'arash';
                const isCurrentActive = isPlaying && activeDialogueIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveDialogueIndex(index)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isCurrentActive
                        ? 'border-emerald-500 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-400/20'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    {/* Speaker & Shot Type Meta */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-2xs ${
                            isArash ? 'bg-emerald-600' : 'bg-slate-800'
                          }`}
                        >
                          {isArash ? 'آ' : 'م'}
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          {isArash ? 'آرش (کارشناس)' : 'مریم (مدیر آگاهی)'}
                        </span>
                        <span className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                          {d.shotTypeFa}
                        </span>
                      </div>

                      {isCurrentActive && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          در حال ادای سخن
                        </span>
                      )}
                    </div>

                    {/* Dialogue Line Text */}
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      «{d.textFa}»
                    </p>

                    {/* Acting / Directing Note */}
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-start gap-1.5 text-xs text-slate-500">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-700">راهنمای بازیگری و میمیک: </strong>
                        {d.actingNoteFa}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Behavioral Hook & Cinematic Prompt */}
        <div className="lg:col-span-4 space-y-5">
          {/* Behavioral Psychology Hook */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>قلاب روانشناسی و اقتصاد رفتاری</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/60 p-3 rounded-lg border border-amber-200/70">
              {currentEpisode.behavioralHookFa}
            </p>
            <div className="text-xs text-slate-500 pt-1">
              <strong className="text-slate-700 block mb-1">پیام کلیدی (Takeaway):</strong>
              <p className="leading-relaxed">{currentEpisode.keyTakeawayFa}</p>
            </div>
          </div>

          {/* Cinematic Scene Prompt (English for Google Flow / Runway) */}
          <div className="bg-slate-900 rounded-xl p-5 text-white shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-200">
                  پرامپت حرکت دوربین در Google Flow
                </span>
              </div>
              <button
                onClick={() => handleCopy(currentEpisode.scenePromptEn, 'sidebar-prompt')}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                {copiedType === 'sidebar-prompt' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>کپی پرامپت</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed text-left dir-ltr select-all">
              {currentEpisode.scenePromptEn}
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>پیوستگی فریم‌های شروع و پایان تضمین شده است.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
