# Project Tasks - Next.js Landing Page

Created: 2025-10-24

## Priority Order

### 🔴 P1 - Critical (Start Here)

#### 1. Set up Contentful content model and test data
**Priority**: Urgent  
**Labels**: contentful, setup

Create the "landingPage" content type in Contentful and populate with test data.

**Content Type: landingPage**
- `title` (Short text) - Hero title
- `subtitle` (Long text) - Hero subtitle
- `heroButtonText` (Short text) - CTA button text
- `featuresHeading` (Short text) - Features section heading
- `ctaHeading` (Short text) - CTA section heading
- `ctaDescription` (Long text) - CTA description

**Tasks:**
- [ ] Log into Contentful dashboard
- [ ] Create landingPage content type with fields
- [ ] Create at least one entry with test data
- [ ] Publish the entry
- [ ] Document content model in CONTENTFUL_SETUP.md
- [ ] Consider feature and blog post models

---

#### 2. Configure environment variables for all environments
**Priority**: Urgent  
**Labels**: configuration, security

Replace placeholder values in `.env.local` and set up for deployment.

**Current Placeholders:**
```
GITHUB_TOKEN=placeholder-token
TOKEN_STUDIO_REPO=christopher-milne-design/cca-design-tokens
CONTENTFUL_SPACE_ID=placeholder
CONTENTFUL_ACCESS_TOKEN=placeholder
```

**Tasks:**
- [ ] Get Contentful Space ID from dashboard
- [ ] Generate Contentful Delivery API token
- [ ] (Optional) Generate Contentful Preview API token
- [ ] Update `.env.local` with real values
- [ ] Verify GitHub token for design token sync
- [ ] Document where to find these credentials
- [ ] Add environment variables to Vercel (when ready to deploy)

---

### 🟡 P2 - High Priority

#### 3. Connect Contentful CMS to components (Hero, Features, CTA)
**Priority**: High  
**Labels**: contentful, integration  
**Dependencies**: Requires task #1 completed first

Replace hardcoded content with dynamic Contentful data.

**Files to Modify:**
- `components/Hero.tsx`
- `components/Features.tsx`
- `components/CTA.tsx`

**Tasks:**
- [ ] Update Hero.tsx to use `getLandingPageContent()`
- [ ] Update Features.tsx to use Contentful data
- [ ] Update CTA.tsx to use Contentful data
- [ ] Add error handling for missing content
- [ ] Add loading states if needed
- [ ] Test with real Contentful data

---

### 🟢 P3 - Medium Priority

#### 4. Initial git commit and repository cleanup
**Priority**: Medium  
**Labels**: git, setup

Clean up git status and organize commits.

**Current State:**
- Many untracked files (entire app structure)
- Some deleted files (token-studio-sync.yml, tokens.json)
- Modified files (style-dictionary.config.mjs, tokens/README.md)

**Tasks:**
- [ ] Review `.gitignore` to ensure proper exclusions
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Decide on commit strategy
- [ ] Stage and commit files
- [ ] Push to remote repository

---

#### 5. Verify design token sync pipeline
**Priority**: Medium  
**Labels**: design-tokens, tooling  
**Dependencies**: Requires valid GITHUB_TOKEN

Test and verify the design token synchronization system.

**Available Scripts:**
```bash
npm run tokens          # Build tokens
npm run tokens:watch    # Watch mode
npm run sync:auto       # Auto sync from GitHub
npm run sync:manual     # Manual sync
```

**Tasks:**
- [ ] Review token JSON files (colors, radius, spacing, typography)
- [ ] Test `npm run tokens` command
- [ ] Verify generated CSS variables
- [ ] Test sync from GitHub repo
- [ ] Check token showcase page at `/tokens`
- [ ] Document the token workflow
- [ ] Ensure tokens are properly applied in components

---

### ⚪ P4 - Low Priority

#### 6. Add TypeScript type checking to build process
**Priority**: Low  
**Labels**: typescript, tooling, quality

Add explicit type checking script.

**Tasks:**
- [ ] Add `"typecheck": "tsc --noEmit"` to package.json
- [ ] Run type check locally
- [ ] Fix any type errors found
- [ ] Add type check to pre-commit hook (optional)
- [ ] Document in README.md

---

#### 7. Create deployment documentation and deploy to Vercel
**Priority**: Low  
**Labels**: deployment, documentation, vercel  
**Dependencies**: All Contentful work completed

Document deployment process and deploy to Vercel.

**Pre-deployment Checklist:**
- [ ] All Contentful integration working
- [ ] Environment variables documented
- [ ] Build succeeds locally
- [ ] No TypeScript errors
- [ ] ESLint passes

**Deployment Tasks:**
- [ ] Create Vercel project
- [ ] Connect GitHub repository
- [ ] Add environment variables in Vercel
- [ ] Deploy to production
- [ ] Test deployed site
- [ ] Document process in README.md

---

## Design System Project (Already Created)

Separate project in Linear for long-term design system work:

- HOM-20: Document design tokens
- HOM-21: Audit ShadCN UI usage
- HOM-22: Create responsive design guidelines
- HOM-23: Establish accessibility standards

---

## Next Steps

1. **Restart Linear MCP** in Warp to create these issues
2. **Start with Contentful setup** (Task #1 and #2)
3. **Wire up components** (Task #3)
4. **Clean up repository** (Task #4)
5. **Deploy** when ready (Task #7)
