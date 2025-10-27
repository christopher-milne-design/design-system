# Contentful Setup Guide

## Step-by-Step Implementation Plan

### Phase 1: Contentful Content Models (Do This First in Contentful)

#### 1. Home Page Content Type
**Content Type ID:** `homePage`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required |
| Hero Section | `heroSection` | Reference (heroSection) | Required |
| Features Section | `featuresSection` | Reference (featuresSection) | Optional |
| CTA Section | `ctaSection` | Reference (ctaSection) | Optional |

---

#### 2. Hero Section Content Type
**Content Type ID:** `heroSection`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required |
| Subtitle | `subtitle` | Long text | Required |
| Button Text | `buttonText` | Short text | Required |
| Button URL | `buttonUrl` | Short text | Optional |
| Secondary Button Text | `secondaryButtonText` | Short text | Optional |
| Secondary Button URL | `secondaryButtonUrl` | Short text | Optional |
| Background Image | `backgroundImage` | Media | Optional |

---

#### 3. Features Section Content Type
**Content Type ID:** `featuresSection`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Heading | `heading` | Short text | Required |
| Subtitle | `subtitle` | Long text | Optional |
| Features | `features` | References (feature), Many | Required |

---

#### 4. Feature Content Type
**Content Type ID:** `feature`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required |
| Description | `description` | Long text | Required |
| Icon | `icon` | Short text | Required (emoji or icon name) |

---

#### 5. CTA Section Content Type
**Content Type ID:** `ctaSection`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Heading | `heading` | Short text | Required |
| Description | `description` | Long text | Required |
| Primary Button Text | `primaryButtonText` | Short text | Required |
| Primary Button URL | `primaryButtonUrl` | Short text | Optional |
| Secondary Button Text | `secondaryButtonText` | Short text | Required |
| Secondary Button URL | `secondaryButtonUrl` | Short text | Optional |
| Background Colour | `backgroundColor` | Short text | Optional (e.g., "primary", "secondary") |

---

#### 6. Blog Post Content Type (Already exists, verify fields)
**Content Type ID:** `blogPost`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required |
| Subtitle | `subtitle` | Long text | Required |
| Description | `description` | Long text | Optional |
| Hero Image | `heroImage` | Media | Optional |
| Content | `content` | Rich text | Optional |
| Slug | `slug` | Short text | Required, unique |
| Published Date | `publishedDate` | Date & time | Optional |

---

## Phase 2: Create Sample Content in Contentful

### Step 1: Create Features (6 entries)
Create 6 `feature` entries with the current hardcoded data:
1. **Fast Performance** -  - "Lightning-fast load times and optimized performance for the best user experience."
2. **Scalable Architecture** -  - "Built to grow with your business, from startup to enterprise scale."
3. **Easy Integration** -  - "Seamlessly integrate with your existing tools and workflows."
4. **Secure by Default** -  - "Enterprise-grade security and compliance built into every feature."
5. **24/7 Support** -  - "Our dedicated team is here to help you succeed around the clock."
6. **Custom Solutions** -  - "Tailored solutions that fit your unique business requirements."

### Step 2: Create Features Section
Create 1 `featuresSection` entry:
- **Heading:** "Why Choose Us"
- **Subtitle:** "Discover the features that make our platform the perfect choice for your business."
- **Features:** Link all 6 features created above

### Step 3: Create Hero Section
Create 1 `heroSection` entry:
- **Title:** "Welcome to Our Platform"
- **Subtitle:** "Build amazing experiences with our powerful tools and seamless integrations. Get started today and transform your ideas into reality."
- **Button Text:** "Get Started"
- **Button URL:** "#"
- **Secondary Button Text:** "Learn More"
- **Secondary Button URL:** "#"

### Step 4: Create CTA Section
Create 1 `ctaSection` entry:
- **Heading:** "Ready to Get Started?"
- **Description:** "Join thousands of satisfied customers who have transformed their business with our platform."
- **Primary Button Text:** "Start Free Trial"
- **Primary Button URL:** "#"
- **Secondary Button Text:** "Contact Sales"
- **Secondary Button URL:** "#"

### Step 5: Create Home Page
Create 1 `homePage` entry:
- **Title:** "Home"
- **Hero Section:** Link to the hero section created above
- **Features Section:** Link to the features section created above
- **CTA Section:** Link to the CTA section created above

### Step 6: Create Blog Posts (Optional)
Create 2-3 sample `blogPost` entries for testing

---

## Phase 3: Code Implementation (After Contentful Setup)

Once you've completed the Contentful setup above, let me know and I'll:

1.  Update TypeScript interfaces in `lib/contentful.ts`
2.  Add new fetch functions for Features and CTA
3.  Convert `Features.tsx` to use Contentful
4.  Convert `CTA.tsx` to use Contentful
5.  Update `Hero.tsx` to use new fields
6.  Test the integration

---

## Checklist

### In Contentful Dashboard:
- [ ] Create `feature` content type
- [ ] Create `featuresSection` content type
- [ ] Create `ctaSection` content type
- [ ] Update/verify `heroSection` content type
- [ ] Update/verify `homePage` content type
- [ ] Create 6 feature entries
- [ ] Create 1 features section entry (linking features)
- [ ] Create 1 hero section entry
- [ ] Create 1 CTA section entry
- [ ] Create 1 home page entry (linking all sections)
- [ ] Publish all entries

### Once Contentful is Ready:
- [ ] Let me know, and I'll update the code
- [ ] Test locally
- [ ] Deploy to Vercel

---

## Tips

- **Entry Titles:** Use descriptive titles for entries (e.g., "Home Page Hero", "Main Features Section") to make them easy to find
- **Publishing:** Remember to **Publish** all entries after creating them (they're drafts by default)
- **References:** When linking entries, make sure they're published first
- **API Keys:** Verify your `.env.local` has the correct Space ID and Access Token

---

## Questions?

Let me know when you've completed the Contentful setup, and I'll implement the code changes!
