"use client";

import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Mazatlan",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Mazatlan",
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function LocalClock() {
  const [time, setTime] = useState("--:--:-- --");
  const [date, setDate] = useState("--- --, ----");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(timeFormatter.format(now).toLowerCase());
      setDate(dateFormatter.format(now).toLowerCase());
    };

    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <strong className="clock-text">{time}</strong>
      <span>{date}</span>
    </>
  );
}
