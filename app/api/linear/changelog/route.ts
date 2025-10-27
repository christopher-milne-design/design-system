import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, return mock data structure
    // This will be replaced with actual Linear API call
    
    const mockIssues = [
      {
        id: '1',
        identifier: 'DS-101',
        title: 'Implement complete design system with Echo font and semantic tokens',
        description: 'Add Echo custom font, configure typography system, and implement semantic tokens across all components',
        completedAt: '2025-01-27T20:00:00Z',
        url: 'https://linear.app/issue/DS-101',
        state: {
          name: 'Done',
          type: 'completed'
        },
        labels: [
          { name: 'feature', colour: '#8B5CF6' },
          { name: 'typography', colour: '#06B6D4' }
        ]
      },
      {
        id: '2',
        identifier: 'DS-102',
        title: 'Remove emojis and standardise spelling to British English',
        description: 'Clean up documentation and change color to colour throughout',
        completedAt: '2025-01-27T21:00:00Z',
        url: 'https://linear.app/issue/DS-102',
        state: {
          name: 'Done',
          type: 'completed'
        },
        labels: [
          { name: 'improvement', colour: '#10B981' }
        ]
      },
      {
        id: '3',
        identifier: 'DS-103',
        title: 'Rebrand to Canada Council for the Arts Design System',
        description: 'Update all branding, add Examples and Documentation pages',
        completedAt: '2025-01-27T22:00:00Z',
        url: 'https://linear.app/issue/DS-103',
        state: {
          name: 'Done',
          type: 'completed'
        },
        labels: [
          { name: 'feature', colour: '#8B5CF6' }
        ]
      },
      {
        id: '4',
        identifier: 'DS-104',
        title: 'Add clickable logos to Built With section',
        description: 'Add official logos for Next.js, Tailwind CSS, Token Studio, and ShadCN UI with links',
        completedAt: '2025-01-27T22:10:00Z',
        url: 'https://linear.app/issue/DS-104',
        state: {
          name: 'Done',
          type: 'completed'
        },
        labels: [
          { name: 'feature', colour: '#8B5CF6' }
        ]
      }
    ];

    return NextResponse.json(mockIssues);
  } catch (error) {
    console.error('Error fetching changelog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch changelog' },
      { status: 500 }
    );
  }
}
