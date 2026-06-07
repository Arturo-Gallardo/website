import Image from "next/image";
import sidepiece from "@/sidepiece.png";

export function Sidepiece() {
  return (
    <div className="sidepiece" aria-hidden="true">
      <Image
        src={sidepiece}
        alt=""
        width={sidepiece.width}
        height={sidepiece.height}
        className="sidepiece-art"
        sizes="48vw"
        priority
      />
    </div>
  );
}
