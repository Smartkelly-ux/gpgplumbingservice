import React, { useState } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspectRatioClass?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

/**
 * EditorialImage provides lazy loading with an elegant subtle cross-fade
 * and scale settling transition, maintaining the quiet luxury aesthetic
 * without jarring layout shifts or harsh pops.
 */
export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  priority = false,
  aspectRatioClass = '',
  overlayClassName,
  children,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#1a1a18] ${aspectRatioClass} ${containerClassName}`}
    >
      {/* Editorial Cross-Fade Image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ease-out ${
          isLoaded
            ? 'opacity-100 scale-100 filter-none'
            : 'opacity-0 scale-[1.03] filter blur-[4px]'
        } ${className}`}
        {...rest}
      />

      {/* Optional Editorial Tint / Grain Overlay */}
      {overlayClassName && (
        <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />
      )}

      {/* Optional Inset Content / Badges */}
      {children}
    </div>
  );
};
