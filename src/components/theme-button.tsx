"use client";

import { useEffect } from "react";
import { IoPower } from "react-icons/io5";

export function ThemeButton() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    const update = () => {
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    };

    if (!document.startViewTransition) {
      update();
      return;
    }

    document.startViewTransition(update);
  }

  return (
    <button
      className="theme-button"
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      <IoPower aria-hidden="true" />
    </button>
  );
}
