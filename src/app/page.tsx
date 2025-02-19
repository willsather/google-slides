"use client";

import {
  ChevronDown,
  Circle,
  ImageIcon,
  Layout,
  Printer,
  Redo2,
  Share2,
  Star,
  Type,
  Undo2,
  ZoomIn,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

import LogoIcon from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function GoogleSlidesPortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [presentationName, setPresentationName] = useState("Will Sather");
  const [isStarred, setIsStarred] = useState(false);

  const presentationNameRef = useRef<HTMLInputElement | null>(null);

  const menuItems = [
    {
      label: "File",
      items: ["New", "Open", "Make a copy", "Share", "Download", "Print"],
    },
    {
      label: "Edit",
      items: ["Undo", "Redo", "Cut", "Copy", "Paste", "Select all"],
    },
    {
      label: "View",
      items: ["Show ruler", "Show guides", "Show grid", "Full screen"],
    },
    {
      label: "Insert",
      items: ["Image", "Text box", "Shape", "Line", "Video"],
    },
    {
      label: "Format",
      items: ["Text", "Align", "Line spacing", "Lists", "Columns"],
    },
    {
      label: "Slide",
      items: ["New slide", "Duplicate", "Delete", "Skip", "Change background"],
    },
    {
      label: "Arrange",
      items: ["Order", "Align", "Center on page", "Rotate"],
    },
    {
      label: "Tools",
      items: ["Spelling", "Word count", "Preferences"],
    },
    {
      label: "Extensions",
      items: ["Add-ons", "Get add-ons", "Manage add-ons"],
    },
    {
      label: "Help",
      items: ["Documentation", "Keyboard shortcuts", "Report an issue"],
    },
  ];

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  async function copyShareLink() {
    try {
      const currentUrl = window.location.href;

      await navigator.clipboard.writeText(currentUrl);

      toast.success("Link Copied", {
        description: "The URL has been copied to your clipboard.",
      });
    } catch (error) {
      console.error("Failed to copy", error);

      toast.error("Copy Failed", {
        description: "Unable to copy the URL. Please try again.",
      });
    }
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top Navigation */}
      <div className="mt-2 flex items-center gap-4 border-b px-4">
        <div className="flex items-center gap-2">
          <LogoIcon className="size-10" />

          <div className="flex flex-col">
            <div className="flex">
              <input
                type="text"
                value={presentationName}
                placeholder="Untitled Presentation"
                onChange={(e) => setPresentationName(e.target.value)}
                className="rounded border border-transparent bg-transparent px-1 py-0.5 text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-1"
              />

              <Button
                variant="ghost"
                size="icon"
                className={`size-8 ${isStarred ? "text-yellow-400" : "text-gray-400"}`}
                onClick={toggleStar}
              >
                <Star
                  className={`h-4 w-4 ${isStarred ? "fill-yellow-400" : "fill-none"}`}
                />
              </Button>

              <div className="grow" />
            </div>

            <div className="flex gap-0.5">
              {menuItems.map((menu) => (
                <div key={menu.label} className="group relative">
                  <button
                    type="button"
                    className="rounded-sm px-3 py-1 text-xs hover:bg-accent"
                  >
                    {menu.label}
                  </button>
                  <div className="absolute top-full left-0 z-50 hidden group-hover:block">
                    <div className="mt-1 w-48 rounded-md border bg-popover py-1 shadow-md">
                      {menu.items.map((item) => (
                        <button
                          type="button"
                          key={item}
                          className="block w-full px-4 py-2 text-left text-xs hover:bg-accent"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="my-1 ml-auto">
            <Button variant="outline" className="gap-2 rounded-2xl">
              Slideshow
            </Button>
          </div>

          <Button
            variant="outline"
            className="gap-2 rounded-2xl bg-blue-300/50 hover:bg-blue-300/40"
            onClick={copyShareLink}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="m-2 flex items-center gap-2 rounded-xl border-b bg-gray-100 px-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Redo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Printer className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ZoomIn className="h-4 w-4" />
        </Button>

        <div className="mx-2 h-4 w-px bg-border" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 gap-1 text-xs">
              Arial
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Arial</DropdownMenuItem>
            <DropdownMenuItem>Times New Roman</DropdownMenuItem>
            <DropdownMenuItem>Roboto</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex rounded border">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Layout className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Type className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Circle className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
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

      {/* Bottom Bar */}
      <div className="h-24 border-t bg-muted/10 p-4">
        <textarea
          className="h-full w-full resize-none bg-transparent text-muted-foreground text-sm placeholder-muted-foreground focus:outline-none"
          placeholder="Click to add speaker notes"
        />
      </div>
    </div>
  );
}
