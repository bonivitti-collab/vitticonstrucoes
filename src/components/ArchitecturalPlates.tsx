import React, { useState } from 'react';
import { ProjectItem } from '../data/engineeringData';

interface HeroPlateProps {
  onSelectBlueprintHotspot?: (note: string) => void;
}

export const HeroArchitecturalPlate: React.FC<HeroPlateProps> = () => {
  const [viewMode, setViewMode] = useState<'editorial' | 'blueprint'>('editorial');
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  const hotspots = [
    {
      id: 0,
      code: 'E-01',
      title: 'Balanço Protendido 6,80m',
      detail: 'Concreto aparente fck 40 MPa com adição de sílica ativa, cobrimento nominal 50mm (NBR 6118 · CAA IV).',
      x: '64%',
      y: '34%',
    },
    {
      id: 1,
      code: 'E-02',
      title: 'Brise-Soleil em Cumaru Naval',
      detail: 'Painéis móveis com proteção UV marítima e ferragens ocultas em aço inox austenítico AISI 316.',
      x: '36%',
      y: '46%',
    },
    {
      id: 2,
      code: 'E-03',
      title: 'Contenção & Fundação em Rocha',
      detail: 'Cortina engastada em maciço gnáissico com drenagem subsuperficial e impermeabilização em poliuréia.',
      x: '52%',
      y: '74%',
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[540px] bg-[#161514] border border-[#2A2825] overflow-hidden flex flex-col justify-between select-none">
      {/* Interactive Mode Switch Bar inside Architectural Viewport */}
      <div className="relative z-20 flex items-center justify-between gap-4 px-5 py-3.5 border-b border-white/10 bg-[#141312]/90 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-xs text-[#A8A29A] font-mono-tabular">
          <span>PRANCHA ARQ-EST 01/04</span>
          <span aria-hidden="true">·</span>
          <span>ESCALA 1:50</span>
          <span aria-hidden="true">·</span>
          <span className="hidden sm:inline">BÚZIOS / CABO FRIO (RJ)</span>
        </div>

        <div className="flex items-center gap-1 p-0.5 bg-[#22201E] border border-white/10">
          <button
            type="button"
            onClick={() => setViewMode('editorial')}
            className={`px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              viewMode === 'editorial'
                ? 'bg-[#F8F6F2] text-[#141413]'
                : 'text-[#A8A29A] hover:text-white'
            }`}
          >
            Vista Editorial
          </button>
          <button
            type="button"
            onClick={() => setViewMode('blueprint')}
            className={`px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              viewMode === 'blueprint'
                ? 'bg-[#F8F6F2] text-[#141413]'
                : 'text-[#A8A29A] hover:text-white'
            }`}
          >
            Corte Estrutural
          </button>
        </div>
      </div>

      {/* Main Architectural Illustration SVG */}
      <div className="relative flex-1 w-full overflow-hidden">
        {viewMode === 'editorial' ? (
          <svg
            viewBox="0 0 1200 720"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Perspectiva arquitetônica de residência costeira em concreto aparente e madeira cumaru na Região dos Lagos"
          >
            <defs>
              <linearGradient id="skyGolden" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E242B" />
                <stop offset="48%" stopColor="#3B434C" />
                <stop offset="78%" stopColor="#8A6E56" />
                <stop offset="100%" stopColor="#C9A785" />
              </linearGradient>
              <linearGradient id="oceanAtlantic" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1B2A32" />
                <stop offset="55%" stopColor="#263B44" />
                <stop offset="100%" stopColor="#18242B" />
              </linearGradient>
              <linearGradient id="concreteLit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E6E1D8" />
                <stop offset="60%" stopColor="#CFC8BC" />
                <stop offset="100%" stopColor="#B5ADA0" />
              </linearGradient>
              <linearGradient id="concreteShadow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6E6961" />
                <stop offset="100%" stopColor="#4A4640" />
              </linearGradient>
              <linearGradient id="cumaruWarm" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8C532B" />
                <stop offset="50%" stopColor="#A6673A" />
                <stop offset="100%" stopColor="#6E3E1E" />
              </linearGradient>
              <linearGradient id="glassWarmGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2A333B" stopOpacity="0.92" />
                <stop offset="45%" stopColor="#6D5843" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#D99B52" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="poolReflect" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#203842" />
                <stop offset="50%" stopColor="#355663" />
                <stop offset="100%" stopColor="#172830" />
              </linearGradient>
            </defs>

            {/* Sky & Coastal Horizon */}
            <rect width="1200" height="520" fill="url(#skyGolden)" />

            {/* Distant Búzios / Arraial Peninsula Silhouette */}
            <path
              d="M0 445 Q140 410 290 428 T620 415 T980 432 L1200 420 L1200 470 L0 470 Z"
              fill="#232B32"
              opacity="0.75"
            />

            {/* Atlantic Ocean Band */}
            <rect x="0" y="455" width="1200" height="120" fill="url(#oceanAtlantic)" />
            <line x1="0" y1="456" x2="1200" y2="456" stroke="#D9B894" strokeWidth="1" opacity="0.4" />

            {/* Coastal Granite Slope & Native Restinga Base */}
            <polygon points="0,515 780,485 1200,565 1200,720 0,720" fill="#1C1A18" />
            <polygon points="80,515 760,485 980,620 80,620" fill="#2A2724" />

            {/* Lower Ground Stone Retaining Wall (Muro de Arrimo em Pedra & Concreto) */}
            <rect x="150" y="395" width="660" height="115" fill="#5B564F" />
            {/* Board-formed vertical joints on lower wall */}
            {Array.from({ length: 16 }).map((_, idx) => (
              <line
                key={`joint-low-${idx}`}
                x1={180 + idx * 40}
                y1="395"
                x2={180 + idx * 40}
                y2="510"
                stroke="#3E3A35"
                strokeWidth="1.5"
              />
            ))}

            {/* Lower Floor Recessed Glass Pavilion */}
            <rect x="210" y="408" width="490" height="98" fill="url(#glassWarmGlow)" />
            <line x1="370" y1="408" x2="370" y2="506" stroke="#1C1A18" strokeWidth="4" />
            <line x1="530" y1="408" x2="530" y2="506" stroke="#1C1A18" strokeWidth="4" />

            {/* Upper Monolithic Cantilever Volume (Balanço de 6,80m) */}
            <polygon points="120,215 995,195 995,388 120,398" fill="url(#concreteLit)" />
            {/* Deep Underside Soffit in Warm Cumaru Wood */}
            <polygon points="120,398 995,388 955,412 150,412" fill="url(#cumaruWarm)" />

            {/* Upper Floor Recessed Cumaru Brise-Soleil & Glass */}
            <rect x="195" y="252" width="330" height="128" fill="url(#cumaruWarm)" />
            {Array.from({ length: 28 }).map((_, idx) => (
              <line
                key={`brise-${idx}`}
                x1={202 + idx * 11.5}
                y1="252"
                x2={202 + idx * 11.5}
                y2="380"
                stroke="#3D2210"
                strokeWidth="3"
              />
            ))}

            {/* Upper Right Panoramic Glass Span (Cantilever Overlook) */}
            <rect x="535" y="252" width="415" height="128" fill="url(#glassWarmGlow)" />
            {/* Interior warm architectural ceiling line visible through glass */}
            <polygon points="535,252 950,252 925,274 535,274" fill="#D99B52" opacity="0.45" />
            {/* Minimalist structural mullion */}
            <line x1="745" y1="252" x2="745" y2="380" stroke="#22201E" strokeWidth="3.5" />
            <line x1="885" y1="252" x2="885" y2="380" stroke="#22201E" strokeWidth="3.5" />

            {/* Concrete Board-Forming Texture Lines on Upper Fascia */}
            {Array.from({ length: 22 }).map((_, idx) => (
              <line
                key={`fascia-${idx}`}
                x1={150 + idx * 38}
                y1="205"
                x2={150 + idx * 38}
                y2="252"
                stroke="#B3ABA0"
                strokeWidth="1"
              />
            ))}

            {/* Signature Architectural V-Roof Accent Line (Echoing Grupo Vitti Geometry) */}
            <polyline
              points="90,224 265,168 332,212"
              fill="none"
              stroke="#E6E1D8"
              strokeWidth="4"
            />

            {/* Infinity Pool Extending Towards Atlantic Horizon */}
            <polygon points="340,506 1060,506 1130,578 270,578" fill="url(#poolReflect)" />
            <line x1="340" y1="506" x2="1060" y2="506" stroke="#9CC2D1" strokeWidth="2" opacity="0.65" />
            <polygon points="270,578 1130,578 1130,612 270,612" fill="url(#concreteShadow)" />

            {/* Subtle Golden Hour Water Reflections */}
            <line x1="540" y1="530" x2="890" y2="530" stroke="#E8C396" strokeWidth="1.5" opacity="0.45" />
            <line x1="610" y1="550" x2="960" y2="550" stroke="#E8C396" strokeWidth="1" opacity="0.3" />
          </svg>
        ) : (
          /* Technical Structural Blueprint Mode (Corte Estrutural NBR 6118) */
          <svg
            viewBox="0 0 1200 720"
            className="w-full h-full object-cover bg-[#13171A]"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Corte estrutural técnico com cotas de balanço, fundação e especificações NBR 6118"
          >
            <defs>
              <pattern id="blueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#26323B"
                  strokeWidth="0.75"
                />
              </pattern>
              <pattern id="blueprintSubGrid" width="200" height="200" patternUnits="userSpaceOnUse">
                <rect width="200" height="200" fill="url(#blueprintGrid)" />
                <path
                  d="M 200 0 L 0 0 0 200"
                  fill="none"
                  stroke="#324350"
                  strokeWidth="1.2"
                />
              </pattern>
            </defs>

            {/* Technical Grid Canvas */}
            <rect width="1200" height="720" fill="url(#blueprintSubGrid)" />

            {/* Structural Axis Lines (Eixos A, B, C, D) */}
            {[200, 480, 745, 995].map((xPos, idx) => (
              <g key={`axis-${idx}`}>
                <line
                  x1={xPos}
                  y1="70"
                  x2={xPos}
                  y2="650"
                  stroke="#5A768C"
                  strokeWidth="1"
                  strokeDasharray="8 6"
                />
                <circle cx={xPos} cy="52" r="14" fill="#13171A" stroke="#8AB4D6" strokeWidth="1.2" />
                <text
                  x={xPos}
                  y="56"
                  textAnchor="middle"
                  fill="#8AB4D6"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="12"
                >
                  {['A', 'B', 'C', 'D'][idx]}
                </text>
              </g>
            ))}

            {/* Elevation Level Markers (Níveis) */}
            {[
              { y: 195, label: 'NÍVEL +6,45m (COBERTURA)' },
              { y: 395, label: 'NÍVEL +3,20m (PAV. SUPERIOR)' },
              { y: 506, label: 'NÍVEL ±0,00m (DECK / PISCINA)' },
              { y: 615, label: 'NÍVEL -3,80m (ENGASTE ROCHA SÃ)' },
            ].map((lvl, idx) => (
              <g key={`lvl-${idx}`}>
                <line
                  x1="70"
                  y1={lvl.y}
                  x2="1120"
                  y2={lvl.y}
                  stroke="#4B6375"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />
                <text
                  x="78"
                  y={lvl.y - 8}
                  fill="#9BC2E0"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                >
                  {lvl.label}
                </text>
              </g>
            ))}

            {/* Deep Foundation Piles & Rock Anchors (Estacas & Tirantes) */}
            {[200, 480, 745].map((xPos, idx) => (
              <g key={`pile-${idx}`}>
                <rect
                  x={xPos - 14}
                  y="506"
                  width="28"
                  height="115"
                  fill="#1E2B34"
                  stroke="#8AB4D6"
                  strokeWidth="1.5"
                />
                <line x1={xPos - 14} y1="520" x2={xPos + 14} y2="545" stroke="#5A768C" strokeWidth="1" />
                <line x1={xPos - 14} y1="550" x2={xPos + 14} y2="575" stroke="#5A768C" strokeWidth="1" />
                <line x1={xPos - 14} y1="580" x2={xPos + 14} y2="605" stroke="#5A768C" strokeWidth="1" />
              </g>
            ))}

            {/* Structural Wireframe of Upper & Lower Volumes */}
            <rect
              x="150"
              y="395"
              width="615"
              height="111"
              fill="#1A242C"
              fillOpacity="0.6"
              stroke="#B8D8F0"
              strokeWidth="2"
            />
            <polygon
              points="120,205 995,195 995,395 120,395"
              fill="#1D2B36"
              fillOpacity="0.7"
              stroke="#E2F1FC"
              strokeWidth="2.5"
            />

            {/* Prestressed Tendon Parabolic Curve inside Cantilever Beam */}
            <path
              d="M 200 240 Q 480 265 745 212 Q 870 212 990 245"
              fill="none"
              stroke="#E59856"
              strokeWidth="2.5"
              strokeDasharray="10 4"
            />
            <text
              x="765"
              y="182"
              fill="#E59856"
              fontFamily="JetBrains Mono, monospace"
              fontSize="12"
            >
              CABO PROTENDIDO CP-190 RB · BALANÇO LIVRE 6,80m
            </text>

            {/* Dimension Line for Cantilever */}
            <line x1="745" y1="435" x2="995" y2="435" stroke="#E59856" strokeWidth="1.5" />
            <line x1="745" y1="425" x2="745" y2="445" stroke="#E59856" strokeWidth="1.5" />
            <line x1="995" y1="425" x2="995" y2="445" stroke="#E59856" strokeWidth="1.5" />
            <text
              x="870"
              y="456"
              textAnchor="middle"
              fill="#E59856"
              fontFamily="JetBrains Mono, monospace"
              fontSize="12"
            >
              L = 6.800 mm (VÃO EM BALANÇO)
            </text>

            {/* Infinity Pool Section */}
            <polygon
              points="340,506 1060,506 1110,575 340,575"
              fill="none"
              stroke="#6CC3D5"
              strokeWidth="2"
            />
          </svg>
        )}

        {/* Interactive Engineering Hotspots */}
        {hotspots.map((spot) => {
          const isSelected = activeHotspot === spot.id;
          return (
            <button
              key={spot.id}
              type="button"
              onClick={() => setActiveHotspot(spot.id)}
              style={{ left: spot.x, top: spot.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-2.5 py-1 text-xs font-mono-tabular transition-transform duration-150 border ${
                isSelected
                  ? 'bg-[#F8F6F2] text-[#141413] border-[#F8F6F2] scale-105 shadow-md'
                  : 'bg-[#141312]/85 text-[#E6E1D8] border-white/30 hover:border-white'
              }`}
              aria-label={`Inspecionar detalhe técnico ${spot.code}: ${spot.title}`}
            >
              {spot.code}
            </button>
          );
        })}

        {/* Measured Bottom Scrim + Active Hotspot Technical Callout */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#121110] via-[#121110]/85 to-transparent p-5 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/15 pt-3.5">
            <div>
              <div className="text-xs font-mono-tabular text-[#D4A373]">
                DETALHE EXECUTIVO {hotspots[activeHotspot].code} · {hotspots[activeHotspot].title}
              </div>
              <p className="text-xs sm:text-sm text-[#E6E1D8] mt-1 max-w-2xl">
                {hotspots[activeHotspot].detail}
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHotspot(h.id)}
                  className={`px-2.5 py-1 text-xs font-mono-tabular border transition-colors ${
                    activeHotspot === h.id
                      ? 'border-[#D4A373] text-[#F8F6F2] bg-white/10'
                      : 'border-white/15 text-[#9E9890] hover:text-white'
                  }`}
                >
                  {h.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectPlateProps {
  plateType: ProjectItem['plateType'];
  code: string;
  city: string;
}

export const ProjectArchitecturalPlate: React.FC<ProjectPlateProps> = ({
  plateType,
  code,
  city,
}) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-[#1A1917] overflow-hidden border-b border-[#E2DDD5]">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={`Ilustração arquitetônica e estrutural da obra ${code} em ${city}`}
      >
        <defs>
          <linearGradient id={`sky-${plateType}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#232930" />
            <stop offset="60%" stopColor="#5C646B" />
            <stop offset="100%" stopColor="#B89B7D" />
          </linearGradient>
          <linearGradient id={`concrete-${plateType}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EAE5DC" />
            <stop offset="100%" stopColor="#C4BDB1" />
          </linearGradient>
          <linearGradient id={`wood-${plateType}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8E542B" />
            <stop offset="100%" stopColor="#5E3518" />
          </linearGradient>
        </defs>

        {/* Background Sky */}
        <rect width="800" height="600" fill={`url(#sky-${plateType})`} />

        {/* Subtle Architectural Grid Overlay */}
        <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
          <line x1="160" y1="0" x2="160" y2="600" />
          <line x1="400" y1="0" x2="400" y2="600" />
          <line x1="640" y1="0" x2="640" y2="600" />
          <line x1="0" y1="200" x2="800" y2="200" />
          <line x1="0" y1="420" x2="800" y2="420" />
        </g>

        {plateType === 'buzios-villa' && (
          <g>
            <rect x="0" y="420" width="800" height="180" fill="#1B2A32" />
            <polygon points="80,190 710,175 710,330 80,340" fill={`url(#concrete-${plateType})`} />
            <rect x="140" y="220" width="240" height="105" fill={`url(#wood-${plateType})`} />
            <rect x="395" y="220" width="275" height="105" fill="#28333A" />
            <rect x="130" y="340" width="460" height="110" fill="#4E4A44" />
            <polygon points="220,450 740,450 780,530 180,530" fill="#2A4A58" />
          </g>
        )}

        {plateType === 'cabofrio-house' && (
          <g>
            <rect x="0" y="440" width="800" height="160" fill="#24221F" />
            <rect x="90" y="280" width="620" height="160" fill="#635D55" />
            <rect x="140" y="160" width="520" height="140" fill={`url(#concrete-${plateType})`} />
            <rect x="175" y="190" width="210" height="95" fill={`url(#wood-${plateType})`} />
            <rect x="405" y="190" width="220" height="95" fill="#2B3740" />
            <rect x="160" y="310" width="480" height="130" fill="#D59B5A" fillOpacity="0.35" />
            <rect x="260" y="465" width="460" height="80" fill="#2D4C59" />
          </g>
        )}

        {plateType === 'arraial-cliff' && (
          <g>
            <rect x="0" y="390" width="800" height="210" fill="#182832" />
            <polygon points="0,330 460,360 620,600 0,600" fill="#2C2926" />
            <polygon points="150,180 730,165 730,305 150,315" fill={`url(#concrete-${plateType})`} />
            <rect x="220" y="205" width="460" height="95" fill="#223038" />
            <line x1="450" y1="205" x2="450" y2="300" stroke="#EAE5DC" strokeWidth="4" />
            <polygon points="150,315 730,305 690,335 190,335" fill={`url(#wood-${plateType})`} />
            <line x1="260" y1="315" x2="260" y2="465" stroke="#C4BDB1" strokeWidth="14" />
            <line x1="510" y1="310" x2="510" y2="510" stroke="#C4BDB1" strokeWidth="14" />
          </g>
        )}

        {plateType === 'spa-condo' && (
          <g>
            <rect x="0" y="445" width="800" height="155" fill="#232A25" />
            <rect x="75" y="255" width="650" height="190" fill={`url(#concrete-${plateType})`} />
            <rect x="120" y="290" width="280" height="155" fill="#2A343B" />
            <rect x="420" y="290" width="265" height="155" fill={`url(#wood-${plateType})`} />
            <line x1="55" y1="255" x2="745" y2="255" stroke="#171614" strokeWidth="8" />
            <rect x="120" y="475" width="560" height="75" fill="#294854" />
          </g>
        )}

        {plateType === 'buzios-retrofit' && (
          <g>
            <rect x="0" y="435" width="800" height="165" fill="#1F1D1B" />
            <rect x="110" y="195" width="580" height="240" fill={`url(#concrete-${plateType})`} />
            {/* Exposed Structural Steel Portal Frame (Reforço Metálico W) */}
            <rect x="160" y="235" width="480" height="200" fill="#252E34" stroke="#141413" strokeWidth="12" />
            <line x1="400" y1="235" x2="400" y2="435" stroke="#141413" strokeWidth="10" />
            <rect x="175" y="250" width="210" height="85" fill={`url(#wood-${plateType})`} />
            <rect x="415" y="250" width="210" height="175" fill="#C98F4B" fillOpacity="0.4" />
          </g>
        )}

        {plateType === 'iguaba-lake' && (
          <g>
            <rect x="0" y="425" width="800" height="175" fill="#1E333D" />
            <rect x="65" y="265" width="670" height="160" fill={`url(#concrete-${plateType})`} />
            <rect x="115" y="295" width="340" height="130" fill="#26333B" />
            <rect x="475" y="295" width="215" height="130" fill={`url(#wood-${plateType})`} />
            <polygon points="45,265 755,265 735,240 65,240" fill="#D8D1C5" />
            <line x1="115" y1="465" x2="685" y2="465" stroke="#D9B894" strokeWidth="2" opacity="0.5" />
          </g>
        )}
      </svg>

      {/* Subtle Technical Plate Index Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 py-3 flex items-center justify-between text-xs font-mono-tabular text-[#EAE5DC]">
        <span>{code}</span>
        <span>{city.toUpperCase()} · RJ</span>
      </div>
    </div>
  );
};
