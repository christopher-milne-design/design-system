"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/examples", label: "Examples" },
    { href: "/style-guide", label: "Style Guide" },
    { href: "/components", label: "Components" },
    { href: "/documentation", label: "Documentation" },
  ];

  return (
    <nav className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-neutral-400" style={{ letterSpacing: '-0.02em' }}>
              Council Design System
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3 py-2 text-sm font-semibold transition-colors
                    ${
                      isActive
                        ? "text-brand-primary border-b-2 border-brand-primary"
                        : "text-neutral-300 hover:text-brand-primary"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* External Links */}
          <div className="flex items-center gap-4">
            {/* Figma Link */}
            <a
              href="https://www.figma.com/design/your-figma-file-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-brand-primary transition-colors"
              aria-label="View in Figma"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 38 57"
                fill="none"
                aria-hidden="true"
              >
                <path d="M19 28.5C19 23.8056 22.8056 20 27.5 20C32.1944 20 36 23.8056 36 28.5C36 33.1944 32.1944 37 27.5 37C22.8056 37 19 33.1944 19 28.5Z" fill="#1ABCFE"/>
                <path d="M2 46.5C2 41.8056 5.80558 38 10.5 38H19V46.5C19 51.1944 15.1944 55 10.5 55C5.80558 55 2 51.1944 2 46.5Z" fill="#0ACF83"/>
                <path d="M19 2V20H27.5C32.1944 20 36 16.1944 36 11.5C36 6.80558 32.1944 3 27.5 3L19 2Z" fill="#FF7262"/>
                <path d="M2 11.5C2 16.1944 5.80558 20 10.5 20H19V3H10.5C5.80558 3 2 6.80558 2 11.5Z" fill="#F24E1E"/>
                <path d="M2 28.5C2 33.1944 5.80558 37 10.5 37H19V20H10.5C5.80558 20 2 23.8056 2 28.5Z" fill="#A259FF"/>
              </svg>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/christopher-milne-design/cca-design-tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-brand-primary transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
