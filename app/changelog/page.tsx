"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
}

export default function Changelog() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch completed issues from Linear
    // This would be replaced with actual API call
    // For now, showing the structure
    const fetchChangelog = async () => {
      try {
        // TODO: Implement Linear API fetch
        // const response = await fetch('/api/linear/changelog');
        // const data = await response.json();
        // setIssues(data);
        
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

        <div className="bg-neutral-100 p-12 rounded-lg border-2 border-neutral-200 text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Coming Soon
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            This page will automatically sync with Linear to show completed issues, new features, 
            bug fixes, and improvements to the design system.
          </p>
          <a
            href="https://linear.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Project in Linear
          </a>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-card p-6 rounded-lg border border-border-default">
            <h3 className="text-xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>
              How It Works
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The changelog will pull from Linear's API to display:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Completed issues grouped by week/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Feature releases and improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Bug fixes and patches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-primary mt-1">•</span>
                <span>Direct links to issues in Linear</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
