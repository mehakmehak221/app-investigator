"use client";

const items = [
  "React Native",
  "Expo",
  "Flutter",
  "Android",
  "iOS",
  "Firebase",
  "Sentry",
  "Real-time APIs",
];

export function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden border-y border-zinc-800/80 bg-zinc-950/50 py-4">
      <div className="marquee-track flex w-max gap-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 text-sm font-medium text-zinc-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
