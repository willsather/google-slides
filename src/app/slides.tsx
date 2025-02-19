"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Project from "@/app/project";
import Toolbar from "@/app/toolbar";

const slides = [
  {
    name: "Website",
    url: "www.sather.ws",
    title: "Personal Website",
    description: "resume, blog, and just about me",
  },
  {
    name: "TechCrunch",
    title: "TechCrunch Skills Assessment",
    url: "techcrunchy.vercel.app",
    description: "recreated techcrunch.com using next.js and vercel",
  },
  {
    name: "Family Tree",
    title: "Sather Family Tree",
    url: "www.sather.family",
    description:
      "paired with v0 and my grandparents to build a digital family tree",
  },
  {
    name: "MN Civic Tech",
    title: "MN Civic Tech",
    url: "www.mncivictech.org",
    description:
      "co-founded a civic tech nonprofit in minnesota (and of course built the website)",
  },
  {
    name: "Portfolio",
    title: "Google Slides Portfolio",
    url: "google-slides-portfolio.vercel.app",
    description:
      "paired with v0 to build a google slides 'presentation' of my vercel / next.js applications",
  },
];

export default function Slides({ present }: { present?: boolean }) {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFont, setSelectedFont] = useState("font-sans");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setCurrentSlide((prev) => {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          return prev < slides.length - 1 ? prev + 1 : prev;
        }

        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          return prev > 0 ? prev - 1 : prev;
        }

        return prev;
      });

      if (
        event.key === "Escape" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <>
      {!present ? (
        <Toolbar
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
      ) : null}

      <div className={`flex flex-1 overflow-hidden ${selectedFont}`}>
        {/* Left Sidebar */}
        {!present ? (
          <div className="w-48 space-y-4 border-r p-4">
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
        ) : null}

        {/* Slide Content */}
        <div className="flex-1 bg-muted/20 p-8">
          <div className="mx-auto aspect-video max-w-4xl rounded-lg bg-background p-8 shadow-lg">
            <Project
              name={slides[currentSlide].title}
              url={slides[currentSlide].url}
              description={slides[currentSlide].description}
            />
          </div>
        </div>
      </div>
    </>
  );
}
