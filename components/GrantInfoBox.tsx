import React from "react";

interface GrantInfoItem {
  label: string;
  value: string;
  link?: string;
}

interface GrantInfoBoxProps {
  artistName: string;
  items: GrantInfoItem[];
  variant?: "sidebar" | "inline" | "card" | "minimal";
  accentColor?: "bleu" | "vert" | "rose" | "orange" | "jaune";
}

export default function GrantInfoBox({
  artistName,
  items,
  variant = "sidebar",
  accentColor = "bleu",
}: GrantInfoBoxProps) {
  // Sidebar variant - vertical list with subtle background
  if (variant === "sidebar") {
    return (
      <div className="bg-neutral-100 p-8 space-y-6">
        <h3 className="text-2xl font-bold text-neutral-400">{artistName}</h3>
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <dt className="text-sm font-bold text-neutral-300 uppercase tracking-wide">
              {item.label}
            </dt>
            <dd className="text-base text-neutral-400">
              {item.link ? (
                <a
                  href={item.link}
                  className={`text-${accentColor}-600 hover:text-${accentColor}-700 font-medium`}
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </div>
    );
  }

  // Inline variant - horizontal layout with color accent
  if (variant === "inline") {
    return (
      <div className={`bg-${accentColor}-500 p-8 text-white`}>
        <h3 className="text-2xl font-bold mb-6">{artistName}</h3>
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index}>
              <dt className="text-sm font-bold opacity-90 uppercase tracking-wide mb-1">
                {item.label}
              </dt>
              <dd className="text-lg font-semibold">
                {item.link ? (
                  <a href={item.link} className="underline hover:opacity-80">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  // Card variant - bordered card with accent stripe
  if (variant === "card") {
    return (
      <div className={`bg-white border-l-8 border-${accentColor}-500 p-8 shadow-sm`}>
        <h3 className="text-2xl font-bold text-neutral-400 mb-6">{artistName}</h3>
        <dl className="space-y-5">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <dt className="text-sm font-bold text-neutral-300 uppercase tracking-wide mb-1">
                {item.label}
              </dt>
              <dd className="text-base text-neutral-400">
                {item.link ? (
                  <a
                    href={item.link}
                    className={`text-${accentColor}-600 hover:text-${accentColor}-700 font-medium`}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  // Minimal variant - clean typography-focused design
  if (variant === "minimal") {
    return (
      <div className="border-t-4 border-neutral-400 pt-8 space-y-5">
        <h3 className="text-2xl font-bold text-neutral-400 mb-6">{artistName}</h3>
        <dl className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-neutral-200 pb-3">
              <dt className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                {item.label}
              </dt>
              <dd className="text-lg text-neutral-400">
                {item.link ? (
                  <a
                    href={item.link}
                    className={`text-${accentColor}-600 hover:text-${accentColor}-700 font-medium`}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return null;
}
