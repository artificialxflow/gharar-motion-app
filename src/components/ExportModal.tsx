import React, { useState } from 'react';
import { ROADMAP_STEPS, CHARACTERS, EPISODES, PROMPTS_VAULT, BEHAVIORAL_PRINCIPLES } from '../data/campaignData';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileText,
  Sparkles
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const generateFullMarkdown = () => {
    let md = `# نقشه راه جامع، پرامپت‌ها و سناریوهای کمپین موشن و هوش مصنوعی «قرار»\n\n`;
    md += `تاریخ تدوین: ۱۴۰۴ - نسخه استودیو تولید محتوا\n\n`;
    md += `---\n\n`;

    md += `## ۱. شناسنامه کاراکترهای مجازی (آرش و مریم)\n\n`;
    CHARACTERS.forEach(c => {
      md += `### ${c.nameFa} (${c.nameEn}) - ${c.roleFa}\n`;
      md += `- رده سنی: ${c.age}\n`;
      md += `- ویژگی ظاهری: ${c.appearanceFa}\n`;
      md += `- پوشش: ${c.attireFa}\n`;
      md += `- پرامپت مرجع (Midjourney):\n\`\`\`\n${c.referencePromptEn}\n\`\`\`\n`;
      md += `- اجتناب از دره وهم‌انگیز:\n\`\`\`\n${c.avoidUncannyPromptEn}\n\`\`\`\n\n`;
    });

    md += `---\n\n`;
    md += `## ۲. مراحل پایپ‌لاین تولید ۸ مرحله‌ای\n\n`;
    ROADMAP_STEPS.forEach(s => {
      md += `### فاز ${s.stepNumber}: ${s.titleFa}\n`;
      md += `- ابزار اصلی: ${s.toolFa}\n`;
      md += `- زمان‌بندی: ${s.timelineFa}\n`;
      md += `- توضیحات: ${s.descriptionFa}\n`;
      md += `- خروجی‌ها:\n`;
      s.deliverablesFa.forEach(d => {
        md += `  * ${d}\n`;
      });
      md += `- مدیریت ریسک: ${s.riskMitigationFa}\n\n`;
    });

    md += `---\n\n`;
    md += `## ۳. بانک پرامپت‌های مهندسی‌شده هوش مصنوعی\n\n`;
    PROMPTS_VAULT.forEach(p => {
      md += `### [${p.tool}] ${p.titleFa}\n`;
      md += `${p.descriptionFa}\n\n`;
      md += `\`\`\`\n${p.promptText}\n\`\`\`\n\n`;
      if (p.negativePrompt) {
        md += `Negative Prompt:\n\`\`\`\n${p.negativePrompt}\n\`\`\`\n\n`;
      }
    });

    md += `---\n\n`;
    md += `## ۴. متن کامل سناریوی ۱۰ قسمتی نشست صمیمی آرش و مریم\n\n`;
    EPISODES.forEach(ep => {
      md += `### قسمت ${ep.questionNumber}: ${ep.titleFa}\n`;
      md += `- سوال کلیدی: ${ep.coreQuestionFa}\n`;
      md += `- پاسخ مصوب: ${ep.coreAnswerFa}\n`;
      md += `- قلاب روانشناسی رفتار: ${ep.behavioralHookFa}\n`;
      md += `- پرامپت موشن صحنه (Google Flow):\n\`\`\`\n${ep.scenePromptEn}\n\`\`\`\n\n`;
      md += `#### دیالوگ‌ها:\n`;
      ep.dialogues.forEach(d => {
        const spk = d.speaker === 'arash' ? 'آرش' : d.speaker === 'maryam' ? 'مریم' : 'راوی';
        md += `- **${spk}** (${d.shotTypeFa}): «${d.textFa}»\n  *(نکته بازیگری: ${d.actingNoteFa})*\n\n`;
      });
      md += `\n`;
    });

    md += `---\n\n`;
    md += `## ۵. اصول ۶‌گانه روانشناسی و اقتصاد رفتاری کمپین\n\n`;
    BEHAVIORAL_PRINCIPLES.forEach(bp => {
      md += `### ${bp.titleFa}\n`;
      md += `- موضوع: ${bp.subTitleFa}\n`;
      md += `- راه‌حل قرار: ${bp.ghararSolutionFa}\n`;
      md += `- مکانیسم روانشناختی: ${bp.psychologicalMechanismFa}\n\n`;
    });

    return md;
  };

  const fullMarkdown = generateFullMarkdown();

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'gharar-campaign-master-roadmap.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                خروجی سند کامل نقشه راه و پرامپت‌ها
              </h3>
              <p className="text-xs text-slate-500">
                شامل تمام سناریوهای ۱۰ قسمتی، پرامپت‌های Google Flow و میدجرنی و تحلیل‌های رفتاری
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Preview */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto font-mono text-xs text-slate-800 bg-slate-50/50">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs whitespace-pre-wrap leading-relaxed select-all">
            {fullMarkdown}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 hidden sm:inline">
            فرمت خروجی: Markdown استاندارد (سازگار با تمامی ادیتورها و اسناد)
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">کل متن کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>کپی تمام سند</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>دانلود فایل (.md)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
