import { NextResponse } from 'next/server';

const LINEAR_API_URL = 'https://api.linear.app/graphql';

export async function GET() {
  try {
    // Check if Linear API key is configured
    if (!process.env.LINEAR_API_KEY) {
      console.warn('LINEAR_API_KEY not configured, using mock data');
      return NextResponse.json(getMockIssues());
    }

    const query = `
      query {
        issues(
          filter: {
            state: { type: { eq: "completed" } }
          }
          orderBy: completedAt
          first: 50
        ) {
          nodes {
            id
            identifier
            title
            description
            url
            completedAt
            updatedAt
            state {
              name
              type
            }
            labels {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    `;

    const response = await fetch(LINEAR_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.LINEAR_API_KEY!,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Linear API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('Linear GraphQL errors:', data.errors);
      throw new Error('Linear API returned errors');
    }

    // Transform Linear response to match our interface
    const issues = data.data.issues.nodes.map((issue: any) => ({
      id: issue.id,
      identifier: issue.identifier,
      title: issue.title,
      description: issue.description,
      completedAt: issue.completedAt,
      updatedAt: issue.updatedAt,
      url: issue.url,
      state: issue.state,
      labels: issue.labels.nodes.map((label: any) => ({
        name: label.name,
        colour: label.color
      }))
    }));

    return NextResponse.json(issues);
  } catch (error) {
    console.error('Error fetching changelog:', error);
    // Fall back to mock data on error
    return NextResponse.json(getMockIssues());
  }
}

function getMockIssues() {
  return [
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
}
