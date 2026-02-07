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

      {/* Overlay gradient */}
      <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent' />

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
        <p className='text-sm font-medium uppercase mb-2 opacity-90'>{badge}</p>
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
    </div>
  );
}
