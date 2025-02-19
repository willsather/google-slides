export default function SpeakerNotes() {
  return (
    <div className="h-24 border-t bg-muted/10 p-4">
      <textarea
        className="h-full w-full resize-none bg-transparent text-muted-foreground text-sm placeholder-muted-foreground focus:outline-none"
        placeholder="Click to add speaker notes"
      />
    </div>
  );
}
