"use client";

import { site } from "@/data/site";
import { useLiveAge } from "@/hooks/use-live-age";

export function LiveAge() {
  const age = useLiveAge(site.birthDate);

  return <span className="live-age">{age}</span>;
}
