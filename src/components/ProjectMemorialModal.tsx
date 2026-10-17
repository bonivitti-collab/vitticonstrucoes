import React, { useEffect } from 'react';
import { ProjectMemorial } from '../data/projectsData';
import { whatsappLink } from '../../lib/config';
import {
  X,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Home,
  Hammer,
  ArrowRight,
  Compass,
  FileText,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectMemorialModalProps {
  project: ProjectMemorial | null;
  onClose: () => void;
}

export const ProjectMemorialModal: React.FC<ProjectMemorialModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F8F6F2] text-[#171614] rounded-2xl shadow-2xl border border-[#E2DDD5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-10 bg-[#F8F6F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E2DDD5] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-[#7A756E]">
            <FileText className="w-4 h-4 text-[#C89467]" />
            <span className="uppercase font-semibold text-[#9E693B]">Memorial Técnico Construtivo</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C89467]" />
              {project.city}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#524E48] hover:text-[#171614] transition-colors focus-visible:outline-none"
            aria-label="Fechar ficha técnica"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 space-y-8">
          {/* Conceptual Image Banner (Preserves existing image, adds context) */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#DDD8CD] shadow-sm">
            <img
              src={project.img}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-[#C89467] text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                  {project.city}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white font-mono text-[11px] font-medium border border-white/20">
                  {project.type}
                </span>
              </div>
              <h2
                id="project-modal-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight"
              >
                {project.title}
              </h2>
              <div className="text-xs text-white/80 font-mono mt-1">{project.tag}</div>
            </div>
          </div>

          {/* 1. Perfil de Terreno & Aplicação Regional */}
          <div className="bg-[#EFECE4] border border-[#DDD8CD] rounded-xl p-5 sm:p-6 space-y-2.5">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#9E693B] uppercase flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#C89467]" />
              Perfil de Terreno Ideal & Aplicação Regional
            </div>
            <p className="text-sm text-[#383531] leading-relaxed">
              {project.idealTerrain}
            </p>
            <div className="pt-2 border-t border-[#DDD8CD]/70 flex items-center gap-2 text-xs text-[#66615B] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C89467] shrink-0" />
              <span>Polos recomendados: {project.regionalContext}</span>
            </div>
          </div>

          {/* 2. Especificação de Engenharia & Blindagem Litorânea */}
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-wider text-[#7A756E] uppercase font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C89467]" />
              Especificação de Engenharia & Blindagem Litorânea
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] space-y-1">
                <div className="text-[11px] font-mono text-[#9E693B] uppercase font-semibold">Resistência Estrutural</div>
                <div className="text-sm font-bold text-[#171614]">{project.engineeringSpecs.fck}</div>
                <div className="text-xs text-[#66615B]">{project.engineeringSpecs.concreteNorm}</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] space-y-1">
                <div className="text-[11px] font-mono text-[#9E693B] uppercase font-semibold">Cobrimento de Armadura</div>
                <div className="text-sm font-bold text-[#171614]">50 mm rigoroso</div>
                <div className="text-xs text-[#66615B]">{project.engineeringSpecs.cobrimento}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
              <div className="text-[11px] font-mono text-[#9E693B] uppercase font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C89467]" />
                Impermeabilização de Baldrame & Encosta
              </div>
              <p className="text-xs sm:text-sm text-[#383531] leading-relaxed">
                {project.engineeringSpecs.waterproofing}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E5E0D5] space-y-2">
              <div className="text-[11px] font-mono text-[#9E693B] uppercase font-semibold flex items-center gap-1.5">
                <Hammer className="w-3.5 h-3.5 text-[#C89467]" />
                Esquadrias Navais & Inox 316
              </div>
              <p className="text-xs sm:text-sm text-[#383531] leading-relaxed">
                {project.engineeringSpecs.framesAndInox}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono text-[#7A756E] uppercase font-semibold">
                Destaques Construtivos do Padrão
              </div>
              <div className="grid grid-cols-1 gap-2">
                {project.engineeringSpecs.structuralHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-[#E5E0D5] text-xs text-[#2C2925]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C89467] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Flexibilidade de Metragem */}
          <div className="bg-white border border-[#E5E0D5] rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="text-xs font-mono font-semibold tracking-wider text-[#9E693B] uppercase flex items-center gap-1.5">
                <Home className="w-4 h-4 text-[#C89467]" />
                Flexibilidade de Metragem
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C89467]/15 text-[#9E693B] text-xs font-mono font-bold">
                {project.metragensRange}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#383531] leading-relaxed">
              {project.metragemFlexibility}
            </p>
          </div>

          {/* 4. Etapas & Prazo Estimado */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="text-xs font-mono tracking-wider text-[#7A756E] uppercase font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C89467]" />
                Etapas do Cronograma Chave na Mão
              </div>
              <span className="text-xs font-mono font-bold text-[#171614] bg-[#EFECE4] px-2.5 py-1 rounded-md border border-[#DDD8CD]">
                {project.estimatedDuration}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.timelinePhases.map((phase, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white border border-[#E5E0D5] space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#171614]">{phase.phase}</span>
                    <span className="font-mono text-[#9E693B] text-[11px] font-semibold">{phase.duration}</span>
                  </div>
                  <p className="text-xs text-[#66615B] leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CTA Direto no Modal */}
          <div className="pt-2">
            <a
              href={whatsappLink(project.whatsappPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2412] font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
              <span>Orçar Projeto Neste Padrão no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
            <p className="text-center text-[11px] text-[#7A756E] font-mono mt-2">
              Atendimento direto de engenharia · Resposta rápida · Contrato Turnkey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
