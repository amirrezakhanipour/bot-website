# Phase 2 — Home Page UI Specification

Status: **Authorized for implementation**

Phase 1 is complete. This document defines the complete scope for Phase 2 only.

## 1. Goal

Build a premium, production-quality public Home Page for the Trading Bot sales website.

The page should establish:

- product clarity;
- trust and transparency;
- strong visual quality;
- clear product differentiation;
- obvious paths toward viewing the bot, reviewing performance, and buying later;
- responsible trading-risk communication.

Phase 2 is UI only. It must not turn into a backend/integration phase.

## 2. Visual Direction

Overall direction: **premium dark fintech / trading infrastructure**, not a crypto casino aesthetic.

The page should feel:

- technical;
- restrained;
- sophisticated;
- credible;
- modern;
- high-value;
- readable on mobile.

Avoid:

- neon overload;
- fake luxury visuals;
- excessive gradients;
- flashing animations;
- fake broker/exchange branding;
- fake testimonials;
- fake awards;
- promises such as “guaranteed profit”, “safe income”, “zero risk”, or “always profitable”.

Recommended visual language:

- deep neutral background;
- subtle grid/noise/light effects using CSS only where useful;
- strong typography and spacing;
- thin borders;
- restrained glass/translucent surfaces;
- one restrained accent treatment;
- generous whitespace;
- small motion only when it improves comprehension.

Do not add an animation library unless genuinely necessary. Prefer CSS transitions and transforms.

## 3. Home Page Information Architecture

Implement the sections below in this order.

### A. Header / Navigation

Requirements:

- simple wordmark/product mark using text or CSS; no invented external logo;
- sticky or visually persistent header is acceptable;
- desktop navigation;
- mobile navigation;
- anchor links for relevant Home sections;
- future product-page links may be shown if useful, but do not implement those pages in Phase 2;
- prominent purchase-oriented CTA may exist visually but must not implement checkout logic.

Suggested navigation:

- Overview
- Live Bot
- Performance
- Features
- How It Works
- Pricing
- FAQ

### B. Hero

Purpose: explain the product in one screen.

Suggested messaging direction:

Eyebrow:
`Automated MT5 Trade Execution`

Headline direction:
`Execute trading signals with disciplined risk controls.`

Supporting message should communicate that the bot converts incoming trading signals into structured MT5 execution with position sizing, multiple take-profits, break-even handling, duplicate protection, expiration logic, and risk limits.

Do not imply that the website/bot guarantees profitable trades.

Primary CTA:
- scroll to Live Bot section;

Secondary CTA:
- scroll to Performance section or Product Features.

Include short risk microcopy near the CTA such as:
`Trading involves substantial risk. Historical results do not guarantee future performance.`

Hero visual:

Build a custom CSS/HTML terminal-inspired product visual rather than relying on stock imagery.

It may visually represent:

- MT5-style execution window;
- signal lifecycle;
- multiple TP levels;
- risk-control indicators;
- terminal/grid/chart styling.

Do not display fabricated profit, balance, equity, win rate, or account values.

Decorative chart/candle geometry may be used only if it is clearly non-data UI decoration and contains no misleading performance values.

### C. Trust / Product Principles Strip

A compact trust section emphasizing factual principles, for example:

- MT5 Execution
- Structured Risk Controls
- Multi-TP Management
- Duplicate Protection
- Transparent Performance History

Do not use claims such as “institutional grade” unless later supported.

### D. 24/7 Live Bot Section — UI Shell Only

This section must exist visually on Home because it is a central product feature.

In Phase 2:

- create the final responsive container/frame where the stream will live;
- create appropriate title, description, status treatment, and frame chrome;
- clearly indicate that the live stream is not connected in the current implementation;
- use a neutral `Stream integration pending` / `Live view connection will be enabled separately` style state.

Do NOT:

- stream anything;
- access VPS;
- embed a remote desktop;
- add credentials;
- implement OBS/WebRTC/HLS/VNC/RDP/iframe streaming logic.

Actual streaming belongs to Phase 3.

### E. Performance Section — UI Shell Only

Create a polished Performance section designed to display admin-managed metrics later.

Metric presentation should be expandable and component-based.

Initial labels include:

- Total Profit
- Monthly Profit
- Profit Factor
- Recovery Factor
- Maximum Drawdown
- Win Rate
- Total Trades
- Winning Trades
- Losing Trades
- Average Win
- Average Loss
- Average Risk/Reward

Phase 2 rules:

- do not connect to Supabase;
- do not fetch real values;
- do not invent example performance numbers;
- show `—`, `Not published yet`, or a clearly empty state where a value would appear.

The design should make it easy for Phase 4 to replace the empty value with real data.

### F. Monthly Performance / Historical Results — UI Shell Only

Create the final visual section/container for monthly results.

It should support later display of:

- Month
- Return %
- Profit/Loss
- Number of Trades
- Drawdown

The UI must visibly support both positive and negative months.

Do not draw fake monthly return bars or fake profit curves.

For Phase 2, use an honest empty state inside the chart/result container.

### G. Core Features

Present the bot’s actual product capabilities without adding unsupported claims.

Use these feature topics:

1. Signal Execution
2. Risk Management
3. Multi Take-Profit Execution
4. Break-Even Management
5. Position Sizing
6. Duplicate Protection
7. Signal Expiration
8. Risk Limits

Short copy should be factual and product-oriented.

Do not expose implementation secrets or licensing internals.

### H. How It Works

Use a simple 4-step or 5-step visual flow.

