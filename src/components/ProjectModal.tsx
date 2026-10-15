import React from 'react';
import { ProjectItem } from '../data/engineeringData';
import { ProjectArchitecturalPlate } from './ArchitecturalPlates';
import { CONFIG, whatsappLink } from '../../lib/config';
import { ArrowUpRight, X } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const projectInquiryMessage = `Olá, vim pelo site do ${CONFIG.siteName}. Analisei o memorial técnico da ${project.code} (${project.title} em ${project.city}) e gostaria de conversar sobre um projeto similar.`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F8F6F2] border border-[#DCD6CB] text-[#171614] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2DDD5] bg-white">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#6E6A63]">
            <span>FICHA DE ACERVO TÉCNICO · {project.code}</span>
            <span aria-hidden="true">·</span>
            <span>{project.city.toUpperCase()} (RJ)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#524E48] hover:text-[#171614] transition-colors"
            aria-label="Fechar ficha técnica"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#1A1917] flex flex-col justify-between">
            <ProjectArchitecturalPlate
              plateType={project.plateType}
              code={project.code}
              city={project.city}
            />
            <div className="p-6 text-[#EAE5DC] space-y-4">
              <div className="text-xs font-mono-tabular text-[#A8A29A] border-b border-white/10 pb-2">
                INDICADORES QUANTITATIVOS DE EXECUÇÃO
              </div>
              <dl className="grid grid-cols-2 gap-4 text-xs font-mono-tabular">
                <div>
                  <dt className="text-[#8E8880]">ÁREA CONSTRUÍDA</dt>
                  <dd className="text-base text-white font-semibold mt-0.5">{project.areaM2} m²</dd>
                </div>
                <div>
                  <dt className="text-[#8E8880]">PRAZO EXECUTADO</dt>
                  <dd className="text-base text-white font-semibold mt-0.5">
                    {project.durationMonths} meses
                  </dd>
                </div>
                <div>
                  <dt className="text-[#8E8880]">VOLUME CONCRETO</dt>
                  <dd className="text-sm text-[#EAE5DC] mt-0.5">{project.metrics.concreteVolumeM3}</dd>
                </div>
                <div>
                  <dt className="text-[#8E8880]">ARMADURA / AÇO</dt>
                  <dd className="text-sm text-[#EAE5DC] mt-0.5">{project.metrics.steelKg}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6E6A63] mb-1.5">
                  <span>{project.city}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.neighborhood}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                </div>
                <h3
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-editorial font-semibold text-[#171614]"
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-[#3B3834] leading-relaxed">{project.summary}</p>

              <dl className="border-t border-b border-[#E2DDD5] py-4 space-y-3 text-xs">
                <div>
                  <dt className="font-mono-tabular text-[#6E6A63]">SISTEMA ESTRUTURAL ADOTADO</dt>
                  <dd className="text-[#171614] font-medium mt-0.5">{project.structuralSystem}</dd>
                </div>
                <div>
                  <dt className="font-mono-tabular text-[#6E6A63]">
                    PROTEÇÃO COSTEIRA & DURABILIDADE (NBR 6118 / 9575)
                  </dt>
                  <dd className="text-[#171614] font-medium mt-0.5">{project.coastalProtection}</dd>
                </div>
              </dl>

              <div>
                <div className="text-xs font-mono-tabular text-[#6E6A63] mb-2.5">
                  DIRETRIZES E DIFERENCIAIS DE EXECUÇÃO NO CANTEIRO
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#3B3834]">
                  {project.technicalHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono-tabular text-xs text-[#8C4A27] mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={whatsappLink(projectInquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#171614] text-[#F8F6F2] text-xs font-semibold hover:bg-[#2B2925] transition-colors whitespace-nowrap"
              >
                <span>Orçar Obra com Padrão Semelhante</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 text-xs font-medium text-[#524E48] hover:text-[#171614] border border-[#DCD6CB] bg-white transition-colors whitespace-nowrap"
              >
                Fechar Memorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
