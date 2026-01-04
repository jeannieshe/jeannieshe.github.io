import ImageSlider from "./imageslider";
import { ReactNode } from "react";
import ArrowIcon from "./ArrowIcon";

interface Link {
  text: string;
  url: string;
}

interface CardProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  keywords?: string[];
  tech?: string[];
  links?: Link[];
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
  links,
  images,
  imageHeight = "h-[250px]",
  imageAspectRatio = "4/3",
}: CardProps) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <div className="flex flex-col md:flex-row gap-6">
        <div className={images && images.length > 0 ? "md:w-[60%]" : "w-full"}>
          <h2 className="font-bold text-lg mb-2 text-neutral-900 dark:text-neutral-100">{title}</h2>
          {subtitle && <p className="italic mb-3 text-neutral-600 dark:text-neutral-300">{subtitle}</p>}
          <div className="text-neutral-800 dark:text-neutral-100">{description}</div>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono uppercase bg-[#E88CB9] dark:bg-[#B33E6D] text-neutral-900 dark:text-neutral-300 rounded-full transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-105 cursor-pointer"
                >
                  <span>{link.text}</span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          )}
          {tech && tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
              {tech.map((keyword, index) => (
                  <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono uppercase bg-[#A3D9A5] dark:bg-[#002900] text-neutral-900 dark:text-neutral-300 rounded-full transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-105"
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
                  className="px-3 py-1 text-xs font-mono uppercase bg-[#C8E6C9] dark:bg-[#003D00] text-neutral-900 dark:text-neutral-300 rounded-full transition-all duration-200 hover:text-black dark:hover:text-white hover:scale-105"
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

