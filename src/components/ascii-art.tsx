function getAsciiLines(art: string): string[] {
  return art.split("\n").filter((line) => line.length > 0);
}

type AsciiArtProps = {
  art: string;
  className?: string;
};

export function AsciiArt({ art, className = "" }: AsciiArtProps) {
  const lines = getAsciiLines(art);

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <span className="ascii-art-line" key={index}>
          {line}
        </span>
      ))}
    </div>
  );
}
