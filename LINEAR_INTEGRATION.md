# Linear Integration Guide

This document outlines how to integrate Linear with the design system for automatic changelog generation and project tracking.

## Overview

The changelog page (`/changelog`) can automatically sync with Linear to display completed issues, releases, and project progress.

## Integration Options

### Option 1: Linear API (Recommended for Production)

Use Linear's GraphQL API to fetch issues and display them on the changelog page.

**Setup:**

1. Get your Linear API key from https://linear.app/settings/api
2. Add to `.env.local`:
   ```
   LINEAR_API_KEY=your_api_key_here
   LINEAR_TEAM_ID=your_team_id
   ```

3. Create an API route at `app/api/linear/changelog/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';
   
   const LINEAR_API_URL = 'https://api.linear.app/graphql';
   
   export async function GET() {
     const query = `
       query {
         issues(
           filter: {
             team: { id: { eq: "${process.env.LINEAR_TEAM_ID}" } }
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
             state {
               name
               type
             }
             labels {
               nodes {
                 name
                 colour
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
     });
   
     const data = await response.json();
     return NextResponse.json(data.data.issues.nodes);
   }
   ```

4. Update `app/changelog/page.tsx` to fetch from this API route

### Option 2: Linear Webhook (Real-time Updates)

Set up a webhook in Linear to push updates to your application when issues are completed.

**Setup:**

1. In Linear Settings → API → Webhooks, create a new webhook
2. Point it to: `https://your-domain.com/api/linear/webhook`
3. Select events: Issue created, Issue updated, Issue completed
4. Store webhook data in a database or cache

### Option 3: MCP Tools (Development/Manual)

You already have Linear MCP tools available. These can be used during development or for manual updates.

**Available MCP Tools:**
- `list_issues` - Fetch issues with filters
- `get_issue` - Get specific issue details
- `list_projects` - List all projects
- `list_teams` - Get team information

**Example Use Cases:**
- Generate changelog snapshots during build time
- Manual changelog updates via scripts
- Development and testing

## Changelog Display Structure

The changelog should display issues grouped by time period:

```
## January 2025

### Features
- [DS-123] Add semantic colour tokens
- [DS-124] Implement typography system

### Improvements
- [DS-125] Update button hover states
- [DS-126] Optimize font loading

### Bug Fixes
- [DS-127] Fix navigation z-index issue
```

## Filtering and Organization

**Recommended Filters:**
- State: `completed` issues only
- Team: Filter by design system team
- Labels: Group by `feature`, `bug`, `improvement`, `documentation`
- Date: Group by week or month

**Display Order:**
- Most recent first
- Group by completion date
- Show issue identifier (e.g., DS-123)
- Link to Linear issue
- Include description (optional)

## Future Enhancements

1. **Figma Integration**: Link issues to specific Figma frames/components
2. **Release Notes**: Auto-generate release notes from completed issues
3. **Progress Tracking**: Show project completion percentage
4. **Roadmap View**: Display upcoming planned features
5. **Search & Filter**: Allow users to search changelog by keyword or label

## Security Notes

- Never expose Linear API keys in client-side code
- Use environment variables for all sensitive data
- Consider rate limiting for API routes
- Cache responses to minimize API calls

## Example Implementation

See `app/changelog/page.tsx` for the frontend structure and UI components ready to receive Linear data.
