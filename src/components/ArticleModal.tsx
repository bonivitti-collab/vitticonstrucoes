import React, { useEffect } from 'react';
import { Article } from '../data/articles';
import { CONFIG, whatsappLink } from '../../lib/config';
import { X, ArrowUpRight, CheckCircle2, BookOpen, Clock, ShieldCheck } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F8F6F2] text-[#171614] rounded-2xl shadow-2xl border border-[#E2DDD5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-10 bg-[#F8F6F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E2DDD5] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#7A756E]">
            <BookOpen className="w-4 h-4 text-[#C89467]" />
            <span className="uppercase">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#524E48] hover:text-[#171614] transition-colors focus-visible:outline-none"
            aria-label="Fechar artigo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h2
              id="article-modal-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171614] leading-[1.2]"
            >
              {article.title}
            </h2>
            <p className="text-base sm:text-lg text-[#66615B] leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          {/* Problem Callout Box */}
          <div className="bg-[#EFECE4] border border-[#DDD8CD] rounded-xl p-5">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#9E693B] uppercase mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              A Dor Comum do Proprietário
            </div>
            <p className="text-sm text-[#383531] leading-relaxed">
              {article.problemSummary}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-wider text-[#7A756E] uppercase font-semibold">
              Pontos Fundamentais de Engenharia
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {article.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#E5E0D5] text-xs sm:text-sm text-[#2C2925]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C89467] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Content Sections */}
          <div className="space-y-8 pt-2 border-t border-[#E2DDD5]">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#171614]">
                  {sec.sectionTitle}
                </h3>
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#4A4641] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Practical Checklist */}
          <div className="bg-[#171614] text-[#F8F6F2] rounded-xl p-6 space-y-4">
            <div className="text-xs font-mono tracking-wider text-[#C89467] uppercase font-semibold">
              Checklist Prático: O que Exigir no Canteiro
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8D3C9]">
              {article.practicalTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#C89467] font-bold">0{idx + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="pt-4 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#171614]">
                Tem dúvidas sobre esse assunto para sua obra?
              </div>
              <div className="text-xs text-[#7A756E] mt-0.5">
                Fale direto comigo no WhatsApp para tirar qualquer dúvida.
              </div>
            </div>

            <a
              href={whatsappLink(article.whatsappPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#171614] text-white text-xs sm:text-sm font-semibold hover:bg-[#2C2A26] transition-all hover:scale-[1.02] shadow-sm shrink-0"
            >
              <span>Tirar Dúvida no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
