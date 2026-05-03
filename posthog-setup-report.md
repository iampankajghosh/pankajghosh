<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Next.js App Router portfolio site. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initializes PostHog on the client side using the `instrumentation-client` pattern recommended for Next.js 15.3+. Includes exception capture, debug mode in development, and routing through the reverse proxy.
- **`next.config.ts`**: Added reverse proxy rewrites so PostHog requests route through `/ingest` — reducing the chance of ad blockers interfering with analytics. Also added `skipTrailingSlashRedirect: true`.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` set (covered by `.gitignore`).
- **`components/footer/index.tsx`**: Converted to a client component; added `social_link_clicked` capture on each social icon link.
- **`components/projects/card.tsx`**: Added `project_link_clicked` capture when a project card is clicked. Added `title` prop to carry the project name into the event.
- **`components/projects/index.tsx`**: Passes `title` prop to `<Card>`.
- **`components/settings/mode-toggle.tsx`**: Added `theme_changed` capture (with current and previous theme) when a theme button is clicked.
- **`components/settings/font-toggle.tsx`**: Refactored to use a new `FontButton` client component so the Server Component can still read cookies while the button gains client-side click tracking.
- **`components/settings/font-button.tsx`** (new): Client component wrapping the font selector button with `font_changed` capture.
- **`components/settings/index.tsx`**: Added `settings_opened` capture with a `trigger` property (`"button"` or `"keyboard_shortcut"`) for both the gear icon and the `Ctrl/Cmd+,` shortcut.
- **`components/accordion.tsx`**: Added `experience_expanded` capture (with optional `label` prop) when an accordion is opened — only fires on expand, not collapse.
- **`components/experience/index.tsx`**: Passes `exp.company` as the `label` prop to `<AccordionTrigger>`.
- **`components/stack/index.tsx`**: Converted to a client component; added `stack_tech_link_clicked` capture with `tech_name` and `url` on each stack pill click.

## Events

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | Visitor clicks a social link (LinkedIn, GitHub, X, Email) in the footer | `components/footer/index.tsx` |
| `project_link_clicked` | Visitor clicks a project card to open the live project | `components/projects/card.tsx` |
| `theme_changed` | Visitor switches between light, dark, or system theme | `components/settings/mode-toggle.tsx` |
| `font_changed` | Visitor changes the font style preference | `components/settings/font-button.tsx` |
| `settings_opened` | Visitor opens the settings panel (button or keyboard shortcut) | `components/settings/index.tsx` |
| `experience_expanded` | Visitor expands an experience accordion to read details | `components/accordion.tsx` |
| `stack_tech_link_clicked` | Visitor clicks on a technology in the Stack section | `components/stack/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/408002/dashboard/1539185
- **Social link clicks by platform**: https://us.posthog.com/project/408002/insights/dPjSesGs
- **Project clicks by project**: https://us.posthog.com/project/408002/insights/PJFUULHk
- **Portfolio engagement overview**: https://us.posthog.com/project/408002/insights/RssQUIzT
- **Experience expansions by company**: https://us.posthog.com/project/408002/insights/THyabP2V
- **Settings & customization usage**: https://us.posthog.com/project/408002/insights/slrQ29LO

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