Recommended flow:

1. Trading signal is received by the existing system.
2. Bot validates the signal and execution conditions.
3. Risk/position sizing and TP structure are prepared.
4. Orders are executed and managed in MT5.
5. Risk-management rules continue to manage the position.

This section describes the product, not the website purchase flow.

### I. Transparency / Why This Product Exists

Create a small trust-focused section communicating principles such as:

- results should be shown with losing months included;
- performance is not guaranteed;
- rules-based execution reduces manual execution inconsistency;
- research and references will be documented on a dedicated Research page.

Avoid marketing hype.

### J. Pricing — UI Shell Only

MVP design should support one main plan:

`Monthly Bot Subscription`

Do not invent a price if one has not been entered by the admin.

In Phase 2:

- show a polished pricing card;
- use `Price available at checkout` or another transparent placeholder if no authoritative price is available;
- show included product access/features;
- CTA may visually point toward purchase, but must not implement registration, checkout, or payment logic.

The component should be easy to expand later to 1/3/6/12-month plans.

### K. FAQ

Implement an accessible FAQ/accordion.

Suggested questions:

- What does the Trading Bot do?
- Does the bot guarantee profit?
- Can I watch the bot live?
- Which platform does it use?
- How is risk managed?
- What information is required to activate my subscription?
- Do you need my MT5 master password?
- How does activation work after purchase?

Important answer requirement:

The website must explicitly state that the customer’s MT5 master password is neither requested nor stored.

### L. Final CTA

A strong closing CTA that positions the next action as reviewing the bot / starting the purchase process later.

No purchase flow implementation in Phase 2.

### M. Risk Warning / Footer

The Home Page must contain an unmissable but visually balanced trading-risk notice.

Minimum concepts:

- leveraged trading involves substantial risk;
- losses are possible;
- historical performance does not guarantee future results;
- no displayed information should be treated as a promise of profit.

Footer should provide placeholders/navigation for:

- Robot Presentation
- Research
- Installation Guide
- Terms
- Risk Disclosure
- Privacy

Do not implement these pages during Phase 2.

## 4. Component Architecture

Keep `src/app/page.tsx` clean and composed from reusable marketing components.

Recommended structure:

```text
src/components/marketing/
  site-header.tsx
  hero-section.tsx
  live-bot-section.tsx
  performance-section.tsx
  monthly-performance-section.tsx
  features-section.tsx
  how-it-works-section.tsx
  transparency-section.tsx
  pricing-section.tsx
  faq-section.tsx
  final-cta-section.tsx
  site-footer.tsx

src/components/shared/
  section-heading.tsx
  metric-card.tsx
  status-badge.tsx
```

This is a recommendation, not a requirement to create empty abstraction layers. Keep abstractions useful.

## 5. Data Boundary for Phase 2

The Home UI should use locally defined presentation models only where necessary.

Do NOT query Supabase in this phase.

Performance values must not be fabricated.

Prefer structures such as:

```ts
{
  label: 'Profit Factor',
  value: null
}
```

and render an honest empty state.

Phase 4 will connect these presentation components to the database.

## 6. Responsive Requirements

The design must work at minimum at approximately:

- 375px mobile width;
- 768px tablet width;
- 1280px desktop width;
- large desktop screens without excessively stretched content.

Use sensible max-width containers.

No horizontal overflow.

Hero, performance cards, pricing, FAQ, and Live Bot shell must remain usable on mobile.

## 7. Accessibility

Required:

- semantic headings;
- only one primary `h1`;
- visible keyboard focus states;
- buttons/links with meaningful labels;
- FAQ controls keyboard accessible;
- adequate color contrast;
- reduced-motion-friendly behavior;
- decorative elements hidden from assistive technology where appropriate.

## 8. Performance

- Prefer Server Components.
- Keep JavaScript shipped to the browser low.
- Client Components only for genuine interaction such as the mobile menu/FAQ if needed.
- Do not add heavy charting libraries in Phase 2 because no real chart data is being rendered yet.
- Do not add a UI framework simply to build this page.
- Avoid large external images and remote asset dependencies.

## 9. SEO / Metadata

Set sensible Home metadata without making unsupported claims.

Use a factual title/description such as:

- Title: `Trading Bot | Automated MT5 Trade Execution`
- Description: concise explanation of automated MT5 signal execution and risk-management features.

Do not claim guaranteed profitability.

## 10. Explicitly Out of Scope

Do not implement:

- actual Live Bot stream;
- Supabase performance reads;
- admin performance editing;
- monthly-performance data reads;
- authentication;
- register/login flows;
- checkout;
- payment provider integration;
- order creation;
- Client Dashboard access;
- automatic licensing;
- Robot Presentation page;
- Research page;
- Installation Guide page;
- legal page content;
- Vercel production deployment.

## 11. Completion Criteria

Phase 2 is complete only when:

1. Home Page looks production-quality on desktop and mobile.
2. All specified Home sections are present.
3. No fabricated performance data is shown.
4. No unsupported trust claims are introduced.
5. Live Bot and Performance integration boundaries are visually ready but remain unimplemented.
6. FAQ interaction is accessible.
7. Risk warning is clearly visible.
8. Existing Phase 1 architecture/security is not broken.
9. `npm run lint` passes.
10. `npm run build` passes.
11. Visual verification is performed at desktop and mobile widths.
12. Changes are committed only to `phase/2-home-ui` and pushed.
13. Work stops after Phase 2 pending explicit authorization for Phase 3.
