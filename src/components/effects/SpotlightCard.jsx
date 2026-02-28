import { useRef, useState } from 'react';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = '#1E2839',
  cardId = 'item-card',
  link,
  tags = [],
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
      id={cardId}
    >
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
        >
          <span className="text-lg leading-none font-sans" id='arrow-symbol'>↗</span>
        </a>
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Основное содержимое */}
      <div className="relative">
        {children}
      </div>

      {/* Теги снизу слева */}
      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpotlightCard;
