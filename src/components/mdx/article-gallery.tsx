"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function ArticleGallery({ images }: { images: GalleryImage[] }) {
  if (!images.length) return null;
  return (
    <Carousel opts={{ loop: true }} className="mx-auto my-12 w-full max-w-3xl">
      <CarouselContent>
        {images.map(({ src, alt, caption }) => (
          <CarouselItem key={src}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="mx-auto max-h-[480px] w-full rounded-2xl object-contain"
              />
              {caption && (
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  {caption}
                </figcaption>
              )}
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-background/80 backdrop-blur" />
      <CarouselNext className="right-2 bg-background/80 backdrop-blur" />
    </Carousel>
  );
}
