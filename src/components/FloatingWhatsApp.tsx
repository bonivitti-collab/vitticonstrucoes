import React, { useState } from 'react';
import { CONFIG, whatsappLink } from '../../lib/config';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackWhatsAppClick } from '../lib/analytics';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackWhatsAppClick('floating_fab');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 group select-none">
      {/* Tooltip / Status Bubble */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141312] border border-white/15 text-xs text-[#E5E0D5] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
          </span>
          <span className="font-medium">
            Plantão Técnico <span className="text-[#A8A29A] hidden sm:inline">· Resposta rápida</span>
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-0.5 rounded hover:bg-white/10 text-[#888] hover:text-white transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappLink('Olá! Vim pelo site do Grupo Vitti e gostaria de tirar uma dúvida com a equipe técnica.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Abrir conversa no WhatsApp com Grupo Vitti"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Glow radar effect */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
        />

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>
    </div>
  );
};
