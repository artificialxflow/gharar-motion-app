import React, { useState } from 'react';
import { DISTRICT_WASTE_STATS } from '../data/campaignData';
import { 
  Building2, 
  Truck, 
  TrendingUp, 
  Flame, 
  Leaf, 
  Users, 
  Calendar, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const MunicipalSimulatorTab: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cardboard' | 'plastic' | 'glassMetal'>('all');

  const totalCardboard = DISTRICT_WASTE_STATS.reduce((acc, d) => acc + d.cardboardKg, 0);
  const totalPlastic = DISTRICT_WASTE_STATS.reduce((acc, d) => acc + d.plasticKg, 0);
  const totalGlassMetal = DISTRICT_WASTE_STATS.reduce((acc, d) => acc + d.glassMetalKg, 0);
  const totalKg = totalCardboard + totalPlastic + totalGlassMetal;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-slate-900">
                شبیه‌ساز داشبورد کلان شهرداری و مدیران شهری
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              تبدیل رفتارهای خرد شهروندی به هوش عملیاتی برای بهینه‌سازی ناوگان حمل و کاهش مصرف سوخت
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5" />
            اتصال به داده‌های زنده اپ قرار
          </span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">کل پسماند خشک تفکیکی:</span>
            <Layers className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-slate-900">
              {(totalKg / 1000).toFixed(1)}
            </span>
            <span className="text-xs text-slate-500 font-medium">تُن / ماه</span>
          </div>
          <div className="mt-2 text-[11px] text-emerald-700 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+۲۸٪ رشد نسبت به ماه گذشته</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">صرفه‌جویی سوخت ناوگان:</span>
            <Truck className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-slate-900">۳۸.۵٪</span>
            <span className="text-xs text-slate-500 font-medium">کاهش پیمایش</span>
          </div>
          <div className="mt-2 text-[11px] text-blue-700 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>حذف گشت‌زنی کورکورانه</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">خانوارهای فعال در طرح:</span>
            <Users className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-slate-900">۱۲,۴۸۰</span>
            <span className="text-xs text-slate-500 font-medium">خانوار</span>
          </div>
          <div className="mt-2 text-[11px] text-amber-700 flex items-center gap-1">
            <span>سفیران سبز فعال: ۸۶ نفر</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">کاهش ردپای کربن شهر:</span>
            <Leaf className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-slate-900">۱۴.۲</span>
            <span className="text-xs text-slate-500 font-medium">تُن دی‌اکسید کربن</span>
          </div>
          <div className="mt-2 text-[11px] text-emerald-700 flex items-center gap-1">
            <span>معادل کاشت ۷۱۰ اصله درخت</span>
          </div>
        </div>
      </div>

      {/* District Heatmap Table & Insights */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              تحلیل پسماند به تفکیک مناطق شهری و پیک‌های زمانی
            </h3>
            <p className="text-xs text-slate-500">
              شهرداری می‌تواند ناوگان و تبلیغات شهری هر محله را متناسب با مشکل اختصاصی آن ساماندهی کند.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              همه اقلام
            </button>
            <button
              onClick={() => setSelectedFilter('cardboard')}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'cardboard' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              کارتن و کاغذ
            </button>
            <button
              onClick={() => setSelectedFilter('plastic')}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                selectedFilter === 'plastic' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              پلاستیک و پت
            </button>
          </div>
        </div>

        {/* District list cards */}
        <div className="space-y-3">
          {DISTRICT_WASTE_STATS.map((d, index) => {
            const sumDistrict = d.cardboardKg + d.plasticKg + d.glassMetalKg;
            const cardboardPct = Math.round((d.cardboardKg / sumDistrict) * 100);
            const plasticPct = Math.round((d.plasticKg / sumDistrict) * 100);
            const glassPct = 100 - cardboardPct - plasticPct;

            return (
              <div key={index} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h4 className="text-sm font-bold text-slate-900">{d.districtName}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      روزهای پیک: <strong className="text-slate-700">{d.peakDay}</strong>
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-medium">
                      بهینه‌سازی ناوگان: {d.fleetOptimizedPercent}٪
                    </span>
                  </div>
                </div>

                {/* Progress Stack Bar */}
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex my-2">
                  <div 
                    className="bg-amber-600 h-full transition-all" 
                    style={{ width: `${cardboardPct}%` }} 
                    title={`کارتن: ${cardboardPct}% (${d.cardboardKg} kg)`}
                  />
                  <div 
                    className="bg-teal-600 h-full transition-all" 
                    style={{ width: `${plasticPct}%` }} 
                    title={`پلاستیک: ${plasticPct}% (${d.plasticKg} kg)`}
                  />
                  <div 
                    className="bg-indigo-600 h-full transition-all" 
                    style={{ width: `${glassPct}%` }} 
                    title={`شیشه و فلز: ${glassPct}% (${d.glassMetalKg} kg)`}
                  />
                </div>

                {/* Legend & KG breakdown */}
                <div className="flex items-center justify-between text-xs text-slate-600 flex-wrap gap-2 pt-1">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      کارتن: <strong>{d.cardboardKg} کیلوگرم</strong> ({cardboardPct}٪)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                      پلاستیک: <strong>{d.plasticKg} کیلوگرم</strong> ({plasticPct}٪)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      شیشه و فلز: <strong>{d.glassMetalKg} کیلوگرم</strong> ({glassPct}٪)
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-mono">
                    مجموع منطقه: {sumDistrict} کیلوگرم
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
