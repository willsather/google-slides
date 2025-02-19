import Navigation from "@/app/navigation";
import Slides from "@/app/slides";
import SpeakerNotes from "@/app/speaker-notes";

export default function GoogleSlidesPortfolio() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Navigation />

      <Slides />

      <SpeakerNotes />
    </div>
  );
}
