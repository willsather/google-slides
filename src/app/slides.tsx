"use client";

import Toolbar from "@/app/toolbar";
import { useState } from "react";

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFont, setSelectedFont] = useState("font-sans");

  return (
    <>
      <Toolbar selectedFont={selectedFont} setSelectedFont={setSelectedFont} />

      <div className={`flex flex-1 overflow-hidden ${selectedFont}`}>
        {/* Left Sidebar */}
        <div className="w-48 space-y-4 border-r p-4">
          {[
            { number: 1, title: "AI Chat Bot" },
            { number: 2, title: "3D Portfolio" },
            { number: 3, title: "Blockchain Voting" },
            { number: 4, title: "AR Navigation App" },
            { number: 5, title: "IoT Dashboard" },
          ].map((slide, index) => (
            <div
              key={`slide-${index.toString()}`}
              className={`aspect-video cursor-pointer rounded-lg border-2 transition-colors hover:border-gray-400 ${
                currentSlide === index ? "border-primary" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              onKeyUp={() => setCurrentSlide(index)}
              onKeyDown={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between p-2 text-xs">
                <span>{slide.number}</span>
                <span className="truncate text-[10px] text-muted-foreground">
                  {slide.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Content */}
        <div className="flex-1 bg-muted/20 p-8">
          <div className="mx-auto aspect-video max-w-4xl rounded-lg bg-background p-8 shadow-lg">
            {currentSlide === 0 && (
              <div className="space-y-4">
                <h1 className="mt-20 text-center font-light text-4xl">
                  AI-Powered Chat Bot
                </h1>
                <p className="text-center text-muted-foreground text-xl">
                  Natural language processing for customer support
                </p>
              </div>
            )}
            {currentSlide === 1 && (
              <div className="space-y-4">
                <h1 className="mt-20 text-center font-light text-4xl">
                  3D Portfolio Visualizer
                </h1>
                <p className="text-center text-muted-foreground text-xl">
                  Interactive 3D representation of project achievements
                </p>
              </div>
            )}
            {currentSlide === 2 && (
              <div className="space-y-4">
                <h1 className="mt-20 text-center font-light text-4xl">
                  Blockchain Voting System
                </h1>
                <p className="text-center text-muted-foreground text-xl">
                  Secure and transparent digital voting platform
                </p>
              </div>
            )}
            {currentSlide === 3 && (
              <div className="space-y-4">
                <h1 className="mt-20 text-center font-light text-4xl">
                  AR Navigation App
                </h1>
                <p className="text-center text-muted-foreground text-xl">
                  Augmented reality for intuitive city navigation
                </p>
              </div>
            )}
            {currentSlide === 4 && (
              <div className="space-y-4">
                <h1 className="mt-20 text-center font-light text-4xl">
                  Smart Home IoT Dashboard
                </h1>
                <p className="text-center text-muted-foreground text-xl">
                  Centralized control for connected home devices
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
