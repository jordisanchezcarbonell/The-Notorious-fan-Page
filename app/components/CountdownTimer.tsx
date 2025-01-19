"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

function calculateTimeSince(date: Date) {
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const lastFightDate = new Date("2021-07-10");

  useEffect(() => {
    setMounted(true);
    setTime(calculateTimeSince(lastFightDate));
    
    const timer = setInterval(() => {
      setTime(calculateTimeSince(lastFightDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-16 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
        <Timer className="w-6 h-6 text-emerald-500" />
        <p className="text-xl md:text-2xl text-gray-200">
          Time Since Last Fight
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 max-w-4xl w-full">
        {[
          { label: "Days", value: time.days },
          { label: "Hours", value: time.hours },
          { label: "Minutes", value: time.minutes },
          { label: "Seconds", value: time.seconds },
        ].map((item) => (
          <div 
            key={item.label}
            className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="text-4xl md:text-6xl font-bold mb-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
              {item.value}
            </div>
            <div className="text-sm md:text-base text-emerald-200/60 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}