import React, { useState } from 'react';
import { PROMPTS_VAULT } from '../data/campaignData';
import { PromptTemplate } from '../types';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Filter, 
  Wrench, 
  Sliders, 
  Camera, 
  Mic, 
  Smile, 
  Video, 
  Box
} from 'lucide-react';

export const PromptVaultTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Interactive Prompt Generator State
  const [builderCharacter, setBuilderCharacter] = useState<'arash' | 'maryam' | 'both'>('both');
  const [builderShotType, setBuilderShotType] = useState<'medium' | 'close-up' | 'over-shoulder'>('medium');
  const [builderTargetTool, setBuilderTargetTool] = useState<'google_flow' | 'midjourney' | 'elevenlabs'>('google_flow');
  const [builderAction, setBuilderAction] = useState<string>('talking_explaining');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = [
    { id: 'all', labelFa: 'همه پرامپت‌ها', icon: Filter },
    { id: 'character', labelFa: 'پرتره و لنگر بصری (Midjourney)', icon: Camera },
    { id: 'flow_motion', labelFa: 'متحرک‌سازی (Google Flow)', icon: Video },
    { id: 'elevenlabs', labelFa: 'صداسازی (ElevenLabs)', icon: Mic },
    { id: 'liveportrait', labelFa: 'لب‌سینک (LivePortrait)', icon: Smile },
    { id: 'studio', labelFa: 'دکور و سطل‌های شفاف', icon: Box },
  ];

  const filteredPrompts = selectedCategory === 'all' 
    ? PROMPTS_VAULT 
    : PROMPTS_VAULT.filter(p => p.category === selectedCategory);

  // Dynamically constructed custom prompt based on user's builder selections
  const generateCustomPrompt = () => {
    if (builderTargetTool === 'elevenlabs') {
      if (builderCharacter === 'arash') {
        return 'Warm, conversational Iranian male voice, 32 years old, friendly urban Persian accent, encouraging cadence, 50% conversational warmth, 50% professional advisory authority, natural breathing pauses.';
      } else {
        return 'Dignified, articulate Iranian female voice, early 30s, clear and composed Persian pronunciation, warm institutional trust, reassuring rhythm, confident delivery.';
      }
    }

    if (builderTargetTool === 'midjourney') {
      const subject = builderCharacter === 'arash' 
        ? 'Iranian male environmental host Arash, 32 years old, wearing emerald green knit polo shirt with dark navy accents, warm genuine smile'
        : builderCharacter === 'maryam'
        ? 'Iranian female environmental expert Maryam, 30 years old, wearing tailored dark navy blazer and soft pistachio green headscarf, confident and welcoming expression'
        : 'Two Iranian hosts, male host in emerald green polo and female host in navy formal blazer with pistachio green headscarf, sitting together in discussion';
      
      const shot = builderShotType === 'medium' 
        ? 'cinematic medium shot' 
        : builderShotType === 'close-up' 
        ? 'expressive close-up portrait' 
        : 'cinematic over-the-shoulder conversation shot';

      return `Photorealistic ${shot} of ${subject}, seated in a warm broadcast interview studio with transparent acrylic recycling bins visible in the background, soft studio key lighting, shot on 85mm f/1.8 lens, natural realistic skin texture with pores, avoiding plastic doll perfection, 8k --ar 16:9 --style raw --v 6.0`;
    }

    // Google Flow
    const motionSubject = builderCharacter === 'both'
      ? 'Medium two-shot of Arash and Maryam conversing. Arash articulates key points with measured hand gestures, Maryam nods with confident smiles'
      : builderCharacter === 'arash'
      ? 'Medium shot of Arash speaking earnestly to camera, hand gestures emphasizing waste separation, consistent clothing from reference frame'
      : 'Medium shot of Maryam presenting educational insights, natural facial micro-expressions, maintaining stable eye contact';

    const cam = builderShotType === 'medium'
      ? 'slow subtle camera dolly-in, 24fps film cadence'
      : builderShotType === 'close-up'
      ? 'locked camera focusing on natural speaking micro-muscles and blinking'
      : 'slow over-the-shoulder camera pan with soft depth of field';

    return `Cinematic AI motion sequence: ${motionSubject}. Camera: ${cam}. Maintain strict temporal and visual consistency with reference anchor image, locked start-and-end frames to prevent jump cuts, smooth human pacing, no glitching hands or morphing clothes.`;
  };

  const customBuiltPrompt = generateCustomPrompt();

  return (
    <div className="space-y-8">
      {/* Interactive Prompt Generator Studio */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-md border border-slate-700/60">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">
            سازنده پرامپت پویا برای Google Flow و Midjourney
          </h3>
        </div>
        <p className="text-xs text-slate-300 mb-6 max-w-2xl">
          متغیرهای صحنه را انتخاب کنید تا پرامپت انگلیسی اختصاصی و بهینه‌سازی‌شده برای تولید در ابزارهای هوش مصنوعی به صورت خودکار تدوین شود.
        </p>

        {/* Builder Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Tool selector */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium">ابزار هدف:</label>
            <select
              value={builderTargetTool}
              onChange={(e) => setBuilderTargetTool(e.target.value as any)}
              className="w-full bg-slate-950 text-white rounded-lg p-2.5 border border-slate-700 focus:border-emerald-500 focus:outline-none"
            >
              <option value="google_flow">Google Flow (ویدیو و حرکت)</option>
              <option value="midjourney">Midjourney v6 (عکس و لنگر)</option>
              <option value="elevenlabs">ElevenLabs (صدا و لحن)</option>
            </select>
          </div>

          {/* Character selector */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium">کاراکتر صحنه:</label>
            <select
              value={builderCharacter}
              onChange={(e) => setBuilderCharacter(e.target.value as any)}
              className="w-full bg-slate-950 text-white rounded-lg p-2.5 border border-slate-700 focus:border-emerald-500 focus:outline-none"
            >
              <option value="both">دو نفره (آرش + مریم)</option>
              <option value="arash">آرش (کارشناس آقا - سبز زمردی)</option>
              <option value="maryam">مریم (مدیر خانم - سرمه‌ای رسمی)</option>
            </select>
          </div>

          {/* Shot type */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium">زاویه و نمای دوربین:</label>
            <select
              value={builderShotType}
              onChange={(e) => setBuilderShotType(e.target.value as any)}
              className="w-full bg-slate-950 text-white rounded-lg p-2.5 border border-slate-700 focus:border-emerald-500 focus:outline-none"
            >
              <option value="medium">مدیوم شات (Medium Shot)</option>
              <option value="close-up">کلوزآپ احساسی (Close-up)</option>
              <option value="over-shoulder">روی شانه (Over-the-shoulder)</option>
            </select>
          </div>

          {/* Action */}
          <div className="space-y-1.5">
            <label className="text-slate-400 font-medium">حالت تعامل:</label>
            <select
              value={builderAction}
              onChange={(e) => setBuilderAction(e.target.value)}
              className="w-full bg-slate-950 text-white rounded-lg p-2.5 border border-slate-700 focus:border-emerald-500 focus:outline-none"
            >
              <option value="talking_explaining">گفتگو و استدلال صمیمی</option>
              <option value="listening_nodding">شنیدن فعال با تایید سر</option>
              <option value="showing_bins">اشاره به سطل‌های شفاف</option>
            </select>
          </div>
        </div>

        {/* Output Box */}
        <div className="mt-5 bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 font-mono">
              GENERATED PROMPT (READY TO PASTE):
            </span>
            <button
              onClick={() => handleCopy(customBuiltPrompt, 'custom-builder')}
              className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer"
            >
              {copiedId === 'custom-builder' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>کپی این پرامپت</span>
                </>
              )}
            </button>
          </div>
          <div className="text-xs font-mono text-slate-200 text-left dir-ltr leading-relaxed break-words">
            {customBuiltPrompt}
          </div>
        </div>
      </section>

      {/* Categorized Prompt Vault */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              بانک جامع پرامپت‌های مهندسی‌شده کمپین «قرار»
            </h3>
            <p className="text-xs text-slate-500">
              پرامپت‌های تایید شده برای ثبات زمانی، دکور سطل‌های شفاف، تنظیمات ElevenLabs و ریزعضلات LivePortrait
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.labelFa}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prompts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredPrompts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {p.tool}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1.5">
                      {p.titleFa}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopy(p.promptText, p.id)}
                    className="flex items-center gap-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedId === p.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>کپی پرامپت</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {p.descriptionFa}
                </p>

                {/* Prompt Box */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs font-mono text-slate-800 text-left dir-ltr leading-relaxed select-all mb-3 max-h-44 overflow-y-auto">
                  {p.promptText}
                </div>

                {/* Negative Prompt if exists */}
                {p.negativePrompt && (
                  <div className="bg-rose-50/50 rounded-lg p-2.5 border border-rose-100 text-xs mb-3 text-left dir-ltr">
                    <span className="font-bold text-rose-800 font-mono text-[11px] block mb-1">
                      Negative Prompt:
                    </span>
                    <span className="text-rose-700 font-mono text-[11px]">
                      {p.negativePrompt}
                    </span>
                  </div>
                )}

                {/* Settings Table */}
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs space-y-1">
                  <span className="font-semibold text-slate-700 text-[11px] block mb-1 flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-slate-500" />
                    تنظیمات پیشنهادی:
                  </span>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
                    {Object.entries(p.suggestedSettings).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between text-slate-600 border-b border-slate-200/50 pb-0.5">
                        <span className="text-slate-500">{key}:</span>
                        <span className="font-mono font-medium text-slate-900">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                {p.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
