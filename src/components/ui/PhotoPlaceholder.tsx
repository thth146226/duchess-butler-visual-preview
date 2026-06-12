/**
 * PhotoPlaceholder.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Honest gradient placeholders with colour themes from v0.2
 */

interface PhotoPlaceholderProps {
  className?: string;
  caption?: string;
  variant?: 'sage' | 'terra' | 'slate' | 'blush' | 'olive' | 'stone';
  aspectRatio?: '4/5' | '3/4' | '3/3.4' | 'square' | 'auto';
}

const variantGradients = {
  sage: 'linear-gradient(160deg, var(--ph-sage) 0%, #7E8F7E 70%)',
  terra: 'linear-gradient(150deg, #B07A5E 0%, #9B6B52 75%)',
  slate: 'linear-gradient(165deg, #8C9AA8 0%, #5E6B78 80%)',
  blush: 'linear-gradient(155deg, #C9A8A0 0%, #A88A82 78%)',
  olive: 'linear-gradient(160deg, #7E7B5E 0%, #5C5A43 70%)',
  stone: 'linear-gradient(150deg, #C9BCA4 0%, #B9AF9E 75%)',
};

const aspectRatioClasses = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '3/3.4': 'aspect-[3/3.4]',
  square: 'aspect-square',
  auto: 'w-full h-auto',
};

export default function PhotoPlaceholder({
  className = '',
  caption = 'D&B photography · visual placeholder only',
  variant = 'sage',
  aspectRatio = '4/5',
}: PhotoPlaceholderProps) {
  const gradient = variantGradients[variant];
  const aspectClass = aspectRatioClasses[aspectRatio];

  return (
    <figure
      className={`photo relative overflow-hidden bg-sand ${aspectClass} ${className}`}
      data-caption={caption}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.05) 0 2px,
              transparent 2px 6px
            ),
            radial-gradient(
              120% 90% at 70% 20%,
              rgba(255, 255, 255, 0.22),
              transparent 60%
            )
          `,
        }}
      />

      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: gradient,
        }}
      />

      {/* Caption overlay */}
      <figcaption
        className="absolute left-3.5 bottom-3 text-xs uppercase letter-spacing-22 text-linen/85 text-shadow"
        style={{
          textShadow: '0 1px 6px rgba(43, 39, 34, 0.35)',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
