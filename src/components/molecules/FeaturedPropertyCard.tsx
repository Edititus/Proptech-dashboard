import type { ReactNode } from "react";

export interface FeaturedPropertyCardProps {
  image: string | ReactNode;
  title?: ReactNode;
  badge?: string;
}

export function FeaturedPropertyCard({
  image,
  title,
  badge,
}: FeaturedPropertyCardProps) {
  return (
    <div className='relative rounded-lg overflow-hidden h-72 group cursor-pointer'>
      {/* Image */}
      {typeof image === "string" ? (
        <img
          src={image}
          alt={typeof title === "string" ? title : "Property"}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      ) : (
        <div className='w-full h-full group-hover:scale-105 transition-transform duration-300 [&>svg]:w-full [&>svg]:h-full [&>svg]:absolute [&>svg]:inset-0'>
          {image}
        </div>
      )}

      {/* Overlay gradient - stronger gradient for better text visibility */}
      <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent' />

      {/* Content - improved padding and positioning for mobile */}
      <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white'>
        {badge && (
          <p className='text-xs sm:text-sm font-medium uppercase mb-1.5 sm:mb-2 opacity-90 line-clamp-1'>
            {badge}
          </p>
        )}
        {title && (
          <h3 className='text-lg sm:text-xl font-semibold line-clamp-2'>
            {title}
          </h3>
        )}
      </div>
    </div>
  );
}
