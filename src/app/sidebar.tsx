"use client";

import type React from "react";

export default function Sidebar({
  slides,
  currentSlide,
  setCurrentSlide,
}: {
  slides: {
    name: string;
    url: string;
    title: string;
    description: string;
    component?: React.ComponentType;
  }[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}) {
  return (
    <div className="w-48 space-y-4 overflow-y-scroll border-r p-4">
      {slides.map((slide, index) => (
        <div
          key={slide.name}
          className={`aspect-video cursor-pointer rounded-lg border-2 transition-colors hover:border-gray-400 ${
            currentSlide === index ? "border-primary" : ""
          }`}
          onClick={() => setCurrentSlide(index)}
          onKeyUp={() => setCurrentSlide(index)}
          onKeyDown={() => setCurrentSlide(index)}
        >
          <div className="flex items-center justify-between p-2 text-xs">
            <span>{index + 1}</span>
            <span className="truncate text-[10px] text-muted-foreground">
              {slide.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
