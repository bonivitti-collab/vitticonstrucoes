import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ArchitecturalIntroProps {
  onComplete?: () => void;
}

export const ArchitecturalIntro: React.FC<ArchitecturalIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'revealing' | 'opening' | 'finished'>('revealing');

  useEffect(() => {
    // Stage 1: Display logo signature and architectural lines
    const openTimer = setTimeout(() => {
      setPhase('opening');
    }, 1100);

    // Stage 2: Curtains finished opening, complete and unmount
    const finishTimer = setTimeout(() => {
      setPhase('finished');
      onComplete?.();
    }, 1800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  // Click/tap anywhere to skip immediately
  const handleFastSkip = () => {
    setPhase('opening');
    setTimeout(() => {
      setPhase('finished');
      onComplete?.();
    }, 300);
  };

  if (phase === 'finished') return null;

  const isOpening = phase === 'opening';

  return (
    <div
      onClick={handleFastSkip}
      className="fixed inset-0 z-50 pointer-events-auto cursor-pointer select-none overflow-hidden"
      role="banner"
      aria-label="Abertura Grupo Vitti"
    >
      {/* ─── PAINEL CORTINA SUPERIOR ─── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '-100%' : 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#090807] border-b border-[#C89467]/30 flex items-end justify-center overflow-hidden"
      >
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C89467 1px, transparent 1px), linear-gradient(to bottom, #C89467 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient warm radial glow */}
        <div className="absolute -bottom-24 w-[500px] h-[150px] bg-[#C89467]/20 blur-[90px] rounded-full pointer-events-none" />
      </motion.div>

      {/* ─── PAINEL CORTINA INFERIOR ─── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '100%' : 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#090807] border-t border-[#C89467]/30 flex items-start justify-center overflow-hidden"
      >
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C89467 1px, transparent 1px), linear-gradient(to bottom, #C89467 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient warm radial glow */}
        <div className="absolute -top-24 w-[500px] h-[150px] bg-[#C89467]/20 blur-[90px] rounded-full pointer-events-none" />
      </motion.div>

      {/* ─── EMBLEMA CENTRAL (Assinatura Vetorial com Revelação) ─── */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6"
          >
            {/* Linha técnica superior */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C89467] to-transparent mb-6"
            />

            {/* Logo Vetorial Oficial Vitti */}
            <div className="flex flex-col items-center justify-center">
              <svg
                viewBox="65 78 790 296"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 sm:h-14 w-auto drop-shadow-[0_0_24px_rgba(200,148,103,0.35)]"
                role="img"
                aria-label="Grupo Vitti"
              >
                {/* V arquitetônico com beiral em balanço */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  d="M296 206L475 94L516 116L612 336L686 98H712L620 368H608L476 111L297 210L296 206Z"
                  fill="#C89467"
                />
                {/* GRUPO */}
                <text
                  x="94"
                  y="346"
                  fill="#F5F2EB"
                  fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
                  fontSize="102"
                  fontWeight="800"
                  letterSpacing="2"
                >
                  GRUPO
                </text>
                {/* ITTI */}
                <text
                  x="676"
                  y="346"
                  fill="#F5F2EB"
                  fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
                  fontSize="102"
                  fontWeight="800"
                  letterSpacing="4"
                >
                  ITTI
                </text>
              </svg>

              {/* Slogan e Assinatura com Expansão de Letras */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-3 text-center"
              >
                <div className="text-[9px] sm:text-[11px] font-mono tracking-[0.28em] text-[#C89467] uppercase font-semibold">
                  Construção, Reforma & Tecnologia
                </div>
                <div className="text-[8px] sm:text-[9.5px] font-mono tracking-[0.2em] text-[#7A756E] uppercase mt-1">
                  Região dos Lagos · RJ
                </div>
              </motion.div>
            </div>

            {/* Linha técnica inferior */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C89467] to-transparent mt-6"
            />

            {/* Dica discreta de clique para acelerar */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-8 text-[10px] font-mono tracking-wider text-[#666] uppercase"
            >
              Toque para entrar
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitecturalIntro;
