/**
 * PhotoPlaceholder.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Honest gradient placeholders with colour themes from v0.2
 */

interface PhotoPlaceholderProps {
  className?: string;
  caption?: string;
  hideCaption?: boolean;
  variant?: "sage" | "terra" | "slate" | "blush" | "olive" | "stone";
  aspectRatio?: "4/5" | "3/4" | "3/3.4" | "square" | "auto";
  size?: "default" | "hero" | "card";
}

const variantGradients = {
  sage: "linear-gradient(160deg, var(--ph-sage) 0%, #7E8F7E 70%)",
  terra: "linear-gradient(150deg, #B07A5E 0%, #9B6B52 75%)",
  slate: "linear-gradient(165deg, #8C9AA8 0%, #5E6B78 80%)",
  blush: "linear-gradient(155deg, #C9A8A0 0%, #A88A82 78%)",
  olive: "linear-gradient(160deg, #7E7B5E 0%, #5C5A43 70%)",
  stone: "linear-gradient(150deg, #C9BCA4 0%, #B9AF9E 75%)",
};

const aspectRatioClasses = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "3/3.4": "aspect-[3/3.4]",
  square: "aspect-square",
  auto: "w-full h-auto",
};

export default function PhotoPlaceholder({
  className = "",
  caption = "D&B photography · visual placeholder only",
  hideCaption = false,
  variant = "sage",
  aspectRatio = "4/5",
  size = "default",
}: PhotoPlaceholderProps) {
  const gradient = variantGradients[variant];
  const aspectClass = aspectRatioClasses[aspectRatio];
  const sizeClass =
    size === "hero" ? "photo--hero" : size === "card" ? "photo--card" : "";

  return (
    <figure
      className={`photo relative overflow-hidden bg-sand ${aspectClass} ${sizeClass} ${className}`}
      data-caption={caption}
    >
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

      <div
        className="absolute inset-0"
        style={{
          background: gradient,
        }}
      />

      {!hideCaption && caption ? (
        <figcaption className="photo__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
