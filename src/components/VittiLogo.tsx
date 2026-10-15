import React from 'react';

interface VittiLogoProps {
  variant?: 'official' | 'official-with-subtitle' | 'wordmark' | 'mark' | 'circle-dark' | 'circle-light';
  theme?: 'dark' | 'light';
  className?: string;
  subtitleClassName?: string;
}

/**
 * Official Grupo Vitti brand identity component:
 * - Architectural "V" with left roof cantilever peak
 * - Official GRUPO VITTI vector lockup (scalable, responsive)
 * - Subtitle: "Construção, Reforma & Tecnologia" (clearly legible, styled with precision)
 */
export const VittiLogo: React.FC<VittiLogoProps> = ({
  variant = 'official',
  theme = 'light',
  className = '',
  subtitleClassName = '',
}) => {
  // theme === 'light' means light text for DARK backgrounds (like our dark UI)
  // theme === 'dark' means dark text for LIGHT backgrounds
  const fillColor = theme === 'light' ? '#FFFFFF' : '#0A0A0A';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 440 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Símbolo Grupo Vitti"
      >
        <path
          d="M12 132L186 18L228 40L325 262L399 22H426L333 295H321L187 35L13 136L12 132Z"
          fill={fillColor}
        />
      </svg>
    );
  }

  if (variant === 'circle-dark') {
    return (
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Emblema Circular Grupo Vitti"
      >
        <circle cx="256" cy="256" r="244" fill="#0A0A0A" />
        <path
          d="M66 239.5L183.5 156L224.5 178L318.5 396.5L394 159.5H418.5L326 425L316 425L184.5 171.5L67.5 245.5L66 239.5Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (variant === 'circle-light') {
    return (
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Emblema Circular Claro Grupo Vitti"
      >
        <circle cx="256" cy="256" r="244" fill="#FFFFFF" stroke="#141413" strokeWidth="3" />
        <path
          d="M66 239.5L183.5 156L224.5 178L318.5 396.5L394 159.5H418.5L326 425L316 425L184.5 171.5L67.5 245.5L66 239.5Z"
          fill="#0A0A0A"
        />
      </svg>
    );
  }

  if (variant === 'official-with-subtitle') {
    return (
      <div className={`inline-flex flex-col items-start justify-center ${className}`}>
        {/* Logo Mark Oficial GRUPO [V] ITTI */}
        <svg
          viewBox="65 78 790 296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 sm:h-8 w-auto"
          role="img"
          aria-label="Grupo Vitti"
        >
          {/* Architectural V Mark with Left Roof Cantilever */}
          <path
            d="M296 206L475 94L516 116L612 336L686 98H712L620 368H608L476 111L297 210L296 206Z"
            fill={fillColor}
          />
          {/* GRUPO */}
          <text
            x="94"
            y="346"
            fill={fillColor}
            fontFamily="'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
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
            fill={fillColor}
            fontFamily="'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontSize="102"
            fontWeight="800"
            letterSpacing="4"
          >
            ITTI
          </text>
        </svg>

        {/* Subtitle - Geometria refinada, elegante e harmoniosa (sem grosseria, perfeitamente legível) */}
        <span
          className={`text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] text-[#C89467] font-sans uppercase mt-0.5 pl-0.5 select-none leading-none ${subtitleClassName}`}
        >
          Construção, Reforma & Tecnologia
        </span>
      </div>
    );
  }

  // Official standalone lockup (tightly cropped, razor sharp)
  return (
    <svg
      viewBox="55 76 820 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Grupo Vitti"
    >
      {/* Architectural V Mark with Left Roof Cantilever */}
      <path
        d="M296 206L475 94L516 116L612 336L686 98H712L620 368H608L476 111L297 210L296 206Z"
        fill={fillColor}
      />
      {/* GRUPO */}
      <text
        x="94"
        y="346"
        fill={fillColor}
        fontFamily="'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
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
        fill={fillColor}
        fontFamily="'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="102"
        fontWeight="800"
        letterSpacing="4"
      >
        ITTI
      </text>
    </svg>
  );
};
