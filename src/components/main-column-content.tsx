"use client";

import { MainTabs } from "@/components/main-tabs";
import { useMainTab } from "@/hooks/use-main-tab";

type MainColumnContentProps = {
  home: React.ReactNode;
  activity: React.ReactNode;
};

export function MainColumnContent({ home, activity }: MainColumnContentProps) {
  const { tab, selectTab, isTransitioning, activeIndex } = useMainTab();

  return (
    <>
      <MainTabs
        tab={tab}
        activeIndex={activeIndex}
        isTransitioning={isTransitioning}
        onSelect={selectTab}
      />

      <main
        className={`main-views ${isTransitioning ? "is-transitioning" : ""}`}
      >
        <div
          className={`main-views-track ${tab === "activity" ? "is-activity" : ""}`}
        >
          <div className="main-view" aria-hidden={tab !== "home"}>
            {home}
          </div>
          <div className="main-view" aria-hidden={tab !== "activity"}>
            {activity}
          </div>
        </div>
      </main>
    </>
  );
}
