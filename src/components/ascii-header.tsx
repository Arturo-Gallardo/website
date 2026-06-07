import { AsciiArt } from "@/components/ascii-art";
import { asciiLogo } from "@/data/ascii-logo";
import { asciiWing } from "@/data/ascii-wings";
import { site } from "@/data/site";

export function AsciiHeader() {
  return (
    <header className="ascii-header-wrap" id="top">
      <a className="ascii-header" href="#top" aria-label={`${site.name} logo`}>
        <div className="ascii-header-cluster" aria-hidden="true">
          <AsciiArt art={asciiWing} className="ascii-wing ascii-wing-left" />
          <div className="ascii-header-logo-slot">
            <AsciiArt art={asciiLogo} className="ascii-header-art" />
          </div>
          <AsciiArt art={asciiWing} className="ascii-wing ascii-wing-right" />
        </div>
      </a>
    </header>
  );
}
