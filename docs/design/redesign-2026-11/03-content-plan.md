# PM Web redesign: content plan (curated copy)

- Date: 2026-11-21
- Status: proposal. Needs Duane's OK before any copy ships, because this changes product copy.
- Goal: a visitor understands in under a minute **who PinayMate is for, what the app will give them, how to get it, and what is true today**, in plain words.

## What is wrong with the current copy

1. **Written from the company's side.** Phrases like "product direction", "the public story should…", "PinayMate should feel premium because…", "support response model direction" describe the team's plans, not what a member gets.
2. **Boundaries drown the benefits.** The same "no account, no profile, no match request, no checkout, no payment record" sentence appears about 9 times. A visitor reads what PinayMate does *not* do far more often than what it does.
3. **Abstract nouns instead of actions.** "Intent-led matching", "review-status cues", "conversation context" mean little to a first-time visitor.
4. **No "how it works".** The site never says, in order, what a person does from today to their first conversation.

## Principles

- **Talk to "you".** Every headline answers a visitor's question.
- **Benefit first, then the honest detail.** Say what the app gives you, then mark anything not live yet as "in the app" or "planned".
- **Say each boundary once, where it matters.** Status line in the hero; full legal lines once in the FAQ and once beside the waitlist form; one pricing note under the plans.
- **Short.** Headlines under 10 words, body lines under 20 words, at most 3–4 items per group.
- **Plain words.** "Profile review" not "review-status cues"; "say what you're looking for" not "intent-led matching".

## Launch-claim rules this copy keeps

From `docs/PINAYMATE_LAUNCH_STATE_MATRIX.md` and `scripts/check-launch-claims.mjs`:

- Waitlist only. No profile, matching, payment or checkout from the website. App features are described as "in the app" / "when access opens".
- Prices are "planned pricing, not checkout". No card or charge.
- Safety is "review paths, not guarantees or background checks". No "verified", "guaranteed safe", "background-checked", "boost" or "priority visibility" wording.
- No "Download on the App Store" / "Get it on Google Play" wording before store proof.
- Every required boundary sentence stays somewhere in `src` (the check scans all source together), so moving a sentence into the FAQ or form fine print keeps the check passing.

## Section by section

Section order and anchors stay the same: `#home`, `#about`, `#features`, `#pricing`, `#faq`, `#download`.

### Hero (`#home`): who it is for, and the one action
| | Copy |
|---|---|
| Kicker | Filipino-first dating, opening soon |
| Headline | Dating with intent, safety, and respect. (was "Serious Filipino dating should start with intent, safety, and respect.": 11 words, 5 lines on a phone) |
| Subline | A dating app for Filipinas and foreigners who want a real relationship. Join the waitlist and we'll tell you when it opens on your phone. |
| Primary button | Join the waitlist |
| Secondary | See how it works |
| Status line (required) | Waitlist only · No profile today · No matching today · No payment today |
| Preview card | "What your profile will show": Relationship goal: serious relationship · Review status: reviewed before matching · First message: a prompt to start the conversation |

### What you get (`#about`): three benefits, in the visitor's words
Headline: **What PinayMate gives you**
| Benefit | Line |
|---|---|
| Say what you're looking for | Your profile leads with relationship goals, family plans and lifestyle, so you meet people who want the same thing. |
| Know more before you chat | Profiles go through a review step, and a review badge appears only after that check is approved. |
| Start conversations easily | Prompts built from shared interests give you a warm first message. |

Manila strip (one line): **Made for Filipina and foreigner introductions**: clear about location, culture and expectations from the start.

### How it works (`#features`): a real sequence
Headline: **From waitlist to first conversation**
1. **Join the waitlist.** Email and your phone type. About a minute. *(today)*
2. **Get the app.** We email you when PinayMate opens on iOS or Android. *(when access opens)*
3. **Build your profile.** Add your goals and photos, then complete the review step. *(in the app)*
4. **Meet and message.** Discover people who share your intent and start with a prompt. *(in the app)*

Safety band, headline: **Safety is built in, not added later**
- 18+ members only
- Photo and profile review
- Report and moderation tools
- Your website details stay private: we only ask for an email

Note (required): These are safety controls and review paths, not guarantees, background checks, or promises that every member is safe.
Button: Ask a safety question

### Plans (`#pricing`): three tiers, one note
Headline: **Plans for when the app opens**
Intro: Pick the plan you're interested in. Nothing is charged today.
| Plan | Price | For | Includes |
|---|---|---|---|
| Free (Filipina) | Free | Getting started | Launch updates · Profile setup help · Profile review |
| Gold | $29.99 / month planned | A focused, serious search | Messaging when launched · Advanced filters · Profile presentation options |
| VIP | $34.99 / month planned | Extra care and support | Everything in Gold · Profile quality review · Translation (planned) |

Note under the cards (one time, required lines kept): Planned pricing, not checkout. No card or charge. Matching starts in the app. Interest buttons open a plan-interest email only… (full legal sentence kept in small print).

Prices: copied unchanged from the live site (`src/components/sections/Membership.tsx`, added in commit db231f1, Nov 2025). No matching prices exist in PM_App or `config/stripe.ts`, so Duane should confirm them.

Decision for Duane: one name for the top tier ("VIP" proposed; the site says "Platinum" and "VIP" today).

### FAQ (`#faq`): the honest details live here
Headline: **Questions before you join**
1. **Is PinayMate live yet?** Not yet. It opens in stages. Join the waitlist to hear first when it opens on your phone.
2. **What do I share when I join?** Only your email and whether you use iPhone or Android. Nothing else.
3. **Can I pay or make a profile today?** No. Profiles, matching and payments happen inside the app once it opens. *(full required boundary sentence kept here)*
4. **How does profile review work?** You complete a private review step in the app. Uploading something does not approve a profile automatically.
5. **How do I reach support?** Email support for waitlist, access or verification questions. *(required support and sensitive-data sentences kept here)*

### Waitlist (`#download`): the action, then what happens next
Headline: **Be first when PinayMate opens on your phone**
Line: Share your email and phone type. That's all we need.
Form: unchanged (labels, validation, live regions, consent text).
What happens next: 1. You're on the list. 2. We email you when your platform opens. 3. You create your profile in the app.
Fine print (required lines, once): platform-only waitlist message, no account/profile/match/checkout/payment created, store links shared through the waitlist.

### Footer
One line: **PinayMate: Filipino-first dating for serious relationships.** Privacy · Terms · Support email · Legal email.

## Check
The new copy (this plan and the mockup text) was run against the 26 forbidden-claim patterns in `scripts/check-launch-claims.mjs` and `scripts/check-client-facing-copy.mjs`: 0 hits. The required-marker checks run on the real source, so they are checked when the copy is built in.
