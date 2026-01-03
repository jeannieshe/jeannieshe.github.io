import ImageSlider from "./imageslider";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  keywords?: string[];
  tech?: string[];
  images?: string[];
  imageHeight?: string;
  imageAspectRatio?: string;
}

export default function Card({
  title,
  subtitle,
  description,
  keywords,
  tech,
  images,
  imageHeight = "h-[250px]",
  imageAspectRatio = "4/3",
}: CardProps) {
  return (
    <div className="bg-neutral-900 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-neutral-800">
      <div className="flex flex-col md:flex-row gap-6">
        <div className={images && images.length > 0 ? "md:w-[60%]" : "w-full"}>
          <h2 className="font-bold text-lg mb-2">{title}</h2>
          {subtitle && <p className="italic mb-3 text-neutral-300">{subtitle}</p>}
          <div className="text-neutral-100">{description}</div>
          {tech && tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
              {tech.map((keyword, index) => (
                  <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono uppercase bg-[#FF9BCD] text-neutral-300 rounded-full transition-all duration-200 hover:bg-neutral-700 hover:text-white hover:scale-105"
                  >
                  {keyword}
                </span>
              ))}
            </div>
          )}
          {keywords && keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono uppercase bg-neutral-800 text-neutral-300 rounded-full transition-all duration-200 hover:bg-neutral-700 hover:text-white hover:scale-105"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
        {images && images.length > 0 && (
          <div className="md:w-[40%] flex items-center justify-center">
            <ImageSlider
              images={images}
              height={imageHeight}
              aspectRatio={imageAspectRatio}
            />
          </div>
        )}
      </div>
    </div>
  );
}

