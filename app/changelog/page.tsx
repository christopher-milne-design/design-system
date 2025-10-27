"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Label {
  name: string;
  colour: string;
}

interface Issue {
  id: string;
  title: string;
  identifier: string;
  state: {
    name: string;
    type: string;
  };
  completedAt: string | null;
  updatedAt: string;
  url: string;
  description?: string;
  labels?: Label[];
}

export default function Changelog() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const response = await fetch('/api/linear/changelog');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setIssues(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch changelog');
        setLoading(false);
      }
    };

    fetchChangelog();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
            Changelog
          </h1>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Loading recent updates...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
          Changelog
        </h1>
        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
          Track the progress and updates to the Canada Council for the Arts Design System.
        </p>

        {error && (
          <div className="bg-rouge-50 border-l-4 border-rouge-600 p-6 rounded mb-12">
            <p className="text-rouge-900 font-semibold">{error}</p>
          </div>
        )}

        {issues.length === 0 && !error ? (
          <div className="bg-neutral-100 p-12 rounded-lg border-2 border-neutral-200 text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
              No Updates Yet
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
              Check back soon for updates and improvements to the design system.
            </p>
          </div>
        ) : (
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-text-primary" style={{ letterSpacing: '-0.02em' }}>
                Recent Updates
              </h2>
              <a
                href="https://linear.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-primary-hover font-semibold transition-colors"
              >
                View in Linear →
              </a>
            </div>

            {issues.map((issue) => (
              <div key={issue.id} className="bg-surface-card p-6 rounded-lg border border-border-default hover:border-brand-primary transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-brand-primary font-mono text-sm font-semibold">
                        {issue.identifier}
                      </span>
                      {issue.labels && issue.labels.map((label) => (
                        <span
                          key={label.name}
                          className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{ 
                            backgroundColor: `${label.colour}20`, 
                            color: label.colour 
                          }}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                    <a
                      href={issue.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-text-primary hover:text-brand-primary transition-colors"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {issue.title}
                    </a>
                  </div>
                  {issue.completedAt && (
                    <span className="text-sm text-text-secondary whitespace-nowrap">
                      {new Date(issue.completedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  )}
                </div>
                {issue.description && (
                  <p className="text-text-secondary leading-relaxed">
                    {issue.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
