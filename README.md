# PinayMate - Launch-Stage Filipino Dating Landing Site

> Premium Filipino dating waitlist experience focused on safety cues, serious intent, honest launch messaging, and conversion clarity.

![PinayMate Banner](https://img.shields.io/badge/PinayMate-Premium%20Dating%20Landing-F4376D?style=for-the-badge&logo=heart&logoColor=white)

## 🌟 About PinayMate

PinayMate is a launch-stage dating product for people seeking serious Filipino connections. PM_Web presents the waitlist, membership direction, trust/safety model, and mobile-app preview without claiming live matching, live checkout, active calls, or active users.

## 🚢 Launch Readiness (Current as of 2026-06-11)

### Manager view

- **Scope:** PM_Web static/site readiness + public launch messaging alignment with PM_App blockers.
- **Status:** Local PM_Web quality is current and passing, but public launch remains blocked by production URL, mailbox proof, and PM_App launch blockers. PM_Web remains waitlist-only until those coordinated launch gates close.
- **Launch-state source of truth:** `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` is the PM_Web-local snapshot used by standalone checks. `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md` remains the cross-product source when the full Romega workspace is available.

### Done

- Vite + React project builds and linting scripts are available in `package.json`.
- Marketing CTA and app-download sections are present and reviewable.
- Runtime scripts are documented for reproducible setup (`dev`, `build`, `preview`, `lint`).
- Local release scripts enforce dependency audit, CTA routing, and launch-claim checks before copy or CTA changes are treated as releasable.
- Normal local checks are read-only by default. Use the `:report` scripts only when intentionally collecting evidence for launch review.

### Verified

- Repository-level evidence confirms launch-readiness section exists and references are aligned with PM_App blockers.
- Current local PM_Web checks passed on 2026-06-11 and are recorded in `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md`.
- Historical browser smoke evidence remains useful context, but production URL, mailbox delivery, and final launch-domain checks are still unverified.
- No live production deployment, host-domain, monitored-mailbox, or production URL validation is recorded in docs.

### Blocked

- PM_App blocker closure is a launch gate: ordered launch migrations, Supabase policy verification, and OCR endpoint readiness.
- PM_Web production checks are still open: final domain, deployed URL, support/legal mailbox routing, and production CTA verification.
- PM_Web now has a project-local release checklist in `RELEASE_CHECKLIST.md`; the central launch evidence tracker remains in `PM_App/docs/release/RELEASE_READINESS.md`.
- PM_Web claims must stay aligned to `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` for standalone checks and to `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md` during full workspace release review; if the matrix says a feature is waitlist-only, gated, source-only, or blocked pending proof, README, section copy, CTA copy, and release notes must not imply that the feature is live.

### PM_Web release owner proof block

| Gate             | Required proof                                                 | Owner | Date       | Evidence path / URL                                                | Status                                       |
| ---------------- | -------------------------------------------------------------- | ----- | ---------- | ------------------------------------------------------------------ | -------------------------------------------- |
| Local lint       | `npm run lint` through `npm run check:local-quality`           | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass locally                                |
| Dependency audit | `npm run check:dependency-audit` through `npm run check:release-local` | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass, 0 vulnerabilities                     |
| Production build | `npm run build`                                                | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass locally                                |
| Desktop smoke    | hero, CTAs, legal modal, footer render on desktop              | Codex | 2026-06-10 | `../PM_App/docs/evidence/README.md` | Historical screenshot; rerun required       |
| Mobile smoke     | no horizontal overflow, CTA/legal modal usable                 | Codex | 2026-06-10 | `../PM_App/docs/evidence/README.md` | Historical screenshot; rerun required       |
| CTA routing      | waitlist/support/legal links route to approved waitlist/support/legal flows | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass locally; mailbox proof still required |
| Launch-state matrix alignment | PM_Web copy and CTAs match the PM_Web-local matrix snapshot and the central PM_App matrix during workspace release review | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass locally                                |
| Final domain     | production domain loads and matches launch copy                |       |            |                                                                    | Needs deployed URL                           |
| Copy accuracy    | no fake checkout, app-store, active-user, or safety guarantees | Codex | 2026-06-11 | `../PM_App/docs/evidence/2026-06-11-current-local-quality-release-blockers.md` | Pass locally                                |

### Next

- Keep `npm run check:local-quality` and `npm run check:release-local` green after any PM_Web copy, CTA, membership, support, legal, or safety copy change.
- For full workspace release review, compare PM_Web claims against `../PM_App/docs/release/PINAYMATE_LAUNCH_STATE_MATRIX.md`.
- Validate production host/domain behavior for CTA deep links and support paths.
- Publish only after PM_App launch blockers are closed and recorded in PM_App docs.

### Proof commands

```bash
# run in PM_Web (static/build checks only)
npm run lint
npm run check:dependency-audit
npm run build
npm run check:release-local
npm run check:release-local:report
npm run preview -- --host

# launch comms checks (manual review)
rg -n "Download|Google|support|pinaymate|CTA|app" PM_Web/src PM_Web/public
```

### ✨ Key Features

- **Preference-Led Matching Direction** - Relationship intent, lifestyle, and profile signals guide planned discovery
- **Verification Path** - Email/profile checks and optional ID/photo review support safer introductions
- **Messaging Readiness** - Chat copy stays preview/waitlist-first until release QA passes
- **Membership Interest** - Plans are framed as waitlist or interest capture, with planned pricing secondary and no live checkout
- **Mobile-First Design** - Responsive layouts, accessible focus states, and clear touch targets
- **Premium User Experience** - Calmer hierarchy, restrained motion, and clearer safety messaging

### 🎯 Launch Messaging

- Waitlist-first CTAs until app-store, checkout, and matching flows are production-ready
- Profile checks and verification review path are described without unsupported guarantees
- Membership copy explains launch intent and free Filipina access without leading with purchasable paid plans or claiming live billing
- Mobile-first sections prioritize trust, safety, and conversion clarity
- Run `npm run check:local-quality` before publishing launch copy or CTA changes
- `npm run check:release-local` includes dependency audit, CTA routing, and launch-claim checks
- `npm run check:launch-claims` uses `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` by default and opportunistically compares the central PM_App matrix when the full workspace is present

## 🚀 Technology Stack

### **Frontend**

- ⚛️ **React 19** - Modern component-based architecture
- 🔷 **TypeScript** - Type-safe development
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first styling framework
- 🎭 **CSS/Tailwind motion** - Lightweight transitions without a runtime animation dependency

### **Design System**

- 🎨 **Custom Color Palette**: Pink (#F4376D), Purple (#A855F7), Blue (#3B82F6)
- 🖼️ **DM Sans + Lora + Hello Paris Sans** - UI, editorial, and brand typography
- ✨ **Premium Surfaces** - Restrained cards, clear contrast, and token-driven brand accents
- 🌈 **Meaningful Motion** - Short hover/focus transitions with reduced-motion support

### **Key Animations**

- 📱 Loading screen with progress indicators
- 💫 Reduced entrance and hover transitions
- 🎯 Accessible focus and interaction states
- 🔄 Motion constrained to transform/opacity patterns where used

## 🏗️ Project Structure

```
pinaymate/
├── src/
│   ├── components/
│   │   └── sections/
│   │       ├── Header.tsx      # Navigation with scroll effects
│   │       ├── Hero.tsx        # Landing section with waitlist CTA and product preview
│   │       ├── About.tsx       # Trust and launch-path section
│   │       ├── Features.tsx    # Product direction and safety approach
│   │       ├── Membership.tsx  # Membership interest, not checkout
│   │       ├── Faqs.tsx        # Frequently asked questions
│   │       ├── Download.tsx    # Platform waitlist section
│   │       └── Footer.tsx      # Site footer
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Custom animations & styles
│   └── main.tsx               # Application entry point
├── public/                     # Static assets
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pinaymate.git
   cd pinaymate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Features Showcase

### Premium Visual Design

- Editorial hero hierarchy with clear waitlist CTAs
- Restrained brand surfaces using pink, violet, and blue accents
- Accessible focus states and touch-friendly buttons
- Reduced decorative motion compared with the earlier prototype

### Mobile-First Responsive Design

- Optimized for all screen sizes (320px - 2560px+)
- Touch-friendly interactions
- Adaptive typography and spacing
- Progressive enhancement

## Launch Readiness Note

- Public claims were tightened to avoid unsupported guarantees around match accuracy, compliance, billing, and verification.
- Membership and app download CTAs route to support/waitlist email until checkout and store links are production-ready.
- Backend waitlist handoff source exists, but public CTAs stay email-first until Supabase waitlist proof and abuse/rate-limit approval are captured.
- `npm run check:local-quality` runs lint, TypeScript, build, and local CTA/launch-claim audits before release.
- Remaining launch work: replace waitlist mailto links with final app-store and checkout destinations when those systems are live.
- Evidence files are not written by normal PM_Web checks. Run `npm run check:release-local:report` only when the output should be captured as launch evidence.
- If central launch-state claims change, refresh `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` before publishing PM_Web copy.

### Motion Approach

- Short hover and focus transitions
- Reduced-motion support in global CSS
- Motion used for interaction feedback, not fake activity

### Launch-Stage Product Direction

- Verification review path
- Preference-based compatibility signals
- Messaging previews until chat is production-ready
- Membership interest capture with planned pricing secondary until checkout is production-ready

## 🎯 Target Audience

- **Primary**: Individuals seeking serious relationships with Filipino singles
- **Geographic**: Global reach with focus on US, Canada, Australia, UK
- **Demographics**: Ages 25-55, relationship-focused individuals
- **Values**: Authenticity, family-oriented, long-term commitment

## 📱 Platform Sections

1. **🏠 Hero Section** - Compelling intro with app mockups
2. **ℹ️ Trust Section** - Product promise and safer discovery framing
3. **⚡ Features Section** - Launch-stage safety and product-direction cards
4. **💎 Membership** - Reference pricing and membership-interest capture
5. **❓ FAQ Section** - Common questions and answers
6. **📲 Waitlist** - iOS and Android waitlist email actions
7. **📞 Contact/Footer** - Support and company information

## Performance Notes

- ⚡ Lightning-fast loading with Vite
- 🎯 Optimized bundle size
- 📱 Responsive layout targets
- 🔄 Transform/opacity-based interaction transitions
- 💾 Efficient memory management

## 🎨 Brand Identity

### Color Palette

- **Primary Pink**: `#F4376D` - Love, passion, connection
- **Secondary Purple**: `#A855F7` - Premium, sophistication
- **Accent Blue**: `#3B82F6` - Trust, reliability

### Typography

- **UI Font**: DM Sans
- **Editorial Font**: Lora
- **Brand Font**: Hello Paris Sans
- **Usage**: Clear UI text with warmer editorial headings

## 🤝 Contributing

We welcome contributions to improve PinayMate! Please read our contributing guidelines and submit pull requests for any enhancements.

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or business inquiries:

- 📧 Email: support@pinaymate.com
- 🌐 Website: https://pinaymate.com

---

**Built for the Filipino community worldwide** • Launch-stage, waitlist-first, and safety-aware.
