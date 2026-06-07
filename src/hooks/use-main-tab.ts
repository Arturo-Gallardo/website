"use client";

import { useState } from "react";

export type MainTab = "home" | "activity";

const tabs: MainTab[] = ["home", "activity"];
const TRANSITION_MS = 150;

export function useMainTab() {
  const [tab, setTab] = useState<MainTab>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectTab = (next: MainTab) => {
    if (next === tab) {
      return;
    }

    setIsTransitioning(true);
    setTab(next);
    window.setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
  };

  return {
    tab,
    selectTab,
    isTransitioning,
    activeIndex: tabs.indexOf(tab),
  };
}
