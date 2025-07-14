import React, { ReactNode, CSSProperties } from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  children: ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = '',
}) => {
  const inlineStyles: CSSProperties = {
    // @ts-ignore
    '--after-duration': `${speed * 3}s`,
    // @ts-ignore
    '--before-duration': `${speed * 2}s`,
    // @ts-ignore
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    // @ts-ignore
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none',
  };

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div
      className={`glitch ${hoverClass} ${className}`}
      style={inlineStyles}
      data-text={children}
    >
      {children}
    </div>
  );
};

export default GlitchText;
