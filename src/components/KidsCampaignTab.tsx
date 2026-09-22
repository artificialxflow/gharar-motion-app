import React from 'react';
import { KIDS_CAMPAIGN_INFO } from '../data/campaignData';
import { 
  GraduationCap, 
  Smile, 
  Scissors, 
  Award, 
  Heart, 
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export const KidsCampaignTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-l from-emerald-800 to-teal-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
            <Heart className="w-3.5 h-3.5 text-rose-300" />
            <span>فرهنگ‌سازی پایدار از نسل پایه</span>
          </div>
          <h2 className="text-2xl font-bold">
            {KIDS_CAMPAIGN_INFO.titleFa}
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed">
            «{KIDS_CAMPAIGN_INFO.quoteFa}»
          </p>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            تضاد شیرین بین هوش مصنوعی و کلان‌داده با کاردستی و تئاتر عروسکی مهدکودک: تغییرات پایدار شهری از پایین به بالا و توسط کودکان رقم می‌خورد.
          </p>
        </div>
      </div>

      {/* 3 Core Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {KIDS_CAMPAIGN_INFO.modules.map((mod, index) => {
          const IconComponent = index === 0 ? Smile : index === 1 ? Scissors : Award;
          const badgeColor = index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-emerald-600' : 'bg-indigo-600';

          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl ${badgeColor} text-white flex items-center justify-center shadow-xs`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{mod.titleFa}</h3>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-1">
                    مخاطب: {mod.targetFa}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {mod.descriptionFa}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>برنامه مصوب کمپین قرار</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Puppet Theater Script Sample for Production */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base font-bold text-slate-900">
            نمونه سناریوی تئاتر نمایشی کوتاه ویژه مهدهای کودک (Puppet Playlet)
          </h3>
        </div>

        <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <span className="font-bold text-amber-900 block mb-1">
              شخصیت‌های عروسکی:
            </span>
            <p>
              <strong>پپو (بطری آب‌معدنی تمیز):</strong> عروسک شاد و پرانرژی که از انداخته شدن توی جوی آب ناراحته و دلش می‌خواد اسباب‌بازی جدید بشه!<br />
              <strong>کاگی (جعبه مقوایی شیرینی):</strong> عروسک دانا و عینکی که مراقبه خیس یا چرب نشه تا بتونه دوباره دفتر نقاشی بچه‌ها بشه!<br />
              <strong>آقا پویا (سفیر سبز مهربان):</strong> سفیر خنده‌رو با لباس سبز قرار و کیسه جادویی امتیاز.
            </p>
          </div>

          <div className="bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-100 space-y-2">
            <span className="font-bold text-emerald-900 block">
              فرازی از دیالوگ عروسک‌ها:
            </span>
            <p className="italic">
              <strong>پپو:</strong> «آهای بچه‌ها! اگه منو قاطی پوست موز و تفاله چای نندازید و بشوریدم، آقا پویا با سفینه سبزش میاد و منو می‌بره کارخونه تا براتون یه جامدادی خوشگل بسازه!»
            </p>
            <p className="italic">
              <strong>کاگی:</strong> «تازه مامان و بابا هم وقتی زنگ در رو می‌زنن، امتیاز می‌گیرن و براتون از سبد مشارکت هدیه می‌خرن!»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
