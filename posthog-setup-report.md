<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into pankajghosh.in. The project already had partial PostHog instrumentation in place — `posthog-js` was installed, `instrumentation-client.ts` was configured, and the reverse proxy was set up in `next.config.ts`. The wizard activated the environment variables (which were commented out in `.env.local`), added a new `craft_code_viewed` event to `components/crafts/index.tsx`, and built a PostHog dashboard with five insights covering key portfolio interactions.

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | User clicks a social link (X/Twitter, LinkedIn, or email) in the hero section | `components/social-link.tsx` |
| `theme_changed` | User changes the color theme (light, dark, or system) | `components/mode-toggle.tsx` |
| `project_link_clicked` | User clicks on a project card to view a live project | `components/projects/index.tsx` |
| `font_changed` | User changes the site font preference | `components/settings/font-button.tsx` |
| `craft_code_viewed` | User clicks the GitHub link to view source code for a craft component | `components/crafts/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1595502)
- [Total user interactions over time](/insights/ZGPYTTa2)
- [Social link clicks (by platform)](/insights/EkgF02dB)
- [Project link clicks (by project)](/insights/J1W5f1pC)
- [Theme preferences (by theme)](/insights/DceEcyW7)
- [Content engagement — outbound clicks](/insights/cYFnKgvX)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
