import React from 'react';
import { BEHAVIORAL_PRINCIPLES } from '../data/campaignData';
import { 
  BrainCircuit, 
  UserCheck, 
  Palette, 
  Eye, 
  Zap, 
  Gift, 
  BarChart3, 
  Quote, 
  ArrowLeft,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export const BehavioralMatrixTab: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-teal-600" />;
      case 'Gift': return <Gift className="w-5 h-5 text-rose-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-600" />;
      default: return <BrainCircuit className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Hero Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-emerald-700">
          <BrainCircuit className="w-6 h-6" />
          <span className="text-xs font-bold tracking-wider uppercase font-mono">
            BEHAVIORAL ECONOMICS & AI PSYCHOLOGY
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          کالبدشکافی مهندسی رفتار شهروندی در کمپین «قرار»
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
          چگونه ترکیب هوش مصنوعی مولد با روانشناسی رنگ‌ها، حذف اصطکاک تحویل و تحریک ترشح دوپامین با پاداش‌های آنی (قهوه و سبد مشارکت)، شهروندان را از بی‌تفاوتی به عادت روزمره تفکیک پسماند سوق می‌دهد؟
        </p>
      </div>

      {/* Comparison Grid: Traditional Failure vs Gharar Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Traditional Waste Campaign Pitfalls */}
        <div className="bg-rose-50/40 rounded-xl border border-rose-200 p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
            <XCircle className="w-5 h-5 text-rose-600" />
            <span>چرا کمپین‌های سنتی شکست می‌خورند؟</span>
          </div>
          <ul className="space-y-2 text-xs text-rose-900 leading-relaxed pr-1">
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500 font-bold mt-0.5">•</span>
              <span><strong>اصطکاک بسیار بالا:</strong> بردن پسماند به غرفه‌های دوردست و ساعت‌های محدود که برای انسان تنبل امروزی نشدنی است.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500 font-bold mt-0.5">•</span>
              <span><strong>پاداش‌های انتزاعی و ناملموس:</strong> شعار «زمین را ۵۰ سال دیگر نجات بده» برای مغز انسان سیگنال پاداش ایجاد نمی‌کند.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500 font-bold mt-0.5">•</span>
              <span><strong>پنهان‌کاری در کیسه سیاه:</strong> احساس کثیف بودن و بی‌ارزشی زباله که باعث دوری روانی فرد می‌شود.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-500 font-bold mt-0.5">•</span>
              <span><strong>مدیریت واکنشی و کورکورانه:</strong> کامیون‌های حمل زباله بی‌هدف در خیابان‌ها می‌گردند و سوخت هدر می‌دهند.</span>
            </li>
          </ul>
        </div>

        {/* Gharar Behavioral Architecture */}
        <div className="bg-emerald-50/50 rounded-xl border border-emerald-200 p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>معماری روانشناختی موفق سامانه هوشمند «قرار»</span>
          </div>
          <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed pr-1">
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold mt-0.5">•</span>
              <span><strong>اصطکاک صفر (Zero Friction):</strong> مثل سفارش غذا، سفیران سبز در ساعت دلخواه شما دم در خانه حاضر می‌شوند.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold mt-0.5">•</span>
              <span><strong>دوپامین آنی و ملموس:</strong> تبدیل امتیاز بطری‌ها به قهوه رایگان در کافه‌ها یا بن سبد کالای سوپرمارکتی.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold mt-0.5">•</span>
              <span><strong>سطل‌های آکریلیک شفاف:</strong> هویت‌بخشی دوباره به پسماند تمیز به عنوان یک متریال و دارایی خام ارزشمند.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold mt-0.5">•</span>
              <span><strong>حکمرانی کلان‌داده شهری:</strong> هیت‌مپ مناطق و بهینه‌سازی سوخت و ناوگان جمع‌آوری بر اساس الگوی واقعی.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Deep Dive Behavioral Principles Cards */}
      <div className="space-y-5">
        <h3 className="text-lg font-bold text-slate-900">
          اصول ۶‌گانه روانشناسی و طراحی کمپین
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BEHAVIORAL_PRINCIPLES.map((bp) => (
            <div
              key={bp.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {getIcon(bp.iconName)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{bp.titleFa}</h4>
                    <p className="text-xs text-emerald-700 font-medium">{bp.subTitleFa}</p>
                  </div>
                </div>

                {/* Problem vs Solution */}
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-1">معماری راه‌حل در قرار:</span>
                    <p className="text-slate-600 leading-relaxed">{bp.ghararSolutionFa}</p>
                  </div>

                  <div className="bg-emerald-50/40 p-3 rounded-lg border border-emerald-100">
                    <span className="font-semibold text-emerald-900 block mb-1">مکانیسم عصبی و رفتاری:</span>
                    <p className="text-emerald-800 leading-relaxed">{bp.psychologicalMechanismFa}</p>
                  </div>
                </div>
              </div>

              {/* Podcast Quote */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 bg-slate-50/80 p-2.5 rounded-lg italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-sans text-slate-600">
                  «{bp.quoteFromAnalysisFa}»
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
