"use client";

import type { MainTab } from "@/hooks/use-main-tab";

type MainTabsProps = {
  tab: MainTab;
  activeIndex: number;
  isTransitioning: boolean;
  onSelect: (tab: MainTab) => void;
};

const tabItems: { id: MainTab; label: string }[] = [
  { id: "home", label: "home" },
  { id: "activity", label: "activity" },
];

export function MainTabs({
  tab,
  activeIndex,
  isTransitioning,
  onSelect,
}: MainTabsProps) {
  return (
    <nav className="tabs" aria-label="Primary navigation">
      <div className="tabs-track">
        {activeIndex !== -1 ? (
          <span
            className={`tabs-indicator ${isTransitioning ? "is-transitioning" : ""}`}
            style={{ transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 6}px))` }}
            aria-hidden="true"
          />
        ) : null}

        {tabItems.map((item) => (
          <button
            className={tab === item.id ? "active" : ""}
            type="button"
            key={item.id}
            aria-current={tab === item.id ? "page" : undefined}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
