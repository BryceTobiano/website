# Personal Website

This project is a Next.js App Router personal site built from the shared Figma design system and landing page.

## Project Structure

- `app/`
  - App Router entrypoints, metadata, and global theme tokens
- `components/layout/`
  - page shell, sidebar navigation, width wrappers, and footer
- `components/sections/`
  - landing-page sections such as hero and selected work
- `components/ui/`
  - reusable primitives like buttons, badges, project cards, and section headings
- `lib/site-content.ts`
  - editable content for hero copy, nav groups, projects, and footer text
- `styles/`
  - CSS Modules for layout, sections, and reusable UI

## Design System Encoding

The Figma design language is encoded with CSS custom properties in [app/globals.css](/Users/bryce/Documents/Repos/website/app/globals.css):

- color palette
- spacing and container widths
- border radii
- shadows
- transition timing
- font variables loaded through `next/font`

Typography maps to:

- `Inter` for headings
- `Work Sans` for body copy
- `IBM Plex Mono` for labels and supporting UI

## Where To Edit Content

- hero copy, project cards, sidebar links, and footer text:
  [lib/site-content.ts](/Users/bryce/Documents/Repos/website/lib/site-content.ts)

## Where To Edit Styling

- global tokens and base theme:
  [app/globals.css](/Users/bryce/Documents/Repos/website/app/globals.css)
- section-specific styling:
  `styles/sections/`
- layout and primitive styling:
  `styles/layout/` and `styles/ui/`

## Notes

- Resume and LinkedIn links are still marked as TODO placeholders in
  [lib/site-content.ts](/Users/bryce/Documents/Repos/website/lib/site-content.ts).
- The existing favicon is still the starter placeholder and should be replaced when final brand assets are ready.
