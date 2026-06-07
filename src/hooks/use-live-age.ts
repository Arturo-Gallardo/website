"use client";

import { useEffect, useState } from "react";
import { formatLiveAge, TICK_MS } from "@/lib/live-age";

// Keeps age ticking in real time from a UTC birth date string (YYYY-MM-DD).
export function useLiveAge(birthDate: string) {
  // Start empty so server and client markup match; age fills in on mount.
  const [age, setAge] = useState("");

  useEffect(() => {
    const update = () => {
      setAge(formatLiveAge(birthDate));
    };

    update();
    const interval = window.setInterval(update, TICK_MS);

    return () => window.clearInterval(interval);
  }, [birthDate]);

  return age;
}
