export default function Project({
  name,
  url,
  description,
}: { name: string; url: string; description: string }) {
  return (
    <div className="space-y-4">
      <h1 className="mt-20 mb-4 text-center font-light text-4xl">{name}</h1>

      <a href={`https://${url}`} target="_blank" rel="noreferrer">
        <p className="text-center font-mono text-lg text-muted-foreground italic hover:underline">
          {url}
        </p>
      </a>

      <p className="text-center text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
